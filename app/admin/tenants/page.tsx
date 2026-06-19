import { createClient } from "@/lib/supabase/server";
import type { TenantRow } from "@/lib/types";
import { TenantManager } from "@/components/admin/TenantManager";

export default async function AdminTenantsPage() {
  const supabase = createClient();
  const { data } = await supabase
    .from("tenants")
    .select("*")
    .order("name");

  const tenants = (data as TenantRow[]) ?? [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl text-navy-900">Tenants</h1>
        <p className="mt-1 text-sm text-navy-500">
          White-label clients — each gets their own logo and subdomain on{" "}
          <span className="font-medium text-navy-700">taxprotraining.com</span>.
        </p>
      </div>

      <div className="panel p-5">
        <h2 className="mb-2 text-sm font-semibold text-navy-700">How it works</h2>
        <ol className="space-y-1 text-sm text-navy-500 list-decimal list-inside">
          <li>Create a tenant with a subdomain (e.g. <code className="text-xs bg-surface-100 px-1 py-0.5 rounded">acme</code>).</li>
          <li>Upload their logo — it appears in the top nav for anyone visiting that subdomain.</li>
          <li>Point <code className="text-xs bg-surface-100 px-1 py-0.5 rounded">acme.taxprotraining.com</code> at this app in your DNS / Vercel domain settings.</li>
          <li>Invite their users as normal — they log in at their subdomain and see their brand.</li>
        </ol>
      </div>

      <TenantManager tenants={tenants} />
    </div>
  );
}
