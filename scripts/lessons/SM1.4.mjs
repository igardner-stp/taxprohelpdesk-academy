// =============================================================================
// Interactive lesson definition — Marketing Track SM1.4
// "Contact Strategy: Convert Prospects to Active Offices"
//
// Authoring source for the narrated interactive experience.
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Contact Strategy: Convert Prospects to Active Offices",
  trackId: "bureau-mktg",
  key: "SM1.4",

  slides: [
    // ── COVER ──────────────────────────────────────────────────────────────
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Marketing Track · Service Bureau Lead Generation",
      title: "Contact Strategy: Convert Prospects to Active Offices",
      subtitle: "Lesson 4 · Narrated walkthrough",
      narration:
        "Welcome to Lesson 4. You have prospects in your pipeline — some eager, some cautious, some quiet after the form fill. The difference between a bureau converting 30 percent of its qualified pipeline and one converting 10 percent is almost never the product quality. It is the follow-up discipline. In this lesson you get three complete contact sequences — high-intent, medium-interest, and ghost re-engage — plus word-for-word scripts for the four most common objections. By the end you have a playbook you can start using this week.",
    },
    // ── THE CORE IDEA ─────────────────────────────────────────────────────
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core idea",
      title: "Bureau recruiting is not a one-call close",
      lead: "The bureaus that win are the ones that are systematic and persistent with value — not just enthusiastic for two days and then silent.",
      bullets: [
        {
          label: "The multi-touch reality",
          text: "The average B2B sale takes 5 to 8 touchpoints. Bureau prospects typically take 4 to 10 across 2 to 8 weeks.",
        },
        {
          label: "Persistence with value",
          text: "Each touchpoint must add something — a resource, a relevant insight, a clear next step. Checking in with \"just following up\" destroys trust.",
        },
        {
          label: "Systematic beats enthusiastic",
          text: "A written 6-touch sequence worked consistently beats sporadic enthusiasm that fades after the first demo.",
        },
      ],
      narration:
        "Bureau recruiting does not close on the first call. Meaningful B2B decisions take 5 to 8 contacts. In bureau recruiting — where the prospect is weighing a real business change, possibly leaving a franchise — expect 4 to 10 touchpoints across 2 to 8 weeks. The bureaus that grow systematize this and work it every week. Every touchpoint must add value: a relevant insight, a personalized economics model, a case study from an office like theirs. When follow-up adds value, it does not feel like pressure.",
    },
    {
      id: "s2b",
      layout: "list",
      eyebrow: "The core idea",
      title: "The math on why systematic follow-up wins",
      bullets: [
        {
          label: "8 touchpoints reality",
          text: "If the average bureau deal takes 8 touchpoints and you only make 2 before giving up, you abandon most of your qualified pipeline.",
        },
        {
          label: "Competitor advantage",
          text: "The bureau that follows up 6 times with value will win the prospect who also talked to a bureau that followed up twice with no value.",
        },
        {
          label: "Compounding trust",
          text: "Each additional touchpoint that adds value increases the prospect's perception of your operational quality — before they ever sign.",
        },
      ],
      narration:
        "If the average bureau deal takes 8 touchpoints and most operators stop at 2 or 3, most of your qualified pipeline is abandoned too early. The prospect on touchpoint 6 is not a lost cause — they are waiting for someone to stay in the conversation long enough to earn their trust. When two bureaus are in simultaneous evaluation, the one that shows up with value repeatedly wins. Every useful touchpoint before a signature is a preview of what your program is like to be in.",
    },
    {
      id: "s3",
      layout: "tip",
      eyebrow: "The core idea",
      title: "What persistent-with-value looks like in practice",
      callout: {
        kind: "tip",
        title: "The rule: every touchpoint earns the next one",
        text: "After your qualifying call, every message you send should contain something the prospect can use regardless of whether they ultimately sign with you. That standard turns follow-up from pressure into service.",
      },
      narration:
        "The operating principle: every touchpoint after the qualifying call should contain something the prospect can use regardless of whether they ultimately join your bureau. A useful IRS update. A simple economics calculator. A case study about an office their size. That standard transforms follow-up from a sales pressure tactic into a service interaction. Prospects who experience this kind of follow-up tell colleagues about you — the beginning of your referral flywheel. And they convert more reliably, because trust accumulates with every useful message.",
    },
    // ── HIGH SEQUENCE ─────────────────────────────────────────────────────
    {
      id: "s4",
      layout: "list",
      eyebrow: "High-intent sequence",
      title: "6-touch sequence for your most qualified prospects",
      bullets: [
        {
          label: "Touch 1 — Qualifying call (same day as form fill)",
          text: "Ask all three questions. Book the demo before you hang up.",
        },
        {
          label: "Touch 2 — Confirmation email",
          text: "\"Your 15-minute call — what to have ready.\" A one-page prep guide with three questions to think about.",
        },
        {
          label: "Touch 3 — Reminder text (1 hour before demo)",
          text: "\"Looking forward to our call at [time]. Sending the dial-in link now.\"",
        },
        {
          label: "Touch 4 — Post-demo economics email",
          text: "Send the one-page model customized to their return volume within 2 hours of the demo.",
        },
        {
          label: "Touch 5 — Decision follow-up call (2–3 days post-demo)",
          text: "\"Any questions since we talked?\" This is where most deals close.",
        },
        {
          label: "Touch 6 — Final follow-up (7 days post-demo)",
          text: "\"I'm holding a spot for you through [date] — let me know either way.\"",
        },
      ],
      narration:
        "Six touches for high-score prospects. Touch one: qualifying call, book the demo live before you hang up. Touch two: confirmation email with a prep guide. Touch three: personal text one hour before the demo. Touch four: post-demo email with a one-page economics model using their actual numbers — not a brochure, a personalized model framed as illustrative. Touch five: decision follow-up call two to three days post-demo — this is where most deals actually close. Touch six: final follow-up seven days post-demo that creates a soft deadline.",
    },
    {
      id: "s5",
      layout: "tip",
      eyebrow: "High-intent sequence",
      title: "Touch 3 — the pre-demo reminder text",
      callout: {
        kind: "quote",
        title: "Send this 1 hour before the demo",
        text: "\"Hi [Name] — looking forward to our call at [time] today. Sending you the dial-in link now: [link]. See you in a bit! — [Your Name]\"",
      },
      narration:
        "The reminder text is one of the highest-leverage messages in the sequence, and most bureaus skip it. A text one hour before, combined with the calendar invite at booking, can add 10 to 15 percentage points to your show rate — improving cost per signed office without a dollar more in ad spend. Keep it human: first name, confirm the time, send the link, short sign-off. If they no-show, follow up within 30 minutes to reschedule.",
    },
    {
      id: "s5b",
      layout: "tip",
      eyebrow: "High-intent sequence",
      title: "Booking the demo on the qualifying call — exactly how to do it",
      callout: {
        kind: "quote",
        title: "The live booking close — say this on the qualifying call",
        text: "\"Based on what you've shared, I think we're a great fit. I'd love to walk you through the economics in detail on a 15-minute call. I have Tuesday at 2pm or Thursday at 10am — which works better for you?\"",
      },
      narration:
        "Booking the demo live is the single highest-leverage moment in your contact strategy. After the third qualifying question, say: based on what you've shared, I think we're a great fit — I'd love to walk you through the economics. I have Tuesday at 2pm or Thursday at 10am — which works better? Two options force a real decision rather than a vague maybe later. If neither works: what does your schedule look like this week or next? Get a time before you hang up. If you hang up without a booked demo, you have converted a live opportunity into a follow-up project.",
    },
    {
      id: "s6",
      layout: "point",
      eyebrow: "High-intent sequence",
      title: "Touch 4 — the post-demo economics model",
      lead: "The most powerful follow-up asset in bureau recruiting is a one-page economics model built with the prospect's own numbers — not a generic brochure.",
      bullets: [
        {
          label: "What goes in the model",
          text: "Their return volume (from qualifying call) × your override rate + software savings versus current setup = their net gain with your bureau.",
        },
        {
          label: "How to frame it",
          text: "\"I put together a quick model based on what you shared — these are illustrative numbers using your volume as the input. Your actual results will depend on your market and execution.\"",
        },
        {
          label: "Why it works",
          text: "A personalized model demonstrates you listened, you did the work, and the economics are concrete — not abstract.",
        },
      ],
      narration:
        "Within two hours of the demo, send a one-page economics model using the volume they shared on the qualifying call. Apply your override rate, factor in the software cost comparison, and frame it explicitly: these are illustrative numbers using your volume as the input — your actual results depend on your market and execution. That framing is compliant and more credible than a generic promise. Personalized models close at meaningfully higher rates than generic follow-up emails.",
    },
    {
      id: "s6b",
      layout: "list",
      eyebrow: "High-intent sequence",
      title: "Touch 5 — the decision follow-up call script",
      bullets: [
        {
          label: "Open warmly, not with pressure",
          text: "\"Hey [Name], it's [You] — just wanted to check in after our call on [day]. Any questions come up since we talked?\"",
        },
        {
          label: "If they have questions",
          text: "Answer them concisely. Then ask: \"Based on what we've covered, does this feel like the right direction?\"",
        },
        {
          label: "If they say they need more time",
          text: "\"Completely understand. Is there a specific question or concern that's holding you back? I want to make sure you have everything you need.\"",
        },
        {
          label: "If they say yes",
          text: "Send the agreement immediately while they are on the phone. Do not let 24 hours pass between a verbal yes and a signed agreement in your inbox.",
        },
      ],
      narration:
        "Open touch five without pressure. Any questions come up since we talked? surfaces real objections the prospect did not raise in the demo because they felt put on the spot. Answer any questions and close with: does this feel like the right direction? If yes, send the agreement while they are still on the phone and confirm receipt before hanging up. If they need more time, surface the specific concern. How you handle the 30 seconds after I need to think about it determines whether this deal closes or stalls.",
    },
    // ── MEDIUM SEQUENCE ───────────────────────────────────────────────────
    {
      id: "s7",
      layout: "list",
      eyebrow: "Medium-interest sequence",
      title: "5-touch nurture over 90 days for medium prospects",
      bullets: [
        {
          label: "Touch 1 — Qualifying call",
          text: "They say \"call me after season\" or \"not ready yet.\" You say: \"Totally understand — can I send you our economics comparison so you have it when you're ready?\" Send that day.",
        },
        {
          label: "Touch 2 — Day 14 value email",
          text: "\"How tax offices are reducing software costs before season\" — a short case study using illustrative numbers.",
        },
        {
          label: "Touch 3 — Day 30 check-in text",
          text: "\"Hi [Name] — hope things are going well. Here whenever you're ready. No pressure.\"",
        },
        {
          label: "Touch 4 — Day 60 webinar invite",
          text: "\"We're running a free webinar on [topic]. Thought of you — I think the economics section would be particularly relevant.\"",
        },
        {
          label: "Touch 5 — Day 90 season-open call",
          text: "\"Season's coming up — let's revisit. Even 15 minutes to walk you through what's changed in our program.\"",
        },
      ],
      narration:
        "Medium-score prospects get a 90-day nurture sequence. When they say not ready yet, respond: totally understand — can I send you our economics comparison so you have it when you are ready? Send it that same day. Day 14: value-first email, something practical. Day 30: brief text check-in, short and human. Day 60: personalized webinar invitation. Day 90: season-prep outreach — the natural trigger for a bureau evaluation. The sequence should feel like a knowledgeable peer staying in touch, not a salesperson working a pipeline.",
    },
    {
      id: "s7b",
      layout: "tip",
      eyebrow: "Medium-interest sequence",
      title: "The Day 14 value email — what to send",
      callout: {
        kind: "quote",
        title: "Subject line and opening for the Day 14 email",
        text: "Subject: \"How tax offices are reducing software costs before next season\" — Body opens: \"Hi [Name], I've been thinking about our conversation and wanted to share something I think you'll find useful regardless of what you decide about your setup...\"",
      },
      narration:
        "The subject line for the Day 14 email should be specific and useful-sounding — not a check-in, not a sales message. How tax offices are reducing software costs before next season gives a cost-conscious preparer a reason to open. The opening line references your prior conversation and immediately positions the email as a resource. The body delivers: one practical insight, a simple illustrative case study, and a soft close offering a conversation whenever they are ready. No urgency, no deadline. The goal is to stay visible as a knowledgeable resource. Conversion happens on its own timeline.",
    },
    // ── GHOST SEQUENCE ────────────────────────────────────────────────────
    {
      id: "s8",
      layout: "list",
      eyebrow: "Ghost re-engage sequence",
      title: "6-touch re-engage for prospects who went quiet",
      bullets: [
        {
          label: "Touch 1 — Immediate call + voicemail",
          text: "\"Hi [Name], I'm [you] at [bureau] — you requested info about our tax software program. I'd love 15 minutes to walk you through the economics. Call or text me at [number].\"",
        },
        {
          label: "Touch 2 — Day 1 text",
          text: "\"Hi [Name]! This is [you] from [bureau]. Left you a voicemail — easier to text? Happy to schedule a quick call.\"",
        },
        {
          label: "Touch 3 — Day 3 email with economics overview",
          text: "Subject: \"The numbers behind [bureau name] — for your review.\" Attach your one-page overview.",
        },
        {
          label: "Touch 4 — Day 7 second call",
          text: "Call again. If no answer, brief second voicemail referencing the email you sent.",
        },
        {
          label: "Touch 5 — Day 14 value email",
          text: "A genuinely useful industry note — an IRS update, a software-comparison insight, something useful regardless of whether they join.",
        },
        {
          label: "Touch 6 — Day 21 breakup text",
          text: "\"Hey [Name] — I'll stop reaching out. If you ever want to explore a better setup for your tax business, we're here. Just reply.\"",
        },
      ],
      narration:
        "The ghost sequence: prospects who filled out your form and disappeared. They often got busy or were browsing before they were quite ready. Touch one: immediate call and voicemail. Touch two: same-day text offering text as a lower-commitment alternative. Touch three at day three: one-page economics overview email. Touch four at day seven: second call. Touch five at day 14: genuinely useful value email. Touch six at day 21: the breakup message. The breakup often generates the highest response in the sequence — people who have been meaning to reply finally do.",
    },
    {
      id: "s9",
      layout: "tip",
      eyebrow: "Ghost re-engage sequence",
      title: "The breakup text — word for word",
      callout: {
        kind: "quote",
        title: "Day 21 — send this to every ghost",
        text: "\"Hey [Name] — I'll stop reaching out. If you ever want to explore a better setup for your tax business, we're here. Just reply and I'll pick right back up. — [Your Name]\"",
      },
      narration:
        "The breakup message resolves the tension a ghosted prospect feels — they know they should respond and keep meaning to. Give them permission to engage now or move on. Keep the tone warm and non-judgmental: I will stop reaching out, we are here whenever you are ready, just reply. That phrasing leaves the door open permanently while releasing the pressure keeping them silent. It also lets you move them to inactive in your CRM with a clear conscience and redirect energy to live pipeline.",
    },
    {
      id: "s9b",
      layout: "point",
      eyebrow: "Ghost re-engage sequence",
      title: "The Day 3 email — the economics overview",
      lead: "The Day 3 email in the ghost sequence is the first substantive asset you send. It needs to explain the economics clearly enough to answer the question they were curious about when they filled out the form.",
      bullets: [
        {
          label: "What to include",
          text: "A one-page overview of how your bureau program works — software, bank products, support, and fee structure described clearly using illustrative examples.",
        },
        {
          label: "What not to include",
          text: "Do not include specific income projections, guaranteed return counts, or any figure you have not had counsel review as compliant with earnings-claim rules.",
        },
        {
          label: "One call to action",
          text: "End with a single, low-pressure invite: \"Happy to walk through any of this in 10 minutes if you have questions.\"",
        },
      ],
      narration:
        "The Day 3 email is the first real asset you send to a ghost. It should be your one-page economics overview: what software you provide, what bank-product program you offer, what ongoing support looks like, and how your fee structure compares at different return volumes. Use illustrative numbers throughout and label them as such — same earnings-claim discipline as in your ads. End with a single, low-pressure invitation to talk for 10 minutes. The goal is to give the prospect enough information to either re-engage or self-disqualify. Both are valuable outcomes.",
    },
    // ── OBJECTION SCRIPTS ─────────────────────────────────────────────────
    {
      id: "s10",
      layout: "list",
      eyebrow: "Objection handling",
      title: "The 4 most common bureau objections — and the response",
      bullets: [
        {
          label: "\"I'm locked into a franchise until [date]\"",
          text: "\"Totally understand. Let's calendar a reminder 2 months before that date. Can I send you the economics comparison so you have numbers to think about in the meantime?\"",
        },
        {
          label: "\"What does it cost?\"",
          text: "\"Our fee structure depends on your volume. I can give you an exact number in a 15-minute call — want to do that?\"",
        },
        {
          label: "\"I don't want to switch software mid-season\"",
          text: "\"Completely valid. Most offices come to us in the off-season. Let's plan for [month], and I'll make sure setup is done before your first return. Sound good?\"",
        },
        {
          label: "\"I'm happy where I am\"",
          text: "\"Great to hear. Most preparers I talk to who say that haven't done a side-by-side comparison recently. Would you be open to a 10-minute look just to confirm the numbers still add up?\"",
        },
      ],
      narration:
        "Four objections. First: locked into a franchise. Agree and plant a seed — calendar reminder two months before that date, and can I send you the economics comparison now? Second: what does it cost? Never quote on a cold call. Bridge: I can give you an exact number in 15 minutes — want to do that? Third: I do not want to switch software mid-season. Validate, agree on an off-season month, promise setup before their first return. Fourth: I am happy where I am. Usually a soft deflection — invite a low-stakes comparison, not a challenge to their current situation.",
    },
    {
      id: "s10b",
      layout: "tip",
      eyebrow: "Objection handling",
      title: "A fifth objection: \"I need to talk to my spouse / partner first\"",
      callout: {
        kind: "tip",
        title: "Include the decision-maker in the demo, not the follow-up",
        text: "When a prospect mentions a partner or spouse in the decision, invite them to the demo — not to a separate call later. \"Would it be easier to include them in our 15-minute call so you both have the same information at the same time?\"",
      },
      narration:
        "A fifth objection: I need to run this by my partner or spouse first. This is legitimate — many tax-prep operations are family businesses. Handle it by inviting the decision-maker in rather than around: would it be easier to include them in our 15-minute call so you both have the same information at the same time? That phrasing respects the relationship, creates efficiency — you present once rather than having your prospect relay it secondhand — and eliminates the friction of a partner who has never heard your name and is naturally skeptical.",
    },
    {
      id: "s11",
      layout: "point",
      eyebrow: "Objection handling",
      title: "The psychology of a good objection response",
      lead: "Effective objection handling agrees first, then redirects. It never argues against the prospect's current situation.",
      bullets: [
        {
          label: "Validate before pivoting",
          text: "\"Totally understand\" and \"Completely valid\" are not just politeness — they signal that you are not a pushy salesperson.",
        },
        {
          label: "Bridge to a low-stakes next step",
          text: "Every response ends with an offer the prospect can say yes to without much commitment — a comparison to review, a 10-minute call, a future calendar reminder.",
        },
        {
          label: "Never argue the current setup",
          text: "Criticizing a prospect's franchise or current bureau plants doubt — in your credibility, not their current provider.",
        },
      ],
      narration:
        "All four responses share the same structure: validate first, never argue, end with a specific low-stakes next step. When a prospect hears their objection is understandable, defensiveness drops immediately — and they are more receptive to a reframe. The bridge is always small: send a comparison, schedule a future check-in, have a brief call. Each small yes builds forward momentum without triggering the resistance a big ask creates. Never criticize their current franchise or bureau directly — it reads as insecure and creates sympathy for the competitor rather than curiosity about you.",
    },
    {
      id: "s11b",
      layout: "list",
      eyebrow: "Objection handling",
      title: "Turning objections into booked demos — a pattern",
      bullets: [
        {
          label: "The pattern every effective response follows",
          text: "Validate → Agree on timeline or constraint → Deliver one piece of value → Propose a specific low-commitment next step.",
        },
        {
          label: "The word that opens doors",
          text: "\"Totally understand\" before any response lowers defensive walls immediately. Use it for every objection, every time.",
        },
        {
          label: "The close that works without pressure",
          text: "\"Would a 10-minute call to answer that specific question make sense?\" — a small ask that is easy to accept.",
        },
      ],
      narration:
        "The pattern behind all five responses applies to any objection you encounter. Four beats: first, validate — totally understand or completely valid before any redirect. Second, agree on the timeline or constraint — never fight it. Third, deliver one piece of value while acknowledging the constraint: send a comparison, schedule a reminder, share a useful resource. Fourth, propose a specific low-commitment next step — a 10-minute call, a document to review. The smaller the ask, the easier the yes. Each small yes builds momentum toward the demo and eventually toward the signed agreement.",
    },
    // ── COMPLIANCE ────────────────────────────────────────────────────────
    {
      id: "s12",
      layout: "tip",
      eyebrow: "Compliance",
      title: "Earnings claims follow you beyond the ad",
      callout: {
        kind: "warn",
        title: "FTC and state law apply to calls, texts, and emails too",
        text: "Do not promise specific net income, return volume, or profit margins in any outreach. Present your economics model as a working example using the prospect's own numbers and clearly label it as illustrative. The regulated-earnings-claims obligation does not stop at your Facebook ad.",
      },
      narration:
        "This compliance obligation extends through every call, text, and email — not just your Facebook ads. Do not promise specific income, net return per return filed, or guaranteed margin improvement. Present the economics comparison as a working model using the prospect's own numbers, labeled explicitly as illustrative: here is what a setup like yours might look like — your actual results depend on your market, your volume, and how you run your office. Generic income promises read as hype. A personalized model labeled as illustrative reads as professional.",
    },
    // ── COMMON MISTAKE ────────────────────────────────────────────────────
    {
      id: "s13",
      layout: "point",
      eyebrow: "Common mistake",
      title: "Giving up after the demo",
      lead: "Most bureaus stop following up too early — the prospect who got persistent, value-added follow-up often signs; the one who got silence often goes elsewhere.",
      bullets: [
        { label: "The default trap", text: "One post-demo email, no reply, move on. The deal goes to a bureau that kept showing up with something useful." },
        { label: "The winning sequence", text: "Day 2: personalized economics model. Day 7: a case study. Day 14: brief check-in call. That cadence wins." },
      ],
      narration:
        "The most common mistake is giving up after the demo. One follow-up email, no response, move on. But the prospect who said maybe next season is still evaluating — comparing you to two other bureaus, waiting to see who follows up with something useful. The bureau that sends a personalized economics model two days post-demo, a case study at day seven, and a check-in call at day 14 wins this prospect far more often. Persistence with value is the operating principle.",
    },
    {
      id: "s13b",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Following up without a reason to reach out",
      callout: {
        kind: "warn",
        title: "\"Just checking in\" is the weakest message in your sequence",
        text: "\"Just wanted to follow up\" signals that you have nothing new to offer — which erodes the relationship rather than building it. Every touchpoint must name a specific reason for the contact.",
      },
      narration:
        "Just checking in is the most damaging phrase in your follow-up sequence — it signals you have nothing new to offer. Compare that to: I was reviewing our conversation and built a quick illustrative model using your numbers — wanted to send it along whether or not the timing is right. That message names a specific reason, delivers a specific thing, and positions outreach as service rather than pressure. Before every planned follow-up, ask: does this give the prospect something they did not have before? If not, rewrite it.",
    },
    // ── YOUR TURN ─────────────────────────────────────────────────────────
    {
      id: "s14",
      layout: "action",
      eyebrow: "Your turn",
      title: "Write your 6-touch high-intent sequence word for word",
      callout: {
        kind: "action",
        title: "Do this before next recruiting season opens",
        text: "Write out all 6 touches for your HIGH prospect sequence using your bureau's actual name, program economics (framed as illustrative), and tone. Script the qualifying call, confirmation email, reminder text, post-demo model, decision call, and final follow-up.",
      },
      narration:
        "Do not copy-paste the generic scripts with placeholder brackets and leave it there. Write all six touches word for word, with your bureau's name, your program economics framed as illustrative, and your own voice — the qualifying call, confirmation email, reminder text, post-demo economics email, decision follow-up call, and final follow-up. Put them somewhere you will actually use: email drafts, CRM templates, or a phone notes file. A sequence you have written down is far more likely to get used. Write it this week.",
    },
    {
      id: "s15",
      layout: "action",
      eyebrow: "Your turn",
      title: "Build your objection script card",
      callout: {
        kind: "action",
        title: "Four objections, four responses",
        text: "Write your personal version of each response: locked-in prospect, cost question, timing objection, happy-where-I-am deflection. Keep it in your phone notes or taped near your desk so it is available on every recruiting call.",
      },
      narration:
        "Second action: build your objection script card. Write your own version of each of the four responses — locked-in prospect, cost question bridge, timing objection, happy-where-I-am reframe — in the words you would actually say on a phone call. Not formal, not scripted-sounding. Keep this card in your phone notes or printed near your desk so it is in front of you every recruiting call. The goal is not to recite it — it is to internalize the structure so your response is confident and consistent rather than improvised when an objection lands.",
    },
    // ── RECAP ─────────────────────────────────────────────────────────────
    {
      id: "s16",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Bureau recruiting takes 4 to 10 touchpoints — systematic persistence with value beats enthusiasm that fades after two calls." },
        { text: "High-intent prospects get a 6-touch sequence: qualify, confirm, remind, post-demo economics model, decision call, final follow-up." },
        { text: "Medium-interest prospects get a 90-day nurture sequence — 5 touches that keep you visible and useful until they are ready." },
        { text: "Ghosted prospects get a 21-day 6-touch re-engage sequence ending with a breakup message — which generates surprisingly high response rates." },
        { text: "Earnings-claim obligations apply to every touchpoint, not just your Facebook ad. Keep all figures framed as illustrative." },
      ],
      subtitle: "Up next: Measure Your Pipeline and Scale What Works",
      narration:
        "Bureau recruiting is a multi-touch game and the bureaus that win run systematic sequences with value at every step. Your high-intent sequence: six touches. Medium-interest: five touches over 90 days. Ghost re-engage: six touches ending with the breakup message. Your objection scripts cover the four most common pushbacks. And earnings-claim compliance follows you through every email, text, and call — all figures framed as illustrative using the prospect's own numbers. In Lesson 5 we build the measurement system: six metrics, funnel diagnostics, and the signals that tell you it is time to scale.",
    },
  ],
};
