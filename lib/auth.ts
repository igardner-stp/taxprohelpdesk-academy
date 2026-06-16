import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { roleHome, ROLE_LABEL } from "@/lib/roles";
import type { Role, ProfileRow } from "@/lib/types";

export { roleHome, ROLE_LABEL };

export interface SessionUser {
  authUser: { id: string; email?: string };
  profile: ProfileRow | null;
}

// Current signed-in user + their profile row (role lives here). Null if signed out.
export async function getSessionUser(): Promise<SessionUser | null> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return {
    authUser: { id: user.id, email: user.email },
    profile: (profile as ProfileRow) ?? null,
  };
}

// Guard a server layout/page. Redirects: signed-out → /login; wrong role → own home.
export async function requireRole(
  allowed: Role[]
): Promise<SessionUser & { role: Role; profile: ProfileRow }> {
  const session = await getSessionUser();
  if (!session) redirect("/login");

  const role = session.profile?.role;
  if (!role || !session.profile) redirect("/login");
  if (!allowed.includes(role)) redirect(roleHome(role));

  return { ...session, role, profile: session.profile };
}
