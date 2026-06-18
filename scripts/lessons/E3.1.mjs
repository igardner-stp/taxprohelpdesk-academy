// =============================================================================
// Interactive lesson definition — ERO Lesson 3.1 "Know Your Numbers"
//
// Authoring source for the narrated interactive experience. The generator
// (scripts/generate-lesson-media.mjs) reads this, produces ElevenLabs audio +
// timings per slide, and assembles the lesson media manifest.
//
// `narration` is the spoken script (also the caption + transcript). Slide
// visuals are code-driven (see components/learn/SlideView.tsx).
// =============================================================================

export default {
  matchTitle: "Know Your Numbers",
  trackId: "ero",
  key: "E3.1",

  slides: [
    {
      id: "s1",
      layout: "cover",
      eyebrow: "ERO Track · Module 3: Reinvest to Grow",
      title: "Know Your Numbers",
      subtitle: "Lesson 1 · Narrated walkthrough",
      narration:
        "Welcome to Module Three, where we turn a busy tax office into a growing business. This first lesson is the foundation for everything that follows. You can't grow what you don't measure, so before we talk about reinvesting a single dollar, we're going to make sure you actually know where your dollars come from and where they go. By the end, you'll be able to read six numbers that tell you whether your office is healthy, and you'll know how to track them month by month, all year long. A quick note before we start. This is business-growth guidance, not financial or tax advice, and every dollar figure you'll hear today is an illustrative example, not a promise.",
    },
    {
      id: "s2",
      layout: "point",
      eyebrow: "Why it matters",
      title: "Gut feel is expensive",
      lead: "Most owners know their office was busy. Far fewer know whether it was profitable.",
      bullets: [
        { label: "The feeling", text: "Phones rang, the lobby was full, deposits hit the account. It felt like a good season." },
        { label: "The reality", text: "Busy and profitable are not the same thing. Only the numbers tell you which one you had." },
      ],
      narration:
        "Let's start with an uncomfortable truth. Most tax office owners can tell you their season was busy. Far fewer can tell you whether it was profitable. Those are two completely different things. You can file a thousand returns, watch deposits hit your account all February, and still end the year with very little to show for it, because your costs quietly ate the difference. Gut feel tells you the lobby was full. It does not tell you your margin.",
    },
    {
      id: "s3",
      layout: "tip",
      eyebrow: "The cost of guessing",
      title: "Half-blind on your biggest calls",
      callout: {
        kind: "warn",
        title: "Decisions without data",
        text: "Hiring, pricing, and marketing are your biggest moves. Make them on gut feel and you're guessing with real money.",
      },
      narration:
        "Here's why running on gut feel is so expensive. Your biggest decisions as an owner are hiring, pricing, and marketing, and every one of them costs real money. When you make those calls without knowing your numbers, you're guessing. You might hire a preparer you can't actually afford, or hold your prices too low for years, or keep pouring money into marketing that isn't working. The numbers are what turn the lights on, so you stop guessing and start deciding.",
    },
    {
      id: "s4",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "Six numbers run your office",
      callout: {
        kind: "stat",
        title: "6 metrics, tracked monthly",
        text: "Revenue, cost per return, gross margin, client acquisition cost, revenue per client, and cash position.",
      },
      narration:
        "Now the good news. You don't need a finance degree, and you don't need fifty spreadsheets. Six numbers run your office. Revenue, which is the fees you actually collect. Cost per return, which is what it costs you to produce one return. Gross margin, which is the share of each dollar you keep after direct costs. Client acquisition cost, which is what you pay to win a new client. Average revenue per client, which is how much each relationship is worth. And your cash position month by month, which is whether you have money in the bank when the bills come due. Learn to read these six, and you can see your whole business at a glance.",
    },
    {
      id: "s5",
      layout: "point",
      eyebrow: "Metric one",
      title: "Revenue is what you collect",
      lead: "Not what you billed, not what you hoped — what actually landed in the account.",
      bullets: [
        { label: "Count it clean", text: "Fees collected from returns, plus any add-ons like bookkeeping or audit protection." },
        { label: "Watch the leaks", text: "Discounts, write-offs, and unpaid invoices all quietly shrink real revenue." },
      ],
      narration:
        "Let's take them one at a time. Revenue is the fees you actually collected, not what you billed and not what you hoped to make. That distinction matters, because discounts, write-offs, and clients who never paid all quietly shrink the real number. If you tell yourself you did three hundred thousand dollars but you discounted twenty thousand and never collected another ten, your real revenue is two hundred seventy thousand. Track what landed in the account, and include your add-on services too, like bookkeeping or audit protection, because those are real dollars your office earned.",
    },
    {
      id: "s6",
      layout: "point",
      eyebrow: "Metric two",
      title: "Cost per return",
      lead: "Total costs divided by the number of returns you filed.",
      bullets: [
        { label: "Add it all up", text: "Rent, software, salaries, bank product fees, marketing, supplies — every cost to run the office." },
        { label: "Divide", text: "Total costs divided by returns filed equals what one return really costs you." },
      ],
      narration:
        "Metric two is cost per return, and it's the one most owners have never calculated. Add up every cost it takes to run your office for the year. Rent, software licenses, salaries and wages, bank product fees, marketing, supplies, insurance, all of it. Then divide that total by the number of returns you filed. If your office spent one hundred eighty thousand dollars to file twelve hundred returns, your cost per return is one hundred fifty dollars.",
    },
    {
      id: "s7",
      layout: "tip",
      eyebrow: "Read it right",
      title: "Cost per return sets your price floor",
      callout: {
        kind: "tip",
        title: "Price below cost and volume won't save you",
        text: "If your average fee is below your cost per return, more clients just means losing money faster.",
      },
      narration:
        "Why does cost per return matter so much? Because it's the floor under your pricing. If your average fee is below your cost per return, you are paying for the privilege of doing taxes, and here's the trap. No amount of volume fixes it. If you lose money on every return, doing more returns just loses money faster. Knowing this single number tells you whether your prices are healthy or whether you've been quietly working at a loss.",
    },
    {
      id: "s8",
      layout: "point",
      eyebrow: "Metric three",
      title: "Gross margin",
      lead: "The share of every dollar you keep after the direct cost of doing the work.",
      bullets: [
        { label: "The formula", text: "Revenue minus direct costs, divided by revenue, shown as a percent." },
        { label: "Read it", text: "A healthy margin means room to pay yourself, reinvest, and absorb a slow month." },
      ],
      narration:
        "Metric three is gross margin, and it's the heartbeat of the business. Gross margin is your revenue minus your direct costs, divided by revenue, expressed as a percent. Direct costs are the costs tied to producing returns, like preparer wages and bank product fees. If you collect three hundred thousand dollars and your direct costs are one hundred twenty thousand, your gross profit is one hundred eighty thousand, and your gross margin is sixty percent. A thin margin means every surprise hurts. A healthy margin means you can pay yourself, reinvest, and ride out a slow month without panic.",
    },
    {
      id: "s9",
      layout: "point",
      eyebrow: "Metric four",
      title: "Client acquisition cost",
      lead: "What it costs you to win one new client — your marketing efficiency in a single number.",
      bullets: [
        { label: "The formula", text: "Total marketing spend divided by the number of new clients it brought in." },
        { label: "Why it bites", text: "If it costs more to win a client than they pay you the first year, you're growing backward." },
      ],
      narration:
        "Metric four is client acquisition cost, often shortened to C-A-C. This is what you pay to win one new client. Take everything you spent on marketing and divide it by the number of new clients it actually brought in. If you spent six thousand dollars on ads, signs, and a referral promotion, and you won one hundred new clients, your acquisition cost is sixty dollars per client.",
    },
    {
      id: "s10",
      layout: "tip",
      eyebrow: "Read it right",
      title: "Compare cost to what they pay",
      callout: {
        kind: "stat",
        title: "$60 to win, $250 in fees",
        text: "Acquisition cost only makes sense next to client value. Pay $60 to win a $250 client and that's a strong trade.",
      },
      narration:
        "Acquisition cost only means something when you set it next to what a client is worth. If a first-year client pays you two hundred fifty dollars in fees, then spending sixty dollars to win them is a strong trade. But if your acquisition cost climbs above what a client pays you in their first year, you're growing backward, spending more to get them than they bring in, and you need to know that fast so you can fix your marketing or your pricing.",
    },
    {
      id: "s11",
      layout: "point",
      eyebrow: "Metric five",
      title: "Average revenue per client",
      lead: "Total revenue divided by total clients — and the easiest number to grow on purpose.",
      bullets: [
        { label: "The formula", text: "Revenue divided by clients served gives the average value of each relationship." },
        { label: "Move it up", text: "Better client mix, add-on services, and smart pricing all lift this number." },
      ],
      narration:
        "Metric five is average revenue per client. Divide your total revenue by the number of clients you served. If you collected three hundred thousand dollars from twelve hundred clients, your average is two hundred fifty dollars per client. Here's why this one is powerful. You can grow it on purpose. A better client mix, with more small business and gig-worker returns, lifts it. Add-on services like bookkeeping or audit protection lift it. Thoughtful pricing lifts it.",
    },
    {
      id: "s12",
      layout: "tip",
      eyebrow: "The fastest lever",
      title: "Twenty dollars times twelve hundred",
      callout: {
        kind: "stat",
        title: "+$20 per client = +$24,000",
        text: "Lift average revenue per client by $20 across 1,200 clients and that's $24,000 more — with zero new clients.",
      },
      narration:
        "Watch what happens when you nudge this number. Raising your average revenue per client by even twenty dollars, across twelve hundred clients, is another twenty-four thousand dollars, and you didn't win a single new client to get it. That's often the fastest growth lever you have, because winning new clients is expensive and slow, while serving your existing clients a little better, or pricing a little smarter, is something you can start tomorrow.",
    },
    {
      id: "s13",
      layout: "point",
      eyebrow: "Metric six",
      title: "Cash position, month by month",
      lead: "Profit on paper means nothing if the account is empty in July.",
      bullets: [
        { label: "The seasonality trap", text: "Tax revenue floods in for a few months, then the off-season bills keep coming." },
        { label: "The runway", text: "Know how many months your cash can cover expenses with no new revenue." },
      ],
      narration:
        "The sixth number is your cash position, tracked month by month, and for a seasonal business it might be the most important of all. Your revenue floods in over a few short months, but rent, software, and your own paycheck keep coming all twelve. Profit on paper means nothing if your account is empty in July. So at the end of every month, write down how much cash you actually have.",
    },
    {
      id: "s14",
      layout: "tip",
      eyebrow: "Read it right",
      title: "Ask the runway question",
      callout: {
        kind: "tip",
        title: "\"How many months could I cover with no new revenue?\"",
        text: "Knowing you have, say, five months of runway tells you how bold to be — and how calm to stay.",
      },
      narration:
        "Here's the question to ask of your cash position. If no new money came in starting today, how many months could you cover your expenses? That's your runway. Knowing you have, say, five months of runway in May tells you exactly how aggressive you can be with reinvestment, and how calm you can be in the off-season. An owner who knows their runway sleeps at night. An owner who doesn't is always one slow week from a panic.",
    },
    {
      id: "s15",
      layout: "list",
      eyebrow: "A real example",
      title: "A worked mini P and L",
      bullets: [
        { label: "Revenue", text: "1,200 returns at an average of $250 — $300,000 collected (illustrative)." },
        { label: "Direct costs", text: "Preparer wages and bank product fees — $120,000." },
        { label: "Gross profit", text: "$180,000, a 60 percent gross margin." },
        { label: "Overhead", text: "Rent, software, marketing, insurance — $90,000." },
        { label: "Operating profit", text: "$90,000 before owner pay and taxes." },
      ],
      narration:
        "Let's put it all together with a worked example, and remember these numbers are illustrative. Picture a small office that filed twelve hundred returns at an average fee of two hundred fifty dollars. That's three hundred thousand dollars in revenue. Direct costs, mostly preparer wages and bank product fees, came to one hundred twenty thousand, leaving a gross profit of one hundred eighty thousand and a gross margin of sixty percent. Then overhead, the rent, software, marketing, and insurance, took another ninety thousand. That leaves an operating profit of ninety thousand dollars before the owner pays themselves and sets aside taxes.",
    },
    {
      id: "s16",
      layout: "point",
      eyebrow: "Read the example",
      title: "Now read each line",
      lead: "The same office, read through the metrics — this is the skill you're building.",
      bullets: [
        { label: "Cost per return", text: "$210,000 total costs across 1,200 returns is about $175 each." },
        { label: "Headroom", text: "A $250 average fee over a $175 cost leaves real room to grow." },
      ],
      narration:
        "Now let's read that same office through the metrics, because reading the numbers is the actual skill. Total costs were two hundred ten thousand dollars across twelve hundred returns, so cost per return is about one hundred seventy-five dollars. The average fee is two hundred fifty dollars, so there's seventy-five dollars of headroom on every return. That headroom is what funds owner pay, taxes, and reinvestment. Until you stack the numbers like this, you genuinely can't tell whether a packed lobby meant ninety thousand of profit or nine thousand.",
    },
    {
      id: "s17",
      layout: "tip",
      eyebrow: "Same lobby, different future",
      title: "Why two busy offices end up worlds apart",
      callout: {
        kind: "stat",
        title: "$175 vs $220 cost per return",
        text: "Same fees, same busy season. One office has room to grow; the other barely breaks even. The difference is in the numbers.",
      },
      narration:
        "Here's why this matters. Imagine a competitor down the street with the exact same fees and the exact same busy season, but a cost per return of two hundred twenty dollars instead of one hundred seventy-five. They're barely breaking even, while the first office has seventy-five dollars of headroom on every return to reinvest and grow. Same lobby, same crowds, completely different futures. And the only way either owner knows which one they are is by measuring. The difference is entirely in the numbers.",
    },
    {
      id: "s18",
      layout: "list",
      eyebrow: "Do this",
      title: "Books from day one",
      bullets: [
        { label: "Separate accounts", text: "Open a dedicated business checking account. Never mix personal and business money." },
        { label: "Track monthly", text: "Close your books every month, not once a year at tax time." },
        { label: "Set aside for taxes", text: "Move a fixed percent of every deposit into a separate tax-reserve account." },
        { label: "Keep it simple", text: "A clean spreadsheet or entry-level bookkeeping software beats a shoebox every time." },
      ],
      narration:
        "So how do you actually capture these numbers? Build simple monthly books from day one. First, separate your accounts. Open a dedicated business checking account and never run personal expenses through it. Mixing the two is how owners lose track of what the business really earns. Second, close your books every month, not once a year. A quick monthly review keeps the numbers honest and catches problems while they're small. Third, set aside for taxes. Move a fixed percent of every deposit, many owners use twenty-five to thirty percent, into a separate reserve account. And fourth, keep the tools simple. A clean spreadsheet or entry-level bookkeeping software beats a shoebox of receipts every single time.",
    },
    {
      id: "s19",
      layout: "tip",
      eyebrow: "Pro tip",
      title: "Build a one-page dashboard",
      callout: {
        kind: "tip",
        title: "Six rows, twelve columns",
        text: "One row per metric, one column per month. Update it on the first of every month — the whole business on one page.",
      },
      narration:
        "Here's a pro tip that turns this from a chore into a habit. Build a one-page dashboard. Make six rows, one for each metric, and twelve columns, one for each month. On the first of every month, you fill in one column. It takes about fifteen minutes once your books are clean. What you get is the entire health of your business on a single page, with trends you can see at a glance. You'll spot your cost per return creeping up in March. You'll see your cash runway shrinking in summer. You'll catch your acquisition cost climbing before it does damage.",
    },
    {
      id: "s20",
      layout: "point",
      eyebrow: "Why monthly",
      title: "Catch problems while they're small",
      lead: "A number you check every month is a number you can still fix.",
      bullets: [
        { label: "Early warning", text: "A margin slipping in March is fixable; the same slip found in December is just history." },
        { label: "Trends, not snapshots", text: "Twelve data points show you direction — up, flat, or down." },
      ],
      narration:
        "Why monthly, and not quarterly or yearly? Because a number you check every month is a number you can still do something about. A margin that slipped in March can be fixed in April. That same slip, discovered in December, is just history. Monthly tracking also gives you trends instead of snapshots. Twelve data points across the year show you direction, whether each metric is climbing, holding flat, or sliding. And direction is what lets you steer.",
    },
    {
      id: "s21",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "The once-a-year reckoning",
      callout: {
        kind: "warn",
        title: "Don't wait for your accountant",
        text: "Looking at your numbers only when you do your taxes means you learn about problems eleven months too late to fix them.",
      },
      narration:
        "Now the common mistake, and almost every owner makes it at least once. They look at their own numbers only once a year, when their accountant hands back their business return. By then, the season is long over. If your margin slipped or your acquisition cost ballooned, you find out eleven months too late to do anything about it. Another version of this mistake is mixing personal and business money so badly that the numbers are meaningless. And a third is celebrating revenue while ignoring profit. Revenue feeds the ego. Profit feeds the family.",
    },
    {
      id: "s22",
      layout: "action",
      eyebrow: "Your turn",
      title: "Calculate one number today",
      callout: {
        kind: "action",
        title: "Find your cost per return",
        text: "Add up last season's total costs, divide by returns filed. Then compare it to your average fee. What's your headroom?",
      },
      narration:
        "Now it's your turn, and we're going to keep it to one concrete action. Before you do anything else, calculate your cost per return. Pull last season's total costs, everything it took to run the office, and divide by the number of returns you filed. Then put your average fee next to it and look at the gap. That gap is your headroom, the room you have to pay yourself and reinvest. If the number surprises you, good. That surprise is exactly why we measure. Write it down, because we'll build on it in the next lesson.",
    },
    {
      id: "s23",
      layout: "action",
      eyebrow: "Your turn",
      title: "Then start your dashboard",
      callout: {
        kind: "action",
        title: "One page, six rows",
        text: "Open a spreadsheet, list the six metrics down the left, the months across the top. Fill in this month's column.",
      },
      narration:
        "And here's the second step, whenever you're ready. Open a fresh spreadsheet and build that one-page dashboard. List the six metrics down the left side, and the twelve months across the top. Then fill in this month's column with whatever you can pull together right now. It won't be perfect the first time, and that's fine. The point is to start, because the habit is what pays off. Once the structure exists, each month is just fifteen minutes, and within a year you'll have a clear picture of your whole business.",
    },
    {
      id: "s24",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Busy and profitable are different — only the numbers tell you which you had." },
        { text: "Six metrics run your office: revenue, cost per return, gross margin, acquisition cost, revenue per client, and cash position." },
        { text: "Track them monthly on a one-page dashboard, not once a year." },
        { text: "Separate business and personal accounts, and set aside for taxes from every deposit." },
      ],
      subtitle: "Up next: The Reinvestment Mindset",
      narration:
        "Let's recap. One, busy and profitable are not the same thing, and only the numbers tell you which one you actually had. Two, six metrics run your office. Revenue, cost per return, gross margin, client acquisition cost, average revenue per client, and your cash position month by month. Three, track them on a simple one-page dashboard every month, not once a year when it's too late to act. And four, keep your business and personal accounts separate, and set aside taxes from every deposit. You now know where your money comes from and where it goes. In the next lesson, we'll decide on purpose how much of your profit becomes fuel for growth. That's the reinvestment mindset.",
    },
  ],
};
