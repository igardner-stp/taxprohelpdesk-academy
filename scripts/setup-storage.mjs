/**
 * TaxProHelpDesk Academy — One-time storage + schema setup
 *
 * Creates the Supabase Storage bucket "academy-media" (public) used for
 * narrated lesson audio files.
 *
 * Run ONCE before the first --db audio generation:
 *   node scripts/setup-storage.mjs
 *
 * Requires .env.local with NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY.
 *
 * NOTE: The media_manifest column on the lessons table MUST also exist.
 *       Add it via the Supabase SQL Editor:
 *         ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS media_manifest jsonb;
 */

import { config } from "dotenv";
config({ path: ".env.local" });

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false },
});

async function main() {
  console.log("=== TaxProHelpDesk Academy — Storage Setup ===\n");

  // Create the academy-media bucket (public so audio URLs are accessible)
  const BUCKET = "academy-media";
  process.stdout.write(`Creating bucket "${BUCKET}" ... `);

  const { data: existing } = await supabase.storage.getBucket(BUCKET);
  if (existing) {
    console.log("already exists ✓");
  } else {
    const { error } = await supabase.storage.createBucket(BUCKET, {
      public: true,
      fileSizeLimit: 10 * 1024 * 1024, // 10 MB per file
      allowedMimeTypes: ["audio/mpeg", "audio/wav", "audio/ogg"],
    });
    if (error) {
      console.log("✗");
      console.error(`  ERROR: ${error.message}`);
      console.error("  Check that SUPABASE_SERVICE_ROLE_KEY has storage admin rights.");
      process.exit(1);
    }
    console.log("created ✓");
  }

  console.log("\n=== Storage setup complete ===");
  console.log(`Bucket: ${BUCKET} (public)`);
  console.log("\nNext steps:");
  console.log("1. Apply the DB migration in the Supabase SQL Editor:");
  console.log("   ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS media_manifest jsonb;");
  console.log("2. Top up ElevenLabs credits (need ~300k chars for 39 lessons).");
  console.log("3. Run: node scripts/generate-lesson-media.mjs <KEY> --db");
  console.log("   Or all at once: npm run generate:all");
}

main().catch((err) => {
  console.error("\nFATAL:", err.message || err);
  process.exit(1);
});
