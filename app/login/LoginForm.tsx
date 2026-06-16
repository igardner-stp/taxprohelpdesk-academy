"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { roleHome } from "@/lib/roles";
import { Logo } from "@/components/Logo";
import { SUPPORT_PHONE, SUPPORT_PHONE_HREF } from "@/lib/constants";

export function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next");
  const linkError = params.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(
    linkError ? "That sign-in link expired or was already used. Please sign in below." : null
  );

  const supabase = createClient();

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
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
    router.push(next ?? roleHome(profile?.role));
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
          <h1 className="text-xl">Sign in</h1>
          <p className="mt-1 text-sm text-navy-500">
            Welcome back. Enter your email and password to continue your training.
          </p>

          <form onSubmit={signIn} className="mt-6 space-y-4">
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
            <div>
              <label className="label" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                className="input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-status-red">{error}</p>
            )}

            <button type="submit" disabled={loading} className="btn-primary w-full py-3">
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <div className="mt-5 text-center">
            <Link href="/reset-password" className="text-sm font-medium text-brand-600 hover:underline">
              Forgot your password?
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-navy-500">
          Access is by invitation. Need help? Call{" "}
          <a href={SUPPORT_PHONE_HREF} className="font-semibold text-brand-600">
            {SUPPORT_PHONE}
          </a>
        </p>
      </div>
    </div>
  );
}
