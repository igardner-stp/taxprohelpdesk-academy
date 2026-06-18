# Interactive Lesson Authoring Spec — TaxProHelpDesk Academy

**Goal:** Every lesson is a 10–15 minute narrated, code-driven interactive experience —
the industry's best self-guided training for independent tax offices (EROs) and
service bureaus. This spec is the single source of truth for authoring
`scripts/lessons/<KEY>.mjs` files. Read it fully before writing.

---

## 1. The file shape (exact)

Each lesson is one ES module that `export default`s an object. Copy this shape
exactly — the generator (`scripts/generate-lesson-media.mjs`) and the player read
these fields directly:

```js
export default {
  matchTitle: "Exact lesson title — must match scripts/seed.mjs LESSONS[].title",
  trackId: "ero" | "bureau",
  key: "E1.1",            // matches the lesson _key; output → /public/academy-media/<key>/
  slides: [ /* InteractiveSlide objects, in order */ ],
};
```

### Slide object fields

| field      | type                                   | notes |
|------------|----------------------------------------|-------|
| `id`       | string `"s1"`, `"s2"`, …               | sequential, unique within the lesson |
| `layout`   | `cover` \| `point` \| `list` \| `action` \| `tip` \| `recap` | see §3 |
| `eyebrow`  | string (optional)                      | small label above title; see §4 for the exact convention |
| `title`    | string (optional)                      | the slide headline |
| `subtitle` | string (optional)                      | cover: lesson label; recap: "up next" text |
| `lead`     | string (optional)                      | one-sentence intro under the title (point/tip/action) |
| `bullets`  | `[{ label?: string, text: string }]`   | list/point/recap; recap renders them as a numbered list |
| `callout`  | `{ kind, title?, text }`               | action/tip slides; `kind` ∈ `action`\|`tip`\|`warn`\|`stat`\|`quote` |
| `narration`| string (REQUIRED on every slide)       | the spoken script — also the caption + transcript |

**Hard rules**
- Every slide MUST have `narration`. It is the spoken audio AND the on-screen caption.
- Only the fields above exist. Do NOT invent fields (no `image`, `video`, `chart`,
  `table`) — the renderer ignores them and you'll mislead the learner.
- Keep visible text (title/lead/bullets/callout) SHORT. The narration carries the
  depth; the slide is the visual anchor, not a wall of text.

---

## 2. Length target (this is what "10–15 minutes" means)

Timing in preview (`--dry`) is computed at **360 ms/word + 0.5 s tail per slide**.
So total spoken words drive the runtime:

- **10 min ≈ 1,650 words**, **15 min ≈ 2,450 words** of narration across the lesson.
- **Target ~1,900–2,300 narration words per lesson** → lands ~11–14 min. Real
  ElevenLabs audio runs slightly longer, so this is a safe band.
- **Slide count: 24–34 slides.** Content slides ~55–80 narration words; cover/action
  shorter (~35–55); list slides can go to ~110 when walking several items.
- Do the math as you write. A lesson that totals under ~1,650 words is too short —
  add depth (examples, scripts, a mini-case, common mistakes), don't pad.

---

## 3. Layouts — what each renders & when to use it

The renderer is `components/learn/SlideView.tsx`. Core flow: eyebrow → title → lead
→ bullets/callout → subtitle. `layout` tunes alignment/emphasis only.

- **`cover`** — full-bleed dark title card. Use ONCE at the very start (s1). Fields:
  `eyebrow` (track/module), `title` (lesson name), `subtitle` (e.g. "Lesson 3 ·
  Narrated walkthrough"). Short narration that hooks + previews.
- **`point`** — one teaching idea. `title` + `lead` (one sentence) + 2–3 `bullets`
  (each with a bold `label:`). The workhorse layout. Use most often.
- **`list`** — a labelled set: segments, steps, a checklist, options. `title` +
  3–5 `bullets`. Top-aligned + scrollable, so it tolerates more items.
- **`action`** — a "your turn" prompt. `title` + `callout` with `kind:"action"`.
  Give the learner something concrete to write/do/calculate.
- **`tip`** — an insight/warning emphasis. `title` + `callout`. Use `kind:"tip"` for
  pro tips, `kind:"warn"` for mistakes/compliance, `kind:"stat"` for a punchy number
  (renders on a dark card), `kind:"quote"` for a sample script/line to say.
- **`recap`** — final slide. `title:"Key takeaways"` + 3–5 `bullets` (auto-numbered) +
  `subtitle` = the "up next" pointer to the next lesson. Narration recaps + bridges.

**Variety rule:** never run more than ~2 of the same layout back-to-back. A good
lesson rhythm: cover → point → tip/stat → list → point → action → point → warn →
list (mini-case) → action → recap. Mix it.

---

## 4. Eyebrow & cover conventions (consistency across all 29)

- **Cover (s1) eyebrow:** `"<Track> · Module <n>: <Module short name>"`
  - ERO track label: `ERO Track`; Bureau track label: `Bureau Track`
  - e.g. `"ERO Track · Module 2: Scale Your Staff"`, `"Bureau Track · Module 1: Recruit More Offices"`
- **Cover subtitle:** `"Lesson <n> · Narrated walkthrough"` (n = lesson order in module).
- **Content-slide eyebrows:** short section labels that track the arc — e.g.
  `"The core idea"`, `"Why it matters"`, `"Do this"`, `"Common mistake"`,
  `"By the numbers"`, `"A real example"`, `"Your turn"`, `"Script"`, `"Recap"`.
- **Recap subtitle:** `"Up next: <next lesson title>"`. For the LAST lesson in a
  module, point to the next module's first lesson; for the final lesson of a track,
  use `"You've completed this module — take the quiz to lock it in."` or similar.

---

## 5. The lesson arc (every lesson follows this spine)

1. **Cover + hook (s1):** name the lesson, state the stakes in one breath, preview
   what they'll be able to DO by the end.
2. **Why it matters (1–2 slides):** the cost of getting this wrong / the size of the
   prize. A `stat` callout works well here.
3. **Core teaching (the bulk, ~60%):** break the topic into 3–5 teachable chunks.
   Each chunk = 1–3 slides. Use concrete numbers, named tools, real tactics specific
   to tax offices/bureaus. Show, don't just assert.
4. **Make it real (1–2 slides):** a mini scenario / worked example / sample script
   ("here's exactly what to say"). This is what makes it industry-leading.
5. **Common mistakes (1 slide, `warn`):** the 2–3 ways people blow this.
6. **Your turn (1–2 `action` slides):** a concrete exercise they can complete now.
7. **Recap (final slide):** 3–5 numbered takeaways + bridge to the next lesson.

---

## 6. Voice, content quality & the audience

**Audience.**
- **ERO track** = owners/operators of independent tax-prep offices. They run small
  teams, live and die by tax season, are refund/credit-savvy, often serve working
  families, gig workers, small biz, and immigrant/ITIN communities. Speak to an
  owner who wears every hat and has limited time and cash.
- **Bureau track** = service-bureau operators who resell pro tax software + bank
  products + support to a network of ERO offices. They think in recruiting,
  retention, unit economics, overrides, and seasonal support load.

**Voice.** Warm, direct, expert peer — like the best franchise field-coach you ever
had. Second person ("you"). Short sentences. Specific over generic. No fluff, no
hype, no "in today's fast-paced world." Earn trust with concrete detail.

**Make it the best in the industry.** For each lesson include at least:
- 1 concrete worked example with real-feeling numbers (clearly framed as illustrative).
- 1 ready-to-use script, template, checklist, or formula they can copy.
- 1 "common mistake / what NOT to do."
- Tactics that are specific to the tax-prep / bureau world (Google Business Profile
  for tax offices, EITC/CTC timing, bank products / refund-transfer economics, EFIN,
  PTIN, off-season touchpoints, January–February spend windows, etc.).

---

## 7. Narration writing rules (it's spoken audio + captions)

- Write for the EAR. Read it aloud in your head. Natural, conversational sentences.
- **No markdown, no bullets, no symbols** inside `narration`. No `**bold**`, no `-`,
  no `#`. Spell out structure in words ("First… Second… Third…").
- **Numbers for speech:** small counts as words ("two or three", "the first thirty
  days"). Money and stats can stay as figures ("$250", "30 percent", "80 percent") —
  write percentages as the word "percent" rather than the `%` sign so it reads
  cleanly. Avoid ranges with a bare hyphen read oddly; prefer "fifty to eighty dollars".
- Don't read the slide text verbatim. Narration EXPANDS on the bullets — adds the
  why, the example, the nuance. Slide = headline; narration = the coaching.
- Keep each slide's narration self-contained enough to make sense if a learner
  jumps to it from the chapter list, but write smooth transitions ("Now that you've
  picked your segments, let's turn them into clients.").

---

## 8. Compliance & accuracy guardrails (NON-NEGOTIABLE)

This is professional tax-industry training. Wrong or risky claims destroy trust and
create legal exposure. Apply these everywhere they're relevant:

- **Earnings claims are illustrative only.** Any dollar income/profit figure must be
  framed as an example, never a promise. When a lesson leans on income projections
  (especially Bureau recruiting / economics lessons), include a `warn` callout slide
  stating the figures are illustrative, results vary, and earnings claims are
  regulated (FTC + several state business-opportunity laws) — use the prospect's own
  verified numbers and have counsel review recruiting materials.
- **ITIN / CAA:** only advertise or promise ITIN/W-7 services if the office holds
  Certifying Acceptance Agent status or partners with one. Say so when ITIN comes up.
- **Referral incentives to clients:** note that a few states restrict rebates/referral
  fees for professional services — "confirm your state's rules first."
- **Bank products / refund transfers:** describe economics accurately; settlement
  practices vary by bank/program. Don't overstate guaranteed amounts or timing.
- **Not tax/legal advice:** this is business-growth training, not tax law. Don't give
  specific tax-law determinations; point operators to official IRS guidance / their
  own professional judgment where a tax-law question arises.
- **No guarantees.** Retention/renewal/ROI figures are "industry rules of thumb" or
  "many offices report," not promises. Keep that hedging in the narration.

Preserve any compliance language already present in the seed `body` for that lesson
(e.g. B1.3's earnings-claims disclaimer) — expand it into a dedicated `warn` slide.

---

## 9. Process

1. Read the lesson's current `body` in `scripts/seed.mjs` (it's the content seed —
   keep its facts, expand massively).
2. Read `scripts/lessons/E1.1.mjs` as the structural template (note: E1.1 is only
   ~2.5 min — you are writing 4–6× that depth, but match its style & field usage).
3. Write `scripts/lessons/<KEY>.mjs` following this spec. Hit the word target (§2).
4. Self-check before finishing: word count in band? layouts varied? one worked
   example + one script/template + one mistake + compliance where relevant? eyebrow/
   subtitle conventions correct? narration free of markdown/symbols?

Do NOT run the generator or touch the database — the orchestrator handles generation,
seed-body expansion, and verification centrally.
