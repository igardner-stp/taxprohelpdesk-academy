"use client";

import { useEffect, useState } from "react";
import { InteractiveLessonPlayer } from "@/components/learn/InteractiveLessonPlayer";
import type { LessonMediaManifest } from "@/lib/interactive";

// Dev-only preview of the interactive narrated player. Loads a manifest written
// by scripts/generate-lesson-media.mjs straight from /public (no auth / no DB),
// so the player UX can be verified before wiring a real lesson. Visit
// /dev/interactive?key=E1.1 .
export default function DevInteractivePreview() {
  const [key, setKey] = useState("E1.1");
  const [manifest, setManifest] = useState<LessonMediaManifest | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const k = params.get("key");
    if (k) setKey(k);
  }, []);

  useEffect(() => {
    let on = true;
    setManifest(null);
    setError(null);
    fetch(`/academy-media/${key}/manifest.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`No manifest for "${key}". Run: node scripts/generate-lesson-media.mjs ${key} --dry`);
        return r.json();
      })
      .then((d) => on && setManifest(d))
      .catch((e) => on && setError(e.message));
    return () => {
      on = false;
    };
  }, [key]);

  return (
    <div className="layout-px mx-auto w-full max-w-3xl py-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
        Dev preview
      </p>
      <h1 className="mt-1 text-2xl">Interactive lesson — {key}</h1>
      <p className="mt-1 text-sm text-navy-500">
        Loaded from <code className="rounded bg-surface-100 px-1.5 py-0.5">/academy-media/{key}/manifest.json</code>
      </p>

      <div className="mt-6">
        {error && (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-status-amber">
            {error}
          </div>
        )}
        {!error && !manifest && (
          <div className="rounded-xl border border-surface-200 bg-white p-8 text-center text-sm text-navy-500">
            Loading…
          </div>
        )}
        {manifest && <InteractiveLessonPlayer manifest={manifest} />}
      </div>
    </div>
  );
}
