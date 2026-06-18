import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getSessionUser } from "@/lib/auth";
import {
  getAssignedTracks,
  getTrackOutline,
  getSanitizedQuiz,
} from "@/lib/data/content";
import { getCompletedLessonIds } from "@/lib/data/progress";
import { LessonNav } from "@/components/learn/LessonNav";
import { LessonPlayer } from "@/components/learn/LessonPlayer";
import type { LessonRow } from "@/lib/types";

export default async function LessonPage({
  params,
}: {
  params: { track: string; module: string; lesson: string };
}) {
  const session = await getSessionUser();
  const userId = session!.authUser.id;
  const supabase = createClient();

  // Must be assigned to this track.
  const assigned = await getAssignedTracks(supabase, userId);
  if (!assigned.some((t) => t.id === params.track)) redirect("/learn");

  // RLS only returns the lesson if it's in an assigned track.
  const { data: lessonData } = await supabase
    .from("lessons")
    .select("id, module_id, title, body, video_url, image_urls, media_manifest")
    .eq("id", params.lesson)
    .maybeSingle();
  const lesson = lessonData as Pick<
    LessonRow,
    "id" | "module_id" | "title" | "body" | "video_url" | "image_urls" | "media_manifest"
  > | null;
  if (!lesson) notFound();

  const [outline, completed, quiz] = await Promise.all([
    getTrackOutline(supabase, params.track),
    getCompletedLessonIds(supabase, userId),
    getSanitizedQuiz(supabase, params.lesson),
  ]);

  // Flatten the ordered outline to compute prev/next.
  const sequence = outline.flatMap((m) =>
    m.lessons.map((l) => ({ moduleId: m.id, lessonId: l.id }))
  );
  const idx = sequence.findIndex((s) => s.lessonId === params.lesson);
  const prev = idx > 0 ? sequence[idx - 1] : null;
  const next = idx >= 0 && idx < sequence.length - 1 ? sequence[idx + 1] : null;

  const href = (s: { moduleId: string; lessonId: string }) =>
    `/learn/${params.track}/${s.moduleId}/${s.lessonId}`;

  return (
    <div className="layout-px mx-auto w-full max-w-6xl py-6">
      {/* Mobile module nav (collapsible) */}
      <details className="panel mb-5 p-4 lg:hidden">
        <summary className="cursor-pointer text-sm font-semibold text-navy-800">
          Lessons in this track
        </summary>
        <div className="mt-4">
          <LessonNav
            trackId={params.track}
            outline={outline}
            completed={completed}
            currentLessonId={params.lesson}
          />
        </div>
      </details>

      <div className="flex gap-8">
        <aside className="hidden w-72 shrink-0 lg:block">
          <div className="sticky top-20">
            <LessonNav
              trackId={params.track}
              outline={outline}
              completed={completed}
              currentLessonId={params.lesson}
            />
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <LessonPlayer
            lesson={lesson}
            quiz={quiz}
            trackId={params.track}
            initialCompleted={completed.has(lesson.id)}
            prevHref={prev ? href(prev) : null}
            nextHref={next ? href(next) : null}
            trackHref={`/learn/${params.track}`}
          />
        </div>
      </div>
    </div>
  );
}
