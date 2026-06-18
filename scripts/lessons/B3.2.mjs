// =============================================================================
// Interactive lesson definition — Bureau Lesson 3.2 "Reinvest to Grow the Bureau"
//
// Authoring source for the narrated interactive experience. The generator
// (scripts/generate-lesson-media.mjs) reads this, produces ElevenLabs audio +
// timings per slide, and assembles the lesson media manifest.
//
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Reinvest to Grow the Bureau",
  trackId: "bureau",
  key: "B3.2",

  slides: [
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Bureau Track · Module 3: Scale the Bureau",
      title: "Reinvest to Grow the Bureau",
      subtitle: "Lesson 2 · Narrated walkthrough",
      narration:
        "Welcome back. In the last lesson you built the per-office unit economics. Now the question is what to do with the profit. Bureau revenue is seasonal and can build up fast. Owners who don't plan for it tend to spend it or sit on it by default. The bureaus that compound are the ones that decide where the money goes before the season ends, not after. By the end of this lesson you'll have a reinvestment framework with five high-return categories, a worked allocation example, and a process for setting your reinvestment budget before the season starts.",
    },
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core idea",
      title: "Profit is fuel — but only if you use it deliberately",
      lead: "Bureau profit arrives in a seasonal rush. Without a plan, it gets spent on low-ROI things or sits idle.",
      bullets: [
        {
          label: "Seasonal timing is the trap",
          text: "When a large sum arrives quickly, the path of least resistance is to take it home or save it without a purpose.",
        },
        {
          label: "Compounding requires intent",
          text: "The bureaus that double in three years had a reinvestment plan, not just ambition.",
        },
      ],
      narration:
        "Bureau profit is seasonal, and it can arrive in a concentrated rush during and after the filing season. That's a disadvantage if you're not careful, because a large unplanned sum tends to either get distributed to the owner — which is fine but misses the compounding opportunity — or gets spent on whatever seems urgent in the moment. The bureaus that consistently grow year over year treat reinvestment as a planned expense, decided before the season starts, not from whatever is left in April. They answer the question in advance: how much of this season's profit goes back into the business, and exactly where?",
    },
    {
      id: "s3",
      layout: "tip",
      eyebrow: "Why it matters",
      title: "The compounding bureau vs. the flat one",
      callout: {
        kind: "stat",
        title: "Reinvestment is the growth engine",
        text: "A bureau that reinvests a planned slice into the highest-return categories each season grows faster and more reliably than one that reinvests nothing — the gap compounds every year.",
      },
      narration:
        "Think about two bureaus starting from the same place. Bureau A takes all the profit home each season. Bureau B decides, before the season, to put a planned slice back into the highest-return categories: retention systems, proven recruiting, support infrastructure. Next January, Bureau B's support is more efficient, its recruiting produces more active offices, and its retention is meaningfully better. The advantage compounds. After three or four seasons, the two bureaus look completely different — not because they had different opportunities, but because one built deliberately while the other reacted.",
    },
    {
      id: "s4",
      layout: "list",
      eyebrow: "The five categories",
      title: "Where reinvestment compounds most",
      bullets: [
        {
          label: "Retention systems",
          text: "Onboarding, support tooling, and training — the cheapest growth you have.",
        },
        {
          label: "Proven recruiting",
          text: "Once CAC is below LTV, pour money into channels already producing active offices.",
        },
        {
          label: "Support infrastructure",
          text: "Ticketing, knowledge base, seasonal staff — add offices without service collapse.",
        },
        {
          label: "Sales capacity",
          text: "A recruiter or sales rep once your pitch is documented and repeatable.",
        },
        {
          label: "Better bank-product and software terms",
          text: "Volume earns leverage — better terms improve margin and strengthen your pitch.",
        },
      ],
      narration:
        "Five categories where reinvestment compounds. First, retention systems — onboarding improvements, support tooling, office training. The economics are clear: keeping an existing office is far cheaper than recruiting a replacement. Second, proven recruiting — once you know which channels produce active offices at a CAC well below LTV, pour money into those channels specifically. Not experiments: what's already working. Third, support infrastructure — the ticketing system, the knowledge base, seasonal staff. These let you serve more offices without your personal time blowing up. Fourth, sales capacity — a dedicated recruiter once your pitch is documented. And fifth, working toward better terms from your bank and software provider as your volume grows.",
    },
    {
      id: "s5",
      layout: "point",
      eyebrow: "Category 1: Retention",
      title: "Retention is the cheapest growth you have",
      lead: "Every dollar invested in keeping an office saves multiple dollars in future recruiting cost.",
      bullets: [
        {
          label: "What to invest in",
          text: "Better onboarding, proactive check-in systems, office training, and loyalty touches.",
        },
        {
          label: "Why it compounds",
          text: "Higher retention extends LTV, which lets you afford more recruiting, which grows the network faster.",
        },
      ],
      narration:
        "Retention deserves the top spot because the economics are almost always better than recruiting, and most bureaus underinvest here. If your renewal rate is at seventy-five percent and a few thousand dollars of focused investment lifts it to eighty-five, what just happened? Each office you kept avoided a recruiting expense. Your average LTV went up because offices stay longer. And your recruiting budget now grows the network rather than just replacing churned offices. Invest in retention first. It's the foundation every other category builds on.",
    },
    {
      id: "s6",
      layout: "point",
      eyebrow: "Category 2: Proven recruiting",
      title: "Pour into what's already working",
      lead: "Once a recruiting channel has proven it produces active offices at a CAC well below LTV, fund it — don't hedge it.",
      bullets: [
        {
          label: "Identify the winners first",
          text: "Track which source produces the most active offices per dollar spent.",
        },
        {
          label: "Scale the winner",
          text: "Diversifying before a channel is proven is expensive. Run the math, then scale.",
        },
      ],
      narration:
        "The phrase proven recruiting does a lot of work. Don't pour money into channels that haven't yet demonstrated a strong CAC. Instead, track which source produces your best active offices at the lowest cost — whether that's referrals from existing offices, paid search targeting tax professionals, social ads, or your monthly webinar. Once a channel is producing at a strong LTV to CAC ratio, scaling it is the highest-confidence reinvestment you can make. The return is known. The only question is how much to put in.",
    },
    {
      id: "s7",
      layout: "tip",
      eyebrow: "Category 5",
      title: "Better terms from volume: the compounding loop",
      callout: {
        kind: "tip",
        title: "Volume earns leverage",
        text: "As your bureau's total return volume grows, you have room to negotiate better software and bank-product terms — and better terms improve both your margin and your recruiting pitch.",
      },
      narration:
        "The fifth category is the most underutilized. As your bureau processes more total returns, you have real leverage to negotiate better terms with your software provider and your bank or bank-product program. Better software terms reduce cost per office. Better bank-product terms mean you can earn more per return or offer more to offices, improving both your margin and your recruiting pitch. Volume gets you better terms, better terms attract better offices, better offices generate more volume. That's a genuine compounding loop, and it starts with building enough volume to negotiate from strength.",
    },
    {
      id: "s8",
      layout: "point",
      eyebrow: "Do this",
      title: "Set the reinvestment budget before the season",
      lead: "Decide the split in advance — owner pay, reinvestment, and reserve — before the money arrives.",
      bullets: [
        {
          label: "Decide in writing before the season",
          text: "A written split decided in advance survives the emotion of a large seasonal payout.",
        },
        {
          label: "Treat reinvestment like a bill",
          text: "Pay it before you decide how much to take home.",
        },
      ],
      narration:
        "Set the reinvestment budget before the season, not from whatever is left in April. Once the profit is in the account, the pull toward taking it home is powerful and very human. The way to resist that pull is to have already decided — in writing, before the season — what percentage goes to owner pay and taxes, what percentage gets reinvested, and what percentage builds the cash reserve. Then treat the reinvestment slice like a bill you pay before you pay yourself the rest. That reframing changes the psychology entirely.",
    },
    {
      id: "s9",
      layout: "list",
      eyebrow: "A real example",
      title: "A worked allocation — illustrative only",
      bullets: [
        {
          label: "50 percent — Owner pay plus personal taxes",
          text: "Pay yourself; set aside your own tax obligation.",
        },
        {
          label: "20 percent — Retention and support",
          text: "Onboarding improvements, support tooling, seasonal staff training.",
        },
        {
          label: "15 percent — Proven recruiting",
          text: "Scale the channel already producing active offices at a good CAC.",
        },
        {
          label: "10 percent — Infrastructure and capacity",
          text: "Ticketing, knowledge base, tools that reduce support time per office.",
        },
        {
          label: "5 percent — Cash reserve",
          text: "Off-season runway and unexpected costs.",
        },
      ],
      narration:
        "Here's an illustrative allocation — the percentages are a starting point, not a rule, and your numbers will differ based on your stage and current gaps. Fifty percent to owner pay and personal tax reserve. Twenty percent to retention and support: onboarding improvements, support tooling, and seasonal staff training. Fifteen percent to proven recruiting: funding channels that are already working. Ten percent to infrastructure: the ticketing system, the knowledge base, the tools that reduce how much time each office costs you. And five percent to a cash reserve for the off-season runway. The exact split matters less than the fact that it's decided and written down before the season begins.",
    },
    {
      id: "s10",
      layout: "tip",
      eyebrow: "Adjust by stage",
      title: "Early bureau vs. established bureau",
      callout: {
        kind: "tip",
        title: "Stage drives the split",
        text: "In the first two or three years, when leverage is in fixing retention and proving recruiting channels, weigh reinvestment higher. As the bureau matures and cash builds, take more home.",
      },
      narration:
        "The right allocation depends on where you are in building the bureau. If you're in the first two or three seasons, the highest-leverage work is fixing the retention leak and proving which recruiting channels work. At that stage, weighting more toward reinvestment and less toward owner pay is often the choice that pays off fastest. As the bureau matures — retention systems are in place, recruiting is predictable, support scales without you — it makes sense to shift the balance and take more home. Push reinvestment higher when you're building. Take more when the systems are running. The point is to decide on purpose, not by accident.",
    },
    {
      id: "s11",
      layout: "point",
      eyebrow: "Make it measurable",
      title: "Every reinvestment should have an expected return",
      lead: "Spending without a return expectation is just spending. Define what each reinvestment is supposed to produce.",
      bullets: [
        {
          label: "Define the target before you spend",
          text: "Retention investment should target a specific renewal rate improvement. Recruiting spend should target a CAC.",
        },
        {
          label: "Review actuals after the season",
          text: "Check whether each reinvestment produced what you expected and adjust the allocation.",
        },
      ],
      narration:
        "Here's a mistake even thoughtful bureau owners make: reinvesting without a return expectation. Spending ten thousand dollars on recruiting because growth is good is not a plan. A plan says: I'm spending ten thousand dollars on the webinar channel, which last season produced active offices at an illustrative CAC of eight hundred dollars, and I expect to sign twelve new active offices. If it produces eight, I need to understand why. Every reinvestment category should have a target — a renewal rate improvement, a CAC target, a support-ticket reduction. Then after the season you review actuals and adjust. That's a reinvestment plan. Everything else is hope with a budget.",
    },
    {
      id: "s12",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Spending on recruiting while the retention leak runs",
      callout: {
        kind: "warn",
        title: "Fix the bucket before filling it",
        text: "Pouring recruiting spend into a bureau with a seventy-percent renewal rate is running the treadmill faster. Fix what's causing offices to leave first — then recruit.",
      },
      narration:
        "The mistake that wastes the most money: investing in recruiting before fixing retention. If your renewal rate is seventy percent, you're losing three in ten offices every year. Every dollar you put into recruiting is partly just replacing the ones you're losing. The smarter play is to figure out why offices are leaving — onboarding, support, a competitor's pitch, pricing — and fix that first. Once retention is solid, every dollar of recruiting spend actually grows the network instead of refilling a leaking bucket. You can't out-recruit a broken retention system. Fix the bucket first.",
    },
    {
      id: "s13",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Confusing reinvestment with random spending",
      callout: {
        kind: "warn",
        title: "Reinvestment needs a rationale",
        text: "New equipment, office upgrades, or unproven marketing experiments are spending, not reinvestment, unless you can articulate the return. Every reinvestment dollar should compound the business.",
      },
      narration:
        "A subtler mistake: treating any business spending as reinvestment. A new laptop, an office renovation, or a brand-new marketing experiment you can't tie to a proven outcome is just spending. Real reinvestment is capital you're putting into something with a clear expected return on the bureau's growth — retention systems that should raise renewal rate, recruiting channels that should produce a target CAC, infrastructure that should reduce support cost per office. If you can't articulate the expected return before you spend, it belongs in the owner-pay bucket, not the reinvestment bucket. The discipline of that distinction is what keeps reinvestment compounding.",
    },
    {
      id: "s14",
      layout: "action",
      eyebrow: "Your turn",
      title: "Write your reinvestment plan for next season",
      callout: {
        kind: "action",
        title: "Decide the split now",
        text: "Write one paragraph: what percentage goes to owner pay plus taxes, what to reinvestment and in which categories, and what to reserve. Name the single most important thing to fix or build, and what you expect it to produce.",
      },
      narration:
        "Now it's your turn. Write one paragraph — your reinvestment plan. State the percentage of profit going to owner pay and personal taxes. State the percentage going back into the bureau and name the categories: retention systems, proven recruiting, support infrastructure. State the reserve percentage. Then name the single most important thing you plan to build with the reinvestment portion and what you expect it to produce — a renewal rate target, a CAC target, a support cost reduction. One paragraph, written down before the season. That plan is worth more than any amount of ambition unattached to a decision.",
    },
    {
      id: "s15",
      layout: "action",
      eyebrow: "Your turn",
      title: "Rank the five reinvestment categories for your bureau right now",
      callout: {
        kind: "action",
        title: "Where is leverage highest today?",
        text: "Rate each category — retention, proven recruiting, support infrastructure, sales capacity, better terms — by how much leverage it has in your bureau right now. The top-ranked one gets the most capital.",
      },
      narration:
        "One more exercise that sharpens your plan. Rate each of the five reinvestment categories on how much leverage it has right now in your specific bureau. If your renewal rate is below eighty percent, retention is at the top. If retention is solid and your recruiting channel is proven, pour into scaling that channel. If you're fielding too many tickets personally, support infrastructure is the constraint. Rank them one through five for your situation. The top-ranked category gets the most capital from your reinvestment bucket. Rankings will shift as you fix each constraint in order — that's how a bureau grows systematically rather than randomly.",
    },
    {
      id: "s17",
      layout: "point",
      eyebrow: "Reinvestment priority matrix",
      title: "A framework for deciding where to put the money",
      lead: "Not every category deserves equal capital at every stage — the matrix tells you where the leverage is highest right now.",
      bullets: [
        {
          label: "Axis 1 — Impact",
          text: "How much does investing here improve your LTV, CAC, or margin in the near term?",
        },
        {
          label: "Axis 2 — Readiness",
          text: "Is the foundation in place to actually execute this investment — the data, the SOP, the team?",
        },
        {
          label: "Rank by both",
          text: "High impact plus high readiness gets the most capital. High impact but not ready gets the prerequisite work first.",
        },
      ],
      narration:
        "A priority matrix gives the reinvestment decision a framework instead of relying on gut feel. Two axes: impact and readiness. Impact asks how much this investment moves LTV, CAC, or margin right now. Readiness asks whether the foundation is in place — the SOP, the team, the data. High impact plus high readiness gets the most capital. High impact but low readiness tells you to build the prerequisite first. Scaling a recruiting channel sounds high-impact — but if you haven't proven the CAC yet, readiness is low. Build the proof before you fund the scale.",
    },
    {
      id: "s18",
      layout: "list",
      eyebrow: "Reinvestment priority matrix",
      title: "How each category scores at early vs. mature stage",
      bullets: [
        {
          label: "Retention systems — always high impact",
          text: "High impact at every stage. Readiness is low in year one; rises fast as you document SOPs.",
        },
        {
          label: "Proven recruiting — high impact when ready",
          text: "High impact once CAC is below LTV and the channel is proven. Low readiness until you've run the numbers.",
        },
        {
          label: "Support infrastructure — readiness-gated",
          text: "High impact at 20-plus offices. Low value before you have ticket volume to justify it.",
        },
        {
          label: "Sales capacity — late-stage high impact",
          text: "High impact after the pitch is documented. Low readiness before you've personally closed a meaningful wave.",
        },
        {
          label: "Better terms — volume-gated",
          text: "Only actionable once volume gives you negotiating leverage. Don't push too early.",
        },
      ],
      narration:
        "Retention systems score high-impact at every stage — keeping an office is always cheaper than replacing one. Readiness starts low in year one and rises fast as SOPs get written. Proven recruiting is high-impact once your CAC is measured and below LTV — before that it's an experiment. Support infrastructure becomes valuable around twenty or more active offices. Sales capacity earns its place only after the pitch is documented and personally proven. Better terms require volume leverage — don't push that conversation before you've built enough network to negotiate from strength.",
    },
    {
      id: "s19",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "The compounding gap between invested and uninvested bureaus",
      callout: {
        kind: "stat",
        title: "Compounding by season — illustrative only",
        text: "Two bureaus start at 20 offices. Bureau A reinvests 20 percent of profit into retention and proven recruiting each season. Bureau B takes all profit home. After three seasons the gap in active office count — and in LTV — can be substantial. The reinvested bureau is building a larger, more durable asset.",
      },
      narration:
        "An illustrative scenario — not a forecast. Two bureaus, same starting point: twenty active offices. Bureau A reinvests twenty percent of profit into retention and proven recruiting every season. Bureau B takes all profit home. Bureau A's retention investment keeps offices that Bureau B loses. Its recruiting investment scales a proven channel. After three seasons the gap isn't additive — it compounds, because every extra retained office generates additional LTV. Bureau A is building a more valuable asset.",
    },
    {
      id: "s20",
      layout: "point",
      eyebrow: "Making it concrete",
      title: "Write a one-page reinvestment brief before the season",
      lead: "A one-page brief forces clarity and creates accountability — decisions made in writing survive the emotional pull of a large seasonal payout.",
      bullets: [
        {
          label: "State the split",
          text: "Owner pay plus taxes, reinvestment total, and reserve — three numbers that add to 100 percent.",
        },
        {
          label: "Name the categories and amounts",
          text: "For reinvestment: how much to retention, how much to proven recruiting, how much to infrastructure.",
        },
        {
          label: "Define success",
          text: "One expected outcome per category — a renewal rate target, a CAC target, a ticket-reduction goal.",
        },
      ],
      narration:
        "The brief has three parts. First, the split: owner pay plus taxes, reinvestment total, and reserve — three numbers that add to one hundred percent. Second, the category breakdown: for the reinvestment slice, how much goes to each category. Third, one expected outcome per category — a renewal rate target, a CAC target, a ticket-reduction goal. That third part is what turns reinvestment into accountability. After the season you compare actuals against those targets and learn from every gap. Without the expected outcomes written down, there's nothing to compare against.",
    },
    {
      id: "s21",
      layout: "list",
      eyebrow: "A real example",
      title: "A sample reinvestment brief — illustrative only",
      bullets: [
        {
          label: "Split",
          text: "55 percent owner pay plus taxes, 30 percent reinvestment, 15 percent reserve.",
        },
        {
          label: "Retention systems — half the reinvestment",
          text: "Build the onboarding SOP and add proactive check-in tooling. Target: renewal rate from 74 to 82 percent.",
        },
        {
          label: "Proven recruiting — a third of reinvestment",
          text: "Double spend on the referral channel already producing at a strong CAC. Target: 8 new active offices.",
        },
        {
          label: "Support infrastructure — rest of reinvestment",
          text: "Add ticketing software and document the top 20 support issues. Target: reduce average ticket resolution time by 30 percent.",
        },
      ],
      narration:
        "Illustrative numbers only — the point is the format, not the specific percentages. Fifty-five percent to owner pay and taxes, thirty percent reinvestment, fifteen percent reserve. Half the reinvestment slice goes to retention systems — building the onboarding SOP and adding a check-in tool — targeting renewal rate from seventy-four to eighty-two percent. A third goes to the proven referral recruiting channel, targeting eight new active offices. The rest goes to support infrastructure: ticketing software and the top twenty issues documented. Every line has a target. That's the discipline.",
    },
    {
      id: "s22",
      layout: "action",
      eyebrow: "Your turn",
      title: "Plan your reinvestment budget before the season starts",
      callout: {
        kind: "action",
        title: "Fill in the brief now",
        text: "Write your one-page reinvestment brief: the three-way split, the category breakdown with amounts, and one expected outcome per category. Do it before the season starts — not from what's left in April.",
      },
      narration:
        "Now your turn. Write the brief for the upcoming season — or for the coming months if the season has started. State the three-way split. Break the reinvestment slice into categories with dollar amounts. For each category, write one expected outcome: the renewal rate you're targeting, the CAC your recruiting channel should produce, the ticket reduction you expect from infrastructure. One page, written before the money arrives. That brief is the difference between deliberate reinvestment and reactive spending.",
    },
    {
      id: "s23",
      layout: "tip",
      eyebrow: "Do this",
      title: "Review actuals against the brief every season",
      callout: {
        kind: "tip",
        title: "The brief earns its value in the review",
        text: "After the season: did renewal rate hit the target? Did the recruiting channel produce the expected offices? The gap between brief and actuals is the most useful input to next season's plan.",
      },
      narration:
        "The brief earns its value in the review. After the season, sit down with your brief and actuals. Did retention investment move the renewal rate to target? Did the recruiting channel produce the expected offices at the expected CAC? For each category, note the gap and one sentence on why. That post-season analysis is the most valuable input to next season's brief. It transforms reinvestment from optimism into a learning system. Bureaus that do this review don't repeat the same expensive allocation mistakes.",
    },
    {
      id: "s24",
      layout: "action",
      eyebrow: "Your turn",
      title: "Rank the five categories for your bureau right now",
      callout: {
        kind: "action",
        title: "Where is the leverage highest today?",
        text: "Score each category — retention, proven recruiting, support infrastructure, sales capacity, better terms — on impact and readiness for your bureau right now. The category that scores highest on both gets the most capital in your brief.",
      },
      narration:
        "Score each of the five categories on impact and readiness for your bureau today — high, medium, or low on each axis. The category that scores high on both gets the most capital. Retention high on impact but low on readiness? Write the SOP first, then invest. Proven recruiting high on both? Pour in capital. This two-axis ranking turns the allocation decision from intuition into a reasoned priority order. Write the rankings next to your brief so the amounts reflect the logic.",
    },
    {
      id: "s16",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Bureau profit is seasonal — decide the reinvestment split before the season, not from what's left." },
        { text: "The five highest-return categories: retention systems, proven recruiting, support infrastructure, sales capacity, and better terms from volume." },
        { text: "Retention is cheapest growth — higher renewal extends LTV at zero additional CAC." },
        { text: "Only scale proven recruiting channels with a known CAC. Don't pour capital into experiments." },
        { text: "Fix the retention leak before accelerating recruiting — you can't out-recruit a leaking bucket." },
      ],
      subtitle: "Up next: Build a Team Beyond Yourself",
      narration:
        "Let's recap. One: bureau profit is seasonal, so set the reinvestment split before the money arrives. Two: the five highest-return categories are retention systems, proven recruiting, support infrastructure, sales capacity, and working toward better terms as your volume grows. Three: retention is the cheapest growth you have — each office you keep extends LTV at zero extra CAC. Four: only scale recruiting channels with a proven CAC — don't pour capital into experiments. And five: fix the retention leak before accelerating recruiting, because more recruiting into a leaking bucket just runs the treadmill faster. Next, who does all this work? We'll build the team that lets the bureau grow without being bottlenecked in your calendar. See you in Build a Team Beyond Yourself.",
    },
  ],
};
