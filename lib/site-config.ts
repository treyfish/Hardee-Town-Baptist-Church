// Central place for all the "fill these in later" values.
// Update these and the whole site updates — buttons, calendar, contact, social.

export const siteConfig = {
  name: "Hardeetown Baptist Church",
  shortName: "Hardeetown",
  tagline: "Loving. Learning. Serving Together.",
  description:
    "A family of believers in Chiefland, Florida, growing in Christ and reaching our community with the hope of the Gospel.",

  address: {
    line1: "1716 NW 14th Street",
    line2: "Chiefland, Florida 32626",
  },
  phone: "(352) 493-4523",
  phoneHref: "tel:3524934523",

  serviceTimes: {
    sundayMorningWorship: "10:45 AM",
    sundayEveningWorship: "6:00 PM",
    // Wednesdays at 6:00 PM: Youth, Children, and Adult Prayer Meeting
    wednesday: "6:00 PM",
  },

  social: {
    facebook: "https://www.facebook.com/profile.php?id=61556940396902",
    youtube: "https://www.youtube.com/channel/UCMtbl4zKNOx0UBMpxeVzvHw",
    instagram: "https://www.instagram.com/hbc_chiefland/",
  },

  // YouTube channel ID — used to auto-pull the latest sermon videos.
  youtubeChannelId: "UCMtbl4zKNOx0UBMpxeVzvHw",

  // ── Fill these in when ready ───────────────────────────────
  // Online giving page (Tithe.ly / PushPay / PayPal / etc.).
  // Leave "" and the Give buttons gracefully point at contact info instead.
  givingUrl: "",

  // Public Google Calendar ID — found in Google Calendar:
  // Settings → (your calendar) → "Integrate calendar" → Calendar ID.
  // Looks like: abc123def456@group.calendar.google.com
  // Leave "" to show a friendly "calendar coming soon" placeholder.
  googleCalendarId: "",
  timezone: "America/New_York",

  // Where contact-form messages should go (wired up later).
  contactEmail: "",
} as const;
