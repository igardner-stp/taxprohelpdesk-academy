"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { getSessionUser } from "@/lib/auth";
import { maybeIssueCertificate } from "@/lib/data/certificate";
import type { QuizQuestion, QuizGradeResult } from "@/lib/types";

// ---------------------------------------------------------------------------
// Learner progress actions. All run as the signed-in user (RLS-scoped). A
// learner can only write their OWN lesson_progress / certificates.
// ---------------------------------------------------------------------------

export interface CompleteResult {
  ok?: boolean;
  error?: string;
  certificateIssued?: boolean;
}

// Mark a (non-quiz) lesson complete, then issue a track certificate if this
// finished the track.
export async function markLessonComplete(
  lessonId: string,
  trackId: string
): Promise<CompleteResult> {
  const session = await getSessionUser();
  if (!session?.profile) return { error: "Not signed in." };
  const userId = session.authUser.id;
  const supabase = createClient();

  const { error } = await supabase.from("lesson_progress").upsert(
    {
      user_id: userId,
      lesson_id: lessonId,
      completed: true,
      completed_at: new Date().toISOString(),
    },
    { onConflict: "user_id,lesson_id" }
  );
  if (error) {
    console.error("[learn] markLessonComplete", error);
    return { error: "Could not save your progress. Please try again." };
  }

  const certificateIssued = await maybeIssueCertificate(supabase, userId, trackId);

  revalidatePath(`/learn/${trackId}`);
  revalidatePath("/learn");
  return { ok: true, certificateIssued };
}

// Grade a quiz server-side (the client never receives correct answers until
// after submit). On pass, marks the lesson complete + records the score and
// issues a certificate if the track is now finished.
export async function submitQuiz(
  lessonId: string,
  trackId: string,
  answers: number[]
): Promise<QuizGradeResult> {
  const session = await getSessionUser();
  if (!session?.profile) return { error: "Not signed in." };
  const userId = session.authUser.id;
  const supabase = createClient();

  const { data: quiz, error: quizErr } = await supabase
    .from("quizzes")
    .select("questions, pass_threshold")
    .eq("lesson_id", lessonId)
    .single();

  if (quizErr || !quiz) {
    return { error: "Quiz not found." };
  }

  const questions = (quiz.questions as QuizQuestion[]) ?? [];
  if (questions.length === 0) return { error: "This quiz has no questions." };

  let correct = 0;
  const feedback = questions.map((question, i) => {
    const chosen = answers[i];
    const isCorrect = chosen === question.correct_index;
    if (isCorrect) correct += 1;
    return {
      correct_index: question.correct_index,
      chosen_index: typeof chosen === "number" ? chosen : -1,
      correct: isCorrect,
      explanation: question.explanation,
    };
  });

  const score = Math.round((correct / questions.length) * 100);
  const passThreshold = quiz.pass_threshold as number;
  const passed = score >= passThreshold;

  const { error: progErr } = await supabase.from("lesson_progress").upsert(
    {
      user_id: userId,
      lesson_id: lessonId,
      completed: passed,
      quiz_score: score,
      completed_at: passed ? new Date().toISOString() : null,
    },
    { onConflict: "user_id,lesson_id" }
  );
  if (progErr) {
    console.error("[learn] submitQuiz progress", progErr);
    return { error: "We graded your quiz but couldn't save it. Please retry." };
  }

  if (passed) {
    await maybeIssueCertificate(supabase, userId, trackId);
    revalidatePath(`/learn/${trackId}`);
    revalidatePath("/learn");
  }

  return { ok: true, passed, score, passThreshold, feedback };
}
