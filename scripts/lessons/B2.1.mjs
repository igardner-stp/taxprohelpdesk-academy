// =============================================================================
// Interactive lesson definition — Bureau Lesson 2.1 "Onboarding That Sticks"
//
// Authoring source for the narrated interactive experience. The generator
// (scripts/generate-lesson-media.mjs) reads this, produces ElevenLabs audio +
// timings per slide, and assembles the lesson media manifest.
//
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Onboarding That Sticks",
  trackId: "bureau",
  key: "B2.1",

  slides: [
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Bureau Track · Module 2: Support & Retain Your Offices",
      title: "Onboarding That Sticks",
      subtitle: "Lesson 1 · Narrated walkthrough",
      narration:
        "Welcome to Module Two, where we shift from recruiting offices to keeping them. This first lesson is about onboarding, and it might be the highest-return thirty days in your entire bureau. The fastest way to grow is to stop losing offices you already signed. The leak almost always starts in the first month. By the end you'll have a day-by-day onboarding checklist, a clear sense of what to verify before the season heat, and a check-in rhythm that turns a nervous new office into a renewing one.",
    },
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core idea",
      title: "Your fastest growth is keeping who you signed",
      lead: "Every office that churns is a recruiting win you have to earn all over again.",
      bullets: [
        {
          label: "Recruiting is the expensive part",
          text: "You spent real time and money to sign each office — losing one wipes that out.",
        },
        {
          label: "Retention compounds",
          text: "An office you keep five years is worth far more than five you sign and lose.",
        },
      ],
      narration:
        "Here is the core idea: every office that quietly leaves after one season is a recruiting win you have to earn all over again, at full cost. If you sign ten offices and lose six, you're running uphill on a treadmill. Sign ten and keep nine, and the network compounds. Most bureau owners pour energy into recruiting, and that matters, but retention isn't the boring cousin of recruiting. It's the engine.",
    },
    {
      id: "s3",
      layout: "point",
      eyebrow: "Why it matters",
      title: "The leak starts in the first 30 days",
      lead: "Offices don't decide to leave in April — they decide in the first month, when nothing works yet.",
      bullets: [
        {
          label: "First impressions set the tone",
          text: "A rocky setup tells the office they're on their own when it counts.",
        },
        {
          label: "Doubt hardens into a decision",
          text: "An office that struggles early starts shopping competitors before season peaks.",
        },
      ],
      narration:
        "Where does the leak start? Not in April, when an office tells you they're not renewing. It starts in the first thirty days. Picture a new office owner who signed in November, full of optimism. They go to install the software and hit a wall. The bank-product enrollment won't go through. They email you and wait two days. Right there, in that silence, a decision is forming. By the time the season heat arrives, that doubt has already hardened.",
    },
    {
      id: "s4",
      layout: "tip",
      eyebrow: "Why it matters",
      title: "A shaky start poisons the whole season",
      callout: {
        kind: "tip",
        title: "The early lens",
        text: "Early friction doesn't stay early — it becomes the lens an office reads every later interaction through. Win the first week and they give you the benefit of the doubt all season.",
      },
      narration:
        "The early experience doesn't stay early — it becomes the lens the office reads everything through for the rest of the season. An office that struggled alone in week one assumes the worst when something small goes wrong in March. You're teaching the office whether you're a partner who shows up or a vendor who disappears. Winning back lost trust costs far more than earning it cleanly the first time.",
    },
    {
      id: "s5",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "Onboarding is retention insurance",
      callout: {
        kind: "stat",
        title: "The math on a saved office",
        text: "Spending 6 to 8 onboarding hours up front is far cheaper than recruiting a replacement office every year — and most bureaus underspend here.",
      },
      narration:
        "Say it takes you six to eight focused hours to onboard an office properly — the verified setup, the live walk-through, the early check-ins. Compare that to the alternative. If the office churns, you recruit a replacement, which as a rule of thumb costs many times more in time and money. As an illustrative example, if recruiting one office runs the equivalent of forty hours plus a marketing spend, then eight onboarding hours that save that office is one of the best trades in your business. Onboarding is retention insurance, and most bureaus badly underspend on it.",
    },
    {
      id: "s6",
      layout: "list",
      eyebrow: "The core idea",
      title: "What a sticky onboarding actually does",
      bullets: [
        {
          label: "Verifies, doesn't assume",
          text: "Every system is confirmed working before season, not hoped to be working.",
        },
        {
          label: "Builds the relationship early",
          text: "The office hears your voice before they ever have a crisis.",
        },
        {
          label: "Front-loads the friction",
          text: "Setup problems get solved in the calm of November, not the chaos of February.",
        },
        {
          label: "Sets renewal in motion",
          text: "An office that gets a smooth start has already begun deciding to stay.",
        },
      ],
      narration:
        "A sticky onboarding does four things. First, it verifies instead of assuming — you confirm every system works, not hope. Second, it builds the relationship early; the office hears your voice before they have a problem. Third, it front-loads friction, so every setup headache gets solved in the calm of November, not the chaos of February. And fourth, it sets renewal in motion — an office that gets a smooth start has already started deciding to stay.",
    },
    {
      id: "s7",
      layout: "point",
      eyebrow: "Do this",
      title: "Verify the software setup — all the way",
      lead: "A login isn't a setup. The setup isn't done until a test return has actually filed.",
      bullets: [
        {
          label: "Installed and registered",
          text: "The software is on their machine, registered to their account, and opens cleanly.",
        },
        {
          label: "EFIN linked",
          text: "Their EFIN is correctly linked so returns transmit under the right credentials.",
        },
        {
          label: "Test return filed",
          text: "A practice return goes through end to end — the real proof it works.",
        },
      ],
      narration:
        "Handing an office a login is not a setup — that's the very beginning. A real verification has layers. The software is installed on their actual machine and opens cleanly. Their EFIN, their Electronic Filing Identification Number, is correctly linked so returns transmit under the right credentials. And the part almost everyone skips: you walk them through filing a test return, end to end. That's the only real proof the whole chain works.",
    },
    {
      id: "s8",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "An unfiled login is a failure waiting to happen",
      callout: {
        kind: "stat",
        title: "Test before it's live",
        text: "A login that has never filed a return is an unknown. The first time you want to discover a broken setup is November — not with a paying client in the chair.",
      },
      narration:
        "The test-return step is the one people cut to save time, and the one that bites. A login that has never filed a return is functionally an unknown. The first time you want to discover a broken setup is November, when you have time to fix it — not the busiest day of the season with a client in the chair. A five-minute test return now buys you certainty later. File one with every new office, every time.",
    },
    {
      id: "s9",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Don't confirm setup in the January scramble",
      callout: {
        kind: "warn",
        title: "The bank-product crunch",
        text: "Leaving bank-product enrollment until January means hundreds of offices hit the bank's approval queue at once — and your slowest offices get stuck behind the deadline.",
      },
      narration:
        "The common and costly mistake: leaving bank-product enrollment until January. Bank products require an application and approval through the bank or program your bureau works with, and that takes time. Imagine every office in your network rushing to enroll in the first two weeks of January — the approval queue backs up, your slowest offices miss the deadline and lose clients. Remember, settlement practices and timing vary by bank and program, so set accurate expectations rather than overstating what's guaranteed.",
    },
    {
      id: "s10",
      layout: "point",
      eyebrow: "Do this",
      title: "Enroll bank products early — and on purpose",
      lead: "Treat bank-product enrollment as a fall task with a hard internal deadline.",
      bullets: [
        {
          label: "Start in the fall",
          text: "Open enrollment for returning and new offices well before the holidays.",
        },
        {
          label: "Track who's approved",
          text: "Keep a simple list — enrolled, pending, not started — and chase the gaps.",
        },
      ],
      narration:
        "Make bank-product enrollment a deliberate fall task with a hard internal deadline. Open enrollment before the holidays, and track it with a simple list: enrolled and approved, pending, not started. Then chase the gaps. The office that hasn't started by mid-December is the one calling in a panic in January. A five-minute weekly glance at that list in the fall saves a brutal week later. This is the difference between a bureau that runs the season and one the season runs.",
    },
    {
      id: "s11",
      layout: "point",
      eyebrow: "Do this",
      title: "Give a live walk-through, not just a login",
      lead: "People don't remember a PDF. They remember the human who showed them how it works.",
      bullets: [
        {
          label: "Screen-share the real workflow",
          text: "Walk through a return start to finish on a live screen, with them following along.",
        },
        {
          label: "Let them drive",
          text: "Have the office do one with you watching, so they've actually done it.",
        },
      ],
      narration:
        "Sending a login link and a stack of PDFs is not onboarding. People don't remember a PDF — they remember the human who showed them how it works. Schedule a live session, even thirty minutes over a screen share. Walk through a real return start to finish, then let them drive: have the office do one while you watch and coach. An office that has actually filed a return with you on the line walks into the season with confidence instead of dread.",
    },
    {
      id: "s12",
      layout: "tip",
      eyebrow: "Pro tip",
      title: "The walk-through is a relationship, not a demo",
      callout: {
        kind: "tip",
        title: "Make it a conversation",
        text: "Use the live session to learn their goals, their client base, and their worries — you're not just training software, you're becoming the person they'll call first.",
      },
      narration:
        "Don't treat the walk-through as a software demo. Treat it as the first real conversation in a long relationship. While sharing the screen, ask about them: what clients do they serve, what do they want to grow, what worries them about the season ahead. That tells you how to support them and makes them feel seen — a partner, not an account number. The office that finishes thinking this person gets my business is the one that calls you first when something goes wrong. The walk-through trains the software. The conversation builds the loyalty.",
    },
    {
      id: "s13",
      layout: "list",
      eyebrow: "A real example",
      title: "A first-30-days onboarding template",
      bullets: [
        {
          label: "Days 1 to 3 — Welcome & access",
          text: "Send the welcome packet, confirm credentials, schedule the live walk-through.",
        },
        {
          label: "Days 4 to 7 — Software verified",
          text: "Installed and registered, EFIN linked, a test return filed together.",
        },
        {
          label: "Days 8 to 14 — Bank products",
          text: "Enrollment submitted and tracked to approval; pricing set up.",
        },
        {
          label: "Days 15 to 21 — Live walk-through",
          text: "Screen-share session: a full return, then they drive one while you coach.",
        },
        {
          label: "Days 22 to 30 — First check-in",
          text: "A short call: what's unclear, what's left to set up, what they need before opening.",
        },
      ],
      narration:
        "Now let's make it concrete with a first-thirty-days template you can copy. Days one to three, welcome and access: send a warm welcome packet, confirm their credentials work, and get the live walk-through on the calendar before anything else. Days four to seven, software verified: installed and registered, EFIN linked, and a test return filed together. Days eight to fourteen, bank products: enrollment submitted and tracked to approval, and their pricing set up. Days fifteen to twenty-one, the live walk-through: that screen-share session where you do a full return and then they drive one while you coach. And days twenty-two to thirty, the first check-in: a short call to ask what's unclear, what's left to finish, and what they need before they open. Five stages, thirty days, nothing left to chance.",
    },
    {
      id: "s14",
      layout: "tip",
      eyebrow: "Pro tip",
      title: "Build the packet once, reuse it forever",
      callout: {
        kind: "tip",
        title: "Systematize the welcome",
        text: "Turn your welcome packet, setup checklist, and walk-through agenda into reusable templates — then every new office gets your best onboarding, not your most-tired-day onboarding.",
      },
      narration:
        "Don't reinvent onboarding for every office. Build it once as a system: write the welcome packet once, build the setup checklist once, script the walk-through once. Every new office then gets your best onboarding, not whatever you remembered on a tired Tuesday. When you eventually hand it to a team member, the template is the difference between them doing it well and guessing. Document it once, reuse it every season — that's the core habit of every bureau that scales.",
    },
    {
      id: "s15",
      layout: "point",
      eyebrow: "Do this",
      title: "Proactive check-ins at 30, 60, and 90 days",
      lead: "Don't wait for the office to call with a problem. Reach out before they have one.",
      bullets: [
        {
          label: "Day 30 — Ready to open?",
          text: "Everything set up, questions answered, confident going into the first returns.",
        },
        {
          label: "Day 60 — Mid-season pulse",
          text: "How's volume, any recurring snags, are bank products flowing smoothly?",
        },
        {
          label: "Day 90 — Reflect and plan",
          text: "What worked, what to fix, and an early word about next season.",
        },
      ],
      narration:
        "The last big piece is proactive check-ins at thirty, sixty, and ninety days. The weak bureau waits for the office to call with a problem. The strong bureau reaches out before there is one. At day thirty: are you ready to open, what's still unclear? At day sixty, a mid-season pulse: how's your volume, any recurring snags, are bank products flowing? At day ninety: what worked, what to fix, and an early word about next season. Three short calls, each telling the office the same thing: you are not on your own.",
    },
    {
      id: "s16",
      layout: "tip",
      eyebrow: "Why it matters",
      title: "Proactive contact rewrites who they blame",
      callout: {
        kind: "tip",
        title: "Reach out first",
        text: "When you call before a problem, a glitch becomes 'we're handling it together.' When they call you in a crisis, the same glitch becomes 'this bureau is letting me down.'",
      },
      narration:
        "The same problem feels completely different depending on who started the conversation. If you call in early February and a small issue surfaces, it feels like teamwork — we caught this together. If the office has to chase you down for the same issue in March, it feels like abandonment. Identical glitch, opposite emotion. The only variable is who reached out first. That's the whole case for proactive check-ins: you're not just solving problems earlier, you're controlling the story the office tells about you.",
    },
    {
      id: "s17",
      layout: "tip",
      eyebrow: "Script",
      title: "The day-30 check-in opener",
      callout: {
        kind: "quote",
        title: "Say this on the call",
        text: "\"Hi Dana — just checking in before things get busy. Is your software, EFIN, and bank-product setup all confirmed working? And is there anything you're unsure about that we should fix this week, while it's still quiet?\"",
      },
      narration:
        "Here's a copy-ready opener for that day-thirty call, so you never have to wonder what to say. Something like: Hi Dana, just checking in before things get busy. Is your software, your EFIN, and your bank-product setup all confirmed working? And is there anything you're unsure about that we should fix this week, while it's still quiet? Notice what that does. It's warm, it's specific, and it gives the office explicit permission to admit what's not working, before the season makes it expensive. Most offices won't volunteer that they're confused. They'll just quietly struggle and then quietly leave. A proactive question, asked while it's calm, surfaces the problem you can actually solve.",
    },
    {
      id: "s18",
      layout: "point",
      eyebrow: "A real example",
      title: "Two offices, same season, different ending",
      lead: "The difference between a renewal and a churn is almost always the first month.",
      bullets: [
        {
          label: "Office A — verified early",
          text: "Setup confirmed in November, walk-through done, check-ins on the calendar.",
        },
        {
          label: "Office B — left to figure it out",
          text: "Got a login and a PDF, hit a bank-product wall in January, never heard from you.",
        },
      ],
      narration:
        "Let me make it real with two offices, illustrative but true to life. Office A goes through your full onboarding. Setup is verified in November, the live walk-through happens, and check-ins are on the calendar. When a small problem comes up in February, they call you, you fix it in ten minutes, and they feel taken care of. They renew without a second thought. Office B gets a login and a PDF, and you figure they'll be fine. In January they hit a bank-product wall, can't get an answer fast enough, and lose a few clients on day one. They never hear from you proactively. Come renewal time, a competitor calls offering attention, and Office B is gone. Same software, same season. The only difference was the first thirty days.",
    },
    {
      id: "s19",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Treating onboarding as a one-time handoff",
      callout: {
        kind: "warn",
        title: "Set-it-and-forget-it loses offices",
        text: "Onboarding isn't a single welcome email. An office handed everything at once and then left alone is the office most likely to quietly churn.",
      },
      narration:
        "Treating onboarding as a one-time handoff is how you lose offices. Send a welcome email, attach every document, and consider the job done? A new office cannot absorb everything in one email. Onboarding is a sequence spread over thirty days, with real human touchpoints along the way. The office that gets everything at once and is then left alone is, every single time, the one most likely to churn. Pace it, verify it, check in on it. The handoff is the start of the relationship, not the end of your job.",
    },
    {
      id: "s20",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Assuming silence means everything's fine",
      callout: {
        kind: "warn",
        title: "Quiet is not okay",
        text: "A new office that goes silent usually isn't thriving — it's stuck and embarrassed to ask. Silence is a signal to reach out, not a reason to relax.",
      },
      narration:
        "A related trap: assuming silence means everything is fine. The office that's truly thriving sometimes reaches out with a question. The office that's stuck goes silent — embarrassed to admit confusion, or already half-decided you can't help. Flip your instinct. Treat a quiet new office as a yellow flag, not a green one. That's exactly why the thirty, sixty, and ninety-day check-ins exist: to break the silence before it becomes a goodbye.",
    },
    {
      id: "s21",
      layout: "action",
      eyebrow: "Your turn",
      title: "Audit your last three signed offices",
      callout: {
        kind: "action",
        title: "Run the verification check",
        text: "For each of your last 3 new offices, confirm: software registered, EFIN linked, test return filed, bank product approved. Any 'no' is a leak to fix this week.",
      },
      narration:
        "Take your last three signed offices and run the verification check right now. With real evidence, not a guess: is the software installed and registered, is the EFIN linked, has a test return filed, is their bank product approved? Every no on that list is a leak you can plug this week while it's still calm. Don't assume. Go check. The offices you verify now are the ones still with you next season.",
    },
    {
      id: "s22",
      layout: "tip",
      eyebrow: "Your turn",
      title: "Put the check-ins on your calendar",
      callout: {
        kind: "action",
        title: "Schedule, don't intend",
        text: "For every active onboarding, block a 30, 60, and 90-day check-in on your calendar right now. An intention with no date never happens in February.",
      },
      narration:
        "For every office you're currently onboarding, open your calendar right now and block the thirty, sixty, and ninety-day check-ins as real appointments. Not a mental note — a dated block you'll be reminded of. The proactive check-in you only intended to do is the one that never happens in February, buried under the day's fires. The check-in already on your calendar is the one that saves the office. Scheduling beats intending, every time.",
    },
    {
      id: "s23",
      layout: "action",
      eyebrow: "Your turn",
      title: "Write your onboarding checklist down",
      callout: {
        kind: "action",
        title: "Turn the template into your template",
        text: "Take the first-30-days template and rewrite it as a checklist for your bureau, with your software, your bank, your steps. A written checklist is what makes onboarding repeatable.",
      },
      narration:
        "Take the first-thirty-days template and rewrite it as your own checklist, with your software, your bank, your specific steps. Don't keep it in your head, where it's different every time and degrades when you're tired. Write it down once. That checklist turns onboarding from something you wing into a system you run — and eventually a system someone else can run for you. Spend twenty minutes and you've built an asset that protects every future office you sign.",
    },
    {
      id: "s24",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Your fastest growth is keeping the offices you already signed — the leak starts in the first 30 days." },
        { text: "Verify the full setup before season: installed, registered, EFIN linked, and a test return actually filed." },
        { text: "Enroll bank products early in the fall, not in the January scramble — and track approval." },
        { text: "Give a live walk-through, not just a login, and let the office drive one return themselves." },
        { text: "Run proactive 30, 60, and 90-day check-ins — onboarding is retention insurance, and up-front hours beat replacing offices." },
      ],
      subtitle: "Up next: Support That Scales",
      narration:
        "Let's recap. One: your fastest growth is keeping the offices you already signed, and the leak starts in the first thirty days, not at renewal. Two: verify the full setup before the season heat — software installed, EFIN linked, and a test return actually filed. Three: enroll bank products early in the fall and track every office to approval. Four: give a live walk-through and let the office drive one return themselves. And five: run proactive check-ins at thirty, sixty, and ninety days — onboarding is retention insurance and those up-front hours are far cheaper than replacing an office every year. Next up: how do you build support that scales? See you there.",
    },
  ],
};
