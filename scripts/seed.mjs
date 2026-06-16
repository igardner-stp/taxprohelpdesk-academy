/**
 * TaxProHelpDesk Training Academy — Seed Script
 *
 * Idempotent: safe to run multiple times.
 * NOTE: Re-seeding clears all modules (and cascades to lessons, quizzes,
 * and lesson_progress) for tracks "ero" and "bureau". Any learner progress
 * on those tracks will be lost when the seed runs.
 *
 * Usage:
 *   node scripts/seed.mjs
 *
 * Requires .env.local in the project root with:
 *   NEXT_PUBLIC_SUPABASE_URL=...
 *   SUPABASE_SERVICE_ROLE_KEY=...
 */

import { config } from "dotenv";
config({ path: ".env.local" });

import { createClient } from "@supabase/supabase-js";

// ---------------------------------------------------------------------------
// Bootstrap
// ---------------------------------------------------------------------------

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error(
    "ERROR: Missing required environment variables.\n" +
      "  NEXT_PUBLIC_SUPABASE_URL  : " +
      (SUPABASE_URL ? "ok" : "MISSING") +
      "\n" +
      "  SUPABASE_SERVICE_ROLE_KEY : " +
      (SERVICE_KEY ? "ok" : "MISSING") +
      "\n" +
      "Make sure .env.local exists in the project root and contains both values."
  );
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false },
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function check(label, { data, error }) {
  if (error) {
    console.error(`Supabase error during "${label}":`, error);
    throw error;
  }
  return data;
}

// ---------------------------------------------------------------------------
// Track data
// ---------------------------------------------------------------------------

const TRACKS = [
  {
    id: "ero",
    name: "Get More Taxpayers — For Tax Offices",
    description:
      "For independent tax-office owners (EROs): get more taxpayers in the door, build a team, and reinvest to grow.",
    order_index: 1,
  },
  {
    id: "bureau",
    name: "Grow Your Service Bureau",
    description:
      "For service bureaus: recruit more offices, support and retain them, and scale the bureau.",
    order_index: 2,
  },
];

// ---------------------------------------------------------------------------
// Module data
// ---------------------------------------------------------------------------

const MODULES = [
  // ── ERO track ──────────────────────────────────────────────────────────
  {
    _key: "E1",
    track_id: "ero",
    title: "Get More Taxpayers (Marketing & Client Acquisition)",
    description:
      "Fill your office with the right taxpayers — targeting, referrals, local marketing, paid ads, and retention.",
    order_index: 1,
  },
  {
    _key: "E2",
    track_id: "ero",
    title: "Scale Your Staff (Build & Lead a Team)",
    description:
      "Hire, train, pay, and lead a team so the office grows beyond the owner's own hours.",
    order_index: 2,
  },
  {
    _key: "E3",
    track_id: "ero",
    title: "Reinvest to Grow (Financial Strategy)",
    description:
      "Know your numbers and reinvest profit on purpose to compound growth season over season.",
    order_index: 3,
  },
  // ── Bureau track ────────────────────────────────────────────────────────
  {
    _key: "B1",
    track_id: "bureau",
    title: "Recruit More Offices (Grow Your ERO Base)",
    description:
      "Fill your pipeline with the right offices and close them with honest economics.",
    order_index: 1,
  },
  {
    _key: "B2",
    track_id: "bureau",
    title: "Support & Retain Your Offices (Reduce Churn)",
    description:
      "Stop losing the offices you already signed — onboarding, scalable support, loyalty, and problem offices.",
    order_index: 2,
  },
  {
    _key: "B3",
    track_id: "bureau",
    title: "Scale the Bureau (Operations, Economics & Expansion)",
    description:
      "Know your unit economics, reinvest on a plan, build a team, and grow revenue per office.",
    order_index: 3,
  },
];

// ---------------------------------------------------------------------------
// Lesson data  (module_key used to look up the generated module id)
// ---------------------------------------------------------------------------

const LESSONS = [
  // ── E1 ──────────────────────────────────────────────────────────────────
  {
    _key: "E1.1",
    _module_key: "E1",
    title: "Know Who You Serve",
    order_index: 1,
    video_url: null,
    image_urls: null,
    tags: ["marketing", "ideal-client", "targeting"],
    body: `Before spending a dollar on marketing, define your ideal client. A tax office that markets to "everyone" reaches no one. Pick 2–3 client types and build everything around them.

**High-value segments for independent offices:**

- **Working families claiming credits (EITC, Child Tax Credit)** — high volume, refund-motivated, loyal, strong referrers
- **Gig & self-employed workers (rideshare, delivery, contractors, creators)** — growing fast, need Schedule C help, pay more for guidance
- **Small business owners (LLCs, S-corps)** — highest fee per return, year-round advisory potential, sticky
- **Recent immigrants / ITIN filers** — underserved, value trust and language match, refer heavily within community

**Action:** Write one sentence — *"I help ______ in ______ keep more of their money and file with confidence."* Every ad, sign, and script flows from that sentence.`,
  },
  {
    _key: "E1.2",
    _module_key: "E1",
    title: "Build a Referral Engine",
    order_index: 2,
    video_url: null,
    image_urls: null,
    tags: ["referrals", "client-acquisition", "systems"],
    body: `Referrals are the cheapest, highest-trust clients you'll ever get — and most offices never ask. Build a system, not hope.

1. **Ask at peak happiness** — right after you show the refund amount or finish the return: *"Glad we got you a great result. Most of my clients come from referrals — who else do you know who'd want this kind of help?"*
2. **Make it easy** — 3 referral cards or a one-tap text link; friction kills referrals.
3. **Incentivize both sides** — $25 to the referrer, $25 off for the new client; track it, pay it fast.
4. **Close the loop** — thank the referrer when their referral files; recognition drives more referrals than cash.

**Target:** 30%+ of new clients from referrals by year two (in an established office — a first-year office doing 15–20% is doing well). Track referral source on every intake.

**Before you launch a cash incentive:** most states allow referral rewards paid to clients, but a few restrict rebates or referral fees for professional services. Confirm your state's rules first.`,
  },
  {
    _key: "E1.3",
    _module_key: "E1",
    title: "Local Marketing That Works",
    order_index: 3,
    video_url: null,
    image_urls: null,
    tags: ["marketing", "local", "google-business"],
    body: `You serve a geographic area — win it. National-style branding wastes a local office's money.

**Highest-ROI tactics:**

- **Google Business Profile** — claim it, complete it, collect reviews relentlessly. This is the #1 free lever; ask every happy client for a Google review by text the same day. Aim for 50+ before next season.
- **Community presence** — churches, community centers, cultural associations, employer lunch-and-learns; trust transfers from the institution to you.
- **Hyperlocal social** — town/neighborhood Facebook groups, Nextdoor; be helpful, not spammy.
- **Strategic partnerships** — payroll services, realtors, used-car dealers, immigration attorneys; set up mutual referrals.

**Rule:** Track where every client came from. Kill what doesn't work; double down on what does.`,
  },
  {
    _key: "E1.4",
    _module_key: "E1",
    title: "Paid Advertising Without Wasting Money",
    order_index: 4,
    video_url: null,
    image_urls: null,
    tags: ["paid-ads", "google-ads", "marketing", "measurement"],
    body: `Paid ads work when targeted and measured; they drain cash when you "boost a post" and hope.

**Start with search intent:**
Google Ads on "tax preparer near me," "[city] tax help," "ITIN filing" (only advertise ITIN services if you hold CAA/Acceptance Agent status or partner with one) — ready-to-buy traffic, small daily budget ($15–30/day in season), tight radius, sent to a landing page with one action: book an appointment.

**Then layer social:**
Facebook/Instagram for awareness and retargeting by zip, age, life events. A video of you explaining one tax tip beats polished agency ads — people hire a person, not a logo.

**Always measure cost per acquisition (CPA):**
- CPA = ad spend ÷ new clients
- *Example:* if your average fee is $250 and roughly one in two paid clients refers someone, a $50–80 CPA is profitable — run this math with **your own** numbers, not these
- If CPA exceeds client value, change the ad or stop

**Timing:** Spend heavy late January–mid February, then taper. A tracked $500 beats an untracked $5,000.`,
  },
  {
    _key: "E1.5",
    _module_key: "E1",
    title: "Retention: The Multiplier",
    order_index: 5,
    video_url: null,
    image_urls: null,
    tags: ["retention", "client-experience", "growth"],
    body: `Acquiring a client costs 5–7x more than keeping one. Your biggest growth lever is never losing the clients you have.

**Off-season touchpoints** — don't vanish in March; quarterly tip email, mid-year check-in, a December "gather your docs" reminder.

**Year-round value** — estimated-tax reminders, withholding checks, IRS-letter help.

**Automatic rebooking** — text returning clients in January with a pre-filled booking link.

**Measure retention rate** — % of last year's clients who return. Strong offices typically see 80%+ (a common industry rule of thumb). Below that, survey the churned and fix the leak.

A retained client is a referral source, an upsell target, and free marketing. Protect them.`,
  },

  // ── E2 ──────────────────────────────────────────────────────────────────
  {
    _key: "E2.1",
    _module_key: "E2",
    title: "When to Hire",
    order_index: 1,
    video_url: null,
    image_urls: null,
    tags: ["hiring", "staffing", "operations"],
    body: `Hire when demand consistently exceeds capacity — not when you're already drowning, because by then service slips and you lose clients faster than you gain them.

**Signals it's time:**
- Turning away clients or stacking appointments past your quality bar
- Your own time is the revenue bottleneck
- Admin work eats hours you should spend preparing returns or selling

**First hire is usually admin/front desk** — offload low-skill work so your best hours go to returns and growth. **Second is a preparer** to multiply capacity.

A hire should pay for itself within one season.`,
  },
  {
    _key: "E2.2",
    _module_key: "E2",
    title: "Where to Find Preparers",
    order_index: 2,
    video_url: null,
    image_urls: null,
    tags: ["hiring", "recruiting", "training"],
    body: `Good preparers are made more than found.

**Where to look:**
- **Grow your own** — hire coachable people (retail, customer service, bookkeeping) and train them; cheaper, more loyal, shaped to your standards
- **Seasonal-to-permanent** — keep your best seasonal help
- **Referrals from staff and clients**
- **Community colleges & VITA programs** — people already learning tax basics

**Hire for attitude and trustworthiness; teach the tax.** You can train software in a week; you can't train character.`,
  },
  {
    _key: "E2.3",
    _module_key: "E2",
    title: "Train Fast, Train Consistently",
    order_index: 3,
    video_url: null,
    image_urls: null,
    tags: ["training", "onboarding", "SOPs", "quality"],
    body: `A scaling office needs repeatable training, not over-the-shoulder hoping.

**Build SOPs** — written, step-by-step, for intake, data entry, review, e-file, client handoff.

**Software certification path** — every preparer completes a structured walk-through before a live return.

**Shadow then reverse-shadow** — they watch you do 5, you watch them do 5, correct in real time.

**Quality review tier** — every new-preparer return is checked before e-file until they earn trust.

Document once; each new hire then takes days to onboard, not weeks.`,
  },
  {
    _key: "E2.4",
    _module_key: "E2",
    title: "Pay & Incentives That Drive Behavior",
    order_index: 4,
    video_url: null,
    image_urls: null,
    tags: ["compensation", "incentives", "team-management"],
    body: `How you pay shapes what people do.

**Compensation models:**
- **Base + per-return** — stability plus a volume incentive
- **Commission on fees** — motivates upsell and care; watch for corner-cutting

**Quality gates** — tie bonuses to accuracy (low amendment/rejection rate) and retention, not just count. If speed beats correctness, you pay in penalties and lost clients.

**Referral & review bonuses** — pay staff small amounts for generating reviews and referrals.

Pay competitively. Underpaying your best preparer means training them for a competitor.`,
  },
  {
    _key: "E2.5",
    _module_key: "E2",
    title: "Lead Without Micromanaging",
    order_index: 5,
    video_url: null,
    image_urls: null,
    tags: ["leadership", "team-management", "culture"],
    body: `Scaling means trusting others with work you used to do. Owners who can't let go cap growth at their own capacity.

**Set clear standards** — accuracy, turnaround, client experience — and measure against them.

**Use daily numbers, not hovering** — a simple dashboard (returns filed, appointments booked, review average).

**Coach, don't rescue** — walk a preparer through a hard return so they own it next time.

**Protect culture** — in season, recognition, fair scheduling, and a calm owner keep good people through the crunch and back next year.

Your job shifts from doing every return to building a team that does them well without you.`,
  },

  // ── E3 ──────────────────────────────────────────────────────────────────
  {
    _key: "E3.1",
    _module_key: "E3",
    title: "Know Your Numbers",
    order_index: 1,
    video_url: null,
    image_urls: null,
    tags: ["finance", "metrics", "profitability"],
    body: `You can't grow what you don't measure. Track monthly, year-round:

- **Revenue** — fees collected
- **Cost per return** — total costs ÷ returns
- **Gross margin** — revenue minus direct costs as a %
- **Client acquisition cost** — marketing ÷ new clients
- **Average revenue per client** — grow it via upsells and better mix
- **Cash position month by month** — tax revenue is seasonal; manage the off-season runway

Simple monthly books from day one beat gut feel.`,
  },
  {
    _key: "E3.2",
    _module_key: "E3",
    title: "The Reinvestment Mindset",
    order_index: 2,
    video_url: null,
    image_urls: null,
    tags: ["finance", "reinvestment", "profit-allocation"],
    body: `Profit isn't only for taking home — in a growing business a slice is fuel. Treat reinvestment as a planned expense decided before the season.

**A common split:**
- **50% owner pay + taxes** — pay yourself; set aside your own tax bill
- **30% reinvest in growth** — marketing, staff, tools, space
- **20% cash reserve** — off-season runway + emergencies

Push reinvestment higher when young and hungry; take more home when stable. The point is to decide on purpose, not by accident.`,
  },
  {
    _key: "E3.3",
    _module_key: "E3",
    title: "Where Reinvestment Pays Off Most",
    order_index: 3,
    video_url: null,
    image_urls: null,
    tags: ["reinvestment", "marketing", "operations", "ROI"],
    body: `Rank spending by return.

**Highest-return uses:**
1. **Marketing that's already working** — feed a channel that's already producing a strong return (many offices report 3–5x on proven channels — track your own numbers) before trying new things
2. **Retention systems** — cheap; protect the base you paid to acquire
3. **Staff capacity** — each productive preparer multiplies volume; the constraint is usually hours
4. **Software & automation** — cut time per return and errors so you handle more without proportional cost
5. **Client experience** — faster turnaround, clearer communication; drives retention and referrals, lowering future CAC

**Lower priority until those hum:** fancy buildouts, unproven ad experiments, premature locations.`,
  },
  {
    _key: "E3.4",
    _module_key: "E3",
    title: "Funding Growth Safely",
    order_index: 4,
    video_url: null,
    image_urls: null,
    tags: ["finance", "funding", "growth", "debt"],
    body: `Growth costs money before it makes money.

**Safest to riskiest:**

1. **Retained profit** — the 30% bucket; grow at the pace profit allows
2. **Pre-season line of credit** — borrow against expected season revenue to staff/market early, repay from season fees; only borrow what a realistic season repays
3. **Equipment/software financing** — predictable payments for tools that raise capacity
4. **Avoid high-interest debt to cover operating shortfalls** — that's a pricing or cost problem, not a growth move

Match money to use: short-term costs from short-term funds, long-term assets from long-term funds. Never fund recurring expenses with one-time cash.`,
  },
  {
    _key: "E3.5",
    _module_key: "E3",
    title: "Build a Multi-Season Growth Plan",
    order_index: 5,
    video_url: null,
    image_urls: null,
    tags: ["strategy", "planning", "growth"],
    body: `One great season is luck; repeatable growth is a plan.

**Set a 3-year target:** returns filed and revenue per season.

**Back into the requirements:** preparers, marketing spend, capacity — and cost it out.

**Sequence it:**
- **Year 1** — prove marketing and retention
- **Year 2** — add staff against proven demand
- **Year 3** — consider a second location or new service line (bookkeeping, business returns, advisory) once the core runs without you

Review quarterly — actuals vs. plan, adjust. The offices that compound reinvest on a plan instead of starting from zero every January.`,
  },

  // ── B1 ──────────────────────────────────────────────────────────────────
  {
    _key: "B1.1",
    _module_key: "B1",
    title: "Who You're Really Selling To",
    order_index: 1,
    video_url: null,
    image_urls: null,
    tags: ["recruiting", "bureau", "positioning"],
    body: `A bureau doesn't sell software — it sells an ERO a business in a box: software, support, bank products, and the confidence to run a season without getting stranded.

**Prospects and their real motive:**

- **New preparers leaving a franchise** — buy independence and margin
- **Existing independents unhappy with their current bureau** — buy reliability and a better deal
- **Side-hustlers going full-time** — buy hand-holding and legitimacy
- **Multi-office entrepreneurs** — buy scalability and override potential

Sell to the reason, not the feature list. The franchise refugee cares that they'll net $200/return instead of $40 — not your UI. Lead with their motive.`,
  },
  {
    _key: "B1.2",
    _module_key: "B1",
    title: "Build a Recruiting Pipeline",
    order_index: 2,
    video_url: null,
    image_urls: null,
    tags: ["recruiting", "pipeline", "bureau", "sales"],
    body: `Offices are recruited year-round; bureaus that wait until December fight over scraps.

**Pipeline stages:**
1. **Source** — referrals from current offices, tax-prep and local-business social groups, franchise-exit lists, preparers searching online
2. **Qualify** — EFIN or able to get one? Realistic volume? Coachable? A bad office costs support hours and bank-product risk.
3. **Pitch** — structured demo of software, support, bank products, and the money math
4. **Close** — clear pricing, signed agreement, fast setup so momentum holds
5. **Onboard** — the first 30 days decide if they stay

Track every prospect by stage so you can forecast your season instead of running on memory.`,
  },
  {
    _key: "B1.3",
    _module_key: "B1",
    title: "The Economics Pitch That Closes",
    order_index: 3,
    video_url: null,
    image_urls: null,
    tags: ["sales", "economics", "bureau", "pitch"],
    body: `EROs leave for money — your strongest tool is an honest profit comparison.

**Build a one-page model per prospect:**
- Their volume × their average fee = gross fees
- Minus their cost under you (software, your fee/split, bank-product costs) = their net **to the bureau line**
- This is *not* take-home pay — the prospect should also subtract preparer wages, office overhead, and self-employment/payroll taxes to reach true net income
- Put it next to whatever they have now (a franchise royalty or worse split)

*"$60K net with you vs. $35K where I am"* makes the point — numbers close, adjectives don't.

**Be honest and slightly conservative.** Inflated projections create churned, angry offices who badmouth you. A realistic number that comes true builds a referral machine.

> **Important — earnings claims.** Any dollar figures here are illustrative only; actual results vary widely by market, volume, and operator. Do not present projected income numbers to a prospect as a promise. Use the prospect's own verified data, label projections as estimates, and have counsel review any earnings representations before you put them in recruiting materials — the FTC and several state business-opportunity laws regulate earnings claims.`,
  },
  {
    _key: "B1.4",
    _module_key: "B1",
    title: "Referrals & Reputation in a Small Industry",
    order_index: 4,
    video_url: null,
    image_urls: null,
    tags: ["referrals", "reputation", "bureau", "trust"],
    body: `The professional tax world is small — preparers talk in groups, at IRS forums, in their communities.

**Turn current offices into recruiters:**
- Ask top offices for referrals after a good season; pay for it (bonus or per-return credit per activated office)
- Be visible where preparers gather — be the helpful expert, not the thread spammer
- **Protect your name** — fast support, correct and on-time bank-product settlements, no surprise fees (whether the bank settles to EROs directly or routes through you, own the relationship and fix any issues)

One stiffed office posting in a 10,000-member group costs more than any ad. In this industry trust is the product; recruiting is the visible result of a reputation earned off-season.`,
  },
  {
    _key: "B1.5",
    _module_key: "B1",
    title: "Marketing the Bureau",
    order_index: 5,
    video_url: null,
    image_urls: null,
    tags: ["marketing", "bureau", "content", "lead-generation"],
    body: `Recruiting one office at a time by phone caps growth at your stamina. Build an engine.

**Components:**
- **A real website + conversion landing pages** — economics pitch, support promise, clear "apply/book a demo" call to action; a sales tool, not a brochure
- **Targeted ads** — search on "professional tax software reseller," "become a service bureau ERO"; social targeting tax-prep and small-business interests
- **Content that recruits** — short videos on "how do I start my own tax office?" and "how do I get an EFIN?" attract exactly who you want and build authority
- **Monthly webinars/info sessions** — "Start or Grow Your Tax Office" fills the pipeline with pre-sold prospects

Measure **cost per activated office**, not per lead — a lead that never files is a cost.`,
  },

  // ── B2 ──────────────────────────────────────────────────────────────────
  {
    _key: "B2.1",
    _module_key: "B2",
    title: "Onboarding That Sticks",
    order_index: 1,
    video_url: null,
    image_urls: null,
    tags: ["onboarding", "retention", "bureau"],
    body: `The fastest growth is to stop losing offices you already signed. The leak usually starts in the first 30 days.

**Strong onboarding checklist:**
- Software setup verified — installed, registered, EFIN linked, test return filed — before the season heat
- Bank-product enrollment done early, not in a January scramble
- A live walk-through, not just a login
- Proactive 30/60/90 check-ins

Onboarding is retention insurance — up-front hours are far cheaper than recruiting a replacement office every year.`,
  },
  {
    _key: "B2.2",
    _module_key: "B2",
    title: "Support That Scales",
    order_index: 2,
    video_url: null,
    image_urls: null,
    tags: ["support", "scalability", "bureau", "operations"],
    body: `If support means the owner's cell phone, you cap the bureau at what one person can answer. Build systems first.

**Tiered support:**
- Knowledge base/FAQ for simple stuff
- Frontline staff for common issues
- You/senior for escalations only

**Infrastructure:**
- A ticketing system so nothing is lost in the February crush — and you can see what breaks most
- Seasonal staffing trained before the wave
- Self-service training so offices solve their own basics

Bureaus that scale past a few dozen offices make most support not require a human — document answers once, reuse every season.`,
  },
  {
    _key: "B2.3",
    _module_key: "B2",
    title: "Keep Offices Loyal",
    order_index: 3,
    video_url: null,
    image_urls: null,
    tags: ["retention", "loyalty", "bureau", "churn"],
    body: `Offices leave when they feel like a number, when support fails at the worst moment, or when a competitor offers attention you stopped giving.

**Loyalty is built off-season:**
- Quarterly check-ins and a mid-year tip when most bureaus go silent
- Renewal incentives for early re-sign and for volume growth
- **Make them better** — training, marketing help, coaching ties their success to staying
- **Listen** — survey offices; the complaints you don't hear walk to a competitor silently

**Renewal rate** is the best health metric: in an established bureau, 80–85%+ is widely considered strong. Below that, find and fix the leak.`,
  },
  {
    _key: "B2.4",
    _module_key: "B2",
    title: "Handle Problem Offices",
    order_index: 4,
    video_url: null,
    image_urls: null,
    tags: ["operations", "bureau", "risk-management"],
    body: `Not every office is worth keeping. Some create disproportionate support cost or bank-product/compliance risk — a few are simply unprofitable.

**Identify them:**
High support hours, low volume, frequent bank-product issues, slow/disputed payments.

**Playbook:**
1. **Coach first** — many problem offices are just untrained
2. **Price for risk** — if they stay, adjust terms to reflect the cost they create
3. **Cut when needed** — a chronically unprofitable or risky office that won't improve should be released

Your support hours are finite; every hour rescuing a lost cause is stolen from an office that would have grown.`,
  },

  // ── B3 ──────────────────────────────────────────────────────────────────
  {
    _key: "B3.1",
    _module_key: "B3",
    title: "Know Your Bureau Economics",
    order_index: 1,
    video_url: null,
    image_urls: null,
    tags: ["finance", "metrics", "bureau", "unit-economics"],
    body: `A bureau is a recurring-revenue business, and most owners can't state their per-office economics.

**Track:**
- **Revenue per office** — software fees, per-return splits, bank-product revenue
- **Cost to serve per office** — support, software, your time, overhead
- **Margin per office** — some offices are far more profitable; know which
- **Cost to acquire an office** — recruiting/marketing ÷ new active offices
- **Office lifetime value (LTV)** — margin × average years retained. *Example:* an office worth $800/year in net margin that stays 4 years has an LTV of $3,200; if it costs $400 to acquire, that's an 8:1 return — know this ratio before you spend on recruiting.
- **Active office count + renewal rate**

If LTV >> CAC, spend more recruiting. If not, fix retention first. The whole strategy — recruit harder, retain better, or raise prices — falls out of these numbers.`,
  },
  {
    _key: "B3.2",
    _module_key: "B3",
    title: "Reinvest to Grow the Bureau",
    order_index: 2,
    video_url: null,
    image_urls: null,
    tags: ["reinvestment", "bureau", "growth", "finance"],
    body: `Bureau profit is seasonal and can be large. Owners who compound reinvest a planned slice.

**Where reinvestment compounds:**
- **Retention systems** — onboarding, support tooling, training; cheapest growth there is
- **Proven recruiting** — once cost per activated office is below LTV, pour money into what works
- **Support infrastructure** — ticketing, knowledge base, seasonal staff; add offices without service collapse
- **Sales capacity** — a recruiter once the pitch is proven, so growth isn't capped by your calendar
- **Better bank-product/software terms** — volume earns better terms, which strengthen your pitch and fatten margin — a compounding loop

Decide the reinvestment budget before the season, not from what's left in April.`,
  },
  {
    _key: "B3.3",
    _module_key: "B3",
    title: "Build a Team Beyond Yourself",
    order_index: 3,
    video_url: null,
    image_urls: null,
    tags: ["team-building", "bureau", "operations", "leadership"],
    body: `A solo bureau caps at the founder's hours.

**Build out in order:**
1. **Support staff first** — offload high-volume, low-skill work
2. **A recruiter/sales rep** once the pitch is repeatable
3. **An onboarding/account manager** who owns the first 90 days and ongoing office health — the two retention drivers

**Document everything** — SOPs for onboarding, support, bank-product setup, recruiting — so hires ramp in days and quality holds.

Your job shifts from doing every demo and ticket to building a team and system that grow offices without you in every conversation.`,
  },
  {
    _key: "B3.4",
    _module_key: "B3",
    title: "Expand Revenue Per Office",
    order_index: 4,
    video_url: null,
    image_urls: null,
    tags: ["revenue", "bureau", "growth", "upsell"],
    body: `Recruiting is expensive; growing revenue from existing offices is cheaper and faster.

**Tactics:**
- **Help offices file more returns** — their growth is your growth; marketing and training support lift their volume and your splits
- **Ensure full bank-product/add-on enrollment** — un-enrolled offices leave money on the table for both of you
- **Tiered offerings** — premium support, marketing services, advanced tools as paid upgrades
- **Multi-office EROs** — help your best single offices open second and third locations; one great relationship can become five

Growing existing offices' volume is the highest-margin growth available, at near-zero acquisition cost.`,
  },
  {
    _key: "B3.5",
    _module_key: "B3",
    title: "Plan Multi-Season Bureau Growth",
    order_index: 5,
    video_url: null,
    image_urls: null,
    tags: ["strategy", "bureau", "planning", "growth"],
    body: `A bureau that plans grows on purpose.

**Build a 3-year plan:**
- **Targets** — active offices, total returns, revenue per season
- **Back into requirements** — support staff, recruiting spend, infrastructure — and cost it out

**Sequence it:**
- **Year 1** — nail onboarding and retention so the bucket stops leaking
- **Year 2** — scale proven recruiting and add support capacity
- **Year 3** — build the team/systems so the bureau runs without you; add revenue lines (marketing services, advanced training, multi-office expansion)

Review each season — actuals vs. plan. Bureaus that compound reinvest on a plan instead of restarting every January.`,
  },
];

// ---------------------------------------------------------------------------
// Quiz data  (keyed by lesson _key)
// ---------------------------------------------------------------------------

const QUIZZES = {
  "E1.1": {
    pass_threshold: 70,
    questions: [
      {
        q: "What is the recommended approach when defining your ideal client for a tax office?",
        choices: [
          "Market to everyone so you maximize potential reach",
          "Pick 2–3 specific client types and build all marketing around them",
          "Focus only on the highest-fee clients and ignore everyone else",
          "Let clients self-select without any targeting strategy",
        ],
        correct_index: 1,
        explanation:
          "A tax office that markets to 'everyone' reaches no one — picking 2–3 client types lets you craft a focused message that resonates.",
      },
      {
        q: "Which of the following is listed as a high-value segment because they are underserved, value trust and language match, and refer heavily within their community?",
        choices: [
          "Small business owners (LLCs, S-corps)",
          "Gig & self-employed workers",
          "Recent immigrants / ITIN filers",
          "Working families claiming EITC",
        ],
        correct_index: 2,
        explanation:
          "Recent immigrants and ITIN filers are specifically described as underserved, trust-and-language-sensitive, and strong within-community referrers.",
      },
      {
        q: "After identifying your ideal client, what is the recommended action to anchor all marketing?",
        choices: [
          "Create a detailed multi-page business plan",
          "Design a logo and brand color palette",
          "Write one sentence: 'I help ______ in ______ keep more of their money and file with confidence'",
          "Set a monthly ad budget and launch immediately",
        ],
        correct_index: 2,
        explanation:
          "A single positioning sentence crystalizes who you serve and where — every ad, sign, and script should flow from that statement.",
      },
    ],
  },

  "E1.4": {
    pass_threshold: 70,
    questions: [
      {
        q: "What should be your first paid advertising channel, and why?",
        choices: [
          "Facebook/Instagram, because the visual format builds brand recognition fastest",
          "Google Ads targeting search terms like 'tax preparer near me,' because those users already intend to buy",
          "Direct mail, because it reaches everyone in the zip code",
          "Boosting social posts, because it requires the least setup time",
        ],
        correct_index: 1,
        explanation:
          "Search intent signals that someone is ready to hire right now; Google Ads targeting 'tax preparer near me' captures that ready-to-buy traffic before layering awareness channels.",
      },
      {
        q: "How is cost per acquisition (CPA) calculated, and when does a $60 CPA make economic sense?",
        choices: [
          "CPA = new clients ÷ ad spend; it makes sense when it's below $20",
          "CPA = ad spend ÷ new clients; it makes sense when the client value (fees + referral potential) exceeds the CPA",
          "CPA = total revenue ÷ ad spend; it makes sense when the ratio is above 5",
          "CPA = ad spend ÷ total impressions; it makes sense for brand awareness campaigns",
        ],
        correct_index: 1,
        explanation:
          "CPA = ad spend ÷ new clients; if a client is worth $250+ in fees plus a referral, a $50–80 CPA is profitable — if CPA exceeds client value, stop or change the ad.",
      },
      {
        q: "What is the key principle for ad spending timing and measurement?",
        choices: [
          "Spread the budget evenly across all twelve months for consistent brand presence",
          "Spend only in April when the filing deadline drives urgency",
          "Concentrate spend late January–mid February, then taper — and never spend on ads you can't measure",
          "Avoid all paid advertising until you have at least 200 organic clients",
        ],
        correct_index: 2,
        explanation:
          "Tax season peaks late January through mid-February; concentrating spend there maximizes ROI, and measurement is non-negotiable — a tracked $500 beats an untracked $5,000.",
      },
    ],
  },

  "B1.3": {
    pass_threshold: 70,
    questions: [
      {
        q: "What is the core structure of the one-page economics model you should build for each ERO prospect?",
        choices: [
          "Their years of experience × hourly rate = projected income",
          "Their volume × their average fee − their costs under you = their net, compared to what they have now",
          "Your software cost + support cost + overhead = their break-even point",
          "Industry average fees × local market size = total addressable revenue",
        ],
        correct_index: 1,
        explanation:
          "The model is: prospect's volume × average fee = gross fees, minus their cost under you (software, split, bank-product costs) = net — then compare that net to their current situation.",
      },
      {
        q: "Why should your economic projections be honest and slightly conservative rather than optimistic?",
        choices: [
          "Regulators require conservative financial projections for ERO agreements",
          "Lower projections make it easier to exceed expectations and earn bonuses",
          "Inflated projections create churned, angry offices who badmouth you; a realistic number that comes true builds a referral machine",
          "Conservative projections reduce your bureau's legal liability",
        ],
        correct_index: 2,
        explanation:
          "An honest, slightly conservative projection that actually comes true turns a new office into a loyal advocate who refers others; inflated numbers that disappoint do the opposite.",
      },
      {
        q: "According to the lesson, what is the most persuasive element in closing an ERO prospect?",
        choices: [
          "A polished slide deck featuring the software's UI and feature list",
          "Testimonials and video reviews from current offices",
          "A concrete dollar comparison — e.g., '$60K net with you vs. $35K where I am' — because numbers close, adjectives don't",
          "A limited-time discount on the first-year software fee",
        ],
        correct_index: 2,
        explanation:
          "EROs are motivated by money; a clear, specific net-income comparison does the heavy lifting because concrete numbers are more persuasive than descriptive language.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("=== TaxProHelpDesk Academy — Seed Script ===\n");

  // 1. Upsert tracks
  console.log("1) Upserting tracks...");
  check(
    "upsert tracks",
    await supabase.from("tracks").upsert(TRACKS, { onConflict: "id" })
  );
  console.log(`   ✓ ${TRACKS.length} tracks upserted`);

  // 2. Delete existing modules for these tracks (cascades to lessons, quizzes, lesson_progress)
  console.log(
    "\n2) Deleting existing modules for tracks 'ero' and 'bureau'..."
  );
  console.log(
    "   NOTE: ON DELETE CASCADE will also remove all lessons, quizzes, and\n" +
      "   lesson_progress rows for these tracks. Learner progress is reset."
  );
  check(
    "delete modules",
    await supabase
      .from("modules")
      .delete()
      .in("track_id", ["ero", "bureau"])
  );
  console.log("   ✓ Old modules (and cascaded rows) deleted");

  // 3. Insert modules and collect generated ids
  console.log("\n3) Inserting modules...");
  const moduleRows = MODULES.map(({ _key, ...rest }) => rest);
  const insertedModules = check(
    "insert modules",
    await supabase.from("modules").insert(moduleRows).select()
  );

  // Build a lookup: _key → generated uuid
  // We match by (track_id, order_index) since _key was stripped before insert
  const moduleIdByKey = {};
  MODULES.forEach((m) => {
    const found = insertedModules.find(
      (r) => r.track_id === m.track_id && r.order_index === m.order_index
    );
    if (!found) {
      throw new Error(
        `Could not find inserted module for key ${m._key} (track=${m.track_id}, order=${m.order_index})`
      );
    }
    moduleIdByKey[m._key] = found.id;
  });
  console.log(`   ✓ ${insertedModules.length} modules inserted`);

  // 4. Insert lessons and collect generated ids (we need ids for the 3 quiz lessons)
  console.log("\n4) Inserting lessons...");
  const lessonRows = LESSONS.map(({ _key, _module_key, ...rest }) => ({
    ...rest,
    module_id: moduleIdByKey[_module_key],
  }));

  const insertedLessons = check(
    "insert lessons",
    await supabase.from("lessons").insert(lessonRows).select()
  );

  // Build a lookup: _key → generated uuid
  // Match by (module_id, order_index) since _key was stripped
  const lessonIdByKey = {};
  LESSONS.forEach((l) => {
    const moduleId = moduleIdByKey[l._module_key];
    const found = insertedLessons.find(
      (r) => r.module_id === moduleId && r.order_index === l.order_index
    );
    if (!found) {
      throw new Error(
        `Could not find inserted lesson for key ${l._key} (module=${l._module_key}, order=${l.order_index})`
      );
    }
    lessonIdByKey[l._key] = found.id;
  });
  console.log(`   ✓ ${insertedLessons.length} lessons inserted`);

  // 5. Insert quizzes for the 3 designated lessons
  console.log("\n5) Inserting quizzes...");
  const quizRows = Object.entries(QUIZZES).map(([lessonKey, quiz]) => ({
    lesson_id: lessonIdByKey[lessonKey],
    questions: quiz.questions,
    pass_threshold: quiz.pass_threshold,
  }));

  check(
    "insert quizzes",
    await supabase.from("quizzes").insert(quizRows)
  );
  console.log(`   ✓ ${quizRows.length} quizzes inserted`);
  console.log("     Lessons with quizzes: E1.1 (Know Who You Serve),");
  console.log(
    "       E1.4 (Paid Advertising Without Wasting Money),",
  );
  console.log("       B1.3 (The Economics Pitch That Closes)");

  // 6. Summary
  console.log("\n=== Seed complete ===");
  console.log(`   Tracks  : ${TRACKS.length}`);
  console.log(`   Modules : ${insertedModules.length}`);
  console.log(`   Lessons : ${insertedLessons.length}`);
  console.log(`   Quizzes : ${quizRows.length}`);
  console.log("");
}

main().catch((err) => {
  console.error("\nFATAL ERROR — seed aborted:", err?.message ?? err);
  process.exit(1);
});
