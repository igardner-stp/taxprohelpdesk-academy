"use client";

import { useState } from "react";
import { Download } from "@/components/icons";
import { APP_NAME, BASE_DOMAIN } from "@/lib/constants";

interface Props {
  learnerName: string;
  trackName: string;
  issuedAt: string;
  logoUrl: string;
}

export function DownloadCertificateButton({ learnerName, trackName, issuedAt, logoUrl }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    setLoading(true);
    try {
      const { jsPDF } = await import("jspdf");

      const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "letter" });
      const W = doc.internal.pageSize.getWidth();
      const H = doc.internal.pageSize.getHeight();

      const d = new Date(issuedAt);
      const issued = d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
      const pad = (n: number) => String(n).padStart(2, "0");
      const combined = learnerName + trackName;
      let hash = 0;
      for (let i = 0; i < combined.length; i++) hash += combined.charCodeAt(i);
      const certNo = `No. ${d.getFullYear()}-${pad(d.getMonth() + 1)}${pad(d.getDate())}-${(hash % 9000 + 1000)}`;

      // ── White background ────────────────────────────────────────────────────
      doc.setFillColor(255, 255, 255);
      doc.rect(0, 0, W, H, "F");

      // ── Navy header (0–32 mm) ───────────────────────────────────────────────
      doc.setFillColor(15, 23, 42);
      doc.rect(0, 0, W, 32, "F");

      // ── Logo in header ───────────────────────────────────────────────────────
      const HEADER_LOGO_H = 12;
      try {
        const resp = await fetch(logoUrl);
        const blob = await resp.blob();
        const ext = logoUrl.toLowerCase().includes(".png") ? "PNG" : "JPEG";
        const mimeType = ext === "PNG" ? "image/png" : "image/jpeg";
        const b64 = await new Promise<string>((res) => {
          const reader = new FileReader();
          reader.onload = () => res((reader.result as string).split(",")[1]);
          reader.readAsDataURL(blob);
        });
        const img = new Image();
        await new Promise<void>((res, rej) => {
          img.onload = () => res();
          img.onerror = rej;
          img.src = `data:${mimeType};base64,${b64}`;
        });
        const logoW = (img.naturalWidth / img.naturalHeight) * HEADER_LOGO_H;
        doc.addImage(b64, ext, 14, (32 - HEADER_LOGO_H) / 2, logoW, HEADER_LOGO_H);
      } catch {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(248, 250, 252);
        doc.text(APP_NAME, 14, 18);
      }

      // ── Cert number (header right) ───────────────────────────────────────────
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      doc.setTextColor(51, 65, 85);
      doc.text(certNo, W - 14, 17, { align: "right" });

      // ── Amber accent stripe (32–35 mm) ───────────────────────────────────────
      doc.setFillColor(180, 83, 9);
      doc.rect(0, 32, W, 3, "F");

      // ── Inner thin border frame ───────────────────────────────────────────────
      doc.setDrawColor(191, 219, 254);
      doc.setLineWidth(0.4);
      doc.rect(8, 8, W - 16, H - 16);

      // ── Corner ornaments (L-shapes, navy blue) ────────────────────────────────
      doc.setDrawColor(30, 64, 175);
      doc.setLineWidth(1.5);
      doc.line(8, 8, 22, 8);   doc.line(8, 8, 8, 22);
      doc.line(W - 8, 8, W - 22, 8);   doc.line(W - 8, 8, W - 8, 22);
      doc.line(8, H - 8, 22, H - 8);   doc.line(8, H - 8, 8, H - 22);
      doc.line(W - 8, H - 8, W - 22, H - 8);   doc.line(W - 8, H - 8, W - 8, H - 22);

      // ── Eyebrow ───────────────────────────────────────────────────────────────
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(29, 78, 216);
      doc.text("C E R T I F I C A T E   O F   C O M P L E T I O N", W / 2, 52, { align: "center" });

      // ── "This is to certify that" ─────────────────────────────────────────────
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(148, 163, 184);
      doc.text("This is to certify that", W / 2, 64, { align: "center" });

      // ── Learner name (Times serif, auto-shrink for long names) ────────────────
      doc.setFont("times", "normal");
      let namePt = 30;
      doc.setFontSize(namePt);
      while (doc.getTextWidth(learnerName) > W - 80 && namePt > 16) {
        namePt--;
        doc.setFontSize(namePt);
      }
      doc.setTextColor(15, 23, 42);
      doc.text(learnerName, W / 2, 80, { align: "center" });

      // ── Dot-rule separator ────────────────────────────────────────────────────
      const ruleY = 87;
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.4);
      doc.line((W - 70) / 2, ruleY, W / 2 - 4, ruleY);
      doc.line(W / 2 + 4, ruleY, (W + 70) / 2, ruleY);
      doc.setFillColor(180, 83, 9);
      doc.circle(W / 2, ruleY, 1.2, "F");

      // ── "has successfully completed…" ─────────────────────────────────────────
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(100, 116, 139);
      doc.text("has successfully completed all required coursework in", W / 2, 99, { align: "center" });

      // ── Track name ────────────────────────────────────────────────────────────
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(15, 23, 42);
      doc.text(trackName, W / 2, 112, { align: "center" });

      // ── Footer divider ────────────────────────────────────────────────────────
      doc.setDrawColor(226, 232, 240);
      doc.setLineWidth(0.4);
      doc.line(20, 165, W - 20, 165);

      // ── Footer left — issued date ─────────────────────────────────────────────
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      doc.setTextColor(148, 163, 184);
      doc.text("ISSUED", 38, 176);
      doc.setLineWidth(0.4);
      doc.setDrawColor(148, 163, 184);
      doc.line(38, 173, 100, 173);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(issued, 38, 184);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      doc.setTextColor(148, 163, 184);
      doc.text("Date of Completion", 38, 190);

      // ── Footer center — official seal (concentric circles) ────────────────────
      const sX = W / 2, sY = 182;
      doc.setDrawColor(30, 64, 175);
      doc.setLineWidth(1.5);
      doc.circle(sX, sY, 15);
      doc.setLineWidth(0.4);
      doc.circle(sX, sY, 12.5);

      // ── Footer right — org name + domain ─────────────────────────────────────
      doc.setLineWidth(0.4);
      doc.setDrawColor(148, 163, 184);
      doc.line(W - 100, 173, W - 38, 173);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(APP_NAME, W - 38, 184, { align: "right" });
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7);
      doc.setTextColor(148, 163, 184);
      doc.text(BASE_DOMAIN, W - 38, 190, { align: "right" });

      // ── Save ───────────────────────────────────────────────────────────────────
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
