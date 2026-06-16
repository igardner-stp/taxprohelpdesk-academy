"use client";

import { useRouter } from "next/navigation";
import type { BureauRow } from "@/lib/types";

interface Props {
  bureaus: BureauRow[];
  currentBureauId: string;
}

export function BureauFilter({ bureaus, currentBureauId }: Props) {
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (value) {
      router.push(`/admin/reports?bureau=${value}`);
    } else {
      router.push("/admin/reports");
    }
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="bureau_filter" className="label mb-0 text-sm whitespace-nowrap">
        Filter by bureau:
      </label>
      <select
        id="bureau_filter"
        value={currentBureauId}
        onChange={handleChange}
        className="input py-1.5 text-sm"
      >
        <option value="">All Bureaus</option>
        {bureaus.map((b) => (
          <option key={b.id} value={b.id}>
            {b.name}
          </option>
        ))}
      </select>
    </div>
  );
}
