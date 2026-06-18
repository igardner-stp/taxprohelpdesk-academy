// =============================================================================
// Interactive lesson definition — Bureau Lesson 2.2 "Support That Scales"
//
// Authoring source for the narrated interactive experience. The generator
// (scripts/generate-lesson-media.mjs) reads this, produces ElevenLabs audio +
// timings per slide, and assembles the lesson media manifest.
//
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Support That Scales",
  trackId: "bureau",
  key: "B2.2",

  slides: [
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Bureau Track · Module 2: Support & Retain Your Offices",
      title: "Support That Scales",
      subtitle: "Lesson 2 · Narrated walkthrough",
      narration:
        "In the last lesson we onboarded offices so they'd stick. Now we face the question that decides how big your bureau can get: how do you support a growing network without drowning in it? The trap almost every bureau owner falls into: support means your cell phone, and your cell phone has one owner. The moment you have more offices than one person can answer in a February crush, support breaks and offices leave. By the end you'll have a tiered support model, a ticketing system that loses nothing, a triage example, and a top-FAQ list that lets most problems solve themselves.",
    },
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core idea",
      title: "If support is your cell phone, you've capped your bureau",
      lead: "A bureau where every answer runs through one person can never grow past that person.",
      bullets: [
        {
          label: "One throat to ask",
          text: "Every question routes to you, so your hours become the network's ceiling.",
        },
        {
          label: "Season breaks it",
          text: "In the February crush, calls pile up faster than one human can answer.",
        },
      ],
      narration:
        "When support means the owner's cell phone, you've capped the bureau at what one person can answer. Five offices feels fine. Fifteen is stressful. Thirty, in the depths of February, is impossible — calls pile up faster than any human can return them. And the cruelest part: the moment support breaks is exactly when an office needs you most, mid-season with a client at the desk. Support that depends on you doesn't just limit growth. It makes growth the thing that sinks your service.",
    },
    {
      id: "s3",
      layout: "point",
      eyebrow: "Why it matters",
      title: "Support failure is a top reason offices leave",
      lead: "An office that can't reach you when it matters has already started shopping competitors.",
      bullets: [
        {
          label: "The worst moment is the test",
          text: "Offices judge you on the hard day, not the easy one.",
        },
        {
          label: "Slow help reads as no help",
          text: "A two-day reply in peak season feels like being abandoned.",
        },
      ],
      narration:
        "Support failure is one of the top reasons offices walk. An office doesn't judge your bureau on the easy days — they judge you on the hard one: the rejected return, the bank product that won't transmit, the client getting impatient at the desk. If you're reachable and fix it, you've earned a renewal. If they call and get voicemail, or email and wait two days, that slow help reads as no help. An office that's felt abandoned once is already quietly listening to competitors. Great support isn't a nicety. It's churn prevention.",
    },
    {
      id: "s4",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "Do the crush math",
      callout: {
        kind: "stat",
        title: "The February ceiling",
        text: "40 offices each needing just 2 support touches a week in peak season is 80 interactions — far more than one owner can handle while running the business.",
      },
      narration:
        "Picture forty offices. In peak season, say each needs just two support touches a week — a question, a glitch, a how-do-I. That's eighty interactions every week. As an illustrative example, even at fifteen minutes each, that's twenty hours of pure support in your busiest stretch, on top of everything else. No owner can absorb that and still recruit, manage banks, and sleep. Either you build a system that handles most of those eighty without you, or your service collapses under its own success.",
    },
    {
      id: "s5",
      layout: "list",
      eyebrow: "The model",
      title: "Tiered support: three levels",
      bullets: [
        {
          label: "Tier 0 — Self-service",
          text: "Knowledge base and FAQ handle the simple, repeated questions with no human at all.",
        },
        {
          label: "Tier 1 — Frontline staff",
          text: "Trained staff resolve the common issues that need a person but not an expert.",
        },
        {
          label: "Tier 2 — You and seniors",
          text: "Only the true escalations — rare, complex, or high-stakes — reach you.",
        },
      ],
      narration:
        "The solution is a tiered support model. Tier zero is self-service: a knowledge base and FAQ that handle the simple, repeated questions with no human at all — password resets, form locations, bank-product deadlines. Tier one is your frontline staff: trained people who resolve the common issues that need a human but not an expert, the bulk of your daily volume. Tier two is you and your senior people, reserved only for true escalations — the rare, complex, or high-stakes problems that genuinely need your expertise.",
    },
    {
      id: "s6",
      layout: "point",
      eyebrow: "The model",
      title: "Why tiers, not just 'more people'",
      lead: "Tiers aren't about hiring an army — they're about matching each problem to the cheapest person who can solve it.",
      bullets: [
        {
          label: "Match cost to complexity",
          text: "A password reset shouldn't cost the owner's hour; a compliance question shouldn't go to tier 0.",
        },
        {
          label: "Protect the expensive hours",
          text: "Tiering frees your senior time for the problems only you can solve.",
        },
      ],
      narration:
        "Tiers aren't about hiring an army — they're about matching every problem to the cheapest person who can solve it. A password reset shouldn't consume an owner's hour. A compliance question shouldn't get a guessed answer from a tier-zero article. When you tier properly, simple stuff never touches a human, common issues are handled by trained frontline staff, and your expert hours are protected for what genuinely needs them. Don't pay your most valuable person to do your least valuable work. Tiering is how you stop doing exactly that across a whole network.",
    },
    {
      id: "s7",
      layout: "tip",
      eyebrow: "The model",
      title: "Push volume down, escalate exceptions up",
      callout: {
        kind: "tip",
        title: "Two flows, one rule",
        text: "Most volume defaults down to the cheapest tier; a small set of exceptions escalates up on a clear rule — not on panic or habit. Define that rule and the system runs itself.",
      },
      narration:
        "Two flows. Most volume pushes down — every common, low-risk question resolves at tier zero or one by default. A small set of exceptions escalates up, but on a clear rule, not on panic or habit. Your frontline staff need to know exactly when to handle something and exactly when to route it up. Without that rule, either everything escalates and you're the bottleneck again, or nothing escalates and a hard problem gets a wrong answer. Define the escalation rule and you catch only what truly needs you.",
    },
    {
      id: "s8",
      layout: "point",
      eyebrow: "Infrastructure",
      title: "Get a ticketing system before the crush",
      lead: "If support lives in your texts, voicemails, and inbox, things get lost — and you can't see what's breaking.",
      bullets: [
        {
          label: "Nothing falls through",
          text: "Every request becomes a tracked ticket, so no office gets forgotten in February.",
        },
        {
          label: "You see the patterns",
          text: "Tickets reveal what breaks most — the data that tells you what to fix and document.",
        },
      ],
      narration:
        "If support lives scattered across texts, voicemails, and a chaotic inbox, two bad things happen. First, things get lost — in the February crush, an office's question slips between the cracks, they wait, they fume, and that's a churn risk you created by accident. Second, you go blind. You can't see what's breaking across your network. A ticketing system fixes both: every request becomes a tracked ticket, nothing gets forgotten, and because every issue is logged you can finally see which problems repeat. That data tells you exactly what to fix at the source.",
    },
    {
      id: "s9",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "Your tickets are a map of what to fix",
      callout: {
        kind: "stat",
        title: "Patterns beat anecdotes",
        text: "When one reject code or one setup step generates a big share of your tickets, that's not noise — it's a signal pointing at the single fix that removes the most volume.",
      },
      narration:
        "When every issue is a logged ticket, your support data becomes a map of exactly what to fix. Maybe one bank-product setup step generates a huge share of tickets every January. Without tracking, that's a vague feeling. With tracking, it's a precise signal: fix that one step and you remove the biggest source of volume from your season. The bureaus that scale don't just answer tickets faster. They use ticket data to make whole categories of tickets disappear.",
    },
    {
      id: "s10",
      layout: "list",
      eyebrow: "A real example",
      title: "Ticket triage in action",
      bullets: [
        {
          label: "Ticket: 'Forgot my portal password'",
          text: "Tier 0 — auto-reply links the reset article. No human touches it.",
        },
        {
          label: "Ticket: 'Bank product won't transmit'",
          text: "Tier 1 — frontline staff walks the known fix from the playbook.",
        },
        {
          label: "Ticket: 'Client rejected, EFIN error code'",
          text: "Tier 1 first; escalate to Tier 2 if it's not a known code.",
        },
        {
          label: "Ticket: 'Possible bank-product compliance issue'",
          text: "Tier 2 immediately — owner or senior handles, never guessed at a lower tier.",
        },
      ],
      narration:
        "Let me show you triage in action with a few illustrative tickets. Ticket one: an office forgot their portal password. That's tier zero. An automated reply links the reset article, and no human ever touches it. Ticket two: a bank product won't transmit. That's tier one. A frontline staff member walks the known fix straight from your playbook. Ticket three: a client return got rejected with an EFIN error code. Start at tier one, and if it's not a recognized code, escalate to tier two. And ticket four: an office flags a possible bank-product compliance issue. That goes to tier two immediately, never guessed at a lower tier. Notice the pattern: most volume resolves at zero and one. Only the genuinely hard or high-stakes reaches you.",
    },
    {
      id: "s11",
      layout: "tip",
      eyebrow: "Compliance",
      title: "Route risk questions up, never down",
      callout: {
        kind: "warn",
        title: "Don't let tier 0 answer compliance",
        text: "Bank-product fraud risk, EFIN issues, and compliance questions must escalate to a senior human — a wrong self-service answer here creates real exposure.",
      },
      narration:
        "A critical guardrail: most questions flow down, but one category always flows up — anything touching bank-product fraud risk, EFIN problems, or compliance. These never get a self-service article or a frontline guess. They escalate to a senior human every time. A wrong answer on a compliance question isn't just an unhappy office — it can create real exposure. This is business-operations training, not legal advice, so when a genuine compliance or tax-law question arises, point the office to official IRS guidance and qualified professional judgment. Build your triage so risk routes up by default.",
    },
    {
      id: "s12",
      layout: "point",
      eyebrow: "Infrastructure",
      title: "Staff the season before the wave hits",
      lead: "Seasonal support staff are only an asset if they're trained before the calls start, not during.",
      bullets: [
        {
          label: "Hire and train in the fall",
          text: "Bring on seasonal support early so they're fluent before the first February rush.",
        },
        {
          label: "Arm them with the playbook",
          text: "Give them the FAQ, the known fixes, and clear escalation rules from day one.",
        },
      ],
      narration:
        "Seasonal staffing done right. The instinct is to wait until you're slammed, then scramble. But support staff are only an asset if they're trained before the wave, not during it. A new support person learning on the job in February is a liability — slow and uncertain when speed matters most. Hire and train in the fall, so they're fluent before the first rush. And arm them: give them the FAQ, the known fixes, and clear escalation rules so they know exactly what to solve and when to route it up.",
    },
    {
      id: "s13",
      layout: "tip",
      eyebrow: "Pro tip",
      title: "A trained frontline beats an untrained one tenfold",
      callout: {
        kind: "tip",
        title: "Confidence closes tickets",
        text: "A frontline rep who can confidently resolve a common issue is worth many times one who escalates everything — invest in the playbook, not just the headcount.",
      },
      narration:
        "Headcount alone doesn't help you. A hire who escalates every question to you is barely better than no hire at all — you're still answering everything, just with a middleman. What scales you is a confident frontline rep who resolves a common issue without you. Confidence comes from the playbook and clear boundaries you've given them. A well-trained frontline person who closes tickets cleanly is worth many times an untrained one who just forwards everything up. Train the judgment, not just the headcount.",
    },
    {
      id: "s14",
      layout: "point",
      eyebrow: "Infrastructure",
      title: "Self-service training so offices solve their own basics",
      lead: "The cheapest support ticket is the one the office never needs to open.",
      bullets: [
        {
          label: "Record it once",
          text: "Short how-to videos and step-by-step guides for the recurring basics.",
        },
        {
          label: "Make it easy to find",
          text: "A searchable knowledge base beats a buried PDF nobody opens.",
        },
      ],
      narration:
        "The cheapest support ticket is the one the office never needs to open. Record the answer to every recurring basic, once — short how-to videos, step-by-step guides, screen recordings of the workflows offices ask about every season. Make them easy to find in a searchable knowledge base, not a forty-page PDF nobody opens. When an office can search how do I set up bank-product pricing and immediately watch a two-minute video, that's a ticket that never reaches a human. Every well-made self-service resource is support that works for you forever, at zero marginal cost.",
    },
    {
      id: "s15",
      layout: "list",
      eyebrow: "A real example",
      title: "Your top-FAQ starter list",
      bullets: [
        {
          label: "Password & login resets",
          text: "How to reset access to the software and the support portal.",
        },
        {
          label: "Bank-product setup & pricing",
          text: "Enrolling, setting fees, and confirming a product is approved and live.",
        },
        {
          label: "E-file rejections & common codes",
          text: "What the most frequent reject codes mean and the first steps to fix them.",
        },
        {
          label: "EFIN linking & verification",
          text: "Linking the EFIN correctly and confirming returns transmit under it.",
        },
        {
          label: "Where to find forms & updates",
          text: "Locating forms, software updates, and seasonal release notes.",
        },
      ],
      narration:
        "Here's a starter top-FAQ list you can build your knowledge base around, drawn from what bureaus get asked every season. First, password and login resets, for both the software and your support portal, the single most common ticket there is. Second, bank-product setup and pricing: how to enroll, set fees, and confirm a product is approved and live. Third, e-file rejections and common reject codes: what the frequent ones mean and the first steps to fix them. Fourth, EFIN linking and verification: how to link it correctly and confirm returns transmit under it. And fifth, where to find forms, software updates, and seasonal release notes. Document those five well and you'll deflect a huge share of your volume before it ever becomes a ticket.",
    },
    {
      id: "s16",
      layout: "tip",
      eyebrow: "Pro tip",
      title: "If it comes up twice, write it down",
      callout: {
        kind: "tip",
        title: "Grow the knowledge base on the job",
        text: "Make it a standing rule: the second time anyone gets a question, it earns a permanent entry in the FAQ — so your self-service layer grows itself every season.",
      },
      narration:
        "The rule that keeps your self-service layer alive: the second time anyone in your bureau gets the same question, it earns a permanent entry in the knowledge base. Not the tenth time — the second. The second time proves it's a pattern, and patterns are what you automate away. Over a single season, your FAQ stops being a static list and becomes a living library that grows itself from real questions. That's how a small bureau ends up with the self-service quality of a much bigger one.",
    },
    {
      id: "s17",
      layout: "tip",
      eyebrow: "The core idea",
      title: "Document once, reuse every season",
      callout: {
        kind: "tip",
        title: "The scaling habit",
        text: "Bureaus that grow past a few dozen offices make most support not require a human — they answer each question once, then let the system answer it forever.",
      },
      narration:
        "Bureaus that grow past a few dozen offices make most support not require a human at all. They answer each question once, then let the system answer it forever. A frontline staffer solves a bank-product issue today, and the fix goes into the playbook — next time it's tier one in two minutes or tier zero in a self-service article. Nothing gets solved twice from scratch. One bureau's support cost shrinks per office as it grows. The other's grows with it until it breaks. Document once, reuse every season. That's the whole game.",
    },
    {
      id: "s18",
      layout: "point",
      eyebrow: "A real example",
      title: "What tiering does to your week",
      lead: "Done right, tiering can turn most of your support volume into something you never personally touch.",
      bullets: [
        {
          label: "Most resolve below you",
          text: "Self-service and frontline can close the large majority of a network's tickets.",
        },
        {
          label: "You get your season back",
          text: "Your time shifts from firefighting to growing and improving the bureau.",
        },
      ],
      narration:
        "Back to those eighty weekly interactions across forty offices. With a real self-service layer, a big share of the simple repeated questions never become tickets at all. Of what remains, well-trained frontline staff close the large majority. A strong tiered setup means only a small fraction of total volume ever reaches the owner. Instead of twenty hours a week of firefighting, you're handling a handful of genuine escalations and spending the rest of your time growing. The volume didn't disappear — it got handled at the right level. That's the difference between owning a bureau and being trapped inside one.",
    },
    {
      id: "s19",
      layout: "point",
      eyebrow: "A real example",
      title: "The same season, two bureaus",
      lead: "Two bureaus with the same office count can have wildly different owner lives.",
      bullets: [
        {
          label: "Bureau A — all on the owner",
          text: "Every call goes to one phone; the owner is buried and quality slips.",
        },
        {
          label: "Bureau B — tiered and documented",
          text: "Self-service and frontline absorb the volume; the owner has room to grow.",
        },
      ],
      narration:
        "Two bureaus, both with forty offices. Bureau A runs support off the owner's phone. In February that owner is buried before noon, returns calls late, and watches service slip exactly when offices are judging them hardest. Bureau B built the tiers and documented the answers. Self-service catches the basics, frontline absorbs the common stuff, only genuine escalations reach the owner. Same forty offices, same season — but Bureau B's owner has room to breathe, coach, and recruit. The work didn't change. The system did. And the system decides whether the next forty offices are a blessing or a breakdown.",
    },
    {
      id: "s20",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Being the help desk instead of building it",
      callout: {
        kind: "warn",
        title: "Don't be the bottleneck you built",
        text: "The classic mistake is answering every question personally because it's 'faster right now' — which guarantees nothing gets documented and the bottleneck is always you.",
      },
      narration:
        "The classic trap: being the help desk instead of building it. Answering every question yourself feels faster in the moment, but every time you solve a problem without documenting it, you guarantee it comes back to you. You're not saving time — you're renting it from your future self at a terrible rate. The owner too busy answering tickets to document them stays the bottleneck forever. When you solve something, spend two extra minutes writing it down or handing it to your frontline team. Build the help desk, don't be it.",
    },
    {
      id: "s21",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Adding people without adding systems",
      callout: {
        kind: "warn",
        title: "Headcount alone doesn't scale",
        text: "Throwing more staff at chaos just makes the chaos louder. Without tiers, a playbook, and tracking, every new hire still funnels back to you.",
      },
      narration:
        "The flip-side mistake: trying to fix support with headcount alone. An owner gets overwhelmed, hires two more people, and assumes the problem is solved. But without tier structure, a documented playbook, and ticket tracking, the new people make the chaos louder. They escalate everything back to you because they don't know what they're allowed to handle. You've added payroll without adding capacity. Systems come first, people second. Build the tiers and the playbook, then hire people to run them. Staff plus structure scales. Staff without structure just multiplies the mess.",
    },
    {
      id: "s22",
      layout: "action",
      eyebrow: "Your turn",
      title: "Tally last season's tickets by type",
      callout: {
        kind: "action",
        title: "Find your repeat offenders",
        text: "List the support questions you answered most last season. Any question you answered 3+ times is a self-service article or frontline playbook entry waiting to be written.",
      },
      narration:
        "Think back over last season, or pull up your texts and inbox, and list the support questions you answered most often. Then circle anything you answered three or more times. Each of those is a self-service article or frontline playbook entry waiting to be written. This exercise turns your messy memory of last season into a concrete to-do list for your knowledge base. Every repeat you document is a question that never costs you a human again. Start with the things that already wasted your time most.",
    },
    {
      id: "s23",
      layout: "action",
      eyebrow: "Your turn",
      title: "Draft your three tiers on one page",
      callout: {
        kind: "action",
        title: "Define who handles what",
        text: "Write one page: what lives in Tier 0 (self-service), what Tier 1 (frontline) handles, and what must escalate to Tier 2 (you). Put compliance and risk questions firmly in Tier 2.",
      },
      narration:
        "On a single page, define your three tiers. What lives in tier zero — self-service anyone can find on their own. What tier one, your frontline, is trained and empowered to handle. And what must escalate to tier two. Be deliberate about putting every compliance, EFIN, and bank-product-risk question firmly in tier two. That one page becomes your support operating manual: it tells staff what they own, tells the system what to deflect, and protects your expert hours. You can't build a help desk you haven't defined. Define it on one page first.",
    },
    {
      id: "s24",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "If support means your cell phone, you've capped your bureau at one person — build systems first." },
        { text: "Use three tiers: self-service for the simple, frontline staff for the common, you for true escalations only." },
        { text: "A ticketing system loses nothing in the crush and shows you what breaks most." },
        { text: "Staff and train seasonal support before the wave; route compliance and risk questions up, never down." },
        { text: "Document each answer once and reuse it forever — that's how support cost shrinks as you grow." },
      ],
      subtitle: "Up next: Keep Offices Loyal",
      narration:
        "Let's recap. One: if support means your cell phone, you've capped the bureau at one person — build systems first. Two: use three tiers, self-service for the simple, frontline for the common, and you only for true escalations. Three: get a ticketing system so nothing is lost in the February crush and you can see what breaks most. Four: hire and train seasonal support before the wave, and route compliance, EFIN, and bank-product-risk questions up to a senior human, always. And five: document each answer once and reuse it every season — that's how support cost shrinks per office as you grow. Next, we go on offense: how do you make offices actively loyal, so they choose to stay even when a competitor comes calling? See you in Keep Offices Loyal.",
    },
  ],
};
