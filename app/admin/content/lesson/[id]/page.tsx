import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { LessonRow, QuizRow } from "@/lib/types";
import { LessonEditor } from "@/components/admin/LessonEditor";

interface PageProps {
  params: { id: string };
}

export default async function LessonEditPage({ params }: PageProps) {
  const supabase = createClient();

  const [{ data: lessonRaw }, { data: quizRaw }] = await Promise.all([
    supabase.from("lessons").select("*").eq("id", params.id).single(),
    supabase.from("quizzes").select("*").eq("lesson_id", params.id).single(),
  ]);

  if (!lessonRaw) notFound();

  const lesson = lessonRaw as LessonRow;
  const quiz = (quizRaw as QuizRow) ?? null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href="/admin/content"
          className="text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          ← Back to Content
        </Link>
      </div>

      <div>
        <h1 className="text-2xl text-navy-900">Edit Lesson</h1>
        <p className="mt-1 text-sm text-navy-500">
          Lesson ID: <code className="rounded bg-surface-100 px-1.5 py-0.5 text-xs">{lesson.id}</code>
        </p>
      </div>

      <LessonEditor lesson={lesson} initialQuiz={quiz} />
    </div>
  );
}
