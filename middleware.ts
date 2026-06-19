import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";
import { BASE_DOMAIN } from "@/lib/constants";

interface TenantData {
  name: string;
  logo_url: string | null;
  slug: string;
}

function extractSubdomain(host: string): string | null {
  const hostname = host.split(":")[0].toLowerCase();
  if (hostname === BASE_DOMAIN || hostname === `www.${BASE_DOMAIN}`) return null;
  if (hostname.endsWith(`.${BASE_DOMAIN}`)) {
    const sub = hostname.slice(0, -(BASE_DOMAIN.length + 1));
    return sub.length > 0 && sub !== "www" ? sub : null;
  }
  return null;
}

async function fetchTenant(slug: string): Promise<TenantData | null> {
  const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/tenants?slug=eq.${encodeURIComponent(slug)}&select=name,logo_url,slug&limit=1`;
  try {
    const res = await fetch(url, {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
      },
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const rows: TenantData[] = await res.json();
    return rows[0] ?? null;
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const slug = extractSubdomain(host);

  const extraHeaders: Record<string, string> = {};

  if (slug) {
    const tenant = await fetchTenant(slug);
    if (tenant) {
      extraHeaders["x-tenant-slug"] = tenant.slug;
      extraHeaders["x-tenant-name"] = tenant.name;
      if (tenant.logo_url) {
        extraHeaders["x-tenant-logo-url"] = tenant.logo_url;
      }
    }
  }

  return updateSession(request, extraHeaders);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
