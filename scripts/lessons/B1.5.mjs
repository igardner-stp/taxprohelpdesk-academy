// =============================================================================
// Interactive lesson definition — Bureau Lesson 1.5 "Marketing the Bureau"
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
  matchTitle: "Marketing the Bureau",
  trackId: "bureau",
  key: "B1.5",

  slides: [
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Bureau Track · Module 1: Recruit More Offices",
      title: "Marketing the Bureau",
      subtitle: "Lesson 5 · Narrated walkthrough",
      narration:
        "You've learned who you sell to, how to build a pipeline, how to pitch the economics, and how reputation drives referrals. But there is a ceiling on all of it: recruiting one office at a time, by phone, caps your growth at your own stamina. In this final lesson of the module, you'll build a marketing engine that works while you sleep, a real website, targeted ads, content that recruits, and monthly info sessions. And you'll learn the one metric that keeps it honest: measure cost per activated office, not cost per lead. Let's build the machine.",
    },
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core idea",
      title: "Stop trading hours for offices",
      lead: "Phone-by-phone recruiting doesn't scale — your calendar runs out before your ambition does.",
      bullets: [
        {
          label: "The stamina ceiling",
          text: "There are only so many calls you can make in a week. That's your hard cap.",
        },
        {
          label: "An engine works while you don't",
          text: "Marketing assets attract and pre-sell prospects around the clock, at scale.",
        },
      ],
      narration:
        "Here is the core idea. Recruiting one office at a time, by phone, caps your growth at your own stamina. There are only so many calls you can make in a week, only so many hours in your day, and once you hit that ceiling, your bureau simply cannot grow faster, no matter how good your pitch is. The answer is to build an engine. Marketing assets, a website, ads, content, and webinars, work while you sleep. They attract prospects, pre-sell them on your economics and your support promise, and deliver them to you already warm. You stop trading hours for offices and start building a machine that produces them. That shift is what separates a small bureau from a growing one.",
    },
    {
      id: "s3",
      layout: "list",
      eyebrow: "The engine",
      title: "Four components of the machine",
      bullets: [
        {
          label: "A real website",
          text: "Conversion landing pages, not a brochure — built to turn visitors into demos.",
        },
        {
          label: "Targeted ads",
          text: "Search and social aimed at preparers and small-business owners.",
        },
        {
          label: "Content that recruits",
          text: "Short videos and posts answering the questions your prospects are already asking.",
        },
        {
          label: "Monthly info sessions",
          text: "Webinars that fill your pipeline with pre-sold prospects, many at once.",
        },
      ],
      narration:
        "Your marketing engine has four components, and they work together. First, a real website, built as a set of conversion landing pages rather than a static brochure, designed to turn a visitor into a booked demo. Second, targeted ads, on search and social, aimed precisely at preparers and small-business owners. Third, content that recruits, short videos and posts that answer the exact questions your prospects are already asking. And fourth, monthly info sessions, webinars that let you pitch many pre-sold prospects at once instead of one at a time. Let's walk through each, with concrete tactics specific to recruiting tax offices, and then I'll give you the one metric that ties the whole machine together.",
    },
    {
      id: "s4",
      layout: "point",
      eyebrow: "Component one: Website",
      title: "A sales tool, not a brochure",
      lead: "Your site's only job is to turn a curious preparer into a booked demo.",
      bullets: [
        {
          label: "Lead with the economics",
          text: "Put the profit story front and center, framed honestly as illustrative.",
        },
        {
          label: "Make the support promise",
          text: "Reliability is what they fear losing — promise it clearly and specifically.",
        },
        {
          label: "One clear call to action",
          text: "Apply now, or book a demo. Don't bury it. Don't offer ten links.",
        },
      ],
      narration:
        "Component one is your website, and the mindset shift is everything: it is a sales tool, not a brochure. A brochure describes you. A sales tool moves the visitor to act. So your landing pages lead with the economics pitch from lesson three, the profit story, framed honestly as illustrative and built on the kind of math we covered. They make your support promise clearly and specifically, because reliability is what your prospects fear losing. And they drive to one clear call to action, apply now or book a demo, not buried at the bottom and not competing with ten other links. Every page should answer one question for the visitor: why should I, a preparer, build my business with this bureau, and what do I do next? Make that obvious and the site earns its keep.",
    },
    {
      id: "s5",
      layout: "tip",
      eyebrow: "Component one: Website",
      title: "Anatomy of a converting page",
      callout: {
        kind: "tip",
        title: "Top to bottom, one job each",
        text: "Headline names the prospect's reason. Then the economics, then the support promise, then proof, then a single book-a-demo button repeated as they scroll.",
      },
      narration:
        "Here is the anatomy of a landing page that actually converts, top to bottom, each section with one job. The headline names the prospect's reason, something like keep more of every return you prepare, speaking straight to the motive. Right below it, the economics, the honest profit story. Then the support promise, what they can count on when the season gets hard. Then proof, a couple of real testimonials from offices, with permission. And throughout, a single, repeated call to action, book a demo, appearing again as they scroll so they never have to hunt for the next step. Notice there is no clutter, no ten-item menu pulling attention away. One reason, one promise, one action. That focus is what turns a curious visitor into a booked conversation.",
    },
    {
      id: "s6",
      layout: "point",
      eyebrow: "Component two: Ads",
      title: "Catch them at the moment of intent",
      lead: "Search ads reach people already looking; social ads reach people who fit the profile.",
      bullets: [
        {
          label: "Search intent",
          text: "Bid on terms like 'professional tax software reseller' and 'become a service bureau ERO.'",
        },
        {
          label: "Social targeting",
          text: "Reach people with tax-prep and small-business interests before they start searching.",
        },
      ],
      narration:
        "Component two is targeted ads, and the secret is matching the ad to where the prospect's head is. Search ads catch people at the moment of intent, when they are actively typing a question. Bid on the exact phrases your prospects use, things like professional tax software reseller, or become a service bureau ERO, or how to start my own tax bureau. Someone searching that is raising their hand. Social ads work differently, they catch people before they search, by targeting interests, preparers, small-business owners, people in tax and accounting circles, and planting the idea. Search captures existing demand. Social creates new demand. Run both, send every click to one of those focused landing pages, and you have turned attention into booked demos.",
    },
    {
      id: "s7",
      layout: "point",
      eyebrow: "Component three: Content",
      title: "Content that recruits",
      lead: "Answer the questions your prospects are already asking, and you attract exactly the right people.",
      bullets: [
        {
          label: "Start where they start",
          text: "\"How do I start my own tax office?\" and \"How do I get an EFIN?\"",
        },
        {
          label: "Short video wins",
          text: "A clear two-minute video builds trust and authority faster than any ad.",
        },
      ],
      narration:
        "Component three is content that recruits, and this is where you build authority instead of just buying clicks. The trick is to answer the questions your prospects are already asking. Think about what a preparer types when they are thinking of going independent. How do I start my own tax office. How do I get an EFIN. What does it cost to run a tax business. Make short, clear videos and posts that genuinely answer those questions, and you attract exactly the people you want, the motivated ones at the very start of their journey. Short video is especially powerful, because a clear two-minute explainer where the prospect can see and hear you builds trust and authority faster than any text ad. Be the bureau that taught them step one, and you are the obvious choice for step two.",
    },
    {
      id: "s8",
      layout: "tip",
      eyebrow: "Component three: Content",
      title: "Helpful content is a magnet",
      callout: {
        kind: "stat",
        title: "Compounding, not disposable",
        text: "Illustrative: an ad stops the day you stop paying; a helpful video keeps attracting prospects for years. Content is an asset, not an expense.",
      },
      narration:
        "Here is why content is worth the effort, even though it is slower than ads. An ad is disposable. The moment you stop paying, it stops working, and the attention disappears. A genuinely helpful video or article is an asset. Illustratively, a clear video answering how do I get an EFIN can keep attracting the right prospects for years after you make it, found through search, shared in groups, working quietly in the background. Content compounds where ads merely rent attention. This does not mean skip ads, ads bring speed and content brings durability, and you want both. But understand the difference: every helpful piece you publish is a brick in a foundation that keeps recruiting for you long after the work is done. Build assets, not just expenses.",
    },
    {
      id: "s9",
      layout: "point",
      eyebrow: "Component four: Webinars",
      title: "Pitch many at once",
      lead: "A monthly info session turns one hour of your time into a room full of pre-sold prospects.",
      bullets: [
        {
          label: "One to many",
          text: "Deliver your best pitch once to a whole group instead of repeating it on calls.",
        },
        {
          label: "Pre-sold by the end",
          text: "Attendees who stay the hour are warm, qualified, and ready for a real conversation.",
        },
      ],
      narration:
        "Component four is monthly info sessions, and this is how you break the one-at-a-time ceiling directly. Host a recurring webinar, something titled like Start or Grow Your Own Tax Office, once a month. In a single hour, you deliver your best pitch, the economics, the support promise, the path to getting started, to a whole room of prospects at once, instead of repeating it on a dozen separate phone calls. And the people who show up and stay the full hour are, by definition, pre-sold and qualified, because casual tire-kickers do not give you sixty minutes of their evening. You end the session with a clear next step, book a one-on-one demo, and you have a batch of warm prospects to move into your pipeline. One hour, many offices. That is leverage.",
    },
    {
      id: "s10",
      layout: "list",
      eyebrow: "Do this",
      title: "Run the monthly info session",
      bullets: [
        {
          label: "Title for the outcome",
          text: "\"Start or Grow Your Own Tax Office\" — name what they want, not what you sell.",
        },
        {
          label: "Same hour, every month",
          text: "Make it a predictable habit so your ads and content always have somewhere to send people.",
        },
        {
          label: "Teach, then invite",
          text: "Give real value for 45 minutes, then make one clear offer to book a demo.",
        },
        {
          label: "Follow up fast",
          text: "Reach out within 24 hours while the session is fresh and the interest is hot.",
        },
      ],
      narration:
        "Here is how to actually run the monthly session. First, title it for the outcome they want, not the thing you sell, something like Start or Grow Your Own Tax Office, because nobody signs up for a bureau sales pitch but everyone wants to grow their business. Second, hold it the same hour every month, so it becomes a predictable habit and your ads and content always have a destination to send people. Third, teach genuinely for the first forty-five minutes, deliver real value, then make one clear offer to book a demo. And fourth, follow up fast, within twenty-four hours, while the session is fresh and interest is hot. A consistent monthly session, promoted by your ads and content, becomes the steady heartbeat of your entire pipeline.",
    },
    {
      id: "s11",
      layout: "point",
      eyebrow: "The metric that matters",
      title: "Measure cost per activated office",
      lead: "A lead that never files is a cost, not a win. Track the outcome that actually pays you.",
      bullets: [
        {
          label: "Leads lie, activations don't",
          text: "Cheap leads feel like progress but mean nothing if they never sign and file.",
        },
        {
          label: "Follow the money to the end",
          text: "Divide total marketing spend by offices that actually activated.",
        },
      ],
      narration:
        "Now the one metric that keeps this whole engine honest: measure cost per activated office, not cost per lead. Here is the trap. It is easy to celebrate cheap leads, look how many sign-ups we got, but a lead that never signs and never files is not a win. It is a cost. It consumed your ad spend and your follow-up time and returned nothing. So you follow the money all the way to the end. Take your total marketing spend over a period and divide it by the number of offices that actually activated, that signed and started filing. That number, cost per activated office, tells you the truth about which channels are really working. A channel with cheap leads and no activations is quietly losing you money. Measure the outcome, not the vanity number.",
    },
    {
      id: "s12",
      layout: "list",
      eyebrow: "A real example",
      title: "Cost per activated office, worked out",
      bullets: [
        {
          label: "Search ads",
          text: "$3,000 spend → 60 leads → 6 activated = $500 per activated office.",
        },
        {
          label: "Social ads",
          text: "$3,000 spend → 200 leads → 3 activated = $1,000 per activated office.",
        },
        {
          label: "The lead trap",
          text: "Social looked better on leads — cheaper per lead — but cost twice as much per office.",
        },
        {
          label: "The decision",
          text: "Shift budget toward search, the channel that actually produces filing offices.",
        },
      ],
      narration:
        "Let's work the metric with illustrative numbers, because it changes how you spend. Say you put three thousand dollars into search ads and get sixty leads, and six of them activate. That is five hundred dollars per activated office. You put another three thousand into social ads and get two hundred leads, but only three activate. That is one thousand dollars per activated office. Now watch the trap. On a cost-per-lead basis, social looked like the winner, two hundred leads versus sixty, far cheaper per lead. But on cost per activated office, the metric that actually matters, social cost you twice as much. The decision is clear: shift budget toward search, the channel producing real filing offices. These figures are illustrative, but the lesson is universal. The lead number lied. The activation number told the truth.",
    },
    {
      id: "s13",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "Know what an office is worth",
      callout: {
        kind: "stat",
        title: "Spend against lifetime value, not a single season",
        text: "Illustrative: if an activated office is worth far more over several seasons than it costs to acquire, a higher cost per activation can still be a great trade.",
      },
      narration:
        "One more layer on the metric, so you spend wisely. Cost per activated office only means something next to what an office is worth to you. And an office is rarely worth just one season, because a good office stays for years, and a builder can grow into several offices. Illustratively, if an activated office is worth far more to your bureau over several seasons than it costs you to acquire, then even a higher cost per activation can be a great trade. The mistake is to flinch at the acquisition cost while ignoring the lifetime value behind it. Know roughly what a retained office is worth over time, and you can spend confidently to acquire one. These numbers are illustrative and vary widely, but the principle is firm: spend against lifetime value, not against a single season.",
    },
    {
      id: "s14",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Falling in love with cheap leads",
      callout: {
        kind: "warn",
        title: "Don't optimize for the vanity number",
        text: "Chasing the lowest cost per lead pours budget into channels full of tire-kickers who never file. Optimize for activated offices, or you'll scale waste.",
      },
      narration:
        "Here is the common mistake, and it is seductive: falling in love with cheap leads. A bureau sees one channel producing leads at a fraction of the cost of another and pours all their budget into it, feeling brilliant. But if those cheap leads are tire-kickers who never sign and never file, the bureau has just optimized for a vanity number and scaled their own waste. The lowest cost per lead is meaningless if those leads do not become offices. The fix is the metric we just covered: judge every channel by cost per activated office, and be willing to pay more per lead in a channel that actually produces filing offices. Optimize for the outcome that pays you, not the number that flatters you.",
    },
    {
      id: "s15",
      layout: "action",
      eyebrow: "Your turn",
      title: "Audit your landing page",
      callout: {
        kind: "action",
        title: "Brochure or sales tool?",
        text: "Open your main recruiting page. Can a visitor find the economics, the support promise, and one clear book-a-demo button in ten seconds? If not, rewrite it.",
      },
      narration:
        "Now it is your turn, in two parts. First, audit your main recruiting landing page, or build one if you do not have it yet. Open it and ask honestly, can a visitor find the economics story, the support promise, and one clear book-a-demo button within about ten seconds? If they cannot, you have a brochure, not a sales tool, and it is costing you demos. Strip out the clutter, lead with the prospect's reason, make the call to action obvious and repeated, and frame any income figures honestly as illustrative, the way we covered in lesson three. A focused page that converts is worth more than a beautiful one that does not. Fix this first, because every ad and every video you make sends people here.",
    },
    {
      id: "s16",
      layout: "action",
      eyebrow: "Your turn",
      title: "Calculate cost per activated office",
      callout: {
        kind: "action",
        title: "Run the number for last season",
        text: "Total marketing spend divided by offices that signed and filed. Then break it down per channel — and shift budget toward what actually activates.",
      },
      narration:
        "The second part of your turn is the metric. Pull your numbers from last season and calculate your cost per activated office: total marketing spend divided by the number of offices that actually signed and filed. Then, if you can, break it down by channel, search, social, content, webinars, so you can see which one is truly carrying the load. You may be surprised which channel wins once you judge it this way instead of by lead count. Then make one decision based on what you find: shift some budget away from a channel full of cheap, dead leads and toward the one that actually produces filing offices. That single, data-driven reallocation is how a marketing engine gets more efficient every season instead of just bigger.",
    },
    {
      id: "s17",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Phone-by-phone recruiting caps at your stamina — build a marketing engine that scales." },
        { text: "A real website is a sales tool: economics, support promise, one clear call to action." },
        { text: "Run targeted search and social ads, and content that answers what prospects already ask." },
        { text: "Host a monthly info session to pitch many pre-sold prospects at once." },
        { text: "Measure cost per activated office, not per lead — a lead that never files is a cost." },
      ],
      subtitle: "Up next: Module 2 — Onboarding That Sticks",
      narration:
        "Let's recap this lesson and the whole module. One: recruiting one office at a time caps your growth at your stamina, so build a marketing engine that scales. Two: your website is a sales tool, not a brochure, leading with the economics, the support promise, and one clear call to action. Three: run targeted search and social ads, and publish content that answers the questions your prospects are already asking. Four: host a monthly info session to pitch many pre-sold prospects at once. And five, the metric that keeps it all honest: measure cost per activated office, not cost per lead, because a lead that never files is a cost, not a win. You now know how to recruit more offices, from who they are to the engine that finds them. But signing an office is only half the job. Up next: Module Two, Onboarding That Sticks.",
    },
  ],
};
