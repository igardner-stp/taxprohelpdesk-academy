// =============================================================================
// Interactive lesson definition — Marketing Track SM1.3
// "Capture, Qualify, and Route Every Prospect"
//
// Authoring source for the narrated interactive experience.
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Capture, Qualify, and Route Every Prospect",
  trackId: "bureau-mktg",
  key: "SM1.3",

  slides: [
    // ── COVER ──────────────────────────────────────────────────────────────
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Marketing Track · Service Bureau Lead Generation",
      title: "Capture, Qualify, and Route Every Prospect",
      subtitle: "Lesson 3 · Narrated walkthrough",
      narration:
        "Welcome to Lesson 3. Your ad is running and the form fills are coming in. Most bureaus lose the game right here — not because they cannot find prospects, but because they lack a system to capture them fast, qualify them consistently, and route them before the window closes. In this lesson you will build the three-step capture system, learn the three qualifying questions that screen prospects in under five minutes, set up a five-stage CRM pipeline, and apply a lead-scoring rubric that protects your most valuable resource: your demo time.",
    },
    // ── WHY SPEED MATTERS ─────────────────────────────────────────────────
    {
      id: "s2",
      layout: "point",
      eyebrow: "Why it matters",
      title: "Speed-to-lead wins even in B2B bureau recruiting",
      lead: "Bureau prospects are evaluating multiple options. The first bureau to have a real conversation owns the frame for every conversation that follows.",
      bullets: [
        {
          label: "The 30-minute window",
          text: "A prospect is most engaged in the first 30 minutes after submitting a form. Waiting until tomorrow cuts your connect rate dramatically.",
        },
        {
          label: "B2B with consumer habits",
          text: "Tax preparers use Facebook like consumers — they scroll quickly and move on. Strike while interest is live.",
        },
        {
          label: "First-mover advantage",
          text: "The bureau that gets there first sets the comparison frame. Everyone else is reacting to your offer.",
        },
      ],
      narration:
        "Bureau recruiting has longer sales cycles than consumer lead gen, but speed-to-lead still matters. When a preparer fills out your form, they are at peak interest — curious enough to stop scrolling and give you their contact info. That curiosity has a shelf life. Reach them within 30 minutes and they remember exactly what they responded to. Call the next morning and they have moved on, possibly filled out a competitor's form, and now have to reconstruct why they responded at all. Every hour you wait decreases connect rate and cools the first conversation.",
    },
    {
      id: "s2b",
      layout: "list",
      eyebrow: "Why it matters",
      title: "The window of interest: what happens hour by hour",
      bullets: [
        {
          label: "0 to 30 minutes",
          text: "The prospect is still thinking about the ad. Interest is live. Connect rate is highest in this window.",
        },
        {
          label: "30 minutes to 4 hours",
          text: "They have moved on to their day. Still reachable with a good voicemail or text — interest is warm, not hot.",
        },
        {
          label: "4 to 24 hours",
          text: "Interest has cooled. They have seen other things. Your call now feels more like an interruption than a continuation of their curiosity.",
        },
        {
          label: "After 24 hours",
          text: "Treat this prospect as a cold call, not a warm follow-up. The form fill is history — restart with fresh context.",
        },
      ],
      narration:
        "In the first 30 minutes after a form fill, the prospect is still mentally in your ad — curious, available, signaling interest. Your call arrives as a natural continuation of that curiosity. From 30 minutes to four hours, the interest is warm — a voicemail and quick text can bring them back. From four to 24 hours, interest has cooled; your name is one item in a busy mental queue. After 24 hours, you are effectively cold-calling. Know this window and build your system around it.",
    },
    {
      id: "s3",
      layout: "tip",
      eyebrow: "Why it matters",
      title: "The real cost of slow follow-up",
      callout: {
        kind: "stat",
        title: "Speed and connect rate are directly correlated",
        text: "B2B lead-gen research consistently shows that contacting a prospect within 5 minutes versus 30 minutes can triple the live-answer rate. After 24 hours, many leads are effectively cold.",
      },
      narration:
        "B2B lead-gen research is consistent on this: the gap between a 5-minute follow-up and a 30-minute follow-up is significant, and the gap between 30 minutes and 24 hours is the difference between a warm conversation and a cold call to someone who barely remembers your ad. For a bureau spending real money on Facebook ads, a slow follow-up system does not just hurt conversion — it burns a meaningful fraction of your ad spend before a single conversation happens. Build the system first. Scale the ad budget after.",
    },
    {
      id: "s3b",
      layout: "tip",
      eyebrow: "Why it matters",
      title: "Speed-to-lead is a competitive advantage — not just a courtesy",
      callout: {
        kind: "stat",
        title: "First mover owns the comparison frame",
        text: "The bureau that reaches a prospect first sets the terms of the economics conversation. Every bureau that calls second is responding to the first bureau's offer — not presenting their own.",
      },
      narration:
        "Speed-to-lead also creates a competitive advantage. The bureau that reaches a newly-interested preparer first owns the comparison frame for the entire evaluation. Your offer becomes the anchor every subsequent bureau is compared against. The bureau that calls second is reacting to your terms, not presenting their own. This dynamic is especially significant because prospects frequently respond to multiple ads. Being first is not just about a warmer call — it is about framing the evaluation from a position of advantage.",
    },
    // ── STEP 1: NOTIFICATION ──────────────────────────────────────────────
    {
      id: "s4",
      layout: "list",
      eyebrow: "The capture system",
      title: "Step 1: Get leads out of Facebook immediately",
      bullets: [
        {
          label: "Option A — Zapier",
          text: "Facebook Lead Ads → Zapier → phone notification (SMS or Slack) + CRM entry. Real-time, automated.",
        },
        {
          label: "Option B — Meta Lead Center",
          text: "Check Business Manager every morning. Download CSV, enter into CRM before doing anything else.",
        },
        {
          label: "Option C — CRM native integration",
          text: "HubSpot, GoHighLevel, and Pipedrive have native Facebook Lead Ads integrations — use one if available.",
        },
        {
          label: "The standard",
          text: "Real-time notification is the goal. Manual morning check is the floor — not the ceiling.",
        },
      ],
      narration:
        "Step one: get the lead out of Facebook and into your hands immediately. Facebook stores submissions in Lead Center but does not notify you — you have to actively retrieve them. The best setup is Zapier: connect your Facebook Lead Ads to a phone notification the moment a form fills, and push the lead into a Google Sheet or CRM simultaneously. No Zapier? Check Lead Center every morning first thing and download new submissions. Do not let leads sit in Facebook for 48 hours.",
    },
    {
      id: "s4b",
      layout: "tip",
      eyebrow: "The capture system",
      title: "How to set up real-time lead notification in Zapier",
      callout: {
        kind: "tip",
        title: "The Zapier workflow for instant lead alerts",
        text: "Trigger: New Facebook Lead Ad submission → Action 1: Send SMS to your phone with lead name and phone number → Action 2: Add row to Google Sheet CRM → Action 3: Send the auto-response email to the lead.",
      },
      narration:
        "The Zapier workflow has three actions. First: send an SMS to your phone with the lead's first name and phone number — the notification that gets you reaching for your phone. Second: add a new row to your Google Sheet CRM with full contact details and timestamp. Third: send the auto-response email to the lead. All three fire within seconds of the form filling. This workflow takes a few minutes to set up and pays for itself the first time it gets you to a hot lead before a competitor. Zapier's free tier typically handles early bureau recruiting campaign volume.",
    },
    // ── STEP 2: AUTO-EMAIL ────────────────────────────────────────────────
    {
      id: "s5",
      layout: "point",
      eyebrow: "The capture system",
      title: "Step 2: The instant auto-response email",
      lead: "A pre-written email fires within 5 minutes of a form fill. It bridges the gap between submission and your phone call — and holds the conversation open.",
      bullets: [
        {
          label: "Fires automatically",
          text: "Set up via Zapier, your CRM, or an email automation tool triggered by a new lead entry.",
        },
        {
          label: "What it does",
          text: "Confirms receipt, promises a one-hour callback, and links the founder video so they can self-educate before the call.",
        },
        {
          label: "What it does not do",
          text: "It does not pitch your bureau, make earnings claims, or attach a brochure. One simple human message.",
        },
      ],
      narration:
        "The moment a form fills, a pre-written email fires automatically. Its one job is to bridge the gap between submission and your phone call. It confirms you received their interest, promises a callback within the hour, and links your founder video so they can self-educate in the meantime. It does not pitch. No attachments. No income claims. Just a warm, personal-feeling message that holds the door open and signals that a real conversation is coming. Set it up through Zapier, your CRM's email automation, or a tool like ActiveCampaign triggered by a new lead tag.",
    },
    {
      id: "s6",
      layout: "tip",
      eyebrow: "Script",
      title: "The instant auto-response email — word for word",
      callout: {
        kind: "quote",
        title: "Copy this exactly",
        text: "\"Hi [First Name], thanks for your interest in [Bureau Name]. I'll be reaching out within the hour to schedule a quick 15-minute call. In the meantime, here's a short video explaining how our program works: [link]. Looking forward to connecting. — [Your Name]\"",
      },
      narration:
        "Notice what this script does not do. No earnings claims. No brochure attachment. No hoops before speaking with you. It confirms receipt, sets a one-hour callback expectation, and links the founder video. The video link does two things: it lets prospects self-educate so you skip the first 10 minutes of explaining what a service bureau is, and it filters the least interested — the ones who watch and realize this is not for them will not pick up when you call. Better to discover that before spending time on a qualifying conversation.",
    },
    {
      id: "s6b",
      layout: "tip",
      eyebrow: "The capture system",
      title: "The voicemail script — short, specific, non-pressuring",
      callout: {
        kind: "quote",
        title: "Leave this voicemail when no one answers",
        text: "\"Hi [Name], this is [Your Name] from [Bureau Name] — you recently requested info about our tax software and support program. I'd love to take 15 minutes to walk you through how the economics work. Call or text me at [number] any time. Thanks!\"",
      },
      narration:
        "Keep your voicemail under 20 seconds. Name the specific thing they requested — information about your program — which reminds them why they would recognize your name and confirms you are responding to their inquiry, not making a cold call. No feature lists, no income claims — just your name, your bureau, what they requested, and the offer to walk through the economics in 15 minutes. Speak your number slowly. Then immediately text them. Many people will text back before they ever return a voicemail.",
    },
    // ── STEP 3: PHONE CALL ────────────────────────────────────────────────
    {
      id: "s7",
      layout: "point",
      eyebrow: "The capture system",
      title: "Step 3: Phone or text within 30 minutes",
      lead: "The qualifying call is the event that separates real prospects from form-fillers. Everything before it is infrastructure — everything after it is relationship.",
      bullets: [
        {
          label: "Call first, text if no answer",
          text: "Lead with a call. If no answer, immediately follow up with a text that references your voicemail.",
        },
        {
          label: "What this call is not",
          text: "You are not pitching your bureau on this call. You are qualifying the prospect with three specific questions.",
        },
        {
          label: "Time discipline",
          text: "Keep the qualifying call to 10 minutes or less. You are screening, not selling. The demo is where you sell.",
        },
      ],
      narration:
        "Within 30 minutes, call that number. If they answer, you are in the qualifying conversation. If not, leave a brief voicemail and immediately text: I left you a quick voicemail about your tax software inquiry — easier to text? Many people text back before returning a voicemail. On the qualifying call, ask three specific questions and decide where this prospect goes in your pipeline. You are not pitching — that happens in the demo. This is the 10-minute screen that protects your demo hours.",
    },
    // ── 3 QUALIFYING QUESTIONS ────────────────────────────────────────────
    {
      id: "s8",
      layout: "list",
      eyebrow: "The qualifying call",
      title: "The 3-question qualifying script",
      bullets: [
        {
          label: "Question 1 — Experience and volume",
          text: "\"Tell me about your tax prep experience — how long have you been filing, and roughly how many returns do you do per season?\"",
        },
        {
          label: "Question 2 — Competitive context",
          text: "\"Are you currently under a franchise agreement or with another bureau? If so, when does that expire?\"",
        },
        {
          label: "Question 3 — Buying motive",
          text: "\"What's your main frustration with your current setup?\" This answer tells you exactly what to lead with in your demo.",
        },
      ],
      narration:
        "Three questions — keep them by your phone. Question one: how long have you been filing and how many returns per season? This gives you volume — your most important qualifier. A 300-return preparer is a very different conversation than someone who filed 25 for the first time. Question two: are you currently with a franchise or bureau, and when does that expire? This reveals your competitive context and timeline. Question three — most important: what is your main frustration with your current setup? Their answer is your demo roadmap.",
    },
    {
      id: "s8b",
      layout: "point",
      eyebrow: "The qualifying call",
      title: "What to do with the answers — on the call, in real time",
      lead: "The qualifying call is not just a data collection exercise — it's the beginning of a personalized relationship. What you do with the answers in the moment matters.",
      bullets: [
        {
          label: "Reflect volume back",
          text: "If they say 300 returns: \"That's a solid book — you're exactly the profile we work best with.\" If they say 50: \"Sounds like you're still building — we can talk about that trajectory.\"",
        },
        {
          label: "Handle the locked-in situation immediately",
          text: "If they're in a franchise: \"When does that expire?\" Then calendar a follow-up reminder before you hang up.",
        },
        {
          label: "Write down the frustration verbatim",
          text: "Question 3's answer is the first line of your demo. Write it exactly as they said it.",
        },
      ],
      narration:
        "Use the answers in real time. When a prospect shares their volume, respond authentically — a high-volume preparer wants to know you see their book as a real business. If they are in a franchise, ask when it expires and offer a calendar reminder two months before that date — create the forward commitment before you hang up. When they name their main frustration, write it down verbatim. Their exact language is the language that will resonate most in your demo.",
    },
    {
      id: "s9",
      layout: "tip",
      eyebrow: "The qualifying call",
      title: "Question 3 is your demo roadmap",
      callout: {
        kind: "tip",
        title: "Their frustration is your pitch",
        text: "Whatever they name as their main frustration becomes the opening of your demo. Write it down during the qualifying call and reference it explicitly: \"You mentioned the royalty structure was your biggest concern — let's start there.\"",
      },
      narration:
        "Question three is worth more than the other two combined. When a prospect names their main frustration, they are pre-writing your demo. Write down their exact words. When you open the demo, reflect it back: you mentioned the royalty structure was your biggest concern — let's start there. That one move demonstrates you listened, you are organized, and this conversation is about their needs rather than your pitch. Prospects who feel heard close faster and stay longer. Write it down verbatim during the qualifying call — do not trust memory.",
    },
    // ── CRM PIPELINE ──────────────────────────────────────────────────────
    {
      id: "s10",
      layout: "list",
      eyebrow: "The CRM pipeline",
      title: "Five stages — work every prospect through here",
      bullets: [
        {
          label: "Stage 1 — Lead",
          text: "Form filled. Contact info captured. Auto-email sent. Ready to call.",
        },
        {
          label: "Stage 2 — Qualified",
          text: "Three questions answered. Fits the profile. Move to Qualified within 24 hours of form fill.",
        },
        {
          label: "Stage 3 — Demo Scheduled",
          text: "Calendar invite accepted. Prep guide sent. Show rate becomes your next variable.",
        },
        {
          label: "Stage 4 — Demo Done",
          text: "Economics presentation delivered. Follow-up sequence initiated immediately.",
        },
        {
          label: "Stage 5 — Signed / Activated",
          text: "Agreement signed moves to Signed. Only moves to Activated when they file their first return.",
        },
      ],
      narration:
        "Your CRM pipeline is where every prospect lives at a specific stage with a clear next step. Five stages: Lead — form filled, not yet spoken; Qualified — passed the three-question screen; Demo Scheduled; Demo Done; and Signed or Activated — keep those distinct, because only an office that files its first return moves to Activated. Google Sheets works as a starting CRM. Moving every prospect to the correct stage after every interaction is the discipline that separates a bureau that scales from one that loops.",
    },
    {
      id: "s10b",
      layout: "tip",
      eyebrow: "The CRM pipeline",
      title: "Google Sheets CRM — the minimum viable pipeline",
      callout: {
        kind: "tip",
        title: "You can run a functional recruiting pipeline in a spreadsheet",
        text: "Columns: Name | Phone | Email | Source (FB Lead Ad / Webinar / Referral) | Stage | Score | Last Contact | Next Step | Notes. One row per prospect. Update after every interaction.",
      },
      narration:
        "Your minimum viable pipeline in Google Sheets: columns for Name, Phone, Email, Source, Stage, Score, Last Contact, Next Step, and Notes. One row per prospect, updated after every interaction. The Notes column is where you write the answer to question three — the prospect's main frustration in their own words. Before every follow-up call, that column reminds you exactly where you left off. This single sheet handles your pipeline until volume justifies a paid CRM. Build it today — do not delay because you are waiting for the perfect tool.",
    },
    {
      id: "s11",
      layout: "point",
      eyebrow: "The CRM pipeline",
      title: "What \"next step\" looks like at every stage",
      lead: "A CRM without a next-step discipline is just a list. Every stage needs a defined action that moves the prospect forward.",
      bullets: [
        {
          label: "Lead → Qualified",
          text: "Next step: call within 30 minutes. If not reached, text + Day 1 follow-up email.",
        },
        {
          label: "Qualified → Demo Scheduled",
          text: "Next step: book the demo on the qualifying call — or send a direct calendar link within 2 hours.",
        },
        {
          label: "Demo Done → Decision",
          text: "Next step: send the customized economics model within 2 hours. Follow-up call in 2 to 3 days.",
        },
      ],
      narration:
        "Every stage needs a defined next step with a timeline. At Lead: call within 30 minutes — if not reached, text and follow-up email same day. At Qualified: book the demo on the qualifying call, or send a calendar link within two hours. At Demo Done: send the economics model within two hours and schedule a decision follow-up call for two to three days out. Without a clear next step after every interaction, leads go cold sitting at a stage with nobody moving them. The pipeline is not a storage system. It is a workflow.",
    },
    {
      id: "s11b",
      layout: "point",
      eyebrow: "The CRM pipeline",
      title: "Tracking source in your CRM reveals your best channel",
      lead: "Tag every prospect with their source when they enter the pipeline. By season's end, you'll know which channel produces the highest-quality leads — not just the most leads.",
      bullets: [
        {
          label: "Tag every lead",
          text: "Facebook Lead Ad, webinar registrant, referral, inbound call, or organic — capture the source in your CRM at entry.",
        },
        {
          label: "Track quality by source",
          text: "At season's end, compare lead-to-qualified rate and demo-to-signed rate by source. High volume that converts poorly is less valuable than low volume that converts well.",
        },
        {
          label: "Reallocate budget accordingly",
          text: "Next season, put more budget behind the source with the best cost per activated office.",
        },
      ],
      narration:
        "Most bureaus skip source tagging until they have wasted a season without the data. Tag every prospect — Facebook Lead Ad, webinar registrant, referral, organic inbound — when they enter the pipeline. At season's end, filter by source and compare conversion rates at each stage. You will almost certainly find one source produces significantly better quality than the others. That is the source you invest more in next season. Without source tracking, you default to whatever felt good in the moment rather than what the numbers actually show.",
    },
    // ── LEAD SCORING ──────────────────────────────────────────────────────
    {
      id: "s12",
      layout: "list",
      eyebrow: "Lead scoring",
      title: "The scoring rubric: where to spend your demo hours",
      bullets: [
        {
          label: "HIGH — book demo immediately",
          text: "200 or more returns per season, has an EFIN, clear frustration with current setup, answered the qualifying call.",
        },
        {
          label: "MEDIUM — educate and nurture",
          text: "Under 200 returns, building their client base, engaged and coachable, interested but not ready to decide now.",
        },
        {
          label: "LOW — webinar invite only",
          text: "Under 50 returns, no EFIN or unclear timeline, vague interest, did not answer qualifying questions clearly.",
        },
      ],
      narration:
        "After every qualifying call, every prospect gets a score. High: 200 or more returns, has an EFIN, specific frustration with their current setup, engaged on the qualifying call — book them on your demo calendar this week. Medium: building their book, interested but not ready to decide in the next 30 days — these go into a structured nurture sequence covered in Lesson 4. Low: under 50 returns, no EFIN or unclear timeline, vague or noncommittal on the call — webinar invite only. Do not schedule demos for low-score prospects. The return on that demo hour is too low.",
    },
    {
      id: "s12b",
      layout: "list",
      eyebrow: "Lead scoring",
      title: "What each score tier looks like in a real qualifying call",
      bullets: [
        {
          label: "HIGH — the call that books a demo immediately",
          text: "\"I filed 280 returns last season with [franchise]. The royalty structure is killing my margin and I've been thinking about switching for two years. I've got my EFIN, I'm in [state].\"",
        },
        {
          label: "MEDIUM — the call that goes to nurture",
          text: "\"I filed about 90 returns last season. I'd like to grow. I'm not with a bureau — I use [retail software]. I'm curious about the bank-product side but not ready to change software right now.\"",
        },
        {
          label: "LOW — the call that goes to webinar only",
          text: "\"I'm thinking about doing taxes. I haven't filed any yet. I don't have an EFIN. I'm just exploring options.\"",
        },
      ],
      narration:
        "A high-score prospect names volume, has an EFIN, articulates a specific frustration, and is in your service area. Multiple clear signals. A medium-score prospect has some volume, is curious, but is not ready to decide this week — a not yet, not a no. A low-score prospect is pre-industry: no returns filed, no EFIN, exploring with no defined timeline. They are worth a webinar invitation because some become real prospects in 12 to 24 months. They are not worth a demo slot today. In most cases you can score a prospect within the first 90 seconds of the qualifying conversation.",
    },
    // ── ROUTING ───────────────────────────────────────────────────────────
    {
      id: "s13",
      layout: "tip",
      eyebrow: "Routing",
      title: "Route immediately — one action per tier, every time",
      callout: {
        kind: "tip",
        title: "Routing must be non-negotiable",
        text: "HIGH → your personal calendar or top recruiter's calendar this week. MEDIUM → automated 30-day nurture (3 emails on bureau economics + a webinar invite). LOW → webinar invite only. Do not mix tiers.",
      },
      narration:
        "Routing is the step most bureaus skip — and where pipelines turn to chaos. Once you score a prospect, routing happens immediately and consistently. High: book the demo before you hang up, or follow up with a direct calendar link within 24 hours. Medium: enter a 30-day automated email nurture — three emails on bureau economics, a case study, and a webinar invitation. Low: a single webinar invitation and nothing else until they re-engage on their own. Guard your demo hours as your most valuable resource. Spending them on low-score prospects is the most expensive mistake in bureau recruiting.",
    },
    // ── COMMON MISTAKE ────────────────────────────────────────────────────
    {
      id: "s14",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Qualifying too loosely is a season-long cost",
      callout: {
        kind: "warn",
        title: "One bad demo costs more than the time spent",
        text: "A 20-return preparer with no EFIN who makes it to your demo takes 6+ hours of onboarding and support time and files almost nothing. A single qualifying question asked on every call would have prevented it.",
      },
      narration:
        "Qualifying too loosely is the mistake I see most often. You get 100 form fills, book demos with everyone who picks up the phone, and a significant fraction are preparers who filed 15 to 25 returns with no EFIN and no clear timeline. Some sign. Season arrives. They file 12 returns, call support three times, and generate almost no override revenue. Meanwhile, the 300-return preparer frustrated with her franchise got routed to voicemail because your calendar was full of low-score demos. One question asked consistently would have changed that.",
    },
    // ── YOUR TURN ─────────────────────────────────────────────────────────
    {
      id: "s15",
      layout: "action",
      eyebrow: "Your turn",
      title: "Build your CRM pipeline and qualifying script today",
      callout: {
        kind: "action",
        title: "Two things to build right now",
        text: "1. Create your 5-stage CRM pipeline — Google Sheets works. Columns: Name, Phone, Email, Stage, Score, Last Contact, Next Step. 2. Save the 3 qualifying questions as a phone note. Every qualifying call, every time.",
      },
      narration:
        "Two actions. First, build your five-stage CRM pipeline right now — in your CRM tool or Google Sheets with columns for Name, Phone, Email, Stage, Score, Last Contact, and Next Step. Second, save the three qualifying questions as a phone note word for word: volume and experience; current bureau or franchise and expiration; main frustration with their current setup. That note is your script for every qualifying call — in your hand, ready, so you never miss a question.",
    },
    // ── RECAP ─────────────────────────────────────────────────────────────
    {
      id: "s16",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Contact every new prospect within 30 minutes during business hours — same-day is the minimum floor, not the target." },
        { text: "Three-step capture: CRM notification via Zapier, auto-response email within 5 minutes, phone call within 30 minutes." },
        { text: "The qualifying call has three questions: volume and experience, competitive context, and buying motive. Ask all three every time." },
        { text: "Score every prospect High, Medium, or Low — then route immediately: demo this week, nurture sequence, or webinar only." },
        { text: "Qualifying too loosely fills your demo calendar with the wrong prospects and leaves your best opportunities waiting." },
      ],
      subtitle: "Up next: Contact Strategy: Convert Prospects to Active Offices",
      narration:
        "Contact speed wins — within 30 minutes during business hours, same-day at minimum. Your three-step capture system: notification via Zapier, auto-email within five minutes, phone call within 30. The qualifying call has three questions — volume, competitive context, and buying motive. Ask all three every time and write the answer to question three verbatim, because it is your demo roadmap. Score every prospect immediately and route without exception. Protect your demo hours by qualifying hard. In Lesson 4 we go deep on the contact strategy that converts prospects to signed and activated offices.",
    },
  ],
};
