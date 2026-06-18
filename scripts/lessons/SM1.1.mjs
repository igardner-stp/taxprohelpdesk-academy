// =============================================================================
// Interactive lesson definition — Marketing Track SM1.1
// "Build Your Bureau Recruiting Engine"
//
// Authoring source for the narrated interactive experience. The generator
// (scripts/generate-lesson-media.mjs) reads this, produces ElevenLabs audio +
// timings per slide, and assembles the lesson media manifest.
//
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Build Your Bureau Recruiting Engine",
  trackId: "bureau-mktg",
  key: "SM1.1",

  slides: [
    // ── COVER ──────────────────────────────────────────────────────────────
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Marketing Track · Service Bureau Lead Generation",
      title: "Build Your Bureau Recruiting Engine",
      subtitle: "Lesson 1 · Narrated walkthrough",
      narration:
        "Welcome to the Service Bureau Marketing track. This first lesson is the strategy layer — the architecture you need to get right before you touch a single ad account. Bureau recruiting is fundamentally different from consumer marketing, and operators who treat it the same way burn budget and stay stuck. By the end of this lesson you will understand the full funnel from first impression to activated office, know what qualified means in this business, and understand why cost per activated office is the only number that truly matters. Let's build the engine.",
    },
    // ── WHY IT'S DIFFERENT ─────────────────────────────────────────────────
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core idea",
      title: "You're recruiting owners, not finding taxpayers",
      lead: "Bureau recruiting is B2B. Your prospect runs a small business and has already survived a tax season — which means they're skeptical, busy, and have heard pitches before.",
      bullets: [
        {
          label: "Different audience",
          text: "You're not targeting taxpayers — you're targeting the preparers who file for them.",
        },
        {
          label: "Longer cycle",
          text: "B2B deals rarely close in one call. Prospects evaluate risk, compare economics, and often wait for the off-season to switch.",
        },
        {
          label: "Higher-touch required",
          text: "One Facebook ad and a single follow-up won't do it. A disciplined multi-touch sequence will.",
        },
      ],
      narration:
        "Here is the framing that changes everything. You are not trying to find taxpayers who need help with their 1040. You are trying to find tax-prep business owners who are already in the industry and are either stuck at a franchise that takes a large cut of their fees or running independently without the software and support they need. That person is a different buyer — skeptical because they have been pitched before, busy because they work through a brutal tax season, and making a real business decision. Your marketing has to match that reality or you will keep getting the wrong results.",
    },
    {
      id: "s2b",
      layout: "tip",
      eyebrow: "The core idea",
      title: "The buyer's mindset you're working with",
      callout: {
        kind: "tip",
        title: "Think franchise-to-independent, not cold-to-new",
        text: "Many of your best prospects are already in the industry — they're paying franchise royalties or operating independently with inadequate software. Your job is to show them a better economic arrangement, not introduce them to tax prep.",
      },
      narration:
        "Most of your best prospects are already in the industry — either paying franchise royalties that take a significant share of their fees, or running independently without the bank products and compliance support they need. Your pitch is not teaching them what tax prep is. It is showing them a better economic arrangement for the business they already have. You are not a new category; you are a better alternative. That frame changes everything about how you write your ads and structure your follow-up.",
    },
    {
      id: "s3",
      layout: "tip",
      eyebrow: "Why it matters",
      title: "The cost of treating bureau recruiting like consumer ads",
      callout: {
        kind: "warn",
        title: "Consumer tactics fail B2B audiences",
        text: "Running broad interest-only targeting with a consumer-style call to action produces high lead volume and almost no qualified prospects — burning budget and demo time simultaneously.",
      },
      narration:
        "The cost of this mistake is real. When bureaus use consumer-marketing tactics — broad targeting, a simple form, a one-touch follow-up — they generate lots of leads. Many are curious individuals, tax clients who misread the ad, or people with no EFIN and no filing history. Each one takes up follow-up time and pipeline space. The fix is not a better ad. The fix is understanding the audience first and building a system designed specifically for them.",
    },
    // ── WHERE FACEBOOK FITS ────────────────────────────────────────────────
    {
      id: "s4",
      layout: "point",
      eyebrow: "Why Facebook works",
      title: "Tax preparers are unusually concentrated on Facebook",
      lead: "Independent tax-prep professionals gather in large Facebook communities — which makes targeted paid reach unusually efficient for bureau recruiting.",
      bullets: [
        {
          label: "Group size",
          text: "Professional tax-preparer Facebook groups regularly have 10,000 to 50,000 or more members — a dense, self-selected audience.",
        },
        {
          label: "Shared professional identity",
          text: "Preparers use these groups for IRS updates, software questions, and peer comparison — the same topics your bureau solves.",
        },
        {
          label: "Targeting precision",
          text: "You can reach page likers, job-title holders, and behavioral small-business owners all at once with layered Facebook targeting.",
        },
      ],
      narration:
        "Why Facebook specifically? Because your audience is already there at scale. Independent tax preparers and ERO owners are unusually active in professional Facebook communities — groups with tens of thousands of members where preparers share IRS updates, ask software questions, and compare season results. That is your audience, already gathered and already talking about the exact problems your bureau solves. You can reach them through layered targeting that combines job-title signals, page interests, behavioral segments, and lookalike audiences built from your existing ERO list. No other paid channel offers this combination of concentration and precision for independent tax professionals.",
    },
    {
      id: "s4b",
      layout: "list",
      eyebrow: "Why Facebook works",
      title: "What makes Facebook targeting work for bureau recruiting",
      bullets: [
        {
          label: "Job title + interest layering",
          text: "Stack tax-related interests over job titles to reach the overlap — people who both work in the industry and engage with tax content.",
        },
        {
          label: "Page liker audiences",
          text: "Likers of H&R Block, Jackson Hewitt, and TurboTax pages include many preparers evaluating or currently inside those franchises.",
        },
        {
          label: "Lookalike from your ERO list",
          text: "Upload 200+ current office contacts as a Custom Audience — Facebook builds a lookalike of people who resemble your best offices.",
        },
      ],
      narration:
        "Three mechanisms drive the precision. First, layering job titles over interests creates an overlap that filters out casual interest and finds people genuinely working in tax prep. Second, page liker audiences for H&R Block and Jackson Hewitt are a proxy for franchise consideration — a meaningful segment of those likers are preparers inside or evaluating those programs. Third, if you have an ERO list, a lookalike audience built from it is your most powerful targeting tool — Facebook finds more people who resemble your current best offices, dramatically improving lead quality versus broad interest targeting alone.",
    },
    {
      id: "s5",
      layout: "tip",
      eyebrow: "The two-pronged approach",
      title: "Outbound ads and inbound content — both feed the same pipeline",
      callout: {
        kind: "tip",
        title: "Run both channels simultaneously",
        text: "Outbound Facebook Lead Ads reach preparers who don't know you yet. Inbound content and webinars bring prospects to you pre-sold. Both funnel into the same CRM pipeline.",
      },
      narration:
        "The most effective bureau recruiting operations run two channels at once. On the outbound side, you run paid Facebook Lead Ads to your target audience. On the inbound side, you create content that positions you as a knowledgeable resource — a short economics-comparison video, a post in a preparer group answering a common question, a free webinar on starting or growing a tax business. Inbound leads typically arrive pre-educated and need fewer follow-up touches to convert, because they found you instead of you finding them. Both channels route into the same CRM pipeline.",
    },
    // ── FUNNEL ARCHITECTURE ───────────────────────────────────────────────
    {
      id: "s6",
      layout: "list",
      eyebrow: "The architecture",
      title: "Your recruiting funnel, stage by stage",
      bullets: [
        {
          label: "Audience",
          text: "Cold prospecting audiences (interest + job title targeting) and warm retargeting (page visitors and content engagers).",
        },
        {
          label: "Lead capture",
          text: "Facebook Lead Ad form or webinar registration collects contact info and two qualifying questions.",
        },
        {
          label: "CRM pipeline",
          text: "Lead → Qualified → Demo Scheduled → Demo Done → Signed → Onboarded.",
        },
        {
          label: "North-star metric",
          text: "Cost per activated office — total recruiting spend divided by offices filing returns.",
        },
      ],
      narration:
        "Let's map the full funnel. At the top is your audience — cold preparers you reach through Facebook targeting and warmer prospects you retarget after they visited your page or watched your video. Below that is lead capture — a Facebook Lead Ad form or webinar registration page collecting contact info plus two qualifying questions. Then comes your CRM pipeline with six stages: Lead, Qualified, Demo Scheduled, Demo Done, Signed, and Onboarded. The transition from Signed to Onboarded is where many bureaus leak value. The metric tying it all together is cost per activated office: total recruiting spend divided by offices actually filing returns through your system.",
    },
    {
      id: "s6b",
      layout: "tip",
      eyebrow: "The architecture",
      title: "The CRM is not optional — it's the engine",
      callout: {
        kind: "warn",
        title: "Working your pipeline from memory kills conversions",
        text: "A bureau operator managing 40 prospects across different stages from memory will miss follow-ups, lose context, and gift warm opportunities to competitors who are more organized.",
      },
      narration:
        "A quick note on the CRM before we go further. Bureau operators say they will set it up later — and later is after they have already lost prospects who needed follow-up. A CRM does not have to be expensive. A well-structured Google Sheet with five stage columns and a next-step field for each prospect is a functioning pipeline system. The requirement is that every prospect has a named stage and a defined next step, updated after every interaction. When you have 40 prospects in flight simultaneously — as you will when your ads are running — the CRM is not a nice-to-have. It is the engine.",
    },
    {
      id: "s7",
      layout: "point",
      eyebrow: "The architecture",
      title: "Activated office is the only milestone that pays",
      lead: "Signing an agreement is a milestone. An activated office — one filing returns through your program — is revenue.",
      bullets: [
        {
          label: "Signed is not done",
          text: "An office that signs your agreement but never activates is a support cost with zero override revenue.",
        },
        {
          label: "Track activation separately",
          text: "In your CRM, keep Signed and Activated as distinct stages with separate counts.",
        },
        {
          label: "Your real conversion rate",
          text: "Signed-to-activated rate reveals the health of your onboarding — often the most broken part of a bureau's pipeline.",
        },
      ],
      narration:
        "The most important mindset shift in this entire track: signing a prospect is a milestone, not a win. The win is when that office files its first return through your software and bank-product program — that is when override revenue begins. Bureaus that celebrate signed count while ignoring activation rate often discover that a meaningful fraction of new agreements produced almost nothing — consuming onboarding time and support calls without generating the volume that makes the economics work. Build your CRM so Signed and Activated are two separate stages. Report both, always. A low signed-to-activated rate is a top-priority operational problem.",
    },
    // ── WHAT QUALIFIED MEANS ──────────────────────────────────────────────
    {
      id: "s8",
      layout: "point",
      eyebrow: "What qualified means",
      title: "Qualify hard — a bad office costs more than it earns",
      lead: "Not every tax preparer is a good bureau fit. Define your criteria before you spend a single demo hour on the wrong prospect.",
      bullets: [
        {
          label: "Has or can get an EFIN",
          text: "Without an Electronic Filing Identification Number, a preparer cannot file electronically. This is non-negotiable.",
        },
        {
          label: "Files or plans to file returns",
          text: "Not just curious about the industry — actively preparing returns or committed to launching this season.",
        },
        {
          label: "Reachable and coachable",
          text: "Answers calls, responds to messages, willing to follow your onboarding process.",
        },
      ],
      narration:
        "Let's define what qualified means, because this is where most bureaus get into trouble. The temptation is to qualify loosely — more leads feels like progress. But a bad office costs far more than the zero override revenue it produces. An ERO who files 15 returns and goes dark eats hours of onboarding and support time, creates bank-product risk, and occupies a pipeline spot a real opportunity should have had. Your core criteria: they have an EFIN or are actively working toward one; they have filed returns before or have a concrete plan to start this season; and they are reachable and coachable — they pick up calls and respond to messages. A demo hour on the wrong prospect is an hour you did not spend on the right one.",
    },
    {
      id: "s9",
      layout: "list",
      eyebrow: "What qualified means",
      title: "One more criterion that most bureaus skip",
      bullets: [
        {
          label: "Not a compliance liability",
          text: "No serious IRS sanctions, no history of fraudulent filing, no unresolved e-file suspensions.",
        },
        {
          label: "Why it matters to the bureau",
          text: "Your bank-product program approval depends partly on the aggregate compliance profile of your office network.",
        },
        {
          label: "How to check",
          text: "Ask directly on the qualifying call. Serious operators will not be offended. Compliance liabilities often reveal themselves through evasive answers.",
        },
      ],
      narration:
        "There is a fourth criterion most bureaus skip: compliance history. Ask directly on the qualifying call whether the prospect has any IRS sanctions, suspended e-file privileges, or compliance issues with a prior bureau or franchise. A serious professional will not be offended — they will understand why you are asking. The reason it matters beyond individual risk is that your bank-product program relationships depend partly on the aggregate compliance quality of your office network. One office with serious problems can create exposure for the whole program. Ask the question, document the answer, and disqualify fast when the answer is evasive.",
    },
    {
      id: "s9b",
      layout: "list",
      eyebrow: "What qualified means",
      title: "How to ask the compliance question without offending anyone",
      bullets: [
        {
          label: "On the qualifying call",
          text: "\"Before we go any further, I want to make sure we're a good fit — have you had any issues with your e-file privileges or IRS compliance in the past few years?\"",
        },
        {
          label: "How serious operators respond",
          text: "They answer directly and without defensiveness. Most will say no — some will explain a past issue and how it was resolved.",
        },
        {
          label: "What evasiveness signals",
          text: "Changing the subject, vague answers, or irritation at the question are yellow flags that warrant a second qualifying conversation before investing demo time.",
        },
      ],
      narration:
        "Here is how to ask the compliance question without making a qualified prospect feel accused. Work it in naturally after the volume and competitive-context questions: before we go any further, I want to make sure we are a good fit — have you had any issues with your e-file privileges or IRS compliance in the past few years? That framing puts it in the context of fit, not investigation. A preparer with a clean record answers immediately. One with a past resolved issue will usually explain it — that is manageable. What you are watching for is evasion: changing the subject, vague non-answers, or irritation. That is a signal worth paying attention to before you invest hours in a demo.",
    },
    // ── BUDGET PHILOSOPHY ─────────────────────────────────────────────────
    {
      id: "s10",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "Budget philosophy: frame spend against LTV, not CPL",
      callout: {
        kind: "stat",
        title: "Illustrative budget framework",
        text: "Pre-season and in-season: $50–100/day is rational when cost per activated office is well below office LTV. Off-season: $10–20/day for awareness. All figures illustrative — run your own LTV math first.",
      },
      narration:
        "Bureau recruiting is a higher-LTV game than consumer lead generation. A single activated office filing returns at your override rate produces revenue many times larger than a consumer lead. That justifies a higher daily ad budget than most bureaus initially expect. During pre-season and in-season, spending 50 to 100 dollars a day on Facebook recruiting ads is rational when your cost per activated office is meaningfully below office LTV. In the off-season, 10 to 20 dollars a day maintains visibility and builds your retargeting pool. All figures are illustrative — run your own LTV math with your own program economics before setting a budget. Frame recruiting spend as an investment in a known LTV asset, not a line item to minimize.",
    },
    {
      id: "s10b",
      layout: "point",
      eyebrow: "By the numbers",
      title: "Calculate your office LTV before setting your budget",
      lead: "Your ad budget ceiling is determined by your office lifetime value. Know that number before you decide how much to spend on recruiting.",
      bullets: [
        {
          label: "The LTV formula",
          text: "Average override per return × average returns per office per season × average seasons an office stays = LTV per activated office.",
        },
        {
          label: "Why it changes everything",
          text: "When you know your LTV, every cost-per-activated-office figure becomes easy to evaluate — is it rational or not?",
        },
        {
          label: "Conservative first",
          text: "Use your lowest quartile of offices for the volume input, not your top performers. Build budget on realistic economics.",
        },
      ],
      narration:
        "Before you set a daily ad budget, know your office LTV. The formula: average override per return, multiplied by average returns per office per season, multiplied by average seasons an office stays with your bureau. That is your LTV per activated office. Use your bottom-quartile offices for the volume input, not top performers — build your budget on conservative economics. Once you have even a rough LTV number, every cost-per-activated-office figure has a clear benchmark. A 750-dollar cost per activated office means something very different if your LTV is 2,000 dollars versus 8,000 dollars.",
    },
    // ── WORKED EXAMPLE ────────────────────────────────────────────────────
    {
      id: "s11",
      layout: "list",
      eyebrow: "A real example",
      title: "A worked recruiting funnel — illustrative numbers",
      bullets: [
        {
          label: "Budget",
          text: "$75/day × 60 pre-season days = $4,500 total ad spend.",
        },
        {
          label: "Leads generated",
          text: "150 form fills at roughly $30 cost per lead.",
        },
        {
          label: "Qualified and demos",
          text: "30 pass the qualifier → 15 show up for a demo.",
        },
        {
          label: "Signed and activated",
          text: "8 sign agreements → 6 become activated offices filing returns.",
        },
        {
          label: "North-star result",
          text: "Cost per activated office: $750. Compare this to your office LTV.",
        },
      ],
      narration:
        "Here is a worked example to make the funnel concrete. These numbers are purely illustrative — your actual results vary based on targeting, creative, market, and execution. Say you spend 75 dollars a day for 60 pre-season days — 4,500 dollars total. At roughly 30 dollars per lead you generate 150 form fills. Thirty pass your qualifying screen. Fifteen show up for a demo. Eight sign agreements. Six become activated offices filing returns. Cost per activated office: 4,500 divided by 6, which is 750 dollars. The question: is 750 dollars below your office LTV? For most bureaus with a healthy override structure, yes — often by a wide margin. That is the economic argument for building a real recruiting system.",
    },
    {
      id: "s12",
      layout: "point",
      eyebrow: "A real example",
      title: "Why the conversion funnel shape matters more than any single rate",
      lead: "Even a small improvement at one stage compounds through every stage below it — making funnel optimization the highest-ROI work in your bureau.",
      bullets: [
        {
          label: "One stage improvement ripples",
          text: "Improving demo show rate from 50 to 70 percent adds 3 more demos — without spending a dollar more on ads.",
        },
        {
          label: "Most leaks have a specific fix",
          text: "Low demo-to-signed rate means the economics presentation needs work. Low signed-to-activated means onboarding is broken.",
        },
        {
          label: "The measurement habit",
          text: "Track each stage weekly. The stage where your funnel drops most sharply is your highest-leverage problem.",
        },
      ],
      narration:
        "What the worked example does not show explicitly is how much leverage exists at each funnel stage. Improve your demo show rate from 50 to 70 percent on that same pipeline and you go from 15 demos to 21 — without spending a dollar more on ads. Those extra demos, at your existing close rate, produce more signed offices. Those additional signed offices, at your existing activation rate, produce more activated offices. Every improvement at any stage compounds through every stage below it. This is why measuring your funnel is the highest-ROI work you do outside of actually running demos. We will build the full measurement system in Lesson 5.",
    },
    {
      id: "s12b",
      layout: "point",
      eyebrow: "A real example",
      title: "What a 10 percent improvement at one stage is worth",
      callout: {
        kind: "stat",
        title: "Funnel math — illustrative",
        text: "In the worked example, improving demo show rate from 50 to 70 percent (adding 3 more demos) produces 1–2 more activated offices per cycle at existing close rates — without spending a dollar more on ads.",
      },
      narration:
        "Let's stress-test one number from the example. Thirty qualified prospects produced 15 demo shows — a 50 percent show rate. Improve that to 70 percent and you have 21 shows from the same pipeline. Those 6 extra demos, at a 50 percent close rate, produce 3 more signed offices. At a 75 percent activation rate, that is 2 more activated offices per cycle — from better follow-up alone, not more ad spend. The worked example is not about the specific numbers. It is about learning to see your funnel as a system of levers, each one compounding into the stages below it.",
    },
    // ── COMMON MISTAKE ────────────────────────────────────────────────────
    {
      id: "s13",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Measuring cost per lead instead of cost per activated office",
      callout: {
        kind: "warn",
        title: "The most common bureau recruiting mistake",
        text: "Optimizing for a low cost per lead fills your CRM with unqualified prospects and burns your most valuable resource — your demo time. Measure activation, not acquisition volume.",
      },
      narration:
        "Here is the mistake that derails more bureau recruiting efforts than any other. When you optimize for cost per lead, you broaden targeting and loosen qualifying questions. The leads get cheaper and they get worse. Your pipeline fills with people who are mildly curious, do not have an EFIN, or have no intention of switching software this season. Then you spend your most irreplaceable resource — your own time in a demo call — on prospects who were never going to convert. The fix: measure cost per activated office, not cost per lead. A smaller pipeline of well-qualified prospects produces better results than a large pipeline of noise.",
    },
    // ── COMPLIANCE CALLOUT ────────────────────────────────────────────────
    {
      id: "s14",
      layout: "tip",
      eyebrow: "Compliance",
      title: "Earnings claims in bureau recruiting are regulated",
      callout: {
        kind: "warn",
        title: "FTC and state business-opportunity law apply here",
        text: "Any income, earnings, or fee-comparison claim in your bureau recruiting materials — ads, webinars, emails, or calls — may be regulated. Frame all figures as illustrative examples. Have counsel review before publishing income representations.",
      },
      narration:
        "Before we close, a compliance guardrail that applies throughout this entire track. When you market a bureau opportunity to tax preparers, you may be offering what the FTC and several states classify as a business opportunity. That means earnings claims — any promise or implication about what a preparer will earn by joining your bureau — are regulated. Several states have specific disclosure laws with registration requirements and mandatory disclaimers. In all recruiting materials — Facebook ads, landing pages, webinars, and calls — do not promise specific income figures or return volumes. Frame everything as illustrative and make clear that results vary by market, volume, and operator. Before publishing any material with income comparisons, have an attorney familiar with FTC and state business-opportunity law review it.",
    },
    {
      id: "s14b",
      layout: "point",
      eyebrow: "Compliance",
      title: "One final compliance principle: not tax or legal advice",
      callout: {
        kind: "warn",
        title: "This track is business-growth training, not legal counsel",
        text: "Nothing in this track constitutes tax law guidance or legal advice. For specific questions about business-opportunity disclosure requirements, earnings-claim rules, or state registration obligations, consult an attorney familiar with FTC and state franchise/business-opportunity law.",
      },
      narration:
        "One final principle. This track is business-growth training, not tax law guidance or legal advice. The compliance reminders throughout are designed to flag areas where legal exposure exists so you know to seek professional counsel before you act — not to replace that counsel. If you are building recruiting materials with income comparisons, operating in a state with business-opportunity disclosure requirements, or unsure whether your program requires registration filings, talk to an attorney before you publish. That conversation is worth far more than any amount of marketing spend.",
    },
    // ── YOUR TURN ─────────────────────────────────────────────────────────
    {
      id: "s15",
      layout: "action",
      eyebrow: "Your turn",
      title: "Map your recruiting funnel today",
      callout: {
        kind: "action",
        title: "Do this before Lesson 2",
        text: "On paper or a whiteboard, draw your six-stage funnel: Lead → Qualified → Demo Scheduled → Demo Done → Signed → Activated. If you've run any recruiting, add your best-guess numbers at each stage. Mark the stage with the biggest drop — that is your highest-leverage problem right now.",
      },
      narration:
        "Here is your action for this lesson. Grab paper or open a whiteboard. Draw your six-stage funnel: Lead, Qualified, Demo Scheduled, Demo Done, Signed, Activated. If you have run any recruiting, add rough numbers at each stage. Gaps tell you what you have not been measuring. Now find the biggest drop-off. Losing prospects at Lead-to-Qualified means your targeting and form questions need work. Losing them at Demo Scheduled to Demo Done means your speed and follow-up need work. Losing them at Signed to Activated means your onboarding is the real problem. Knowing your biggest leak is worth more than any tactic in the rest of this track.",
    },
    {
      id: "s16",
      layout: "action",
      eyebrow: "Your turn",
      title: "Calculate your bureau's office LTV",
      callout: {
        kind: "action",
        title: "The LTV calculation",
        text: "Estimate: average override per return × average returns per office per season × average seasons an office stays with your bureau. That number is your LTV per office — and it tells you how much a recruited office is actually worth.",
      },
      narration:
        "The second action is to calculate your office LTV. Take your average override per return, multiply by the average returns an office files per season, then multiply by the average seasons an office stays with your bureau. If you do not have exact numbers, estimate conservatively. Even a rough LTV transforms the budget conversation. When you know a recruited office is worth several thousand dollars over its lifetime, spending several hundred to recruit it is obviously rational. When you do not know your LTV, every ad dollar feels like a gamble. Calculate it before you set your recruiting budget.",
    },
    // ── RECAP ─────────────────────────────────────────────────────────────
    {
      id: "s17",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Bureau recruiting is B2B — longer cycles, higher touch, and a skeptical audience that requires a system, not just an ad." },
        { text: "Facebook works because tax preparers are concentrated in large professional communities — reach them with layered targeting and lookalike audiences." },
        { text: "Run outbound lead ads and inbound content together, both feeding the same six-stage CRM pipeline." },
        { text: "Qualify hard on four criteria: EFIN status, filing history, reachability, and compliance record." },
        { text: "Your north-star metric is cost per activated office — not cost per lead. An office that signs but never files returns is a support cost, not revenue." },
      ],
      subtitle: "Up next: Run Facebook Ads to Find EROs",
      narration:
        "Let's bring it together. Bureau recruiting is B2B — longer cycles, higher touch, prospects who are skeptical until you earn their trust. Facebook works because your audience is already there in large professional communities. Run outbound lead ads and inbound content simultaneously, routing everything into a single six-stage CRM pipeline. Qualify hard on your four criteria. Measure cost per activated office, and know your office LTV so every budget decision is grounded in real economics. Earnings claims in recruiting materials are regulated — frame everything as illustrative and have counsel review before you publish income comparisons. In Lesson 2 we go step by step through Meta Ads Manager and build the targeting stack that finds EROs in your market. See you there.",
    },
  ],
};
