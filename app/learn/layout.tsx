import { requireRole } from "@/lib/auth";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

export default async function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { profile } = await requireRole(["learner"]);
  return (
    <div className="flex min-h-dvh flex-col">
      <TopNav role="learner" fullName={profile.full_name} email={profile.email} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
