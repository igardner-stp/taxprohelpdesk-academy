/**
 * TaxProHelpDesk Academy — Interactive lesson media generator
 *
 * Turns a lesson definition (scripts/lessons/<KEY>.mjs) into a narrated,
 * code-driven interactive lesson:
 *   1. For each slide, generate ElevenLabs speech + word-level timings.
 *   2. Upload audio to Supabase Storage bucket "academy-media" (when --db).
 *      Without --db, write to public/academy-media/<KEY>/ for local testing.
 *   3. Push manifest JSON to the live lessons.media_manifest column (--db).
 *
 * Usage:
 *   node scripts/generate-lesson-media.mjs E1.1            # real audio, local files only
 *   node scripts/generate-lesson-media.mjs E1.1 --dry      # silent placeholders
 *   node scripts/generate-lesson-media.mjs E1.1 --db       # upload to Storage + write DB
 *
 * Requires .env.local in the project root with:
 *   ELEVENLABS_API_KEY=...           (omit only for --dry)
 *   ELEVENLABS_VOICE_ID=...          (an ElevenLabs voice id)
 *   ELEVENLABS_MODEL_ID=...          (optional, default eleven_multilingual_v2)
 *   NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY   (only for --db)
 *
 * SETUP: before the first --db run, apply the DB migration:
 *   node scripts/apply-schema-migration.mjs
 * Then create the Supabase Storage bucket:
 *   node scripts/setup-storage.mjs
 */

import { config } from "dotenv";
config({ path: ".env.local" });

import { writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");

// ---------------------------------------------------------------------------
// Args
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
const key = args.find((a) => !a.startsWith("--"));
const DRY = args.includes("--dry");
const PUSH_DB = args.includes("--db");

if (!key) {
  console.error("Usage: node scripts/generate-lesson-media.mjs <KEY> [--dry] [--db]");
  process.exit(1);
}

const VOICE_ID = process.env.ELEVENLABS_VOICE_ID;
const API_KEY = process.env.ELEVENLABS_API_KEY;
const MODEL_ID = process.env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";

if (!DRY && (!API_KEY || !VOICE_ID)) {
  console.error(
    "ERROR: real mode needs ELEVENLABS_API_KEY + ELEVENLABS_VOICE_ID in .env.local.\n" +
      "       Run with --dry to generate silent placeholders for UI testing."
  );
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

// A minimal silent WAV (8 kHz mono 16-bit) of the given length — used in --dry
// mode so the player has real, correctly-timed audio elements to drive.
function silentWav(ms) {
  const sampleRate = 8000;
  const numSamples = Math.max(1, Math.round((ms / 1000) * sampleRate));
  const dataSize = numSamples * 2;
  const buf = Buffer.alloc(44 + dataSize);
  buf.write("RIFF", 0);
  buf.writeUInt32LE(36 + dataSize, 4);
  buf.write("WAVE", 8);
  buf.write("fmt ", 12);
  buf.writeUInt32LE(16, 16); // PCM chunk size
  buf.writeUInt16LE(1, 20); // PCM
  buf.writeUInt16LE(1, 22); // mono
  buf.writeUInt32LE(sampleRate, 24);
  buf.writeUInt32LE(sampleRate * 2, 28); // byte rate
  buf.writeUInt16LE(2, 32); // block align
  buf.writeUInt16LE(16, 34); // bits per sample
  buf.write("data", 36);
  buf.writeUInt32LE(dataSize, 40);
  // samples already zero (silence)
  return buf;
}

// Estimate timing for --dry: ~165 wpm with a short tail.
function estimateTiming(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const perWord = 360; // ms
  const tail = 500;
  const durationMs = words.length * perWord + tail;
  const timed = words.map((w, i) => ({
    w,
    start: i * perWord,
    end: (i + 1) * perWord,
  }));
  return { durationMs, words: timed };
}

// Convert ElevenLabs character-level alignment into word-level timings (ms).
function wordsFromAlignment(alignment) {
  const chars = alignment.characters || [];
  const starts = alignment.character_start_times_seconds || [];
  const ends = alignment.character_end_times_seconds || [];
  const out = [];
  let cur = "";
  let curStart = null;
  let curEnd = 0;
  const flush = () => {
    if (cur.length > 0 && curStart != null) {
      out.push({ w: cur, start: Math.round(curStart * 1000), end: Math.round(curEnd * 1000) });
    }
    cur = "";
    curStart = null;
  };
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (/\s/.test(ch)) {
      flush();
    } else {
      if (curStart == null) curStart = starts[i] ?? curEnd;
      cur += ch;
      curEnd = ends[i] ?? curEnd;
    }
  }
  flush();
  const durationMs = ends.length ? Math.ceil((ends[ends.length - 1] || 0) * 1000) : 0;
  return { words: out, durationMs };
}

// Call ElevenLabs TTS-with-timestamps for one slide. Returns { audio(Buffer),
// words, durationMs, ext }.
async function synthesize(text) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}/with-timestamps?output_format=mp3_44100_128`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "xi-api-key": API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      text,
      model_id: MODEL_ID,
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
        style: 0,
        use_speaker_boost: true,
      },
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`ElevenLabs ${res.status}: ${detail.slice(0, 400)}`);
  }
  const json = await res.json();
  const audio = Buffer.from(json.audio_base64, "base64");
  const alignment = json.alignment || json.normalized_alignment || {};
  const { words, durationMs } = wordsFromAlignment(alignment);
  return { audio, words, durationMs: durationMs || estimateTiming(text).durationMs, ext: "mp3" };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const defModule = await import(`./lessons/${key}.mjs`);
  const def = defModule.default;
  if (!def?.slides?.length) {
    throw new Error(`Lesson definition ${key} has no slides.`);
  }

  // When --db: upload to Supabase Storage; otherwise write to local public/ dir.
  const lessonKey = def.key || key;
  let supabase = null;
  let storageBucket = null;
  if (PUSH_DB) {
    const { createClient } = await import("@supabase/supabase-js");
    supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      { auth: { persistSession: false } }
    );
    storageBucket = "academy-media";
  }

  const outDir = join(PROJECT_ROOT, "public", "academy-media", lessonKey);
  if (!PUSH_DB) await mkdir(outDir, { recursive: true });

  console.log(
    `\nGenerating "${def.matchTitle}" (${def.slides.length} slides) — ${
      DRY ? "DRY (silent placeholders)" : `voice ${VOICE_ID} / ${MODEL_ID}`
    }${PUSH_DB ? " → Supabase Storage" : ""}\n`
  );

  const slides = [];
  for (let i = 0; i < def.slides.length; i++) {
    const s = def.slides[i];
    let audio, words, durationMs, ext;

    if (DRY) {
      const est = estimateTiming(s.narration);
      durationMs = est.durationMs;
      words = est.words;
      ext = "wav";
      audio = silentWav(durationMs);
    } else {
      const r = await synthesize(s.narration);
      audio = r.audio;
      words = r.words;
      durationMs = r.durationMs;
      ext = r.ext;
    }

    const fileName = `${s.id}.${ext}`;
    let audioUrl;

    if (PUSH_DB && supabase) {
      // Upload to Supabase Storage
      const storagePath = `${lessonKey}/${fileName}`;
      const mimeType = ext === "mp3" ? "audio/mpeg" : "audio/wav";
      const { error: upErr } = await supabase.storage
        .from(storageBucket)
        .upload(storagePath, audio, { contentType: mimeType, upsert: true });
      if (upErr) throw new Error(`Storage upload failed for ${storagePath}: ${upErr.message}`);
      const { data: { publicUrl } } = supabase.storage
        .from(storageBucket)
        .getPublicUrl(storagePath);
      audioUrl = publicUrl;
    } else {
      await writeFile(join(outDir, fileName), audio);
      audioUrl = `/academy-media/${lessonKey}/${fileName}`;
    }

    console.log(
      `  ✓ ${s.id} (${s.layout})  ${(durationMs / 1000).toFixed(1)}s  ${words.length} words`
    );

    slides.push({
      id: s.id,
      layout: s.layout,
      eyebrow: s.eyebrow,
      title: s.title,
      subtitle: s.subtitle,
      lead: s.lead,
      bullets: s.bullets,
      callout: s.callout,
      narration: s.narration,
      audioUrl,
      durationMs,
      words,
    });
  }

  const totalMs = slides.reduce((a, s) => a + s.durationMs, 0);
  const manifest = {
    version: 1,
    voiceId: DRY ? undefined : VOICE_ID,
    modelId: DRY ? undefined : MODEL_ID,
    totalMs,
    slides,
  };

  if (!PUSH_DB) {
    await writeFile(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
    console.log(
      `\nManifest → public/academy-media/${lessonKey}/manifest.json  (${(
        totalMs / 1000
      ).toFixed(1)}s total)\n`
    );
  } else {
    console.log(`\nAll slides uploaded to Supabase Storage (${(totalMs / 1000).toFixed(1)}s total)\n`);
  }

  if (PUSH_DB) {
    await pushToDb(def, manifest, supabase);
  } else {
    console.log("(Skipped DB. Re-run with --db to upload to Storage + push to lessons.media_manifest.)\n");
  }
}

async function pushToDb(def, manifest, supabase) {
  // Scope to the lesson's track so a title collision across tracks can't update
  // the wrong row.
  const { data: mods, error: modErr } = await supabase
    .from("modules")
    .select("id")
    .eq("track_id", def.trackId);
  if (modErr) throw modErr;
  const moduleIds = (mods || []).map((m) => m.id);

  const { data: rows, error: findErr } = await supabase
    .from("lessons")
    .select("id, title")
    .eq("title", def.matchTitle)
    .in("module_id", moduleIds);
  if (findErr) throw findErr;

  if (!rows || rows.length === 0) {
    console.error(`DB: no lesson titled "${def.matchTitle}" in track "${def.trackId}".`);
    process.exit(1);
  }
  if (rows.length > 1) {
    console.warn(`DB: ${rows.length} lessons match "${def.matchTitle}"; updating all.`);
  }

  const { error: updErr } = await supabase
    .from("lessons")
    .update({ media_manifest: manifest })
    .in(
      "id",
      rows.map((r) => r.id)
    );
  if (updErr) {
    if (updErr.message && updErr.message.includes("media_manifest")) {
      console.error(
        "\nDB ERROR: The 'media_manifest' column doesn't exist yet.\n" +
        "Run this SQL in the Supabase SQL Editor:\n\n" +
        "  ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS media_manifest jsonb;\n\n" +
        "Then re-run this script.\n"
      );
    }
    throw updErr;
  }
  console.log(`DB: media_manifest written to ${rows.length} lesson row(s). ✓\n`);
}

main().catch((err) => {
  console.error("\nGeneration failed:", err.message || err);
  process.exit(1);
});
