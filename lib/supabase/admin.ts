import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// Service-role client — BYPASSES RLS. Server-only. Used exclusively where we
// must act outside a user's permissions:
//   - admin inviting users / setting roles / assigning tracks + bureau
//   - the auto-profile trigger is DB-side; this is the app-side counterpart
// NEVER import this into a client component.
export function createAdminClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
}
