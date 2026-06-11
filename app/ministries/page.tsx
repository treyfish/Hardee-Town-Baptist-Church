import type { Metadata } from "next";
import FadeInit from "../fade-init";

export const metadata: Metadata = {
  title: "Ministries · Hardeetown Baptist Church",
  description:
    "Children, Hardeetown Student Ministries (HSM), Adult ministries, and K'Nex Groups at Hardeetown Baptist Church in Chiefland, Florida.",
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
          <div className="mt-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ministries/children-little-moments.jpg" alt="Little Moments — children gathered at the front of the sanctuary during the morning service" className="rounded-2xl w-full shadow-md" />
            <p className="text-warm-gray text-sm text-center mt-3">&ldquo;Little Moments&rdquo; during Sunday morning worship.</p>
          </div>
        </div>
      </section>

      {/* Students — Hardeetown Student Ministries (HSM) */}
      <section id="youth" className="scroll-mt-24 bg-cream-2 py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto fade-up">
          <div className="flex justify-center mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ministries/hsm-sign.jpg" alt="Hardeetown Student Ministries — HSM" className="rounded-2xl w-full max-w-md shadow-md" />
          </div>
          <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-3 font-semibold">Students</div>
          <h2 className="font-display text-3xl md:text-4xl mb-6 leading-tight">Hardeetown Student Ministries</h2>
          <div className="space-y-5 text-warm-gray text-lg leading-relaxed">
            <p>
              <span className="text-ink font-semibold">HSM</span> is where the students of Hardeetown grow in their faith, build real friendships, and learn to follow Christ together. From Bible study and worship to meals, fun, and fellowship, our students are equipped with biblical truth and surrounded by people who genuinely care about them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10 items-start">
            <div className="md:col-span-2">
              <Schedule
                items={[
                  { label: "Wednesday Night", value: "6:30 – 8:00 PM — dinner provided, then Bible study, fun & fellowship" },
                  { label: "Sunday Morning", value: "9:30 AM — Bible study" },
                  { label: "Sunday Worship", value: "10:45 AM — in the Sanctuary" },
                  { label: "Sunday Evening", value: "6:00 – 7:00 PM — Bible study, fun & fellowship" },
                ]}
              />
            </div>
            <div className="space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ministries/youth-prayer.jpg" alt="HSM students praying together before a meal" className="rounded-2xl w-full shadow-lg" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ministries/youth-room.jpg" alt="The HSM student room" className="rounded-2xl w-full shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Adults */}
      <section id="adults" className="scroll-mt-24 py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-up">
            <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-3 font-semibold">Adults</div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">Adult Ministries</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-cream-2 rounded-2xl overflow-hidden border border-burgundy/10 fade-up">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ministries/mens-ministry.jpg" alt="Men's Ministry fellowship" className="w-full h-auto" />
              <div className="p-7">
                <h3 className="font-display text-2xl mb-4">Men&apos;s Ministry</h3>
                <p className="text-warm-gray leading-relaxed mb-4">
                  Our men meet at least monthly for breakfast and fellowship — currently the first Sunday of each month at 8:00 AM, and the meal is free. Men of all ages are invited.
                </p>
                <p className="text-warm-gray leading-relaxed">
                  We also tackle ministry projects around the church and community. If you know of someone in need or a project a group of Christian men can help with, let us know — we have skilled men who would love to reach out in the name of Christ.
                </p>
              </div>
            </div>

            <div className="bg-cream-2 rounded-2xl overflow-hidden border border-burgundy/10 fade-up">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ministries/senior-adults.jpg" alt="Senior Adults group outing" className="w-full h-auto" />
              <div className="p-7">
                <h3 className="font-display text-2xl mb-4">Senior Adults</h3>
                <p className="text-warm-gray leading-relaxed mb-4">
                  Our senior adults meet monthly for fun, food, and fellowship. We pick a different restaurant to try out each month. Also, every other month we visit a different attraction somewhere in the north-central Florida area, and we eat lunch along the way.
                </p>
                <p className="text-warm-gray leading-relaxed">
                  Got an idea for a place you&apos;d like to visit, or a restaurant you&apos;ve always wanted to try but never got around to? Give us a call, then join us on the <span className="text-ink font-medium">fourth Thursday of each month</span>. We usually leave the church around 10:00 AM and return the same day by mid-afternoon. There&apos;s always room for one more!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-cream-2 rounded-2xl p-7 md:p-10 border border-burgundy/10 fade-up">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ministries/womens-ministry.jpg" alt="Women's Ministry gathering" className="w-full max-w-lg mx-auto h-auto rounded-xl mb-8" />
            <h3 className="font-display text-2xl mb-4">Women&apos;s Ministry</h3>
            <p className="text-warm-gray leading-relaxed mb-3">
              Hardeetown Baptist Church Women&apos;s Ministry is a multi-faceted group, serving in many areas of the church&apos;s ministries. Our goal is to demonstrate Christ&apos;s love and to reach new people for Christ, in accordance with Acts 1:8.
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">Here are the basics of what HBC Women&apos;s Ministry involves:</p>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-7">
              {[
                { t: "Missions", d: "Supporting SBC missionaries in prayer — praying daily for missionaries representing our denomination both internationally and in North America — and financially through the Southern Baptist Lottie Moon Christmas Offering and Annie Armstrong Easter Offering." },
                { t: "Local & International Ministries", d: "Operation Christmas Child (Samaritan's Purse) and the Harmony Pregnancy Center." },
                { t: "Bible Study & Discipleship", d: "Strengthening our relationship with Christ through Bible study, and developing mentoring relationships." },
                { t: "Caring Ministry", d: "Keeping in contact with our nursing-home residents, shut-ins, the sick, and temporary residents through cards, visits, and sharing the newsletter." },
                { t: "Fellowship", d: "Providing time for our group to encourage one another and grow together." },
              ].map((f) => (
                <div key={f.t}>
                  <div className="text-burgundy text-xs uppercase tracking-widest font-semibold mb-1.5">{f.t}</div>
                  <p className="text-warm-gray leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* K'Nex Groups — coming soon */}
      <section id="knex" className="scroll-mt-24 py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-6 font-semibold">New · Coming soon</div>
          <div className="mx-auto mb-8 inline-flex rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-burgundy/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/knex-groups.png" alt="K'Nex Groups — Connect. Grow. Serve. Reach." className="w-full max-w-xs md:max-w-sm" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-4 leading-tight">K&apos;Nex Groups</h2>
          <p className="text-warm-gray text-lg leading-relaxed">
            A new way to connect, grow, and serve together at Hardeetown is on the way.{" "}
            <span className="text-ink font-medium">More information coming soon.</span>
          </p>
        </div>
      </section>

      <FadeInit />
    </>
  );
}
