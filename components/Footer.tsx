import { SUPPORT_PHONE, SUPPORT_PHONE_HREF, APP_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-surface-200 bg-white">
      <div className="layout-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 py-6 text-sm text-navy-500 sm:flex-row">
        <p>© {APP_NAME}</p>
        <p>
          Need help? Call{" "}
          <a href={SUPPORT_PHONE_HREF} className="font-semibold text-brand-600">
            {SUPPORT_PHONE}
          </a>
        </p>
      </div>
    </footer>
  );
}
