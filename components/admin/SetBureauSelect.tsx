"use client";

import { useState } from "react";
import type { BureauRow } from "@/lib/types";
import { setUserBureau } from "@/app/admin/actions";

interface Props {
  userId: string;
  bureaus: BureauRow[];
  currentBureauId: string | null;
}

export function SetBureauSelect({ userId, bureaus, currentBureauId }: Props) {
  const [bureauId, setBureauId] = useState<string>(currentBureauId ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  async function handleChange(value: string) {
    setBureauId(value);
    setLoading(true);
    setError(null);
    setSaved(false);

    const res = await setUserBureau(userId, value || null);
    setLoading(false);

    if (res.error) {
      setError(res.error);
    } else {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  }

  if (bureaus.length === 0) {
    return <p className="text-xs text-navy-500">No bureaus yet.</p>;
  }

  return (
    <div className="space-y-1">
      <select
        value={bureauId}
        disabled={loading}
        onChange={(e) => handleChange(e.target.value)}
        className="input py-1.5 text-sm"
        aria-label="Set bureau"
      >
        <option value="">— None —</option>
        {bureaus.map((b) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-status-red">{error}</p>}
      {saved && <p className="text-xs text-status-green">Saved</p>}
    </div>
  );
}
