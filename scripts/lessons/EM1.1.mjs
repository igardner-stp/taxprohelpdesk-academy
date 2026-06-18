// =============================================================================
// Interactive lesson definition — Marketing Lesson 1.1
// "Build Your Facebook Lead Engine"
//
// Authoring source for the narrated interactive experience.
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Build Your Facebook Lead Engine",
  trackId: "ero-mktg",
  key: "EM1.1",

  slides: [
    // ── s1: Cover ────────────────────────────────────────────────────────────
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Marketing Track · Tax Office Lead Generation",
      title: "Build Your Facebook Lead Engine",
      subtitle: "Lesson 1 · Narrated walkthrough",
      narration:
        "Welcome to the Marketing Track. This first lesson is the architecture lesson — the one you need before you ever open Ads Manager. By the end you will understand why Facebook is the right channel for a tax office, which campaign objective to start with, how to build a complete funnel from ad to booked appointment, and how to set a budget that makes financial sense. Everything in the Marketing Track builds on what you learn here.",
    },

    // ── s2: Why Facebook — reach and precision ───────────────────────────────
    {
      id: "s2",
      layout: "point",
      eyebrow: "Why Facebook",
      title: "Three billion users — and most of them scroll instead of search",
      lead: "Facebook reaches the working-family audience most likely to hire an independent preparer at a moment when they are receptive.",
      bullets: [
        {
          label: "Hyper-local ZIP targeting",
          text: "Reach people within ten to fifteen miles of your office, down to specific neighborhoods.",
        },
        {
          label: "Life-event and income signals",
          text: "Interest categories like tax refund, EITC, and IRS let you find people actively thinking about taxes.",
        },
        {
          label: "Visual trust-building",
          text: "A short video of you and your office builds credibility no directory listing can match.",
        },
      ],
      narration:
        "Raw size is not why Facebook works for a tax office. Precision is. You can target people within ten miles of your ZIP code, layer on interest signals like tax refunds, EITC, H and R Block, and TurboTax, and reach working families who do not start the tax conversation with a Google search. They scroll their feed and your ad appears. A short video of you talking to your neighborhood builds the kind of familiarity that turns a scroll into a booked appointment — something no search result or directory listing can replicate.",
    },

    // ── s3: Facebook vs Google ───────────────────────────────────────────────
    {
      id: "s3",
      layout: "tip",
      eyebrow: "Why Facebook",
      title: "Facebook generates demand — Google captures it",
      callout: {
        kind: "stat",
        title: "Demand generation vs. demand capture",
        text: "Google Ads appear when someone is already searching. Facebook Ads appear before the search happens — and for most independent tax offices, at a lower cost per lead during peak season.",
      },
      narration:
        "Google Ads are demand capture — someone searches tax preparer near me and your ad appears. Powerful, but expensive, because you compete with every preparer who bought that same keyword. Facebook Ads are demand generation. You reach someone before they search, while they are still browsing. Cost per lead is typically lower on Facebook for the same local audience, especially for independent offices competing with national brands. Facebook is the higher-leverage starting point, which is why this lesson focuses on building your Facebook system first.",
    },

    // ── s4: The three campaign objectives overview ───────────────────────────
    {
      id: "s4",
      layout: "list",
      eyebrow: "Campaign objectives",
      title: "Traffic, Lead Generation, or Conversion — what each one does",
      bullets: [
        {
          label: "Traffic (cheapest, weakest)",
          text: "Sends clicks to your website. You pay for visits, not leads. No built-in form. Follow-up is entirely on you.",
        },
        {
          label: "Lead Generation (recommended)",
          text: "Opens a native Instant Form inside Facebook. Low friction, no website required. Lead data routes to Meta Lead Center automatically.",
        },
        {
          label: "Conversion (strongest intent, most setup)",
          text: "Drives actions on your website. Requires a Meta Pixel and enough traffic volume for the algorithm to optimize.",
        },
      ],
      narration:
        "The objective you choose in Ads Manager shapes everything downstream. Traffic is cheapest to run but the weakest for lead generation — you pay for clicks, then it is entirely on you to capture contact information. Most visitors never submit a form. Lead Generation opens an Instant Form inside Facebook with no website or pixel required. Conversion campaigns produce the highest-intent leads but require a properly installed Pixel and sufficient traffic volume for the algorithm to learn. Start with Lead Generation. Add Conversion once you have the data to support it.",
    },

    // ── s5: Why Lead Generation wins for new advertisers ─────────────────────
    {
      id: "s5",
      layout: "point",
      eyebrow: "Campaign objectives",
      title: "Why Lead Generation is the right starting objective",
      lead: "The Instant Form removes every barrier between interest and action — and delivers the phone number automatically.",
      bullets: [
        {
          label: "No website required",
          text: "The form lives entirely inside Facebook. Slow sites and mobile redirects are no longer factors.",
        },
        {
          label: "Auto-filled fields",
          text: "Facebook pre-fills the lead's name and phone from their profile. Submission takes about fifteen seconds.",
        },
        {
          label: "Immediate data delivery",
          text: "Lead data appears in Meta Lead Center within seconds and connects to Zapier or a CRM automatically.",
        },
      ],
      narration:
        "The Instant Form eliminates every barrier between interest and action. No redirect to a slow mobile site. No blank form to type into. Facebook pre-fills the lead's name and phone from their own profile — they confirm and submit in about fifteen seconds. That data lands in Meta Lead Center immediately and can route to your CRM via Zapier. You get an alert. You call within five minutes. Compare that to hoping a website visitor finds a contact form and submits it. Lead Generation eliminates all that friction: more leads, faster, with less technical setup.",
    },

    // ── s6: The full six-step funnel ─────────────────────────────────────────
    {
      id: "s6",
      layout: "list",
      eyebrow: "The funnel",
      title: "Six steps from cold audience to paying client",
      bullets: [
        { label: "Step 1", text: "Cold audience sees your ad in their feed." },
        { label: "Step 2", text: "Interested person taps and submits the Instant Form in about fifteen seconds." },
        { label: "Step 3", text: "Lead data routes automatically to your CRM or spreadsheet. Phone alert fires." },
        { label: "Step 4", text: "You call or text within five minutes of the form submit." },
        { label: "Step 5", text: "Three qualifying questions confirm fit. You book the appointment on that call." },
        { label: "Step 6", text: "Client shows up, files, pays. The cycle starts again." },
      ],
      narration:
        "Draw this six-step funnel on paper before you open Ads Manager. A cold audience sees your ad. Someone taps, a pre-filled form opens, and they submit in fifteen seconds. Their contact data routes to your tracking system and your phone buzzes. You call within five minutes. Three qualifying questions confirm fit and urgency, and you book the appointment before hanging up. The appointment becomes a paying client. Every dollar spent at the front gets wasted if the back half is not working. This lesson builds the right front end. Later lessons build the back end.",
    },

    // ── s7: The five-minute rule ─────────────────────────────────────────────
    {
      id: "s7",
      layout: "tip",
      eyebrow: "The funnel",
      title: "The moment they submit is the moment that matters most",
      callout: {
        kind: "stat",
        title: "Speed-to-contact is your single biggest conversion lever",
        text: "Research consistently shows contacting a lead within five minutes is dramatically more effective than waiting thirty. In tax season, every hour you wait is an hour a competitor may have already used to book that same client.",
      },
      narration:
        "The moment a lead submits, they are thinking about taxes right now. Your job is to be on the phone within five minutes. The pattern is consistent across industries: the odds of connecting and converting drop sharply after the first few minutes. In tax season your prospect may have submitted to two or three offices the same afternoon. First contact, delivered confidently, wins the appointment far more often than the best ad. Speed-to-contact costs nothing to improve. It requires a process, not a bigger budget. We cover that process in Lesson Three.",
    },

    // ── s8: Core cold audience build ─────────────────────────────────────────
    {
      id: "s8",
      layout: "point",
      eyebrow: "Audience strategy",
      title: "Core cold audience: who sees your ad first",
      lead: "Your starter audience is built from three layers — demographics, geography, and stacked tax-related interests.",
      bullets: [
        {
          label: "Demographics",
          text: "Age 25 to 54. Captures working adults most likely to have dependent children and benefit from credits like EITC and the Child Tax Credit.",
        },
        {
          label: "Geography",
          text: "Your city or ZIP code plus a ten to fifteen mile radius. Tax prep is local — do not target wider than you can serve.",
        },
        {
          label: "Interest stack",
          text: "Income tax, IRS, tax refund, EITC, Earned Income Credit, H and R Block, TurboTax — layer these together for the warmest cold pool.",
        },
      ],
      narration:
        "Build all three audience layers before you write a single word of ad copy. Age twenty-five to fifty-four captures working adults most likely to have dependents and benefit from credits. Geography tight to your service radius — ten to fifteen miles. Budget wasted on people too far to book is gone. Interest stacking: do not rely on one category. Layer income tax, IRS, tax refund, EITC, H and R Block, and TurboTax together. Each adds a different slice, and together they build a sizable, warm starting audience for your first campaigns.",
    },

    // ── s9: Audience size check ──────────────────────────────────────────────
    {
      id: "s9",
      layout: "tip",
      eyebrow: "Audience strategy",
      title: "Check your audience size before you publish",
      callout: {
        kind: "tip",
        title: "Sweet spot: 50,000 to 500,000",
        text: "The Audience Definition meter in Ads Manager should show between 50,000 and 500,000 people for a local tax office. Below that and Facebook cannot optimize. Above that and your targeting is likely too broad.",
      },
      narration:
        "One quick check saves a lot of wasted spend. Before you publish any campaign, look at the Audience Definition meter on the Ad Set page. For a local tax office, you want estimated reach between fifty thousand and five hundred thousand people. Below fifty thousand and the algorithm cannot optimize efficiently — loosen the radius or remove a restrictive interest. Above five hundred thousand and your budget gets spread too thin for a local service business. Adjust age, geography, or the interest stack until the meter lands in that range. It takes two minutes.",
    },

    // ── s10: Lookalike and retargeting audiences ─────────────────────────────
    {
      id: "s10",
      layout: "list",
      eyebrow: "Audience strategy",
      title: "Warmer audiences: lookalike and retargeting",
      bullets: [
        {
          label: "Lookalike audience",
          text: "Upload 500 or more existing client emails. Facebook finds users who statistically match your best clients — warmer than cold and typically lower cost per lead.",
        },
        {
          label: "Website retargeting",
          text: "Anyone who visited your site in the last 90 days has already expressed interest. These convert at the lowest cost.",
        },
        {
          label: "Video retargeting",
          text: "People who watched fifty percent or more of your ad video already know your face. Your next ad is a reminder, not an introduction.",
        },
      ],
      narration:
        "Once your core cold audience is running, add two warmer tiers. A lookalike audience requires uploading at least five hundred existing client emails. Facebook finds other users who statistically match your best clients — strangers who already behave like people who trust you. Website retargeting targets people who visited your site in the last ninety days. Video retargeting reaches viewers who watched more than half of one of your ads. In your first season, run core cold only. As you build client data and site traffic, add warmer tiers. Each one lowers your average cost per lead.",
    },

    // ── s11: Budget philosophy — seasonal structure ──────────────────────────
    {
      id: "s11",
      layout: "point",
      eyebrow: "Budget philosophy",
      title: "A tracked budget beats a large untracked one every time",
      lead: "Your in-season budget does not need to be large. It needs to be intentional, measured, and deployed in the right window.",
      bullets: [
        {
          label: "In-season sprint",
          text: "Fifteen to thirty dollars per day, January 15 through February 28 — your highest-value forty-five days. Illustrative range.",
        },
        {
          label: "Year-round retargeting",
          text: "Five dollars per day keeps you visible to warm audiences all twelve months at minimal cost.",
        },
        {
          label: "Test before scaling",
          text: "Never increase budget on a campaign that is not already producing results. Scale only what is proven.",
        },
      ],
      narration:
        "Your highest-value advertising window is January 15 through February 28 — roughly forty-five days. An illustrative daily budget of fifteen to thirty dollars puts total in-season spend at around six hundred to thirteen hundred dollars; your actual amount depends on your market and new-client targets. The year-round retargeting layer at roughly five dollars per day builds name recognition through the off-season so you enter January with a pre-warmed audience. The core principle: measurement beats budget size. If you cannot tell me your cost per lead and what a new client costs to acquire, you are guessing.",
    },

    // ── s12: LTV calculation ─────────────────────────────────────────────────
    {
      id: "s12",
      layout: "tip",
      eyebrow: "Budget philosophy",
      title: "Know your client lifetime value before you set any budget",
      callout: {
        kind: "stat",
        title: "The LTV formula",
        text: "Average fee × seasons retained × (1 + referrals per client) = your true LTV. These are illustrative inputs — run the formula with your own verified numbers.",
      },
      narration:
        "Before setting any budget, answer one question: what is a new client actually worth over time? Take your average preparation fee, multiply by the number of seasons you realistically retain a typical client, then factor in referrals. As an illustrative example only — not a performance promise — if your average fee is two hundred fifty dollars, you retain clients three seasons, and each generates one referral, your LTV lands somewhere between seven hundred fifty and a thousand dollars. With that LTV, spending forty to eighty dollars to acquire a new client is a strong investment, not a cost. Run this with your own verified numbers.",
    },

    // ── s13: Worked illustrative example ────────────────────────────────────
    {
      id: "s13",
      layout: "list",
      eyebrow: "A real example",
      title: "How a thirty-dollar-per-day sprint models out — illustrative only",
      bullets: [
        {
          label: "45-day spend",
          text: "Thirty dollars per day equals roughly thirteen hundred fifty dollars total. Actual results vary significantly.",
        },
        {
          label: "Cost per lead",
          text: "A well-optimized campaign might achieve six to ten dollars per lead. At eight dollars, that is roughly 169 leads.",
        },
        {
          label: "Lead-to-appointment",
          text: "A twenty-five percent conversion rate with strong follow-up produces about 42 booked appointments.",
        },
        {
          label: "Appointment-to-client",
          text: "A sixty percent show-and-close rate adds roughly 25 new clients from that single campaign.",
        },
      ],
      narration:
        "These numbers are examples to help you build a mental model — not a promise of results. At thirty dollars per day over forty-five days, you spend roughly thirteen hundred fifty dollars in-season. At eight dollars per lead, that produces about a hundred sixty-nine leads. At a twenty-five percent lead-to-appointment rate, that is roughly forty-two appointments. At sixty percent appointment-to-client, you have added about twenty-five new clients. At an illustrative average fee of two hundred fifty dollars, that is over six thousand dollars in first-season revenue from a thirteen-hundred-dollar ad investment. Substitute your own verified numbers and run the model before you spend anything.",
    },

    // ── s14: Booking script ───────────────────────────────────────────────────
    {
      id: "s14",
      layout: "tip",
      eyebrow: "A real example",
      title: "Three questions that qualify and book on the first call",
      callout: {
        kind: "quote",
        title: "Sample booking script",
        text: "\"Hi, this is [Name] from [Office]. I saw you were interested in getting your taxes done — are you still looking for a preparer this season? Great. Do you have W-2s, self-employment income, or both? And are you flexible for an appointment this week or next?\" Then book it.",
      },
      narration:
        "Most offices leave the booking call to chance. Here is a three-question script that works. Question one: are you still looking for a preparer this season? Confirms intent and filters leads who already booked elsewhere. Question two: do you have W-2 income, self-employment, or both? Tells you immediately whether this is a simple or complex return and positions you as a professional. Question three: are you flexible for an appointment this week or next? Assumes the appointment is happening and puts scheduling in their hands. The whole call takes three to five minutes. Script it, rehearse it, use it consistently.",
    },

    // ── s15: Common mistake — boosting posts ────────────────────────────────
    {
      id: "s15",
      layout: "point",
      eyebrow: "Common mistake",
      title: "Three mistakes that drain budget without producing clients",
      lead: "The same small set of avoidable errors accounts for most wasted ad spend in tax office campaigns.",
      bullets: [
        {
          label: "Boosting a post",
          text: "The Boost button has no lead form, no precise audience controls, and no way to measure cost per lead. Always use Ads Manager.",
        },
        {
          label: "Audience too broad",
          text: "Running statewide or citywide burns budget on people you cannot serve. Start local and tight.",
        },
        {
          label: "No follow-up system before launch",
          text: "Leads go cold if your CRM, alert, and response process are not live before the campaign starts.",
        },
      ],
      narration:
        "The most common mistake is clicking the blue Boost button. Boosting buys reach and engagement — likes, shares, comments — not phone numbers. You can spend three hundred dollars with no evidence a single new client came from it. Always use Ads Manager with the Lead Generation objective. The second mistake is targeting too broadly: a statewide or large-metro audience wastes money on leads who will never book. The third is launching ads before your follow-up system is live. If leads land in an unmonitored inbox, you miss the five-minute window every time. Build the back end before you spend a dollar on the front.",
    },

    // ── s16: Stopping too early and pixel install ────────────────────────────
    {
      id: "s16",
      layout: "list",
      eyebrow: "Common mistake",
      title: "Two more mistakes new advertisers make",
      bullets: [
        {
          label: "Stopping too early",
          text: "Facebook's algorithm needs data to optimize. Campaigns that run fewer than ten to fourteen days rarely give the system enough signal to improve.",
        },
        {
          label: "Skipping the Meta Pixel",
          text: "The Pixel builds your retargeting audience over time. Waiting until January to install it means you miss the pre-season warmup window.",
        },
        {
          label: "No daily metric review",
          text: "Check cost per lead daily during the in-season sprint. A spike in cost per lead is your earliest warning that something needs adjusting.",
        },
      ],
      narration:
        "Two more mistakes that are easy to avoid. First: stopping a campaign after five or six days because it is not yet producing. Facebook's algorithm needs ten to fourteen days before it optimizes efficiently. Give it that runway before drawing conclusions. Second: skipping the Meta Pixel. If you wait until January to install it, your retargeting audience is empty when you need it most. Install the Pixel this week — it takes fifteen minutes — and let it collect data all year. Third: not reviewing cost per lead daily. A sudden spike is your earliest warning that something needs adjusting.",
    },

    // ── s17: Tracking the right metrics ──────────────────────────────────────
    {
      id: "s17",
      layout: "list",
      eyebrow: "Measurement",
      title: "Four numbers that tell you whether your campaign is working",
      bullets: [
        {
          label: "Cost per lead",
          text: "Total spend divided by total leads. The primary optimization metric for Lead Generation campaigns.",
        },
        {
          label: "Lead-to-appointment rate",
          text: "How many leads become booked appointments. A low rate usually signals a follow-up problem, not an ad problem.",
        },
        {
          label: "Appointment-to-client rate",
          text: "How many appointments become paying clients. Tracks your booking conversation and no-show management.",
        },
        {
          label: "Cost per acquired client",
          text: "Total ad spend divided by new clients. The final measure of whether the system is profitable against your LTV.",
        },
      ],
      narration:
        "Once your campaign is live, four numbers tell you everything. Cost per lead: total spend divided by total leads — watch this daily. If lead-to-appointment rate is low, the problem is almost never the ad; it is your follow-up speed or your booking script. If appointment-to-client rate is low, look at your intake conversation and no-show management. Cost per acquired client is the final number: total spend divided by new clients added. Compare it to your LTV to confirm you are producing a positive return. Track all four in a simple spreadsheet and review weekly during your in-season sprint.",
    },

    // ── s18: Compliance callout ───────────────────────────────────────────────
    {
      id: "s18",
      layout: "tip",
      eyebrow: "Compliance",
      title: "Illustrative figures are not earnings guarantees",
      callout: {
        kind: "warn",
        title: "Use your own verified numbers",
        text: "Every dollar figure and conversion rate in this lesson is illustrative only. Actual results vary based on market, creative quality, follow-up speed, and many other factors. Do not use projections from this lesson as guarantees in recruiting materials or client communications.",
      },
      narration:
        "Every budget figure, cost per lead, and conversion rate in this lesson is illustrative. These examples show you the structure of the math and help you build your own model. They are not a promise of what your campaign will produce. Your actual results depend on your market, your creative quality, your follow-up speed, your pricing, and factors specific to your office. When you use financial projections in your own communications — with potential hires, partners, or in planning — use your own verified historical numbers. Replace illustrative figures with real data as soon as you have it.",
    },

    // ── s19: Three technical prerequisites ───────────────────────────────────
    {
      id: "s19",
      layout: "point",
      eyebrow: "Getting ready",
      title: "Three technical prerequisites before Lesson Two",
      lead: "Lesson Two builds the campaign field by field. These three things need to be in place before you get there.",
      bullets: [
        {
          label: "Facebook Business Page",
          text: "Create or claim your page. Add a profile photo, cover image, address, and phone. Your ads run from this page.",
        },
        {
          label: "Meta Business Suite",
          text: "Set up your account at business.facebook.com — the hub for your ad account, Pixel, leads, and audiences.",
        },
        {
          label: "Meta Pixel on your website",
          text: "Install the Pixel this week so it starts building audience data you will need for retargeting campaigns later.",
        },
      ],
      narration:
        "Lesson Two walks through Ads Manager field by field. Before you get there, confirm three prerequisites. First: create or claim your Facebook Business Page. Add a profile photo, cover image, address, and phone number — your ads run from this page. Second: set up Meta Business Suite at business.facebook.com. This is the central hub for your ad account, Pixel, lead data, and audience management. Third: install the Meta Pixel on your website this week. It needs time to build a retargeting audience. These three steps take less than two hours and unlock everything else in the Marketing Track.",
    },

    // ── s20: Full-year budget calendar ───────────────────────────────────────
    {
      id: "s20",
      layout: "list",
      eyebrow: "Budget philosophy",
      title: "How to split your budget across the calendar",
      bullets: [
        {
          label: "Jan 15 – Feb 28 (in-season sprint)",
          text: "Maximum daily budget on Lead Generation to your core cold audience. Your highest-value forty-five days.",
        },
        {
          label: "Oct 15 – Jan 14 (pre-season warmup)",
          text: "Low spend on retargeting and lookalike audiences to build name recognition before the rush.",
        },
        {
          label: "Mar 1 – Oct 14 (off-season)",
          text: "Five dollars per day on retargeting only. Keeps your face visible without burning budget on low-intent weeks.",
        },
      ],
      narration:
        "Put the budget into a full-year calendar so you plan ahead instead of reacting. The in-season sprint — January 15 through February 28 — is when the largest share of working-family filers make their decision. Deploy your maximum daily budget here. The pre-season warmup, October 15 through January 14, uses modest spend on retargeting and lookalike audiences so January arrivals recognize your name before they see their first ad. Off-season, March through October, run only retargeting at the lowest budget that keeps you visible. This approach builds compounding name recognition instead of starting from zero each January.",
    },

    // ── s21: Action — draw your funnel ───────────────────────────────────────
    {
      id: "s21",
      layout: "action",
      eyebrow: "Your turn",
      title: "Draw your funnel before you build it",
      callout: {
        kind: "action",
        title: "Map it on paper first",
        text: "Draw each step: Ad → Form → CRM or spreadsheet → Call within 5 minutes → Appointment → Client. For each step, write one sentence: who is responsible, and what tool handles it. Do this before logging in to Ads Manager.",
      },
      narration:
        "Draw your funnel on paper before you open Ads Manager. Map every step: the ad, the form, where lead data goes, who makes the first call and how quickly, the booking conversation, and how a prospect becomes a paying client. For each step, answer two questions: who is responsible, and what specific tool handles it. If either answer is blank for any step, that is a gap to fill before you spend a dollar. The offices that build the complete system before launching an ad are the ones whose budget actually works.",
    },

    // ── s22: Action — calculate LTV ─────────────────────────────────────────
    {
      id: "s22",
      layout: "action",
      eyebrow: "Your turn",
      title: "Calculate your client lifetime value",
      callout: {
        kind: "action",
        title: "Run your LTV math right now",
        text: "Write this formula with your numbers: average fee $ ____ × seasons retained ____ × (1 + referrals per client ____) = LTV $ ____. This number sets the ceiling on what you can profitably spend per new client.",
      },
      narration:
        "Calculate your LTV before you do anything else with budget. Pull up your records and fill in three numbers: your average preparation fee, your average seasons a client stays, and your estimate of referrals per client over their lifetime. Multiply those together. If your LTV is four hundred dollars, you might target forty to sixty dollars per acquired client. If it is twelve hundred dollars, you can invest much more aggressively. This number shapes every budget decision you make this season. Do this calculation now, with pen and paper, before you move to Lesson Two.",
    },

    // ── s23: Pre-Lesson-Two checklist ────────────────────────────────────────
    {
      id: "s23",
      layout: "tip",
      eyebrow: "Getting ready",
      title: "Three setup tasks before you open Ads Manager",
      callout: {
        kind: "tip",
        title: "Complete these before Lesson Two",
        text: "1. Create or claim your Facebook Business Page. 2. Set up Meta Business Suite at business.facebook.com. 3. Install the Meta Pixel on your website. These are the prerequisites for Lesson Two, where you build the actual campaign.",
      },
      narration:
        "Before Lesson Two, confirm three prerequisites are in place. Create or claim your Facebook Business Page and make it look professional. Set up Meta Business Suite at business.facebook.com. Install the Meta Pixel on your website this week — not next month. Each task is straightforward on its own. Together they unlock the full campaign build in Lesson Two. Block two hours this week and complete all three.",
    },

    // ── s24: Recap ───────────────────────────────────────────────────────────
    {
      id: "s24",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Facebook reaches working families with hyper-local targeting and interest signals at a lower cost per lead than demand-capture channels for most independent tax offices." },
        { text: "Use the Lead Generation objective. The Instant Form captures phone numbers automatically — no website, no pixel, and almost no friction for the lead." },
        { text: "Map all six funnel steps and assign an owner to each before you spend a dollar. Speed-to-contact within five minutes is your single biggest conversion lever." },
        { text: "Build your audience in three layers: core cold first, then lookalike once you have 500 client emails, then retargeting as site traffic and video views accumulate." },
        { text: "Calculate your LTV before setting any budget. That number tells you how aggressively you can advertise and whether your cost per lead represents a strong return on investment." },
      ],
      subtitle: "Up next: Create Ads That Attract Tax Clients",
      narration:
        "Five things to carry into the rest of this track. First, Facebook reaches the working-family audience with local precision that makes it the right starting channel for most independent tax offices. Second, choose the Lead Generation objective — Instant Form, no website required, phone number delivered automatically. Third, map all six funnel steps and assign owners before you spend anything. Speed-to-contact is your highest-leverage improvement and it costs nothing. Fourth, build audience in layers — core cold first, lookalike and retargeting as your data grows. Fifth, calculate your LTV now so you know how much you can profitably invest per new client. Lesson Two is where we step inside Ads Manager and build the actual campaign, field by field. See you there.",
    },
  ],
};
