// =============================================================================
// Interactive lesson definition — Marketing Lesson 1.4
// "Contact Strategy: Close Every Lead Type"
//
// Authoring source for the narrated interactive experience.
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Contact Strategy: Close Every Lead Type",
  trackId: "ero-mktg",
  key: "EM1.4",

  slides: [
    // ── s1: Cover ─────────────────────────────────────────────────────────────
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Marketing Track · Tax Office Lead Generation",
      title: "Contact Strategy: Close Every Lead Type",
      subtitle: "Lesson 4 · Narrated walkthrough",
      narration:
        "Welcome to Lesson Four. You've built the campaign, captured the leads, and classified them. Now we get into the sequences and scripts for closing each lead type. The difference between an office converting thirty percent of its leads and one converting fifteen percent is almost entirely in the follow-up. By the end of this lesson you'll have complete multi-touch sequences for every lead type and word-for-word scripts for the most common objections.",
    },

    // ── s2: Core principle — 5–8 touchpoints ──────────────────────────────────
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core principle",
      title: "Most leads need 5–8 touchpoints before they book",
      lead: "The office that quits after one or two attempts leaves the majority of its converted clients on the table.",
      bullets: [
        {
          label: "The persistence gap",
          text: "Most offices give up after one or two attempts. Most conversions happen between touchpoint three and eight.",
        },
        {
          label: "Persistent does not mean annoying",
          text: "Varying channel and message signals genuine care. Identical outreach signals automation. One wins clients. The other loses them.",
        },
      ],
      narration:
        "Here is the most important principle in lead conversion. Most leads need between five and eight meaningful contacts before they commit to booking. Not five identical texts — five to eight distinct touchpoints across different channels at strategic intervals. Offices that quit after one or two attempts are essentially paying for leads and then throwing most of them away. That same lead was often ready to book on the third or fourth contact and went to a competitor who stayed in touch.",
    },

    // ── s3: Why most offices quit too early ───────────────────────────────────
    {
      id: "s3",
      layout: "point",
      eyebrow: "The core principle",
      title: "Why most offices quit at touch one or two",
      lead: "Quitting early is not laziness — it feels rational in the moment. Understanding why it happens helps you build a system that prevents it.",
      bullets: [
        {
          label: "No reply feels like rejection",
          text: "Silence is uncomfortable. Without a documented sequence, most staff interpret no reply as no interest and move on.",
        },
        {
          label: "No system means no follow-through",
          text: "If the next touch is not scheduled and scripted, it simply does not happen. Intention alone does not close leads.",
        },
      ],
      narration:
        "Most offices do not fail at follow-up because they are lazy. They fail because they have no system. When a text goes unanswered, silence feels like a no. Without a documented next step, the staff member moves on to the next lead. The fix is structural: a written sequence with scheduled touches and scripted messages removes the guesswork and the emotional friction. When the next touch is already planned, you run it regardless of how the last one felt.",
    },

    // ── s4: The three-variable rule ───────────────────────────────────────────
    {
      id: "s4",
      layout: "tip",
      eyebrow: "The core principle",
      title: "Vary channel, message, and timing on every touch",
      callout: {
        kind: "tip",
        title: "The three-variable rule",
        text: "Each new touch should vary at least one of: Channel (call vs. text vs. email vs. voicemail), Message (different value point or call to action), Timing (space touches strategically — not every single day).",
      },
      narration:
        "The three-variable rule keeps you persistent without becoming a nuisance. On each new touch, change at least one of three things. The channel: mix calls, texts, emails, and voicemails. The message: offer something different each time — a new value point, a question, a different call to action. The timing: more frequent in the first few days, then once or twice a week. Leads who receive varied, human touches stay in the conversation longer. That is all you need to get the booking.",
    },

    // ── s5: HOT lead — Touch 1, close on the call ────────────────────────────
    {
      id: "s5",
      layout: "point",
      eyebrow: "HOT lead sequence",
      title: "Touch 1: close the appointment before you hang up",
      lead: "A HOT lead has answered, expressed interest, and is ready to move. Your only goal on this call is to get the appointment in the calendar.",
      bullets: [
        {
          label: "Offer two or three specific times",
          text: "Do not ask 'when are you free?' Give options. 'I have Tuesday at 10 or Wednesday at 2 — which works better?'",
        },
        {
          label: "Confirm everything before hanging up",
          text: "Date, time, your address or virtual meeting link, and what to bring. Leave nothing open.",
        },
      ],
      narration:
        "When a HOT lead picks up and expresses interest, the call has one job: book the appointment. Do not have a long consultation. Offer two or three specific times and ask which works better. Once they choose, confirm the date, time, location, and what documents to bring before you hang up. Offering choices rather than open-ended availability removes decision friction and gets to yes faster. You've already won the lead — now close the calendar slot.",
    },

    // ── s6: HOT lead — Touches 2 and 3 ───────────────────────────────────────
    {
      id: "s6",
      layout: "list",
      eyebrow: "HOT lead sequence",
      title: "Touches 2 and 3: confirm and remind",
      bullets: [
        {
          label: "Touch 2 — 24 hours before: confirmation text",
          text: "'Hi [Name], just confirming your appointment tomorrow at [time] with [Your Name] at [Office]. Reply YES to confirm or call [number] to reschedule.'",
        },
        {
          label: "Touch 3 — 2 hours before: reminder call",
          text: "Brief call to confirm they are on their way. If no answer, leave a short voicemail. Dramatically reduces no-shows.",
        },
        {
          label: "Then stop",
          text: "Three touches is all a HOT lead needs. Do not over-communicate before the appointment. Book it. Confirm it. Show up.",
        },
      ],
      narration:
        "After the booking call, your HOT lead sequence has exactly two more touches. Twenty-four hours before the appointment, send the confirmation text. Requiring a YES reply is key — it creates an active commitment and reduces no-shows more than a passive reminder ever will. Then two hours before, make a brief call. Thirty seconds if they answer. A short voicemail if not. These three touches are all a HOT lead needs. Additional messages before the appointment can signal insecurity and occasionally prompt cancellations. Book it, confirm it, show up.",
    },

    // ── s7: HOT lead — once booked, stop selling ─────────────────────────────
    {
      id: "s7",
      layout: "tip",
      eyebrow: "HOT lead sequence",
      title: "Once it is booked, stop selling",
      callout: {
        kind: "tip",
        title: "Over-communication can unbook a client",
        text: "Once a HOT lead has confirmed an appointment, follow up only to confirm timing. Additional sales messages or 'just checking in' texts before the appointment signal insecurity and sometimes prompt clients to cancel.",
      },
      narration:
        "Here is a nuance many offices miss. Once someone has agreed to book, the selling is done. Resist the urge to send a thank-you message, another reminder of your value, or a check-in to make sure they are still coming. Over-communicating after the booking can create doubt where none existed. Keep it minimal and professional. All your energy goes into delivering an excellent appointment experience. A great in-person meeting is worth fifty pre-appointment texts.",
    },

    // ── s8: WARM lead — Day 1 touches ────────────────────────────────────────
    {
      id: "s8",
      layout: "list",
      eyebrow: "WARM lead sequence",
      title: "WARM leads: Day 1 — call then text immediately after",
      bullets: [
        {
          label: "Day 1, Touch 1 — call",
          text: "Voicemail script if no answer: 'Hi [name], this is [you] at [office]. Following up on your tax appointment request. I have openings this week. Call or text [number] any time.'",
        },
        {
          label: "Day 1, Touch 2 — text immediately after",
          text: "Send the auto-SMS script from Lesson 3 right after the voicemail. The call-plus-text pairing is the most effective first-contact combination.",
        },
      ],
      narration:
        "WARM leads have engaged at some level but have not committed to an appointment. They need a five-touch, fourteen-day sequence. Day one starts with a call. If they answer, you are booking on the spot. If not, leave a brief voicemail that plants the seed: you have openings this week, here is your number. Immediately after the voicemail, fire the auto-SMS script. Sending both on the same day creates two impressions across two channels within minutes and dramatically increases the chance of getting a reply on day one.",
    },

    // ── s9: WARM lead — Day 3 through Day 7 ──────────────────────────────────
    {
      id: "s9",
      layout: "list",
      eyebrow: "WARM lead sequence",
      title: "WARM leads: Day 3 and Day 7 — keep the door open",
      bullets: [
        {
          label: "Day 3, Touch 3 — call plus text",
          text: "'Still have openings this week and next, including evenings and weekends. [number]'",
        },
        {
          label: "Day 7, Touch 4 — value text",
          text: "'Quick tip: gig-economy workers often miss mileage and home-office deductions. Happy to walk you through it when you come in. [number]'",
        },
      ],
      narration:
        "On Day 3 you make a second call and follow it with a text. Mention that you have evening and weekend availability, because many working families genuinely cannot come in during business hours. Day 7 is where the sequence changes character. Instead of another booking push, you send a pure value text with no direct ask. A tip about a deduction specific to their profile. This touch says you are thinking about them and know things that could help them. That is trust-building, not selling, and it generates more replies than any booking request sent at this stage.",
    },

    // ── s10: WARM lead — Day 14 final touch ──────────────────────────────────
    {
      id: "s10",
      layout: "point",
      eyebrow: "WARM lead sequence",
      title: "WARM leads: Day 14 — the low-pressure final check-in",
      lead: "The final touch is not a closing pitch. It is a respectful sign-off that gives the lead one last frictionless on-ramp.",
      bullets: [
        {
          label: "Day 14, Touch 5 — final follow-up text",
          text: "'Hey [name] — just checking in one last time. If the timing works, let me know. No worries if not. [number]'",
        },
        {
          label: "Why low-pressure works here",
          text: "By day fourteen the lead knows who you are. Removing pressure gives them back their autonomy. Many decide to reply precisely because you stopped asking.",
        },
      ],
      narration:
        "Day fourteen is the fifth and final touch of the WARM sequence. The message is brief and removes all pressure: just checking in one last time, no worries if not. By this point the lead has received four earlier touches and knows your name. What they often need is to feel like the decision is fully theirs. This final check-in hands them that choice explicitly. It is frequently the touch that breaks the silence from leads who were warming up all along but waiting for a moment that felt comfortable to engage.",
    },

    // ── s11: Why Day 7 value text works ───────────────────────────────────────
    {
      id: "s11",
      layout: "tip",
      eyebrow: "WARM lead sequence",
      title: "The Day 7 value text breaks silence more than any booking push",
      callout: {
        kind: "tip",
        title: "Teach before you sell",
        text: "At Day 7, stop asking them to book and start offering something useful. 'Did you know gig workers can deduct their mileage?' prompts a reply far more often than 'Do you want to book?' Give value first. The booking follows.",
      },
      narration:
        "The Day 7 value text deserves its own slide because it is the highest-converting single touch in a WARM sequence, and most offices never think to send it. By day seven you have asked twice to book. Another booking-push text reads as more pressure. Offering genuine value with no ask shifts how the lead sees you — from salesperson to advisor. Use the qualifying information from their form or first call to make the tip specific. If they flagged gig income, tip them on mileage deductions. If they have children, mention the Child and Dependent Care Credit. Specificity makes the tip land.",
    },

    // ── s12: COLD lead — channel shift ────────────────────────────────────────
    {
      id: "s12",
      layout: "point",
      eyebrow: "COLD lead sequence",
      title: "COLD leads: shift the channel mix toward text",
      lead: "A lead who has never answered any call needs the same five-touch cadence, but the channel balance changes.",
      bullets: [
        {
          label: "Lean on text",
          text: "Someone who has not answered your number is more likely to read a text. Meet them where they are. Keep making calls, but do not let a missed call stop the sequence.",
        },
        {
          label: "Do not quit at touch two",
          text: "Cold leads convert less often than warm ones but they still convert. Running the full sequence is what separates offices that find them from offices that do not.",
        },
      ],
      narration:
        "A COLD lead filled out the form and has never responded to any call or text. Run the same five-touch, fourteen-day cadence, but lean more heavily on texting because someone who has consistently ignored an unknown number is far more likely to read a short message. Keep dialing — a live conversation is still your most powerful conversion tool if you catch them — but weight the sequence toward text. And resist the urge to stop after two tries. Cold leads convert at lower rates, but over a full season the volume adds up.",
    },

    // ── s13: COLD lead — Day 5 email ─────────────────────────────────────────
    {
      id: "s13",
      layout: "list",
      eyebrow: "COLD lead sequence",
      title: "COLD leads: add a Day 5 educational email",
      bullets: [
        {
          label: "Subject line",
          text: "'3 reasons to file early this year'",
        },
        {
          label: "Body",
          text: "Three or four sentences on early-filing benefits: faster refund, identity theft protection, knowing your number before financial decisions. End with a soft call to action and your booking link.",
        },
        {
          label: "Goal",
          text: "This email is not closing a deal. It keeps you present across a third channel and demonstrates expertise to someone who has not engaged on the first two.",
        },
      ],
      narration:
        "Around Day 5, add an email to the COLD lead sequence. Subject line: three reasons to file early this year. Write three or four sentences about early filing benefits — faster refunds, protection against identity theft, knowing your tax number before making financial decisions. End with a soft booking link and a low-pressure call to action. This email does not need to close anyone. Its job is to appear in a third channel and show expertise. A lead who ignores texts may respond to an email, and the channel diversity itself signals that a real professional is reaching out.",
    },

    // ── s14: GHOST lead — breakup text ────────────────────────────────────────
    {
      id: "s14",
      layout: "tip",
      eyebrow: "GHOST lead reactivation",
      title: "The breakup text revives leads you thought were gone",
      callout: {
        kind: "quote",
        title: "Send this after 3 failed contact attempts",
        text: "\"Hey [name] — I haven't heard back so I'll stop reaching out. If you change your mind, just text YES and I'll get you set up right away. Either way, good luck this tax season!\"",
      },
      narration:
        "After three failed contact attempts, send a breakup text and then stop all further outreach. The psychology is simple: by signaling you are stepping away, you remove all pressure and return the lead's autonomy. Many ghost leads have been watching your messages without responding because any reply felt like a commitment. Replying YES to end a sequence is a much lower barrier. Offices that use this tactic consistently report unexpected replies throughout the season from leads who went completely dark. These results vary, but the tactic costs one message and costs nothing if there is no reply.",
    },

    // ── s15: Objection overview ───────────────────────────────────────────────
    {
      id: "s15",
      layout: "point",
      eyebrow: "Objection handling",
      title: "Three objections you will hear on almost every contact call",
      lead: "Handling these three well converts more conversations into appointments than any other skill in this track.",
      bullets: [
        {
          label: "How much do you charge?",
          text: "Rarely a real barrier. Usually a test to see if you are confident and reasonable.",
        },
        {
          label: "I will call you back",
          text: "A polite stall. The majority of promised callbacks never happen because life gets busy.",
        },
        {
          label: "I already use TurboTax",
          text: "Not a hard no. An objection that responds well to a no-pressure, plant-the-seed reply.",
        },
      ],
      narration:
        "Before we get into the scripts, let's name the three objections together. They are how much do you charge, I will call you back, and I already use TurboTax. Every one of these is handleable, and none of them is a genuine hard no in most cases. The first is a confidence test. The second is a stall that you can redirect. The third is a competitor preference that responds to a low-pressure, value-forward reply. Having a prepared, practiced response to each one keeps you calm and in control on the call.",
    },

    // ── s16: Objection — how much do you charge ───────────────────────────────
    {
      id: "s16",
      layout: "tip",
      eyebrow: "Objection handling",
      title: "How to answer: how much do you charge?",
      callout: {
        kind: "quote",
        title: "Say this when they ask about price",
        text: "\"It depends on your situation — most of my clients pay somewhere between $150 and $350. I can give you an exact number after a quick five-minute call. Want to do that now?\"",
      },
      narration:
        "When someone asks how much you charge, do not lead with a flat number. You do not know their situation yet, and an upfront figure without context can scare people off or undersell complex returns. Instead, give a range and make the next step feel tiny. Say: it depends on your situation — most clients pay somewhere between 150 and 350 dollars. Dollar figures here are illustrative only and should reflect your actual pricing. I can give you an exact number after a quick five-minute call. Want to do that now? You have given an honest range, made the next step low-commitment, and asked a gentle closing question that turns a price inquiry into a booking conversation.",
    },

    // ── s17: Objection — I'll call you back ───────────────────────────────────
    {
      id: "s17",
      layout: "list",
      eyebrow: "Objection handling",
      title: "How to handle: I will call you back",
      bullets: [
        {
          label: "Why most callbacks never happen",
          text: "Not because people are dishonest — life gets busy and the action item falls off the list.",
        },
        {
          label: "The redirect script",
          text: "'Totally understand. Can I text you a link to grab a time that works? That way you do not have to remember to call — I will have something ready for you.'",
        },
        {
          label: "Why it works",
          text: "Clicking a booking link is far less friction than remembering to make a call. Most people say yes, and the appointment lands in the calendar.",
        },
      ],
      narration:
        "The I-will-call-you-back stall is a polite exit, and most promised callbacks never come — not because people are dishonest, but because life is busy and the action item disappears. Your goal is to remove the action item from them entirely and replace it with a link. Say: totally understand. Can I text you a link to grab a time that works? That way you do not have to remember to call. You have acknowledged their timing preference, removed the friction, and made the next step nearly effortless. Most people say yes.",
    },

    // ── s18: Objection — I already use TurboTax ──────────────────────────────
    {
      id: "s18",
      layout: "tip",
      eyebrow: "Objection handling",
      title: "How to handle: I already use TurboTax",
      callout: {
        kind: "quote",
        title: "Do not argue — plant the seed",
        text: "\"Totally fine — a lot of my clients switched after finding out they were leaving credits on the table. No pressure, but if you ever want a free second opinion, first-timers are always welcome. [number]\"",
      },
      narration:
        "Do not argue with someone about their current software. Arguing puts them on the defensive and ends the conversation. Agree, plant a seed of doubt, remove all pressure, and leave the door open. Say: totally fine. A lot of my clients switched after finding out they were leaving credits on the table. No pressure, but if you want a free second opinion, first-timers are always welcome. The free second-opinion offer is especially effective for households that may qualify for credits a self-filing tool misses. You do not need to explain that now. The seed is planted. Some percentage will return after filing and feeling like they left money behind.",
    },

    // ── s19: Worked example — WARM lead closed on Touch 4 ────────────────────
    {
      id: "s19",
      layout: "list",
      eyebrow: "A real example",
      title: "A WARM lead closed on Touch 4 — here is how it unfolded",
      bullets: [
        {
          label: "Day 1: call plus text",
          text: "No response to either. Lead looks cold.",
        },
        {
          label: "Day 3: call plus text",
          text: "Still no response. Most offices give up here.",
        },
        {
          label: "Day 7: value text",
          text: "'If you drove for DoorDash or Instacart last year, you may be able to deduct your mileage. Happy to walk you through it when you come in. [number]'",
        },
        {
          label: "The reply",
          text: "'Oh I do DoorDash. How does that work?' — Booking conversation happens in the next three messages.",
        },
      ],
      narration:
        "Here is an illustrative example of why the five-touch sequence matters. A lead arrives on Monday. Call and text on Day 1: no response. Day 3 call and text: still nothing. Most offices mark this lead dead. On Day 7 a value text goes out: if you drove for DoorDash or Instacart you may be able to deduct your mileage. Two hours later: Oh, I do DoorDash. How does that work? That is a buyer asking for help. In a few exchanges you explain that gig income means deductible mileage and business expenses, and you offer a thirty-minute appointment. Touch four closed that client — but only because the sequence ran when others had already given up.",
    },

    // ── s20: Common mistake — same script every touch ─────────────────────────
    {
      id: "s20",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Using the same script on every single touch",
      callout: {
        kind: "warn",
        title: "Repetition kills the sequence",
        text: "When every text sounds identical, leads assume it is automated and stop engaging. Vary the message: different value point, different tone, different call to action on every touch. Reference their name. Use specific details when you have them.",
      },
      narration:
        "The most common follow-up mistake is using the same template on every touch. Within two identical messages, the lead assumes it is an automated blast and mentally unsubscribes. The fix is variation. Not dramatic rewriting — just enough to signal a human is on the other end. Change the value point. Change the call to action. When you know something specific from their form, use it. If they listed kids, reference child tax credits. If they listed gig income, reference mileage. Specificity is the loudest possible signal that a real person is reaching out.",
    },

    // ── s21: Building your sequence library ───────────────────────────────────
    {
      id: "s21",
      layout: "point",
      eyebrow: "Building your system",
      title: "A written sequence library is the foundation of consistent conversion",
      lead: "Good intentions do not close leads. A documented, accessible, team-ready sequence library does.",
      bullets: [
        {
          label: "One doc per lead type",
          text: "Separate written sequences for HOT, WARM, COLD, and GHOST leads. Each touch scripted word for word.",
        },
        {
          label: "Accessible to the whole team",
          text: "Store in a shared Google Doc or CRM template library. Any team member should be able to run a sequence without improvising.",
        },
      ],
      narration:
        "Before the next season starts, build a written sequence library. One document per lead type — HOT, WARM, COLD, and GHOST — with every touch scripted word for word. Include the voicemail script, the Day 1 text, the Day 3 call and text, the Day 7 value text, and the Day 14 final check-in. Store it where your entire team can access it. The goal is that anyone in your office can pick up a lead and run the sequence without improvising what to say. Scripting removes the emotional friction that causes most offices to quit early.",
    },

    // ── s22: Write your WARM sequence — action ────────────────────────────────
    {
      id: "s22",
      layout: "action",
      eyebrow: "Your turn",
      title: "Write your WARM lead sequence word for word",
      callout: {
        kind: "action",
        title: "Script all five touches before next season",
        text: "Open a document. Write five separate scripts: Day 1 voicemail, Day 1 text, Day 3 text, Day 7 value text (pick one specific value point for your market), Day 14 final follow-up. Name the doc 'WARM Lead Sequence.' Save where your whole team can access it.",
      },
      narration:
        "Your action for this lesson is to write your WARM lead sequence before the campaign launches. Open a document and draft all five touches with your name and office filled in. Pick a value point for Day 7 that fits your market — if your area has a lot of gig workers, use mileage deductions. If you serve families, use childcare credits. Save the document where every team member can access it and train your staff to use it. Offices that run a written sequence consistently outperform those relying on improvisation every single season.",
    },

    // ── s23: Season-long discipline ───────────────────────────────────────────
    {
      id: "s23",
      layout: "point",
      eyebrow: "Putting it all together",
      title: "The sequence is your edge — only if you run it every time",
      lead: "A great sequence run inconsistently produces inconsistent results. The discipline to run it on every lead, regardless of first-contact outcome, is what compounds into a higher conversion rate.",
      bullets: [
        {
          label: "Set touchpoint reminders in your CRM",
          text: "Automate what can be automated. Flag Day 3, Day 7, and Day 14 for every WARM and COLD lead the moment they enter your system.",
        },
        {
          label: "Review weekly during season",
          text: "Pull the leads that have not moved past touch one. Run the next step. This weekly audit keeps your conversion rate from quietly declining mid-season.",
        },
      ],
      narration:
        "The sequence only works if you run it every time. That requires more than good intentions — it requires a CRM reminder or task on Day 3, Day 7, and Day 14 for every WARM and COLD lead the moment they enter your system. Set those reminders before the first lead arrives. Then once a week during season, audit the leads that have stalled. Pull everyone stuck at touch one and schedule the next step. This weekly review keeps your pipeline moving and prevents good leads from going cold simply because no one scheduled the next touch.",
    },

    // ── s24: Recap ─────────────────────────────────────────────────────────────
    {
      id: "s24",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Most leads need 5–8 touchpoints to convert. Offices that quit at one or two leave the majority of potential clients on the table." },
        { text: "HOT leads: book on first call, confirmation text 24 hours before, reminder call 2 hours before. Three touches. Then stop." },
        { text: "WARM leads: five touches over fourteen days. Day 1 call plus text, Day 3 call plus text, Day 7 value text, Day 14 final check-in." },
        { text: "COLD leads: same cadence, shifted toward text, plus a Day 5 educational email across a third channel." },
        { text: "Vary channel, message, and timing on every touch. Identical messages signal automation. Specific, varied touches signal a real person." },
        { text: "Write and store your sequences before the season starts. A team-accessible script library is the difference between consistent and inconsistent conversion." },
      ],
      subtitle: "Up next: Measure, Optimize, and Scale",
      narration:
        "Let's lock in the key takeaways. One: most leads need five to eight touchpoints, and offices that know this consistently out-convert those that do not. Two: HOT leads get three touches and an appointment — nothing more. Three: WARM and COLD leads get a five-touch, fourteen-day sequence with varied channels and messages at every step. Four: the Day 7 value text is the most important mid-sequence touch and the one most offices never send. Five: vary every touch because repetition kills engagement. Six: write your sequences before the season, store them where your team can use them, and set CRM reminders to run every step. In the final lesson we measure everything you have built, run the tests that make your campaigns more efficient over time, and build the seasonal calendar that turns this into a compounding system. See you in Lesson Five.",
    },
  ],
};
