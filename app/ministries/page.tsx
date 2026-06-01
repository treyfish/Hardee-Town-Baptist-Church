import type { Metadata } from "next";
import FadeInit from "../fade-init";

export const metadata: Metadata = {
  title: "Ministries · Hardeetown Baptist Church",
  description:
    "Children, Youth (The Harbor), Adult, and UPWARD Sports ministries at Hardeetown Baptist Church in Chiefland, Florida.",
};

function Schedule({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="mt-6 divide-y divide-burgundy/10 rounded-xl border border-burgundy/10 bg-cream-2 overflow-hidden">
      {items.map((it) => (
        <div key={it.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-5 py-3">
          <dt className="text-burgundy text-xs uppercase tracking-widest font-semibold sm:w-44 shrink-0">{it.label}</dt>
          <dd className="text-ink">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function MinistriesPage() {
  return (
    <>
      <section className="bg-ink text-cream py-20 md:py-28 px-6 text-center">
        <div className="uppercase tracking-[0.3em] text-[11px] text-gold mb-4 font-semibold">Find your place</div>
        <h1 className="font-display text-4xl md:text-6xl leading-tight">Ministries for Every Age</h1>
        <p className="text-cream/70 max-w-2xl mx-auto text-lg mt-5">
          From our youngest children to our seniors, there&apos;s a place to grow, serve, and belong at Hardeetown.
        </p>
      </section>

      {/* Children */}
      <section id="children" className="scroll-mt-24 py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto fade-up">
          <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-3 font-semibold">Children</div>
          <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight">Children&apos;s Ministry</h2>
          <div className="space-y-5 text-warm-gray text-lg leading-relaxed">
            <p>
              <span className="text-ink font-semibold">&ldquo;Little Moments&rdquo;</span> is a time during the morning worship service dedicated to our children. Children come to the front of the church for a fun, teachable moment that helps them understand God&apos;s Word and the message for the day. Afterward, they&apos;re dismissed to Children&apos;s Church. It&apos;s also a sweet way to begin the message for the adults.
            </p>
            <p>
              On Wednesday nights we gather for <span className="text-ink font-semibold">AWANA</span>. We start with supper in the Fellowship Hall (the building behind the Sanctuary), then move upstairs to the AWANA classes in the main building.
            </p>
          </div>
          <Schedule
            items={[
              { label: "Sunday School", value: "9:30 AM" },
              { label: "Wednesday — AWANA", value: "6:30 – 7:00 PM (supper provided)" },
            ]}
          />
        </div>
      </section>

      {/* Youth — The Harbor */}
      <section id="youth" className="scroll-mt-24 bg-cream-2 py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto fade-up">
          <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-3 font-semibold">Youth · Student Ministry</div>
          <h2 className="font-display text-3xl md:text-4xl mb-1 leading-tight">The Harbor</h2>
          <p className="text-gold font-display text-xl mb-6">Anchored in Faith. Driven by Purpose.</p>
          <div className="space-y-5 text-warm-gray text-lg leading-relaxed">
            <p>
              The Harbor is a refuge where students find strength, purpose, and belonging in Christ. Just as a harbor provides safety from the storms, our ministry is a place where young people can anchor their faith, grow in their relationship with Jesus, and be equipped to navigate life&apos;s journey with confidence.
            </p>
            <blockquote className="border-l-2 border-burgundy pl-5 italic text-ink">
              &ldquo;To be a safe haven where students encounter God&apos;s love, build unshakable faith, and are empowered to impact the world for Christ.&rdquo;
            </blockquote>
            <p className="font-display text-ink text-lg">
              &ldquo;We have this hope as an anchor for the soul, firm and secure.&rdquo; — Hebrews 6:19
            </p>
          </div>
          <Schedule
            items={[
              { label: "Wednesday Night", value: "6:30 – 8:00 PM — dinner provided, then Bible study, fun & fellowship" },
              { label: "Sunday Morning", value: "9:30 AM — Bible study" },
              { label: "Sunday Worship", value: "10:45 AM — in the Sanctuary" },
              { label: "Sunday Evening", value: "6:00 – 7:00 PM — Bible study, fun & fellowship" },
            ]}
          />
        </div>
      </section>

      {/* Adults */}
      <section id="adults" className="scroll-mt-24 py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-up">
            <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-3 font-semibold">Adults</div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Adult Ministries</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream-2 rounded-2xl p-7 border border-burgundy/10 fade-up">
              <h3 className="font-display text-2xl mb-4">Men&apos;s Ministry</h3>
              <p className="text-warm-gray leading-relaxed mb-4">
                Our men meet at least monthly for breakfast and fellowship — currently the first Sunday of each month at 8:00 AM, and the meal is free. Men of all ages are invited.
              </p>
              <p className="text-warm-gray leading-relaxed">
                We also tackle ministry projects around the church and community. If you know of someone in need or a project a group of Christian men can help with, let us know — we have skilled men who would love to reach out in the name of Christ.
              </p>
            </div>

            <div className="bg-cream-2 rounded-2xl p-7 border border-burgundy/10 fade-up">
              <h3 className="font-display text-2xl mb-4">Women&apos;s Ministry</h3>
              <p className="text-warm-gray leading-relaxed mb-4">
                Our Women&apos;s Ministry is a multi-faceted group serving in many areas of the church. Our goal is to demonstrate Christ&apos;s love and reach new people for Christ, in accordance with Acts 1:8.
              </p>
              <p className="text-warm-gray leading-relaxed">
                A heart for <span className="text-ink font-medium">missions</span> runs through everything we do — praying daily for SBC missionaries here in North America and around the world, and giving through the Lottie Moon Christmas Offering and the Annie Armstrong Easter Offering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UPWARD Sports */}
      <section id="upward" className="scroll-mt-24 bg-ink text-cream py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto fade-up">
          <div className="uppercase tracking-[0.25em] text-[11px] text-gold mb-3 font-semibold">For the community</div>
          <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight">UPWARD Sports</h2>
          <p className="text-cream/75 text-lg leading-relaxed max-w-2xl">
            UPWARD Sports brings basketball and cheer leagues to kids in our community — building character, teamwork, and faith both on and off the court. It&apos;s one of the ways we love and serve the families of Chiefland.
          </p>
          <div className="mt-8">
            <a href="/#contact" className="bg-cream text-burgundy px-7 py-3.5 rounded-full font-semibold hover:bg-gold hover:text-ink transition inline-block">
              Ask about the next season
            </a>
          </div>
        </div>
      </section>

      <FadeInit />
    </>
  );
}
