// =============================================================================
// Interactive lesson definition — Bureau Lesson 3.1 "Know Your Bureau Economics"
//
// Authoring source for the narrated interactive experience. The generator
// (scripts/generate-lesson-media.mjs) reads this, produces ElevenLabs audio +
// timings per slide, and assembles the lesson media manifest.
//
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Know Your Bureau Economics",
  trackId: "bureau",
  key: "B3.1",

  slides: [
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Bureau Track · Module 3: Scale the Bureau",
      title: "Know Your Bureau Economics",
      subtitle: "Lesson 1 · Narrated walkthrough",
      narration:
        "Welcome to Module Three. You've recruited offices and learned how to keep them. Now we scale. And scaling starts with one honest question: do you actually know what each office is worth to you? Most bureau owners cannot answer that with a number. They have a general sense of who's good and who's trouble, but not the math. By the end of this lesson you'll know the six numbers that run a bureau, how to build a per-office unit-economics spreadsheet, and what the numbers tell you to do — recruit harder, retain better, or raise your prices.",
    },
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core idea",
      title: "A bureau is a recurring-revenue business",
      lead: "Revenue minus cost, multiplied by the number of offices you keep — that's the whole model.",
      bullets: [
        {
          label: "Recurring, not one-time",
          text: "Each office you retain is a revenue stream that renews itself — that's the compounding engine.",
        },
        {
          label: "Most owners can't state the math",
          text: "If you don't know your per-office numbers, every growth decision is a guess.",
        },
      ],
      narration:
        "Here is the core idea. A bureau is a recurring-revenue business. Every office you sign and keep is a revenue stream that renews itself season after season, and that compounding is the whole power of the model. But the compounding only works if the underlying unit economics are sound — if each office genuinely contributes more than it costs. Most bureau owners have a feel for which offices are profitable, but they've never calculated the numbers. That's the gap this lesson closes.",
    },
    {
      id: "s3",
      layout: "tip",
      eyebrow: "Why it matters",
      title: "You can't optimize what you haven't measured",
      callout: {
        kind: "stat",
        title: "The strategic clarity test",
        text: "If you can't state your average margin per office, your cost to acquire an office, and your renewal rate, you're flying blind on your three most important growth levers.",
      },
      narration:
        "Think about what it means to not know your unit economics. You're spending on recruiting without knowing how much an office is worth. You're investing in retention without knowing how much churn is actually costing you. And you're making pricing decisions by feel. The three most important strategic choices in a bureau — how much to spend on recruiting, how hard to invest in retention, and where to set prices — all fall directly out of six numbers. Get them on paper and your strategy almost writes itself.",
    },
    {
      id: "s4",
      layout: "list",
      eyebrow: "The six numbers",
      title: "Track these per office",
      bullets: [
        {
          label: "Revenue per office",
          text: "Software fees, per-return splits, and bank-product revenue combined.",
        },
        {
          label: "Cost to serve per office",
          text: "Support time, software cost, and overhead allocated per office.",
        },
        {
          label: "Margin per office",
          text: "Revenue minus cost to serve — your actual profit from one office.",
        },
        {
          label: "Cost to acquire an office (CAC)",
          text: "Total recruiting and marketing spend divided by new active offices.",
        },
        {
          label: "Office lifetime value (LTV)",
          text: "Margin per office times average years retained.",
        },
        {
          label: "Active office count and renewal rate",
          text: "How many offices are active and what share renew each season.",
        },
      ],
      narration:
        "Six numbers. First, revenue per office — the sum of software fees, per-return splits, and bank-product revenue for one office over a season. Second, cost to serve per office — support hours, the software cost you absorb, and a fair slice of overhead allocated to that office. Third, margin per office — revenue minus cost to serve. That's what you keep. Fourth, cost to acquire an office, or CAC — total recruiting and marketing spend divided by new active offices signed. Fifth, office lifetime value, or LTV — your margin per office times the average number of years an office stays. And sixth, active office count and renewal rate, the denominator everything else sits on.",
    },
    {
      id: "s5",
      layout: "point",
      eyebrow: "Revenue per office",
      title: "Three streams, not one",
      lead: "Most bureau owners dramatically undercount revenue because they only think about the software fee.",
      bullets: [
        {
          label: "Software fees",
          text: "The flat per-seat or per-season fee the office pays for their license.",
        },
        {
          label: "Per-return splits",
          text: "Your share of the preparation fee on each return the office files.",
        },
        {
          label: "Bank-product revenue",
          text: "Overrides or a share of refund-transfer and advance fees — often the largest stream.",
        },
      ],
      narration:
        "Revenue per office has three components, and many bureau owners undercount theirs because they only track the software fee. First, the software fee — the flat per-seat or per-season charge. Second, the per-return split — your share of each preparation fee, which scales with the office's volume. Third, bank-product revenue — the overrides or percentage of refund-transfer and advance fees. This third stream is often the largest and most variable, so it's the one most likely to be undertracked. Add all three and you have a true revenue picture. Remember that bank-product settlement practices and timing vary by bank and program, so track what's actually flowing to you, not what you expect.",
    },
    {
      id: "s6",
      layout: "point",
      eyebrow: "Cost to serve",
      title: "Support is the hidden cost most owners ignore",
      lead: "Every support hour spent on an office is a real cost that reduces that office's margin.",
      bullets: [
        {
          label: "Support labor",
          text: "Hours answering tickets, taking calls, and solving problems for that office.",
        },
        {
          label: "Software pass-through",
          text: "Any portion of your software cost you absorb rather than pass on.",
        },
        {
          label: "Overhead allocation",
          text: "A fair share of fixed costs — tools, staff, marketing — spread across active offices.",
        },
      ],
      narration:
        "Cost to serve is where most bureau owners undercount. They know what they charge an office but not what it costs to support them. Support labor is real money — the hours you and your team spend on that office's tickets and calls need to be valued at an hourly rate and counted. Then there's the software cost you absorb rather than pass through. And then a fair slice of overhead — your tools, your staff's time, your marketing — spread across your active office count. An office that calls in fifteen times a season is significantly more expensive to serve than one that runs independently. That difference should show up in your numbers.",
    },
    {
      id: "s7",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "Margin per office reveals who's actually valuable",
      callout: {
        kind: "stat",
        title: "Not all offices are equal",
        text: "In many bureaus, a small share of offices generate a large share of the margin — and a few offices are actually unprofitable once support costs are counted.",
      },
      narration:
        "When you subtract cost to serve from revenue per office, something important often becomes visible: your offices are not equally profitable. As a general pattern, a small share of your offices often generates a disproportionately large share of total margin. These are your high-volume, low-support, reliably renewing offices. At the other end, a few may actually be unprofitable once all support costs are counted — they pay a modest fee but consume hours of your time weekly. You don't know which is which until you run the math. That knowledge changes how you invest your attention and your recruiting dollars.",
    },
    {
      id: "s8",
      layout: "point",
      eyebrow: "Cost to acquire",
      title: "CAC: what it really costs to sign a new office",
      lead: "CAC is your total recruiting and marketing spend divided by the number of new offices that actually become active.",
      bullets: [
        {
          label: "Include all recruiting spend",
          text: "Ads, events, your time, referral bonuses — every dollar and hour that went toward signing new offices.",
        },
        {
          label: "Divide by active offices, not signed",
          text: "An office that never files returns doesn't count — only offices that produce revenue.",
        },
      ],
      narration:
        "CAC is the total cost to bring one new active office onto your network. Add all your recruiting spend: paid ads, events, referral bonuses, and a fair value for your own time on demos and follow-ups. Then divide by the number of offices that signed and actually became active — meaning they filed returns and produced revenue. A signed office that installed the software but never opened is not an active office. If your recruiting spend was forty thousand dollars and you signed twenty active offices, your CAC is two thousand dollars per office. That number only makes sense in comparison to your LTV.",
    },
    {
      id: "s9",
      layout: "point",
      eyebrow: "Office LTV",
      title: "LTV: the number that unlocks your recruiting budget",
      lead: "Lifetime value is how much one office is worth over its entire relationship with you.",
      bullets: [
        {
          label: "The formula",
          text: "Annual margin per office × average years retained = LTV.",
        },
        {
          label: "Why it matters",
          text: "As long as LTV clearly exceeds CAC, spending more on recruiting creates value.",
        },
      ],
      narration:
        "Lifetime value is where unit economics get powerful. LTV equals your annual margin per office times the average number of years an office stays. That product is the total value you can expect from one office relationship. The strategic rule: if LTV clearly exceeds CAC, spend more on recruiting, because every new office is a positive-return investment. If CAC is creeping toward LTV, improve retention first — longer retention multiplies LTV without adding to CAC. All the strategy falls out of this ratio.",
    },
    {
      id: "s10",
      layout: "tip",
      eyebrow: "A real example",
      title: "The LTV to CAC ratio, worked out",
      callout: {
        kind: "stat",
        title: "Illustrative unit economics — results vary widely",
        text: "Example only: $800/year net margin × 4 years retained = $3,200 LTV. At $400 to acquire, that's an 8:1 return on recruiting spend. Your actual numbers will differ.",
      },
      narration:
        "Here's an illustrative worked example — not a promise, not a typical result, just a teaching example. Suppose your average office produces eight hundred dollars a year in net margin after all costs, and stays with you four years. That's a thirty-two-hundred-dollar lifetime value. If it costs four hundred dollars in recruiting spend to acquire that office, your LTV to CAC ratio is eight to one. For every four hundred dollars invested in recruiting, you generate thirty-two hundred in value. That ratio says: pour more into the funnel. But if retention was only two years, the same office is worth sixteen hundred — a four to one ratio. Still positive, but far less room to spend on recruiting. That's why retention multiplies recruiting ROI.",
    },
    {
      id: "s11",
      layout: "list",
      eyebrow: "A real example",
      title: "Building your unit-economics spreadsheet",
      bullets: [
        {
          label: "Column 1 — Office ID",
          text: "One row per active office.",
        },
        {
          label: "Column 2 — Revenue",
          text: "Software fee + splits + bank-product revenue for the season.",
        },
        {
          label: "Column 3 — Cost to serve",
          text: "Support hours at your rate + software cost + overhead allocation.",
        },
        {
          label: "Column 4 — Margin",
          text: "Revenue minus cost to serve.",
        },
        {
          label: "Column 5 — Years retained",
          text: "How many seasons this office has renewed.",
        },
      ],
      narration:
        "Let's make this concrete. One row per active office. Column two is total revenue — software fee, per-return splits, and bank-product revenue. Column three is cost to serve — support hours at an honest hourly rate, plus software cost absorbed, plus overhead. Column four is margin: column two minus three. Column five is how many seasons this office has renewed. Now sort by margin, descending. The top quarter of your list is where the bureau's profit actually lives. The bottom rows with thin or negative margin are your decisions: coach them, reprice them, or eventually release them. This view transforms vague intuition into clear choices.",
    },
    {
      id: "s12",
      layout: "tip",
      eyebrow: "Do this",
      title: "Calculate your overall LTV to CAC ratio",
      callout: {
        kind: "tip",
        title: "The ratio that drives strategy",
        text: "LTV divided by CAC is the single most useful ratio in your bureau. Above 3: recruit harder. Below 3: fix retention or reprice before spending more on recruiting.",
      },
      narration:
        "Once you have your average margin per office from the spreadsheet, multiply by your average years retained to get LTV. Then divide your last season's recruiting spend by new active offices to get CAC. Divide LTV by CAC. If the ratio is above three, your unit economics support aggressive recruiting investment — every new office is a strong return. If the ratio is below three because offices are leaving too soon, fix retention first. If the ratio is low because margins are thin, reprice or cut support costs before scaling. That one ratio answers the biggest strategic question in your bureau.",
    },
    {
      id: "s13",
      layout: "point",
      eyebrow: "What the numbers tell you",
      title: "Three strategic signals, one set of numbers",
      lead: "Your six numbers don't just describe the bureau — they tell you which lever to pull next.",
      bullets: [
        {
          label: "LTV much greater than CAC",
          text: "Recruit harder — every new office is a high-return investment.",
        },
        {
          label: "Low renewal rate dragging LTV",
          text: "Fix retention first — longer retention multiplies LTV at zero extra CAC.",
        },
        {
          label: "Thin margin per office",
          text: "Raise prices or cut cost to serve — scaling thin margins just scales the problem.",
        },
      ],
      narration:
        "Here's the strategic payoff. Your six numbers answer the three questions every bureau owner wrestles with. If LTV is much greater than CAC, recruit harder — every new office is a strong return. If LTV is close to CAC because offices are leaving too soon, fix retention first — getting an office to stay two years instead of one doubles its LTV for free. And if margin per office is thin, raise prices or cut support costs before recruiting more. Adding more offices at a thin margin just scales a problem. The numbers tell you which of the three to fix, in what order.",
    },
    {
      id: "s14",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Counting signed offices, not active ones",
      callout: {
        kind: "warn",
        title: "Active means filing, not signed",
        text: "Vanity metrics count signed offices. Unit economics count active ones — offices that filed returns and generated revenue. The gap between the two reveals wasted recruiting spend.",
      },
      narration:
        "The most common mistake in bureau economics: confusing signed offices with active ones. A bureau that signed fifty offices and had thirty active ones did not grow by fifty. It grew by thirty, and twenty signing fees went nowhere. When you calculate CAC, use active offices in the denominator. The gap between signed and active reveals how much of your recruiting spend is wasted converting people who never produce. Closing that gap — through better qualifying or better onboarding — is often the highest-return change a bureau can make.",
    },
    {
      id: "s15",
      layout: "tip",
      eyebrow: "Compliance",
      title: "These figures are illustrative — use your own numbers",
      callout: {
        kind: "warn",
        title: "Earnings claims carry real legal weight",
        text: "All dollar examples in this lesson are illustrative only. Actual bureau margins vary widely. When sharing projections with prospects, the FTC and state business-opportunity laws regulate earnings claims — use the prospect's own verified data and have counsel review recruiting materials.",
      },
      narration:
        "A critical compliance note. Every dollar figure in this lesson is a teaching example, not a promise or a typical result. Actual bureau margins, LTV, and CAC vary widely based on your market, your pricing, the software you resell, and the type of offices in your network. When you build your own spreadsheet, use your own actual numbers. And if you ever share economics projections with prospective offices as part of your recruiting pitch, remember: the FTC and several state business-opportunity laws regulate earnings claims. Use the prospect's own verified data, label projections as estimates, and have counsel review your recruiting materials. Your own honest numbers will serve you far better than borrowed ones.",
    },
    {
      id: "s16",
      layout: "point",
      eyebrow: "Renewal rate",
      title: "Renewal rate is the health metric for everything else",
      lead: "Renewal rate captures the combined effect of your onboarding, support, pricing, and loyalty — in one honest number.",
      bullets: [
        {
          label: "How to calculate it",
          text: "Offices that renewed ÷ offices eligible to renew, for each season.",
        },
        {
          label: "What it tells you",
          text: "A rising renewal rate multiplies LTV and reduces the recruiting spend needed just to stay flat.",
        },
      ],
      narration:
        "Renewal rate ties directly to LTV. Every percentage point you improve renewal extends the average years retained across your network, which multiplies LTV without adding to CAC. A bureau at seventy-five percent renewal has to recruit a quarter of its network every year just to stay flat. A bureau at eighty-eight percent recruits to grow, not to replace. Track renewal rate every season alongside your other five numbers. When it rises, your LTV to CAC ratio improves. When it falls, that's your earliest warning that something in onboarding, support, or pricing needs attention before you invest more in recruiting.",
    },
    {
      id: "s17",
      layout: "action",
      eyebrow: "Your turn",
      title: "Build your per-office margin table",
      callout: {
        kind: "action",
        title: "Open a spreadsheet right now",
        text: "List your active offices. For each: revenue (fees + splits + bank product), cost to serve (support + software + overhead), and margin. Sort by margin. What do you see at the top and at the bottom?",
      },
      narration:
        "Now it's your turn, and this is the exercise that changes how you see your bureau. Open a spreadsheet and list every active office. For each, estimate revenue, cost to serve, and margin. Sort by margin, highest to lowest. Look at the top — those are the offices you cannot afford to lose, and the profile you want to recruit more of. Look at the bottom — those are the offices that need repricing, coaching, or a decision. Fifteen minutes and you'll have the clearest picture of your bureau you've ever had.",
    },
    {
      id: "s18",
      layout: "action",
      eyebrow: "Your turn",
      title: "Calculate your LTV to CAC ratio",
      callout: {
        kind: "action",
        title: "The ratio that answers the big question",
        text: "LTV = average annual margin × average years retained. CAC = total recruiting spend ÷ new active offices. Divide LTV by CAC. Is it above 3? That tells you whether to recruit harder or retain better.",
      },
      narration:
        "Second exercise: calculate your LTV to CAC ratio. Take your average annual margin per office, multiply by average years retained — that's LTV. Take your total recruiting and marketing spend last season and divide by new active offices — that's CAC. Now divide LTV by CAC. A ratio well above three says invest more in recruiting. A ratio near one, or below three because offices are leaving quickly, says retention is the priority. Write these two numbers down. They are the most important numbers in your bureau strategy, and most owners have never actually run this calculation.",
    },
    {
      id: "s20",
      layout: "point",
      eyebrow: "A real example",
      title: "LTV:CAC worked — seeing the retention lever",
      lead: "Changing only one input — years retained — shows how much retention drives the ratio.",
      bullets: [
        {
          label: "Scenario A — 2 years retained",
          text: "Illustrative $600 margin × 2 years = $1,200 LTV. At $500 CAC, ratio is 2.4 — too thin to recruit aggressively.",
        },
        {
          label: "Scenario B — 4 years retained",
          text: "Illustrative $600 margin × 4 years = $2,400 LTV. Same $500 CAC, ratio climbs to 4.8 — green light.",
        },
        {
          label: "The lesson",
          text: "Retention improvement doubled the ratio without changing margin or CAC at all.",
        },
      ],
      narration:
        "Two teaching scenarios. Scenario A: six hundred dollars annual net margin, two years retained, five hundred dollar CAC. LTV is twelve hundred. Ratio: two point four — below three, so economics don't support aggressive recruiting yet. Scenario B: same margin, same CAC, but four years retained. LTV doubles to twenty-four hundred. Ratio: four point eight. One lever changed: how long offices stay. That's why retention comes first in every bureau growth plan.",
    },
    {
      id: "s21",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Tracking gross revenue without tracking margins",
      callout: {
        kind: "warn",
        title: "Revenue growth can hide margin shrinkage",
        text: "A bureau's gross revenue can rise while per-office margin falls — because support costs crept up, software costs increased, or pricing didn't keep pace. Track both every season.",
      },
      narration:
        "The most dangerous habit: watching total revenue grow and assuming profitability is fine. Support costs increase as the network grows. Pricing stays flat. Revenue rises but margin per office quietly shrinks. You can't see a margin squeeze from the top line alone. The per-office spreadsheet you built catches it early. Run it every season.",
    },
    {
      id: "s22",
      layout: "action",
      eyebrow: "Your turn",
      title: "Calculate your LTV:CAC ratio",
      callout: {
        kind: "action",
        title: "Five steps, one critical number",
        text: "Step 1: average annual margin per office. Step 2: average years offices have stayed. Step 3: multiply for LTV. Step 4: last season's recruiting spend divided by new active offices for CAC. Step 5: divide LTV by CAC. Write the ratio down.",
      },
      narration:
        "Now run the math most bureau owners have never done. Average annual margin per office from your spreadsheet, times average years retained: that's LTV. Total recruiting spend last season divided by new active offices: that's CAC. Divide LTV by CAC. If the ratio is above three, your economics support investing more in recruiting. If it's below three, retention or repricing comes first. One number, one clear strategic direction. Write it down.",
    },
    {
      id: "s23",
      layout: "list",
      eyebrow: "Putting it together",
      title: "Your six-number bureau health dashboard",
      bullets: [
        { label: "Revenue per office", text: "Software fees plus splits plus bank-product revenue — all three streams, every season." },
        { label: "Cost to serve per office", text: "Support labor plus software cost absorbed plus overhead — the full true cost." },
        { label: "Margin per office", text: "Revenue minus cost to serve — the number that drives LTV." },
        { label: "CAC", text: "Total recruiting spend divided by new active offices." },
        { label: "LTV", text: "Annual margin times average years retained." },
        { label: "Renewal rate", text: "Offices renewed divided by offices eligible — track season over season." },
      ],
      narration:
        "Six numbers in one spreadsheet, updated every season: that's your bureau health dashboard. Margin tells you whether the model is sound. CAC tells you what growth costs. LTV tells you what growth is worth. Renewal rate tells you whether the bucket holds. Together they answer the three strategic questions: recruit harder, retain better, or reprice. Build the dashboard once. Update it every year.",
    },
    {
      id: "s24",
      layout: "tip",
      eyebrow: "Do this",
      title: "Review the dashboard every season, not just once",
      callout: {
        kind: "tip",
        title: "Trends matter more than snapshots",
        text: "A single season's numbers tell you where you stand. Three seasons of numbers tell you which direction you're moving — and whether the levers you pulled actually worked.",
      },
      narration:
        "A snapshot shows where the bureau stands today. Three seasons of data show the direction: margin rising or falling, CAC trending down as recruiting gets efficient, renewal rate improving or slipping. Those trends tell you whether the investments you made actually worked — or whether a problem is quietly getting worse. Schedule the dashboard review as a recurring post-season habit before each new season's planning begins.",
    },
    {
      id: "s19",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "A bureau's six key metrics: revenue per office, cost to serve, margin per office, CAC, LTV, and renewal rate." },
        { text: "Revenue per office has three streams — software fees, per-return splits, and bank-product revenue. Track all three." },
        { text: "LTV equals annual margin times average years retained. CAC is recruiting spend divided by new active offices." },
        { text: "If LTV greatly exceeds CAC, recruit harder. If renewal is low, fix retention first. If margins are thin, reprice before scaling." },
        { text: "All dollar figures are illustrative. Use your own actuals, and comply with earnings-claim rules when pitching prospects." },
      ],
      subtitle: "Up next: Reinvest to Grow the Bureau",
      narration:
        "Let's recap. One: the six numbers every bureau needs are revenue per office, cost to serve, margin, CAC, LTV, and renewal rate. Two: revenue has three streams — software fees, splits, and bank-product revenue — track all three. Three: LTV is annual margin times years retained; CAC is recruiting spend divided by new active offices. The ratio between them drives strategy. Four: if LTV much exceeds CAC, recruit harder; if renewal is dragging LTV down, fix that first; if margins are thin, reprice before scaling. And five: all dollar figures here are illustrative — run your own honest numbers and respect earnings-claim rules. Next, now that you know what your bureau earns, we'll build a plan to reinvest it deliberately. See you in Reinvest to Grow the Bureau.",
    },
  ],
};
