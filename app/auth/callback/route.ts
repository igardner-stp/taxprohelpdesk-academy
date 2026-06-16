import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getSessionUser, roleHome } from "@/lib/auth";

// Magic-link / invite / recovery callback: exchange the code for a session,
// then route to a safe `next` (e.g. /set-password for invites) or the role home.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next");

  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return NextResponse.redirect(`${origin}/login?error=link_invalid`);
    }
  }

  if (next && next.startsWith("/")) {
    return NextResponse.redirect(`${origin}${next}`);
  }
  const session = await getSessionUser();
  return NextResponse.redirect(`${origin}${roleHome(session?.profile?.role)}`);
}
