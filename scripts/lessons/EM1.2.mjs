// =============================================================================
// Interactive lesson definition — Marketing Lesson 1.2
// "Create Ads That Attract Tax Clients"
//
// Authoring source for the narrated interactive experience.
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Create Ads That Attract Tax Clients",
  trackId: "ero-mktg",
  key: "EM1.2",

  slides: [
    // ── s1: Cover ─────────────────────────────────────────────────────────────
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Marketing Track · Tax Office Lead Generation",
      title: "Create Ads That Attract Tax Clients",
      subtitle: "Lesson 2 · Narrated walkthrough",
      narration:
        "Welcome to Lesson Two. Last lesson you mapped your funnel and calculated your LTV. Now it's time to build the actual campaign inside Ads Manager. We walk through every level using the real field names you'll see on screen — Campaign, Ad Set, Ad creative, and the Instant Form. By the end you'll have a complete draft campaign ready to review before going live.",
    },

    // ── s2: Navigate to Ads Manager ───────────────────────────────────────────
    {
      id: "s2",
      layout: "point",
      eyebrow: "Getting started",
      title: "Start in Meta Business Suite, not the Boost button",
      lead: "Every lead campaign lives inside Ads Manager — not on your Facebook Page and not through the blue Boost button.",
      bullets: [
        {
          label: "Navigate correctly",
          text: "Go to business.facebook.com → Ads Manager in the left nav → green Create button at top left.",
        },
        {
          label: "Why Ads Manager",
          text: "It gives you full access to all objectives, precise targeting, and measurement tools the Boost interface hides entirely.",
        },
      ],
      narration:
        "Before we touch a single field, make sure you're in the right place. Go to business.facebook.com, find Ads Manager in the left navigation, and click the green Create button. If you've been boosting posts from your Facebook Page, you're in a completely different environment now. The Boost button is a simplified interface that hides the most important features. This is where all the real control lives.",
    },

    // ── s3: Campaign level — objective + naming ───────────────────────────────
    {
      id: "s3",
      layout: "list",
      eyebrow: "Step 1 — Campaign level",
      title: "Objective and campaign name: your first two decisions",
      bullets: [
        {
          label: "Objective: Lead Generation",
          text: "Select 'Lead Generation.' This tells the algorithm to optimize delivery toward people most likely to fill out a form.",
        },
        {
          label: "Campaign name",
          text: "Something readable in reporting: 'Spring 2025 Tax Leads — Working Families.' Include season, audience concept, and goal.",
        },
        {
          label: "Why naming matters",
          text: "You may run several campaigns this season. A clear name tells you exactly what each one represents, months from now.",
        },
      ],
      narration:
        "At the Campaign level you make four decisions. The first is the objective — select Lead Generation. Facebook's algorithm will optimize delivery toward the people in your audience most likely to fill out a form. The second is the campaign name. Include the season, the audience concept, and the goal. Spring 2025 Tax Leads, Working Families is clear and searchable. If you end up running multiple campaigns for different audience segments, a strong naming convention keeps the dashboard readable.",
    },

    // ── s4: Campaign level — CBO off + special ad category ────────────────────
    {
      id: "s4",
      layout: "point",
      eyebrow: "Step 1 — Campaign level",
      title: "CBO and Special Ad Category: your last two campaign decisions",
      lead: "These two settings are easy to get wrong — one limits where your budget goes, the other restricts your targeting.",
      bullets: [
        {
          label: "Campaign Budget Optimization",
          text: "Turn this OFF. Set budget at the Ad Set level so you control where the money goes. CBO makes more sense once you have performance data.",
        },
        {
          label: "Special Ad Category",
          text: "Leave blank. Tax services are not a special category — only applies to housing, credit, and employment ads.",
        },
      ],
      narration:
        "Turn Campaign Budget Optimization off for now. When it's on, Facebook distributes your budget across multiple Ad Sets automatically. That can be powerful once you have real performance data — but for a first campaign, control the budget at the Ad Set level. For the Special Ad Category, leave it blank. Tax preparation is not one of Facebook's restricted categories. Those apply to housing, credit, employment, and social issues. Checking this field incorrectly restricts your targeting in ways that are hard to undo mid-campaign.",
    },

    // ── s5: Ad Set — location and naming ──────────────────────────────────────
    {
      id: "s5",
      layout: "point",
      eyebrow: "Step 2 — Ad Set level",
      title: "Location and naming: be specific",
      lead: "The Ad Set defines exactly who sees your ad, when, and for how much. Every field here matters.",
      bullets: [
        {
          label: "Ad Set name",
          text: "Name it by audience concept: 'Working Families — ZIP 90210 + 15 mi.' You'll have multiple Ad Sets eventually.",
        },
        {
          label: "Location",
          text: "Type your city or ZIP, then set the radius to 10–15 miles. Tighter is usually better for a local business.",
        },
        {
          label: "Age range",
          text: "25–54. This captures most working adults with dependent children — your core EITC and family-credit audience.",
        },
      ],
      narration:
        "Click Next to reach the Ad Set level. Name the Ad Set with enough detail to remember what it represents when you're reviewing multiple campaigns. For Location, type your city or ZIP and set the radius to ten to fifteen miles. Your phone can only handle calls in your market — don't target wider than you can serve. For Age, use 25 to 54. That captures working adults most likely to have dependents and be filing with the Earned Income Credit, Child Tax Credit, and dependent care credits.",
    },

    // ── s6: Interest stack — tax intent signals ───────────────────────────────
    {
      id: "s6",
      layout: "list",
      eyebrow: "Step 2 — Ad Set level",
      title: "Interest stack: tax intent signals",
      bullets: [
        {
          label: "Income tax",
          text: "A broad interest capturing people actively thinking about taxes — filing annually or quarterly.",
        },
        {
          label: "Tax refund",
          text: "People who have engaged with refund-related content. High seasonal urgency.",
        },
        {
          label: "IRS",
          text: "Signals compliance awareness and often anxiety about filing — a useful targeting signal.",
        },
        {
          label: "Earned Income Credit / EITC",
          text: "Specific to low-to-moderate income filers with dependents. Your highest-value audience segment.",
        },
      ],
      narration:
        "Scroll to Detailed Targeting and add your interest stack one group at a time. Start with tax intent signals. Enter income tax, tax refund, IRS, Earned Income Credit, and EITC. Income tax casts a wide net. Tax refund captures people with high seasonal awareness. IRS often flags compliance anxiety — a great signal. EITC is the most specific: it skews toward households with dependents and moderate income, exactly where your expertise delivers the most value.",
    },

    // ── s7: Interest stack — brand and life-event signals ─────────────────────
    {
      id: "s7",
      layout: "list",
      eyebrow: "Step 2 — Ad Set level",
      title: "Interest stack: brand signals and life-event signals",
      bullets: [
        {
          label: "Competitor brand signals",
          text: "'H&R Block,' 'TurboTax,' 'Jackson Hewitt' — tax-aware people actively comparing options right now.",
        },
        {
          label: "Life-event signals",
          text: "'Financial stress,' 'new job,' 'self-employed' — changes that affect tax situations and create urgency.",
        },
        {
          label: "Advantage+ audience",
          text: "Enable ONLY if you have 500+ existing clients uploaded as a custom audience. Otherwise keep targeting manual.",
        },
      ],
      narration:
        "Complete the interest stack with brand and life-event signals. Add H and R Block, TurboTax, and Jackson Hewitt. These are tax-aware people currently evaluating their options — you're not stealing clients, you're appearing in front of people already in the market. For life events, add financial stress, new job, and self-employed. Gig workers often have complex situations and real urgency to file correctly. Leave Advantage Plus Audience off unless you have five hundred or more existing clients uploaded as a custom audience.",
    },

    // ── s8: Budget and schedule ───────────────────────────────────────────────
    {
      id: "s8",
      layout: "point",
      eyebrow: "Step 2 — Ad Set level",
      title: "Budget and schedule: commit to the sprint window",
      lead: "Set your daily budget and a hard start and end date — don't let the campaign run open-ended.",
      bullets: [
        {
          label: "Daily budget",
          text: "Start at an illustrative fifteen dollars per day. Prove the campaign produces leads before scaling.",
        },
        {
          label: "Start date",
          text: "Set to January 15 or your chosen launch date. Don't let a ready campaign wait.",
        },
        {
          label: "End date",
          text: "Set to March 1. Facebook spends indefinitely unless you stop it. Always set the guardrail.",
        },
      ],
      narration:
        "Enter your daily budget — fifteen dollars per day is an illustrative starting figure. Prove the campaign generates qualified leads at a cost that makes sense before increasing that number. Set a start date and, critically, an end date. March 1 is a reasonable boundary for the main in-season campaign. Facebook spends indefinitely until you pause manually. If you forget to check the dashboard for two weeks, an open-ended campaign keeps charging. Set the end date before launch and remove that risk. You can always extend it later.",
    },

    // ── s9: Ad creative — format choice ──────────────────────────────────────
    {
      id: "s9",
      layout: "point",
      eyebrow: "Step 3 — Ad level",
      title: "Format: image or video — pick your starting point",
      lead: "Your creative is the first thing your audience sees. Start with what you can produce this week.",
      bullets: [
        {
          label: "Single image",
          text: "Best starting point if you're new to video. Faster to produce, easy to swap out in a test.",
        },
        {
          label: "Short video",
          text: "15 seconds. Shoot on your phone. Natural light. Look into the camera. Introduce yourself and what you do.",
        },
        {
          label: "Which to choose first",
          text: "Start with image if you're launching quickly. Add video as your second creative variation in the A/B test.",
        },
      ],
      narration:
        "At the Ad level, choose Single Image or Video. If you haven't produced video before, start with a strong image and treat video as your second creative test. A great image launched this week beats a great video launched next month — don't delay. For video, keep it under fifteen seconds. Shoot on your phone with natural light, look into the camera, and introduce yourself and what you do for families in your city. Simple and genuine beats slick and generic for a local service business.",
    },

    // ── s10: Ad creative — why founder photo beats stock ─────────────────────
    {
      id: "s10",
      layout: "tip",
      eyebrow: "Step 3 — Ad level",
      title: "Why your face outperforms stock photography",
      callout: {
        kind: "stat",
        title: "Authenticity converts better for local trust services",
        text: "Real founder photos and office exteriors consistently produce lower cost-per-lead than polished stock images for local tax, legal, and financial services. Your audience is deciding whether to trust you with their financial documents — a real face closes that trust gap faster than any design studio can.",
      },
      narration:
        "When someone sees your ad, the question running in the background is: do I trust this person with my financial documents? A stock photo of a smiling stranger answers nothing. A genuine photo of you — at your desk, outside your office, or working with a client — tells the viewer that a real person runs this business in their neighborhood. Even if your phone photo is technically lower quality than stock imagery, the authenticity wins. Use your headshot, your office exterior, or a candid shot of your workspace.",
    },

    // ── s11: Hook copy formula ────────────────────────────────────────────────
    {
      id: "s11",
      layout: "list",
      eyebrow: "Ad creative",
      title: "The four-part hook formula that converts",
      bullets: [
        {
          label: "Pain question",
          text: "\"Tired of leaving money on the table at tax time?\" — Creates recognition. Your audience sees themselves in it.",
        },
        {
          label: "Identity",
          text: "\"I'm [Your Name] at [Office Name] in [City].\" — Establishes local trust in one line.",
        },
        {
          label: "Value prop",
          text: "\"I help working families get every credit they've earned — takes 30 minutes.\" — Low barrier to entry.",
        },
        {
          label: "Call to action",
          text: "\"Book your free appointment today.\" — One clear next step. No alternatives.",
        },
      ],
      narration:
        "Your ad copy follows a four-part structure. Lead with a pain-point question your audience recognizes. Then establish identity and location in one short line. State your value proposition and make the barrier feel low — help working families get every credit they've earned, takes thirty minutes. Close with one clear call to action. Keep all four parts. The question creates recognition. The identity creates trust. The value prop creates desire. The call to action creates movement. Adapt the language to your voice, but don't drop any element.",
    },

    // ── s12: Instant Form type ────────────────────────────────────────────────
    {
      id: "s12",
      layout: "point",
      eyebrow: "The Lead Form",
      title: "Instant Form type: choose More Volume",
      lead: "The form type controls how many steps a lead takes before submitting — fewer steps means more leads.",
      bullets: [
        {
          label: "More Volume (recommended)",
          text: "A two-step flow optimized for maximum submissions. Facebook pre-fills name, phone, and email.",
        },
        {
          label: "Higher Intent",
          text: "Adds a review step. Reduces volume but improves quality. Use once you have more leads than you can handle.",
        },
        {
          label: "Why start with More Volume",
          text: "Most offices need volume first. Qualify leads on the phone. You cannot call leads who never submitted.",
        },
      ],
      narration:
        "In the Lead Form builder, the first choice is Form Type. Select More Volume. Facebook pre-fills name, phone, and email from the user's profile, so submission takes about fifteen seconds. Higher Intent adds a review step that reduces low-quality submissions but also cuts total volume. For most offices in their first season, volume is the right starting priority. You'll qualify leads on the phone, where a real conversation builds trust. Start with More Volume. Switch to Higher Intent only if you end up with more submissions than your team can follow up with.",
    },

    // ── s13: Form fields ──────────────────────────────────────────────────────
    {
      id: "s13",
      layout: "list",
      eyebrow: "The Lead Form",
      title: "The four fields and one qualifying question",
      bullets: [
        {
          label: "First Name and Last Name",
          text: "Auto-filled from Facebook profile. Lead barely touches these.",
        },
        {
          label: "Phone Number",
          text: "The most important field. Auto-filled on most mobile devices.",
        },
        {
          label: "Email",
          text: "For the follow-up email sequence covered in Lesson Four.",
        },
        {
          label: "Qualifying question",
          text: "\"Do you have any children under 17?\" Yes/No. Flags EITC-eligible leads before you call.",
        },
      ],
      narration:
        "Add four fields: First Name, Last Name, Phone Number, and Email. Facebook auto-fills the first three on most mobile devices, so submitting takes about fifteen seconds. Then add one custom qualifying question: Do you have any children under 17? A yes or no answer tells you before you pick up the phone whether this lead is likely eligible for the Earned Income Credit or Child Tax Credit. That changes how you open the call — and it signals to the lead that you're asking about their specific situation, not running a generic mass campaign.",
    },

    // ── s14: Thank You screen — expectation setting ───────────────────────────
    {
      id: "s14",
      layout: "tip",
      eyebrow: "The Lead Form",
      title: "The Thank You screen sets the expectation",
      callout: {
        kind: "tip",
        title: "Write this on your Thank You screen",
        text: "\"Thanks! We'll call you within the hour to book your appointment.\" — Sets the expectation so the lead is ready when you call. Also holds your team accountable to the speed standard.",
      },
      narration:
        "The Thank You screen is the last thing a lead sees after submitting. Most offices leave it at the default — a missed opportunity. Write something specific: Thanks, we'll call you within the hour to book your appointment. First, it tells the lead what to expect, so when your number shows up on their phone they're expecting the call. That expectation improves your answer rate. Second, it sets a speed standard for your team. If someone sees that copy during training, they know the promise you make to every lead. Use it as a culture statement for your follow-up operation.",
    },

    // ── s15: Thank You screen — why confirmation reduces no-shows ─────────────
    {
      id: "s15",
      layout: "point",
      eyebrow: "The Lead Form",
      title: "Why confirmation text on the Thank You screen reduces no-shows",
      lead: "The form submit is a commitment. The Thank You screen is the confirmation that makes the commitment stick.",
      bullets: [
        {
          label: "Without confirmation",
          text: "The interaction fades. The lead forgets they submitted. An unknown number calls an hour later.",
        },
        {
          label: "With confirmation",
          text: "The lead mentally prepares for the call. Your number is expected, not ignored.",
        },
        {
          label: "The behavioral principle",
          text: "Confirming next steps immediately after a commitment — even a small one — improves follow-through.",
        },
      ],
      narration:
        "Here's the behavioral principle behind the Thank You screen. Without a specific message, the interaction fades quickly. The lead scrolls on, closes the tab, and by the time your team calls an hour later they may have forgotten they submitted. But when the screen says we'll call you within the hour, the lead forms an expectation. Your number is expected, not treated as an unknown caller. Research on appointment compliance shows that confirming next steps immediately after someone makes a commitment — even a small one like a form submit — significantly improves whether they follow through.",
    },

    // ── s16: Compliance — privacy policy + refund language ───────────────────
    {
      id: "s16",
      layout: "tip",
      eyebrow: "Compliance",
      title: "Privacy policy and refund language: required before launch",
      callout: {
        kind: "warn",
        title: "Two compliance rules for every lead ad",
        text: "1. Privacy Policy URL: Meta requires it on every lead form. Add a basic page to your website explaining what you do with contact information collected. 2. No specific refund guarantees: frame any refund language as illustrative only. Promising a specific dollar figure to a specific filer type is not permitted.",
      },
      narration:
        "There are three compliance requirements before any lead campaign goes live. First, the privacy policy. Facebook requires a privacy policy URL on every Instant Form. The page needs to explain what you do with contact information you collect. Add it to your website before you build the form — it doesn't need to be long, but it must exist and be linked. Second, refund language. Your copy cannot promise a specific dollar amount to a specific filer type. Frame it as illustrative only. Most of my clients leave with more than they expected is fine. We'll get you three thousand back is not.",
    },

    // ── s17: Compliance — ITIN and CAA rule ──────────────────────────────────
    {
      id: "s17",
      layout: "list",
      eyebrow: "Compliance",
      title: "ITIN advertising: CAA authorization required",
      bullets: [
        {
          label: "The rule",
          text: "Advertising W-7 preparation requires your office to hold Certifying Acceptance Agent (CAA) status from the IRS.",
        },
        {
          label: "The alternative",
          text: "If you don't hold CAA status, you may advertise ITIN services only if you have a formal written referral arrangement with a CAA partner.",
        },
        {
          label: "The risk",
          text: "Advertising ITIN services without either creates IRS liability. Confirm your status before those ads go live.",
        },
      ],
      narration:
        "The third compliance rule applies to ITIN advertising and is the one most offices overlook. If you plan to advertise Form W-7 preparation or ITIN filing, your office must hold Certifying Acceptance Agent status from the IRS, or have a formal written referral arrangement with a CAA partner. A CAA is authorized by the IRS to verify identity documents and certify ITIN eligibility. Advertising this service without that authorization creates real liability. If you hold CAA status, include ITIN services in your ads. If not, leave it out or formalize a referral partnership first. Check your authorization status before launch.",
    },

    // ── s18: A/B testing discipline ───────────────────────────────────────────
    {
      id: "s18",
      layout: "point",
      eyebrow: "Creative testing",
      title: "Run two ads — let the data pick the winner",
      lead: "A/B testing your creative is the difference between guessing what resonates and knowing what works.",
      bullets: [
        {
          label: "One variable at a time",
          text: "Same audience, same form, different creative only. Founder photo vs. lifestyle image, or image vs. video.",
        },
        {
          label: "Wait for real data",
          text: "Give each ad 3–5 days and 100+ impressions before drawing conclusions. Smaller samples are noise.",
        },
        {
          label: "Act on the winner",
          text: "Pause the losing ad. Move its budget to the winner. Then challenge the winner with a new creative.",
        },
      ],
      narration:
        "Run two ads inside every Ad Set, not one. The only difference between them should be the creative — two different images, or an image tested against a video. Keep the audience, copy, and form identical. After three to five days, look at which ad has a lower cost per lead. Pause the loser and move its budget to the winner. Then challenge the winner with a new creative. Over a full tax season, two or three rounds of creative testing can substantially reduce your cost per lead compared to where you started. Every reduction compounds across every dollar you spend.",
    },

    // ── s19: Testing sequence ─────────────────────────────────────────────────
    {
      id: "s19",
      layout: "list",
      eyebrow: "Creative testing",
      title: "The testing sequence: what to optimize first",
      bullets: [
        {
          label: "Round 1: Creative",
          text: "Test two images or image vs. video. Typically the biggest impact on cost per lead.",
        },
        {
          label: "Round 2: Headline",
          text: "Once you have a winning creative, test two headline variations — same image, different first line of copy.",
        },
        {
          label: "Round 3: Audience",
          text: "Create a second Ad Set with a different interest stack and compare cost per lead.",
        },
        {
          label: "Sequence matters",
          text: "Optimizing creative first gives the biggest return. Headline second. Audience third. Don't skip ahead.",
        },
      ],
      narration:
        "Test things in the right order to get the most improvement from the least wasted spend. Round one is creative — the visual is the single largest driver of whether someone stops scrolling. Get the right image or video in place before optimizing anything else. Round two is the headline — try two versions of the pain-point question with the same winning creative. Round three is audience — create a second Ad Set with a different interest mix and compare. Follow this sequence and you'll build a genuinely optimized campaign by the end of the season.",
    },

    // ── s20: Too many form fields warn ────────────────────────────────────────
    {
      id: "s20",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "Too many form fields kills your lead volume",
      callout: {
        kind: "warn",
        title: "Keep the form to 3–4 fields maximum",
        text: "Every additional field reduces form completions. More than four fields on a mobile form and submission rates drop sharply. Qualify leads on the phone, not on the form.",
      },
      narration:
        "The most common lead-form mistake is over-qualifying on the form. An office adds fields for income range, marital status, W-2 versus 1099, whether they've filed late before. What happens is people abandon the form partway through. You don't get fewer bad leads — you get fewer leads total, including good ones. The mobile experience is unforgiving: a form that takes more than twenty seconds to complete sees dramatically lower completion rates. Keep it to three or four fields. Qualify further on the first phone call, where a real conversation builds trust.",
    },

    // ── s21: Build the draft action ────────────────────────────────────────────
    {
      id: "s21",
      layout: "action",
      eyebrow: "Your turn",
      title: "Build the draft campaign — save before launching",
      callout: {
        kind: "action",
        title: "Complete all three levels as a draft",
        text: "Campaign: Lead Generation objective, descriptive name, CBO off, no Special Ad Category. Ad Set: location and radius, age 25–54, full interest stack, illustrative daily budget, start date and hard end date. Ad: founder photo or short video, four-part hook copy, Instant Form with four fields and one qualifying question, Thank You screen with call-back promise. Save as draft. Screenshot each level.",
      },
      narration:
        "Here is your action item. Go to Ads Manager and build the draft campaign now. Campaign: Lead Generation objective, clear name, CBO off. Ad Set: your city and radius, ages 25 to 54, full interest stack, a daily budget you can sustain, and both a start and end date. Ad: founder photo or short video, four-part hook copy, Instant Form with four fields and your qualifying question, Thank You screen message written. Save as draft — do not publish yet. Take screenshots of each level. In Lesson Three you'll learn what happens the moment a lead submits, and that may prompt you to verify your backend before going live.",
    },

    // ── s22: Summary list ─────────────────────────────────────────────────────
    {
      id: "s22",
      layout: "list",
      eyebrow: "Recap",
      title: "What you built in this lesson",
      bullets: [
        {
          label: "Campaign level",
          text: "Lead Generation objective, descriptive name, Campaign Budget Optimization off, no Special Ad Category.",
        },
        {
          label: "Ad Set level",
          text: "Local geography, 10–15 mile radius, age 25–54, stacked interest list including tax signals and competitor brands.",
        },
        {
          label: "Ad level",
          text: "Authentic founder photo or short video. Four-part hook formula: pain question, identity, value prop, CTA.",
        },
        {
          label: "Lead Form",
          text: "More Volume type, four fields maximum, one qualifying question, Thank You screen with a specific call-back promise.",
        },
        {
          label: "Compliance",
          text: "Privacy policy URL required, no specific refund guarantees, ITIN advertising only with CAA authorization.",
        },
      ],
      narration:
        "Let's run through the five building blocks. Campaign level: Lead Generation objective, clear name, CBO off, no Special Ad Category. Ad Set level: local geography with a ten to fifteen mile radius, age 25 to 54, and a layered interest list built from tax intent signals, competitor brands, and life-event signals. Ad level: your own photo or a short video beats stock, and the four-part hook formula gives your copy a proven structure. Lead Form: More Volume type, four fields max, one qualifying question, and a specific call-back promise on the Thank You screen. And three compliance guardrails before launch.",
    },

    // ── s23: Testing recap ────────────────────────────────────────────────────
    {
      id: "s23",
      layout: "point",
      eyebrow: "Recap",
      title: "Testing and the discipline of optimization",
      lead: "Running two ads and following the creative-headline-audience sequence is what turns a good first campaign into a great fourth one.",
      bullets: [
        {
          label: "Always run two creatives",
          text: "One variable, same audience, same form. Let data — not instinct — pick the winner after 3–5 days.",
        },
        {
          label: "Follow the sequence",
          text: "Creative first, headline second, audience third. Skipping ahead wastes budget before the baseline is proven.",
        },
        {
          label: "Compound the gains",
          text: "Each testing round reduces your cost per lead. Lower CPL means more leads for the same spend all season.",
        },
      ],
      narration:
        "One final discipline: testing is not optional if you want to improve. Run two ads in every Ad Set, follow the creative-headline-audience sequence, and act on the data. Pause the loser, move the budget to the winner, then challenge the winner again. If you reduce your cost per lead meaningfully in round one and again in round two, by the end of the season you're getting far more leads for the same spend than when you started. That's the difference between offices that scale and offices that plateau.",
    },

    // ── s24: Recap ────────────────────────────────────────────────────────────
    {
      id: "s24",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Campaign level: Lead Generation objective, descriptive name, Campaign Budget Optimization off, no Special Ad Category for tax services." },
        { text: "Ad Set level: local geography with a 10–15 mile radius, age 25–54, a stacked interest list including tax signals, competitor brands, and life-event signals." },
        { text: "Ad level: founder photo or fifteen-second video consistently outperforms stock imagery. Use the four-part hook formula." },
        { text: "Lead Form: More Volume type, four fields maximum, one qualifying question, Thank You screen with a call-back promise." },
        { text: "Compliance before launch: privacy policy URL required, no specific refund guarantees in copy, ITIN advertising only with CAA status." },
        { text: "Testing sequence: creative first, then headline, then audience. Run two variations, let data pick the winner, and compound gains across the season." },
      ],
      subtitle: "Up next: Capture and Qualify Every Lead",
      narration:
        "In the next lesson we cover what happens the moment a lead submits that form. The five minutes after the form submit can be worth more than your entire ad budget — and most offices get it wrong. We'll build the follow-up system so every lead you just learned to generate gets a fast enough response to convert. See you there.",
    },
  ],
};
