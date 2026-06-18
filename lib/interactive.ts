// =============================================================================
// Interactive narrated lessons — shared types
//
// A lesson can carry a `media_manifest` (lessons.media_manifest jsonb). When
// present, the lesson page renders an in-app interactive player: code-driven
// HTML/CSS slides that advance in sync with ElevenLabs narration, with live
// captions, scrubbing, chapter nav, and replay. When absent, the lesson falls
// back to the markdown/video renderer.
//
// Authoring + audio generation live in scripts/generate-lesson-media.mjs and
// scripts/lessons/*.mjs. Keep this file framework-agnostic (no React imports)
// so the Node generator can import it for shape reference.
// =============================================================================

// Slide layouts. They mostly share one renderer (eyebrow → title → lead →
// bullets/callout); `layout` tunes emphasis and alignment.
//   cover   — full-bleed title card (lesson open)
//   point   — a single teaching point with bullets
//   list    — a labelled list of items (e.g. segments, steps)
//   action  — a "your turn" prompt, rendered as a fill-in callout
//   tip     — an emphasis/insight callout
//   recap   — numbered key takeaways + "up next"
export type SlideLayout = "cover" | "point" | "list" | "action" | "tip" | "recap";

export type CalloutKind = "action" | "tip" | "warn" | "stat" | "quote";

// One narration word with its start/end offset *within the slide's audio*, in
// milliseconds. Produced from ElevenLabs character-level timestamps; drives the
// karaoke-style caption highlight. Optional — captions still work without it.
export interface SlideWord {
  w: string;
  start: number;
  end: number;
}

export interface SlideBullet {
  label?: string; // bold lead-in, e.g. "The fix"
  text: string;
}

export interface SlideCallout {
  kind: CalloutKind;
  title?: string;
  text: string;
}

export interface InteractiveSlide {
  id: string;
  layout: SlideLayout;
  eyebrow?: string; // small label above the title (module / section)
  title?: string;
  subtitle?: string; // cover: lesson label; recap: "up next"
  lead?: string; // one-sentence intro under the title
  bullets?: SlideBullet[];
  callout?: SlideCallout;

  // The spoken script for this slide. Always present — it's also the caption
  // and the accessible transcript.
  narration: string;

  // Audio + timing (filled in by the generator). audioUrl is app-relative
  // (served from /public) or an absolute Storage URL. durationMs drives the
  // timeline; `words` (optional) drives caption highlighting.
  audioUrl: string;
  durationMs: number;
  words?: SlideWord[];
}

export interface LessonMediaManifest {
  version: number;
  voiceId?: string;
  modelId?: string;
  generatedAt?: string;
  // Total runtime in ms (sum of slide durations) — cached for the timeline.
  totalMs: number;
  slides: InteractiveSlide[];
}

// Sum of slide durations (manifest.totalMs is the cached copy).
export function manifestTotalMs(m: LessonMediaManifest): number {
  return m.slides.reduce((acc, s) => acc + (s.durationMs || 0), 0);
}

// mm:ss formatter for the timeline/labels.
export function fmtTime(ms: number): string {
  const total = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
