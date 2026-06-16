import type { SupabaseClient } from "@supabase/supabase-js";
import type { ProfileRow, TrackProgress } from "@/lib/types";
import { getAssignedTracks } from "@/lib/data/content";
import { getTrackProgress } from "@/lib/data/progress";

export interface OfficeReport {
  user: ProfileRow;
  bureauName: string;
  tracks: TrackProgress[];
  lastActivity: string | null;
  certificateCount: number;
}

export interface DownlineReport {
  bureaus: { id: string; name: string }[];
  offices: OfficeReport[];
}

// Read-only report of a supervisor's downline EROs and their training progress.
// RLS already restricts what the supervisor can read to their own bureaus and
// the learners linked to them — this just shapes it.
export async function getDownlineReport(
  supabase: SupabaseClient,
  supervisorId: string
): Promise<DownlineReport> {
  const { data: bureauRows } = await supabase
    .from("bureaus")
    .select("id, name")
    .eq("supervisor_user_id", supervisorId);
  const bureaus = (bureauRows as { id: string; name: string }[]) ?? [];
  if (bureaus.length === 0) return { bureaus: [], offices: [] };

  const bureauName = new Map(bureaus.map((b) => [b.id, b.name]));
  const bureauIds = bureaus.map((b) => b.id);

  const { data: learnerRows } = await supabase
    .from("profiles")
    .select("*")
    .in("bureau_id", bureauIds)
    .order("full_name", { ascending: true });
  const learners = (learnerRows as ProfileRow[]) ?? [];
  if (learners.length === 0) return { bureaus, offices: [] };

  const learnerIds = learners.map((l) => l.id);

  // Batched: last activity + certificate counts across all downline learners.
  const { data: activity } = await supabase
    .from("lesson_progress")
    .select("user_id, completed_at")
    .in("user_id", learnerIds)
    .eq("completed", true);
  const lastByUser = new Map<string, string>();
  for (const a of (activity as { user_id: string; completed_at: string | null }[]) ?? []) {
    if (!a.completed_at) continue;
    const cur = lastByUser.get(a.user_id);
    if (!cur || a.completed_at > cur) lastByUser.set(a.user_id, a.completed_at);
  }

  const { data: certRows } = await supabase
    .from("certificates")
    .select("user_id")
    .in("user_id", learnerIds);
  const certCount = new Map<string, number>();
  for (const c of (certRows as { user_id: string }[]) ?? []) {
    certCount.set(c.user_id, (certCount.get(c.user_id) ?? 0) + 1);
  }

  // Per-learner track progress (small datasets — looping is fine).
  const offices: OfficeReport[] = [];
  for (const user of learners) {
    const tracks = await getAssignedTracks(supabase, user.id);
    const progress = await getTrackProgress(supabase, user.id, { tracks });
    offices.push({
      user,
      bureauName: bureauName.get(user.bureau_id ?? "") ?? "—",
      tracks: progress,
      lastActivity: lastByUser.get(user.id) ?? null,
      certificateCount: certCount.get(user.id) ?? 0,
    });
  }

  return { bureaus, offices };
}
