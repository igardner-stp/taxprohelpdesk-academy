"use client";

import { useState } from "react";
import type { ProfileRow, TrackRow, BureauRow } from "@/lib/types";
import { ROLE_LABEL } from "@/lib/roles";
import { RoleSelect } from "./RoleSelect";
import { AssignTracksForm } from "./AssignTracksForm";
import { SetBureauSelect } from "./SetBureauSelect";

const ROLE_BADGE: Record<string, string> = {
  admin: "bg-brand-100 text-brand-700",
  bureau_supervisor: "bg-navy-800 text-white",
  learner: "bg-surface-100 text-navy-700",
};

interface Props {
  profile: ProfileRow;
  bureauName: string | null;
  assignedTrackIds: string[];
  tracks: TrackRow[];
  bureaus: BureauRow[];
}

export function UserRow({
  profile,
  bureauName,
  assignedTrackIds,
  tracks,
  bureaus,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className="px-6 py-4">
      {/* Summary row */}
      <div className="flex flex-wrap items-start gap-x-4 gap-y-1">
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-navy-900">
            {profile.full_name || <span className="italic text-navy-400">No name</span>}
          </p>
          <p className="text-sm text-navy-500">{profile.email}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className={`badge ${ROLE_BADGE[profile.role] ?? "bg-surface-100 text-navy-700"}`}>
            {ROLE_LABEL[profile.role]}
          </span>
          {bureauName && (
            <span className="badge bg-surface-100 text-navy-600">{bureauName}</span>
          )}
          {assignedTrackIds.map((tid) => {
            const track = tracks.find((t) => t.id === tid);
            return track ? (
              <span key={tid} className="badge bg-brand-50 text-brand-700">
                {track.name}
              </span>
            ) : null;
          })}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="btn-ghost py-1.5 text-xs"
        >
          {expanded ? "Collapse" : "Edit"}
        </button>
      </div>

      {/* Inline edit panel */}
      {expanded && (
        <div className="mt-4 grid grid-cols-1 gap-5 rounded-xl border border-surface-200 bg-surface-50 p-4 sm:grid-cols-3">
          <div>
            <p className="label">Role</p>
            <RoleSelect userId={profile.id} currentRole={profile.role} />
          </div>

          <div>
            <p className="label">Assigned Tracks</p>
            <AssignTracksForm
              userId={profile.id}
              tracks={tracks}
              assignedTrackIds={assignedTrackIds}
            />
          </div>

          {profile.role === "learner" && (
            <div>
              <p className="label">Bureau</p>
              <SetBureauSelect
                userId={profile.id}
                bureaus={bureaus}
                currentBureauId={profile.bureau_id}
              />
            </div>
          )}
        </div>
      )}
    </li>
  );
}
