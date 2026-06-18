// =============================================================================
// Interactive lesson definition — ERO Lesson 2.3 "Train Fast, Train Consistently"
//
// Authoring source for the narrated interactive experience. The generator
// (scripts/generate-lesson-media.mjs) reads this, produces ElevenLabs audio +
// timings per slide, and assembles the lesson media manifest.
//
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Train Fast, Train Consistently",
  trackId: "ero",
  key: "E2.3",

  slides: [
    {
      id: "s1",
      layout: "cover",
      eyebrow: "ERO Track · Module 2: Scale Your Staff",
      title: "Train Fast, Train Consistently",
      subtitle: "Lesson 3 · Narrated walkthrough",
      narration:
        "You've hired a coachable person. Now the clock is ticking, because in this business you're training during the busiest weeks of the year. This lesson gives you a system that turns a new hire into a trustworthy preparer in days, not weeks, and does it the same way every time. We'll build your standard operating procedures, set a software certification path, run the shadow-then-reverse-shadow method, hold a quality-review tier until trust is earned, and bake due diligence right into the routine.",
    },
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core idea",
      title: "Repeatable beats over-the-shoulder",
      lead: "A scaling office can't train by hoping a new hire picks it up by watching you between clients.",
      bullets: [
        {
          label: "The trap",
          text: "Over-the-shoulder training is inconsistent and breaks the moment you hire two people.",
        },
        {
          label: "The fix",
          text: "A documented system trains everyone the same way, whether you're in the room or not.",
        },
      ],
      narration:
        "Here's the core idea. A scaling office cannot train by hoping. Over-the-shoulder training, where a new hire watches you between clients and absorbs whatever they happen to catch, feels efficient but it's a trap. It's inconsistent, because it depends on how busy you are that day. It doesn't scale, because the moment you hire two people you can't be in two places. And it leaves gaps, because nobody remembers to explain the thing they do on autopilot.",
    },
    {
      id: "s3",
      layout: "tip",
      eyebrow: "The core idea",
      title: "Build the system once",
      callout: {
        kind: "tip",
        title: "Same start, every hire",
        text: "A documented, repeatable system trains everyone to the same standard — whether you're standing there or not. Build it once, draw on it for years.",
      },
      narration:
        "The fix is a documented, repeatable system that trains everyone the same way, to the same standard, whether you're standing there or not. Build it once, and every future hire gets the same strong start. Think of it the way you'd think of a recipe in a busy kitchen: the cook doesn't reinvent the dish each time, they follow the steps, and the result is consistent no matter who's on the line. Your training system is that recipe for turning a new hire into a preparer.",
    },
    {
      id: "s4",
      layout: "point",
      eyebrow: "Step one",
      title: "SOPs are the backbone",
      lead: "Standard operating procedures turn what's in your head into something a new hire can follow.",
      bullets: [
        {
          label: "What an SOP is",
          text: "A short, written, step-by-step guide to one job in your office.",
        },
        {
          label: "Why it matters",
          text: "It removes you as the single point of knowledge.",
        },
      ],
      narration:
        "Step one is to write standard operating procedures, or SOPs. An SOP is just a short, written, step-by-step guide to one job in your office, the way you'd actually talk a new hire through it. The reason this matters so much is that it removes you as the single point of knowledge. Right now, the full process of running a return probably lives only in your head. SOPs get it onto paper, where a new hire can follow it without interrupting you every five minutes. Let's name the five you need.",
    },
    {
      id: "s5",
      layout: "list",
      eyebrow: "Step one",
      title: "Write SOPs for the five core jobs",
      bullets: [
        {
          label: "Intake",
          text: "Greeting, ID and document checklist, prior-year review, questions to ask first.",
        },
        {
          label: "Data entry",
          text: "Field-by-field order, where each document maps, and how to flag what's missing.",
        },
        {
          label: "Review",
          text: "The before-e-file checklist: credits, dependents, direct deposit, due-diligence questions.",
        },
        {
          label: "E-file",
          text: "Final consent, signatures, transmission, and confirming acceptance.",
        },
        {
          label: "Client handoff",
          text: "Explaining the return, setting refund expectations, and the referral ask.",
        },
      ],
      narration:
        "Write an SOP for each of the five core jobs. First, intake: how to greet a client, the ID and document checklist, the prior-year review, and the questions to ask before anyone sits down. Second, data entry: the field-by-field order, where each document maps in your software, and how to flag what's missing. Third, review: the before-e-file checklist that catches errors, credits, dependents, direct-deposit details, and the due-diligence questions. Fourth, e-file: final consent, signatures, transmission, and confirming the IRS accepted it. And fifth, client handoff: how to explain the return, set honest refund expectations, and make the referral ask.",
    },
    {
      id: "s6",
      layout: "tip",
      eyebrow: "Why it matters",
      title: "Document once, onboard forever",
      callout: {
        kind: "stat",
        title: "Days, not weeks",
        text: "Offices with written SOPs onboard a new preparer in a few days. Offices without them re-explain everything, every hire, every season.",
      },
      narration:
        "Why is the upfront work of writing SOPs worth it during your busiest season? Because you document once and onboard forever. The office with written procedures gets a new preparer productive in a few days, because the learning doesn't depend on catching you in a free moment. The office without them re-explains everything from scratch, every hire, every season, and gets a slightly different result each time depending on who's teaching. Every hour you spend writing SOPs now is repaid the first afternoon a new hire reads them instead of interrupting you.",
    },
    {
      id: "s7",
      layout: "point",
      eyebrow: "Step two",
      title: "Certify before any live return",
      lead: "No new preparer touches a paying client's return until they've completed a structured walk-through.",
      bullets: [
        {
          label: "The rule",
          text: "Practice in the software comes before any real client.",
        },
        {
          label: "Why",
          text: "Clients should never be the ones a new hire learns on.",
        },
      ],
      narration:
        "Step two is a software certification path, and the rule is simple: no new preparer touches a paying client's return until they've completed it. This protects your clients from being the ones a new hire learns on, and it gives the new preparer the confidence that comes from having done it before it counted for real. Certification turns the abstract knowledge from your SOPs into hands-on muscle memory, in a safe setting where a mistake costs nothing but a redo.",
    },
    {
      id: "s8",
      layout: "list",
      eyebrow: "Step two",
      title: "How the certification works",
      bullets: [
        {
          label: "Practice returns",
          text: "Several sample returns of increasing difficulty in your actual software.",
        },
        {
          label: "Build up",
          text: "Wage-only first, then a child tax credit, then a Schedule C.",
        },
        {
          label: "The pass bar",
          text: "Complete a standard return start to finish, unaided, before going live.",
        },
      ],
      narration:
        "Here's how the certification actually works. Build a structured walk-through in your real tax software, using realistic sample data. Have the new hire work several practice returns of increasing difficulty: a simple wage-only return first, then one with a child tax credit, then one with a Schedule C. The certification has a clear pass bar: they can complete a standard return, start to finish, on their own, without you rescuing them. Only when they hit that bar do they sit with a live client.",
    },
    {
      id: "s9",
      layout: "point",
      eyebrow: "Step three",
      title: "Shadow: they watch you do five",
      lead: "Narrate every decision out loud so the why is visible, not just the clicks.",
      bullets: [
        {
          label: "Do five real returns",
          text: "The new hire watches you work actual client returns.",
        },
        {
          label: "Think out loud",
          text: "Explain why you asked, why you checked, why you chose.",
        },
      ],
      narration:
        "Step three is the heart of the method, and it comes in two halves. The first half is shadowing: the new hire watches you do five real returns. And here's the key, you narrate every decision out loud. Why you asked that follow-up question. Why you double-checked that dependent. Why you chose that filing status. The clicks are easy to copy; the reasoning is what they actually need to hear. A new hire who only watches your hands learns the steps. One who hears your thinking learns the judgment.",
    },
    {
      id: "s10",
      layout: "point",
      eyebrow: "Step three",
      title: "Reverse-shadow: you watch them do five",
      lead: "They drive, you correct in real time, before mistakes become habits.",
      bullets: [
        {
          label: "They take the keyboard",
          text: "The new hire runs the return and the client conversation.",
        },
        {
          label: "Correct on the spot",
          text: "Fix errors the moment they happen, not at the end.",
        },
      ],
      narration:
        "The second half is the reverse-shadow. Now you flip it. They do five returns while you sit beside them. They drive the keyboard and the client conversation, and you correct in real time, the moment a mistake happens, before it has any chance to become a habit. Watch five, then do five. It's a clean, memorable rhythm, and it works because watching and doing are genuinely different skills. You're building both, in the right order, with you close enough to catch anything before it reaches the IRS.",
    },
    {
      id: "s10b",
      layout: "tip",
      eyebrow: "Step three",
      title: "Why five and five",
      callout: {
        kind: "stat",
        title: "Reps build judgment",
        text: "Five narrated returns plus five corrected returns is enough to expose the common situations a preparer will see all season — without a single live mistake reaching a client.",
      },
      narration:
        "Why five and five, and not one or twenty? Five is roughly the number of returns it takes to expose a new preparer to the common situations they'll see all season, a credit case, a self-employed client, a tricky dependent, without dragging on so long that you lose days you don't have. Five narrated returns build the judgment; five corrected returns build the confidence. And because all ten happen under your eye, not one live mistake reaches a client. Adjust the count for a complex office, but the watch-then-do rhythm stays the same.",
    },
    {
      id: "s11",
      layout: "point",
      eyebrow: "Step four",
      title: "A quality-review tier",
      lead: "Every new-preparer return gets checked before e-file — no exceptions — until trust is earned.",
      bullets: [
        {
          label: "Review before transmit",
          text: "A seasoned reviewer signs off on each return before it's e-filed.",
        },
        {
          label: "Fast feedback",
          text: "The new preparer learns what good looks like, return by return.",
        },
      ],
      narration:
        "Step four is a quality-review tier. Every return a new preparer completes gets checked by you or a seasoned reviewer before it's e-filed, with no exceptions. This does two things at once. It catches errors before they reach the IRS or the client, protecting your reputation. And it teaches the new preparer what good looks like through fast, specific feedback on their own work, which is the most powerful kind of learning there is. The review tier is your safety net and your classroom rolled into one.",
    },
    {
      id: "s11b",
      layout: "list",
      eyebrow: "Script",
      title: "The before-e-file review checklist",
      bullets: [
        {
          label: "Identity & dependents",
          text: "Names, SSNs or ITINs, and dependents match the documents.",
        },
        {
          label: "Income complete",
          text: "Every W-2 and 1099 is entered; nothing left in the folder.",
        },
        {
          label: "Credits supported",
          text: "EITC, Child Tax Credit, and education credits have the due-diligence answers behind them.",
        },
        {
          label: "Refund routing",
          text: "Direct-deposit details and any bank-product selections are correct.",
        },
        {
          label: "Signatures & consent",
          text: "Client and preparer signatures and required consents are in place.",
        },
      ],
      narration:
        "Here's a copy-ready review checklist your reviewer runs on every new-preparer return before it transmits. First, identity and dependents: names, Social Security numbers or ITINs, and dependents all match the documents. Second, income complete: every W-2 and 1099 is entered and nothing's left sitting in the folder. Third, credits supported: the Earned Income Credit, Child Tax Credit, and education credits each have their due-diligence answers behind them. Fourth, refund routing: direct-deposit details and any bank-product selections are correct. And fifth, signatures and consent are all in place. Five checks, every return, until trust is earned.",
    },
    {
      id: "s12",
      layout: "tip",
      eyebrow: "Step four",
      title: "Graduate on evidence",
      callout: {
        kind: "tip",
        title: "A tier, not a cage",
        text: "Track the new preparer's error rate. Move them from full review to spot-checks once their returns come through consistently clean — earned on results, not time served.",
      },
      narration:
        "The important part of the review tier is that it's a tier they graduate from, not a permanent cage. Track their error rate as they go. Once their returns come through consistently clean over a meaningful number of files, you release them from full review to occasional spot-checks. They earn their independence on evidence, not on time served. That distinction matters, because it tells your preparer exactly how to advance, get it right, consistently, and it keeps your quality bar tied to results rather than to seniority or guesswork.",
    },
    {
      id: "s13",
      layout: "list",
      eyebrow: "A real example",
      title: "The onboarding-week schedule",
      bullets: [
        {
          label: "Day 1 — Read & setup",
          text: "Walk the five SOPs; set up logins, PTIN, and workstation.",
        },
        {
          label: "Day 2 — Certify",
          text: "Complete the software certification on practice returns.",
        },
        {
          label: "Day 3 — Shadow",
          text: "Watch the owner prepare five live returns, narrated.",
        },
        {
          label: "Day 4 — Reverse-shadow",
          text: "New hire prepares five returns; owner corrects in real time.",
        },
        {
          label: "Day 5 — Go live on review",
          text: "First solo returns, every one checked before e-file.",
        },
      ],
      narration:
        "Let's make it concrete with a sample onboarding-week schedule you can copy. Day one is read and setup: walk the five SOPs together, and get logins, the PTIN confirmed, and the workstation ready. Day two is certify: complete the software certification on practice returns until they hit the pass bar. Day three is shadow: they watch you prepare five live returns while you narrate. Day four is reverse-shadow: they prepare five with you beside them, correcting in real time. And day five they go live on review: first solo returns, every one checked before e-file.",
    },
    {
      id: "s14",
      layout: "point",
      eyebrow: "A real example",
      title: "Five days, a working preparer",
      lead: "The structure does the heavy lifting — not your scarce free time.",
      bullets: [
        {
          label: "Adjust the pace",
          text: "A faster learner compresses it; a careful one takes a couple extra days.",
        },
        {
          label: "The point",
          text: "Same path, same standard, every hire — and you're not improvising.",
        },
      ],
      narration:
        "Notice what just happened in that schedule. In five days, you took a coachable hire and turned them into a working preparer on the quality tier, without relying on catching a free moment between clients. Adjust the pace to the person, a faster learner compresses it, a careful one takes a couple extra days, but the structure stays the same. That's the whole point. Same path, same standard, every hire, and you're following a plan instead of improvising during your busiest weeks. The system carries the load so you don't have to.",
    },
    {
      id: "s15",
      layout: "tip",
      eyebrow: "Bake it in",
      title: "Due diligence is part of the SOP",
      callout: {
        kind: "tip",
        title: "Especially EITC",
        text: "Build the required due-diligence questions and documentation right into your intake and review SOPs — so accuracy isn't a personality trait, it's the process.",
      },
      narration:
        "Now a point too important to leave to chance: bake due diligence right into your SOPs. For credits like the Earned Income Tax Credit, the IRS expects preparers to ask the right questions and keep proper documentation, and the penalties for failing that fall on the preparer and the office. So don't make accuracy a personality trait you hope your new hire happens to have. Make it the process. Put the required due-diligence questions into your intake SOP and the documentation checks into your review SOP, so every preparer asks them every time, automatically.",
    },
    {
      id: "s16",
      layout: "point",
      eyebrow: "Bake it in",
      title: "Consistency is the whole point",
      lead: "When the questions live in the workflow, your newest hire performs like your most seasoned one.",
      bullets: [
        {
          label: "Not optional",
          text: "Due-diligence steps are line items in the SOP, not reminders.",
        },
        {
          label: "Always current",
          text: "Update the SOP whenever official IRS requirements change.",
        },
      ],
      narration:
        "When the due-diligence questions live in the workflow itself, your newest hire performs them as reliably as your most experienced one, which is exactly what training consistently means. Make those steps line items in the SOP, not gentle reminders you hope people remember at the end of a long day. And keep them current: whenever official IRS requirements change, update the SOP, and your whole team updates with it. For the exact current rules, always work from official IRS due-diligence guidance rather than memory or last year's notes.",
    },
    {
      id: "s17",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Throwing a new hire into the deep end",
      callout: {
        kind: "warn",
        title: "Speed without the system backfires",
        text: "Skipping certification and review to get a warm body on returns fast produces rejects, amendments, and unhappy clients — costing far more than the days you saved.",
      },
      narration:
        "Here's the common mistake, and it's tempting precisely because you're slammed. You skip the certification and the review tier and throw the new hire straight onto live returns, because you need the bodies now. It feels fast. It isn't. What you get is a wave of rejects, amendments, and clients who got a rushed, error-filled experience, and every one of those costs far more time and trust than the few days you tried to save. Worse, the new preparer learns sloppy habits in week one that you'll spend the rest of the season undoing.",
    },
    {
      id: "s18",
      layout: "point",
      eyebrow: "Common mistake",
      title: "The system is the speed",
      lead: "The structure isn't what slows you down — it's what lets you train fast and keep quality high.",
      bullets: [
        {
          label: "Feels slower",
          text: "A week of certification and shadowing looks like a delay.",
        },
        {
          label: "Is actually faster",
          text: "Clean returns from day one beat a season of fixing rushed ones.",
        },
      ],
      narration:
        "The fix for that mistake is a mindset flip: the system is the speed. A week of certification and shadowing feels like a delay when the lobby is full, but it's the thing that lets you train fast and keep quality high at the same time. A preparer who starts clean, on review, produces returns you can trust from day one. A preparer thrown in cold produces a season of amendments, rejects, and unhappy clients that eat far more of your time than that first week ever would. Slow down for one week to speed up for the whole season.",
    },
    {
      id: "s19",
      layout: "tip",
      eyebrow: "Script",
      title: "The narration habit, in one line",
      callout: {
        kind: "quote",
        title: "Say this while you work",
        text: "\"Watch what I'm doing here — and more important, listen to why. I'm asking this because…\"",
      },
      narration:
        "Here's a copy-ready line to make the shadow step work. As you prepare a return with a new hire watching, get in the habit of saying: watch what I'm doing here, and more important, listen to why, I'm asking this because. That little phrase forces you to surface the reasoning you'd otherwise do silently. It turns a passive watching session into an active lesson, and it trains your new hire in the judgment behind the clicks, which is the part that actually separates a great preparer from a fast typist.",
    },
    {
      id: "s20",
      layout: "action",
      eyebrow: "Your turn",
      title: "Write your first SOP today",
      callout: {
        kind: "action",
        title: "Start with intake",
        text: "Open a doc and list every step from greeting a client to having their documents ready. That's your intake SOP — the first of five.",
      },
      narration:
        "Now it's your turn, and you can finish this one in twenty minutes. Open a blank document and write your intake SOP. Just list, step by step, everything you do from the moment a client walks in to the moment their documents are organized and ready for data entry. The greeting, the ID check, the document checklist, the prior-year review, the questions you ask. Don't make it pretty, make it complete. That single document is the first of your five SOPs, and the one a new hire will use on their very first morning.",
    },
    {
      id: "s21",
      layout: "action",
      eyebrow: "Your turn",
      title: "Block your shadow days",
      callout: {
        kind: "action",
        title: "Put it on the calendar",
        text: "Pick your next hire's first week and block Day 3 and Day 4 for shadow and reverse-shadow — five returns each.",
      },
      narration:
        "Here's a second action that makes the rest of the system real. Open your calendar and block the shadow days for your next hire's first week, day three for shadowing five returns and day four for reverse-shadowing five. The reason to block it now is simple: if you don't reserve the time, the busy season will eat it, and you'll fall back into over-the-shoulder hoping. Treat those two half-days as appointments you can't cancel, because they're the difference between a preparer you trust and one you're constantly fixing.",
    },
    {
      id: "s22",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Repeatable training beats over-the-shoulder hoping — document the system once." },
        { text: "Write SOPs for the five core jobs: intake, data entry, review, e-file, and handoff." },
        { text: "Certify on practice returns before any live client; then shadow five, do five." },
        { text: "Keep new returns on a quality-review tier until error rates earn independence." },
        { text: "Bake due diligence, especially EITC, into the SOPs so accuracy is the process." },
      ],
      subtitle: "Up next: Pay & Incentives That Drive Behavior",
      narration:
        "Let's recap. One: repeatable training beats over-the-shoulder hoping, so document the system once. Two: write SOPs for the five core jobs, intake, data entry, review, e-file, and client handoff. Three: certify on practice returns before any live client, then shadow five and do five. Four: keep every new preparer's returns on a quality-review tier until their error rate earns them independence. And five: bake due diligence, especially around the EITC, right into your SOPs so accuracy is the process, not a personality. Next, we look at how you pay people, because compensation quietly shapes every behavior in your office. See you there.",
    },
  ],
};
