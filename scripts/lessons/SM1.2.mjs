// =============================================================================
// Interactive lesson definition — Marketing Track SM1.2
// "Run Facebook Ads to Find EROs"
//
// Authoring source for the narrated interactive experience.
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Run Facebook Ads to Find EROs",
  trackId: "bureau-mktg",
  key: "SM1.2",

  slides: [
    // ── COVER ──────────────────────────────────────────────────────────────
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Marketing Track · Service Bureau Lead Generation",
      title: "Run Facebook Ads to Find EROs",
      subtitle: "Lesson 2 · Narrated walkthrough",
      narration:
        "Welcome back. In Lesson 1 we built your recruiting strategy. Now we go hands-on inside Meta Ads Manager. Default Facebook targeting misses most of your audience — preparers rarely self-identify as tax preparers, so you need layered signals. By the end of this lesson you will know how to build a cold prospecting campaign, create a lookalike from your ERO list, write a hook that stops the scroll, and design a lead form that pre-qualifies every submission before it reaches your phone.",
    },
    // ── THE TARGETING PROBLEM ─────────────────────────────────────────────
    {
      id: "s2",
      layout: "point",
      eyebrow: "Why it's hard",
      title: "Standard targeting misses most preparers",
      lead: "Most tax preparers do not identify themselves as \"tax preparer\" on Facebook — which means job-title targeting alone finds only a fraction of your audience.",
      bullets: [
        {
          label: "Self-identification gap",
          text: "Preparers often list themselves as small business owner, bookkeeper, accountant, or nothing at all.",
        },
        {
          label: "Interest-based proxy signals",
          text: "Page likes for major tax brands and the IRS are more reliable than job titles alone.",
        },
        {
          label: "The solution: layered targeting",
          text: "Stack job titles, page interests, behavioral segments, and lookalike audiences together to build high-density reach.",
        },
      ],
      narration:
        "Most bureaus get poor results from Facebook ads for one reason: they rely on a single job-title target. Most independent tax preparers do not list their title as tax preparer on Facebook — they call themselves small business owners, accountants, bookkeepers, or leave the field blank. The fix is layered targeting: stacking multiple signals so the overlap builds a high-density audience of people genuinely in the tax-prep world. Let me walk you through every layer.",
    },
    {
      id: "s2b",
      layout: "list",
      eyebrow: "Why it's hard",
      title: "The five signals that find tax preparers on Facebook",
      bullets: [
        {
          label: "1. Job title targeting",
          text: "Tax preparer, tax professional, enrolled agent, bookkeeper, accountant — catches those who do list a professional title.",
        },
        {
          label: "2. Page interests — tax brands",
          text: "H&R Block, Jackson Hewitt, TurboTax, IRS — page likers include preparers inside or evaluating these programs.",
        },
        {
          label: "3. Topic interests",
          text: "Tax preparation, tax filing, financial services, entrepreneurship — casts a wider net over the professional community.",
        },
        {
          label: "4. Behavioral segment",
          text: "Small business owners (Facebook behavioral) — catches owner-operators who don't use any professional title.",
        },
        {
          label: "5. Lookalike from your ERO list",
          text: "Upload 200+ current office contacts — Facebook finds people who most closely resemble your existing offices.",
        },
      ],
      narration:
        "Five signals to stack. Job-title targeting catches preparers who do list a professional title. Major tax-brand page interests — H&R Block, Jackson Hewitt, TurboTax — reach people inside or evaluating those programs. Broader interests like financial services and entrepreneurship widen the net. The small-business-owner behavioral segment catches owner-operators who never list a job title. And a lookalike audience built from your existing ERO list hands the algorithm a clear picture of your best customers and tells it to find more just like them.",
    },
    {
      id: "s3",
      layout: "tip",
      eyebrow: "Why it's hard",
      title: "The Advantage+ trap for new campaigns",
      callout: {
        kind: "warn",
        title: "Don't let automation replace strategy when you have no data",
        text: "Meta's Advantage+ audience works best with conversion history. For a brand-new bureau recruiting campaign, start with manual targeting — then consider Advantage+ once you have 50+ leads to optimize against.",
      },
      narration:
        "Meta pushes Advantage+ audience — AI-driven targeting that expands automatically. For a brand-new bureau campaign with no conversion history, decline it. Advantage+ needs existing conversion signal to optimize intelligently. Without that data, it expands into low-relevance segments to find volume, and you pay for impressions from people with almost no chance of becoming your ERO. Start with the manual targeting stack I am about to walk you through. Once you have 50 or more form fills, you have enough signal to test Advantage+ in a separate ad set.",
    },
    // ── CAMPAIGN SETUP ────────────────────────────────────────────────────
    {
      id: "s4",
      layout: "list",
      eyebrow: "Step 1: Campaign",
      title: "Set up your campaign structure correctly",
      bullets: [
        {
          label: "Navigate and create",
          text: "Meta Ads Manager → Create → Lead Generation as campaign objective.",
        },
        {
          label: "Naming convention",
          text: "\"Bureau Recruiting — [Market] — [Season Year]\" — consistent naming makes performance comparison easy across seasons.",
        },
        {
          label: "Turn off CBO",
          text: "Campaign Budget Optimization OFF — control spend at the ad set level so cold and retargeting audiences get separate budgets.",
        },
        {
          label: "Privacy policy required",
          text: "Facebook Lead Ads require a live privacy policy URL before publishing. Have it ready before you click Create.",
        },
      ],
      narration:
        "Open Meta Ads Manager and click Create. Select Lead Generation as your objective — this enables the native Lead Form that keeps prospects inside Facebook and reduces friction. Name it clearly: Bureau Recruiting, your market, and the season year. Turn off Campaign Budget Optimization so you control spend at the ad-set level — you will have at least two ad sets, cold and retargeting, and they need separate budgets. Important: Facebook Lead Ads require a valid privacy policy URL on your site. Have it ready before you publish.",
    },
    {
      id: "s4b",
      layout: "tip",
      eyebrow: "Step 1: Campaign",
      title: "Ad set budget: how much to allocate where",
      callout: {
        kind: "tip",
        title: "Split your budget across ad sets intentionally",
        text: "Cold prospecting ad set: allocate roughly 70 percent of daily budget. Retargeting ad set: 20 percent. Webinar registration: 10 percent. Adjust based on performance after 2 weeks.",
      },
      narration:
        "With budget controlled at the ad-set level, start with this split: 70 percent to cold prospecting, 20 percent to retargeting — smaller audience but much higher conversion rate — and 10 percent to your webinar registration campaign. These are starting points, not rules. After two weeks, let performance data guide the rebalancing. If retargeting converts at a lower cost per lead, shift budget toward it. If webinar leads activate at higher rates, give that ad set more room.",
    },
    // ── TARGETING STACK ───────────────────────────────────────────────────
    {
      id: "s5",
      layout: "list",
      eyebrow: "Step 2: Targeting",
      title: "The targeting stack — part 1",
      bullets: [
        {
          label: "Location",
          text: "Your service area — specific cities, states, or radius — or nationwide if you support offices anywhere.",
        },
        {
          label: "Age",
          text: "28 to 55. Captures the career-stage preparer evaluating a business change, not a seasonal side-gig.",
        },
        {
          label: "Interests — tax brands",
          text: "H&R Block, Jackson Hewitt, TurboTax (page likers are often preparers evaluating franchises), IRS, tax preparation, tax filing.",
        },
        {
          label: "Interests — business context",
          text: "Financial services, entrepreneurship, small business.",
        },
      ],
      narration:
        "In the ad set, start with location — your service area or nationwide. Set age to 28–55: this captures career preparers building a business, not seasonal side-giggers. Under Detailed Targeting, start with major tax brand page interests: H&R Block, Jackson Hewitt, TurboTax. Likers of those pages include preparers currently in those programs and people evaluating them — exactly who you want. Add the IRS, tax preparation, and tax filing. Then layer in financial services, entrepreneurship, and small business as broader signals.",
    },
    {
      id: "s6",
      layout: "list",
      eyebrow: "Step 2: Targeting",
      title: "The targeting stack — part 2",
      bullets: [
        {
          label: "Job titles",
          text: "Tax preparer, tax professional, enrolled agent, bookkeeper, accountant.",
        },
        {
          label: "Behaviors",
          text: "Small business owners — Facebook's behavioral segment based on page admin and purchasing patterns.",
        },
        {
          label: "Layering logic",
          text: "Use \"OR\" between interests and job titles — you want people who match ANY of these signals, not all of them.",
        },
        {
          label: "Estimated audience",
          text: "Expect 100,000–500,000+ for a regional campaign with this stack. That's normal — your creative will filter further.",
        },
      ],
      narration:
        "Add job titles — tax preparer, tax professional, enrolled agent, bookkeeper, accountant — to catch those who do list a professional title. Then add the small-business-owner behavioral segment, which Facebook builds from page ownership and purchasing signals. Use OR logic across the whole stack — you want anyone matching any one signal. In a regional market this produces an audience in the hundreds of thousands, which is appropriate. Your creative and lead form do the filtering down to the relevant subset.",
    },
    {
      id: "s6b",
      layout: "point",
      eyebrow: "Step 2: Targeting",
      title: "Exclusion audiences: who not to show your ad to",
      lead: "Adding exclusion audiences tightens your targeting and saves budget by filtering out people who have already converted or are clearly not your audience.",
      bullets: [
        {
          label: "Exclude existing customers",
          text: "Upload your current offices as a Custom Audience and exclude them — you don't need to pay to recruit people already in your program.",
        },
        {
          label: "Exclude prior form fills",
          text: "Create a Custom Audience of people who already filled out your lead form — exclude them from cold prospecting to avoid paying for the same click twice.",
        },
        {
          label: "Exclude by location if needed",
          text: "If you do not support offices in certain states, exclude those states by location targeting. Clean targeting improves budget efficiency.",
        },
      ],
      narration:
        "Most bureaus build targeting audiences and skip exclusions — paying to reach people already in their program or who already responded to a prior ad. Upload your current offices as a Custom Audience and exclude them from cold prospecting. Upload prior form respondents and exclude them too — they belong in retargeting. If your service area has geographic limits, exclude those states. Every dollar saved through clean exclusions reaches a genuinely new prospect instead. Exclusions are free efficiency improvements.",
    },
    // ── LOOKALIKE ─────────────────────────────────────────────────────────
    {
      id: "s7",
      layout: "point",
      eyebrow: "Step 2B: Lookalike audiences",
      title: "Turn your existing ERO list into a targeting asset",
      lead: "If you have 200 or more current ERO offices in your system, upload them as a Custom Audience and build a 1 percent Lookalike — your highest-converting cold targeting option.",
      bullets: [
        {
          label: "Upload your list",
          text: "Audiences → Custom Audience → Customer list. CSV with email and phone from your current offices.",
        },
        {
          label: "Create 1 percent Lookalike",
          text: "From that Custom Audience, create a 1 percent Lookalike — Facebook finds the most similar users in your country.",
        },
        {
          label: "Separate ad set",
          text: "Run the lookalike as its own ad set with the same creative. Compare cost per qualified lead against your interest-stacked ad set.",
        },
      ],
      narration:
        "If you have 200 or more current ERO offices, upload them as a Customer List in Meta's Audiences tool. Once that Custom Audience is built, create a 1 percent Lookalike from it — the top 1 percent of users in your country who most closely resemble your existing offices. Run it as a separate ad set alongside your interest-stacked audience. You will often find the lookalike converts at a lower cost per qualified lead, because the algorithm already has a clear picture of your best customers.",
    },
    {
      id: "s7b",
      layout: "tip",
      eyebrow: "Step 2B: Lookalike audiences",
      title: "What to do if you have fewer than 200 offices",
      callout: {
        kind: "tip",
        title: "Build toward the lookalike while running interest targeting",
        text: "If you have fewer than 200 office contacts, start with the interest and job-title stack. Upload whatever list you have — even 50 contacts — to start building a Custom Audience now. As it grows, you will eventually have enough to build a meaningful lookalike.",
      },
      narration:
        "Not every bureau has 200 offices to seed a lookalike right away. If you are earlier in your recruiting history, start with the interest and job-title stack — that gives you a functional cold audience now. Upload whatever contact list you have, even 50 or 75 offices, as a Custom Audience for retargeting. Keep adding as your list grows. Once you cross 200, build the lookalike. The interest stack and the lookalike are a now-and-later sequence, not an either-or choice.",
    },
    // ── CREATIVE ──────────────────────────────────────────────────────────
    {
      id: "s8",
      layout: "point",
      eyebrow: "Step 3: Creative",
      title: "The hook that works for bureau recruiting",
      lead: "The most effective hook addresses the fee split directly. An economics-focused message outperforms lifestyle or freedom messaging for this audience.",
      bullets: [
        {
          label: "Proven headline formula",
          text: "\"Still giving away a large share of your fees in royalties? I help independent preparers keep more per return — plus full software, bank products, and support.\"",
        },
        {
          label: "Short founder video beats everything",
          text: "A 60 to 90 second founder-on-camera video explaining the economics comparison. Real faces outperform stock footage every time.",
        },
        {
          label: "Label comparisons as illustrative",
          text: "Any percentage or dollar figure in your hook must reflect your actual program and be framed as an example, not a guarantee.",
        },
      ],
      narration:
        "The best-performing hook for bureau recruiting is an economics-focused message that speaks to what franchise preparers feel every time they see their net payout. Something like: still giving away a significant share of your fees in royalties? I help independent preparers keep more per return — plus full software, bank products, and support. Any percentages you use must reflect your actual program economics and be framed as illustrative, never a guarantee. For format, a 60 to 90-second founder-on-camera video dramatically outperforms static images and stock footage. Prospects are evaluating a relationship. Seeing and hearing you starts it.",
    },
    {
      id: "s9",
      layout: "tip",
      eyebrow: "Step 3: Creative",
      title: "What to say in the founder video",
      callout: {
        kind: "quote",
        title: "The 90-second video script structure",
        text: "Open: Name the problem (royalties, software costs, lack of support). Middle: Explain what your bureau offers (software, bank products, training, economics — using illustrative examples). Close: Invite them to fill out the form for a 15-minute call.",
      },
      narration:
        "A simple three-part structure works well. Open by naming the problem your audience already feels — royalty splits, software costs, lack of responsive support. Middle: explain what your bureau offers and why the economics are different, using illustrative numbers labeled as such. Close with a direct, low-pressure invitation: fill out the form and I will reach out within the hour for a 15-minute call. The whole video should feel like a knowledgeable peer giving a straight answer. Authenticity beats production value — preparers who run their own offices are very good at detecting inauthenticity.",
    },
    {
      id: "s9b",
      layout: "list",
      eyebrow: "Step 3: Creative",
      title: "Static image ad copy that works alongside the video",
      bullets: [
        {
          label: "Headline option A — economics focus",
          text: "\"Are you keeping enough of your tax prep fees? Here's what a service bureau arrangement actually looks like — no royalties, full software, real support.\"",
        },
        {
          label: "Headline option B — transition focus",
          text: "\"Tax prep season is coming. If you've been thinking about a different setup, now is the time to have a 15-minute conversation.\"",
        },
        {
          label: "Body copy principle",
          text: "Lead with the problem the prospect already feels. Follow with one specific thing you provide that solves it. End with a clear call to action.",
        },
        {
          label: "Compliance reminder",
          text: "No specific dollar or percentage income figures unless reviewed by counsel and framed as illustrative.",
        },
      ],
      narration:
        "You do not need the founder video to run ads — a static image with strong copy can produce results while you produce it. The economics-focus headline names the problem directly: are you keeping enough of your fees? That question resonates with any franchise preparer who has ever looked at their net payout. The transition-focus headline meets preparers in their seasonal planning moment. For body copy: open with the problem they feel, deliver one specific solution, end with a clear call to action — three to four sentences maximum. Apply the same earnings-claim discipline as in your video: no specific figures without legal review.",
    },
    // ── COMPLIANCE ────────────────────────────────────────────────────────
    {
      id: "s10",
      layout: "tip",
      eyebrow: "Compliance",
      title: "Earnings claims in recruiting ads: a critical warning",
      callout: {
        kind: "warn",
        title: "FTC and state law apply to everything you publish",
        text: "Do not promise specific income, net earnings, or returns per office in your ad copy or video. Frame all figures as illustrative. Your landing page or thank-you screen should include a brief disclaimer. Have counsel review any income representations before publishing.",
      },
      narration:
        "This is a critical compliance point. When you advertise a bureau opportunity to tax preparers, you are marketing what the FTC and many states classify as a business opportunity. Earnings claims — promises or implications about what a preparer will earn — are regulated. Several states have specific disclosure laws with registration requirements. In your ads, videos, landing pages, and lead-form thank-you screens, do not promise specific income figures, net earnings, or return volumes. Frame everything as illustrative and make clear that results vary. Before publishing any material containing income comparisons, have an attorney familiar with business-opportunity law review it. This is not a formality.",
    },
    // ── LEAD FORM ─────────────────────────────────────────────────────────
    {
      id: "s11",
      layout: "list",
      eyebrow: "Step 4: Lead form",
      title: "Build a form that qualifies while it captures",
      bullets: [
        {
          label: "Form type: More Volume",
          text: "Fewer fields, lower friction — optimize for submissions so you can qualify on the follow-up call.",
        },
        {
          label: "Required contact fields",
          text: "First Name, Last Name, Business Email, Phone Number.",
        },
        {
          label: "Qualifying question 1",
          text: "\"How many returns did you file last season?\" — your volume filter.",
        },
        {
          label: "Qualifying question 2",
          text: "\"Are you currently with a service bureau or franchise?\" — your competitive context filter.",
        },
        {
          label: "Thank-you screen",
          text: "\"We'll reach out within the hour to schedule a 15-minute call.\" Sets the expectation for every prospect.",
        },
      ],
      narration:
        "Use the More Volume form type — fewer fields, lower friction, more submissions to screen. Collect first name, last name, business email, and phone number. Then add two qualifying questions: how many returns did you file last season — your volume filter — and are you currently with a bureau or franchise — your competitive context filter. These questions deter tire-kickers without deterring serious prospects. On the thank-you screen, set the expectation: we'll reach out within the hour to schedule a 15-minute call. That commitment forces you to build the speed-to-lead system we cover in Lesson 3.",
    },
    {
      id: "s11b",
      layout: "tip",
      eyebrow: "Step 4: Lead form",
      title: "The thank-you screen: set expectations that protect your pipeline",
      callout: {
        kind: "quote",
        title: "Your thank-you screen message",
        text: "\"Thanks for your interest in [Bureau Name]! We'll reach out within the hour to schedule a quick 15-minute call. In the meantime, check out this short video: [link]. — [Your Name]\"",
      },
      narration:
        "The thank-you screen is the first message a prospect receives from you — and it sets their expectation for what happens next. Promising a one-hour callback signals this is a real business that moves quickly. Include the link to your founder video here too. A prospect who watches it before your call arrives educated, which shortens your qualifying conversation and improves the quality of your demo bookings. This small screen does a lot of work — treat it as a real touchpoint, not an afterthought.",
    },
    // ── PARALLEL WEBINAR CAMPAIGN ─────────────────────────────────────────
    {
      id: "s12",
      layout: "point",
      eyebrow: "Parallel campaign",
      title: "Run a webinar registration campaign alongside your lead ads",
      lead: "Webinar leads arrive pre-educated and pre-sold — lower volume, but significantly higher close rate than cold lead-form submissions.",
      bullets: [
        {
          label: "Webinar title that self-selects",
          text: "\"Free Webinar: How to Start or Grow Your Own Tax Business\" — only serious preparers register for 60 minutes.",
        },
        {
          label: "Same targeting, different destination",
          text: "Use the same interest and job-title stack but send traffic to a registration landing page, not a Lead Form.",
        },
        {
          label: "One pipeline, two sources",
          text: "Route webinar registrants into the same CRM funnel as lead-form fills. Tag the source for tracking.",
        },
      ],
      narration:
        "Run a parallel campaign with one change: send traffic to a webinar registration page instead of a Lead Form. Use the same targeting stack — same interests, same job titles, same age range. A preparer who registers for a 60-minute webinar is signaling genuine interest and an active evaluation. They arrive at your demo having already heard your framework and often already sold on the concept. Webinar leads are lower volume, but 15 webinar leads will frequently outperform 50 cold form fills in signed and activated offices. Run both, tag the source in your CRM, and compare cost per activated office.",
    },
    {
      id: "s12b",
      layout: "point",
      eyebrow: "Parallel campaign",
      title: "How to structure a webinar that converts preparers",
      lead: "A webinar is only as good as its agenda. For bureau recruiting, a 45-minute agenda that focuses on economics and Q&A outperforms a 90-minute feature-by-feature walkthrough.",
      bullets: [
        {
          label: "Opening 10 minutes",
          text: "Why tax preparers leave franchises and what they find on the other side. Frame the problem your bureau solves.",
        },
        {
          label: "Middle 20 minutes",
          text: "Walk through the economics comparison using an illustrative example office. Show the math, label it as illustrative.",
        },
        {
          label: "Final 15 minutes",
          text: "Live Q&A — this is where serious prospects reveal themselves. Have a calendar link ready to book discovery calls with attendees during the session.",
        },
      ],
      narration:
        "Structure matters as much as running the webinar. A tight 45-minute agenda converts better than a long feature walkthrough. Open with the problem: why do preparers leave franchises and what do they find on the other side? The middle is the economics comparison — an illustrative example office with labeled numbers showing how the math changes under a bureau arrangement. This is your most important segment. End with 15 minutes of live Q&A and have a calendar link ready to drop in the chat. Attendees asking specific questions — about software, bank products, onboarding — are the ones to book into a discovery call that same week.",
    },
    // ── CREATIVE TESTING ──────────────────────────────────────────────────
    {
      id: "s13",
      layout: "tip",
      eyebrow: "Creative testing",
      title: "Test systematically — change one thing at a time",
      callout: {
        kind: "tip",
        title: "The testing protocol",
        text: "Run founder video versus a text-based testimonial graphic. Test 2 headlines. Wait for 50+ leads per creative before declaring a winner. Less data than that is noise, not signal.",
      },
      narration:
        "Launch with two creatives: your founder video and a text-and-image ad leading with an economics statement or a peer testimonial. Run two headline variants simultaneously. Then wait — you need at least 50 leads per creative before you can distinguish signal from noise. Swapping after 10 leads is optimizing off a coin flip. Give it three to five days and let the algorithm gather data. The winner keeps running. The loser gets replaced by a new challenger. Always change one variable at a time: creative versus creative or headline versus headline, never both simultaneously.",
    },
    {
      id: "s13b",
      layout: "point",
      eyebrow: "Creative testing",
      title: "How to track what you're testing",
      lead: "Without a simple tracking system, creative tests become anecdotes. Keep a one-row-per-test log so you build real knowledge across seasons.",
      bullets: [
        {
          label: "What to log",
          text: "Test name, ad set, dates run, leads generated, lead-to-qualified rate, cost per qualified lead.",
        },
        {
          label: "The right winner metric",
          text: "Judge creative winners on cost per qualified lead — not cost per lead. Volume without quality is a false signal.",
        },
        {
          label: "Carry winners forward",
          text: "Keep the winning creative running as your control. Challenge it with a new test every 3 to 4 weeks.",
        },
      ],
      narration:
        "Keep a testing log — a Google Sheet with one row per test: test name, ad set, dates, leads, lead-to-qualified rate, and cost per qualified lead. Judge winners on cost per qualified lead, not raw cost per lead. A creative that generates many form fills but few qualified leads is a budget drain, not a winner. Keep the winning creative as your control baseline and challenge it with a new variant every three to four weeks. Over a full recruiting season you will build five to eight real data points that reveal exactly what works in your specific market.",
    },
    // ── COLD VS RETARGETING ───────────────────────────────────────────────
    {
      id: "s14",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Running the same ad to cold and retargeting audiences",
      callout: {
        kind: "warn",
        title: "Cold needs education. Retargeting needs urgency.",
        text: "Cold audiences don't know what a service bureau is — lead with education. Retargeting audiences already know you — lead with urgency, social proof, and a clear next step. Always run these as separate ad sets.",
      },
      narration:
        "Running identical creative to cold and retargeting audiences is the most common Facebook mistake in bureau recruiting. Cold audiences have never heard of you — their ad must answer the basic question: what is this and why should I care? Lead with education and economics. Retargeting audiences already have that foundation. Showing them the same introductory ad again wastes the opportunity. Retargeting creative should use social proof or urgency — demo sessions filling up, enrollment closing. Separate ad sets, separate creative for each, and your overall cost per lead drops as the retargeting segment converts at higher rates.",
    },
    // ── YOUR TURN ─────────────────────────────────────────────────────────
    {
      id: "s15",
      layout: "action",
      eyebrow: "Your turn",
      title: "Build your first bureau recruiting campaign — checklist",
      callout: {
        kind: "action",
        title: "Six things before you publish",
        text: "1. Privacy policy URL ready. 2. Targeting stack built with all five layers. 3. Founder video recorded or scheduled. 4. Lead form has both qualifying questions. 5. Thank-you screen sets the 1-hour follow-up expectation. 6. Earnings claims reviewed by counsel.",
      },
      narration:
        "Six things before you publish. One: privacy policy URL ready — Facebook requires it and you cannot publish without it. Two: targeting stack built with all five layers — location, age, interests, job titles, and the small-business-owner behavior. Three: founder video recorded or scheduled — this is your highest-performing creative. Four: lead form includes both qualifying questions on return volume and bureau or franchise status. Five: thank-you screen promises a one-hour follow-up. Six: any earnings comparisons reviewed by an attorney before publishing. Run through all six, then publish.",
    },
    // ── RECAP ─────────────────────────────────────────────────────────────
    {
      id: "s16",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Standard job-title targeting misses most preparers — layer interests, job titles, behaviors, and a lookalike audience to build a high-density audience." },
        { text: "Use Lead Generation campaign objective, control budget at ad set level, and run cold and retargeting audiences in separate ad sets with different creative." },
        { text: "Founder-on-camera video with an economics-focused hook outperforms every other creative format for bureau recruiting." },
        { text: "Your lead form needs both qualifying questions and a one-hour follow-up promise on the thank-you screen." },
        { text: "Earnings claims in recruiting ads are regulated by FTC and state law — have counsel review any income representation before publishing." },
      ],
      subtitle: "Up next: Capture, Qualify, and Route Every Prospect",
      narration:
        "Layer your targeting — interests, job titles, small-business-owner behavior, and a lookalike from your ERO list. Use Lead Generation objective with ad-set-level budget control. Separate cold and retargeting audiences and write different creative for each. Lead with a founder video and an economics-focused hook. Build your lead form with both qualifying questions and set the one-hour follow-up promise on the thank-you screen. Have any earnings representations reviewed by an attorney. In Lesson 3 we cover what happens the moment a form fills — capture, qualify, and route every prospect before the window closes.",
    },
  ],
};
