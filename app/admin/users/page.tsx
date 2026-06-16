import { createClient } from "@/lib/supabase/server";
import type { ProfileRow, BureauRow, TrackRow, UserTrackRow } from "@/lib/types";
import { CreateUserForm } from "@/components/admin/CreateUserForm";
import { UserRow } from "@/components/admin/UserRow";

export default async function AdminUsersPage() {
  const supabase = createClient();

  const [
    { data: profilesRaw },
    { data: bureausRaw },
    { data: tracksRaw },
    { data: userTracksRaw },
  ] = await Promise.all([
    supabase.from("profiles").select("*").order("created_at", { ascending: false }),
    supabase.from("bureaus").select("*").order("name"),
    supabase.from("tracks").select("*").order("order_index"),
    supabase.from("user_tracks").select("*"),
  ]);

  const profiles = (profilesRaw as ProfileRow[]) ?? [];
  const bureaus = (bureausRaw as BureauRow[]) ?? [];
  const tracks = (tracksRaw as TrackRow[]) ?? [];
  const userTracks = (userTracksRaw as UserTrackRow[]) ?? [];

  // Build lookup maps for quick rendering.
  const bureauMap = new Map(bureaus.map((b) => [b.id, b.name]));
  const tracksByUser = new Map<string, string[]>();
  for (const ut of userTracks) {
    const arr = tracksByUser.get(ut.user_id) ?? [];
    arr.push(ut.track_id);
    tracksByUser.set(ut.user_id, arr);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl text-navy-900">Users</h1>
          <p className="mt-1 text-sm text-navy-500">
            {profiles.length} account{profiles.length !== 1 ? "s" : ""} total
          </p>
        </div>
      </div>

      {/* Invite form */}
      <div className="panel p-6">
        <h2 className="mb-4 text-base font-semibold text-navy-800">
          Invite / Create User
        </h2>
        <CreateUserForm tracks={tracks} bureaus={bureaus} />
      </div>

      {/* User list */}
      <div className="panel overflow-hidden">
        <div className="border-b border-surface-200 px-6 py-4">
          <h2 className="text-base font-semibold text-navy-800">All Users</h2>
        </div>

        {profiles.length === 0 ? (
          <p className="px-6 py-8 text-center text-sm text-navy-500">
            No users yet. Invite your first user above.
          </p>
        ) : (
          <ul className="divide-y divide-surface-200">
            {profiles.map((profile) => (
              <UserRow
                key={profile.id}
                profile={profile}
                bureauName={
                  profile.bureau_id
                    ? (bureauMap.get(profile.bureau_id) ?? null)
                    : null
                }
                assignedTrackIds={tracksByUser.get(profile.id) ?? []}
                tracks={tracks}
                bureaus={bureaus}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
