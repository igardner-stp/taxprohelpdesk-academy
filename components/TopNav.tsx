import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SignOutButton } from "@/components/SignOutButton";
import { roleHome } from "@/lib/roles";
import type { Role } from "@/lib/types";

const NAV: Record<Role, { href: string; label: string }[]> = {
  learner: [{ href: "/learn", label: "My Training" }],
  admin: [
    { href: "/admin", label: "Overview" },
    { href: "/admin/users", label: "Users" },
    { href: "/admin/bureaus", label: "Bureaus" },
    { href: "/admin/tenants", label: "Tenants" },
    { href: "/admin/content", label: "Content" },
    { href: "/admin/reports", label: "Reports" },
  ],
  bureau_supervisor: [
    { href: "/bureau", label: "Overview" },
    { href: "/bureau/offices", label: "My Offices" },
  ],
};

export function TopNav({
  role,
  fullName,
  email,
  logoUrl,
}: {
  role: Role;
  fullName?: string | null;
  email?: string | null;
  logoUrl?: string;
}) {
  const items = NAV[role] ?? [];
  return (
    <header className="sticky top-0 z-30 border-b border-surface-200 bg-white/95 backdrop-blur">
      <div className="layout-px mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 py-3">
        <Link href={roleHome(role)} className="shrink-0">
          <Logo logoUrl={logoUrl} />
        </Link>

        <nav className="order-3 flex w-full items-center gap-1 overflow-x-auto scroll-touch text-sm sm:order-2 sm:w-auto">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="whitespace-nowrap rounded-lg px-3 py-1.5 font-medium text-navy-600 transition hover:bg-surface-100 hover:text-navy-900"
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="order-2 ml-auto flex items-center gap-4 sm:order-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-navy-800">
              {fullName || email}
            </p>
            <p className="text-xs capitalize text-navy-500">
              {role.replace("_", " ")}
            </p>
          </div>
          <SignOutButton />
        </div>
      </div>
    </header>
  );
}
