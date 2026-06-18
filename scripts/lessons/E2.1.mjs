// =============================================================================
// Interactive lesson definition — ERO Lesson 2.1 "When to Hire"
//
// Authoring source for the narrated interactive experience. The generator
// (scripts/generate-lesson-media.mjs) reads this, produces ElevenLabs audio +
// timings per slide, and assembles the lesson media manifest.
//
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "When to Hire",
  trackId: "ero",
  key: "E2.1",

  slides: [
    {
      id: "s1",
      layout: "cover",
      eyebrow: "ERO Track · Module 2: Scale Your Staff",
      title: "When to Hire",
      subtitle: "Lesson 1 · Narrated walkthrough",
      narration:
        "Welcome to Module Two, where we build the team that grows your office. This first lesson answers the question that keeps owners up at night during January: is it finally time to hire? Hire too early and you bleed cash on a wage you can't cover yet. Hire too late and your service slips and clients quietly walk to the office down the street. By the end you'll know the exact signals that say go, who to bring on first, how to prove a hire pays for itself, and whether to make it seasonal or permanent.",
    },
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core idea",
      title: "Hire before you drown, not after",
      lead: "The right moment to add staff is when demand consistently outruns your capacity — a season early, not a season late.",
      bullets: [
        {
          label: "Too late hurts most",
          text: "By the time you're drowning, service has already slipped and clients are leaving.",
        },
        {
          label: "Consistently, not once",
          text: "One brutal week isn't a signal. A pattern across weeks is.",
        },
      ],
      narration:
        "Here is the core idea. The right time to hire is when demand consistently exceeds your capacity, and that point arrives earlier than most owners think. The instinct is to wait until you're truly drowning, to be absolutely certain before you spend the money. But that's the worst possible time, because by then your service has already slipped. The reviews and referrals you built your whole office on quietly start working against you.",
    },
    {
      id: "s3",
      layout: "tip",
      eyebrow: "The core idea",
      title: "Look for the trend, not the bad day",
      callout: {
        kind: "tip",
        title: "Trend beats anecdote",
        text: "One brutal February week proves nothing. A crunch that repeats week over week — and season over season — is the data that says hire.",
      },
      narration:
        "Notice the word consistently, because it does a lot of work. One brutal week in February is not a signal; it's just February. Every office, even the best-run ones, has a stretch where the lobby is full and the days run long. The signal you're hunting for is a pattern that repeats, week after week within a season, and year over year across seasons. We're reading a trend, not reacting to a single bad day. Get that distinction right and you'll hire on evidence instead of on adrenaline.",
    },
    {
      id: "s4",
      layout: "point",
      eyebrow: "Why it matters",
      title: "Slipping service is expensive and invisible",
      lead: "The cost of waiting too long doesn't show up on an invoice — it shows up in clients who never come back.",
      bullets: [
        {
          label: "Quiet churn",
          text: "An overwhelmed office loses clients one at a time, without ever knowing why.",
        },
        {
          label: "Reputation compounds",
          text: "A few rushed returns become reviews that scare off the next ten prospects.",
        },
      ],
      narration:
        "Let's sit with why this matters, because the cost of waiting is invisible until it's done its damage. When you're stretched too thin, you don't lose clients in a dramatic exit. You lose them quietly, one at a time. A client waits forty minutes past their appointment, feels rushed through their return, and simply books somewhere else next year without ever telling you why. Multiply that across a busy season and you've lost a meaningful slice of your base, and you can't even point to the moment it happened.",
    },
    {
      id: "s5",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "Your time has a price",
      callout: {
        kind: "stat",
        title: "The hidden cost of waiting",
        text: "An owner doing 2 hours of admin a day in season trades roughly 15 returns a week — real revenue walking out the door.",
      },
      narration:
        "Put a number on it. Say you spend two hours a day on admin during the peak weeks. If a return takes you about forty minutes start to finish, that's three returns a day you're not doing, or roughly fifteen across a five-day week. Even if you filled half that gap with real client work at, say, two hundred dollars a return, that's fifteen hundred dollars a week you're leaving on the table to do work a front-desk hire could handle for a fraction of that. Spending your hours on scanning is like paying a preparer's wage to file paperwork.",
    },
    {
      id: "s6",
      layout: "list",
      eyebrow: "Read the signals",
      title: "Four signs it's time",
      bullets: [
        {
          label: "You're turning clients away",
          text: "Or stacking appointments so tight that quality drops below your own bar.",
        },
        {
          label: "Your time is the bottleneck",
          text: "Revenue stops growing because there are only so many returns your two hands can finish.",
        },
        {
          label: "Admin eats your best hours",
          text: "Scanning, scheduling, and phones swallow time that should go to returns and selling.",
        },
        {
          label: "You're declining your best work",
          text: "You pass on a small-business client worth four hundred dollars because you have no room.",
        },
      ],
      narration:
        "Let's read the signals one by one. First, you're turning clients away, or stacking appointments so tightly that the quality of each return drops below your own standard. Second, your own time has become the bottleneck. Revenue has flattened, not because demand dried up, but because there are only so many returns two hands can finish in a day. Third, admin work is eating your highest-value hours, the scanning, the scheduling, the phones, during the very hours you should be preparing returns. And fourth, the painful one: you've started declining work you'd love to have, like a four-hundred-dollar small-business return, simply because there's no room left on the calendar.",
    },
    {
      id: "s7",
      layout: "tip",
      eyebrow: "Read the signals",
      title: "Two signals or more, repeating",
      callout: {
        kind: "tip",
        title: "Your green light",
        text: "Don't wait for all four. When two or more signals repeat week after week, you're only deciding whether to act now — or after you've lost clients.",
      },
      narration:
        "You don't need to wait until all four signals are screaming. When two or more of them show up week after week, the math has already tipped toward hiring. At that point you're not really deciding whether to hire; you're only deciding whether to admit it now, while you still have the hours to interview and train, or later, after you've already lost clients and you're hiring in a panic. The owners who scale make this call early, on the pattern, not late, on the crisis.",
    },
    {
      id: "s8",
      layout: "point",
      eyebrow: "Who comes first",
      title: "First hire: usually the front desk",
      lead: "Your first hire isn't another you — it's the person who buys back your best hours.",
      bullets: [
        {
          label: "What they take off your plate",
          text: "Phones, scheduling, intake, document scanning, follow-up texts, and the lobby.",
        },
        {
          label: "Why it's the smart first move",
          text: "Lower wage, faster to train, and it frees your scarce, expensive hours.",
        },
      ],
      narration:
        "So who do you hire first? For most independent offices, the first hire is not a second preparer. It's an administrative or front-desk person. Here's the logic. A front-desk hire takes the phones, the scheduling, the intake paperwork, the document scanning, the follow-up texts, and the lobby off your plate entirely. They cost less than a preparer, they're faster to train, and most importantly they buy back your scarce, expensive hours, the ones that should be spent finishing returns and bringing in new clients.",
    },
    {
      id: "s9",
      layout: "point",
      eyebrow: "Who comes first",
      title: "A first hire multiplies you",
      lead: "Clearing away your low-value work is how one person turns into the output of more.",
      bullets: [
        {
          label: "Not just another worker",
          text: "Think of the first hire as removing everything that isn't your highest use.",
        },
        {
          label: "Protect the irreplaceable hours",
          text: "Only you can prepare and sell at your level — guard those hours fiercely.",
        },
      ],
      narration:
        "Think about your first hire less as adding a worker and more as multiplying yourself. You don't need a clone yet. You need someone to clear away everything that isn't the highest use of your time, so that the hours only you can use well, preparing complex returns and selling new clients, get protected. An owner who spends peak-season afternoons scanning documents has effectively demoted themselves to the lowest-paid job in the building. The front-desk hire promotes you back to the work that actually grows the office.",
    },
    {
      id: "s9b",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "What a front desk frees",
      callout: {
        kind: "stat",
        title: "The promotion math",
        text: "Move 10 low-value hours a week off your plate and onto an $18/hour hire, and you reclaim time worth $200+ per return.",
      },
      narration:
        "Here's the promotion math in one line. Every hour you spend on the phone or the scanner is an hour you can't spend on a return worth two hundred dollars or more. Hand ten of those low-value hours a week to a front-desk person at eighteen dollars an hour, and you've swapped roughly a hundred eighty dollars of admin labor for time that can produce well over a thousand dollars in prepared returns. That's not cost-cutting. That's the highest-return trade an owner can make in a busy season.",
    },
    {
      id: "s10",
      layout: "point",
      eyebrow: "Who comes second",
      title: "Second hire: a preparer to multiply capacity",
      lead: "Once your hours are protected and demand still outruns you, add a preparer.",
      bullets: [
        {
          label: "Now you multiply, not just protect",
          text: "A trained preparer adds a whole second stream of finished returns.",
        },
        {
          label: "Sequence matters",
          text: "Front desk first so your preparer isn't pulled off returns to answer phones.",
        },
      ],
      narration:
        "Once your hours are protected and demand still outruns what you can finish, it's time for hire number two: a preparer. This is where you stop merely protecting capacity and start multiplying it. A trained preparer adds an entirely new stream of finished returns alongside yours, and now your office can do meaningfully more volume than you ever could alone. Front desk first, preparer second, isn't an iron rule, but it's the pattern that protects your most valuable people from low-value interruptions.",
    },
    {
      id: "s11",
      layout: "tip",
      eyebrow: "Who comes second",
      title: "Why the order pays off",
      callout: {
        kind: "tip",
        title: "Don't strand an expensive preparer",
        text: "Hire a preparer with no front desk and you both get yanked off returns every time the phone rings — wasting your priciest labor.",
      },
      narration:
        "Here's why the order pays off in dollars. If you hire a preparer first but still have no front desk, that expensive preparer, and you, get yanked off returns every single time the phone rings or a walk-in arrives. You're paying preparer wages for interrupted, low-flow work. Build the foundation first, the front desk, then build the capacity on top of it, the preparer. Get the sequence right and both hires pay off. Get it backwards and you strand your priciest labor in a chaotic, interruption-driven day.",
    },
    {
      id: "s12",
      layout: "point",
      eyebrow: "A real example",
      title: "Set up the break-even",
      lead: "Before you post a job, do the arithmetic that tells you whether the hire makes money.",
      bullets: [
        {
          label: "The cost side",
          text: "Hourly wage × hours per week × weeks, plus a little for payroll and training.",
        },
        {
          label: "The revenue side",
          text: "Extra returns freed or produced × your average fee × those same weeks.",
        },
      ],
      narration:
        "Let's set up the break-even, the single most useful tool in this lesson. It has two sides. On the cost side, you have the hourly wage, times the hours per week, times the number of weeks in your season, plus a little extra for payroll taxes and training time before they're productive. On the revenue side, you have the extra returns that hire either frees up by taking work off you, or directly produces, times your average fee, times those same weeks. The question is simple: does the revenue side clearly beat the cost side inside one season?",
    },
    {
      id: "s13",
      layout: "list",
      eyebrow: "A real example",
      title: "The break-even, worked out",
      bullets: [
        {
          label: "The wage",
          text: "Seasonal front-desk hire at $18/hour, 35 hours/week, for 12 weeks ≈ $7,560.",
        },
        {
          label: "What they free up",
          text: "About 10 hours of prep time a week back to you — roughly 15 extra returns/week.",
        },
        {
          label: "The conservative revenue",
          text: "Fill just 10 of those at an average fee of $225 → about $27,000 over the season.",
        },
        {
          label: "The verdict",
          text: "The hire pays for itself in under two weeks of recovered prep time.",
        },
      ],
      narration:
        "Now the worked example, with illustrative numbers. Picture a seasonal front-desk hire at eighteen dollars an hour, thirty-five hours a week, across a twelve-week season. That's about seven thousand five hundred dollars in wages. They hand you back ten hours of prep time each week by taking the phones and the paperwork. At forty minutes a return, that's roughly fifteen returns a week you couldn't do before. Be conservative and assume you fill only ten, at an average fee of two hundred twenty-five dollars. Ten returns, times two hundred twenty-five, times twelve weeks, is about twenty-seven thousand dollars in new revenue, against a seventy-five-hundred-dollar wage.",
    },
    {
      id: "s14",
      layout: "tip",
      eyebrow: "The rule of thumb",
      title: "Pay for itself in one season",
      callout: {
        kind: "tip",
        title: "The break-even test",
        text: "A new hire should cover their full cost within a single tax season. If the math doesn't get there, the role or the pay is wrong.",
      },
      narration:
        "Here's the rule of thumb to carry out of this lesson. A new hire should pay for itself within one season. The returns they free up or produce should cover their full cost, wages plus payroll taxes plus a little training, inside those same peak months. If you run the numbers honestly and the hire simply can't get there in one season, that's not a no forever. It's a signal that the role is wrong, the pay is too high for the value, or you don't yet have the demand and you're a season early. Let the math make the call, not your anxiety.",
    },
    {
      id: "s14b",
      layout: "list",
      eyebrow: "Do this",
      title: "A readiness checklist before you hire",
      bullets: [
        {
          label: "Pattern confirmed",
          text: "Two or more signals have repeated for several weeks running.",
        },
        {
          label: "Break-even clears",
          text: "Your math shows the hire pays for itself inside one season.",
        },
        {
          label: "Role is named",
          text: "You know whether it's front desk or preparer — and why that one first.",
        },
        {
          label: "Cash cushion",
          text: "You can cover the wage for the first few weeks before the revenue lands.",
        },
      ],
      narration:
        "Before you post anything, run this quick readiness checklist. First, the pattern is confirmed: two or more signals have repeated for several weeks, not just one rough day. Second, the break-even clears: your own math shows the hire pays for itself inside a single season. Third, the role is named: you know whether you're hiring a front desk or a preparer, and you can say why that one comes first. And fourth, you have a small cash cushion to cover the wage for the first few weeks, because the wage starts before the extra revenue fully lands. Clear all four and you're hiring from strength, not panic.",
    },
    {
      id: "s15",
      layout: "point",
      eyebrow: "Seasonal vs permanent",
      title: "Start seasonal when demand is spiky",
      lead: "Most tax-office demand lands in a few intense weeks — so most first hires should start seasonal.",
      bullets: [
        {
          label: "Lower risk",
          text: "You're not carrying a wage through the slow off-season months.",
        },
        {
          label: "Right where the pressure is",
          text: "Seasonal staffing meets demand exactly when the crunch actually lives.",
        },
      ],
      narration:
        "Should the hire be seasonal or permanent? Tax-office demand is spiky by nature; most of it lands in a few intense weeks and then thins out. So most first hires should start seasonal. It's lower risk, because you're not carrying a wage through the slow months, and it puts help exactly where the pressure lives. Starting seasonal lets you test the role, test the person, and test your own break-even math against reality, all before you commit to a year-round payroll line.",
    },
    {
      id: "s16",
      layout: "point",
      eyebrow: "Seasonal vs permanent",
      title: "Convert your best people",
      lead: "The smart move isn't just hiring seasonal — it's keeping the keepers.",
      bullets: [
        {
          label: "Spot the standout",
          text: "Learns fast, shows up steady, treats your clients well.",
        },
        {
          label: "Grow the role",
          text: "Off-season extensions, bookkeeping, amendments, and prep for next year.",
        },
      ],
      narration:
        "But here's the move smart owners make. Your best seasonal hire, the one who learns fast, shows up steady, and treats your clients well, you keep. You convert that person to a permanent or part-time role for off-season work like extensions, bookkeeping, amended returns, and prep for next year. You'll see this again in the next lesson, because your best future preparer is very often someone who started seasonal at your front desk. Start seasonal, then hold onto the keepers and grow them.",
    },
    {
      id: "s16b",
      layout: "tip",
      eyebrow: "Script",
      title: "The off-season keep-warm text",
      callout: {
        kind: "quote",
        title: "Send this in the fall",
        text: "\"Hi Maria — you were a huge help last season. I'd love to have you back, and there may be more hours this year. Can we grab 15 minutes in November to plan?\"",
      },
      narration:
        "Here's a copy-ready line for keeping your best seasonal person warm through the off-season. Sometime in the fall, send them a short, genuine message. Something like: Hi Maria, you were a huge help last season, I'd love to have you back, and there may be more hours this year, can we grab fifteen minutes in November to plan? That's it. Specific, warm, and early. A text like that, sent in October or November, is the difference between starting next season with a trained returning hire and starting cold with a stranger in January.",
    },
    {
      id: "s17",
      layout: "point",
      eyebrow: "Plan ahead",
      title: "Recruit before the rush, not during it",
      lead: "The worst time to start a hiring search is the week you realize you need help.",
      bullets: [
        {
          label: "Post early",
          text: "Line up and train seasonal help before late January, not mid-crush.",
        },
        {
          label: "Keep a bench",
          text: "Stay in touch with last year's good seasonal people year-round.",
        },
      ],
      narration:
        "A practical warning on timing, because even the right hire fails if it lands too late. The worst time to start a hiring search is the very week you realize you're underwater, because by then you have no hours to interview, no time to train, and you'll grab the first warm body out of desperation. Plan ahead. Fill seasonal roles before late January, and train them before the crush, so they're useful when you need them. And keep a bench, staying loosely in touch with last year's good people, so you're never starting cold.",
    },
    {
      id: "s18",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Hiring a clone before a helper",
      callout: {
        kind: "warn",
        title: "Don't skip the front desk",
        text: "Owners often hire an expensive preparer first, then keep doing all the phones and intake themselves — so the new hire's time gets wasted and yours never frees up.",
      },
      narration:
        "Now the common mistake, and it's a costly one. Owners often hire a second preparer first, because they think more preparers automatically equals more returns. But they skip the front desk. So the new preparer sits half-idle while the owner still answers every phone call, scans every document, and books every appointment. The expensive hire's time gets wasted, the owner's time never frees up, and the office feels just as stretched, only now with a bigger payroll. The fix is the sequence we covered: protect your hours first, then multiply. Don't hire a clone before you've hired a helper.",
    },
    {
      id: "s19",
      layout: "action",
      eyebrow: "Your turn",
      title: "Run your own break-even",
      callout: {
        kind: "action",
        title: "Fill in your numbers",
        text: "Wage per week × weeks = cost. Then: extra returns/week × your average fee × weeks = revenue. Does revenue beat cost inside one season?",
      },
      narration:
        "Now it's your turn. Open a notes app or grab a napkin and run your own break-even right now. First, your cost: the hourly wage you'd pay, times the hours per week, times the weeks in your season, plus a little for payroll and training. Then your return: the extra returns that hire would free up or produce each week, times your average fee, times those same weeks. If the revenue clearly beats the cost inside one season, you have your answer. If it's close, look at whether a seasonal or part-time version gets you over the line. Do this before you post a single job listing.",
    },
    {
      id: "s19b",
      layout: "action",
      eyebrow: "Your turn",
      title: "Name the role and the date",
      callout: {
        kind: "action",
        title: "Commit to two specifics",
        text: "Write one line: \"My next hire is a ______, and I'll start recruiting by ______.\" Pick a real role and a real date.",
      },
      narration:
        "One more quick exercise, and this one turns intention into action. Write a single line: my next hire is a, and then name the role, front desk or preparer, and I'll start recruiting by, and then put a real date on the calendar, ideally weeks ahead of your crush. Naming the role forces you to apply the sequence we covered, and naming the date keeps you from sliding into the trap of recruiting during the rush. Two specifics, one line. That's how a vague someday becomes a hire that actually shows up trained and ready when you need them.",
    },
    {
      id: "s20",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Hire when demand consistently exceeds capacity — a season early, not after you're drowning." },
        { text: "Watch the signals: turning clients away, your time as the bottleneck, admin eating prep hours." },
        { text: "Front desk first to protect your hours; a preparer second to multiply capacity." },
        { text: "A hire should pay for itself in one season — prove it with the break-even math." },
        { text: "Start seasonal when demand is spiky, recruit ahead of the rush, and keep your best people." },
      ],
      subtitle: "Up next: Where to Find Preparers",
      narration:
        "Let's recap. One: hire when demand consistently exceeds your capacity, a season early, not after you're already drowning. Two: watch the signals, turning clients away, your time becoming the bottleneck, and admin eating your prep hours. Three: hire the front desk first to protect your best hours, then add a preparer to multiply capacity. Four: a good hire pays for itself within one season, and the break-even math proves it. And five: start seasonal when demand is spiky, recruit ahead of the rush, and keep your strongest people. Next, the harder question: where do you actually find great preparers? See you there.",
    },
  ],
};
