"use client";

import { useState } from "react";
import type { Role } from "@/lib/types";
import { ROLE_LABEL } from "@/lib/roles";
import { setUserRole } from "@/app/admin/actions";

const ROLES: Role[] = ["learner", "bureau_supervisor", "admin"];

interface Props {
  userId: string;
  currentRole: Role;
}

export function RoleSelect({ userId, currentRole }: Props) {
  const [role, setRole] = useState<Role>(currentRole);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  async function handleChange(newRole: Role) {
    if (newRole === role) return;
    setLoading(true);
    setError(null);
    setSaved(false);

    const res = await setUserRole(userId, newRole);
    setLoading(false);

    if (res.error) {
      setError(res.error);
    } else {
      setRole(newRole);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  }

  return (
    <div className="space-y-1">
      <select
        value={role}
        disabled={loading}
        onChange={(e) => handleChange(e.target.value as Role)}
        className="input py-1.5 text-sm"
        aria-label="Change role"
      >
        {ROLES.map((r) => (
          <option key={r} value={r}>
            {ROLE_LABEL[r]}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-status-red">{error}</p>}
      {saved && <p className="text-xs text-status-green">Saved</p>}
    </div>
  );
}
