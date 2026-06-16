import type { SupabaseClient } from "@supabase/supabase-js";
import type { TrackProgress, TrackRow } from "@/lib/types";

// ---------------------------------------------------------------------------
// Progress computation. Tracks are INDEPENDENT: each has its own lesson set,
// percent, and certificate. Completing one never affects another.
// All queries are RLS-scoped to whatever the passed client is allowed to read.
// ---------------------------------------------------------------------------

interface ProgressInput {
  tracks: TrackRow[]; // the tracks to report on (e.g. the user's assigned tracks)
}

// Per-track progress for a given user across the supplied tracks.
export async function getTrackProgress(
  supabase: SupabaseClient,
  userId: string,
  { tracks }: ProgressInput
): Promise<TrackProgress[]> {
  if (tracks.length === 0) return [];
  const trackIds = tracks.map((t) => t.id);

  // modules in these tracks
  const { data: modules } = await supabase
    .from("modules")
    .select("id, track_id")
    .in("track_id", trackIds);
  const moduleList = (modules as { id: string; track_id: string }[]) ?? [];
  const moduleToTrack = new Map(moduleList.map((m) => [m.id, m.track_id]));

  // lessons in those modules
  let lessonList: { id: string; module_id: string }[] = [];
  if (moduleList.length > 0) {
    const { data: lessons } = await supabase
      .from("lessons")
      .select("id, module_id")
      .in(
        "module_id",
        moduleList.map((m) => m.id)
      );
    lessonList = (lessons as { id: string; module_id: string }[]) ?? [];
  }
  const lessonToTrack = new Map(
    lessonList.map((l) => [l.id, moduleToTrack.get(l.module_id) ?? ""])
  );

  // completed progress for this user
  const { data: progress } = await supabase
    .from("lesson_progress")
    .select("lesson_id, completed")
    .eq("user_id", userId)
    .eq("completed", true);
  const completedLessonIds = new Set(
    ((progress as { lesson_id: string }[]) ?? []).map((p) => p.lesson_id)
  );

  // certificates for this user
  const { data: certs } = await supabase
    .from("certificates")
    .select("track_id")
    .eq("user_id", userId);
  const certifiedTracks = new Set(
    ((certs as { track_id: string }[]) ?? []).map((c) => c.track_id)
  );

  // tally per track
  const totals = new Map<string, { total: number; done: number }>();
  for (const id of trackIds) totals.set(id, { total: 0, done: 0 });
  for (const l of lessonList) {
    const tid = lessonToTrack.get(l.id);
    if (!tid) continue;
    const t = totals.get(tid)!;
    t.total += 1;
    if (completedLessonIds.has(l.id)) t.done += 1;
  }

  return tracks.map((track) => {
    const t = totals.get(track.id) ?? { total: 0, done: 0 };
    const percent = t.total === 0 ? 0 : Math.round((t.done / t.total) * 100);
    return {
      trackId: track.id,
      trackName: track.name,
      totalLessons: t.total,
      completedLessons: t.done,
      percent,
      certified: certifiedTracks.has(track.id),
    };
  });
}

// The first not-yet-completed lesson in a track (for "Continue where you left
// off"). Returns null if the track is finished or empty.
export async function getResumeLesson(
  supabase: SupabaseClient,
  userId: string,
  trackId: string
): Promise<{ moduleId: string; lessonId: string } | null> {
  const { data: modules } = await supabase
    .from("modules")
    .select("id, order_index")
    .eq("track_id", trackId)
    .order("order_index", { ascending: true });
  const moduleList = (modules as { id: string; order_index: number }[]) ?? [];
  if (moduleList.length === 0) return null;

  const { data: lessons } = await supabase
    .from("lessons")
    .select("id, module_id, order_index")
    .in(
      "module_id",
      moduleList.map((m) => m.id)
    )
    .order("order_index", { ascending: true });
  const lessonList =
    (lessons as { id: string; module_id: string; order_index: number }[]) ?? [];
  if (lessonList.length === 0) return null;

  const { data: progress } = await supabase
    .from("lesson_progress")
    .select("lesson_id")
    .eq("user_id", userId)
    .eq("completed", true);
  const done = new Set(
    ((progress as { lesson_id: string }[]) ?? []).map((p) => p.lesson_id)
  );

  // Order: module order, then lesson order.
  const moduleOrder = new Map(moduleList.map((m) => [m.id, m.order_index]));
  const ordered = [...lessonList].sort((a, b) => {
    const mo = (moduleOrder.get(a.module_id) ?? 0) - (moduleOrder.get(b.module_id) ?? 0);
    return mo !== 0 ? mo : a.order_index - b.order_index;
  });

  const next = ordered.find((l) => !done.has(l.id));
  if (!next) return null;
  return { moduleId: next.module_id, lessonId: next.id };
}

// Completed-lesson ids for a user limited to a track (used by the player sidebar).
export async function getCompletedLessonIds(
  supabase: SupabaseClient,
  userId: string
): Promise<Set<string>> {
  const { data } = await supabase
    .from("lesson_progress")
    .select("lesson_id")
    .eq("user_id", userId)
    .eq("completed", true);
  return new Set(((data as { lesson_id: string }[]) ?? []).map((p) => p.lesson_id));
}
