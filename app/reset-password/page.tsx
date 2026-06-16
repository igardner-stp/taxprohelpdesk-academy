"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Logo } from "@/components/Logo";
import { SUPPORT_PHONE, SUPPORT_PHONE_HREF } from "@/lib/constants";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const supabase = createClient();

  async function sendReset(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const redirectTo = `${window.location.origin}/auth/callback?next=/set-password`;
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    setSent(true);
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
          {sent ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-2xl">
                ✉️
              </div>
              <h1 className="text-xl">Check your email</h1>
              <p className="mt-2 text-sm text-navy-600">
                If an account exists for{" "}
                <span className="font-semibold text-navy-900">{email}</span>, we&apos;ve
                sent a link to reset your password.
              </p>
              <Link href="/login" className="mt-5 inline-block text-sm font-medium text-brand-600 hover:underline">
                ← Back to sign in
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-xl">Reset your password</h1>
              <p className="mt-1 text-sm text-navy-500">
                Enter your email and we&apos;ll send you a secure link to set a new
                password.
              </p>
              <form onSubmit={sendReset} className="mt-6 space-y-4">
                <div>
                  <label className="label" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="input"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {error && (
                  <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-status-red">{error}</p>
                )}
                <button type="submit" disabled={loading} className="btn-primary w-full py-3">
                  {loading ? "Sending…" : "Email me a reset link"}
                </button>
              </form>
              <div className="mt-5 text-center">
                <Link href="/login" className="text-sm font-medium text-brand-600 hover:underline">
                  ← Back to sign in
                </Link>
              </div>
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
