// =============================================================================
// Interactive lesson definition — ERO Lesson 1.4
// "Paid Advertising Without Wasting Money"
//
// Authoring source for the narrated interactive experience. The generator
// (scripts/generate-lesson-media.mjs) reads this, produces ElevenLabs audio +
// timings per slide, and assembles the lesson media manifest.
//
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Paid Advertising Without Wasting Money",
  trackId: "ero",
  key: "E1.4",

  slides: [
    {
      id: "s1",
      layout: "cover",
      eyebrow: "ERO Track · Module 1: Get More Taxpayers",
      title: "Paid Advertising Without Wasting Money",
      subtitle: "Lesson 4 · Narrated walkthrough",
      narration:
        "Paid advertising is where most independent offices either find real growth or quietly burn their cash. The difference is rarely the budget; it's whether the spend is targeted and measured. This lesson shows you how to advertise without wasting money. By the end you'll know why search intent comes first, how to run a small in-season budget on a tight radius, how to send clicks to a single-action landing page, when to layer social retargeting on top, and how to calculate your cost per acquisition with your own numbers, so you can prove an ad is profitable instead of just hoping it is.",
    },
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core idea",
      title: "Targeted and measured, or not at all",
      lead: "Paid ads work when they're aimed and tracked; they drain cash when you \"boost a post\" and hope.",
      bullets: [
        {
          label: "The trap",
          text: "Boosting a random post to a vague audience feels like marketing but rarely converts.",
        },
        {
          label: "The discipline",
          text: "Aim at intent, track every dollar, and let the numbers decide what stays on.",
        },
      ],
      narration:
        "Here's the core idea. Paid advertising works beautifully when it's targeted and measured, and it drains your cash when it isn't. The classic mistake is to boost a post, send some vague brand message to a broad audience, and hope something happens. It feels like marketing, but it almost never converts, and worse, you can't even tell whether it did. The discipline that separates profitable advertisers from cash-burners is simple: aim at real buying intent, track every single dollar to a result, and let the numbers, not your gut, decide which ads stay on. If you can't measure it, don't spend on it.",
    },
    {
      id: "s2b",
      layout: "tip",
      eyebrow: "Why it matters",
      title: "Most ad waste is invisible",
      callout: {
        kind: "stat",
        title: "Where the money leaks",
        text: "Owners routinely sink $1,000+ a season into boosted posts and never know if a single client came from them — because nothing was ever tracked.",
      },
      narration:
        "Let's be honest about how the money actually leaks, because it's almost never one big dramatic mistake. It's a slow drip. An owner spends a hundred dollars here boosting a post, fifty there on a sponsored listing, a few hundred on a flashy campaign a salesperson talked them into, and by April they've spent well over a thousand dollars with no idea whether a single client came from any of it. The waste is invisible precisely because nothing was tracked. That's the trap this lesson is built to keep you out of. Every dollar in this lesson gets aimed at intent and tied to a result, so you always know what's working and what's just quietly burning.",
    },
    {
      id: "s3",
      layout: "point",
      eyebrow: "Start here",
      title: "Search intent comes first",
      lead: "The best first ad dollar goes to people who are already searching for exactly what you do.",
      bullets: [
        {
          label: "They're ready to buy",
          text: "Someone typing \"tax preparer near me\" needs you today, not someday.",
        },
        {
          label: "The keywords",
          text: "\"Tax preparer near me,\" \"[city] tax help,\" and ITIN filing — only if you're a CAA or partner.",
        },
      ],
      narration:
        "Always start with search intent, because it's the warmest traffic money can buy. When someone types tax preparer near me, your city plus tax help, or ITIN filing into Google, they're not browsing; they need a preparer today. Google Ads lets you put your office in front of exactly those searches. That's a person raising their hand and saying I'm ready to buy. Compare that to a social ad that interrupts someone scrolling who wasn't thinking about taxes at all. Search intent converts at a far higher rate, which is why your first ad dollar should go there. One important note on ITIN filing as a keyword, which we'll address head-on next.",
    },
    {
      id: "s4",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Only advertise ITIN if you're a CAA",
      callout: {
        kind: "warn",
        title: "Don't bid on what you can't deliver",
        text: "Running ads on \"ITIN filing\" or \"W-7 help\" is only legitimate if you hold CAA / Acceptance Agent status — or formally partner with one. Otherwise, drop the keyword.",
      },
      narration:
        "Here's a compliance line you cannot cross, and it's tempting precisely because ITIN searches convert so well. Only advertise ITIN or W-7 services if you actually hold Certifying Acceptance Agent status, or you've formally partnered with someone who does. Bidding on ITIN filing when you can't properly handle the W-7 process isn't just a service gap; it sets you up to disappoint a community that runs entirely on trust and word of mouth, and it creates real compliance exposure. So before you add that keyword, confirm your status. If you're not a CAA and don't have a partner, drop the ITIN keywords and focus your spend on the segments you can fully serve.",
    },
    {
      id: "s4b",
      layout: "list",
      eyebrow: "Do this",
      title: "Keywords that signal real intent",
      bullets: [
        {
          label: "Ready-to-buy",
          text: "\"Tax preparer near me,\" \"[city] tax preparation,\" \"file my taxes [city].\"",
        },
        {
          label: "Specialty intent",
          text: "\"Self-employed tax help,\" \"small business tax preparer\" — matched to your segment.",
        },
        {
          label: "CAA-only",
          text: "\"ITIN filing,\" \"W-7 help\" — bid on these only if you're a CAA or have a partner.",
        },
        {
          label: "Add negatives",
          text: "Block \"free,\" \"jobs,\" \"software,\" \"DIY\" so you don't pay for the wrong clicks.",
        },
      ],
      narration:
        "Let's get specific about which keywords to actually bid on, because this is where focus saves you money. Start with ready-to-buy searches like tax preparer near me, your city plus tax preparation, and file my taxes in your city. Add specialty intent matched to your segment, like self-employed tax help or small business tax preparer, which pull exactly the clients you want. Only include ITIN or W-7 keywords if you're a CAA or have a partner. And here's the move most owners miss: add negative keywords. Tell Google not to show your ad on searches for free, jobs, software, or DIY, so you stop paying for clicks from people who'll never become paying clients. Tight keywords, plus negatives, equals far less waste.",
    },
    {
      id: "s5",
      layout: "point",
      eyebrow: "Budget & radius",
      title: "Small daily budget, tight radius",
      lead: "You don't need a big budget — you need a small one aimed at a few miles around your office.",
      bullets: [
        {
          label: "In-season daily budget",
          text: "Illustratively, $15 to $30 a day during the peak weeks — not a giant lump sum.",
        },
        {
          label: "Tight geographic radius",
          text: "Only show ads to people close enough to actually become clients.",
        },
      ],
      narration:
        "Now the budget, and the surprise is how small it should be. You don't need a big war chest; you need a small daily budget aimed tightly. Illustratively, fifteen to thirty dollars a day during your peak weeks is plenty for many local offices to test and grow. Just as important is the radius. Set your ads to show only to people within a few miles of your office, the area people will actually drive to. There's no point paying for a click from someone forty miles away who'll never visit. A small budget on a tight radius means every dollar reaches a realistic potential client, which is exactly how you avoid waste.",
    },
    {
      id: "s5b",
      layout: "tip",
      eyebrow: "Script",
      title: "A search ad that earns the click",
      callout: {
        kind: "quote",
        title: "Headline + line to test",
        text: "\"[City] Tax Preparer — Maximum Refund, Fast. Local, trusted, 50+ five-star reviews. Book your appointment today.\"",
      },
      narration:
        "Here's a copy-ready search ad you can adapt and test. Headline: your city, tax preparer, maximum refund, fast. Then the line beneath: local, trusted, fifty-plus five-star reviews, book your appointment today. Notice what's packed in there. The city signals you're local. Maximum refund and fast speak to what the searcher actually wants. The review count borrows the trust you built in the last lesson. And book your appointment today is a clear next step. Keep it honest, keep it specific to your segment, and always end with one clear action. An ad like this earns the click from a ready-to-buy searcher and hands them straight to your landing page.",
    },
    {
      id: "s6",
      layout: "point",
      eyebrow: "The destination",
      title: "Send clicks to a single-action page",
      lead: "Every ad click should land on a page with exactly one thing to do: book an appointment.",
      bullets: [
        {
          label: "One page, one action",
          text: "A focused landing page that asks the visitor to book — not your whole website.",
        },
        {
          label: "Why not the homepage",
          text: "A busy homepage scatters attention; a single-action page converts.",
        },
      ],
      narration:
        "Where you send the click matters as much as the click itself. Every ad should land on a single-action landing page whose only job is to get the visitor to book an appointment. Not your full website with its menu and ten links, just a focused page: who you help, why you, and one clear button to book. The reason is simple. A busy homepage scatters attention; the visitor gets distracted, wonders, clicks around, and leaves. A single-action page keeps them on one decision. You paid for that click, so don't fumble it by dumping the visitor onto a page that gives them ten things to do instead of the one thing you want.",
    },
    {
      id: "s7",
      layout: "list",
      eyebrow: "Do this",
      title: "What the landing page needs",
      bullets: [
        {
          label: "A headline for your segment",
          text: "\"Maximize your refund\" or \"Schedule C done right\" — speak to who you chose.",
        },
        {
          label: "Three reasons to trust you",
          text: "Reviews, years in business, language match, or specialty — keep it short.",
        },
        {
          label: "One obvious action",
          text: "A single big button: book your appointment, with a phone number as backup.",
        },
        {
          label: "Fast and mobile-first",
          text: "Most clicks are on phones; if it loads slowly, you've wasted the spend.",
        },
      ],
      narration:
        "Here's what that landing page actually needs, and only this. First, a headline aimed at the segment you chose, something like maximize your refund or Schedule C done right, so the visitor instantly feels you're for them. Second, three quick reasons to trust you, your review count, years in business, a language match, or your specialty, kept short. Third, one obvious action, a single big book your appointment button, with a phone number as a backup for callers. And fourth, make it fast and mobile-first, because most of your ad clicks happen on phones, and a slow or clunky page wastes the very click you paid for. Keep it that simple and it will convert.",
    },
    {
      id: "s8",
      layout: "point",
      eyebrow: "Then layer social",
      title: "Retarget by zip, age, and life event",
      lead: "Once search is working, add social ads to follow up with people in your exact area.",
      bullets: [
        {
          label: "Retargeting",
          text: "Show ads to people who visited your page but didn't book — gentle reminders convert.",
        },
        {
          label: "Targeted awareness",
          text: "Facebook and Instagram by zip code, age, and life events like a new baby or new business.",
        },
      ],
      narration:
        "Once your search ads are working and tracked, you can layer social on top, but in that order, not the reverse. Facebook and Instagram are great for two things here. First, retargeting: showing a friendly reminder ad to people who visited your landing page but didn't book yet, which nudges the fence-sitters back. Second, targeted awareness, reaching people by zip code, age, and life events. A new baby means a possible Child Tax Credit; a newly registered business means a likely Schedule C or S-corp. Social isn't where you start, because the intent is colder, but it's a powerful second layer that keeps you in front of the right local people between searches.",
    },
    {
      id: "s9",
      layout: "tip",
      eyebrow: "Pro tip",
      title: "You on camera beats agency gloss",
      callout: {
        kind: "tip",
        title: "People hire a person, not a logo",
        text: "A 30-second video of you explaining one real tax tip out-converts a polished agency ad. Authenticity and a face build the trust that wins local clients.",
      },
      narration:
        "Here's a pro tip that saves you money and works better than the expensive alternative. For your social ads, a simple thirty-second video of you, the owner, explaining one genuinely useful tax tip will out-perform a glossy, polished agency ad almost every time. Why? Because people don't hire a logo; they hire a person they trust. When a potential client sees your face, hears you explain something clearly, and senses you actually know your stuff, that builds the trust that drives a local booking. Don't spend on production values. Spend thirty seconds being helpful and human on camera. The authenticity is the asset, and it costs you nothing but a little courage.",
    },
    {
      id: "s10",
      layout: "point",
      eyebrow: "The number that matters",
      title: "Measure cost per acquisition",
      lead: "CPA tells you whether an ad is making you money or just spending it.",
      bullets: [
        {
          label: "The formula",
          text: "CPA = ad spend ÷ new clients from that ad. Simple, and it's everything.",
        },
        {
          label: "The test",
          text: "If CPA is comfortably below what a client is worth to you, keep going.",
        },
      ],
      narration:
        "Now the single number that determines whether your advertising is a smart investment or a slow leak: cost per acquisition, or CPA. The formula couldn't be simpler. CPA equals your ad spend divided by the number of new clients that ad brought you. If you spent four hundred dollars and got eight new clients, your CPA is fifty dollars. The test is just as simple. If your CPA is comfortably below what a client is worth to you, you keep spending, because every dollar in is making more than a dollar back. If your CPA climbs above what a client is worth, you change the ad or you shut it off. That's the whole discipline.",
    },
    {
      id: "s11",
      layout: "list",
      eyebrow: "A real example",
      title: "Run the CPA math with your numbers",
      bullets: [
        {
          label: "Your average fee",
          text: "Say $250 per return — use your real average, not this figure.",
        },
        {
          label: "The referral bonus",
          text: "If roughly 1 in 2 paid clients refers someone, each client is worth more than one fee.",
        },
        {
          label: "The verdict",
          text: "At that value, a $50–80 CPA is profitable — but only your own numbers prove it.",
        },
        {
          label: "The trigger",
          text: "If your CPA runs higher than a client is worth, change the ad or stop.",
        },
      ],
      narration:
        "Let's run the math, and these figures are illustrative; you must use your own. Say your average fee is two hundred fifty dollars. Now add this: if roughly one in two of your paid clients refers someone else, each new client is actually worth more than a single fee, because they bring a friend. At that value, a CPA of fifty to eighty dollars is clearly profitable; you're paying fifty to eighty to win a client worth well over two hundred fifty over time. But please, run this with your own average fee, your own referral rate, your own numbers, not mine. The exact same ad can be a goldmine for one office and a money pit for another.",
    },
    {
      id: "s11b",
      layout: "point",
      eyebrow: "Make it real",
      title: "How to actually attribute a client",
      lead: "CPA is only as good as your tracking — so capture the source on every booking.",
      bullets: [
        {
          label: "Ask and log",
          text: "\"How did you find us?\" on every intake, with \"online ad\" as a clear option.",
        },
        {
          label: "Use distinct paths",
          text: "A dedicated landing page or phone number tells you exactly which clicks converted.",
        },
      ],
      narration:
        "CPA is only as trustworthy as your tracking, so let's make attribution concrete. The simplest method, and it works, is to ask every new client how they found you, with online ad as a clear option on your intake form, and log it. For tighter numbers, give your ads their own dedicated landing page, or even a separate phone number, so any booking through that path is unmistakably from the ad. Then, at the end of a week or the season, you divide what you spent by the clients that path produced, and there's your real CPA. Without this step, CPA is just a guess. With it, you can prove which ad earns its keep and which one to switch off.",
    },
    {
      id: "s12",
      layout: "tip",
      eyebrow: "Why tracking wins",
      title: "A tracked $500 beats an untracked $5,000",
      callout: {
        kind: "stat",
        title: "Measurement is the multiplier",
        text: "A small, tracked budget you can read and optimize will out-earn a huge budget you're spending blind — every season.",
      },
      narration:
        "Here's the principle to tattoo on your brain: a tracked five hundred dollars beats an untracked five thousand. An owner who spends a small, carefully measured budget knows exactly which ad, which keyword, and which page brought each client, so they can cut what's dead and pour more into what's working. An owner spending ten times as much with no tracking is flying blind; they might be doing great or hemorrhaging cash, and they have no way to tell. Measurement is the multiplier. It's what turns a modest budget into compounding growth and what protects you from quietly funding ads that never worked. Start small, track everything, and scale only what you've proven.",
    },
    {
      id: "s13",
      layout: "point",
      eyebrow: "Timing",
      title: "Spend heavy in the window, then taper",
      lead: "Tax demand is seasonal — concentrate your spend where the searches actually are.",
      bullets: [
        {
          label: "The peak window",
          text: "Spend heaviest from late January through mid-February, when intent spikes.",
        },
        {
          label: "Then taper",
          text: "Ease off as the season winds down; don't burn budget on a quiet March.",
        },
      ],
      narration:
        "Timing is the last piece, and it's specific to our business. Tax search demand isn't spread evenly across the year; it spikes hard in a few weeks. So concentrate your spending where the searches actually are. Spend heaviest from late January through about mid-February, when people have their W-2s and refund anticipation is peaking and they're searching for a preparer right now. Then taper as the season winds down. Pouring budget into a quiet late-March or April week, when the early refund-seekers have already filed, is far less efficient. Match your spend to the search curve: heavy in the window, lighter as it closes. Right message, right radius, right time.",
    },
    {
      id: "s13b",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "Front-load the early-bird weeks",
      callout: {
        kind: "stat",
        title: "The early-filer surge",
        text: "A large share of refund-driven filers search and book in the first few weeks after W-2s land. Spend lightly before, heavily then, and taper after.",
      },
      narration:
        "Let me sharpen the timing with the pattern behind it. A large share of refund-driven filers, the very people most likely to respond to an ad, search and book in the first few weeks after their W-2s arrive, because they want their refund as early as possible. That gives you a clear spending shape. Run a light budget in early-to-mid January to be present as searches start building, push your heaviest spend through late January and into February when the early-filer surge peaks, and then taper steadily after, since the people who waited are fewer and less ad-driven. Front-loading your budget into that early window puts your dollars exactly where the ready buyers are.",
    },
    {
      id: "s14",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Boosting posts and hoping",
      callout: {
        kind: "warn",
        title: "Don't spend blind",
        text: "Boosting a random post to a broad audience with no landing page and no CPA tracking is the fastest way to waste an ad budget. Aim, send to one action, and measure.",
      },
      narration:
        "Let's name the mistake that wastes more local ad money than any other: boosting a post and hoping. You see the little boost button, you push some money behind a random post to a broad audience, it gets likes, and you feel like you advertised. But there's no buying intent, no landing page driving a booking, and no CPA tracking telling you whether a single client came from it. It's spending blind. The fix is everything we've covered: start with search intent, send clicks to a single-action page, track your CPA, and only scale what the numbers prove. Aim, send to one action, and measure. Never just boost and hope.",
    },
    {
      id: "s14b",
      layout: "point",
      eyebrow: "The discipline",
      title: "Start small, then scale the winners",
      lead: "Treat your first season's spend as paid research, not a bet you have to win big.",
      bullets: [
        {
          label: "Prove it cheap",
          text: "A small budget tells you which keywords and pages convert — for very little risk.",
        },
        {
          label: "Then pour it on",
          text: "Once a campaign beats your CPA target, raising the budget multiplies a known winner.",
        },
      ],
      narration:
        "Here's the mindset that keeps you safe and still lets you grow fast: start small, then scale only the winners. Treat your first season of paid ads as paid research. A modest budget reveals, cheaply, which keywords pull, which ad copy earns clicks, and whether your landing page actually converts. You're buying information at low risk. Then, once a campaign is clearly beating your CPA target, you've found a machine that turns dollars into profitable clients, and now raising the budget simply multiplies a known winner. The owners who lose money do it backwards; they bet big before they know what works. Prove it small, then pour it on.",
    },
    {
      id: "s15",
      layout: "action",
      eyebrow: "Your turn",
      title: "Calculate your real client value",
      callout: {
        kind: "action",
        title: "Do this before you spend a dollar",
        text: "Write your average fee. Add your typical referral rate. That's roughly what a client is worth — and the ceiling for a profitable CPA.",
      },
      narration:
        "Now your turn, and do this before you spend a single ad dollar. Write down your real average fee per return. Then add your typical referral rate, the share of clients who send you someone else. Together those tell you, roughly, what a new client is actually worth to you over time, not just this season. That number is your ceiling for a profitable CPA: as long as you're paying less than that to acquire a client, your ads make money. Most owners run ads without ever knowing this number, which is exactly why they can't tell profit from waste. Know your client value first, and every ad decision after gets clear.",
    },
    {
      id: "s16",
      layout: "action",
      eyebrow: "Your turn",
      title: "Set up one tracked search campaign",
      callout: {
        kind: "action",
        title: "Build the minimum viable ad",
        text: "Pick 2–3 intent keywords, set a $15–30/day budget and a tight radius, point them at a single-action booking page, and decide how you'll track CPA.",
      },
      narration:
        "One more action to put this into motion. Build the minimum viable campaign. Pick two or three search keywords with real buying intent, like tax preparer near me and your city plus tax help, and only include ITIN keywords if you're a CAA or have a partner. Set a daily budget in that fifteen-to-thirty-dollar range and a tight radius around your office. Point every click at a single-action booking page. And before you turn it on, decide exactly how you'll track CPA, by asking new clients how they found you and counting the bookings the ad drove. That's a complete, measurable campaign. Launch it small, read the numbers, and scale only what works.",
    },
    {
      id: "s16b",
      layout: "list",
      eyebrow: "Do this",
      title: "Pre-launch checklist",
      bullets: [
        {
          label: "Intent keywords + negatives",
          text: "2–3 ready-to-buy terms set, with \"free,\" \"jobs,\" and \"DIY\" blocked.",
        },
        {
          label: "Budget and radius capped",
          text: "$15–30/day, tight miles around your office, heaviest in late Jan to mid-Feb.",
        },
        {
          label: "Single-action page live",
          text: "One headline, three trust points, one book button, fast on mobile.",
        },
        {
          label: "CPA tracking ready",
          text: "You know your client value and exactly how each booking gets attributed.",
        },
      ],
      narration:
        "Before you flip a single campaign on, run this pre-launch checklist so nothing leaks. First, intent keywords plus negatives: you've got two or three ready-to-buy terms, with free, jobs, and DIY blocked. Second, budget and radius capped: fifteen to thirty dollars a day, a tight radius around your office, and your spend weighted toward late January through mid-February. Third, your single-action landing page is live, with one headline, three trust points, one book button, and fast load on a phone. And fourth, CPA tracking is ready: you know what a client is worth and exactly how each booking gets attributed back to the ad. Check all four, and you're advertising on purpose, not on hope.",
    },
    {
      id: "s17",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Paid ads pay off only when targeted and measured — never just boost and hope." },
        { text: "Start with search intent; only advertise ITIN/W-7 if you're a CAA or have a partner." },
        { text: "Small daily budget, tight radius, and clicks to a single-action booking page." },
        { text: "Layer social retargeting; a founder-on-camera tip video beats agency gloss." },
        { text: "Track CPA with your own numbers, spend heaviest late Jan to mid-Feb, then taper." },
      ],
      subtitle: "Up next: Retention: The Multiplier",
      narration:
        "Let's recap. One: paid ads pay off only when they're targeted and measured, so never just boost a post and hope. Two: start with search intent, and only advertise ITIN or W-7 work if you're a CAA or partner with one. Three: run a small daily budget on a tight radius, and send every click to a single-action booking page. Four: layer social retargeting on top, and remember a thirty-second founder tip video beats agency gloss. And five: track your cost per acquisition with your own numbers, spend heaviest from late January to mid-February, then taper. Next, the highest-return move of all, keeping the clients you already have. See you there.",
    },
  ],
};
