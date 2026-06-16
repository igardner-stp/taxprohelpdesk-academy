import { createClient } from "@/lib/supabase/server";
import type { TrackRow } from "@/lib/types";
import { getTrackOutline } from "@/lib/data/content";
import { ContentManager } from "@/components/admin/ContentManager";

export default async function AdminContentPage() {
  const supabase = createClient();

  const { data: tracksRaw } = await supabase
    .from("tracks")
    .select("*")
    .order("order_index");

  const tracks = (tracksRaw as TrackRow[]) ?? [];

  // Fetch full outlines for all tracks in parallel.
  const outlines = await Promise.all(
    tracks.map((t) => getTrackOutline(supabase, t.id))
  );

  const trackData = tracks.map((track, i) => ({
    track,
    modules: outlines[i],
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-navy-900">Content Library</h1>
        <p className="mt-1 text-sm text-navy-500">
          Manage tracks, modules, and lessons.
        </p>
      </div>

      <ContentManager trackData={trackData} />
    </div>
  );
}
