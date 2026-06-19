import { LOGO_URL, APP_NAME } from "@/lib/constants";

// eslint-disable-next-line @next/next/no-img-element
export function Logo({
  className = "",
  showWordmark = true,
  logoUrl,
}: {
  className?: string;
  showWordmark?: boolean;
  logoUrl?: string;
}) {
  const src = logoUrl ?? LOGO_URL;
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={src}
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
