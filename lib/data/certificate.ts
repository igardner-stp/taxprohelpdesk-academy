import type { SupabaseClient } from "@supabase/supabase-js";
import { getTrackProgress } from "@/lib/data/progress";
import { getTrack } from "@/lib/data/content";

// Issues a certificate if the user has completed 100% of a track. Idempotent
// (certificates has a unique(user_id, track_id); we ignore duplicates).
// Returns true if the track is now 100% complete (whether or not the row was
// freshly inserted). Runs as the passed client; RLS lets a user self-insert.
export async function maybeIssueCertificate(
  supabase: SupabaseClient,
  userId: string,
  trackId: string
): Promise<boolean> {
  const track = await getTrack(supabase, trackId);
  if (!track) return false;

  const [progress] = await getTrackProgress(supabase, userId, { tracks: [track] });
  if (!progress || progress.totalLessons === 0 || progress.percent < 100) {
    return false;
  }

  await supabase
    .from("certificates")
    .upsert(
      { user_id: userId, track_id: trackId },
      { onConflict: "user_id,track_id", ignoreDuplicates: true }
    );

  return true;
}
