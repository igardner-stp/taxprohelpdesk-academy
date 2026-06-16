import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getSessionUser } from "@/lib/auth";
import { getDownlineReport } from "@/lib/data/bureau";
import { ProgressBar } from "@/components/ProgressBar";

function timeAgo(iso: string | null): string {
  if (!iso) return "No activity yet";
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days} days ago`;
  if (days < 60) return "Last month";
  return `${Math.floor(days / 30)} months ago`;
}

export default async function OfficesPage() {
  const session = await getSessionUser();
  const supabase = createClient();
  const report = await getDownlineReport(supabase, session!.authUser.id);

  return (
    <div>
      <Link href="/bureau" className="text-sm font-medium text-brand-600 hover:underline">
        ← Overview
      </Link>
      <h1 className="mt-3 text-2xl sm:text-3xl">My Offices</h1>
      <p className="mt-1 text-navy-600">
        Training progress for the EROs linked to your bureau. This view is
        read-only.
      </p>

      {report.offices.length === 0 ? (
        <div className="panel mt-8 p-8 text-center text-navy-600">
          No offices are linked to your bureau yet.
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {report.offices.map((office) => (
            <div key={office.user.id} className="panel p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-navy-900">
                    {office.user.full_name || office.user.email}
                  </p>
                  <p className="text-sm text-navy-500">{office.user.email}</p>
                </div>
                <div className="text-right text-sm">
                  <p className="text-navy-500">Last activity</p>
                  <p className="font-medium text-navy-800">{timeAgo(office.lastActivity)}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {office.tracks.length === 0 ? (
                  <p className="text-sm text-navy-500">No tracks assigned.</p>
                ) : (
                  office.tracks.map((t) => (
                    <div key={t.trackId}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="font-medium text-navy-700">{t.trackName}</span>
                        <span className="flex items-center gap-2 text-navy-500">
                          {t.certified && (
                            <span className="badge bg-green-50 text-status-green">Certified</span>
                          )}
                          {t.percent}%
                        </span>
                      </div>
                      <ProgressBar percent={t.percent} />
                      <p className="mt-1 text-xs text-navy-500">
                        {t.completedLessons} / {t.totalLessons} lessons
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
