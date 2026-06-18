// =============================================================================
// Interactive lesson definition — Bureau Lesson 3.3 "Build a Team Beyond Yourself"
//
// Authoring source for the narrated interactive experience. The generator
// (scripts/generate-lesson-media.mjs) reads this, produces ElevenLabs audio +
// timings per slide, and assembles the lesson media manifest.
//
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Build a Team Beyond Yourself",
  trackId: "bureau",
  key: "B3.3",

  slides: [
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Bureau Track · Module 3: Scale the Bureau",
      title: "Build a Team Beyond Yourself",
      subtitle: "Lesson 3 · Narrated walkthrough",
      narration:
        "Welcome back. You know your economics and you have a reinvestment plan. Now we face the constraint every growing bureau hits eventually: the founder's hours. A solo bureau can grow to a point — but eventually every demo is you, every support ticket escalates to you, and every new office's first ninety days depends on you. By the end of this lesson you'll know who to hire first and in what order, how to document your bureau so a new hire ramps in days instead of months, and how your job changes when a real team is in place.",
    },
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core idea",
      title: "A solo bureau caps at the founder's hours",
      lead: "The ceiling on a solo bureau isn't the market — it's the number of hours one person can reliably work in a week.",
      bullets: [
        {
          label: "Your hours are finite",
          text: "Every task requiring you personally is a hard limit on how many offices you can serve.",
        },
        {
          label: "The ceiling lowers under pressure",
          text: "In the February crush, a solo bureau operator is too thin to run support, recruit, and manage banks simultaneously.",
        },
      ],
      narration:
        "Here's the limit that every solo bureau hits. It's not the market size. It's not the competition. It's the number of hours you can work. Every task that requires your personal involvement — every demo, every support escalation, every bank-product issue, every onboarding call — is a hard cap on how many offices you can serve. When you're spread across all of them simultaneously in the February crush, the quality of everything drops. You're not a bottleneck because you're doing something wrong. You're a bottleneck because one person can only do so much. The solution isn't to work harder. It's to build a team.",
    },
    {
      id: "s3",
      layout: "tip",
      eyebrow: "Why it matters",
      title: "Growth amplifies the bottleneck",
      callout: {
        kind: "warn",
        title: "More offices make it worse, not better",
        text: "If the bottleneck is you, adding offices increases your support load, your onboarding load, and your recruiting load — all at once. The system gets worse before it forces you to fix it.",
      },
      narration:
        "Here's the counterintuitive thing about a solo bureau bottleneck: adding more offices makes it worse before it gets better. Every new office adds to your support queue, your onboarding calendar, and your ongoing check-in load. So the instinct to recruit harder actually increases pressure on the exact constraint you haven't fixed. What typically happens is the bureau grows until service quality collapses, retention drops, and the owner burns out — and that finally forces the hiring conversation. Don't wait for the collapse. Build the team before the pressure forces your hand.",
    },
    {
      id: "s4",
      layout: "list",
      eyebrow: "The hiring order",
      title: "Build in this sequence",
      bullets: [
        {
          label: "First — Support staff",
          text: "Handle high-volume, lower-skill work: tickets, FAQ answers, basic onboarding steps.",
        },
        {
          label: "Second — A recruiter or sales rep",
          text: "Once the pitch is documented and repeatable, hire someone to run it.",
        },
        {
          label: "Third — An onboarding and account manager",
          text: "Owns the first 90 days for new offices and ongoing health for the whole network.",
        },
      ],
      narration:
        "Build in a deliberate order. First, support staff — the people who handle your high-volume, lower-skill work: answering tickets, walking offices through the FAQ, handling first-layer onboarding steps. Every hour of support you offload to trained staff is an hour you get back for higher-leverage work. Second, a recruiter or sales rep. Once your pitch is documented and you've proven which channel works, this hire takes recruiting off your plate. Third, an onboarding and account manager who owns the first ninety days for every new office and the ongoing health of your whole network. This role most directly protects your renewal rate — and it's often added last, when it should be added second.",
    },
    {
      id: "s5",
      layout: "point",
      eyebrow: "First hire: support",
      title: "Offload the high-volume work first",
      lead: "Your first hire buys back the hours you lose to tickets, basic questions, and entry-level onboarding steps.",
      bullets: [
        {
          label: "What they take off your plate",
          text: "Tier-one tickets, FAQ answers, software setup confirmation, and basic check-ins.",
        },
        {
          label: "Why they come first",
          text: "Support load compounds with growth — the earlier you offload it, the more offices you can add.",
        },
      ],
      narration:
        "Your first hire is a support person, and the reason is straightforward: support load compounds with every new office you add. A ten-office bureau is manageable solo. A thirty-office bureau in February absolutely is not. A support hire offloads the tier-one work: basic tickets, FAQ answers, software setup confirmations, first-touch onboarding. They don't need to know everything you know — they need the playbook and reliability. Every hour they save you is redirected toward recruiting new offices, improving the model, or working with your highest-value accounts. The support hire doesn't just save time. It changes the kind of work you do.",
    },
    {
      id: "s6",
      layout: "point",
      eyebrow: "Second hire: recruiter",
      title: "Once the pitch is proven, hire someone to run it",
      lead: "Recruiting is high-value, high-time work — the perfect task to hand off once your pitch is documented and your best channel is identified.",
      bullets: [
        {
          label: "The prerequisite",
          text: "Document the pitch first: the value proposition, the objections, the close. Don't hire a recruiter to figure it out.",
        },
        {
          label: "What they take over",
          text: "Pipeline outreach, demos, follow-up, and getting prospects to signed and onboarding.",
        },
      ],
      narration:
        "The second hire is a recruiter or sales rep, but only after the pitch is proven. This is important: don't hire a recruiter to figure out the pitch for you. If you don't yet know your value proposition, your best objection answers, and your closing approach, a recruiter will be learning on the job at full salary. Document the pitch yourself first — the positioning, the economics walkthrough, the three most common objections, the close. Once it's written down and you've closed a meaningful number of offices using it, hand it to a recruiter who runs the process. Now your recruiting channel can operate in parallel with everything else you do.",
    },
    {
      id: "s7",
      layout: "tip",
      eyebrow: "Second hire",
      title: "A recruiter multiplies a proven pitch, not an unclear one",
      callout: {
        kind: "tip",
        title: "Document first, hire second",
        text: "The value of a recruiter is speed and volume on a proven process. Hiring before the process is proven means paying for confusion.",
      },
      narration:
        "A recruiter's value is multiplying something that already works. They add speed and volume to a proven process. If the process isn't proven, they just add overhead. So before you write the job listing, ask: can I walk a new hire through my exact pitch, word for word, and have them do it competently in two weeks? If yes, hire. If no, document first. The documentation you do before hiring the recruiter also becomes their training manual. Two birds, one effort.",
    },
    {
      id: "s8",
      layout: "point",
      eyebrow: "Third hire: account manager",
      title: "The account manager owns retention",
      lead: "The third hire most directly protects your renewal rate — they own first-90-day onboarding and the ongoing health of the whole network.",
      bullets: [
        {
          label: "First 90 days",
          text: "They run the onboarding checklist, do the live walk-through, and execute the proactive check-in cadence.",
        },
        {
          label: "Ongoing health",
          text: "Quarterly check-ins, loyalty touches, renewal conversations, and flagging at-risk offices.",
        },
      ],
      narration:
        "The account manager owns two things: the first ninety days for every new office, and the ongoing health of the whole network. On the onboarding side, they run the checklist, do the live walk-through, execute the thirty, sixty, and ninety-day check-ins. On the ongoing side, they manage the quarterly check-in calendar, the off-season loyalty touches, and the renewal conversations. They're also the early-warning system for at-risk offices: the ones going quiet, the ones whose volume is dropping, the ones who might be listening to a competitor. This role is the institutional memory of your office relationships and the backbone of your renewal rate.",
    },
    {
      id: "s9",
      layout: "tip",
      eyebrow: "Documentation",
      title: "SOPs are the multiplier — document everything",
      callout: {
        kind: "tip",
        title: "Ramp in days, not months",
        text: "A bureau with written SOPs can onboard a new hire in days. A bureau where everything lives in the owner's head onboards in months — and loses quality every time someone leaves.",
      },
      narration:
        "Before you can hire effectively, you need to document. Not a filing cabinet of policies — functional, step-by-step standard operating procedures for every repeatable task. The onboarding checklist. The support triage process. The bank-product setup steps. The recruiting pitch with the exact flow, objection responses, and close. The quarterly check-in agenda. When these are written down, a new hire reaches proficiency in days. When they live only in the owner's head, every hire is a long ramp, every departure is a loss of institutional knowledge, and the bureau never scales past the founder. Documents are the multiplier that lets your team run the bureau.",
    },
    {
      id: "s10",
      layout: "list",
      eyebrow: "A real example",
      title: "An onboarding SOPs checklist for a new hire",
      bullets: [
        {
          label: "Welcome and access",
          text: "Send the welcome packet, confirm credentials, schedule the live walk-through.",
        },
        {
          label: "Software verification",
          text: "Confirm installation, EFIN linking, and a test return filed — each step documented.",
        },
        {
          label: "Bank-product enrollment",
          text: "Walk the office through enrollment, track approval, and confirm pricing is live.",
        },
        {
          label: "Live walk-through",
          text: "Conduct the screen-share session using the standard agenda, then have the office drive one.",
        },
        {
          label: "30, 60, 90-day check-ins",
          text: "Scheduled calls using the standard question template for each stage.",
        },
      ],
      narration:
        "Here's what an onboarding SOP checklist for a new account manager looks like. Welcome and access: send the welcome packet, confirm credentials, get the live walk-through on the calendar. Software verification: confirm installation, EFIN linking, and a test return — each step with a guide. Bank-product enrollment: walk through the process, track approval, confirm pricing is live. Live walk-through: the screen-share session using your standard agenda, followed by having the office drive one. And the thirty, sixty, ninety-day check-ins: scheduled and conducted using your standard question template. A new hire with this checklist can run a complete onboarding without inventing anything. That's the whole point.",
    },
    {
      id: "s11",
      layout: "list",
      eyebrow: "A real example",
      title: "A sample hiring-order plan by season",
      bullets: [
        {
          label: "Season 1 or 2 — Document everything",
          text: "Before any hire, write the SOPs: onboarding, support, recruiting pitch, check-in cadence.",
        },
        {
          label: "Season 2 — First support hire",
          text: "Bring on a support person once you have the playbook and ticket volume to justify it.",
        },
        {
          label: "Season 3 — Recruiter or sales rep",
          text: "Pitch proven and channel identified — hire to run it.",
        },
        {
          label: "Season 3 or 4 — Onboarding and account manager",
          text: "The hire that most directly protects your renewal rate.",
        },
      ],
      narration:
        "Here's an illustrative hiring-order plan spread across seasons. In seasons one and two, before you hire anyone, document everything: SOPs for onboarding, support, the recruiting pitch, and the check-in cadence. In season two, bring on your first support person once the playbook exists and ticket volume justifies the hire. In season three, add the recruiter or sales rep once you've proven the pitch and identified the best channel. In seasons three or four, add the onboarding and account manager. This is a guideline, not a law. Your timing depends on your growth pace and current bottleneck. But the order — document first, then support, then recruiter, then account manager — builds on solid ground.",
    },
    {
      id: "s12",
      layout: "point",
      eyebrow: "Your role shifts",
      title: "You move from doing to building",
      lead: "When a team is in place, your job shifts to building and improving the system and the people who run it.",
      bullets: [
        {
          label: "From executor to architect",
          text: "Your best hours go to strategy, key partnerships, and developing the team.",
        },
        {
          label: "Quality through systems",
          text: "A good system runs well when you're not watching, not just when you are.",
        },
      ],
      narration:
        "Here's the shift that marks a bureau that has truly scaled. Your job is no longer to do every demo, answer every ticket, or personally run every check-in. Your job becomes building and improving the systems and people who do those things — and doing them consistently without you in the loop. Your best hours go to strategy, improving unit economics, building relationships with software and bank partners, and developing the team. A useful test: if you took a week off, how much would service quality drop? In a bureau still dependent on the founder, the answer is: a lot. In a bureau with real systems and a capable team, the answer is: not much. That gap is what you're building toward.",
    },
    {
      id: "s13",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Hiring before documenting",
      callout: {
        kind: "warn",
        title: "An undocumented bureau can't scale",
        text: "The most common team-building mistake: hiring before writing the playbook. New hires either invent inconsistent processes or constantly ask the owner — defeating the purpose of hiring.",
      },
      narration:
        "The most common team-building mistake is hiring before documenting. The owner gets busy, decides to bring on help, and the new person shows up on day one asking: how do we do this? The answer is either an inconsistent answer from memory or a two-hour shadowing session that has to be repeated with every new hire. That defeats the purpose. The playbook is the prerequisite to hiring, not a nice-to-have afterward. And the good news: writing the SOPs clarifies your own processes. You'll often find while writing that a step is inefficient or unnecessary. Documentation makes the bureau better before the first hire even starts.",
    },
    {
      id: "s14",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Adding a recruiter before the pitch is proven",
      callout: {
        kind: "warn",
        title: "Don't outsource a problem you haven't solved",
        text: "A recruiter handed an unproven pitch will run it badly and produce expensive, low-quality signings. Prove the pitch yourself first, then hire to multiply it.",
      },
      narration:
        "A related mistake: hiring a recruiter or sales rep before you've proven the pitch yourself. If you haven't personally closed enough offices to know exactly what works — what value proposition lands, which objections come up, how to close — handing that job to a hired rep means they're figuring it out on your dime. The resulting signings tend to be lower quality because the rep doesn't fully understand what makes a good office fit. Close the first wave yourself. Document what worked. Then hand a proven, documented playbook to a recruiter who multiplies it. You'll get far better active offices at a lower effective CAC.",
    },
    {
      id: "s15",
      layout: "action",
      eyebrow: "Your turn",
      title: "Identify your personal bottleneck",
      callout: {
        kind: "action",
        title: "Name the constraint",
        text: "List the five tasks that consume most of your time. Circle the one that most limits your bureau's growth. That's your first hire target — find the person who can own that task.",
      },
      narration:
        "Now it's your turn. List the five tasks that consume the most of your time in a typical week — tickets, demos, onboarding calls, bank-product troubleshooting, check-ins. Now circle the one that most limits your bureau's growth. If it's support volume, your next hire is a support person. If it's the recruiting funnel, it's a sales rep — but first check: is the pitch documented? If it's retention and office relationships, it's an account manager. Name the constraint clearly. That's the role you're building toward. When you know what to hire for, the job description, training plan, and SOP to hand them all become much easier to create.",
    },
    {
      id: "s16",
      layout: "action",
      eyebrow: "Your turn",
      title: "Write one SOP this week",
      callout: {
        kind: "action",
        title: "Start the playbook",
        text: "Pick the single most-repeated task in your bureau. Write it as a numbered checklist right now. That's your first SOP — the start of the playbook that makes every future hire faster and more consistent.",
      },
      narration:
        "One final exercise: pick the single most-repeated task in your bureau — the thing you or someone on your team does the same way every time. Maybe it's new-office software verification. Maybe it's the thirty-day check-in call. Maybe it's bank-product enrollment. Write it down as a numbered checklist, in plain language, right now. That's your first SOP. Then commit to writing one more next week. Over a month you'll have a real playbook. And when you sit down to hire, you'll have something to hand the new person on day one instead of rebuilding it from memory each time.",
    },
    {
      id: "s18",
      layout: "point",
      eyebrow: "Hiring order in detail",
      title: "A season-by-season hiring roadmap",
      lead: "The hiring order isn't arbitrary — each role builds on the infrastructure the previous role required you to create.",
      bullets: [
        {
          label: "Support hire requires the playbook",
          text: "You can't hire support staff before you have written SOPs — they need a playbook, not just your example.",
        },
        {
          label: "Recruiter requires the proof",
          text: "The recruiter is handed a proven, documented pitch — their value is volume and speed, not discovery.",
        },
        {
          label: "Account manager requires the system",
          text: "The AM runs the check-in cadence, the onboarding checklist, and the renewal calendar — all of which must exist before they start.",
        },
      ],
      narration:
        "Each role's effectiveness depends on work done before the hire. A support person needs written SOPs — without them every situation gets handled inconsistently and escalates back to you. A recruiter needs a proven, documented pitch — their value is speed and volume on something already working. The account manager needs the onboarding checklist and check-in calendar to exist before they start. Hire in order so each person can hit the ground running.",
    },
    {
      id: "s19",
      layout: "list",
      eyebrow: "A real example",
      title: "SOP checklist for onboarding a support hire",
      bullets: [
        {
          label: "Before the hire starts",
          text: "All tier-one SOPs written and reviewed; ticket system configured; escalation path defined.",
        },
        {
          label: "Day 1 — Systems access",
          text: "Ticket system login, shared knowledge base access, contact list for escalation, and the welcome script.",
        },
        {
          label: "Day 1–3 — Shadowing",
          text: "New hire observes you handling ten to fifteen real tickets. Each call debriefed with the relevant SOP.",
        },
        {
          label: "Day 4–7 — Supervised handling",
          text: "New hire handles tickets with you reviewing responses before they're sent. Catch gaps early.",
        },
        {
          label: "Week 2+ — Independent with check-ins",
          text: "New hire handles tier-one independently; weekly fifteen-minute check-in to surface patterns and edge cases.",
        },
      ],
      narration:
        "Before the hire starts, SOPs are written and the ticket system configured. Day one: systems access and the welcome script. Days one through three: shadow real tickets, debrief with the SOP each time. Days four through seven: supervised handling — they respond, you review. Week two onward: independent on tier-one with a weekly fifteen-minute check-in. This ramp is repeatable for every future support hire once the playbook is in place.",
    },
    {
      id: "s20",
      layout: "tip",
      eyebrow: "Documentation",
      title: "One SOP at a time adds up fast",
      callout: {
        kind: "tip",
        title: "The one-a-week habit",
        text: "Writing one SOP per week for a month gives you four foundational documents. Writing one per week for a quarter gives you a complete playbook. Start with the task you repeat most often.",
      },
      narration:
        "One SOP per week is sustainable for almost any bureau. In a month: four documents. In a quarter: a real playbook covering onboarding, support triage, the recruiting pitch, and the check-in cadence. Start with the task you repeat most often right now — that's the highest-leverage document to have first. Writing each SOP also clarifies your own process — you'll often find a step that's unnecessary or a faster way to do something. The playbook builds itself one document at a time.",
    },
    {
      id: "s21",
      layout: "point",
      eyebrow: "Hiring: the job post",
      title: "What a strong support-staff job post includes",
      lead: "A job post that attracts the right candidate describes the role, the context, and what success looks like — not just a list of tasks.",
      bullets: [
        {
          label: "The bureau context",
          text: "Briefly describe what a service bureau does and who the offices are — candidates unfamiliar with tax software need orientation.",
        },
        {
          label: "What they'll actually do",
          text: "Specific tasks: ticket response, software setup guidance, onboarding steps, escalations to you.",
        },
        {
          label: "What success looks like",
          text: "Clear metric — response time target, resolution rate, office satisfaction signals.",
        },
      ],
      narration:
        "A strong support-staff post has three elements. Context: a few sentences explaining what a service bureau does — most candidates won't know, so a clear explanation helps them self-select honestly. Specific tasks: ticket response, software setup guidance, onboarding steps, escalation path. And success metrics: a response-time target, a resolution rate. Specificity filters bad fits before the first interview.",
    },
    {
      id: "s22",
      layout: "list",
      eyebrow: "A real example",
      title: "Support-staff job post template — copy and customize",
      bullets: [
        {
          label: "Opening line",
          text: "We are a tax service bureau supporting a network of independent tax offices across [region]. We're hiring a Support Specialist to own our tier-one office support during and after the filing season.",
        },
        {
          label: "What you'll do",
          text: "Respond to office tickets within [X hours], walk offices through software setup and bank-product enrollment, escalate complex issues to the bureau director, and run our 30-60-90 day check-in calls.",
        },
        {
          label: "What success looks like",
          text: "Offices get same-day responses on tier-one issues. Onboarding is fully documented and consistent. Director is not pulled into issues the playbook already covers.",
        },
        {
          label: "What we offer",
          text: "Remote-friendly, seasonal ramp in January-April with potential for year-round. Training on our full SOP library before your first ticket.",
        },
      ],
      narration:
        "Fill in your region, response-time target, and season schedule. The opening explains what a bureau is and the role clearly. The tasks section is specific: tickets, software setup, bank-product enrollment, check-in calls. The success section is measurable: same-day tier-one responses, consistent onboarding, director not pulled into issues the playbook covers. Full SOP training before the first ticket shows candidates you have a real playbook.",
    },
    {
      id: "s23",
      layout: "action",
      eyebrow: "Your turn",
      title: "Draft your first support-staff job post",
      callout: {
        kind: "action",
        title: "Write it now — even if you're not hiring yet",
        text: "Use the template above. Fill in your region, the specific tasks your support hire will own, and what success looks like for your bureau. Having a draft job post ready means hiring takes days, not weeks, when the moment comes.",
      },
      narration:
        "Write your first draft now, even if you're months from hiring. Fill in the region, the specific tasks based on your current support bottlenecks, and your definition of success. Writing the post before you need it forces clarity on what the role requires — and it often reveals gaps in your SOPs. When the hiring moment arrives, you have a draft and a playbook ready. Preparation is what makes hiring fast instead of frantic.",
    },
    {
      id: "s24",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Waiting until the bureau is overwhelmed to hire",
      callout: {
        kind: "warn",
        title: "Hire before the crisis, not because of it",
        text: "Bureau owners almost universally hire too late — after the February collapse, not before. Hiring in crisis means rushed onboarding, lower-quality training, and a new hire who starts behind. Hire before the pressure forces your hand.",
      },
      narration:
        "The most common timing mistake: hiring only after the February collapse. A hire made in crisis gets rushed onboarding, inadequate training, and a frantic first week — they're starting behind. Compare that to a hire made in October: two months of onboarding, complete SOP training, and a calm January ramp. The outcomes are entirely different. If your bottleneck analysis says you need a support hire, start the search in August or September. Build the team before the season forces your hand.",
    },
    {
      id: "s17",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "A solo bureau caps at the founder's hours — the only way past that ceiling is a team." },
        { text: "Hire in order: support staff first, recruiter second (once the pitch is documented), account manager third." },
        { text: "Document everything before you hire — SOPs let new hires ramp in days and protect institutional knowledge." },
        { text: "The account manager owns first-90-day onboarding and ongoing office health — the direct protector of your renewal rate." },
        { text: "Your job shifts from doing every task to building the systems and team that do them well without you." },
      ],
      subtitle: "Up next: Expand Revenue Per Office",
      narration:
        "Let's recap. One: a solo bureau caps at your hours — a team is the only way past that ceiling. Two: hire in order, support staff first, recruiter second once the pitch is documented, account manager third. Three: document before you hire — SOPs let new hires ramp in days and protect institutional knowledge. Four: the account manager is the direct guardian of your renewal rate, owning first-90-day onboarding and the whole network's ongoing health. And five: your job shifts from doing every task to building the systems and people that do them well without you in every conversation. Next, a growth lever most bureaus ignore: how to expand revenue from the offices you already have. See you in Expand Revenue Per Office.",
    },
  ],
};
