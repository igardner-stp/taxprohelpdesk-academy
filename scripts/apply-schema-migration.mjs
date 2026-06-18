/**
 * TaxProHelpDesk Academy — Schema migration helper
 *
 * Applies DDL changes that can't be seeded via the JS client.
 * Safe to re-run (all statements use IF NOT EXISTS / IF EXISTS).
 *
 * Usage:
 *   node scripts/apply-schema-migration.mjs
 *
 * Requires .env.local with NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY.
 */

import { config } from "dotenv";
config({ path: ".env.local" });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

// Extract the project ref from the URL (e.g. knpeyekugrqwitsallkg)
const projectRef = new URL(SUPABASE_URL).hostname.split(".")[0];

// Migrations to apply (idempotent)
const MIGRATIONS = [
  {
    name: "Add media_manifest column to lessons",
    sql: "ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS media_manifest jsonb;",
  },
];

async function runSql(sql) {
  // Use the Supabase Management API to execute raw SQL
  const res = await fetch(
    `https://api.supabase.com/v1/projects/${projectRef}/database/query`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SERVICE_KEY}`,
      },
      body: JSON.stringify({ query: sql }),
    }
  );
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`SQL execution failed (${res.status}): ${JSON.stringify(body)}`);
  }
  return body;
}

async function main() {
  console.log("=== TaxProHelpDesk Academy — Schema Migration ===\n");
  console.log(`Project: ${projectRef}\n`);

  for (const m of MIGRATIONS) {
    process.stdout.write(`  Applying: ${m.name} ... `);
    try {
      await runSql(m.sql);
      console.log("✓");
    } catch (err) {
      console.log("✗");
      console.error(`  ERROR: ${err.message}`);
      process.exit(1);
    }
  }

  console.log("\n=== Migration complete ===");
  console.log("PostgREST schema cache will reload within ~30 seconds.");
  console.log(
    "Re-run generate-lesson-media.mjs with --db after the cache refreshes."
  );
}

main().catch((err) => {
  console.error("\nFATAL:", err.message || err);
  process.exit(1);
});
