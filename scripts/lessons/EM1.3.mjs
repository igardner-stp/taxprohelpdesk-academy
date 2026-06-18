// =============================================================================
// Interactive lesson definition — Marketing Lesson 1.3
// "Capture and Qualify Every Lead"
//
// Authoring source for the narrated interactive experience.
// `narration` is the spoken script (also the caption + transcript).
// =============================================================================

export default {
  matchTitle: "Capture and Qualify Every Lead",
  trackId: "ero-mktg",
  key: "EM1.3",

  slides: [
    // ── s1: Cover ─────────────────────────────────────────────────────────────
    {
      id: "s1",
      layout: "cover",
      eyebrow: "Marketing Track · Tax Office Lead Generation",
      title: "Capture and Qualify Every Lead",
      subtitle: "Lesson 3 · Narrated walkthrough",
      narration:
        "Welcome to Lesson Three. You have built the campaign. Now we answer the question that determines whether your ad budget pays off: what happens the moment a lead submits that form? By the end of this lesson you will know how to route lead data automatically, fire an instant text, call within five minutes, qualify every lead with three questions, and classify each lead into a type that drives your entire follow-up strategy.",
    },

    // ── s2: Why the backend matters ───────────────────────────────────────────
    {
      id: "s2",
      layout: "point",
      eyebrow: "Why this matters",
      title: "The ad gets the lead. The system closes the client.",
      lead: "Most offices spend everything on the ad and almost nothing on what happens after the form submits. That is exactly where clients are lost.",
      bullets: [
        {
          label: "Leads are perishable",
          text: "A submitted form is a moment of raised intent. That moment fades within minutes, not hours.",
        },
        {
          label: "Competition moves fast",
          text: "Your lead may have filled out forms from two or three other offices that same afternoon. First contact wins.",
        },
      ],
      narration:
        "A lead is not a client. It is a moment of raised hand with a very short shelf life. The person who filled out your form is not waiting by the phone. They may have tapped ads from two or three competitors in the same hour. The office that reaches them first with the right tone is usually the one that gets the appointment. Your ad bought an opportunity. Your system either converts it or lets it expire.",
    },

    // ── s3: Speed-to-lead stat callout ────────────────────────────────────────
    {
      id: "s3",
      layout: "tip",
      eyebrow: "By the numbers",
      title: "The five-minute window is where most clients are won or lost",
      callout: {
        kind: "stat",
        title: "Speed-to-lead matters enormously",
        text: "Research across service industries consistently shows that contacting a lead within 5 minutes is dramatically more effective than waiting even 30 minutes. Contact rates decline sharply with every passing hour.",
      },
      narration:
        "When someone submits your form, they are mentally present and open to a conversation. At thirty minutes later they have moved on. At an hour later they may have already booked with a competitor who called first. Your contact rate, conversion rate, and cost per client all move in the wrong direction with every minute of delay. The five-minute rule is the single highest-leverage, lowest-cost improvement most independent offices can make to their lead operation.",
    },

    // ── s4: Tax season urgency amplifier ──────────────────────────────────────
    {
      id: "s4",
      layout: "point",
      eyebrow: "Why this matters",
      title: "Tax season makes every hour of delay more expensive",
      lead: "Lead response urgency is always real. During tax season it is amplified by the shortest selling window of any service business.",
      bullets: [
        {
          label: "Short selling window",
          text: "Roughly fifteen weeks from January through mid-April. A lead lost in week two cannot be recovered in week eight.",
        },
        {
          label: "Competitive density spikes",
          text: "Every office in your market is advertising at once. A February lead has more options than at any other time of year.",
        },
        {
          label: "Urgency is already present",
          text: "Many filers are anxious about deadlines or refund timing. That anxiety primes them to act quickly — with whoever calls first.",
        },
      ],
      narration:
        "During tax season the five-minute rule's impact is multiplied. Your selling window is roughly fifteen weeks. A lead that goes cold in week two is not a second chance in week eight. They will have filed somewhere else. Competitive density is also at its peak because every office in your area is running ads targeting the same people. And many filers are already anxious about deadlines or getting a refund before a bill is due. That urgency works in your favor if you are first to the phone.",
    },

    // ── s5: Three-step capture system overview ────────────────────────────────
    {
      id: "s5",
      layout: "list",
      eyebrow: "The capture system",
      title: "Three-step lead capture: route, respond, call",
      bullets: [
        {
          label: "Step 1: Route the data automatically",
          text: "Connect Meta Lead Center to your CRM or spreadsheet the moment a form submits. No manual exports. Your phone buzzes with lead details within seconds.",
        },
        {
          label: "Step 2: Fire an instant auto-SMS",
          text: "An automated text goes to the lead within sixty seconds of form submit, before you pick up the phone. It claims the top of their inbox.",
        },
        {
          label: "Step 3: Make a live phone call within five minutes",
          text: "A real human calls from your office number. If no answer, leave one brief voicemail and text immediately after. Both channels every time.",
        },
      ],
      narration:
        "Your lead capture system has three steps and all three must be in place. Step one is automatic data routing. When a lead submits your Facebook form, that data needs to land somewhere actionable immediately — no manual exports from Ads Manager. The simplest setup is a Zapier automation that pushes the lead into a Google Sheet and sends a push notification to your phone. Step two is the auto-SMS: an automated text within sixty seconds, before you even call. Step three is a live phone call within five minutes. Not a robocall. A real person. If they do not answer, leave one brief voicemail and text immediately after from the same number. Both channels, every single time.",
    },

    // ── s6: Step 1 in depth — routing options ────────────────────────────────
    {
      id: "s6",
      layout: "point",
      eyebrow: "The capture system",
      title: "Step 1: Choose the routing tool that fits your volume",
      lead: "Start simple and upgrade as volume grows. You do not need expensive software to run this well in a first season.",
      bullets: [
        {
          label: "Simple: Zapier plus Google Sheets",
          text: "Very low cost. Zapier connects Meta Lead Center to a Sheet and sends a phone notification. Solid for a first season.",
        },
        {
          label: "Mid-tier: LeadConnector or GoHighLevel",
          text: "Paid CRM platforms with native Facebook integration, auto-SMS, pipeline tracking, and follow-up automation built in.",
        },
        {
          label: "Advanced: Full CRM with sequences",
          text: "Use when you are managing fifty or more leads per week and need structured multi-touch automation.",
        },
      ],
      narration:
        "Match the tool to your current volume. If you are expecting twenty to forty leads per week, a Zapier workflow that pushes leads from Meta Lead Center to a Google Sheet while sending a notification to your phone is enough. It is very low cost and takes about an hour to set up. When volume grows and managing follow-ups starts taking more time than making calls, move to GoHighLevel or LeadConnector. These have built-in SMS, calling tools, and pipeline views. Whatever tool you choose, the outcome is the same: a form submit becomes a row in your tracker and an alert on your phone within seconds.",
    },

    // ── s7: Auto-SMS script ────────────────────────────────────────────────────
    {
      id: "s7",
      layout: "tip",
      eyebrow: "Script",
      title: "Step 2: The instant auto-SMS — every word earns its place",
      callout: {
        kind: "quote",
        title: "Send this within 60 seconds of form submit",
        text: "\"Hi [First Name]! This is [Your Name] from [Office Name]. I just got your info — I'd love to get you booked in. Are you available for a quick call in the next 10 minutes? Reply YES or a good time.\"",
      },
      narration:
        "Save this script to your automation tool right now. Every word is intentional. Using the first name signals this is not a mass blast. The phrase I just got your info creates real immediacy. Are you available for a quick call in the next ten minutes, reply YES or a good time, gives the lead a simple micro-commitment. Leads who reply to that first text are significantly more likely to pick up the follow-up call than leads who received only a silent outbound text. The SMS fires automatically. The call comes from you. Both together is what converts.",
    },

    // ── s8: Step 3 — why a human call matters ────────────────────────────────
    {
      id: "s8",
      layout: "point",
      eyebrow: "The capture system",
      title: "Step 3: Why a human call beats automation for trust",
      lead: "Automation handles speed. A live call handles trust. You need both, in that order.",
      bullets: [
        {
          label: "Voice establishes trust faster than text",
          text: "A lead handing over their W-2s needs to trust the person on the other end. A brief human call creates that faster than any text thread.",
        },
        {
          label: "You gather qualifying data in real time",
          text: "One live call gives you prior preparer history, return complexity, and urgency. A text thread takes days to get the same data.",
        },
        {
          label: "Objections resolve on calls",
          text: "Price resistance and scheduling conflicts disappear much faster in a live conversation than in back-and-forth texts.",
        },
      ],
      narration:
        "Think about what you are asking someone to do. You are asking them to hand you their Social Security number, their W-2s, and their financial life. That trust is built person to person, not through a text thread. When you call within five minutes, you demonstrate responsiveness no competitor can easily match, gather the data you need to price and schedule correctly, and give the lead a chance to ask the question they did not put in the form. Handle those questions live and your booking rate is substantially higher than offices relying on text-only follow-up.",
    },

    // ── s9: Three qualifying questions overview ───────────────────────────────
    {
      id: "s9",
      layout: "list",
      eyebrow: "Qualifying on first contact",
      title: "Three questions that classify every lead in sixty seconds",
      bullets: [
        {
          label: "Question 1: Prior preparer history",
          text: "Have you filed with a local preparer before? Sets the conversation type: education, differentiation, or fast-book.",
        },
        {
          label: "Question 2: Self-employment income",
          text: "Do you have business or self-employment income? Yes means a more complex return, a higher fee, and a longer appointment slot.",
        },
        {
          label: "Question 3: Timing urgency",
          text: "Are you hoping to file before a certain date? A yes with a deadline lets you anchor the appointment in this call.",
        },
      ],
      narration:
        "When you get the lead on the phone, three questions accomplish two things at once: you build rapport and you qualify the lead without the call feeling like an interrogation. These three give you the lead type, the fee complexity, and the urgency signal all in one short conversation. They are simple enough that any staff member can use them on day one. Walk through them in order on every first call.",
    },

    // ── s10: Question 1 in depth — prior preparer ────────────────────────────
    {
      id: "s10",
      layout: "point",
      eyebrow: "Qualifying on first contact",
      title: "Question 1: Prior preparer history drives the whole conversation",
      lead: "One question produces three different responses, each requiring a different opening story.",
      bullets: [
        {
          label: "Never used a preparer",
          text: "Education conversation. Explain what a skilled preparer finds that software misses, such as EITC and CTC credits that self-service software often flags as optional.",
        },
        {
          label: "Had a preparer, switching",
          text: "Differentiation conversation. Ask briefly what was frustrating. Position what you do differently without criticizing the prior office.",
        },
        {
          label: "Had a preparer, returning to you",
          text: "Fast-book. They already trust the model. Move to scheduling without a long sales pitch.",
        },
      ],
      narration:
        "The prior preparer question tells you the entire emotional context you are walking into. A first-time professional-prep client needs to understand the value before they see the price. A useful framing: many people switching from software to a professional preparer find credits that software flagged as optional or skipped entirely. A switching client just needs to see you are different — ask what was frustrating and mirror it back specifically. A returning client trusts the model already. Get them scheduled quickly and move on.",
    },

    // ── s11: Question 2 — self-employment pricing intel ───────────────────────
    {
      id: "s11",
      layout: "tip",
      eyebrow: "Qualifying on first contact",
      title: "Question 2: Self-employment income changes the fee and the slot",
      callout: {
        kind: "tip",
        title: "Frame the complexity before you quote",
        text: "Before giving any fee estimate, ask about self-employment or 1099 income. A Schedule C return takes longer to prepare and commands a higher fee. Knowing this before you quote prevents awkward mid-call price changes.",
      },
      narration:
        "If the answer to the self-employment question is yes, three things change immediately. Your quote goes up — a Schedule C return is more complex than a W-2 only return and should be priced accordingly. Your appointment slot gets longer. And there is a genuine upsell opportunity. Many self-employed filers have never thought about quarterly estimates, mileage tracking, or home-office analysis. Each of those is a conversation that makes you more valuable and keeps them returning year after year.",
    },

    // ── s12: Question 3 — timing urgency and the close ───────────────────────
    {
      id: "s12",
      layout: "point",
      eyebrow: "Qualifying on first contact",
      title: "Question 3: Use timing urgency to close the appointment now",
      lead: "A filer with a self-stated deadline is primed to book immediately. Name two openings and let them choose.",
      bullets: [
        {
          label: "Deadline urgency signals book-now intent",
          text: "Expecting a refund before a bill is due, wanting to file by month end, or needing a refund-transfer product. All are reasons to close on this call.",
        },
        {
          label: "The two-option close",
          text: "Offer two specific times: Tuesday at four or Thursday at six. Never ask open-ended when to meet — it lets them say let me think about it.",
        },
        {
          label: "No urgency means Warm, not Dead",
          text: "A no-deadline lead goes into the five-touch follow-up sequence. Do not try to force a close on first contact.",
        },
      ],
      narration:
        "When a lead says they need to file by a certain date, stop qualifying and start closing. Name two specific appointment times and ask which works better. The two-option format is critical. An open question like when are you free creates room to say let me think about it, which often means never. Two specific options force a quick mental check and most people pick one. No urgency means a Warm lead — let them know you have openings throughout the season and move them into the follow-up sequence.",
    },

    // ── s13: Lead-type matrix ─────────────────────────────────────────────────
    {
      id: "s13",
      layout: "list",
      eyebrow: "Lead classification",
      title: "Four lead types — four completely different strategies",
      bullets: [
        {
          label: "HOT",
          text: "Answered, interested, ready to book. Close the appointment before hanging up. Do not over-communicate once booked.",
        },
        {
          label: "WARM",
          text: "Engaged at least once but not committed. Five-touch, fourteen-day follow-up sequence.",
        },
        {
          label: "COLD",
          text: "Form submitted, no response to any call or text yet. Heavier text cadence plus an email by day five. Worth the full sequence.",
        },
        {
          label: "GHOST",
          text: "Silent after three attempts. Move to a breakup message sequence. A meaningful portion will revive.",
        },
      ],
      narration:
        "After first contact, every lead falls into one of four categories, each with a completely different strategy. A Hot lead is ready to book — close the appointment before hanging up, name two times, take the one they choose, and stop selling. A Warm lead has engaged but not committed. They go into a five-touch, fourteen-day sequence mapped out in the next lesson. A Cold lead has not responded yet but still converts at a meaningful rate — lean on texts and add an email around day five. And a Ghost goes into a breakup sequence. A well-crafted breakup text often prompts a reply from people who were simply waiting for the right moment. Segment correctly and your whole follow-up system works.",
    },

    // ── s14: Calls plus texts beat text-only ─────────────────────────────────
    {
      id: "s14",
      layout: "tip",
      eyebrow: "Channel strategy",
      title: "Calls and texts together outperform either channel alone",
      callout: {
        kind: "stat",
        title: "The combined channel advantage",
        text: "Studies across service industries show that combining calls and texts produces a 3 to 4 times higher contact rate than texts alone. Call first. Text immediately after if no answer. Both channels, every time.",
      },
      narration:
        "When you leave a voicemail and then text from the same number within a minute, you accomplish two distinct things. Your number appears in their call log with a voicemail waiting. A text from the same number appears in their messages. Together these create a sense of genuine human presence rather than automation. A single text from an unknown number gets ignored. A missed call plus a follow-up text from the same number gets a callback at a dramatically higher rate. Never drop the phone call in favor of text-only. Call first, text right after if no answer, and rotate both channels throughout the sequence.",
    },

    // ── s15: Text-only trap warn ──────────────────────────────────────────────
    {
      id: "s15",
      layout: "tip",
      eyebrow: "Common mistake",
      title: "The text-only trap costs you clients you already paid for",
      callout: {
        kind: "warn",
        title: "Do not drift to text-only",
        text: "Texting is easier than calling, so offices gradually stop calling during busy weeks. Leads who have never heard your voice convert at a much lower rate from text alone. Protect the phone-call discipline even when it feels inconvenient.",
      },
      narration:
        "Calling a stranger takes more effort and emotional energy than sending a text. So over a busy tax season, many offices gradually stop calling and shift to text-only. By mid-February they are running an entirely text-based sequence and wondering why conversion dropped from January. A lead who has only received texts is still a stranger. When they hear your voice on a voicemail, you become a real person. That distinction matters enormously in the trust calculation of handing someone their tax documents. The fix is simple: call first and protect that habit all season.",
    },

    // ── s16: Nine CRM columns ─────────────────────────────────────────────────
    {
      id: "s16",
      layout: "list",
      eyebrow: "CRM setup",
      title: "Nine columns every lead row must have",
      bullets: [
        {
          label: "Identity",
          text: "Name, Phone, Email. Pulled automatically from the Facebook form.",
        },
        {
          label: "Source and date",
          text: "Which campaign drove the lead and the exact date received. Lets you measure cost per lead by campaign.",
        },
        {
          label: "Lead type",
          text: "Hot, Warm, Cold, or Ghost. Assigned after first contact attempt.",
        },
        {
          label: "Contact history",
          text: "Last Contact Date and Next Follow-up Date. These two fields prevent leads from falling through the cracks.",
        },
        {
          label: "Status",
          text: "Booked, No-show, Client, or Dead. The column you scan every Monday morning.",
        },
      ],
      narration:
        "A Google Sheet with the right columns is enough to run a professional lead operation for your first season. Every lead gets a row. Identity comes in automatically from the form. Source and date tell you which campaign drove the lead, which becomes your budget allocation data at season end. Lead type is assigned after the first contact attempt. Last Contact Date and Next Follow-up Date are the most operationally important fields. If the next follow-up date is blank, that lead gets forgotten. If it has a date, someone is accountable for it. Status is what you scan every Monday morning to see where the pipeline needs energy that week.",
    },

    // ── s17: Worked example — illustrative week ───────────────────────────────
    {
      id: "s17",
      layout: "point",
      eyebrow: "A real example",
      title: "What the pipeline looks like after one illustrative week of ads",
      lead: "Walk through a sample week so you can see the four lead types working in practice. All figures are illustrative only.",
      bullets: [
        {
          label: "Forty leads received in week one",
          text: "Twenty-two answered on first or second contact. Twelve booked on that call. Four said not yet. Six never replied.",
        },
        {
          label: "Lead types assigned",
          text: "Twelve HOT, booked. Four WARM, going into the sequence. Six COLD, continuing with heavier outreach. Any non-replies after three attempts become GHOST.",
        },
        {
          label: "What the follow-up produces",
          text: "A strong first-contact rate plus consistent follow-up on the Warm and Cold leads typically yields additional bookings over the following two weeks.",
        },
      ],
      narration:
        "These figures are illustrative only — your actual results depend on your market, ad quality, and response speed. Imagine forty leads in week one. You call and text every one within five minutes. Twenty-two pick up or call back. Twelve book on the first call — those are your Hot leads. The other ten engaged but are not ready — those are Warm. The remaining eighteen never responded — those are Cold. Even a modest revival rate from your Cold and Ghost sequences adds meaningful bookings across a full fifteen-week season.",
    },

    // ── s18: Build the CRM tracker action ────────────────────────────────────
    {
      id: "s18",
      layout: "action",
      eyebrow: "Your turn",
      title: "Build your lead-tracking spreadsheet before you launch",
      callout: {
        kind: "action",
        title: "Create the nine-column lead tracker now",
        text: "Open Google Sheets. New tab: Tax Leads. Headers: Name, Phone, Email, Source, Date Received, Lead Type, Last Contact Date, Next Follow-up Date, Status. Keep this tab open all season. Update it the same day as every contact attempt.",
      },
      narration:
        "Open Google Sheets right now and create your lead tracker. Add a tab called Tax Leads and type in the nine column headers. That is your entire CRM for a first season. The key discipline is updating it the same day you make any contact attempt. Do not batch updates at the end of the week. By then the details are fuzzy, dates are wrong, and next follow-up dates are unreliable. If you use a CRM platform like GoHighLevel, set up the same fields as pipeline columns. Build this today, before you run a single ad.",
    },

    // ── s19: Auto-SMS setup action ────────────────────────────────────────────
    {
      id: "s19",
      layout: "action",
      eyebrow: "Your turn",
      title: "Set up and test the instant auto-SMS before going live",
      callout: {
        kind: "action",
        title: "Three steps to verify the automation",
        text: "Step 1: Save the auto-SMS script to your CRM template or phone saved messages. Step 2: Build the Zapier or CRM trigger to fire it within 60 seconds of a Facebook Lead form submit. Step 3: Submit a test lead from your own account and verify the text arrives in under 60 seconds.",
      },
      narration:
        "Set up and test the auto-SMS before any ad goes live. Save the script from this lesson to your CRM template library or phone. If you use Zapier, build a two-step Zap: trigger on new lead from Meta Lead Ads, action to send SMS via your business texting provider. Whatever setup you choose, run a live test. Submit a form from your own Facebook account and verify the automation fires within sixty seconds. If it does not, fix the delay before you spend a dollar on ads. A broken automation on day one means you are paying for leads and leaving them cold for hours.",
    },

    // ── s20: Illustrative figures compliance note ─────────────────────────────
    {
      id: "s20",
      layout: "tip",
      eyebrow: "Important note",
      title: "All earnings and results figures in this lesson are illustrative only",
      callout: {
        kind: "warn",
        title: "Illustrative figures — results vary",
        text: "All numbers in this lesson, including lead volumes, conversion rates, and fee ranges, are illustrative examples to clarify the system. Actual results depend on your market, ad quality, and response speed. Do not treat any figure as a guarantee or projection.",
      },
      narration:
        "A brief but important note. When we used figures like forty leads in a week or fee ranges to illustrate pricing conversations, those numbers are chosen to make the system logic concrete. They are not predictions, projections, or promises. Your actual lead volume depends on budget, targeting, creative, and local competition. Your fee range depends on your market and credentials. Your conversion rate depends on your response speed and follow-up execution. Use these illustrative numbers to understand the framework, then substitute your own real numbers from your own market.",
    },

    // ── s21: Full first-contact playbook ──────────────────────────────────────
    {
      id: "s21",
      layout: "point",
      eyebrow: "Putting it together",
      title: "The first-contact playbook from form submit to booked appointment",
      lead: "Every lead gets the same sequence. Consistency at scale is what makes the system work.",
      bullets: [
        {
          label: "Form submits",
          text: "Auto-SMS fires within sixty seconds. Your phone buzzes with lead details at the same moment.",
        },
        {
          label: "You call within five minutes",
          text: "Run the three qualifying questions. Identify lead type. If Hot, close the appointment before hanging up.",
        },
        {
          label: "If no answer",
          text: "Leave one voicemail. Text from the same number immediately after. Record the attempt in your tracker with today's date and tomorrow's follow-up date.",
        },
      ],
      narration:
        "A lead submits the form. Within sixty seconds the auto-SMS fires. Simultaneously, your phone buzzes with their name and number. You call within five minutes, introduce yourself, mention you saw their form come in, and run the three qualifying questions. By the end you know the lead type, return complexity, and urgency. If it is a Hot lead, offer two appointment times and close before hanging up. If no one answers, leave one voicemail, text immediately after from the same number, and update your tracker with today's contact date and tomorrow's follow-up date. That tracker update, every single time, is what separates offices that convert consistently from offices that convert occasionally.",
    },

    // ── s22: Four common mistakes ─────────────────────────────────────────────
    {
      id: "s22",
      layout: "list",
      eyebrow: "Common mistakes",
      title: "Four mistakes that kill lead conversion",
      bullets: [
        {
          label: "Waiting more than five minutes to contact",
          text: "Contact rates fall sharply after the first five minutes. Set a personal rule and defend it all season.",
        },
        {
          label: "Drifting to text-only outreach",
          text: "Costs you a large share of leads who would have converted on a live call. Protect the phone call discipline.",
        },
        {
          label: "Skipping the Next Follow-up Date field",
          text: "Without a dated next follow-up, Warm and Cold leads die of neglect. The date is the commitment.",
        },
        {
          label: "Treating all four lead types the same",
          text: "Sending a Hot lead into a fourteen-day sequence after booking, or abandoning a Cold lead after two touches, both cost you clients.",
        },
      ],
      narration:
        "These are the four places where offices lose leads they already paid for. Waiting too long kills you on contact rate. Drifting to text-only kills you on trust and conversion. Skipping the next follow-up date column kills you on pipeline continuity. And treating all lead types identically is the fastest path to a dead pipeline. A Hot lead who is booked does not need seven more texts. A Cold lead who has been contacted once is not a Ghost yet. Get the segmentation right and the whole system pays for itself.",
    },

    // ── s23: Monday pipeline review habit ────────────────────────────────────
    {
      id: "s23",
      layout: "tip",
      eyebrow: "Pro tip",
      title: "A five-minute Monday pipeline review prevents end-of-season regret",
      callout: {
        kind: "tip",
        title: "The Monday morning check",
        text: "Every Monday: scan Status for No-shows and reschedule immediately. Check for open Hot leads from prior week. Reset Next Follow-up Dates for all active Warm and Cold leads. Five minutes. Every week.",
      },
      narration:
        "One operational habit separates offices that convert leads all season from offices that have a strong January and a soft March: the Monday morning pipeline review. Open your tracker. Scan for No-shows first — these are your easiest re-books because they already said yes once. Call them before anything else. Next look for Hot leads from last week that were never fully closed. Then go through every active Warm and Cold lead and reset the next follow-up date to fall within the current week. This five-minute check prevents the silent revenue drain of leads that fall between the cracks during a busy season.",
    },

    // ── s24: Recap ─────────────────────────────────────────────────────────────
    {
      id: "s24",
      layout: "recap",
      eyebrow: "Recap",
      title: "Key takeaways",
      bullets: [
        { text: "Speed-to-lead is your highest-leverage conversion variable. Contact within five minutes is worth far more than contact an hour later." },
        { text: "Three-step capture: route data automatically, fire an auto-SMS within sixty seconds, and call live within five minutes. All three together converts." },
        { text: "Three qualifying questions give you the lead type, return complexity, and timing urgency in one sixty-second conversation." },
        { text: "Classify every lead as Hot, Warm, Cold, or Ghost and give each a different follow-up strategy. One-size-fits-all leaves money in every type." },
        { text: "Nine-column tracker updated in real time. The Next Follow-up Date field is the one commitment that keeps leads alive all season." },
      ],
      subtitle: "Up next: Contact Strategy: Close Every Lead Type",
      narration:
        "Five things to take from this lesson. One: speed-to-lead is your most powerful conversion lever and costs nothing but discipline to improve. Two: automatic routing plus sixty-second auto-SMS plus a five-minute live call is what turns ad spend into booked appointments. Three: three qualifying questions give you everything you need to price, schedule, and classify the lead in one short call. Four: every lead gets classified and each class gets a different strategy. Five: a nine-column tracker updated in real time, with the next follow-up date as a firm commitment, keeps leads alive all season. In the next lesson we script the complete follow-up sequence for each lead type, word for word. That is where the majority of clients are actually won. See you there.",
    },
  ],
};
