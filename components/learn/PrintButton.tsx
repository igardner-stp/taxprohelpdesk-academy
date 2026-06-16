"use client";

export function PrintButton({ className = "btn-primary" }: { className?: string }) {
  return (
    <button onClick={() => window.print()} className={className}>
      Print / Save as PDF
    </button>
  );
}
