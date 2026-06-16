import { createClient } from "@/lib/supabase/server";
import type { BureauRow, ProfileRow } from "@/lib/types";
import { BureauManager } from "@/components/admin/BureauManager";

interface BureauWithDetails {
  bureau: BureauRow;
  supervisorName: string | null;
  supervisorEmail: string | null;
  learnerCount: number;
}

export default async function AdminBureausPage() {
  const supabase = createClient();

  const [{ data: bureausRaw }, { data: profilesRaw }] = await Promise.all([
    supabase.from("bureaus").select("*").order("name"),
    supabase.from("profiles").select("id,full_name,email,role,bureau_id"),
  ]);

  const bureaus = (bureausRaw as BureauRow[]) ?? [];
  const profiles = (profilesRaw as Pick<ProfileRow, "id" | "full_name" | "email" | "role" | "bureau_id">[]) ?? [];

  // Supervisors available for assignment.
  const supervisors = profiles.filter((p) => p.role === "bureau_supervisor");
  const profileMap = new Map(profiles.map((p) => [p.id, p]));

  const learnersByBureau = new Map<string, number>();
  for (const p of profiles) {
    if (p.bureau_id) {
      learnersByBureau.set(p.bureau_id, (learnersByBureau.get(p.bureau_id) ?? 0) + 1);
    }
  }

  const enriched: BureauWithDetails[] = bureaus.map((b) => {
    const supervisor = b.supervisor_user_id
      ? profileMap.get(b.supervisor_user_id)
      : null;
    return {
      bureau: b,
      supervisorName: supervisor?.full_name ?? null,
      supervisorEmail: supervisor?.email ?? null,
      learnerCount: learnersByBureau.get(b.id) ?? 0,
    };
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl text-navy-900">Bureaus</h1>
        <p className="mt-1 text-sm text-navy-500">
          {bureaus.length} bureau{bureaus.length !== 1 ? "s" : ""}
        </p>
      </div>

      <BureauManager
        enrichedBureaus={enriched}
        supervisors={supervisors}
      />
    </div>
  );
}
