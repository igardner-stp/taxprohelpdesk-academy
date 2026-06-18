// =============================================================================
// Interactive lesson definition — Bureau Lesson 1.1 "Who You're Really Selling To"
//
// Authoring source for the narrated interactive experience. The generator
// (scripts/generate-lesson-media.mjs) reads this, produces ElevenLabs audio +
// timings per slide, and assembles the lesson media manifest.
//
// `narration` is the spoken script (also the caption + transcript). Slide
// visuals are code-driven (see components/learn/SlideView.tsx) — the fields
// below map directly onto that renderer.
// =============================================================================

export default {
  matchTitle: "Who You're Really Selling To",
  trackId: "bureau",
  key: "B1.1",

  slides: [
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Bureau Track · Module 1: Recruit More Offices",
      title: "Who You're Really Selling To",
      subtitle: "Lesson 1 · Narrated walkthrough",
      narration:
        "Welcome to the first lesson on recruiting more offices into your bureau. Here is the trap almost every new bureau falls into. They walk into a recruiting call ready to talk about software. Faster e-file, a cleaner interface, more forms. And the preparer on the other end quietly tunes out, because nobody rebuilds their entire business to get a slightly nicer screen. In the next few minutes you'll learn what an office is actually buying when they sign with a bureau, the four prospect types you'll meet, the real motive driving each one, and the single shift that makes your pitch land: sell to the reason, not the feature list.",
    },
    {
      id: "s2",
      layout: "point",
      eyebrow: "The core idea",
      title: "You're not selling software",
      lead: "An office signing with a bureau is buying a business in a box — the software is just one part of it.",
      bullets: [
        {
          label: "Four things in the box",
          text: "Professional tax software, real support, bank products, and the confidence to run a season.",
        },
        {
          label: "The software is the table stakes",
          text: "Every bureau has good software now. It's the reason they walk in, not the reason they sign.",
        },
      ],
      narration:
        "Here is the core idea of this entire module. When an office signs with you, they are not buying software. They are buying a business in a box. That box has four things inside it. The professional tax software, yes. But also real support when a return jams at eleven at night in February. Bank products that let their clients walk out with a refund advance. And underneath all of it, the confidence that they can run a whole season without getting stranded. The software gets them in the door. It is not the thing that closes them, because every serious bureau has good software now. That part is table stakes.",
    },
    {
      id: "s3",
      layout: "tip",
      eyebrow: "Why it matters",
      title: "Confidence is the quiet product",
      callout: {
        kind: "tip",
        title: "What they're really afraid of",
        text: "A preparer leaving a franchise isn't afraid of the software. They're afraid of being alone on a hard return at peak season with no one to call.",
      },
      narration:
        "Let me name the quiet part of that box, because it is the part nobody puts in a brochure. The fourth item, confidence, is often the real product. Picture a preparer who is thinking about going independent. They are not lying awake worried about which menu the Schedule C lives in. They are lying awake imagining the night a complicated return breaks at the worst possible moment, the client is upset, and there is nobody to call. When you sell to that fear, when you make support and reliability the heart of your pitch, you are speaking to the thing that actually keeps them up. That is what they are buying. Sell the calm, not the click.",
    },
    {
      id: "s4",
      layout: "point",
      eyebrow: "The shift",
      title: "Sell to the reason, not the feature",
      lead: "Every prospect has a private reason they're even talking to you. Find it, then build the whole pitch around it.",
      bullets: [
        {
          label: "Features are interchangeable",
          text: "Your competitor's feature list looks almost identical to yours. The reason is what's personal.",
        },
        {
          label: "The reason is emotional first",
          text: "Independence, security, legitimacy, growth — these move people. Form counts doesn't.",
        },
      ],
      narration:
        "So here is the shift this lesson is built on. Sell to the reason, not the feature list. Every single prospect who picks up your call has a private reason they are even willing to consider switching. Maybe they are tired of handing a third of every fee to a franchise. Maybe their current bureau left them hanging last March. Maybe they want to finally treat their side gig like a real business. Your job on that first call is not to recite your feature sheet. It is to find the reason, name it out loud, and build the entire conversation around it. Because features are interchangeable between bureaus. The reason is personal, and the reason is what moves money.",
    },
    {
      id: "s5",
      layout: "list",
      eyebrow: "Know your buyers",
      title: "The four prospects you'll meet",
      bullets: [
        {
          label: "The franchise refugee",
          text: "A preparer leaving a big-name franchise, sick of the royalty and the rules.",
        },
        {
          label: "The unhappy independent",
          text: "Already on another bureau, burned by bad support or a worse deal.",
        },
        {
          label: "The side-hustler going pro",
          text: "Did returns on the side, now ready to go full-time and legitimate.",
        },
        {
          label: "The multi-office builder",
          text: "An entrepreneur who wants to run several offices — or recruit their own.",
        },
      ],
      narration:
        "Across your recruiting season you will meet roughly four kinds of prospect, and each one has a different reason. There is the franchise refugee, a preparer leaving a big-name franchise, tired of the royalty check and the rulebook. There is the unhappy independent, already on a competing bureau, burned by bad support or a deal that quietly got worse. There is the side-hustler going pro, someone who has been doing a few dozen returns on the side and is ready to make it a real, full-time business. And there is the multi-office builder, an entrepreneur who wants to run several locations or even recruit a downline of their own. Let's walk through what each one is truly buying.",
    },
    {
      id: "s6",
      layout: "point",
      eyebrow: "Prospect one",
      title: "The franchise refugee buys margin",
      lead: "They're leaving to keep more of every fee — independence and margin are the whole story.",
      bullets: [
        {
          label: "The pain they're escaping",
          text: "A royalty or split that takes a big bite out of every return they prepare.",
        },
        {
          label: "What lands",
          text: "Show them they keep dramatically more per return. The math is the pitch.",
        },
      ],
      narration:
        "Start with the franchise refugee, because they are common and they are motivated. This person has spent years watching a big slice of every fee disappear into a royalty before they ever see it. What they are buying from you is independence and margin. They want to keep what they earn. So your pitch is not about your software. It is about the money math. To use illustrative numbers, a franchise preparer might effectively net forty dollars on a return after the royalty and fees, where under your bureau they could net far more on that same return. That gap, shown honestly with their own volume, is the most persuasive thing you can put in front of them. The reason is margin. Lead with margin.",
    },
    {
      id: "s7",
      layout: "point",
      eyebrow: "Prospect two",
      title: "The unhappy independent buys reliability",
      lead: "They've already gone independent — now they want a bureau that actually shows up.",
      bullets: [
        {
          label: "The pain they're escaping",
          text: "Support that ghosted them in peak season, or a deal that crept worse over time.",
        },
        {
          label: "What lands",
          text: "A concrete support promise plus a cleaner, fairer deal than what they have now.",
        },
      ],
      narration:
        "Next, the unhappy independent. This preparer already made the leap to independence. They are on a competing bureau and they are not happy, usually for one of two reasons. Either the support let them down when they needed it most, in the thick of February, or the deal slowly got worse, with new fees creeping in. What they are buying from you is reliability and a better deal. They do not need to be sold on going independent, they already did that. They need proof that you will be there when their current bureau was not. So your pitch leads with your concrete support promise and a clean, fair price they can actually understand. The reason is reliability. Lead with reliability.",
    },
    {
      id: "s8",
      layout: "list",
      eyebrow: "Prospect three",
      title: "The side-hustler buys legitimacy",
      lead: "They've done returns on the side. Now they want to feel — and look — like a real business.",
      bullets: [
        {
          label: "The pain they're escaping",
          text: "Feeling like an amateur, unsure of the rules, doing it all alone.",
        },
        {
          label: "What lands",
          text: "Hand-holding, setup help, and the legitimacy of a real, supported operation.",
        },
      ],
      narration:
        "The third prospect is the side-hustler going pro. For a couple of seasons they have done returns for family, friends, and word-of-mouth referrals, on the side, around a day job. Now they want to go full-time. What they are buying from you is hand-holding and legitimacy. This person is often nervous. They are not sure they know enough, they are not sure about the rules, and they have been doing it alone. Your pitch to them is about the journey you will walk with them, the setup help, the training, the support, the sense that they are now a real, supported business and not a person doing taxes at a kitchen table. The reason is legitimacy and a guiding hand. Lead with the partnership.",
    },
    {
      id: "s9",
      layout: "point",
      eyebrow: "Prospect four",
      title: "The multi-office builder buys scale",
      lead: "This one thinks bigger than a single office — they want a machine they can grow.",
      bullets: [
        {
          label: "The pain they're escaping",
          text: "A setup that can't grow past one location without everything breaking.",
        },
        {
          label: "What lands",
          text: "Scalability, multi-office tools, and override potential if they recruit their own.",
        },
      ],
      narration:
        "The fourth prospect is the multi-office builder. This person is an entrepreneur first and a preparer second. They are not thinking about one office. They are thinking about three, or about recruiting a downline of preparers under them. What they are buying is scalability and override potential. They want to know your software and your support can handle many offices without falling apart, and they want to understand how they might earn an override on the offices they bring in. This prospect is gold, because one of them can grow into many offices over time. Your pitch leads with the growth path and the structure that lets them build. The reason is scale. Lead with the ceiling, not the floor.",
    },
    {
      id: "s10",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "One builder can become many offices",
      callout: {
        kind: "stat",
        title: "Why the multi-office prospect is worth the patience",
        text: "Illustrative: one builder who recruits 4 offices over two seasons can be worth more than a dozen one-and-done signings — and far less support per office.",
      },
      narration:
        "Put an illustrative number on why the multi-office builder is worth your patience. Imagine one builder who, over two seasons, grows to four offices under their umbrella. That single relationship can be worth more to your bureau than a dozen one-and-done signings, and here is the quieter benefit: a builder often absorbs a lot of the day-to-day hand-holding for their own offices, which means less support load landing directly on your desk per office. These figures are illustrative and every market is different, but the principle holds. A builder is not one sale. A builder is a channel. Treat that conversation with the long view it deserves.",
    },
    {
      id: "s11",
      layout: "tip",
      eyebrow: "A real example",
      title: "Same software, two pitches",
      callout: {
        kind: "quote",
        title: "Watch the difference",
        text: "To the refugee: \"You'd keep about $185 of a $225 return instead of $40.\" To the side-hustler: \"We'll set up your EFIN, your first returns, and you'll have someone on the phone all season.\"",
      },
      narration:
        "Let's make this concrete with one example, two prospects, the exact same software behind it. To the franchise refugee, the pitch is pure margin. Something like: on a two hundred twenty-five dollar return, you would keep roughly one hundred eighty-five dollars under us, instead of the forty you keep now. To the side-hustler going pro, the very same product gets a completely different pitch: we will help you get your EFIN sorted, we will walk you through your first returns, and there will be a real person on the phone with you all season. Notice that you never changed the product. You changed which reason you led with. That is the whole skill. These dollar figures are illustrative and depend on the prospect's real volume and fees.",
    },
    {
      id: "s12",
      layout: "list",
      eyebrow: "Do this",
      title: "The buyer-persona worksheet",
      bullets: [
        {
          label: "Type",
          text: "Which of the four are they? Refugee, unhappy independent, side-hustler, or builder?",
        },
        {
          label: "Real motive",
          text: "Margin, reliability, legitimacy, or scale — what's the private reason?",
        },
        {
          label: "Their numbers",
          text: "Current volume, average fee, and what they keep today.",
        },
        {
          label: "Lead-with line",
          text: "One sentence you'll open with that speaks straight to their motive.",
        },
      ],
      narration:
        "Here is a simple worksheet to run before every recruiting conversation. Four lines. First, the type: which of the four prospects are they, refugee, unhappy independent, side-hustler, or builder. Second, the real motive: margin, reliability, legitimacy, or scale. Third, their numbers: their current volume, their average fee, and what they actually keep today, because you will need that for the economics pitch in a later lesson. And fourth, the lead-with line: the single sentence you will open the call with that speaks straight to their motive. Fill in those four lines before you dial, and you walk into the conversation already knowing what they are buying. Most bureaus skip this and wing it. The ones who fill it out close more.",
    },
    {
      id: "s13",
      layout: "point",
      eyebrow: "Read them fast",
      title: "Ask, then listen for the reason",
      lead: "You don't guess the motive — you ask two questions and let them tell you.",
      bullets: [
        {
          label: "Question one",
          text: "\"What's making you look at a change right now?\" — this surfaces the pain.",
        },
        {
          label: "Question two",
          text: "\"What would have to be true for this to be a no-brainer?\" — this surfaces the want.",
        },
      ],
      narration:
        "You might be wondering how you figure out the motive without guessing. You ask, and then you actually listen. Two questions do most of the work. The first: what is making you look at a change right now? That one surfaces the pain, the thing pushing them away from where they are. The second: what would have to be true for this to be a no-brainer for you? That one surfaces the want, the thing pulling them toward something new. Ask those two, then stop talking. The prospect will hand you their reason in their own words, and now you do not have to guess which of the four they are. They told you. Your only job after that is to reflect it back and build the pitch on it.",
    },
    {
      id: "s14",
      layout: "tip",
      eyebrow: "Script",
      title: "The reason-finding opener",
      callout: {
        kind: "quote",
        title: "Say this on the first call",
        text: "\"Before I talk about what we do — tell me what's got you thinking about a change this year. I'd rather solve your actual problem than read you a feature list.\"",
      },
      narration:
        "Here is a copy-ready opener you can use on the very first call. Say something like: before I talk about anything we do, tell me what has got you thinking about a change this year. I would rather solve your actual problem than read you a feature list. That last line does two things at once. It disarms them, because they are braced for a sales pitch and you just told them you are not going to do that. And it signals that you are the kind of bureau that listens, which is exactly what an unhappy independent or a nervous side-hustler is hoping to find. Lead with that opener and you have already separated yourself from every competitor who started with their software.",
    },
    {
      id: "s15",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "The feature-dump pitch",
      callout: {
        kind: "warn",
        title: "Don't open with your feature list",
        text: "Leading with screens, forms, and specs tells the prospect you don't know — or don't care — what they actually need. It makes you interchangeable with every other bureau.",
      },
      narration:
        "Now the common mistake, and it is the one that quietly kills the most deals. The feature dump. The bureau gets a prospect on the phone, gets nervous, and fills the silence with everything the software does. The number of forms, the speed of the e-file, the new dashboard. Every minute you spend on features is a minute you are not spending on their reason, and worse, it tells the prospect that you either do not know or do not care what they actually need. It makes you sound exactly like every other bureau they have talked to. The fix is everything we just covered: find the reason first, lead with the reason, and let the features come up later, only as proof that you can deliver on that reason.",
    },
    {
      id: "s16",
      layout: "point",
      eyebrow: "Tie it together",
      title: "Features prove the reason — later",
      lead: "Features aren't banned. They're evidence you bring out after you know the motive.",
      bullets: [
        {
          label: "Reason first",
          text: "Name what they're buying — margin, reliability, legitimacy, or scale.",
        },
        {
          label: "Feature as proof",
          text: "Then show the one or two features that prove you deliver on that exact reason.",
        },
      ],
      narration:
        "To be clear, features are not banned. They are just demoted. Once you know the reason, features become your evidence. If the prospect is buying reliability, you bring up your dedicated support line and your response times, not as a brag, but as proof you can deliver the reliability they want. If they are buying margin, you walk through the fee structure. If they are buying legitimacy, you show the onboarding path. The sequence is always the same. Reason first, then the one or two features that prove you can deliver on that exact reason. A feature with a reason attached is persuasive. A feature floating on its own is noise.",
    },
    {
      id: "s17",
      layout: "action",
      eyebrow: "Your turn",
      title: "Profile your next three prospects",
      callout: {
        kind: "action",
        title: "Fill the worksheet for real names",
        text: "Take three prospects you'll talk to this month. For each, write the type, the real motive, their numbers, and your one lead-with line.",
      },
      narration:
        "Now it is your turn. Take the next three prospects you actually expect to talk to this month. Real names, not hypotheticals. For each one, fill in the four-line worksheet from earlier. Which type are they. What is their real motive. What are their numbers, even if you have to estimate for now. And the one sentence you will lead with. If you cannot yet name the motive, that is your first call's job: ask the two questions and find out. Do this for three real prospects before you finish today, and you will walk into those conversations sounding like a bureau that gets them, instead of one reading a script.",
    },
    {
      id: "s18",
      layout: "action",
      eyebrow: "Your turn",
      title: "Rewrite your opener",
      callout: {
        kind: "action",
        title: "Kill the feature-dump",
        text: "Write down how you currently open a recruiting call. Then rewrite it so the first thing out of your mouth is a question about their reason.",
      },
      narration:
        "One more quick exercise, because it changes everything that follows. Write down, word for word, how you currently open a recruiting call. Be honest. If the first thing out of your mouth is anything about your software, you are feature-dumping. Now rewrite it so the first thing you say is a question about their reason, using the opener we covered or your own version of it. Read the new one out loud a few times until it feels natural, because a script only works if it sounds like you. That single change, moving the reason to the front of the call, will do more for your close rate than any new feature your software vendor ships this year.",
    },
    {
      id: "s19",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "You sell a business in a box — software, support, bank products, and confidence — not just software." },
        { text: "Sell to the reason, not the feature list. The reason is personal; features are interchangeable." },
        { text: "Know the four prospects: franchise refugee buys margin, unhappy independent buys reliability." },
        { text: "The side-hustler buys legitimacy and hand-holding; the multi-office builder buys scale and override." },
        { text: "Ask two questions, fill the worksheet, and lead with their motive — features come later as proof." },
      ],
      subtitle: "Up next: Build a Recruiting Pipeline",
      narration:
        "Let's recap. One: you sell a business in a box, software plus support plus bank products plus confidence, not software alone. Two: sell to the reason, not the feature list, because the reason is personal and the features are interchangeable. Three: know your four prospects. The franchise refugee buys margin, the unhappy independent buys reliability, the side-hustler going pro buys legitimacy and a guiding hand, and the multi-office builder buys scale and override potential. Four: ask the two questions, fill out the buyer-persona worksheet, and lead with their motive, letting features come later only as proof. Knowing who you are selling to is step one. Next, we turn those prospects into a real, predictable pipeline. Up next: Build a Recruiting Pipeline.",
    },
  ],
};
