import { siteConfig } from "@/lib/site-config";

// Embeds a public Google Calendar when `googleCalendarId` is set in
// lib/site-config.ts. Until then, shows a styled placeholder so the live
// site never displays a broken/empty iframe.
export default function GoogleCalendar() {
  const { googleCalendarId, timezone } = siteConfig;

  if (!googleCalendarId) {
    return (
      <div className="rounded-2xl border border-burgundy/15 bg-cream-2 p-10 md:p-16 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
        </div>
        <h3 className="font-display text-2xl mb-2">Our calendar is on the way</h3>
        <p className="text-warm-gray max-w-md mx-auto">
          We&apos;re connecting our church Google Calendar so you can see every
          service, study, and event in one place. Check back soon.
        </p>
      </div>
    );
  }

  const src =
    `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(googleCalendarId)}` +
    `&ctz=${encodeURIComponent(timezone)}&mode=AGENDA&showTitle=0&showPrint=0&showTabs=1&showCalendars=0`;

  return (
    <div className="overflow-hidden rounded-2xl border border-burgundy/15 bg-white shadow-sm">
      <iframe
        title={`${siteConfig.name} calendar`}
        src={src}
        className="w-full h-[560px] md:h-[640px]"
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  );
}
