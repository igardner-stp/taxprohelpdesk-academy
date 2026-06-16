import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { ProfileRow, BureauRow, TrackRow, CertificateRow } from "@/lib/types";
import { getAssignedTracks } from "@/lib/data/content";
import { getTrackProgress } from "@/lib/data/progress";
import { ProgressBar } from "@/components/ProgressBar";
import { BureauFilter } from "@/components/admin/BureauFilter";
import type { TrackProgress } from "@/lib/types";

interface PageProps {
  searchParams: { bureau?: string };
}

interface UserReport {
  profile: ProfileRow;
  bureauName: string | null;
  progress: TrackProgress[];
  certificates: CertificateRow[];
}

interface TrackDistribution {
  track: TrackRow;
  at0: number;
  in_progress: number;
  complete: number;
}

export default async function AdminReportsPage({ searchParams }: PageProps) {
  const supabase = createClient();
  const bureauFilter = searchParams.bureau ?? "";

  const [{ data: allProfilesRaw }, { data: bureausRaw }, { data: tracksRaw }, { data: allCertsRaw }] =
    await Promise.all([
      supabase.from("profiles").select("*").order("full_name"),
      supabase.from("bureaus").select("*").order("name"),
      supabase.from("tracks").select("*").order("order_index"),
      supabase.from("certificates").select("*"),
    ]);

  const allProfiles = (allProfilesRaw as ProfileRow[]) ?? [];
  const bureaus = (bureausRaw as BureauRow[]) ?? [];
  const tracks = (tracksRaw as TrackRow[]) ?? [];
  const allCerts = (allCertsRaw as CertificateRow[]) ?? [];

  const bureauMap = new Map(bureaus.map((b) => [b.id, b.name]));

  // Filter profiles by bureau if ?bureau= param is set.
  const filteredProfiles = bureauFilter
    ? allProfiles.filter((p) => p.bureau_id === bureauFilter)
    : allProfiles;

  // Build cert lookup per user.
  const certsByUser = new Map<string, CertificateRow[]>();
  for (const c of allCerts) {
    const arr = certsByUser.get(c.user_id) ?? [];
    arr.push(c);
    certsByUser.set(c.user_id, arr);
  }

  // Compute per-user progress (sequential; dataset is small).
  const userReports: UserReport[] = [];
  for (const profile of filteredProfiles) {
    const assignedTracks = await getAssignedTracks(supabase, profile.id);
    const progress = await getTrackProgress(supabase, profile.id, {
      tracks: assignedTracks,
    });
    userReports.push({
      profile,
      bureauName: profile.bureau_id ? (bureauMap.get(profile.bureau_id) ?? null) : null,
      progress,
      certificates: certsByUser.get(profile.id) ?? [],
    });
  }

  // Per-track distribution across filtered users.
  const trackDistributions: TrackDistribution[] = tracks.map((track) => {
    let at0 = 0, in_progress = 0, complete = 0;
    for (const ur of userReports) {
      const tp = ur.progress.find((p) => p.trackId === track.id);
      if (!tp) continue;
      if (tp.percent === 0) at0++;
      else if (tp.percent === 100) complete++;
      else in_progress++;
    }
    return { track, at0, in_progress, complete };
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl text-navy-900">Progress Reports</h1>
          <p className="mt-1 text-sm text-navy-500">
            Completion data across all users and tracks.
          </p>
        </div>

        <BureauFilter bureaus={bureaus} currentBureauId={bureauFilter} />
      </div>

      {bureauFilter && (
        <div className="flex items-center gap-2">
          <span className="text-sm text-navy-600">
            Showing: <strong>{bureauMap.get(bureauFilter) ?? "Unknown bureau"}</strong>
          </span>
          <Link href="/admin/reports" className="text-xs text-brand-600 hover:text-brand-700">
            Clear filter
          </Link>
        </div>
      )}

      {/* Per-track distribution summary */}
      {tracks.length > 0 && (
        <div className="panel p-6">
          <h2 className="mb-4 text-base font-semibold text-navy-800">
            Track Completion Distribution
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trackDistributions.map(({ track, at0, in_progress, complete }) => {
              const total = at0 + in_progress + complete;
              return (
                <div key={track.id} className="rounded-xl border border-surface-200 p-4">
                  <p className="font-semibold text-navy-900">{track.name}</p>
                  <p className="mt-1 text-xs text-navy-400">
                    {total} assigned user{total !== 1 ? "s" : ""}
                  </p>
                  <div className="mt-3 space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-navy-600">Not started (0%)</span>
                      <span className="font-semibold text-navy-800">{at0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy-600">In progress</span>
                      <span className="font-semibold text-status-amber">{in_progress}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy-600">Complete (100%)</span>
                      <span className="font-semibold text-status-green">{complete}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Per-user table */}
      <div className="panel overflow-hidden">
        <div className="border-b border-surface-200 px-6 py-4">
          <h2 className="text-base font-semibold text-navy-800">
            User Progress
            {bureauFilter && (
              <span className="ml-2 text-sm font-normal text-navy-500">
                — {bureauMap.get(bureauFilter) ?? ""}
              </span>
            )}
          </h2>
        </div>

        {userReports.length === 0 ? (
          <p className="px-6 py-8 text-center text-sm text-navy-500">
            No users found{bureauFilter ? " in this bureau" : ""}.
          </p>
        ) : (
          <ul className="divide-y divide-surface-200">
            {userReports.map(({ profile, bureauName, progress, certificates }) => (
              <li key={profile.id} className="px-6 py-5">
                <div className="flex flex-wrap items-start gap-4">
                  {/* Identity */}
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-navy-900">
                      {profile.full_name || (
                        <span className="italic text-navy-400">No name</span>
                      )}
                    </p>
                    <p className="text-sm text-navy-500">{profile.email}</p>
                    {bureauName && (
                      <p className="mt-0.5 text-xs text-navy-400">{bureauName}</p>
                    )}
                  </div>

                  {/* Track progress */}
                  <div className="min-w-[200px] flex-1 space-y-3">
                    {progress.length === 0 ? (
                      <p className="text-sm italic text-navy-400">
                        No tracks assigned
                      </p>
                    ) : (
                      progress.map((tp) => (
                        <div key={tp.trackId}>
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span className="font-medium text-navy-700">
                              {tp.trackName}
                            </span>
                            {tp.certified && (
                              <span className="badge bg-status-green/10 text-status-green">
                                Certified
                              </span>
                            )}
                          </div>
                          <ProgressBar percent={tp.percent} showLabel />
                          <p className="mt-0.5 text-xs text-navy-400">
                            {tp.completedLessons}/{tp.totalLessons} lessons
                          </p>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Certificate count */}
                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">
                      Certs
                    </p>
                    <p className="mt-1 text-2xl font-bold text-navy-900">
                      {certificates.length}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
