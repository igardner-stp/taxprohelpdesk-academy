"use client";

import { useState } from "react";
import type { TrackRow } from "@/lib/types";
import { assignTracks } from "@/app/admin/actions";

interface Props {
  userId: string;
  tracks: TrackRow[];
  assignedTrackIds: string[];
}

export function AssignTracksForm({ userId, tracks, assignedTrackIds }: Props) {
  const [selected, setSelected] = useState<string[]>(assignedTrackIds);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  }

  async function save() {
    setLoading(true);
    setError(null);
    setSaved(false);

    const res = await assignTracks(userId, selected);
    setLoading(false);

    if (res.error) {
      setError(res.error);
    } else {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  }

  if (tracks.length === 0) {
    return <p className="text-xs text-navy-500">No tracks available.</p>;
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {tracks.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => toggle(t.id)}
            className={`badge cursor-pointer transition ${
              selected.includes(t.id)
                ? "bg-brand-100 text-brand-700 ring-1 ring-brand-400"
                : "bg-surface-100 text-navy-600 hover:bg-surface-200"
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={save}
          disabled={loading}
          className="btn-ghost py-1.5 text-xs"
        >
          {loading ? "Saving…" : "Save Tracks"}
        </button>
        {error && <p className="text-xs text-status-red">{error}</p>}
        {saved && <p className="text-xs text-status-green">Saved</p>}
      </div>
    </div>
  );
}
