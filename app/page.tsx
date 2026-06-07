import Link from "next/link";
import HeroCarousel from "./hero-carousel";
import FadeInit from "./fade-init";
import RecentSermons from "./recent-sermons";
import EventCard from "./event-card";
import { staff } from "@/lib/staff";
import { events } from "@/lib/events";

export default function Home() {
  return (
    <>
      <section id="top" className="relative h-[88vh] min-h-[620px] flex items-center justify-center text-cream overflow-hidden">
        <HeroCarousel
          images={["/hero/sanctuary.jpg", "/hero/cross.jpg", "/hero/fellowship-meal.jpg", "/hero/greeting.jpg"]}
        />
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="uppercase tracking-[0.32em] text-[11px] md:text-xs text-gold mb-6 font-semibold">Welcome Home</div>
          <h1 className="font-display text-[2.6rem] sm:text-6xl md:text-7xl font-medium leading-[1.05] mb-6">
            Loving. Learning.
            <br />
            Serving Together.
          </h1>
          <p className="text-base md:text-xl text-cream/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            A family of believers in Chiefland, Florida, growing in Christ and reaching our community with the hope of the Gospel.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="#visit" className="bg-cream text-burgundy px-7 py-3.5 rounded-full font-semibold hover:bg-gold hover:text-ink transition">Plan a Visit</a>
            <a href="#live" className="border-2 border-cream text-cream px-7 py-3.5 rounded-full font-semibold hover:bg-cream hover:text-burgundy transition">Watch Online</a>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 text-xs tracking-widest uppercase animate-pulse">scroll</div>
      </section>

      <section className="bg-ink text-cream py-7">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-gold text-[10px] uppercase tracking-[0.25em] mb-2 font-semibold">Sunday Morning</div>
            <div className="font-display text-xl">Worship · 10:45 AM</div>
            <div className="text-cream/60 text-xs mt-1">Morning service</div>
          </div>
          <div className="border-y md:border-y-0 md:border-x border-cream/15 py-5 md:py-0">
            <div className="text-gold text-[10px] uppercase tracking-[0.25em] mb-2 font-semibold">Sunday Evening</div>
            <div className="font-display text-xl">Worship · 6:00 PM</div>
            <div className="text-cream/60 text-xs mt-1">Evening service</div>
          </div>
          <div>
            <div className="text-gold text-[10px] uppercase tracking-[0.25em] mb-2 font-semibold">Wednesday Night</div>
            <div className="font-display text-xl">Youth · Children · Prayer</div>
            <div className="text-cream/60 text-xs mt-1">Wednesdays · 6:00 PM</div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-24 md:py-32 px-6 texture">
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="fade-up">
            <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-5 font-semibold">New here?</div>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-[1.1]">
              You&apos;re not just visiting
              <br />a building.
            </h2>
            <p className="text-warm-gray text-lg leading-relaxed mb-5">
              At Hardeetown, you&apos;re walking into a family. Whether it&apos;s your first Sunday or your hundredth, you&apos;ll find people who genuinely want to know you, pray with you, and walk through life with you.
            </p>
            <p className="text-warm-gray text-lg leading-relaxed mb-9">
              No dress code. No pressure. Just real people learning to follow Jesus together — and we&apos;d love for you to join us.
            </p>
            {/* TODO: We may build a dedicated "What to Expect on Sunday" section/page
                later (parking, greeters, dress, kids, service flow). For now this
                links to the About page. */}
            <a href="/about" className="inline-flex items-center gap-2 text-burgundy font-semibold border-b-2 border-burgundy pb-1 hover:gap-3 transition-all">
              What to expect on Sunday <span>→</span>
            </a>
          </div>
          <div className="relative fade-up">
            <span className="placeholder-badge">Placeholder</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=900&q=80&auto=format&fit=crop" alt="" className="rounded-2xl aspect-[4/5] object-cover w-full shadow-lg shadow-black/10" />
          </div>
        </div>
      </section>

      <section id="live" className="bg-cream-2 py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto text-center fade-up">
          <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-5 font-semibold">Can&apos;t make it Sunday?</div>
          <h2 className="font-display text-4xl md:text-5xl mb-5 leading-tight">Worship with us from anywhere.</h2>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto mb-10">
            Join us live every Sunday morning at 10:45 AM on Facebook or YouTube. Past services are archived so you can catch up anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.facebook.com/profile.php?id=61556940396902" target="_blank" rel="noopener" className="bg-burgundy text-cream px-7 py-3.5 rounded-full font-semibold hover:bg-burgundy-dark transition inline-flex items-center gap-2 justify-center">Watch on Facebook</a>
            <a href="https://www.youtube.com/channel/UCMtbl4zKNOx0UBMpxeVzvHw" target="_blank" rel="noopener" className="bg-ink text-cream px-7 py-3.5 rounded-full font-semibold hover:bg-ink-2 transition inline-flex items-center gap-2 justify-center">YouTube Archive</a>
          </div>
        </div>
      </section>

      <section id="events" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-5 fade-up">
            <div>
              <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-3 font-semibold">What&apos;s happening</div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">Upcoming at Hardeetown</h2>
            </div>
            <a href="/events" className="text-burgundy font-semibold border-b-2 border-burgundy pb-1 hover:opacity-70 transition self-start md:self-auto">All Events &amp; Calendar →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6 fade-up">
            {events.map((e) => (
              <EventCard key={e.title} event={e} />
            ))}
          </div>
        </div>
      </section>

      <section id="staff" className="bg-ink text-cream py-24 md:py-32 px-6 relative overflow-hidden scroll-mt-24">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(250,247,241,0.35) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <div className="uppercase tracking-[0.25em] text-[11px] text-gold mb-4 font-semibold">Who we are</div>
            <h2 className="font-display text-4xl md:text-5xl mb-5 leading-tight">Meet Our Staff</h2>
            <p className="text-cream/70 max-w-2xl mx-auto text-lg">
              A church is its people. Here are some of the folks who would love to welcome you on Sunday.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto fade-up">
            {staff.map((p) => (
              <div key={p.name} className="text-center">
                <div className="relative aspect-[4/5] max-w-[210px] mx-auto overflow-hidden rounded-2xl ring-1 ring-cream/15 shadow-lg shadow-black/30 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="font-display text-xl">{p.name}</div>
                <div className="text-gold text-xs uppercase tracking-[0.2em] mt-1">{p.role}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-up">
            <Link href="/about#leadership" className="inline-block border-2 border-cream/40 text-cream px-7 py-3 rounded-full font-semibold hover:bg-cream hover:text-ink transition">
              Meet our leadership →
            </Link>
          </div>
        </div>
      </section>

      <section id="ministries" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-4 font-semibold">Find your place</div>
            <h2 className="font-display text-4xl md:text-5xl mb-5 leading-tight">Ministries for Every Age</h2>
            <p className="text-warm-gray max-w-2xl mx-auto text-lg">
              From toddlers to seniors, there&apos;s a place to grow, serve, and belong at Hardeetown.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 fade-up">
            {[
              { title: "Children", href: "/ministries#children", desc: "Little Moments, Sunday School, and Wednesday-night AWANA — where kids learn who Jesus is, and that they're loved.", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80&auto=format&fit=crop" },
              { title: "Youth — The Harbor", href: "/ministries#youth", desc: "Anchored in faith, driven by purpose. A safe haven where students encounter God's love and build unshakable faith.", img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80&auto=format&fit=crop" },
              { title: "Adults", href: "/ministries#adults", desc: "Men's, Women's, and Senior Adult ministries — breakfast, fellowship, missions, and serving our church and community together.", img: "https://images.unsplash.com/photo-1543269664-647b9ba6a410?w=600&q=80&auto=format&fit=crop" },
              { title: "UPWARD Sports", href: "/ministries#upward", desc: "Basketball and cheer leagues for kids — building character on and off the court.", img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80&auto=format&fit=crop" },
            ].map((m) => (
              <a key={m.title} href={m.href} className="group block bg-cream-2 rounded-xl overflow-hidden lift">
                <div className="relative h-48 overflow-hidden">
                  <span className="placeholder-badge">Placeholder</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl mb-2">{m.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed mb-4">{m.desc}</p>
                  <span className="text-burgundy text-sm font-semibold">Learn more →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="sermons" className="bg-cream-2 py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-5 fade-up">
            <div>
              <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-3 font-semibold">Recent messages</div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">Sundays at Hardeetown</h2>
            </div>
            <a href="https://www.youtube.com/channel/UCMtbl4zKNOx0UBMpxeVzvHw" target="_blank" rel="noopener" className="text-burgundy font-semibold border-b-2 border-burgundy pb-1 hover:opacity-70 transition self-start md:self-auto">Full Sermon Archive →</a>
          </div>
          <RecentSermons />
        </div>
      </section>

      <section id="give" className="relative py-24 md:py-32 px-6 text-cream overflow-hidden">
        <span className="placeholder-badge">Placeholder background</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?w=1920&q=80&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-burgundy/85"></div>
        <div className="relative max-w-3xl mx-auto text-center fade-up">
          <div className="uppercase tracking-[0.25em] text-[11px] text-gold mb-4 font-semibold">Generosity</div>
          <h2 className="font-display text-4xl md:text-5xl mb-5 leading-tight">Give to the Lord&apos;s work.</h2>
          <p className="text-cream/85 text-lg leading-relaxed mb-8">
            Tithing is an act of worship. Your generosity supports the ministry of Hardeetown — here at home and around the world.
          </p>
          <Link href="/give" className="bg-cream text-burgundy px-7 py-3.5 rounded-full font-semibold hover:bg-gold hover:text-ink transition inline-block">
            Ways to Give
          </Link>
        </div>
      </section>

      <section id="visit" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <div className="fade-up">
            <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-4 font-semibold">Come visit</div>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">We&apos;d love to meet you.</h2>
            <p className="text-warm-gray text-lg leading-relaxed mb-8">
              Pull into the lot, walk in the front doors, and one of our greeters will help you find your way. There&apos;s coffee in the lobby and a seat saved for you in the sanctuary.
            </p>
            <div className="space-y-5">
              <div>
                <div className="text-burgundy text-xs uppercase tracking-widest font-semibold mb-1">Address</div>
                <div className="text-ink">
                  1716 NW 14th Street
                  <br />
                  Chiefland, Florida 32626
                </div>
              </div>
              <div>
                <div className="text-burgundy text-xs uppercase tracking-widest font-semibold mb-1">Phone</div>
                <a href="tel:3524934523" className="text-ink hover:text-burgundy transition">(352) 493-4523</a>
              </div>
              <div>
                <div className="text-burgundy text-xs uppercase tracking-widest font-semibold mb-1">Service Times</div>
                <div className="text-ink leading-relaxed">
                  Sundays · 10:45 AM &amp; 6:00 PM
                  <br />
                  Wednesdays · 6:00 PM
                </div>
              </div>
            </div>
          </div>
          <div className="fade-up" id="contact">
            <form className="bg-cream-2 rounded-xl p-8 space-y-5 border border-burgundy/10">
              <div className="font-display text-2xl mb-2">Send us a note</div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-warm-gray mb-2 font-semibold">Your Name</label>
                <input type="text" className="w-full px-4 py-3 bg-cream border border-burgundy/20 rounded-lg focus:outline-none focus:border-burgundy transition" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-warm-gray mb-2 font-semibold">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-cream border border-burgundy/20 rounded-lg focus:outline-none focus:border-burgundy transition" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-warm-gray mb-2 font-semibold">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-cream border border-burgundy/20 rounded-lg focus:outline-none focus:border-burgundy transition resize-none"></textarea>
              </div>
              <button type="button" className="w-full bg-burgundy text-cream py-3.5 rounded-full font-semibold hover:bg-ink transition">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <FadeInit />
    </>
  );
}
