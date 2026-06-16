import { requireRole } from "@/lib/auth";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { profile } = await requireRole(["admin"]);

  return (
    <div className="flex min-h-dvh flex-col">
      <TopNav
        role="admin"
        fullName={profile.full_name}
        email={profile.email}
      />
      <main className="layout-px mx-auto w-full max-w-6xl flex-1 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
