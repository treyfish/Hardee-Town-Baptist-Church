import type { ChurchEvent } from "@/lib/events";

export default function EventCard({ event }: { event: ChurchEvent }) {
  return (
    <article className="bg-cream-2 rounded-xl overflow-hidden lift">
      <div className="relative h-44 overflow-hidden">
        <span className="placeholder-badge">Placeholder</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={event.img} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-burgundy text-cream rounded-md px-3 py-2 text-center min-w-[58px]">
            <div className="text-[10px] uppercase tracking-widest font-semibold">{event.mon}</div>
            <div className="font-display text-xl leading-none">{event.day}</div>
          </div>
          <div className="text-warm-gray text-sm">{event.when}</div>
        </div>
        <h3 className="font-display text-xl mb-2">{event.title}</h3>
        <p className="text-warm-gray text-sm leading-relaxed">{event.desc}</p>
      </div>
    </article>
  );
}
