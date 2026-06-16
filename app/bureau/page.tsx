import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getSessionUser } from "@/lib/auth";
import { getDownlineReport } from "@/lib/data/bureau";

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="panel p-5">
      <p className="text-sm text-navy-500">{label}</p>
      <p className="mt-1 text-3xl font-bold text-navy-900">{value}</p>
    </div>
  );
}

export default async function BureauHome() {
  const session = await getSessionUser();
  const supabase = createClient();
  const report = await getDownlineReport(supabase, session!.authUser.id);

  const allProgress = report.offices.flatMap((o) => o.tracks);
  const avg =
    allProgress.length === 0
      ? 0
      : Math.round(allProgress.reduce((s, p) => s + p.percent, 0) / allProgress.length);
  const totalCerts = report.offices.reduce((s, o) => s + o.certificateCount, 0);
  const activeRecently = report.offices.filter((o) => {
    if (!o.lastActivity) return false;
    const days = (Date.now() - new Date(o.lastActivity).getTime()) / 86_400_000;
    return days <= 30;
  }).length;

  const firstName = (session?.profile?.full_name || "").split(" ")[0];

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl">
        {firstName ? `Welcome, ${firstName}` : "Bureau Overview"}
      </h1>
      <p className="mt-1 text-navy-600">
        Read-only training progress for your downline offices.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Offices" value={report.offices.length} />
        <StatCard label="Avg. completion" value={`${avg}%`} />
        <StatCard label="Certificates earned" value={totalCerts} />
        <StatCard label="Active in 30 days" value={activeRecently} />
      </div>

      <div className="mt-8 panel p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg">Your bureau{report.bureaus.length === 1 ? "" : "s"}</h2>
          <Link href="/bureau/offices" className="btn-primary">
            View office progress
          </Link>
        </div>
        {report.bureaus.length === 0 ? (
          <p className="mt-4 text-navy-600">
            No bureau is linked to your account yet. Ask an administrator to assign
            you as a bureau supervisor.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-surface-200">
            {report.bureaus.map((b) => {
              const count = report.offices.filter((o) => o.bureauName === b.name).length;
              return (
                <li key={b.id} className="flex items-center justify-between py-3">
                  <span className="font-medium text-navy-900">{b.name}</span>
                  <span className="text-sm text-navy-500">
                    {count} office{count === 1 ? "" : "s"}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
