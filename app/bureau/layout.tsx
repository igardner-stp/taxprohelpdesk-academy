import { requireRole } from "@/lib/auth";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { getTenantBranding } from "@/lib/tenant";

export default async function BureauLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { profile } = await requireRole(["bureau_supervisor"]);
  const { logoUrl } = getTenantBranding();
  return (
    <div className="flex min-h-dvh flex-col">
      <TopNav role="bureau_supervisor" fullName={profile.full_name} email={profile.email} logoUrl={logoUrl} />
      <main className="flex-1">
        <div className="layout-px mx-auto w-full max-w-6xl py-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
