// =============================================================================
// Interactive lesson definition — Bureau Lesson 1.3 "The Economics Pitch That Closes"
//
// Authoring source for the narrated interactive experience. The generator
// (scripts/generate-lesson-media.mjs) reads this, produces ElevenLabs audio +
// timings per slide, and assembles the lesson media manifest.
//
// `narration` is the spoken script (also the caption + transcript). Slide
// visuals are code-driven (see components/learn/SlideView.tsx) — the fields
// below map directly onto that renderer.
// =============================================================================

export default {
  matchTitle: "The Economics Pitch That Closes",
  trackId: "bureau",
  key: "B1.3",

  slides: [
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Bureau Track · Module 1: Recruit More Offices",
      title: "The Economics Pitch That Closes",
      subtitle: "Lesson 3 · Narrated walkthrough",
      narration:
        "You have your prospects and you know their reasons. Now comes the part that actually closes them. Here is the simplest truth in bureau recruiting: offices leave for money. So your single strongest tool is an honest profit comparison. In this lesson you'll build a one-page economics model for each prospect, learn to compare it to whatever they have now, and master the rule that separates bureaus who grow from bureaus who churn: be honest and slightly conservative. We'll also cover a non-negotiable, the rules around earnings claims, because getting that wrong can cost you far more than any deal.",
    },
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core idea",
      title: "Numbers close, adjectives don't",
      lead: "You won't win an office by calling your software powerful. You win by showing them a bigger number.",
      bullets: [
        {
          label: "Adjectives are noise",
          text: "Powerful, easy, best-in-class — every bureau says them, so they mean nothing.",
        },
        {
          label: "A number is a decision",
          text: "A concrete dollar comparison gives the prospect something real to act on.",
        },
      ],
      narration:
        "Here is the core idea, and it is worth memorizing. Numbers close, adjectives don't. When you tell a prospect your software is powerful, your support is the best, your platform is easy, you sound exactly like every competitor, because they all say the same words. Adjectives are noise. But when you put a concrete dollar comparison in front of them, sixty thousand here versus thirty-five thousand where you are now, using illustrative figures, you have given them something real to decide on. A number forces a decision in a way a description never can. The whole skill of this lesson is replacing your adjectives with their numbers.",
    },
    {
      id: "s3",
      layout: "list",
      eyebrow: "The model",
      title: "The one-page economics model",
      bullets: [
        {
          label: "Gross fees",
          text: "Their volume × their average fee = total fees they collect.",
        },
        {
          label: "Their cost under you",
          text: "Software, your fee or split, and bank-product costs.",
        },
        {
          label: "Net to the bureau line",
          text: "Gross fees minus their cost under you = what's left at this line.",
        },
        {
          label: "Compare to now",
          text: "Put that number next to what they net under their current setup.",
        },
      ],
      narration:
        "Let's build the tool. For each prospect you make a one-page economics model, and it has just a few lines. Start with gross fees: their return volume times their average fee, the total they collect from clients. Then subtract their cost under you: the software cost, your fee or split, and the bank-product costs. What is left is their net to the bureau line. And finally, you place that number right next to what they net under their current setup, their franchise royalty or their worse split on another bureau. One page, four moves, and a side-by-side comparison that does the persuading for you. We are about to add one crucial honesty step to this, so stay with me.",
    },
    {
      id: "s4",
      layout: "tip",
      eyebrow: "Be precise",
      title: "It's net to the bureau line — not take-home",
      callout: {
        kind: "warn",
        title: "Don't call this their salary",
        text: "The number you compute stops at the bureau line. The prospect still subtracts preparer wages, office overhead, and self-employment or payroll taxes to reach true net income.",
      },
      narration:
        "Now the most important honesty point in the entire model, and the one that protects your reputation. The number you just computed is net to the bureau line. It is not take-home pay, and you must never let a prospect walk away thinking it is. After that line, the prospect still has to subtract their own preparer wages if they have staff, their office overhead like rent and software add-ons, and their self-employment or payroll taxes. Only after all of that do they reach their true net income. If you blur this and present the bureau-line number as their salary, you have set them up to feel cheated when reality arrives, and that feeling becomes the review that costs you ten future offices. Be precise about what the number is.",
    },
    {
      id: "s5",
      layout: "point",
      eyebrow: "Why it matters",
      title: "EROs leave for money",
      lead: "Almost every office that switches bureaus does it because the math finally made sense somewhere else.",
      bullets: [
        {
          label: "Money is the trigger",
          text: "Service and reliability matter, but the dollar gap is what makes them move.",
        },
        {
          label: "Make the gap visible",
          text: "Most prospects have never actually done this math on themselves.",
        },
      ],
      narration:
        "Let's be clear about why economics is the closing tool. EROs leave for money. Service matters, reliability matters, the relationship matters, and all of that keeps an office once they have joined. But the thing that actually triggers a switch is almost always the dollar gap. And here is what makes your job easier than you think: most prospects have never sat down and done this math on themselves. They have a vague sense that they are leaving money on the table, but they have never seen it as a clean number. When you do that math for them, honestly and clearly, you are not just selling. You are showing them something true about their own business that they could not see before.",
    },
    {
      id: "s6",
      layout: "list",
      eyebrow: "A real example",
      title: "Build the model: a franchise refugee",
      bullets: [
        {
          label: "Gross fees",
          text: "500 returns × $250 average fee = $125,000 in gross fees.",
        },
        {
          label: "Their cost with you",
          text: "Software, your modest fee, and bank-product costs — say about $65,000.",
        },
        {
          label: "Net to the bureau line, with you",
          text: "Roughly $60,000 at that line under your bureau.",
        },
        {
          label: "Versus now",
          text: "After a heavy franchise royalty, they net about $35,000 at the same line today.",
        },
      ],
      narration:
        "Let's work a full example, and remember, every number here is illustrative. Picture a franchise refugee who does five hundred returns a year at a two hundred fifty dollar average fee. That is one hundred twenty-five thousand dollars in gross fees. Under your bureau, their costs, the software, your modest fee, and bank-product costs, come to roughly sixty-five thousand. That leaves about sixty thousand dollars at the bureau line. Now under their current franchise, after a heavy royalty and the franchise's own fees, they net closer to thirty-five thousand at that same line. Sixty thousand with you versus thirty-five where they are. That twenty-five-thousand-dollar gap, built from their own volume and fees, is the most persuasive sentence in your entire pitch.",
    },
    {
      id: "s7",
      layout: "tip",
      eyebrow: "A real example",
      title: "Say the gap out loud",
      callout: {
        kind: "quote",
        title: "The line that lands",
        text: "\"On your own volume, you'd net about $60,000 at this line with us versus roughly $35,000 today — and that's before your wages, overhead, and taxes either way.\"",
      },
      narration:
        "Here is how you say that gap out loud, with the honesty built right in. Something like: on your own volume, you would net about sixty thousand dollars at this line with us, versus roughly thirty-five thousand today, and that is before your wages, overhead, and taxes either way. Notice three things in that sentence. You used their volume, not a made-up average. You named both numbers, so the comparison is concrete. And you put the honesty disclaimer right inside the pitch, the part about wages, overhead, and taxes, so you are never accused of overselling. That single sentence, delivered calmly, does more than a forty-slide deck. The gap is real, it is theirs, and you stated it straight.",
    },
    {
      id: "s8",
      layout: "point",
      eyebrow: "The rule that matters most",
      title: "Be honest and slightly conservative",
      lead: "The number you show should be one you're confident they can actually hit or beat.",
      bullets: [
        {
          label: "Inflated numbers churn offices",
          text: "A projection that doesn't come true creates an angry office who badmouths you.",
        },
        {
          label: "Conservative numbers build trust",
          text: "A realistic number that comes true turns one office into a referral engine.",
        },
      ],
      narration:
        "Now the rule that matters more than any clever pitch technique: be honest and slightly conservative. The temptation is always to show the rosiest possible number to win the deal. Resist it completely. Here is the math of why. An inflated projection that does not come true creates a churned, angry office, and in this small industry, that office will badmouth you in every group they belong to. But a realistic number, even a slightly conservative one, that actually comes true turns that office into a believer. They tell other preparers, here is exactly what this bureau said, and here is what happened, and it matched. That is how one honest projection becomes a referral engine. Conservative and true beats optimistic and wrong every single time.",
    },
    {
      id: "s9",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "Underpromise, then overdeliver",
      callout: {
        kind: "stat",
        title: "The compounding cost of one bad number",
        text: "Illustrative: one inflated projection that disappoints can cost you several referrals it would have earned. The math of hype is negative.",
      },
      narration:
        "Put the trade-off in numbers. Imagine you inflate a projection to win one deal you might otherwise have lost. You gain one office. But when that number disappoints, that office churns and, in a connected industry, tells others. Illustratively, that one bad number can cost you several referrals it would otherwise have earned, plus the support drag of a frustrated office along the way. The math of hype is negative. The math of honesty compounds. So the move is to underpromise slightly and then overdeliver, which means showing a number you are confident the prospect can hit or beat with normal effort. These figures are illustrative, but the direction is certain: conservative honesty pays you back with interest.",
    },
    {
      id: "s10",
      layout: "tip",
      eyebrow: "Compliance — non-negotiable",
      title: "Earnings claims are regulated",
      callout: {
        kind: "warn",
        title: "Treat every income figure as illustrative only",
        text: "Results vary widely by market, volume, and operator. Never present a projection as a promise. Use the prospect's own verified data, label projections as estimates, and have counsel review any earnings representations — the FTC and several state business-opportunity laws regulate earnings claims.",
      },
      narration:
        "This slide is the non-negotiable one, so listen closely. Any dollar figure you have heard in this lesson is illustrative only. Real results vary widely by market, by volume, and by operator, and you must never present a projected income number to a prospect as a promise. There are firm rules to follow. First, use the prospect's own verified data, their real volume and their real fees, not numbers you invented to look impressive. Second, label every projection clearly as an estimate, both out loud and in writing. Third, have your counsel review any earnings representations before they go into recruiting materials, because the Federal Trade Commission and several state business-opportunity laws regulate earnings claims. This is not optional polish. An earnings claim made carelessly can create real legal exposure. Use real data, label it as an estimate, and get it reviewed.",
    },
    {
      id: "s11",
      layout: "point",
      eyebrow: "Do this right",
      title: "Anchor everything to verified data",
      lead: "The safest and most persuasive projection uses numbers the prospect gave you.",
      bullets: [
        {
          label: "Ask, don't assume",
          text: "Get their actual return count and average fee before you model anything.",
        },
        {
          label: "Their numbers, your structure",
          text: "Plug their verified figures into your fee structure — the gap speaks for itself.",
        },
      ],
      narration:
        "Here is how you stay both persuasive and compliant at the same time: anchor everything to verified data. Before you model anything, ask the prospect for their actual numbers, their real return count and their real average fee from last season. Do not assume, and do not borrow an industry average to fill the gap. Then you plug their verified figures into your own fee structure, and the comparison writes itself. This does two things. It makes the projection honest, because it is built on facts they gave you. And it makes it more persuasive, because it is unmistakably about their business, not a generic pitch. The most compliant projection and the most convincing one are the same thing: their numbers, your structure.",
    },
    {
      id: "s12",
      layout: "list",
      eyebrow: "Do this",
      title: "The one-page model template",
      bullets: [
        {
          label: "Line 1 — Gross fees",
          text: "Verified volume × verified average fee.",
        },
        {
          label: "Line 2 — Cost with you",
          text: "Software + your fee/split + bank-product costs.",
        },
        {
          label: "Line 3 — Net to the bureau line",
          text: "Line 1 minus line 2. Label it: not take-home.",
        },
        {
          label: "Line 4 — Current setup",
          text: "Same math under what they have now. Show the gap. Mark it an estimate.",
        },
      ],
      narration:
        "Here is the copy-ready template you can rebuild for any prospect on a single page. Line one, gross fees: their verified volume times their verified average fee. Line two, cost with you: software plus your fee or split plus bank-product costs. Line three, net to the bureau line: line one minus line two, and write the words not take-home right next to it so there is no confusion. Line four, current setup: the same math under whatever they have now, so the gap is visible side by side. And across the bottom, in plain language, the words this is an estimate based on your reported figures, actual results vary. Four lines and one honest label. That page, built on their numbers, is your closer.",
    },
    {
      id: "s13",
      layout: "point",
      eyebrow: "Handle the pushback",
      title: "When they say the number's too good",
      lead: "A skeptical prospect is a gift — it's your chance to prove you're the honest one.",
      bullets: [
        {
          label: "Welcome the skepticism",
          text: "\"You're right to question it — let's walk it line by line with your numbers.\"",
        },
        {
          label: "Trim, don't defend",
          text: "If a line looks optimistic, lower it together. A defended number feels like a sales trick.",
        },
      ],
      narration:
        "Sometimes a sharp prospect will look at your comparison and say, that seems too good to be true. When that happens, do not get defensive, because that prospect just handed you a gift. Welcome the skepticism. Say something like, you are right to question it, let's walk it line by line with your numbers. Then go through the page together, and if any line looks even slightly optimistic, lower it with them, out loud. Trimming a number in front of a prospect does the opposite of what you might fear. It builds enormous trust, because it proves you are not running a sales trick, you are running an honest model. A defended number feels like pressure. A number you willingly trim feels like the truth. Skepticism handled well is where deals are actually won.",
    },
    {
      id: "s14",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Selling the dream, not the math",
      callout: {
        kind: "warn",
        title: "Don't quote a top performer's results to an average prospect",
        text: "Showing your best office's numbers as if they're typical is both dishonest and legally risky. Model the prospect in front of you, on their data — not your hero.",
      },
      narration:
        "Now the common mistake, and it is a tempting one. Selling the dream instead of the math. The bureau pulls out the numbers from their single best-performing office, a high-volume superstar, and shows them to an average prospect as if those results were typical. This is wrong on two levels. It is dishonest, because that prospect will almost certainly not match a top performer's results, and it is legally risky, because presenting an unrepresentative result as typical is exactly the kind of earnings claim regulators scrutinize. The fix is simple and we have said it throughout: model the prospect in front of you, on their own data, not your hero office. Their realistic number that comes true will close and keep them. Your superstar's number will win the deal and then lose the relationship.",
    },
    {
      id: "s15",
      layout: "action",
      eyebrow: "Your turn",
      title: "Build a model for a real prospect",
      callout: {
        kind: "action",
        title: "Use their verified numbers",
        text: "Pick one prospect. Get or estimate their real volume and average fee, build the four-line page, and write the gap as one honest sentence — labeled an estimate.",
      },
      narration:
        "Now it is your turn. Pick one real prospect from the pipeline you built last lesson. Get their verified volume and average fee, or your best honest estimate if you do not have it yet, and build the four-line page: gross fees, cost with you, net to the bureau line clearly marked as not take-home, and the same math under their current setup. Then write the gap as one honest sentence you could actually say on a call, with the estimate language built right in. Do this for one prospect today. When you are done, you will be holding the single most persuasive page in your entire recruiting kit, and it will be honest enough to stand behind for years.",
    },
    {
      id: "s16",
      layout: "action",
      eyebrow: "Your turn",
      title: "Audit your materials for claims",
      callout: {
        kind: "action",
        title: "Find every income number you show",
        text: "Go through your website, decks, and emails. Flag every dollar figure. Is it labeled illustrative? Built on real data? Has counsel reviewed it? Fix what isn't.",
      },
      narration:
        "One more exercise, and it is the responsible one. Go through every recruiting material you currently use, your website, your slide decks, your emails, your flyers, and find every single income or profit number you show a prospect. For each one, ask three questions. Is it clearly labeled as illustrative or an estimate? Is it built on real, representative data rather than a cherry-picked best case? And has counsel reviewed it? Anything that fails one of those questions, flag it and fix it before you send another prospect a single dollar figure. This is not busywork. It is the difference between an economics pitch that closes safely and one that quietly creates legal exposure you will not see until it is a problem.",
    },
    {
      id: "s17",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Numbers close, adjectives don't — build a one-page economics model for each prospect." },
        { text: "Volume × fee = gross fees, minus their cost with you = net to the bureau line (not take-home)." },
        { text: "Be honest and slightly conservative — inflated numbers churn offices; realistic ones refer." },
        { text: "Earnings claims are regulated: use verified data, label estimates, have counsel review." },
        { text: "Model the prospect in front of you on their own data — never your superstar office." },
      ],
      subtitle: "Up next: Referrals & Reputation in a Small Industry",
      narration:
        "Let's recap. One: numbers close and adjectives don't, so build a one-page economics model for every prospect. Two: their volume times their fee gives gross fees, minus their cost with you gives net to the bureau line, which is not take-home pay. Three: be honest and slightly conservative, because inflated numbers churn offices while realistic numbers that come true build referrals. Four: earnings claims are regulated, so use the prospect's verified data, label every projection an estimate, and have counsel review your materials. And five: always model the prospect in front of you on their own data, never your superstar. An honest number is also your best marketing, because it travels. Next, how reputation and referrals move through this small industry. Up next: Referrals and Reputation in a Small Industry.",
    },
  ],
};
