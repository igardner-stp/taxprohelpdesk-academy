import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getSessionUser } from "@/lib/auth";
import { getAssignedTracks } from "@/lib/data/content";
import { getTrackProgress, getResumeLesson } from "@/lib/data/progress";
import { ProgressBar } from "@/components/ProgressBar";
import { SUPPORT_PHONE, SUPPORT_PHONE_HREF } from "@/lib/constants";

// Learner dashboard: assigned tracks, progress, resume / certificate links.
export default async function LearnDashboard() {
  const session = await getSessionUser();
  const userId = session!.authUser.id;
  const supabase = createClient();

  const tracks = await getAssignedTracks(supabase, userId);
  const progress = await getTrackProgress(supabase, userId, { tracks });
  const progressById = new Map(progress.map((p) => [p.trackId, p]));

  // Resume target per track (first incomplete lesson).
  const resume = new Map<string, { moduleId: string; lessonId: string } | null>();
  for (const t of tracks) {
    resume.set(t.id, await getResumeLesson(supabase, userId, t.id));
  }

  const firstName = (session?.profile?.full_name || "").split(" ")[0];

  return (
    <div className="layout-px mx-auto w-full max-w-5xl py-8">
      <h1 className="text-2xl sm:text-3xl">
        {firstName ? `Welcome back, ${firstName}` : "Welcome back"}
      </h1>
      <p className="mt-1 text-navy-600">Pick up where you left off.</p>

      {tracks.length === 0 ? (
        <div className="panel mt-8 p-8 text-center">
          <p className="text-lg font-medium text-navy-800">No training assigned yet</p>
          <p className="mx-auto mt-2 max-w-md text-navy-600">
            Your account doesn&apos;t have any training tracks assigned. Reach out to
            your administrator, or call us at{" "}
            <a href={SUPPORT_PHONE_HREF} className="font-semibold text-brand-600">
              {SUPPORT_PHONE}
            </a>
            .
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {tracks.map((track) => {
            const p = progressById.get(track.id);
            const percent = p?.percent ?? 0;
            const r = resume.get(track.id);
            const done = percent === 100;
            return (
              <div key={track.id} className="panel card-hover flex flex-col p-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg">{track.name}</h2>
                    {done && (
                      <span className="badge bg-green-50 text-status-green">Certified</span>
                    )}
                  </div>
                  {track.description && (
                    <p className="mt-2 text-sm text-navy-600">{track.description}</p>
                  )}
                  <div className="mt-5">
                    <div className="mb-1 flex justify-between text-sm font-medium text-navy-600">
                      <span>{p?.completedLessons ?? 0} / {p?.totalLessons ?? 0} lessons</span>
                      <span>{percent}%</span>
                    </div>
                    <ProgressBar percent={percent} />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {done ? (
                    <>
                      <Link href={`/learn/${track.id}`} className="btn-ghost">
                        Review track
                      </Link>
                      <Link href={`/learn/${track.id}/certificate`} className="btn-primary">
                        View certificate
                      </Link>
                    </>
                  ) : r ? (
                    <>
                      <Link
                        href={`/learn/${track.id}/${r.moduleId}/${r.lessonId}`}
                        className="btn-primary"
                      >
                        {percent === 0 ? "Start track" : "Continue"}
                      </Link>
                      <Link href={`/learn/${track.id}`} className="btn-ghost">
                        View all lessons
                      </Link>
                    </>
                  ) : (
                    <Link href={`/learn/${track.id}`} className="btn-primary">
                      View track
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
