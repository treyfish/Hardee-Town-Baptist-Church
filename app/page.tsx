import FadeInit from "./fade-init";

export default function Home() {
  return (
    <>
      <div className="bg-ink text-cream text-center py-2 text-[11px] tracking-[0.2em] font-medium">
        DEMO MOCKUP · PLACEHOLDER PHOTOS &amp; SAMPLE COPY · v1
      </div>

      <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-burgundy/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="w-11 h-11 bg-burgundy text-cream rounded-full flex items-center justify-center font-display font-bold text-lg shadow-sm">
              H
            </div>
            <div className="leading-tight">
              <div className="font-display font-semibold text-[17px]">Hardeetown</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-warm-gray">Baptist Church</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-2">
            <a href="#about" className="ul-grow hover:text-burgundy transition">About</a>
            <a href="#ministries" className="ul-grow hover:text-burgundy transition">Ministries</a>
            <a href="#events" className="ul-grow hover:text-burgundy transition">Events</a>
            <a href="#sermons" className="ul-grow hover:text-burgundy transition">Sermons</a>
            <a href="#give" className="ul-grow hover:text-burgundy transition">Give</a>
            <a href="#contact" className="ul-grow hover:text-burgundy transition">Contact</a>
          </div>
          <a href="#visit" className="bg-burgundy text-cream px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-ink transition shadow-sm">
            Plan a Visit
          </a>
        </div>
      </nav>

      <section id="top" className="relative h-[88vh] min-h-[620px] flex items-center justify-center text-cream overflow-hidden">
        <span className="placeholder-badge">Placeholder photo</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=1920&q=80&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
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
            <div className="text-cream/60 text-xs mt-1">Bible Study for all ages · 9:30 AM</div>
          </div>
          <div className="border-y md:border-y-0 md:border-x border-cream/15 py-5 md:py-0">
            <div className="text-gold text-[10px] uppercase tracking-[0.25em] mb-2 font-semibold">Sunday Evening</div>
            <div className="font-display text-xl">Worship · 6:00 PM</div>
            <div className="text-cream/60 text-xs mt-1">Every Sunday night</div>
          </div>
          <div>
            <div className="text-gold text-[10px] uppercase tracking-[0.25em] mb-2 font-semibold">Wednesday Night</div>
            <div className="font-display text-xl">Prayer · 6:00 PM</div>
            <div className="text-cream/60 text-xs mt-1">Youth · Children · Adult Prayer</div>
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
            <a href="#visit" className="inline-flex items-center gap-2 text-burgundy font-semibold border-b-2 border-burgundy pb-1 hover:gap-3 transition-all">
              What to expect on Sunday <span>→</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 fade-up">
            <div className="relative">
              <span className="placeholder-badge">Placeholder</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format&fit=crop" alt="" className="rounded-lg aspect-[3/4] object-cover w-full" />
            </div>
            <div className="relative mt-10">
              <span className="placeholder-badge">Placeholder</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80&auto=format&fit=crop" alt="" className="rounded-lg aspect-[3/4] object-cover w-full" />
            </div>
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
            <a href="https://www.facebook.com/Hardeetown/" target="_blank" rel="noopener" className="bg-burgundy text-cream px-7 py-3.5 rounded-full font-semibold hover:bg-burgundy-dark transition inline-flex items-center gap-2 justify-center">Watch on Facebook</a>
            <a href="https://www.youtube.com/channel/UClz59vJ7Pxt-RQuzWhtM99Q" target="_blank" rel="noopener" className="bg-ink text-cream px-7 py-3.5 rounded-full font-semibold hover:bg-ink-2 transition inline-flex items-center gap-2 justify-center">YouTube Archive</a>
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
            <a href="#calendar" className="text-burgundy font-semibold border-b-2 border-burgundy pb-1 hover:opacity-70 transition self-start md:self-auto">Full Calendar →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { mon: "Jun", day: "8", when: "Mon–Fri · 6:00 PM", title: "Vacation Bible School", desc: "A week of music, games, and Gospel for kids K–6. Registration opens May 15.", img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80&auto=format&fit=crop" },
              { mon: "Jun", day: "15", when: "Sunday · 10:45 AM", title: "Father's Day Service", desc: "Honoring the dads, grandads, and father figures in our church family.", img: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80&auto=format&fit=crop" },
              { mon: "Jul", day: "4", when: "Friday · 6:00 PM", title: "Church Family Cookout", desc: "Burgers, fellowship, and fireworks. Bring a side dish and your favorite folding chair.", img: "https://images.unsplash.com/photo-1543269664-647b9ba6a410?w=800&q=80&auto=format&fit=crop" },
            ].map((e) => (
              <article key={e.title} className="bg-cream-2 rounded-xl overflow-hidden lift">
                <div className="relative h-44 overflow-hidden">
                  <span className="placeholder-badge">Placeholder</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={e.img} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-burgundy text-cream rounded-md px-3 py-2 text-center min-w-[58px]">
                      <div className="text-[10px] uppercase tracking-widest font-semibold">{e.mon}</div>
                      <div className="font-display text-xl leading-none">{e.day}</div>
                    </div>
                    <div className="text-warm-gray text-sm">{e.when}</div>
                  </div>
                  <h3 className="font-display text-xl mb-2">{e.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{e.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream py-24 md:py-32 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(250,246,240,0.4) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-14 fade-up">
            <div className="uppercase tracking-[0.25em] text-[11px] text-gold mb-4 font-semibold">Who we are</div>
            <h2 className="font-display text-4xl md:text-5xl mb-5 leading-tight">Faces of Hardeetown</h2>
            <p className="text-cream/70 max-w-2xl mx-auto text-lg">
              A church is its people. These are some of the folks you&apos;ll meet when you walk through our doors.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 fade-up">
            {[
              { name: "Sarah K.", role: "Children's Ministry", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop" },
              { name: "Mark T.", role: "UPWARD Sports Coach", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop" },
              { name: "Jenna R.", role: "Worship Team", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop" },
              { name: "David P.", role: "Adult Bible Study", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80&auto=format&fit=crop" },
              { name: "Linda M.", role: "Hospitality", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop" },
              { name: "James W.", role: "Deacon", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80&auto=format&fit=crop" },
              { name: "Megan L.", role: "Youth Leader", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop" },
              { name: "Ruth A.", role: "Awana Volunteer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop" },
            ].map((p) => (
              <div key={p.name} className="text-center">
                <div className="relative aspect-square rounded-full overflow-hidden mx-auto mb-4 border-4 border-cream/10">
                  <span className="placeholder-badge">Placeholder</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="font-display text-lg">{p.name}</div>
                <div className="text-gold text-xs uppercase tracking-widest mt-1">{p.role}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-cream/60 italic max-w-xl mx-auto">
              &ldquo;Come and see for yourself. There&apos;s a seat saved for you on Sunday.&rdquo;
            </p>
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
              { title: "Children", desc: "Safe, engaging environments where kids learn who Jesus is — and that they're loved.", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80&auto=format&fit=crop" },
              { title: "Youth", desc: "Middle and high schoolers digging into real questions and building lifelong friendships.", img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80&auto=format&fit=crop" },
              { title: "Adults", desc: "Small groups, Bible studies, and friendships that walk with you through every season of life.", img: "https://images.unsplash.com/photo-1543269664-647b9ba6a410?w=600&q=80&auto=format&fit=crop" },
              { title: "UPWARD Sports", desc: "Basketball and cheer leagues for kids — building character on and off the court.", img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80&auto=format&fit=crop" },
            ].map((m) => (
              <a key={m.title} href="#" className="group block bg-cream-2 rounded-xl overflow-hidden lift">
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
            <a href="https://www.youtube.com/channel/UClz59vJ7Pxt-RQuzWhtM99Q" target="_blank" rel="noopener" className="text-burgundy font-semibold border-b-2 border-burgundy pb-1 hover:opacity-70 transition self-start md:self-auto">Full Sermon Archive →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-6 fade-up">
            {[
              { date: "May 24, 2026 · Pastor [Name]", title: "The Greatest Blessing", desc: "A look at Ephesians 1 and what it means to be chosen, redeemed, and sealed.", img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80&auto=format&fit=crop" },
              { date: "May 17, 2026 · Pastor [Name]", title: "Don't Miss the Greater Sign", desc: "Jesus pointed past the miracles to something bigger. Are we looking at it?", img: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80&auto=format&fit=crop" },
              { date: "May 10, 2026 · Pastor [Name]", title: "True Wisdom", desc: "A Baccalaureate message for our graduates — and anyone navigating a new chapter.", img: "https://images.unsplash.com/photo-1571907483086-3e4a4d3d0e62?w=800&q=80&auto=format&fit=crop" },
            ].map((s) => (
              <article key={s.title} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4 bg-ink">
                  <span className="placeholder-badge">Placeholder</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="" />
                  <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/10 transition flex items-center justify-center">
                    <div className="w-14 h-14 bg-cream/95 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[14px] border-l-burgundy border-y-[10px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="text-warm-gray text-xs uppercase tracking-widest mb-2">{s.date}</div>
                <h3 className="font-display text-xl mb-2 group-hover:text-burgundy transition">{s.title}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="give" className="relative py-24 md:py-32 px-6 text-cream overflow-hidden">
        <span className="placeholder-badge">Placeholder background</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?w=1920&q=80&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-burgundy/80"></div>
        <div className="relative max-w-3xl mx-auto text-center fade-up">
          <div className="uppercase tracking-[0.25em] text-[11px] text-gold mb-4 font-semibold">Generosity</div>
          <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">Give to the Lord&apos;s work.</h2>
          <p className="text-cream/85 text-lg leading-relaxed mb-9 max-w-2xl mx-auto">
            Every gift goes directly toward the ministry of Hardeetown — supporting missions, ministries, and the day-to-day work of the church.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-cream text-burgundy px-7 py-3.5 rounded-full font-semibold hover:bg-gold hover:text-ink transition">Give Online</a>
            <a href="#" className="border-2 border-cream text-cream px-7 py-3.5 rounded-full font-semibold hover:bg-cream hover:text-burgundy transition">Other Ways to Give</a>
          </div>
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

      <footer className="bg-ink text-cream pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-burgundy text-cream rounded-full flex items-center justify-center font-display font-bold">H</div>
              <div>
                <div className="font-display font-semibold text-lg">Hardeetown</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-cream/60">Baptist Church</div>
              </div>
            </div>
            <p className="text-cream/70 max-w-md leading-relaxed mb-6">
              A family of believers in Chiefland, Florida, growing in Christ and reaching our community with the hope of the Gospel.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/Hardeetown/" target="_blank" rel="noopener" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-burgundy hover:border-burgundy transition" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.325V1.325C24 .593 23.408 0 22.675 0z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UClz59vJ7Pxt-RQuzWhtM99Q" target="_blank" rel="noopener" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-burgundy hover:border-burgundy transition" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div className="text-gold text-[10px] uppercase tracking-[0.25em] font-semibold mb-4">Visit</div>
            <div className="text-cream/80 leading-relaxed text-sm">
              1716 NW 14th Street
              <br />
              Chiefland, Florida 32626
              <br />
              <a href="tel:3524934523" className="hover:text-cream transition">(352) 493-4523</a>
            </div>
          </div>
          <div>
            <div className="text-gold text-[10px] uppercase tracking-[0.25em] font-semibold mb-4">Service Times</div>
            <div className="text-cream/80 leading-relaxed text-sm">
              Sun · 10:45 AM &amp; 6:00 PM
              <br />
              Wed · 6:00 PM
            </div>
            <div className="text-gold text-[10px] uppercase tracking-[0.25em] font-semibold mt-6 mb-4">Quick Links</div>
            <ul className="text-cream/80 text-sm space-y-2">
              <li><a href="#ministries" className="hover:text-cream transition">Ministries</a></li>
              <li><a href="#sermons" className="hover:text-cream transition">Sermons</a></li>
              <li><a href="#give" className="hover:text-cream transition">Give</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10 pt-6 text-center text-cream/50 text-xs">
          © 2026 Hardeetown Baptist Church · Built with care in Chiefland, FL
        </div>
      </footer>

      <FadeInit />
    </>
  );
}
