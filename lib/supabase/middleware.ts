import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

type CookieToSet = { name: string; value: string; options?: CookieOptions };

// Public paths reachable without a session.
const PUBLIC_PREFIXES = ["/login", "/reset-password", "/set-password", "/auth"];

export async function updateSession(
  request: NextRequest,
  extraRequestHeaders: Record<string, string> = {}
) {
  // Merge any extra headers (e.g. x-tenant-*) so server components can read
  // them via headers(). Preserved even if the session refresh recreates the
  // response inside setAll().
  const baseHeaders = new Headers(request.headers);
  for (const [k, v] of Object.entries(extraRequestHeaders)) {
    baseHeaders.set(k, v);
  }

  let response = NextResponse.next({ request: { headers: baseHeaders } });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: CookieToSet[]) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          response = NextResponse.next({ request: { headers: baseHeaders } });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Refreshes the auth token if needed (must run on every request).
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;
  const isPublic =
    path === "/" || PUBLIC_PREFIXES.some((p) => path.startsWith(p));

  // Unauthenticated → bounce protected routes to /login.
  if (!user && !isPublic) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", path);
    return NextResponse.redirect(url);
  }

  return response;
}
