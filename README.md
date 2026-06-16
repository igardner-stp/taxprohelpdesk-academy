# TaxProHelpDesk Training Academy

A self-guided, ever-expanding training portal for the professional tax industry.
Two audiences, two tracks:

- **ERO track** — independent tax-office owners learning to get more taxpayers in the door.
- **Service Bureau track** — bureaus learning to recruit more offices and grow the bureau.

The library is **data-driven**: admins add modules and lessons through the UI with
**no code changes and no deploy**.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Supabase (Postgres + Auth + RLS) · deploys to Vercel. Mobile-first.

---

## 1. Local setup

```bash
npm install
cp .env.example .env.local   # then fill in real Supabase values
npm run dev                  # http://localhost:3000
```

`.env.local` keys (see `.env.example`):

| Key | Where | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | client + server | Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | client + server | RLS-gated anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | **server only** | Bypasses RLS — used only for admin invites / role & track / bureau writes. Never exposed to the browser. |
| `NEXT_PUBLIC_APP_URL` | server | Base URL used to build invite/reset links |
| `NEXT_PUBLIC_LOGO_URL` | optional | Defaults to the live brand logo; swap to a local `/logo.png` here |
| `NEXT_PUBLIC_SUPPORT_PHONE` | optional | Defaults to `(866) 377-4139` |

> A throwaway `.env.local` with placeholder values is enough for `next build`/`next dev`
> to start; real values are needed for auth and data.

## 2. Supabase setup

1. Create a Supabase project.
2. **Schema + RLS:** open the SQL editor and run [`supabase/schema.sql`](supabase/schema.sql).
   This creates every table, the SECURITY DEFINER helper functions, the
   auto-profile trigger, and all Row Level Security policies. It is re-runnable
   (it drops and recreates policies).
3. **Auth:** Authentication → Providers → enable **Email** (email/password).
   For real invite/reset emails, configure SMTP under Authentication → Emails.
   (Without SMTP you can still invite users — the admin UI shows a copyable
   setup link and a temp password, see §4.)
4. **Seed content:** with `.env.local` filled in, run:
   ```bash
   npm run seed
   ```
   Loads 2 tracks, 6 modules, 25 lessons, and 3 sample quizzes. Idempotent —
   re-running clears and reloads the two seed tracks (and their learner
   progress).
5. **Create the first admin:** invite/create your own user (or sign up once),
   then in the SQL editor:
   ```sql
   update public.profiles set role = 'admin' where email = 'you@example.com';
   ```
   Sign in → you land on `/admin`.

## 3. Deploy to Vercel

1. Push this repo to GitHub and import it into Vercel (framework auto-detected as Next.js).
2. Add the env vars from §1 in **Project → Settings → Environment Variables**
   (set `NEXT_PUBLIC_APP_URL` to the production URL).
3. In Supabase → Authentication → URL Configuration, add your Vercel URL to the
   **Site URL** and **Redirect URLs** (`https://your-app.vercel.app/auth/callback`).
4. Deploy. Run the schema + seed against your production Supabase project once.

---

## 4. How it works

### Roles & permissions (enforced by RLS, not just the UI)
- **admin** — full control. The **only** role that creates users, assigns tracks,
  grants roles, and edits content.
- **bureau_supervisor** — read-only reporting on the training progress of the EROs
  in the bureau(s) they supervise. Cannot create users, assign tracks, grant
  permissions, or edit content.
- **learner** — takes training; sees only their assigned track(s) and their own
  progress.

All access is enforced in Postgres via RLS policies (`supabase/schema.sql`).
Helper functions (`is_admin()`, `supervises()`, `user_assigned_track()`, …) are
`SECURITY DEFINER` so policies don't recurse.

### Onboarding (no open signup)
Admins create users in **Admin → Users**. Creating a user:
1. creates the auth user (service-role) and the `profiles` row (DB trigger),
2. sets role + assigned track(s) + bureau,
3. returns a **setup link** (and temp password) the admin can share. The invited
   user opens the link → `/set-password` → sets their password → lands in their
   track(s). `/reset-password` handles forgotten passwords. (When SMTP is
   configured, Supabase also emails the invite/reset link.)

### Independent per-track progress & certificates
A user assigned to both tracks gets a **separate** progress bar and certificate
for each. Finishing 100% of a track issues a `certificates` row and unlocks a
**printable certificate** (`/learn/[track]/certificate`, with print CSS).

### Lessons & quizzes
The lesson player renders markdown bodies, embedded video (`video_url`), and
images. A lesson with a quiz must be **passed** (≥ `pass_threshold`) to complete.
Quizzes are **graded server-side** (a server action) so correct answers are never
sent to the client until after submission; the score is stored on
`lesson_progress`.

### Admin content management (UI-only, no deploy)
Full CRUD for tracks → modules → lessons → quizzes, with up/down reordering
(persists `order_index`), tags, and title/tag search. The lesson editor has a
live markdown preview and a quiz builder. Adding content never requires a deploy.

---

## 5. Project structure

```
app/
  page.tsx                         landing (no public signup)
  login/  reset-password/  set-password/   auth screens
  auth/callback  auth/signout      route handlers
  learn/                           learner dashboard, track overview, lesson player, certificate
  learn/actions.ts                 markLessonComplete + submitQuiz (server-graded)
  admin/                           overview, users, bureaus, content, lesson editor, reports
  admin/actions.ts                 invite/role/track/bureau + content CRUD server actions
  bureau/                          supervisor overview + read-only office progress
lib/
  supabase/{client,server,admin,middleware}.ts
  auth.ts  roles.ts  types.ts  constants.ts
  data/{content,progress,certificate,bureau}.ts   shared, RLS-scoped data helpers
components/                        TopNav, Footer, ProgressBar, LessonMarkdown, icons, learn/*, admin/*
supabase/schema.sql                tables + RLS + helpers + trigger
scripts/seed.mjs                   loads all Section 8 content + sample quizzes
```

---

## 6. Build process — which agent produced what

Built with a **PM agent** that owned the shared contracts and integrated the work
of delegated sub-agents:

- **PM (integrator)** — project scaffold, Tailwind theme, `lib/supabase/*`,
  `lib/auth`, `lib/types`, `lib/data/*`, `supabase/schema.sql` (schema + RLS +
  triggers), shared components, the **learner area** (dashboard, track overview,
  lesson player, server-side quiz grading, printable certificates), **auth pages**
  (login/reset/set-password + callback), the **landing page**, the
  **bureau-supervisor** views, and final integration + the production build.
- **Admin-portal agent** — everything under `app/admin/**` and
  `components/admin/**`: users/invites, bureaus, the content manager
  (CRUD + reorder + search), the lesson + quiz editor, and reports, plus
  `app/admin/actions.ts`.
- **Content/seed agent** — `scripts/seed.mjs`: both tracks, six modules, all 25
  lessons (formatted as markdown), and 3 wired-up sample quizzes.
- **Content-QA agent** — one-time review of the seed content for accuracy,
  actionability, and claims/compliance risk (see §7).

PM integration notes: the QA findings below were applied to the seed content; the
admin agent's content search was extended to cover tags (the data layer now
returns lesson tags); and the supervisor read path was added to the `modules`/
`lessons` RLS policies so supervisors can compute downline completion percentages.

## 7. Content-QA findings (addressed)

The QA agent reviewed all 25 seed lessons. The ERO staffing module (E2) and most
lessons passed clean. Issues found and the fixes applied to `scripts/seed.mjs`:

- **BLOCKER — B1.3 (Economics Pitch):** the "$60K vs $35K" example is an implied
  earnings claim. **Fixed:** added a prominent earnings-claim disclaimer (results
  vary; don't present projections as promises; FTC/state business-opportunity
  laws regulate earnings claims; have counsel review recruiting materials).
- **B1.3 net formula** clarified to note it's pre–labor/overhead/SE-tax, not
  take-home.
- **E3.3** — replaced the unsourced "$4 per $1" with a qualified "3–5x, track your
  own numbers" range.
- **E1.2** — added a state-law hedge on cash referral incentives, and qualified
  the "30% referrals by year two" target for established offices.
- **E1.4** — reframed the "$50–80 CPA" figure as an explicit example, and added an
  ITIN/CAA acceptance-agent caveat.
- **B1.4** — clarified bank-product settlement mechanics (bank may pay EROs
  directly or route through the bureau).
- **B3.1** — added a worked LTV example (8:1 ratio).
- **E1.5 / B2.3** — softened the 80% retention / 85% renewal benchmarks to
  "rule of thumb" framing.

---

## 8. Verification status

- ✅ `npm run build` — full typecheck + production build of all 19 routes,
  static generation passes.
- ✅ Public pages (landing, login, reset) render correctly on desktop and mobile.
- ⏳ Authenticated flows (learner/admin/bureau dashboards, RLS, quiz grading,
  certificates, invites) require a live Supabase project to exercise end-to-end —
  run §2 against a real project to validate.
