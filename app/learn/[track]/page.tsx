import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getSessionUser } from "@/lib/auth";
import { getAssignedTracks, getTrackOutline, getTrack } from "@/lib/data/content";
import {
  getTrackProgress,
  getCompletedLessonIds,
  getResumeLesson,
} from "@/lib/data/progress";
import { ProgressBar } from "@/components/ProgressBar";
import { CheckCircle } from "@/components/icons";

export default async function TrackOverviewPage({
  params,
}: {
  params: { track: string };
}) {
  const session = await getSessionUser();
  const userId = session!.authUser.id;
  const supabase = createClient();

  // Must be assigned to this track.
  const assigned = await getAssignedTracks(supabase, userId);
  const track = assigned.find((t) => t.id === params.track) ?? (await getTrack(supabase, params.track));
  if (!assigned.some((t) => t.id === params.track) || !track) {
    redirect("/learn");
  }

  const [outline, completed, [progress], resume] = await Promise.all([
    getTrackOutline(supabase, params.track),
    getCompletedLessonIds(supabase, userId),
    getTrackProgress(supabase, userId, { tracks: [track] }),
    getResumeLesson(supabase, userId, params.track),
  ]);

  const percent = progress?.percent ?? 0;
  const done = percent === 100 && (progress?.totalLessons ?? 0) > 0;

  return (
    <div className="layout-px mx-auto w-full max-w-4xl py-8">
      <Link href="/learn" className="text-sm font-medium text-brand-600 hover:underline">
        ← All training
      </Link>

      <div className="panel mt-4 p-6">
        <h1 className="text-2xl">{track.name}</h1>
        {track.description && <p className="mt-2 text-navy-600">{track.description}</p>}
        <div className="mt-5">
          <div className="mb-1 flex justify-between text-sm font-medium text-navy-600">
            <span>{progress?.completedLessons ?? 0} / {progress?.totalLessons ?? 0} lessons complete</span>
            <span>{percent}%</span>
          </div>
          <ProgressBar percent={percent} />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {done ? (
            <Link href={`/learn/${track.id}/certificate`} className="btn-primary">
              View your certificate
            </Link>
          ) : resume ? (
            <Link href={`/learn/${track.id}/${resume.moduleId}/${resume.lessonId}`} className="btn-primary">
              {percent === 0 ? "Start first lesson" : "Continue"}
            </Link>
          ) : null}
        </div>
      </div>

      {done && (
        <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-status-green">
          🎉 You&apos;ve completed this track. Your certificate is ready.
        </div>
      )}

      <div className="mt-8 space-y-6">
        {outline.map((module, mi) => {
          const moduleDone =
            module.lessons.length > 0 &&
            module.lessons.every((l) => completed.has(l.id));
          return (
            <div key={module.id} className="panel overflow-hidden">
              <div className="flex items-center justify-between gap-3 border-b border-surface-200 bg-surface-50 px-5 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">
                    Module {mi + 1}
                  </p>
                  <h2 className="text-base">{module.title}</h2>
                </div>
                {moduleDone && <CheckCircle className="h-5 w-5 text-status-green" />}
              </div>
              <ul className="divide-y divide-surface-200">
                {module.lessons.map((lesson, li) => {
                  const isDone = completed.has(lesson.id);
                  return (
                    <li key={lesson.id}>
                      <Link
                        href={`/learn/${track.id}/${module.id}/${lesson.id}`}
                        className="flex items-center gap-3 px-5 py-3 transition hover:bg-surface-50"
                      >
                        {isDone ? (
                          <CheckCircle className="h-5 w-5 shrink-0 text-status-green" />
                        ) : (
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-surface-300 text-[11px] text-navy-500">
                            {li + 1}
                          </span>
                        )}
                        <span className={`text-sm ${isDone ? "text-navy-500" : "text-navy-800"}`}>
                          {lesson.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
                {module.lessons.length === 0 && (
                  <li className="px-5 py-3 text-sm text-navy-500">No lessons yet.</li>
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
