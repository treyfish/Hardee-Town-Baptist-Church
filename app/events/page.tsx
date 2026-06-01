import type { Metadata } from "next";
import GoogleCalendar from "../google-calendar";
import EventCard from "../event-card";
import FadeInit from "../fade-init";
import { events } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events & Calendar · Hardeetown Baptist Church",
  description: "Upcoming events and the full church calendar for Hardeetown Baptist Church in Chiefland, Florida.",
};

export default function EventsPage() {
  return (
    <>
      <section className="bg-ink text-cream py-20 md:py-28 px-6 text-center">
        <div className="uppercase tracking-[0.3em] text-[11px] text-gold mb-4 font-semibold">What&apos;s happening</div>
        <h1 className="font-display text-4xl md:text-6xl leading-tight">Events &amp; Calendar</h1>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-10 leading-tight fade-up">Upcoming at Hardeetown</h2>
          <div className="grid md:grid-cols-3 gap-6 fade-up">
            {events.map((e) => (
              <EventCard key={e.title} event={e} />
            ))}
          </div>

          <div className="mt-16 fade-up">
            <h2 className="font-display text-3xl md:text-4xl mb-3 leading-tight">Church Calendar</h2>
            <p className="text-warm-gray mb-8 max-w-xl">
              Services, studies, and events — kept up to date automatically. Add it to your own calendar with one tap.
            </p>
            <GoogleCalendar />
          </div>
        </div>
      </section>

      <FadeInit />
    </>
  );
}
