import { headers } from "next/headers";
import { LOGO_URL, APP_NAME } from "@/lib/constants";

export interface TenantBranding {
  logoUrl: string;
  name: string;
  slug: string | null;
}

// Called in Server Components / layouts. Reads tenant branding injected by
// middleware from the incoming x-tenant-* request headers.
export function getTenantBranding(): TenantBranding {
  const hdrs = headers();
  return {
    logoUrl: hdrs.get("x-tenant-logo-url") || LOGO_URL,
    name: hdrs.get("x-tenant-name") || APP_NAME,
    slug: hdrs.get("x-tenant-slug") || null,
  };
}
