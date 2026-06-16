"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { roleHome } from "@/lib/roles";
import { Logo } from "@/components/Logo";
import { SUPPORT_PHONE, SUPPORT_PHONE_HREF } from "@/lib/constants";

// Invited / password-reset users land here (after /auth/callback established a
// session from the link). They set a password, then we route them by role.
export default function SetPasswordPage() {
  const router = useRouter();
  const supabase = createClient();

  const [checking, setChecking] = useState(true);
  const [hasSession, setHasSession] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setHasSession(!!data.user);
      setChecking(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password.length < 8) {
      setError("Use at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }
    setLoading(true);
    const { data, error } = await supabase.auth.updateUser({ password });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user!.id)
      .single();
    router.refresh();
    router.push(roleHome(profile?.role));
  }

  return (
    <div className="layout-px flex min-h-dvh items-center justify-center py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="panel p-7">
          <h1 className="text-xl">Set your password</h1>

          {checking ? (
            <p className="mt-4 text-sm text-navy-500">Verifying your link…</p>
          ) : !hasSession ? (
            <div className="mt-4">
              <p className="text-sm text-navy-600">
                Your link is invalid or has expired. Request a new one from the
                sign-in page.
              </p>
              <Link href="/reset-password" className="btn-primary mt-5 w-full py-3">
                Get a new link
              </Link>
            </div>
          ) : (
            <>
              <p className="mt-1 text-sm text-navy-500">
                Choose a password to finish setting up your Academy account.
              </p>
              <form onSubmit={save} className="mt-6 space-y-4">
                <div>
                  <label className="label" htmlFor="password">New password</label>
                  <input
                    id="password"
                    type="password"
                    required
                    autoComplete="new-password"
                    className="input"
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="label" htmlFor="confirm">Confirm password</label>
                  <input
                    id="confirm"
                    type="password"
                    required
                    autoComplete="new-password"
                    className="input"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                  />
                </div>
                {error && (
                  <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-status-red">{error}</p>
                )}
                <button type="submit" disabled={loading} className="btn-primary w-full py-3">
                  {loading ? "Saving…" : "Save and continue"}
                </button>
              </form>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-navy-500">
          Need help? Call{" "}
          <a href={SUPPORT_PHONE_HREF} className="font-semibold text-brand-600">
            {SUPPORT_PHONE}
          </a>
        </p>
      </div>
    </div>
  );
}
