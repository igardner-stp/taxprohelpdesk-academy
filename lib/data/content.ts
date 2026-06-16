import type { SupabaseClient } from "@supabase/supabase-js";
import type {
  ModuleRow,
  LessonRow,
  TrackRow,
  SanitizedQuiz,
  QuizQuestion,
} from "@/lib/types";

// Shared content-fetch helpers. Each takes a Supabase client so the SAME code
// works under RLS (user context) or as admin — the caller decides the client.

export interface ModuleWithLessons extends ModuleRow {
  lessons: Pick<LessonRow, "id" | "title" | "order_index" | "tags">[];
}

// Ordered outline of a track: modules (ordered) each with their lessons (ordered).
// Returns only what the learner is allowed to see (RLS does the filtering).
export async function getTrackOutline(
  supabase: SupabaseClient,
  trackId: string
): Promise<ModuleWithLessons[]> {
  const { data: modules } = await supabase
    .from("modules")
    .select("*")
    .eq("track_id", trackId)
    .order("order_index", { ascending: true });

  if (!modules || modules.length === 0) return [];

  const moduleIds = (modules as ModuleRow[]).map((m) => m.id);
  const { data: lessons } = await supabase
    .from("lessons")
    .select("id, module_id, title, order_index, tags")
    .in("module_id", moduleIds)
    .order("order_index", { ascending: true });

  const byModule = new Map<string, ModuleWithLessons["lessons"]>();
  for (const l of (lessons as LessonRow[]) ?? []) {
    const arr = byModule.get(l.module_id) ?? [];
    arr.push({ id: l.id, title: l.title, order_index: l.order_index, tags: l.tags });
    byModule.set(l.module_id, arr);
  }

  return (modules as ModuleRow[]).map((m) => ({
    ...m,
    lessons: byModule.get(m.id) ?? [],
  }));
}

export async function getTrack(
  supabase: SupabaseClient,
  trackId: string
): Promise<TrackRow | null> {
  const { data } = await supabase
    .from("tracks")
    .select("*")
    .eq("id", trackId)
    .single();
  return (data as TrackRow) ?? null;
}

// A lesson's quiz with the answers (correct_index / explanation) stripped —
// safe to hand to the client. Returns null if the lesson has no quiz.
export async function getSanitizedQuiz(
  supabase: SupabaseClient,
  lessonId: string
): Promise<SanitizedQuiz | null> {
  const { data } = await supabase
    .from("quizzes")
    .select("id, lesson_id, questions, pass_threshold")
    .eq("lesson_id", lessonId)
    .maybeSingle();

  if (!data) return null;
  const questions = (data.questions as QuizQuestion[]) ?? [];
  if (questions.length === 0) return null;

  return {
    id: data.id as string,
    lesson_id: data.lesson_id as string,
    pass_threshold: data.pass_threshold as number,
    questions: questions.map((q) => ({ q: q.q, choices: q.choices })),
  };
}

// All track ids assigned to a user, ordered by the track's order_index.
export async function getAssignedTracks(
  supabase: SupabaseClient,
  userId: string
): Promise<TrackRow[]> {
  const { data } = await supabase
    .from("user_tracks")
    .select("track_id, tracks!inner(id, name, description, order_index)")
    .eq("user_id", userId);

  const rows =
    (data as { tracks: TrackRow }[] | null)?.map((r) => r.tracks) ?? [];
  return rows.sort((a, b) => a.order_index - b.order_index);
}
