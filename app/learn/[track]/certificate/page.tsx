import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getSessionUser } from "@/lib/auth";
import { getTrack } from "@/lib/data/content";
import { PrintButton } from "@/components/learn/PrintButton";
import { DownloadCertificateButton } from "@/components/learn/DownloadCertificateButton";
import { LOGO_URL, APP_NAME, SUPPORT_PHONE } from "@/lib/constants";
import type { CertificateRow } from "@/lib/types";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function CertificatePage({
  params,
}: {
  params: { track: string };
}) {
  const session = await getSessionUser();
  const userId = session!.authUser.id;
  const supabase = createClient();

  const { data: certData } = await supabase
    .from("certificates")
    .select("*")
    .eq("user_id", userId)
    .eq("track_id", params.track)
    .maybeSingle();
  const cert = certData as CertificateRow | null;

  // Not certified yet → send them back to the track to finish it.
  if (!cert) redirect(`/learn/${params.track}`);

  const track = await getTrack(supabase, params.track);
  const learnerName = session?.profile?.full_name || session?.profile?.email || "Learner";

  return (
    <div className="layout-px mx-auto w-full max-w-3xl py-8">
      <div className="no-print mb-5 flex items-center justify-between">
        <Link href="/learn" className="text-sm font-medium text-brand-600 hover:underline">
          ← Back to training
        </Link>
        <div className="flex items-center gap-3">
          <DownloadCertificateButton
            learnerName={learnerName}
            trackName={track?.name ?? params.track}
            issuedAt={cert.issued_at}
            logoUrl={LOGO_URL}
          />
          <PrintButton className="btn-secondary" />
        </div>
      </div>

      {/* Certificate */}
      <div className="print-full panel overflow-hidden">
        <div className="border-8 border-double border-brand-600/30 p-8 sm:p-12">
          <div className="flex flex-col items-center text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_URL} alt={APP_NAME} className="h-12 w-auto" />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              Certificate of Completion
            </p>
            <p className="mt-8 text-sm text-navy-500">This certifies that</p>
            <p className="mt-2 text-3xl font-bold text-navy-900 sm:text-4xl">
              {learnerName}
            </p>
            <p className="mt-6 max-w-md text-navy-600">
              has successfully completed all training in
            </p>
            <p className="mt-2 text-xl font-semibold text-navy-900">
              {track?.name ?? params.track}
            </p>

            <div className="mt-10 flex w-full items-end justify-between gap-6 border-t border-surface-200 pt-6 text-left">
              <div>
                <p className="text-xs uppercase tracking-wide text-navy-500">Issued</p>
                <p className="font-medium text-navy-900">{formatDate(cert.issued_at)}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-navy-900">
                  TaxProHelpDesk Training Academy
                </p>
                <p className="text-xs text-navy-500">{SUPPORT_PHONE}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="no-print mt-4 text-center text-sm text-navy-500">
        Click <strong>Download PDF</strong> for a one-click save, or use <strong>Print / Save as PDF</strong> to customise the layout.
      </p>
    </div>
  );
}
