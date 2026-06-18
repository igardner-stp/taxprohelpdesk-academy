// =============================================================================
// Interactive lesson definition — Marketing Lesson 1.5
// "Measure, Optimize, and Scale"
//
// Authoring source for the narrated interactive experience.
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Measure, Optimize, and Scale",
  trackId: "ero-mktg",
  key: "EM1.5",

  slides: [
    // ── s1: Cover ─────────────────────────────────────────────────────────────
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Marketing Track · Tax Office Lead Generation",
      title: "Measure, Optimize, and Scale",
      subtitle: "Lesson 5 · Narrated walkthrough",
      narration:
        "Welcome to the final lesson of the Marketing Track. You've built the campaign, created the ads, set up lead capture, and scripted your follow-up sequences. Now we close the loop by building the measurement layer that turns all of that work into a compounding system, season over season. By the end you'll know the four numbers that tell you whether your funnel is healthy, how to run disciplined A/B tests, when and how to scale, and how to build a full-year campaign calendar.",
    },

    // ── s2: Why measurement matters ───────────────────────────────────────────
    {
      id: "s2",
      layout: "point",
      eyebrow: "Why measurement matters",
      title: "You can't improve what you can't see",
      lead: "Most independent tax offices that run Facebook ads never measure cost per lead, conversion rate, or cost per client. Without these numbers, every decision is a guess.",
      bullets: [
        {
          label: "The optimization loop",
          text: "Measure, find the weakest step, improve it, re-measure. Each loop makes the whole funnel more efficient.",
        },
        {
          label: "Data beats instinct",
          text: "The ad you feel is performing best is often not the one the data picks. Let the numbers lead.",
        },
      ],
      narration:
        "Most offices check total spend, glance at lead volume, and stop there. They never know which ad produced the cheapest leads or what percentage of leads became clients. The offices that improve each season run a deliberate optimization loop: measure the funnel, find the weakest step, make one targeted improvement, then re-measure. That loop, repeated every week throughout tax season, compounds. After three or four seasons the same daily budget produces dramatically more clients than it did in year one.",
    },

    // ── s3: The four funnel metrics ───────────────────────────────────────────
    {
      id: "s3",
      layout: "list",
      eyebrow: "The four numbers",
      title: "Four funnel metrics to track every week in season",
      bullets: [
        {
          label: "Cost Per Lead (CPL)",
          text: "Total ad spend divided by leads received. Pull from Ads Manager weekly.",
        },
        {
          label: "Lead-to-Appointment Rate",
          text: "Appointments booked divided by total leads. Measures your follow-up system, not your ads.",
        },
        {
          label: "Appointment-to-Client Rate",
          text: "Paying clients divided by appointments that showed. Measures your intake conversation.",
        },
        {
          label: "Cost Per Acquisition (CPA)",
          text: "Total ad spend divided by new paying clients. Your campaign's report card. Must stay well below lifetime value.",
        },
      ],
      narration:
        "Here are the four numbers every office running paid advertising should track every single Monday in season. Cost Per Lead is ad spend divided by leads, pulled straight from Ads Manager. Lead-to-Appointment Rate lives in your CRM and measures your follow-up system. If CPL is strong but this rate is poor, the problem is not the ad. Appointment-to-Client Rate measures your intake conversation. And Cost Per Acquisition is the final report card. It must stay well below your client lifetime value for the campaign to be financially worth running.",
    },

    // ── s4: Where each metric lives ───────────────────────────────────────────
    {
      id: "s4",
      layout: "point",
      eyebrow: "The four numbers",
      title: "Where to pull each metric — Ads Manager vs your CRM",
      lead: "Knowing what to measure is only half the job. Each metric lives in a different place, so pulling them all must take minutes, not a guessing exercise.",
      bullets: [
        {
          label: "CPL lives in Ads Manager",
          text: "Campaigns tab, Cost per Result column. Facebook calculates it automatically when your lead form is the conversion objective.",
        },
        {
          label: "The other three live in your CRM",
          text: "Count leads received, appointments booked, and new paid clients from your status column. Cross-reference new clients with total Ads Manager spend to get CPA.",
        },
      ],
      narration:
        "Cost per lead is the easiest pull. Open Ads Manager, add the Cost per Result column, and Facebook calculates it for you. The other three metrics live in your CRM or pipeline spreadsheet. Count leads received, then count how many moved to Appointment Booked. Count how many appointments converted to Paid Client. For CPA, divide total Ads Manager spend by your new paid client count. Cross-referencing those two sources takes under five minutes once the habit is built. Do this every Monday before client work starts.",
    },

    // ── s5: Illustrative funnel math ──────────────────────────────────────────
    {
      id: "s5",
      layout: "tip",
      eyebrow: "Funnel math",
      title: "Illustrative funnel math — use your own verified numbers",
      callout: {
        kind: "stat",
        title: "Example only — not a projection for your office",
        text: "At a cost per lead of ten dollars, a lead-to-appointment rate of twenty-five percent, and an appointment-to-client rate of sixty percent, cost per acquisition works out to approximately sixty-seven dollars. These figures are illustrative only. Your market, creative quality, follow-up speed, and average fee determine your actual numbers.",
      },
      narration:
        "Let me put the four metrics together in one worked example. These figures are illustrative only — please do not treat them as projections for your office. At a cost per lead of ten dollars and a lead-to-appointment rate of twenty-five percent, you need four leads to book one appointment. At a sixty percent appointment-to-client rate you need roughly one point seven appointments per client, producing an illustrative cost per acquisition of about sixty-seven dollars. The only number that matters is what you calculate using your own real fee data and your own verified conversion rates.",
    },

    // ── s6: LTV is the ceiling ────────────────────────────────────────────────
    {
      id: "s6",
      layout: "point",
      eyebrow: "Funnel math",
      title: "LTV is the ceiling — connect CPA to what a client is actually worth",
      lead: "Your profitable CPA threshold is unique to your office. It is derived entirely from your own average fee and your own client retention, not an industry benchmark.",
      bullets: [
        {
          label: "Calculate your LTV first",
          text: "Average annual fee multiplied by average seasons a client stays. This is your maximum sustainable CPA before the campaign breaks even.",
        },
        {
          label: "Target CPA at one-quarter to one-third of LTV",
          text: "That fraction leaves room for overhead, service delivery costs, and profit margin on every acquired client.",
        },
      ],
      narration:
        "Before deciding whether your cost per acquisition is acceptable, you need your client lifetime value. That is average fee multiplied by average seasons a client stays. If your illustrative average fee is two hundred fifty dollars and clients return for three seasons on average, the illustrative lifetime value is seven hundred fifty dollars. That is your ceiling. A healthy acquisition cost targets one quarter to one third of that figure, leaving room for overhead and profit. Recalculate every season — fee increases and better retention both raise your ceiling.",
    },

    // ── s7: A/B testing — one variable at a time ──────────────────────────────
    {
      id: "s7",
      layout: "point",
      eyebrow: "A/B testing",
      title: "Change exactly one variable, wait, then let the data decide",
      lead: "A/B testing is how campaigns get cheaper over time. The single rule that makes or breaks every test is changing exactly one variable per round.",
      bullets: [
        {
          label: "Why one variable only",
          text: "If you change creative and headline simultaneously and one wins, you will never know which change drove the result — the learning is wasted.",
        },
        {
          label: "Structure and act",
          text: "Run two ads identical except the one tested element. After the test period, pause the loser, move budget to the winner, then create a new challenger.",
        },
      ],
      narration:
        "Inside an Ad Set, run two ads that are completely identical except the single element you are evaluating. Same audience, same daily budget split evenly, same schedule. After the test period, compare cost per lead. The lower CPL wins. Pause the loser, move its full budget to the winner, and when you are ready to improve further, introduce a new challenger. Over an entire season, two or three testing rounds can reduce cost per lead by a meaningful amount compared to where you started on day one.",
    },

    // ── s8: What to test first ────────────────────────────────────────────────
    {
      id: "s8",
      layout: "list",
      eyebrow: "A/B testing",
      title: "What to test first, second, and third — and why that order matters",
      bullets: [
        {
          label: "Round 1: Creative (test first)",
          text: "Founder photo versus lifestyle image, or image versus a short video. Highest variance, fastest learnings.",
        },
        {
          label: "Round 2: Headline or opening hook (test second)",
          text: "Once creative is proven, test two different pain-point first-line questions. Copy is your next highest-leverage lever.",
        },
        {
          label: "Round 3: Audience (test third)",
          text: "Core cold interest audience versus a lookalike built from your existing client list. Often produces the most dramatic CPL difference.",
        },
        {
          label: "Round 4: Form questions (test when ready)",
          text: "One qualifying question versus two, or an entirely different question. This tunes lead quality, not just volume.",
        },
      ],
      narration:
        "Start with creative because it has the most variance and generates learnings the fastest. A founder photo versus a lifestyle image, or a static image versus a short video. Once you have a proven creative winner, move to headline testing. After that, test your audience. Once you have enough existing client emails to build a lookalike, run it against your cold interest audience. This test often reveals dramatic CPL differences because lookalike audiences are inherently warmer. Work through these rounds in sequence and your campaign will improve meaningfully each season.",
    },

    // ── s9: How to judge a test ───────────────────────────────────────────────
    {
      id: "s9",
      layout: "tip",
      eyebrow: "A/B testing",
      title: "Minimum thresholds before you call a winner",
      callout: {
        kind: "tip",
        title: "Wait for real data before declaring a winner",
        text: "Minimum thresholds: at least one hundred impressions per ad variant and at least three to five full days of delivery. Anything below those thresholds is statistical noise, not a data point.",
      },
      narration:
        "The most common A/B testing mistake is calling a winner too early. One day of data with thirty impressions per variant is not a finding. It is a coincidence, strongly influenced by random variation in who Facebook happened to show each ad to first. Before you declare a winner you need a minimum of one hundred impressions per variant and at least three to five full days of delivery. If your budget is small and it takes a full week to reach that threshold, wait. A test called prematurely is worse than no test, because it sends you in the wrong direction with false confidence.",
    },

    // ── s10: When and how to scale ────────────────────────────────────────────
    {
      id: "s10",
      layout: "point",
      eyebrow: "Scaling budget",
      title: "Scale only winners, and only when the math supports it",
      lead: "Increasing budget on a losing campaign multiplies the loss. Increasing budget on a proven winner multiplies the win. The scale decision should always be math-driven, not confidence-driven.",
      bullets: [
        {
          label: "Two conditions for scaling",
          text: "CPA is clearly below your LTV ceiling, and you have remaining calendar capacity to serve the additional clients you will acquire.",
        },
        {
          label: "How to scale",
          text: "Add five to ten dollars per day to the winning Ad Set. Wait three to four days for performance to restabilize before adding another increment.",
        },
      ],
      narration:
        "Both conditions need to be true before you increase spend. The math must show a profitable cost per acquisition, and your schedule must have room for more clients. There is no point scaling lead volume if you are already at capacity. When both conditions are met, increase gradually. Add five to ten dollars per day to the winning Ad Set. Wait three to four days to confirm performance held, then add another increment. Offices that consistently pay the lowest cost per acquisition are the ones that scale slowly and methodically.",
    },

    // ── s11: Why not to double budget overnight ───────────────────────────────
    {
      id: "s11",
      layout: "tip",
      eyebrow: "Scaling budget",
      title: "Never double your budget overnight — it disrupts the algorithm",
      callout: {
        kind: "warn",
        title: "A sudden large increase forces a full learning-phase reset",
        text: "Facebook's delivery system is calibrated to the current spend level. Doubling overnight re-enters the learning phase, temporarily raising costs and erasing the efficiency your testing built. Gradual increments of five to ten dollars per day protect the optimization already in place.",
      },
      narration:
        "When you double or triple budget in a single change, Facebook re-enters the learning phase. During that re-learning window the system is recalibrating who to target, when to deliver, and how to compete in auctions. Your cost per lead rises and performance temporarily drops — sometimes erasing weeks of testing gains. Gradual increments of five to ten dollars per day let the algorithm adjust continuously without a full reset. In prime season with limited time, increments of fifteen to twenty dollars may be acceptable, but doubling from a low base almost always hurts.",
    },

    // ── s12: When not to scale ────────────────────────────────────────────────
    {
      id: "s12",
      layout: "point",
      eyebrow: "Scaling budget",
      title: "When not to scale — fix the bottleneck before buying more leads",
      lead: "If your lead-to-appointment rate is low, you have a follow-up problem, not an advertising problem. More leads into a broken funnel means more cost and more wasted opportunity.",
      bullets: [
        {
          label: "Check lead-to-appointment rate first",
          text: "Fewer than twenty to thirty percent of leads becoming appointments signals a follow-up breakdown. Fix speed-to-contact or message quality before scaling.",
        },
        {
          label: "Also check appointment-to-client rate",
          text: "If appointments are not converting, review your intake script. Scaling when the closing step is weak produces more no-shows at higher cost.",
        },
      ],
      narration:
        "Before you scale, confirm that the bottleneck you are about to multiply is not a broken downstream process. If fewer than roughly twenty to thirty percent of leads are becoming appointments, spending more on ads only generates more unconverted leads. Fix the follow-up first: cut your speed-to-contact target, revise the message, or test a different outreach channel. Once lead-to-appointment rate is healthy, scale. The same logic applies to appointment-to-client rate. Scale amplifies whatever is already happening, both what works and what is broken.",
    },

    // ── s13: The four-phase seasonal calendar ─────────────────────────────────
    {
      id: "s13",
      layout: "list",
      eyebrow: "Seasonal calendar",
      title: "The four-phase annual campaign calendar",
      bullets: [
        {
          label: "Pre-season: December 1 through January 14 — fifty percent of peak budget",
          text: "Awareness and retargeting. Reach warm audiences before competitors ramp up. Collect early-bird leads from planners.",
        },
        {
          label: "Prime season: January 15 through February 28 — full budget intensity",
          text: "Your forty-five-day sprint. Most new clients are acquired in this window. Run at maximum focus.",
        },
        {
          label: "Mid-season: March 1 through April 10 — fifty percent budget",
          text: "Late filers and deadline chasers. Stay active. Do not go quiet.",
        },
        {
          label: "Off-season: April 16 onward — five dollars per day retargeting",
          text: "Keep warm audiences warm so January feels like a reconnection, not a cold introduction.",
        },
      ],
      narration:
        "Think of the year in four distinct phases. Pre-season from December 1 through January 14 at about fifty percent of peak budget focuses on retargeting warm audiences and early-bird leads before competitor auction prices rise. Prime season from January 15 through February 28 is your forty-five-day sprint at full intensity where most new clients are acquired. Mid-season from March 1 through April 10 stays active at fifty percent for late filers. And off-season from April 16 forward runs five dollars per day in retargeting. Most offices skip that final phase entirely. That is a compoundable mistake.",
    },

    // ── s14: Pre-season in detail ─────────────────────────────────────────────
    {
      id: "s14",
      layout: "point",
      eyebrow: "Seasonal calendar",
      title: "Pre-season: December 1 through January 14 — what to run and why",
      lead: "Pre-season is not about generating a flood of cold leads. It is about owning the warm audience pool before competitors start spending and driving up auction prices.",
      bullets: [
        {
          label: "What to run",
          text: "Retargeting ads to website visitors and past engagers. Warm-list campaigns to prior-year client emails. Minimal cold prospecting.",
        },
        {
          label: "Why fifty percent budget works",
          text: "Auction competition from other preparers is low in December. Your dollar goes further on warm audiences now than it will at any point in prime season.",
        },
      ],
      narration:
        "Pre-season feels too early to most offices, and that is exactly the point. Competitors are not yet spending heavily, so auction competition is low and your budget goes further. Focus almost entirely on warm audiences: website visitors from the past year, video viewers, page engagers, and prior-year client email lists. A simple message that your calendar is opening for appointments is enough. You are locking in the easiest and cheapest conversions available before January inflates prices. The cold campaigns you run at full intensity in prime season will convert more efficiently because pre-season built the familiarity that supports them.",
    },

    // ── s15: Prime season in detail ───────────────────────────────────────────
    {
      id: "s15",
      layout: "point",
      eyebrow: "Seasonal calendar",
      title: "Prime season: January 15 through February 28 — maximum intensity",
      lead: "Forty-five days. Six Monday metric reviews. This is the window where most new clients for the full year are acquired. Every optimization cycle counts.",
      bullets: [
        {
          label: "Enter with proven winners",
          text: "Take the creative and audience combination your pre-season testing identified and run it at maximum affordable budget from day one of prime season.",
        },
        {
          label: "Pull metrics every Monday without exception",
          text: "Six Mondays is all you have. Missing even one weekly review costs you a full optimization cycle in a forty-five-day window.",
        },
      ],
      narration:
        "Entering prime season with a tested, proven creative means you are not wasting precious early days in a learning phase. Run proven combinations at full intensity and scale budget as your CPA supports it. Pull all four metrics every Monday and act immediately on what the data shows. If cost per lead climbs mid-season, run a quick creative test. If lead-to-appointment rate drops, cut your speed-to-contact target that week. Prime season is when the compounding effect of everything you built in prior lessons becomes visible in real numbers.",
    },

    // ── s16: Mid-season and off-season ────────────────────────────────────────
    {
      id: "s16",
      layout: "list",
      eyebrow: "Seasonal calendar",
      title: "Mid-season and off-season — stay active when most offices quit",
      bullets: [
        {
          label: "Mid-season: March 1 through April 10 — reduce but do not stop",
          text: "Late filers and extension seekers are still in market. Cut to fifty percent budget but keep campaigns live.",
        },
        {
          label: "April 10 through April 15 — final push",
          text: "Urgency messaging can spike lead volume in the final days before the filing deadline.",
        },
        {
          label: "Off-season: April 16 onward — five dollars per day retargeting only",
          text: "Website visitors, video viewers, and past form submitters. Keep this audience warm through November.",
        },
        {
          label: "Off-season organic content",
          text: "One post per month minimum keeps page visibility healthy and supports retargeting delivery efficiency.",
        },
      ],
      narration:
        "A meaningful number of filers are still undecided in March and early April: procrastinators, extension seekers, and EITC filers who often wait until the last moment. Staying active at fifty percent budget captures that segment without overspending on a shrinking audience. In the final days before the April 15 deadline, a brief urgency-focused ad can produce a volume spike. After April 15, shift entirely to five-dollar-per-day off-season retargeting targeting everyone who has touched your brand in the past twelve months. Pair it with one organic post per month to keep page visibility healthy.",
    },

    // ── s17: Year-round retargeting ───────────────────────────────────────────
    {
      id: "s17",
      layout: "point",
      eyebrow: "Year-round strategy",
      title: "Year-round retargeting — who to target and what to show them",
      lead: "Every warm lead you build in January is a pre-warmed potential client for the following December. But only if you stay visible between seasons.",
      bullets: [
        {
          label: "Who to retarget",
          text: "Website visitors, video viewers at fifty percent watch time or more, page engagers, and past form submitters who did not convert to a client.",
        },
        {
          label: "What to show them",
          text: "Low-pressure familiarity content: helpful tax tips, client testimonials, and in December a direct message that your booking calendar is open.",
        },
      ],
      narration:
        "During the off-season, what you show warm audiences should not be a hard sales message. Show them value: a short video about a common tax mistake, a post about documents to organize before January, or a testimonial. The goal is simple familiarity maintenance, not lead generation. Then in December when your message shifts to your booking calendar opening, those people are not seeing an ad from a stranger. They are seeing a message from someone they have found useful repeatedly. That recognition converts to booked appointments far more efficiently than any cold outreach.",
    },

    // ── s18: The December advantage ───────────────────────────────────────────
    {
      id: "s18",
      layout: "tip",
      eyebrow: "Year-round strategy",
      title: "The December advantage — your competitors restart cold, you do not",
      callout: {
        kind: "tip",
        title: "Eight months of five-dollar-per-day retargeting creates an asymmetric head start",
        text: "Competitors who stopped all advertising on April 16 restart in January with a cold audience and no brand equity built since last season. You enter January with a warm pool already primed. That head start compresses into the highest-value forty-five days of your year.",
      },
      narration:
        "Most independent offices stop all advertising completely on or around April 16. Every single one of those competitors restarts in January with a cold audience, spending the first two to three weeks of prime season rebuilding familiarity they let decay over eight months. That is two to three weeks of reduced efficiency inside a forty-five-day window. Running five dollars per day from May through November means you enter January with a warm pool of people who have seen your content and found it useful. Your prime season begins with a tailwind. Theirs begins into a headwind.",
    },

    // ── s19: Off-season lead magnet ───────────────────────────────────────────
    {
      id: "s19",
      layout: "point",
      eyebrow: "Off-season strategy",
      title: "The off-season lead magnet — build your list all year for almost nothing",
      lead: "A simple free tax planning guide offered via a low-cost lead ad builds a warm email list throughout the off-season. By January those subscribers already know and trust you.",
      bullets: [
        {
          label: "The offer",
          text: "A one-page Free Tax Planning Guide for Working Families: six to eight tips on document organization, common deductions, and what to bring to a preparer appointment.",
        },
        {
          label: "The campaign",
          text: "Three dollars per day as a Facebook lead ad. Email address in exchange for the guide. Total annual cost at that rate is roughly one hundred dollars or less.",
        },
      ],
      narration:
        "Create a simple one-page PDF and run a three-dollar-per-day Facebook lead ad offering it free in exchange for an email. Send two emails per quarter: one in spring about extensions, one in summer on mid-year planning, one in fall for self-employed filers, and one in December announcing your booking calendar is open. People who have received value from you four times before January are not evaluating whether to trust you when they see your booking ad. They already do. The list grows every off-season you run it, and each year it compounds the warmth you bring into prime season.",
    },

    // ── s20: Common mistake — going dark ──────────────────────────────────────
    {
      id: "s20",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Going dark after April 15 hands your warm market to your competitors",
      callout: {
        kind: "warn",
        title: "Never stop all advertising on April 16",
        text: "Offices that maintain five dollars per day in retargeting year-round own the top-of-mind position when January arrives. Competitors who went dark restart cold. At five dollars per day for eight months the total off-season cost is roughly twelve hundred dollars. The compounding advantage is worth far more.",
      },
      narration:
        "The most expensive thing most independent tax offices do every year is not a bad ad. It is the complete advertising blackout that starts April 16. The impulse is understandable — tax season is exhausting. But the cost accumulates invisibly. By August your warm audiences have moved on. By December they have forgotten you. When you restart in January you are not picking up where you left off. You are starting from zero and competing against providers who never left. An office running five dollars per day through the off-season enters January with a warm, primed audience. An office that went dark enters with nothing but a budget and hope.",
    },

    // ── s21: Build the tracker action ─────────────────────────────────────────
    {
      id: "s21",
      layout: "action",
      eyebrow: "Your turn",
      title: "Action: build your four-metric weekly tracking spreadsheet",
      callout: {
        kind: "action",
        title: "Create the spreadsheet and block fifteen minutes every Monday",
        text: "Eight columns: Week Ending, Ad Spend, Leads, Cost Per Lead, Appointments Booked, Lead-to-Appointment Rate, New Clients, Cost Per Acquisition. Fill in last week's row every Monday morning before client work. Scan the trend line and ask: which step showed the most weakness? Make one targeted improvement. That is your weekly business review.",
      },
      narration:
        "Open a spreadsheet and create these eight columns: Week Ending, Ad Spend, Leads, Cost Per Lead, Appointments Booked, Lead-to-Appointment Rate, New Clients, and Cost Per Acquisition. Every Monday during tax season, pull last week's numbers from Ads Manager and your CRM, fill in the row, and look at the trend. Ask one question: which step showed the most weakness this week? Then make one action to address it. Block fifteen minutes on your calendar now, before the season starts, and label it your weekly business review. Protect it like a client appointment.",
    },

    // ── s22: Map the calendar action ──────────────────────────────────────────
    {
      id: "s22",
      layout: "action",
      eyebrow: "Your turn",
      title: "Action: map your four-phase campaign calendar with real dates",
      callout: {
        kind: "action",
        title: "Fill in all four phases with your planned budget right now",
        text: "Pre-season, December 1 through January 14, fifty percent budget: write your planned daily spend. Prime season, January 15 through February 28, full budget: write it. Mid-season, March 1 through April 10, fifty percent: write it. Off-season from April 16, five dollars per day retargeting: set a recurring calendar reminder now. Treat off-season as fixed overhead, not optional.",
      },
      narration:
        "Map your four-phase calendar with actual dates and actual budget numbers right now. Then add two calendar reminders: December 1 to launch pre-season, and April 16 to shift to off-season retargeting. Treat the five-dollar-per-day off-season budget the same way you treat your CRM subscription. It is fixed overhead. It is always on. It does not get cancelled because the season ended. This calendar, followed consistently, means every tax season starts with a warm audience, a tested campaign, and a system that improves on itself rather than restarting from scratch.",
    },

    // ── s23: The Monday ritual tip ────────────────────────────────────────────
    {
      id: "s23",
      layout: "tip",
      eyebrow: "Bonus tip",
      title: "The Monday ritual — fifteen minutes, same time every week, without exception",
      callout: {
        kind: "tip",
        title: "Consistency beats intensity for measurement systems",
        text: "Fifteen minutes every Monday is worth more than a two-hour deep dive once a month. The value of the weekly tracker is the trend line it builds across six to eight consecutive weeks — not any single data point. A rising cost per lead across three straight Mondays is an early warning. A single bad Monday is noise.",
      },
      narration:
        "The value of your weekly tracker is not in any single data point. It is in the trend line that builds across six or eight consecutive Monday reviews. A two-percent improvement in lead-to-appointment rate is invisible in isolation. Across six weeks it becomes a story about your follow-up sequence getting measurably better. A rising cost per lead over three straight Mondays is an early warning that your creative is fatiguing before you have burned through significant budget. Put the fifteen-minute recurring event in your calendar before the season starts and protect it. Consistency is what separates offices that improve season over season from those that restart every January.",
    },

    // ── s24: Recap ─────────────────────────────────────────────────────────────
    {
      id: "s24",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Track four metrics every Monday in season: Cost Per Lead, Lead-to-Appointment Rate, Appointment-to-Client Rate, and Cost Per Acquisition. These numbers reveal every meaningful weakness in the funnel." },
        { text: "A/B test one variable at a time. Wait three to five days and at least one hundred impressions per variant before declaring a winner. Scale the winner, pause the loser, then challenge it again." },
        { text: "Scale budget gradually in five-to-ten-dollar-per-day increments, only when CPA is well below your lifetime value ceiling and you have capacity to serve more clients." },
        { text: "Run a four-phase annual campaign calendar: pre-season at fifty percent budget, prime season at full intensity, mid-season at fifty percent, and five dollars per day off-season retargeting as fixed overhead." },
        { text: "Never go dark after April 15. Year-round retargeting at minimal daily cost means you own the warm-audience pool and the top-of-mind position when every competitor restarts cold in January." },
      ],
      subtitle: "Up next: You've completed the Tax Office Marketing track",
      narration:
        "Here are the five things to carry forward from this lesson. One: track four funnel metrics every Monday. Two: A/B test one variable at a time with sufficient data before calling a winner. Three: scale budget gradually and only when the math is clearly in your favor. Four: run all four phases of the annual campaign calendar with off-season retargeting built in as fixed, non-negotiable overhead. And five: never go dark after April 15. You have now completed the full Tax Office Marketing Track. You have a complete client-acquisition system. The next step is execution. Pick one action from each lesson, schedule it, and do it. Systems do not build themselves. But when they are built and measured, they compound.",
    },
  ],
};
