// =============================================================================
// Brand + app constants. Swap the logo / phone / palette here in ONE place.
// =============================================================================

export const APP_NAME = "TaxProHelpDesk Training Academy";
export const APP_SHORT_NAME = "Academy";

// Logo: live brand URL today. To swap to a local asset later, change this one
// value to e.g. "/logo.png" and drop the file in /public.
export const LOGO_URL =
  process.env.NEXT_PUBLIC_LOGO_URL ?? "https://taxprohelpdesk.com/images/logo.png";

export const SUPPORT_PHONE =
  process.env.NEXT_PUBLIC_SUPPORT_PHONE ?? "(866) 377-4139";

// tel: href needs digits only.
export const SUPPORT_PHONE_HREF = `tel:${SUPPORT_PHONE.replace(/[^0-9+]/g, "")}`;

// Known track ids (the library is data-driven; these are just convenient
// constants for default routing/labels — new tracks work without code changes).
export const TRACK_IDS = ["ero", "bureau"] as const;

// Base domain for white-label subdomains: <slug>.taxprotraining.com
export const BASE_DOMAIN =
  process.env.NEXT_PUBLIC_BASE_DOMAIN ?? "taxprohelpdesk.com";
