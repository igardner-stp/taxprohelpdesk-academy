import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

interface StatCard {
  label: string;
  value: number | string;
  sub?: string;
  href: string;
  linkLabel: string;
}

async function getStats() {
  const supabase = createClient();

  const [
    { count: totalUsers },
    { count: adminCount },
    { count: supervisorCount },
    { count: learnerCount },
    { count: bureauCount },
    { count: trackCount },
    { count: moduleCount },
    { count: lessonCount },
    { count: certCount },
  ] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }),
    supabase
      .from("profiles")
      .select("*", { count: "exact", head: true })
      .eq("role", "admin"),
    supabase
      .from("profiles")
      .select("*", { count: "exact", head: true })
      .eq("role", "bureau_supervisor"),
    supabase
      .from("profiles")
      .select("*", { count: "exact", head: true })
      .eq("role", "learner"),
    supabase.from("bureaus").select("*", { count: "exact", head: true }),
    supabase.from("tracks").select("*", { count: "exact", head: true }),
    supabase.from("modules").select("*", { count: "exact", head: true }),
    supabase.from("lessons").select("*", { count: "exact", head: true }),
    supabase.from("certificates").select("*", { count: "exact", head: true }),
  ]);

  return {
    totalUsers: totalUsers ?? 0,
    adminCount: adminCount ?? 0,
    supervisorCount: supervisorCount ?? 0,
    learnerCount: learnerCount ?? 0,
    bureauCount: bureauCount ?? 0,
    trackCount: trackCount ?? 0,
    moduleCount: moduleCount ?? 0,
    lessonCount: lessonCount ?? 0,
    certCount: certCount ?? 0,
  };
}

export default async function AdminOverviewPage() {
  const stats = await getStats();

  const cards: StatCard[] = [
    {
      label: "Total Users",
      value: stats.totalUsers,
      sub: `${stats.learnerCount} learners · ${stats.supervisorCount} supervisors · ${stats.adminCount} admins`,
      href: "/admin/users",
      linkLabel: "Manage Users →",
    },
    {
      label: "Bureaus",
      value: stats.bureauCount,
      href: "/admin/bureaus",
      linkLabel: "Manage Bureaus →",
    },
    {
      label: "Tracks",
      value: stats.trackCount,
      href: "/admin/content",
      linkLabel: "View Content →",
    },
    {
      label: "Modules",
      value: stats.moduleCount,
      href: "/admin/content",
      linkLabel: "View Content →",
    },
    {
      label: "Lessons",
      value: stats.lessonCount,
      href: "/admin/content",
      linkLabel: "View Content →",
    },
    {
      label: "Certificates Issued",
      value: stats.certCount,
      href: "/admin/reports",
      linkLabel: "View Reports →",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl text-navy-900">Admin Overview</h1>
        <p className="mt-1 text-sm text-navy-500">
          Platform stats and quick links.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div key={card.label} className="panel p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">
              {card.label}
            </p>
            <p className="mt-2 text-4xl font-bold text-navy-900">
              {card.value}
            </p>
            {card.sub && (
              <p className="mt-1 text-xs text-navy-500">{card.sub}</p>
            )}
            <Link
              href={card.href}
              className="mt-4 block text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              {card.linkLabel}
            </Link>
          </div>
        ))}
      </div>

      <div className="panel p-6">
        <h2 className="mb-4 text-base text-navy-800">Quick Links</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/users" className="btn-primary text-sm">
            Invite User
          </Link>
          <Link href="/admin/bureaus" className="btn-navy text-sm">
            Create Bureau
          </Link>
          <Link href="/admin/content" className="btn-ghost text-sm">
            Manage Content
          </Link>
          <Link href="/admin/reports" className="btn-ghost text-sm">
            View Reports
          </Link>
        </div>
      </div>
    </div>
  );
}
