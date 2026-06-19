"use client";

import { useState } from "react";
import { Download } from "@/components/icons";

interface Props {
  learnerName: string;
  trackName: string;
  issuedAt: string; // ISO date string
  logoUrl: string;
}

export function DownloadCertificateButton({
  learnerName,
  trackName,
  issuedAt,
  logoUrl,
}: Props) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    setLoading(true);
    try {
      const { jsPDF } = await import("jspdf");

      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "letter", // 279 × 216 mm
      });

      const W = doc.internal.pageSize.getWidth();  // 279
      const H = doc.internal.pageSize.getHeight(); // 216

      const issued = new Date(issuedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      // ── Background ──────────────────────────────────────────────────────────
      doc.setFillColor(255, 255, 255);
      doc.rect(0, 0, W, H, "F");

      // ── Outer border (double-line effect) ───────────────────────────────────
      doc.setDrawColor(37, 99, 235); // brand-600 #2563eb
      doc.setLineWidth(1.5);
      doc.rect(10, 10, W - 20, H - 20);
      doc.setLineWidth(0.4);
      doc.rect(13, 13, W - 26, H - 26);

      // ── Logo ────────────────────────────────────────────────────────────────
      try {
        // Fetch the logo and embed as base64
        const resp = await fetch(logoUrl);
        const blob = await resp.blob();
        const b64 = await new Promise<string>((res) => {
          const reader = new FileReader();
          reader.onload = () => res((reader.result as string).split(",")[1]);
          reader.readAsDataURL(blob);
        });
        const ext = logoUrl.toLowerCase().includes(".png") ? "PNG" : "JPEG";
        // Center logo near the top
        const logoW = 60;
        const logoH = 15;
        doc.addImage(b64, ext, (W - logoW) / 2, 22, logoW, logoH);
      } catch {
        // If logo fails, just show the app name as text
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.setTextColor(37, 99, 235);
        doc.text("TaxProHelpDesk Training Academy", W / 2, 32, { align: "center" });
      }

      // ── "Certificate of Completion" label ───────────────────────────────────
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(37, 99, 235);
      // Spaced tracking
      doc.text("C E R T I F I C A T E   O F   C O M P L E T I O N", W / 2, 50, { align: "center" });

      // ── "This certifies that" ───────────────────────────────────────────────
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(100, 116, 139); // slate-500
      doc.text("This certifies that", W / 2, 68, { align: "center" });

      // ── Learner name ────────────────────────────────────────────────────────
      doc.setFont("helvetica", "bold");
      doc.setFontSize(32);
      doc.setTextColor(15, 23, 42); // navy-900
      doc.text(learnerName, W / 2, 85, { align: "center" });

      // ── Underline below name ─────────────────────────────────────────────────
      const nameWidth = doc.getTextWidth(learnerName);
      const nameUnderX = (W - Math.min(nameWidth, 180)) / 2;
      doc.setDrawColor(226, 232, 240); // surface-200
      doc.setLineWidth(0.4);
      doc.line(nameUnderX, 89, W - nameUnderX, 89);

      // ── "has successfully completed" ────────────────────────────────────────
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(71, 85, 105); // navy-600
      doc.text("has successfully completed all training in", W / 2, 102, { align: "center" });

      // ── Track name ───────────────────────────────────────────────────────────
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.setTextColor(15, 23, 42);
      doc.text(trackName, W / 2, 116, { align: "center" });

      // ── Divider ──────────────────────────────────────────────────────────────
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.4);
      doc.line(30, 134, W - 30, 134);

      // ── Footer: issued date (left) + academy name (right) ───────────────────
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(100, 116, 139);
      doc.text("ISSUED", 30, 143);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(15, 23, 42);
      doc.text(issued, 30, 149);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(15, 23, 42);
      doc.text("TaxProHelpDesk Training Academy", W - 30, 143, { align: "right" });
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(100, 116, 139);
      doc.text("taxprohelpdesk.com", W - 30, 149, { align: "right" });

      // ── Accent bar at bottom ─────────────────────────────────────────────────
      doc.setFillColor(37, 99, 235);
      doc.rect(10, H - 14, W - 20, 3, "F");

      // ── Save ─────────────────────────────────────────────────────────────────
      const safeName = learnerName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
      doc.save(`certificate_${safeName}.pdf`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="btn-primary inline-flex items-center gap-2 disabled:opacity-60"
    >
      <Download className="h-4 w-4" />
      {loading ? "Generating…" : "Download PDF"}
    </button>
  );
}
