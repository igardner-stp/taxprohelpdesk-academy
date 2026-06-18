// =============================================================================
// Interactive lesson definition — Marketing Track SM1.5
// "Measure Your Pipeline and Scale What Works"
//
// Authoring source for the narrated interactive experience.
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Measure Your Pipeline and Scale What Works",
  trackId: "bureau-mktg",
  key: "SM1.5",

  slides: [
    // ── COVER ──────────────────────────────────────────────────────────────
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Marketing Track · Service Bureau Lead Generation",
      title: "Measure Your Pipeline and Scale What Works",
      subtitle: "Lesson 5 · Narrated walkthrough",
      narration:
        "Welcome to the final lesson in the Service Bureau Marketing track. You have the strategy, the ad setup, the capture system, and the contact sequences. Now we close the loop — measuring everything, diagnosing what is leaking, and building the conditions that let you scale with confidence. This lesson covers the six funnel metrics, how to interpret and fix each one, how to test properly in a bureau context, when to scale your budget, and the two compounding assets — the off-season machine and the referral flywheel — that make every future recruiting cycle cheaper than the last.",
    },
    // ── THE 6 METRICS ─────────────────────────────────────────────────────
    {
      id: "s2",
      layout: "list",
      eyebrow: "The metrics",
      title: "The 6 bureau-recruiting metrics that matter",
      bullets: [
        {
          label: "1. Leads per month",
          text: "Total form fills. Your top-of-funnel input — tells you whether targeting and ad spend are working.",
        },
        {
          label: "2. Lead-to-qualified rate",
          text: "Percent of leads that pass your three-question qualifying screen.",
        },
        {
          label: "3. Qualified-to-demo rate",
          text: "Percent of qualified prospects who actually show up to a scheduled demo.",
        },
        {
          label: "4. Demo-to-signed rate",
          text: "Percent of completed demos that result in a signed agreement.",
        },
        {
          label: "5. Signed-to-activated rate",
          text: "Percent of signed offices that file at least one return through your program.",
        },
        {
          label: "6. Cost per activated office",
          text: "Total recruiting spend divided by activated offices. Your north-star metric.",
        },
      ],
      narration:
        "Six metrics to track weekly. Leads per month — raw form fills, your input metric; if it drops, check targeting, creative, and budget. Lead-to-qualified rate — what percent pass your three-question screen. Qualified-to-demo rate — what percent of qualified prospects actually show up. Demo-to-signed rate — what percent of completed demos result in a signed agreement. Signed-to-activated rate — the metric most bureaus miss — what percent of signed offices actually file returns through your program. And cost per activated office — total recruiting spend divided by activated offices. That is your north-star metric connecting marketing investment to real revenue.",
    },
    {
      id: "s2b",
      layout: "point",
      eyebrow: "The metrics",
      title: "How to calculate each rate — the formulas",
      lead: "Knowing the names of the six metrics is only useful if you can calculate them. Here is the exact formula for each one.",
      bullets: [
        {
          label: "Lead-to-qualified",
          text: "Prospects who passed qualifying ÷ total form fills × 100. If 30 of 100 form fills pass, your rate is 30 percent.",
        },
        {
          label: "Demo show rate",
          text: "Demos completed ÷ demos booked × 100. If 15 of 20 booked demos happen, your show rate is 75 percent.",
        },
        {
          label: "Cost per activated office",
          text: "Total recruiting spend ÷ number of activated offices. If you spent $4,500 and activated 6 offices, cost per activated office is $750.",
        },
      ],
      narration:
        "The formulas are straightforward. Lead-to-qualified: prospects who passed qualifying divided by total form fills, times 100. Qualified-to-demo: demos scheduled divided by qualified prospects, times 100. Demo show rate: demos completed divided by demos booked, times 100. Demo-to-signed: signed agreements divided by completed demos, times 100. Signed-to-activated: activated offices divided by total signed agreements, times 100. Cost per activated office: total recruiting spend divided by activated offices. None of these are complicated — they only require that you have been counting each event in your CRM consistently. That habit matters more than having a sophisticated analytics tool.",
    },
    {
      id: "s3",
      layout: "point",
      eyebrow: "The metrics",
      title: "Track these weekly — not monthly, not at season end",
      lead: "Weekly tracking lets you catch a broken stage and fix it while the season is still running. Monthly tracking tells you about a problem after the opportunity has passed.",
      bullets: [
        {
          label: "Weekly ritual",
          text: "Every Monday, update your six metrics from the prior week. Five minutes in a spreadsheet — or your CRM's built-in reporting.",
        },
        {
          label: "What to look for",
          text: "Not the absolute number — the trend. A metric that drops two weeks in a row signals something changed.",
        },
        {
          label: "The compound effect",
          text: "Catching a broken stage in week 3 versus week 12 of your recruiting season means you can fix 9 more weeks of performance.",
        },
      ],
      narration:
        "Frequency matters as much as the metrics themselves. Season-end reviews are post-mortems — you discover a problem when nothing can be done about it. Weekly tracking lets you catch a broken stage while the season is still running. Every Monday, spend five minutes updating your six metrics. Look for trends, not perfection. A metric that drops two weeks in a row signals something changed. Catching it in week three gives you nine more weeks to test a fix.",
    },
    {
      id: "s3b",
      layout: "tip",
      eyebrow: "The metrics",
      title: "Build your weekly tracking ritual",
      callout: {
        kind: "tip",
        title: "Five minutes every Monday",
        text: "Every Monday before you do anything else: open your CRM, count the new events from the prior week (new leads, qualifications, demos, signs, activations), and update your tracking spreadsheet. Five minutes of data entry creates a season-long dataset you can actually use.",
      },
      narration:
        "The habit is more valuable than the tool. The five-minute Monday ritual: open your CRM or Google Sheet and count new leads, qualifying calls that resulted in Qualified status, demos scheduled and completed, signed agreements, and new activated offices. Update the tracking spreadsheet. Do it before you open email, before you check your ad account — first thing Monday. Over a 12-week recruiting season this ritual creates a dataset that tells you exactly where your funnel is strengthening and where it is leaking. Without the habit, you have guesses. With it, you have evidence.",
    },
    // ── BENCHMARK RANGES ──────────────────────────────────────────────────
    {
      id: "s4",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "Illustrative benchmark ranges for each stage",
      callout: {
        kind: "stat",
        title: "Illustrative ranges only — actual results vary widely",
        text: "Lead-to-qualified: 30–50%. Qualified-to-demo scheduled: 50–70%. Demo show rate: 60–80%. Demo-to-signed: 30–50%. Signed-to-activated: 70–85%. Every stage is a lever. Your numbers depend on your market, targeting, and execution.",
      },
      narration:
        "Illustrative benchmark ranges for reference — not guarantees, not certified averages. They reflect what a well-run bureau operation might see. Lead-to-qualified: 30 to 50 percent. Qualified-to-demo-scheduled: 50 to 70 percent. Demo show rate: 60 to 80 percent. Demo-to-signed: 30 to 50 percent. Signed-to-activated: 70 to 85 percent. Your numbers may be higher or lower based on your market, targeting precision, creative quality, and execution. Use these as diagnostic reference points, not goals. What matters most is whether your funnel is improving over time relative to itself.",
    },
    // ── DIAGNOSING LEAKS ──────────────────────────────────────────────────
    {
      id: "s5",
      layout: "point",
      eyebrow: "Diagnosing leaks",
      title: "Every metric problem has a specific cause at a specific stage",
      lead: "A low metric at any stage points directly at the process that drives that stage. Identify it, isolate the cause, test one fix at a time.",
      bullets: [
        {
          label: "Low lead-to-qualified",
          text: "Targeting too broad or form not qualifying enough. Add the return-volume question to the form.",
        },
        {
          label: "Low qualified-to-demo scheduled",
          text: "Speed-to-contact is too slow or first-contact messaging is not compelling. Rewrite the auto-email or cut response time.",
        },
        {
          label: "Low demo show rate",
          text: "Confirmation and reminder sequence is missing or too light. Add the one-hour-before reminder text.",
        },
      ],
      narration:
        "Every low metric has a specific cause at that stage. Resist changing everything at once. Low lead-to-qualified: targeting is too broad or the form has no qualifying questions. Low qualified-to-demo: first contact is too slow or not compelling. Low demo show rate: the reminder sequence is missing — add the one-hour reminder text; it can add 10 to 15 percentage points on its own. Isolate the cause, change one thing, measure the result.",
    },
    {
      id: "s6",
      layout: "point",
      eyebrow: "Diagnosing leaks",
      title: "The bottom-funnel leaks cost the most",
      lead: "Demo-to-signed and signed-to-activated are where bureau revenue is actually won or lost. Fix these before scaling the top of the funnel.",
      bullets: [
        {
          label: "Low demo-to-signed",
          text: "Your economics presentation needs work — or you are demoing too many low-fit prospects. Review qualifying criteria and demo script together.",
        },
        {
          label: "Low signed-to-activated",
          text: "Onboarding is broken. An office that signs but never files returns is a support cost, not revenue.",
        },
        {
          label: "Fix from the bottom up",
          text: "Scale recruiting budget only after the bottom stages are healthy. Scaling into a broken bottom funnel wastes every dollar you add at the top.",
        },
      ],
      narration:
        "The two metrics that directly connect to revenue. Low demo-to-signed has two root causes: your economics presentation is not landing clearly, or you are demoing the wrong people because qualifying criteria are too loose. Check both. Low signed-to-activated is a different problem — the office wanted to be with you, they signed, but onboarding friction stopped them: software setup issues, EFIN verification delays, training they never received. Onboarding friction is a silent revenue killer. The cardinal rule: fix bottom-funnel leaks before scaling top-of-funnel spend. There is no point signing 20 offices if six never activate.",
    },
    {
      id: "s6b",
      layout: "list",
      eyebrow: "Diagnosing leaks",
      title: "The diagnostic questions for each leak",
      bullets: [
        {
          label: "Low demo-to-signed — two questions to ask",
          text: "Are you demoing the right people? And is your economics presentation building enough clarity and confidence to justify a decision?",
        },
        {
          label: "Low signed-to-activated — three questions to ask",
          text: "Does the office have all the technical setup complete before season? Did they receive onboarding training? Is there a real accountability check-in before their first return?",
        },
        {
          label: "Low qualified-to-demo — two questions to ask",
          text: "Are you calling fast enough after the qualifying conversation? And is your calendar easy to book into with a direct link?",
        },
      ],
      narration:
        "Specific diagnostic questions. Low demo-to-signed: are you demoing the right people, or has qualifying been too loose upstream? Does your economics presentation create enough clarity for a decision? Low signed-to-activated: is technical setup complete before season — software, EFIN, bank products? Did they complete onboarding training? Is there a live check-in before their first return? Any of those missing is your activation leak. Low qualified-to-demo: are you calling fast enough, and is your calendar easy to book with a direct link?",
    },
    {
      id: "s7",
      layout: "tip",
      eyebrow: "Diagnosing leaks",
      title: "A 10 percent improvement at one stage ripples everywhere",
      callout: {
        kind: "stat",
        title: "Funnel math illustration",
        text: "In a funnel producing 6 activated offices per cycle, improving demo show rate from 50 to 70 percent adds 3 more demos — which at a 40 percent close rate adds 1–2 more activated offices per cycle, without spending a dollar more on ads. (Illustrative numbers.)",
      },
      narration:
        "Improving one stage improves every stage below it. In an illustrative funnel producing 6 activated offices, improving your demo show rate from 50 to 70 percent adds three more completed demos. At a 40 percent close rate, those produce one to two more signed and activated offices generating override revenue — with no additional ad spend, just a better reminder system. Every stage is a lever. Every percentage point improvement compounds through the whole funnel.",
    },
    {
      id: "s7b",
      layout: "point",
      eyebrow: "Diagnosing leaks",
      title: "The onboarding audit — fixing the signed-to-activated leak",
      lead: "If your signed-to-activated rate is below 70 percent, run an onboarding audit before next season. The fix is almost always a process problem, not a people problem.",
      bullets: [
        {
          label: "Step 1 — Map your onboarding",
          text: "Write down every step a new office must complete between signing and filing their first return. If you cannot write it down, your process does not exist.",
        },
        {
          label: "Step 2 — Identify the gap",
          text: "Call your last 5 offices that signed but never activated. Ask: what got in the way? The answer is your highest-priority fix.",
        },
        {
          label: "Step 3 — Add a live checkpoint",
          text: "Schedule a 15-minute onboarding check-in with every new office 2 weeks before season starts. Verify their setup is complete and they know how to file their first return.",
        },
      ],
      narration:
        "If signed-to-activated is below 70 percent, run this three-step audit. Step one: write down every step a new office must complete between signing and filing their first return. If you cannot write the full list, your onboarding does not exist as a process — it exists as improvisation. Step two: call the last five offices that signed but never activated and ask what got in the way. Step three: schedule a live 15-minute pre-season checkpoint with every new office two weeks before opening day. That one call meaningfully improves activation rates.",
    },
    // ── A-B TESTING ───────────────────────────────────────────────────────
    {
      id: "s8",
      layout: "list",
      eyebrow: "Testing",
      title: "How to test properly in bureau recruiting",
      bullets: [
        {
          label: "Test your ad hook",
          text: "Economics-focus (fee comparison) versus freedom-focus (own your business) versus video-only. One variable at a time.",
        },
        {
          label: "Test the lead-form qualifying question",
          text: "\"How many returns did you file?\" versus \"What best describes your current setup?\" — which produces better-qualified leads?",
        },
        {
          label: "Test your post-demo follow-up",
          text: "Detailed economics model versus a simple open question — which produces more signed agreements?",
        },
        {
          label: "The patience rule",
          text: "Change one thing at a time. Wait for 2 weeks and at least 50 data points before declaring a winner.",
        },
      ],
      narration:
        "Testing requires patience because volume is lower. At a healthy budget you may generate 10 to 20 leads per week — meaning two or more weeks to reach 50 leads, the minimum sample for most creative tests. Test your ad hook first: economics-focused versus freedom-focused, measured on qualified leads, not raw leads. Test your qualifying question phrasing. Test your post-demo follow-up. Change one variable at a time and give each test enough data before drawing a conclusion.",
    },
    {
      id: "s8b",
      layout: "tip",
      eyebrow: "Testing",
      title: "When a test produces no clear winner",
      callout: {
        kind: "tip",
        title: "No winner is also data",
        text: "If two creative variants produce statistically similar results after 50+ leads each, it tells you the variable you tested doesn't move the needle for your audience. Try a different variable — audience segment, qualifying question, or follow-up sequence.",
      },
      narration:
        "No clear winner is also useful data — that variable does not differentiate your results, so stop testing it and move to a different lever. Does your interest-stack audience convert better than your lookalike? Does asking about return volume produce better-quality prospects than asking about current software? Does a same-day text outperform a same-day email? There is always another lever to test. No winner means you have learned what not to focus on.",
    },
    // ── WHEN TO SCALE ─────────────────────────────────────────────────────
    {
      id: "s9",
      layout: "tip",
      eyebrow: "Scaling",
      title: "When to scale — two conditions must both be true",
      callout: {
        kind: "tip",
        title: "Scale only when both gates are open",
        text: "Gate 1: Cost per activated office is clearly below your office LTV and you have data to prove it. Gate 2: You have the support, training, and onboarding capacity to handle the additional offices you are about to sign without service degrading.",
      },
      narration:
        "Scaling too early is expensive in ways that take multiple seasons to recover from. Two gates must both be open: first, cost per activated office is clearly below your office lifetime value with at least one full cycle of data to prove it; second, you have the support capacity, onboarding bandwidth, and account management coverage to handle additional offices without degrading service to existing ones. Recruiting 30 new offices you cannot support well means spending the next two seasons losing them.",
    },
    {
      id: "s9b",
      layout: "list",
      eyebrow: "Scaling",
      title: "How to scale your budget in stages — not all at once",
      bullets: [
        {
          label: "Stage 1 — Validation (first 4 weeks)",
          text: "Run at $50/day. Verify targeting, creative, and lead quality before committing to higher spend.",
        },
        {
          label: "Stage 2 — Scale (weeks 5 to 8)",
          text: "If cost per qualified lead is on track, increase to $75 to 100/day. Add the lookalike ad set if not already running.",
        },
        {
          label: "Stage 3 — Optimize (weeks 9 to 12)",
          text: "Pause the lowest-performing creative. Increase budget on the highest-performing ad set. Focus on demo show rate improvements.",
        },
        {
          label: "The rule throughout",
          text: "Never increase budget more than 20 percent per week. Larger jumps reset Facebook's delivery algorithm and hurt efficiency.",
        },
      ],
      narration:
        "Scale in three stages. Weeks one to four: validation at ~$50 per day — confirm targeting, creative, and lead quality. Weeks five to eight: scale to $75–100 per day and add the lookalike ad set if ready. Weeks nine to twelve: shift to optimization — pause the lowest-performing creative, increase budget on the top-performing ad set, and focus on show rate improvements. One rule throughout: never increase Facebook ad budget more than 20 percent in a single week. Larger jumps reset the delivery algorithm.",
    },
    // ── OFF-SEASON MACHINE ────────────────────────────────────────────────
    {
      id: "s10",
      layout: "point",
      eyebrow: "The off-season machine",
      title: "Stay visible year-round — never start recruiting cold again",
      lead: "The bureaus that dominate recruiting are not the ones who run the hardest in-season campaign. They are the ones who never fully go dark.",
      bullets: [
        {
          label: "Year-round awareness spend",
          text: "$10–15/day Facebook awareness campaign builds your retargeting pool continuously. Illustrative — run your own budget math.",
        },
        {
          label: "One webinar per quarter",
          text: "Generates email subscribers from preparers not ready to switch yet — who become your September warm list.",
        },
        {
          label: "One value email per month",
          text: "A genuinely useful IRS update, software tip, or case study sent to your full list. Earns trust over time.",
        },
      ],
      narration:
        "The bureaus that dominate recruiting never fully go dark. Keep a $10–15 per day awareness campaign running — not lead generation, but brand presence and retargeting-pool building. Everyone who sees your content in the off-season joins your September retargeting pool. Run one free webinar per quarter. Send one useful email per month — an IRS update, a planning guide, a case study. When September comes, you are inviting people who have been receiving value from you for months, not strangers.",
    },
    {
      id: "s11",
      layout: "list",
      eyebrow: "The off-season machine",
      title: "What to publish in the off-season to stay visible",
      bullets: [
        {
          label: "May–June",
          text: "\"How to improve your office efficiency before next season starts\" — planning content that preparers read in the slow months.",
        },
        {
          label: "July–August",
          text: "Webinar: \"How to Start or Grow Your Own Tax Business\" — attracts preparers in their annual decision window.",
        },
        {
          label: "September–October",
          text: "Increase Facebook budget back to in-season levels. Send \"season prep\" email to your full list. Demo calendar opens.",
        },
        {
          label: "Year-round",
          text: "Be present and helpful in tax-preparer Facebook groups. Answer questions. Offer resources. Build reputation before you need it.",
        },
      ],
      narration:
        "The off-season calendar: May and June — publish planning content reaching preparers in their reflective mode. July and August — run your quarterly webinar targeting preparers evaluating their setup. September and October — scale back up, email your warm list, and open your demo calendar. Year-round — stay present in tax-preparer Facebook groups as a genuinely helpful expert. Answer questions, share IRS updates. Do not pitch in every comment — build reputation first. When someone asks for bureau recommendations, your name is the one that comes up.",
    },
    {
      id: "s11b",
      layout: "point",
      eyebrow: "The off-season machine",
      title: "Be a visible expert in preparer communities — before you need it",
      lead: "The tax-preparer Facebook groups that contain your audience are also community spaces where experts earn reputation. That reputation is recruiting leverage.",
      bullets: [
        {
          label: "Contribute, don't pitch",
          text: "Answer questions about IRS updates, software comparisons, and office management. Do not promote your bureau in every comment.",
        },
        {
          label: "Let your expertise sell for you",
          text: "A preparer who has seen you give accurate, helpful answers 12 times over the year will respond to your bureau outreach differently than a cold prospect.",
        },
        {
          label: "When it converts",
          text: "Once you are known in a community, bureau inquiries start arriving organically — members ask you directly in DMs or in threads.",
        },
      ],
      narration:
        "Community presence takes the most patience in this track, but it compounds in a way no ad campaign can match. Tax-preparer Facebook groups are community spaces, not advertising platforms. Show up consistently as a helpful, knowledgeable resource — answering questions accurately about IRS updates, software, EFIN requirements — and you earn a reputation visible to tens of thousands over time. A preparer who has seen 15 useful answers from you reads your recruiting message completely differently than one seeing your name for the first time in an ad.",
    },
    // ── REFERRAL FLYWHEEL ─────────────────────────────────────────────────
    {
      id: "s12",
      layout: "point",
      eyebrow: "The referral flywheel",
      title: "Your best offices recruit the next generation of offices",
      lead: "One satisfied 300-return office in a 10,000-member Facebook group is worth more reach than any paid ad. Build the flywheel deliberately.",
      bullets: [
        {
          label: "The post-season referral ask",
          text: "Email your top 20 offices after a strong season: \"If you know another preparer who could use a setup like yours, I'll give you both a credit toward your renewal fee.\"",
        },
        {
          label: "Why peer trust transfers",
          text: "A recommendation from a colleague in the same community carries more weight than any claim you can make in an ad.",
        },
        {
          label: "The compounding effect",
          text: "Each season's satisfied offices seed the next season's referral pipeline — making every future recruiting cycle both cheaper and higher-quality.",
        },
      ],
      narration:
        "The referral flywheel makes every other part of your recruiting engine cheaper over time. After a strong season, email your top 20 offices: we had a great season together — if you know another preparer who could benefit from a setup like yours, I will give you both a credit toward your renewal fee. That is the whole program. A referred office is dramatically more likely to qualify, sign, onboard properly, and stay long-term — the trust is already transferred. A satisfied office in a large preparer Facebook group generates warm inbound interest at no cost beyond the referral credit.",
    },
    {
      id: "s13",
      layout: "tip",
      eyebrow: "The referral flywheel",
      title: "The referral ask email — word for word",
      callout: {
        kind: "quote",
        title: "Send this to your top 20 offices post-season",
        text: "\"Hi [Name], we had a great season working together. If you know another preparer who could use a setup like yours, I'll give you both a credit toward your renewal fee. Just send them my way and mention your name — that's all it takes. Thanks again for a great season. — [Your Name]\"",
      },
      narration:
        "The referral ask email is mechanically clear — send someone my way and mention your name. The incentive activates only when the referred office files their first return, which is exactly the behavior you want. Send it to your top 20 to 30 offices within two weeks of season's end while goodwill is highest. Track referrals with a source tag. In most bureaus that build this flywheel deliberately, referred offices activate at higher rates, support at lower cost, and renew more often — a compound advantage that grows every season.",
    },
    {
      id: "s13b",
      layout: "list",
      eyebrow: "The referral flywheel",
      title: "Building the referral program into your standard season close",
      bullets: [
        {
          label: "Week of April 15 or shortly after",
          text: "Send the referral ask email to your top 20 to 30 offices — timing is everything, do it while goodwill is highest.",
        },
        {
          label: "The credit mechanics",
          text: "Offer a renewal credit that activates when the referred office files their first return — creates a clean activation incentive on both sides.",
        },
        {
          label: "Track referral source",
          text: "When a referred prospect submits a form, ask \"How did you hear about us?\" and tag the source in your CRM. Measure referred-office activation rate versus cold-lead activation rate over time.",
        },
        {
          label: "Year two flywheel",
          text: "Offices that joined via referral have higher retention rates — they arrived with social trust already established. They also generate more referrals themselves.",
        },
      ],
      narration:
        "Build the referral ask into your standard season-close process. Send it the week of April 15th — when the relationship is warmest. Bureaus that wait until July contact offices when goodwill has cooled. Structure the credit to activate when the referred office files their first return, not just when they sign — this creates an activation incentive on both sides. Track referral sources and compare activation rates against cold-lead rates over two or three seasons. That data makes the case for treating the flywheel as your primary long-term growth lever.",
    },
    // ── COMMON MISTAKE ────────────────────────────────────────────────────
    {
      id: "s14",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Counting signed instead of activated — a season of false confidence",
      callout: {
        kind: "warn",
        title: "Track signed-to-activated separately, every season",
        text: "An office that signs but never files returns is a support cost, not revenue. Bureaus that report signed count without activation rate are measuring activity, not results.",
      },
      narration:
        "Every season bureaus celebrate their signed count. Then April 15th arrives and the actual numbers reveal that a meaningful portion of those wins never produced anything — offices that signed, received credentials, and then stalled. Each consumed support resources and contributed zero to your override pool. Track signed-to-activated separately and report it at the same prominence as your signed count. Diagnose why offices sign without activating — it is almost always an onboarding friction problem, and fixing it is the single highest-ROI improvement most bureaus can make.",
    },
    // ── YOUR TURN ─────────────────────────────────────────────────────────
    {
      id: "s15",
      layout: "action",
      eyebrow: "Your turn",
      title: "Build your 6-metric tracking spreadsheet today",
      callout: {
        kind: "action",
        title: "Build it, then fill in last season",
        text: "Create a spreadsheet with 6 columns: Leads, Lead-to-Qualified %, Qualified-to-Demo %, Demo Show Rate %, Demo-to-Signed %, Signed-to-Activated %. Add rows for each week of recruiting season. Fill in what you know from last season — the gaps are as informative as the numbers.",
      },
      narration:
        "Your final action: build the six-column tracking spreadsheet — Leads, Lead-to-Qualified, Qualified-to-Demo, Demo Show Rate, Demo-to-Signed, Signed-to-Activated. Add a row for each week of recruiting season. If you ran recruiting last season, fill in your best estimates from notes, email history, or CRM. The gaps are as informative as the numbers — stages you cannot calculate are stages you were not measuring. Find the biggest percentage drop between consecutive stages. That is your single highest-leverage problem. Fix that one stage and your cost per activated office improves more than any budget increase can buy you.",
    },
    // ── RECAP ─────────────────────────────────────────────────────────────
    {
      id: "s16",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Track all 6 metrics weekly: leads, lead-to-qualified, qualified-to-demo, demo show rate, demo-to-signed, and signed-to-activated. Cost per activated office is your north-star." },
        { text: "Diagnose funnel leaks at the specific stage where they occur — and fix from the bottom up before scaling the top. A broken bottom funnel wastes every dollar of added ad spend." },
        { text: "Scale your recruiting budget only when cost per activated office is below LTV and your support capacity can handle the additional offices." },
        { text: "Run a year-round off-season machine: $10–15/day awareness, one quarterly webinar, one monthly value email — so you are never starting cold in September." },
        { text: "Build the referral flywheel by asking your top 20 offices each season — peer referrals produce higher-quality, lower-cost office acquisitions than any paid channel." },
      ],
      subtitle: "Up next: You've completed the Service Bureau Marketing track",
      narration:
        "Six metrics, tracked weekly, with cost per activated office as your north-star. Diagnose leaks at the specific stage where they occur and fix one variable at a time, starting from the bottom of the funnel. Only scale when cost per activated office is below LTV and your support capacity is ready. Run your off-season machine year-round so September feels like reconnecting with a warm audience. Build the referral flywheel by investing in your top offices — your most powerful, lowest-cost recruiting channel. You have now completed the Service Bureau Marketing track. Take the quiz to lock in your knowledge, then go build the engine.",
    },
  ],
};
