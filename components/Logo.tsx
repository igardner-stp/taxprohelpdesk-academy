import { LOGO_URL, APP_NAME } from "@/lib/constants";

// Brand logo loaded from the live URL (single config value in lib/constants).
// Plain <img> so a remote/CDN swap needs no Next image config changes.
export function Logo({
  className = "",
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={LOGO_URL}
        alt={APP_NAME}
        className="h-8 w-auto shrink-0"
        width={160}
        height={32}
      />
      {showWordmark && (
        <span className="border-l border-surface-300 pl-2.5 text-base font-semibold tracking-tight text-navy-500">
          Academy
        </span>
      )}
    </span>
  );
}
