import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";
import { getSessionUser, roleHome } from "@/lib/auth";
import { redirect } from "next/navigation";

// Public landing. No open signup — admins invite users. Signed-in users are
// sent straight to their role home.
export default async function LandingPage() {
  const session = await getSessionUser();
  if (session?.profile) redirect(roleHome(session.profile.role));

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="layout-px mx-auto flex w-full max-w-6xl items-center justify-between py-4">
        <Logo />
        <Link href="/login" className="btn-primary">
          Log in
        </Link>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="layout-px mx-auto w-full max-w-6xl py-12 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            TaxProHelpDesk Training Academy
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl leading-tight sm:text-5xl">
            Grow your tax business — one focused lesson at a time.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-navy-600">
            Self-guided training built for the professional tax industry. Track
            your progress, earn certificates, and learn the playbook for getting
            more taxpayers in the door and growing your service bureau.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/login" className="btn-primary px-6 py-3 text-base">
              Log in to your Academy
            </Link>
            <a href="#tracks" className="btn-ghost px-6 py-3 text-base">
              See what you&apos;ll learn
            </a>
          </div>
          <p className="mt-4 text-sm text-navy-500">
            Access is by invitation. Ask your administrator or bureau to set up
            your account.
          </p>
        </section>

        {/* Tracks */}
        <section id="tracks" className="border-t border-surface-200 bg-white">
          <div className="layout-px mx-auto w-full max-w-6xl py-14">
            <h2 className="text-2xl">Two tracks, built for two jobs</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="panel card-hover p-7">
                <span className="badge bg-brand-50 text-brand-700">For Tax Offices</span>
                <h3 className="mt-4 text-xl">Get More Taxpayers</h3>
                <p className="mt-2 text-navy-600">
                  For independent ERO tax offices. Marketing &amp; client
                  acquisition, building and leading a team, and reinvesting profit
                  to compound growth season over season.
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-navy-600">
                  <li>• Know who you serve &amp; build a referral engine</li>
                  <li>• Local marketing and paid ads that actually pay off</li>
                  <li>• Hire, train, and lead a team — then reinvest to grow</li>
                </ul>
              </div>
              <div className="panel card-hover p-7">
                <span className="badge bg-navy-800 text-white">For Service Bureaus</span>
                <h3 className="mt-4 text-xl">Grow Your Service Bureau</h3>
                <p className="mt-2 text-navy-600">
                  For service bureaus. Recruit more offices with an honest
                  economics pitch, support and retain them to cut churn, and
                  scale the bureau on a plan.
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-navy-600">
                  <li>• Build a recruiting pipeline &amp; close on the numbers</li>
                  <li>• Onboarding and support that scale past a few dozen offices</li>
                  <li>• Know your unit economics and grow revenue per office</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
