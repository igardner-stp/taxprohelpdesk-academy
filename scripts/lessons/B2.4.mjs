// =============================================================================
// Interactive lesson definition — Bureau Lesson 2.4 "Handle Problem Offices"
//
// Authoring source for the narrated interactive experience. The generator
// (scripts/generate-lesson-media.mjs) reads this, produces ElevenLabs audio +
// timings per slide, and assembles the lesson media manifest.
//
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Handle Problem Offices",
  trackId: "bureau",
  key: "B2.4",

  slides: [
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Bureau Track · Module 2: Support & Retain Your Offices",
      title: "Handle Problem Offices",
      subtitle: "Lesson 4 · Narrated walkthrough",
      narration:
        "Welcome to the last lesson of Module Two. We've spent three lessons on keeping offices, because retention is your engine. But here's the hard counterpoint that closes the module: not every office is worth keeping. A few create disproportionate support cost, carry real bank-product or compliance risk, or are simply unprofitable. Every hour you spend rescuing a lost cause is stolen from an office that would have grown. By the end you'll have a problem-office scorecard, a three-step playbook, and respectful scripts for the hard conversations.",
    },
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core idea",
      title: "Your support hours are finite",
      lead: "Retention is the goal — but retaining the wrong office actively costs you the right ones.",
      bullets: [
        {
          label: "Not all retention is good",
          text: "Keeping an office that drains you isn't loyalty — it's a slow leak you chose.",
        },
        {
          label: "Every hour is a trade-off",
          text: "Time spent rescuing a lost cause is time not spent growing a healthy office.",
        },
      ],
      narration:
        "Let's start with the idea that makes this lesson make sense: your support hours are finite. After a whole module on retention, it can feel like a contradiction to talk about letting offices go. It isn't. Retaining the wrong office actively costs you the right ones. If one office eats hours every week with the same problems, that time comes from somewhere: the healthy office you could have coached, the prospect you didn't recruit. Keeping an office that drains you isn't loyalty. It's a slow leak you chose to keep open.",
    },
    {
      id: "s3",
      layout: "point",
      eyebrow: "Why it matters",
      title: "A few offices can swallow your whole season",
      lead: "The hardest accounts don't just cost money — they cost the attention your good offices needed.",
      bullets: [
        {
          label: "The drain is hidden",
          text: "You feel busy and stretched without seeing where the hours actually go.",
        },
        {
          label: "Good offices pay for it",
          text: "The attention a problem office eats is attention pulled from your best accounts.",
        },
      ],
      narration:
        "Let me make the stakes vivid. A small number of difficult offices can quietly swallow your whole season, and you may not even see it. It just feels like you're always stretched, never caught up. What's happening is that a handful of accounts consume a wildly outsized share of your hours and worry. And that attention has to come from somewhere: your good offices. The growing one you meant to coach. The loyal one you meant to call. They got the leftovers, because a problem office ate the main course.",
    },
    {
      id: "s4",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "The 80-20 of support load",
      callout: {
        kind: "stat",
        title: "Where your hours really go",
        text: "As a rule of thumb, a small share of offices generate a large share of support load. Illustratively, the bottom 10 percent can consume hours that dwarf the revenue they bring.",
      },
      narration:
        "Let's put some shape on this. Support load is rarely spread evenly. A small share of offices tends to generate a large share of the headaches, the tickets, the late-night calls, the risk flags. Illustratively, imagine the bottom ten percent of your offices, ranked by trouble, consuming a quarter or more of your total support hours while bringing in a fraction of your revenue. That's a direct transfer of your most valuable resource, your attention, away from the offices funding your business. Most owners have never measured which offices cost them the most. That's what the scorecard is for.",
    },
    {
      id: "s5",
      layout: "list",
      eyebrow: "Identify them",
      title: "The four warning signs",
      bullets: [
        {
          label: "High support hours",
          text: "The same office, the same problems, far above the network average.",
        },
        {
          label: "Low volume",
          text: "Few returns filed, so the revenue can't justify the support they consume.",
        },
        {
          label: "Frequent bank-product issues",
          text: "Repeated rejections, disputes, or red flags that signal risk, not just inexperience.",
        },
        {
          label: "Slow or disputed payments",
          text: "They're late, they chargeback, or they argue every invoice — a cash and trust drain.",
        },
      ],
      narration:
        "So how do you identify a problem office? Four warning signs. First, high support hours: the same office calling with the same problems, far above what a typical office needs. Second, low volume: few returns, so revenue can't justify the support they consume. One alone might be fine. Together they're a money-loser. Third, frequent bank-product issues: rejections, disputes, or patterns that look less like inexperience and more like risk. And fourth, slow or disputed payments. Watch for these together, not in isolation.",
    },
    {
      id: "s6",
      layout: "point",
      eyebrow: "Identify them",
      title: "One sign is noise; a cluster is a signal",
      lead: "Healthy offices have rough patches too — what flags a problem is the pattern.",
      bullets: [
        {
          label: "Don't overreact to one",
          text: "A single hard month or one dispute isn't a verdict on an office.",
        },
        {
          label: "Watch for the combination",
          text: "Two or three signs together, repeating, is the real warning.",
        },
      ],
      narration:
        "An important nuance before you start labeling offices. One warning sign on its own is usually just noise. Every healthy office has a rough month or one disputed invoice when something genuinely went wrong. That doesn't make them a problem office, and overreacting damages good relationships. What flags a problem is the pattern: two or three signs together, and repeating, season after season. An office with high support hours, low volume, and a payment dispute every year is telling you something real. Read the cluster, not the incident.",
    },
    {
      id: "s7",
      layout: "list",
      eyebrow: "A real example",
      title: "A problem-office scorecard",
      bullets: [
        {
          label: "Support hours per season",
          text: "Score high if well above your network average; low if light-touch.",
        },
        {
          label: "Return volume / revenue",
          text: "Score the revenue they bring against the cost to serve them.",
        },
        {
          label: "Bank-product / compliance flags",
          text: "Count repeated rejections, disputes, or risk signals — weight these heavily.",
        },
        {
          label: "Payment reliability",
          text: "On-time and undisputed, or chronically late and contested?",
        },
        {
          label: "Trajectory",
          text: "Improving with coaching, flat, or getting worse season over season?",
        },
      ],
      narration:
        "Let's turn those signs into a tool: a problem-office scorecard. For each office, score five things. One, support hours per season. Two, return volume and revenue: what they bring in versus what it costs to serve them. Three, bank-product and compliance flags: count repeated rejections, disputes, or risk signals, and weight these heavily, because risk isn't just expensive, it's dangerous. Four, payment reliability: on time, or chronically late? And five, trajectory: improving, flat, or getting worse? Score your whole network, and the problem offices become a short, objective list, ranked by what they cost you.",
    },
    {
      id: "s8",
      layout: "tip",
      eyebrow: "Pro tip",
      title: "Weight trajectory the heaviest",
      callout: {
        kind: "tip",
        title: "Direction beats position",
        text: "A struggling office that's improving is worth keeping; a decent one sliding the wrong way needs attention now. Where they're heading matters more than where they are.",
      },
      narration:
        "Here's a pro tip on reading that scorecard. Weight trajectory the heaviest, because direction matters more than position. An office that's struggling today but clearly improving, fewer tickets, volume climbing, is worth keeping. Meanwhile, an office that looks decent on paper but is sliding, rising disputes, falling volume, more risk flags, needs attention right now, before the slide becomes a crisis. So don't just rank offices by where they are. Rank them by where they're heading. Trajectory is your best predictor.",
    },
    {
      id: "s9",
      layout: "tip",
      eyebrow: "Compliance",
      title: "Treat bank-product and compliance risk seriously",
      callout: {
        kind: "warn",
        title: "Risk is a different category",
        text: "Repeated bank-product fraud signals or EFIN and compliance problems aren't just costly — they can expose your bureau. Document concerns, follow your bank's and the IRS's processes, and seek qualified counsel.",
      },
      narration:
        "Before the playbook, one category needs special care: risk. High support hours and low volume cost you money, and money problems you can usually coach or reprice your way out of. But repeated bank-product fraud signals, or EFIN and compliance problems, are a different category entirely, because they can expose your bureau, not just your margin. Handle these responsibly. Document your concerns factually. Follow your bank's and program's established processes and official IRS guidance, rather than improvising. And when a genuine compliance or legal question arises, seek qualified counsel. This is business-operations training, not legal advice. A risk problem is rarely a coaching problem.",
    },
    {
      id: "s10",
      layout: "point",
      eyebrow: "Compliance",
      title: "Protect the network, not just the margin",
      lead: "A risky office isn't only your problem — it can affect every office you serve.",
      bullets: [
        {
          label: "Risk can spread",
          text: "A compliance failure at one office can draw scrutiny that touches the network.",
        },
        {
          label: "Don't let retention override duty",
          text: "Wanting to keep an office is no reason to carry a risk you shouldn't.",
        },
      ],
      narration:
        "Let me extend that, because it's where this lesson turns from money to responsibility. A genuinely risky office isn't only your problem to absorb. Compliance failures and fraud signals can draw scrutiny that reaches beyond the single office to touch the standing of your whole network. So when you weigh a high-risk office, you're protecting every other office that trusts your bureau to run a clean operation. Your duty to the network comes before your wish to keep one account.",
    },
    {
      id: "s11",
      layout: "point",
      eyebrow: "The playbook",
      title: "Step 1 — Coach first",
      lead: "Many problem offices aren't bad — they're untrained. Solve that before you do anything drastic.",
      bullets: [
        {
          label: "Diagnose the root cause",
          text: "Is the same issue really a skills gap you can close with training?",
        },
        {
          label: "Give them a real shot",
          text: "Targeted coaching, a refresher, a clear plan — then watch the trajectory.",
        },
      ],
      narration:
        "Now the three-step playbook, and the first step is almost always the same: coach first. Here's what most owners miss in frustration. Many problem offices aren't bad offices. They're untrained ones. The office racking up hours with the same bank-product error may simply never have learned the workflow. So before anything drastic, diagnose the root cause honestly. Is this really a training problem you can close? If so, give them a real shot: targeted coaching, a refresher, a clear plan. Then watch the trajectory. Coaching is cheap compared to recruiting a replacement, so it's the right first move.",
    },
    {
      id: "s12",
      layout: "tip",
      eyebrow: "Script",
      title: "The coaching conversation opener",
      callout: {
        kind: "quote",
        title: "Say this with care, not blame",
        text: "\"Hey Priya — I've noticed the bank-product setup keeps tripping you up, and I don't want that costing you clients. Let's spend 30 minutes this week walking it through properly so it's smooth all season. Sound good?\"",
      },
      narration:
        "Here's a copy-ready opener for that coaching conversation, framed with care instead of blame. Something like: Hey Priya, I've noticed the bank-product setup keeps tripping you up, and I don't want that costing you clients. Let's spend thirty minutes this week walking it through properly so it's smooth all season. Sound good? You lead with what you've observed, factually, not accusingly. You tie it to their interest. And you offer a concrete, time-boxed fix. An office that feels attacked digs in. An office that feels helped leans in and improves.",
    },
    {
      id: "s13",
      layout: "point",
      eyebrow: "The playbook",
      title: "Coaching that works often makes a loyal office",
      lead: "An office you rescued with patience can become one of your most committed.",
      bullets: [
        {
          label: "Gratitude builds loyalty",
          text: "An office you helped through a rough start remembers who stood by them.",
        },
        {
          label: "Better data next season",
          text: "A coached office that improves shows up clearly on your scorecard.",
        },
      ],
      narration:
        "Don't think of step one as just damage control. Done well, coaching a struggling office can produce one of your most loyal accounts. They were drowning in a problem they didn't understand, maybe half-expecting you to give up on them. Instead, you showed up with patience and a plan and pulled them through. That office doesn't forget who stood by them. The coaching that fixes the support drain often builds exactly the gratitude we spent the last lesson trying to create, and you'll see it on next season's scorecard. Coaching first isn't soft.",
    },
    {
      id: "s14",
      layout: "point",
      eyebrow: "The playbook",
      title: "Step 2 — Price for risk",
      lead: "If an office stays high-cost or high-risk after coaching, adjust the terms to reflect what they actually cost.",
      bullets: [
        {
          label: "Terms should match cost",
          text: "An office that consumes far more support can fairly carry different terms.",
        },
        {
          label: "Repricing is honest, not punitive",
          text: "You're aligning what they pay with what they truly cost to serve.",
        },
      ],
      narration:
        "Step two, for offices that don't turn around with coaching: price for risk. If an office stays high-cost or high-risk even after you've genuinely tried to help, the answer isn't always to cut them. Sometimes it's to adjust the terms to reflect what that office actually costs to serve. An office that consumes three times the support of a typical one can fairly carry a higher fee, a different split, or a support package matching their usage. This isn't punitive. It's honest. Every other office is effectively subsidizing the heavy user. Some accept and become profitable. Others decline, and in declining, make the decision for you.",
    },
    {
      id: "s15",
      layout: "tip",
      eyebrow: "Script",
      title: "The repricing conversation",
      callout: {
        kind: "quote",
        title: "Frame it as fairness",
        text: "\"To keep supporting your office at the level you need, we're adjusting your terms for next season to reflect the support involved. Here's what that looks like — and here's what stays exactly the same.\"",
      },
      narration:
        "Here's a copy-ready way to open the repricing conversation, framed as fairness. Something like: to keep supporting your office at the level you need, we're adjusting your terms for next season to reflect the support involved. Here's what that looks like, and here's what stays exactly the same. You frame it around continuing to support them well, not around them being a problem, and you reassure them about what isn't changing, so it doesn't feel like the rug being pulled out. The ones who walk away over fair terms were rarely going to become good accounts anyway.",
    },
    {
      id: "s16",
      layout: "point",
      eyebrow: "The playbook",
      title: "Step 3 — Cut when needed",
      lead: "A chronically unprofitable or risky office that won't improve should be released — respectfully.",
      bullets: [
        {
          label: "Cut the lost causes, not the strugglers",
          text: "Release the office that's been coached, repriced, and still won't improve.",
        },
        {
          label: "Free the hours for growth",
          text: "Letting one drain go gives those hours back to offices that will grow.",
        },
      ],
      narration:
        "Step three is the hardest, and the one owners avoid until it's done real damage: cut when needed. After you've coached and offered fair terms, some offices simply won't improve. The chronically unprofitable one. The one carrying risk that won't go away. That office should be released, respectfully and professionally. Be precise about who this is: the lost causes you've already coached and repriced, not the early strugglers who need help. When you let a true drain go, all those hours flow back into the offices that will actually grow. Cutting the right office protects your capacity to retain everyone worth keeping.",
    },
    {
      id: "s17",
      layout: "tip",
      eyebrow: "Script",
      title: "The respectful offboarding script",
      callout: {
        kind: "quote",
        title: "Keep it professional and clean",
        text: "\"After this season, we've decided we're not the right fit to continue supporting your office, and we want to give you plenty of time to transition. We'll help you wind down cleanly and point you toward your options. We wish you well.\"",
      },
      narration:
        "Here's a copy-ready offboarding script, because how you end a relationship matters as much as how you start one. Something like: after this season, we've decided we're not the right fit to continue supporting your office, and we want to give you plenty of time to transition. We'll help you wind down cleanly and point you toward your options. We wish you well. It's clear and final, no false hope. It gives notice and time, never a mid-season surprise that strands clients. It stays professional and avoids blame. An office offboarded with dignity won't become a story that costs you future recruits.",
    },
    {
      id: "s18",
      layout: "point",
      eyebrow: "The playbook",
      title: "Offboard cleanly — it protects your reputation",
      lead: "Even a release you had to make should leave the office's clients safe and your name intact.",
      bullets: [
        {
          label: "Mind the timing",
          text: "Give notice between seasons, never mid-crush, so their clients aren't stranded.",
        },
        {
          label: "Hand off responsibly",
          text: "Point them to their options and wind down access cleanly and on the record.",
        },
      ],
      narration:
        "Let's stay on offboarding, because doing it cleanly protects more than your feelings. First, mind the timing. Release an office between seasons, with real notice, never mid-crush, because their clients are real people who need their returns filed. Second, hand off responsibly. Point the office toward their options, wind down access cleanly and on the record, and keep your conduct above reproach. Where genuine compliance questions arise, lean on qualified counsel. A clean exit means the office you released still speaks neutrally about you, and your reputation stays intact.",
    },
    {
      id: "s19",
      layout: "point",
      eyebrow: "A real example",
      title: "Walking one office through the playbook",
      lead: "See how the same office can end up coached, repriced, or released depending on how it responds.",
      bullets: [
        {
          label: "The diagnosis",
          text: "Low volume, triple the support hours, two bank-product disputes last season.",
        },
        {
          label: "The path",
          text: "Coach the workflow; if no change, reprice for the load; if still no change, release with notice.",
        },
      ],
      narration:
        "Let's walk one illustrative office through the playbook. Picture an office that files low volume, consumes triple the support hours of your average office, and had two bank-product disputes last season. On the scorecard, they're clearly in problem territory. So you start with step one and coach, diagnosing that the disputes came from a setup they never learned properly, and fixing it in a focused session. If their numbers improve, you keep a now-healthy office. If support hours stay high but there's no real risk, you reprice. And if they decline and nothing changes, or the risk persists, you release them with notice. Same office, three endings, each one fair.",
    },
    {
      id: "s20",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Tolerating a drain out of guilt",
      callout: {
        kind: "warn",
        title: "Inaction is a decision too",
        text: "Avoiding the hard conversation doesn't make the cost disappear — it just keeps charging it to your healthy offices and your own capacity, season after season.",
      },
      narration:
        "Now the common mistake, emotional rather than numerical: tolerating a drain out of guilt. Owners hold onto deeply unprofitable or risky offices for years, telling themselves it would feel bad to let them go, or that maybe next season will be different. But inaction is a decision too. Avoiding the hard conversation doesn't make the cost disappear. It just keeps charging it to your healthy offices and your own finite capacity. The guilt about offboarding one struggling office is real, but smaller than the harm of starving twenty good offices to prop up one that won't improve. Coach generously, reprice fairly, and when needed, cut cleanly.",
    },
    {
      id: "s21",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Skipping straight to the cut",
      callout: {
        kind: "warn",
        title: "Don't cut before you coach",
        text: "Jumping to release without coaching first burns offices that just needed training — and trains the rest of your network to fear you. Always run the playbook in order.",
      },
      narration:
        "Here's the opposite mistake, just as costly: skipping straight to the cut. A fed-up owner sees a problem office and releases them on the spot, no coaching, no chance. That's wrong for two reasons. First, you likely just cut an office that only needed training, throwing away an account you could have saved. And second, word gets around. If your network learns you cut offices quickly when they struggle, every office feels one bad month away from being dropped, and that fear erodes the loyalty you've built. So always run the playbook in order. Coach first, reprice second, cut only last.",
    },
    {
      id: "s22",
      layout: "action",
      eyebrow: "Your turn",
      title: "Score your bottom five offices",
      callout: {
        kind: "action",
        title: "Make the list objective",
        text: "Run your bottom 5 offices through the five-point scorecard: support hours, volume/revenue, bank-product flags, payment reliability, trajectory. Let the scores — not your gut — flag the real problems.",
      },
      narration:
        "Now it's your turn. Take the five offices that nag at you the most and run them through the scorecard, scoring each on the five factors. The goal is to replace your gut feeling with something objective. You may find an office you thought was a problem is actually fine, just a little needy, while one you'd been tolerating is quietly your biggest drain. Let the scores do the flagging, not your mood on a hard day. This turns a vague frustration into a clear, ranked list of who needs coaching, who needs repricing, and who may need to go.",
    },
    {
      id: "s23",
      layout: "action",
      eyebrow: "Your turn",
      title: "Pick one office and start at step one",
      callout: {
        kind: "action",
        title: "Coach before you cut",
        text: "Choose your top problem office and schedule the coaching conversation this week. Most problems are training problems — give them a real shot before you escalate.",
      },
      narration:
        "Here's the second exercise. Take the single worst office from your scorecard and, rather than jumping to cutting them, schedule the coaching conversation this week. Step one, first. Use the opener we covered, frame it as help, not blame, and give them a genuine shot. Why start here even with your worst office? Because most problems really are training problems, and coaching is far cheaper than recruiting a replacement. If it works, you've saved an office. If it doesn't, you'll move to repricing or release with a clear conscience and a clear record. Always run the playbook in order.",
    },
    {
      id: "s24",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Not every office is worth keeping — your support hours are finite, and the wrong office costs you the right ones." },
        { text: "Identify problems with a scorecard: support hours, volume, bank-product and compliance flags, payment reliability, trajectory." },
        { text: "Treat bank-product fraud, EFIN, and compliance risk seriously — document, follow official processes, and seek qualified counsel." },
        { text: "Run the playbook in order: coach first, price for risk if they stay, and cut respectfully only when needed." },
        { text: "Tolerating a drain out of guilt just charges the cost to your healthy offices — inaction is a decision too." },
      ],
      subtitle: "Up next: Module 3 — Know Your Bureau Economics",
      narration:
        "Let's recap. One: not every office is worth keeping, because your support hours are finite, and the wrong office costs you the right ones. Two: identify problem offices with a scorecard, on support hours, volume, bank-product and compliance flags, payment reliability, and trajectory. Three: treat bank-product fraud, EFIN, and compliance risk as a serious, separate category, document, follow official processes and IRS guidance, and seek qualified counsel, because this is business training, not legal advice. Four: run the playbook in order, coach first, price for risk, cut respectfully only when needed. And five: don't tolerate a drain out of guilt. That completes Module Two. Next, Module Three: Know Your Bureau Economics. See you there.",
    },
  ],
};
