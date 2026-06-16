"use client";

import { useState } from "react";
import type { BureauRow, ProfileRow } from "@/lib/types";
import { createBureau, assignSupervisor } from "@/app/admin/actions";

interface BureauWithDetails {
  bureau: BureauRow;
  supervisorName: string | null;
  supervisorEmail: string | null;
  learnerCount: number;
}

interface Props {
  enrichedBureaus: BureauWithDetails[];
  supervisors: Pick<ProfileRow, "id" | "full_name" | "email">[];
}

export function BureauManager({ enrichedBureaus, supervisors }: Props) {
  const [bureaus, setBureaus] = useState(enrichedBureaus);
  const [newName, setNewName] = useState("");
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  // Track per-bureau supervisor changes.
  const [supervisorErrors, setSupervisorErrors] = useState<Record<string, string>>({});
  const [supervisorSaved, setSupervisorSaved] = useState<Record<string, boolean>>({});
  const [supervisorLoading, setSupervisorLoading] = useState<Record<string, boolean>>({});

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    const name = newName.trim();
    if (!name) return;
    setCreating(true);
    setCreateError(null);

    const res = await createBureau(name);
    setCreating(false);

    if (res.error) {
      setCreateError(res.error);
    } else {
      setNewName("");
      // Optimistically add a placeholder (server revalidate will hydrate next visit).
      setBureaus((prev) => [
        ...prev,
        {
          bureau: {
            id: crypto.randomUUID(),
            name,
            supervisor_user_id: null,
            created_at: new Date().toISOString(),
          },
          supervisorName: null,
          supervisorEmail: null,
          learnerCount: 0,
        },
      ]);
    }
  }

  async function handleSupervisorChange(bureauId: string, userId: string) {
    setSupervisorLoading((p) => ({ ...p, [bureauId]: true }));
    setSupervisorErrors((p) => ({ ...p, [bureauId]: "" }));
    setSupervisorSaved((p) => ({ ...p, [bureauId]: false }));

    const res = await assignSupervisor(bureauId, userId || null);
    setSupervisorLoading((p) => ({ ...p, [bureauId]: false }));

    if (res.error) {
      setSupervisorErrors((p) => ({ ...p, [bureauId]: res.error! }));
    } else {
      setSupervisorSaved((p) => ({ ...p, [bureauId]: true }));
      setTimeout(
        () => setSupervisorSaved((p) => ({ ...p, [bureauId]: false })),
        2000
      );
    }
  }

  return (
    <div className="space-y-6">
      {/* Create bureau form */}
      <div className="panel p-6">
        <h2 className="mb-4 text-base font-semibold text-navy-800">
          Create Bureau
        </h2>
        <form onSubmit={handleCreate} className="flex max-w-sm flex-col gap-3">
          <div>
            <label htmlFor="bureau_name" className="label">
              Bureau Name
            </label>
            <input
              id="bureau_name"
              type="text"
              required
              placeholder="Downtown Tax Partners"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="input"
            />
          </div>
          {createError && (
            <p className="text-sm text-status-red">{createError}</p>
          )}
          <button type="submit" disabled={creating} className="btn-primary self-start">
            {creating ? "Creating…" : "Create Bureau"}
          </button>
        </form>
      </div>

      {/* Bureau list */}
      <div className="panel overflow-hidden">
        <div className="border-b border-surface-200 px-6 py-4">
          <h2 className="text-base font-semibold text-navy-800">All Bureaus</h2>
        </div>

        {bureaus.length === 0 ? (
          <p className="px-6 py-8 text-center text-sm text-navy-500">
            No bureaus yet. Create one above.
          </p>
        ) : (
          <ul className="divide-y divide-surface-200">
            {bureaus.map(({ bureau, supervisorName, supervisorEmail, learnerCount }) => (
              <li key={bureau.id} className="px-6 py-5">
                <div className="flex flex-wrap items-start gap-4">
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <p className="font-semibold text-navy-900">{bureau.name}</p>
                    {supervisorName || supervisorEmail ? (
                      <p className="text-sm text-navy-500">
                        Supervisor: {supervisorName ?? supervisorEmail}
                      </p>
                    ) : (
                      <p className="text-sm italic text-navy-400">No supervisor assigned</p>
                    )}
                    <p className="text-xs text-navy-500">
                      {learnerCount} learner{learnerCount !== 1 ? "s" : ""}
                    </p>
                  </div>

                  {/* Supervisor assignment */}
                  <div className="min-w-[200px] space-y-1">
                    <label className="label text-xs">Assign Supervisor</label>
                    <select
                      defaultValue={bureau.supervisor_user_id ?? ""}
                      disabled={supervisorLoading[bureau.id]}
                      onChange={(e) =>
                        handleSupervisorChange(bureau.id, e.target.value)
                      }
                      className="input py-1.5 text-sm"
                    >
                      <option value="">— None —</option>
                      {supervisors.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.full_name ?? s.email}
                        </option>
                      ))}
                    </select>
                    {supervisorErrors[bureau.id] && (
                      <p className="text-xs text-status-red">
                        {supervisorErrors[bureau.id]}
                      </p>
                    )}
                    {supervisorSaved[bureau.id] && (
                      <p className="text-xs text-status-green">Saved</p>
                    )}
                    {supervisors.length === 0 && (
                      <p className="text-xs text-navy-400">
                        No bureau_supervisor users yet.
                      </p>
                    )}
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
