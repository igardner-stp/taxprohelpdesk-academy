"use client";

import { useState, useRef } from "react";
import type { TrackRow, BureauRow, Role } from "@/lib/types";
import { inviteUser } from "@/app/admin/actions";
import { ROLE_LABEL } from "@/lib/roles";

const ROLES: Role[] = ["learner", "bureau_supervisor", "admin"];

interface Props {
  tracks: TrackRow[];
  bureaus: BureauRow[];
}

interface InviteResult {
  inviteLink: string;
  tempPassword: string;
  email: string;
}

export function CreateUserForm({ tracks, bureaus }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<InviteResult | null>(null);
  const [role, setRole] = useState<Role>("learner");
  const [selectedTrackIds, setSelectedTrackIds] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  function toggleTrack(id: string) {
    setSelectedTrackIds((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setResult(null);
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const res = await inviteUser({
      fullName: (fd.get("full_name") as string).trim(),
      email: (fd.get("email") as string).trim().toLowerCase(),
      role,
      trackIds: selectedTrackIds,
      bureauId: role === "learner" ? ((fd.get("bureau_id") as string) || null) : null,
    });

    setLoading(false);

    if ("error" in res) {
      setError(res.error);
      return;
    }

    setResult({ inviteLink: res.inviteLink, tempPassword: res.tempPassword, email: res.email });
    formRef.current?.reset();
    setSelectedTrackIds([]);
    setRole("learner");
  }

  async function copyLink(text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-5">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="full_name" className="label">
              Full Name
            </label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              required
              placeholder="Jane Smith"
              className="input"
            />
          </div>
          <div>
            <label htmlFor="email" className="label">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@taxoffice.com"
              className="input"
            />
          </div>
        </div>

        <div>
          <label className="label">Role</label>
          <div className="flex flex-wrap gap-3">
            {ROLES.map((r) => (
              <label
                key={r}
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  role === r
                    ? "border-brand-600 bg-brand-50 text-brand-700"
                    : "border-surface-200 bg-white text-navy-700 hover:bg-surface-100"
                }`}
              >
                <input
                  type="radio"
                  name="role_select"
                  value={r}
                  checked={role === r}
                  onChange={() => setRole(r)}
                  className="sr-only"
                />
                {ROLE_LABEL[r]}
              </label>
            ))}
          </div>
        </div>

        {tracks.length > 0 && (
          <div>
            <label className="label">Assign Tracks</label>
            <div className="flex flex-wrap gap-3">
              {tracks.map((t) => (
                <label
                  key={t.id}
                  className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                    selectedTrackIds.includes(t.id)
                      ? "border-brand-600 bg-brand-50 text-brand-700"
                      : "border-surface-200 bg-white text-navy-700 hover:bg-surface-100"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedTrackIds.includes(t.id)}
                    onChange={() => toggleTrack(t.id)}
                    className="sr-only"
                  />
                  {t.name}
                </label>
              ))}
            </div>
          </div>
        )}

        {role === "learner" && bureaus.length > 0 && (
          <div className="max-w-xs">
            <label htmlFor="bureau_id" className="label">
              Bureau (optional)
            </label>
            <select id="bureau_id" name="bureau_id" className="input">
              <option value="">— None —</option>
              {bureaus.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {error && (
          <p className="rounded-lg border border-status-red/20 bg-red-50 px-4 py-2.5 text-sm text-status-red">
            {error}
          </p>
        )}

        <button type="submit" disabled={loading} className="btn-primary">
          {loading ? "Creating…" : "Create User"}
        </button>
      </form>

      {result && (
        <div className="rounded-xl border border-status-green/30 bg-green-50 p-5 space-y-3">
          <p className="text-sm font-semibold text-status-green">
            User created — {result.email}
          </p>
          <div>
            <p className="label text-navy-700">Setup / invite link</p>
            <div className="flex items-center gap-2">
              <input
                readOnly
                value={result.inviteLink}
                className="input text-xs"
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <button
                type="button"
                onClick={() => copyLink(result.inviteLink)}
                className="btn-ghost shrink-0 text-xs"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
          <div>
            <p className="label text-navy-700">Temporary password</p>
            <div className="flex items-center gap-2">
              <input
                readOnly
                value={result.tempPassword}
                className="input font-mono text-sm"
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <button
                type="button"
                onClick={() => copyLink(result.tempPassword)}
                className="btn-ghost shrink-0 text-xs"
              >
                Copy
              </button>
            </div>
          </div>
          <p className="text-xs text-navy-500">
            Share the link and temporary password with the user. They will be
            prompted to set a new password on first login.
          </p>
        </div>
      )}
    </div>
  );
}
