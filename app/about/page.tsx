import type { Metadata } from "next";
import FadeInit from "../fade-init";
import { staff } from "@/lib/staff";

export const metadata: Metadata = {
  title: "About · Hardeetown Baptist Church",
  description:
    "What we believe and how to join Hardeetown Baptist Church in Chiefland, Florida — a theologically conservative Southern Baptist church.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-cream py-24 md:py-32 px-6 text-center">
        <div className="uppercase tracking-[0.3em] text-[11px] text-gold mb-4 font-semibold">About our church</div>
        <h1 className="font-display text-4xl md:text-6xl leading-tight">Welcome to Hardeetown</h1>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto fade-up">
          <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-4 font-semibold">What we believe</div>
          <h2 className="font-display text-3xl md:text-4xl mb-8 leading-tight">Rooted in Scripture, centered on Christ.</h2>
          <div className="space-y-5 text-warm-gray text-lg leading-relaxed">
            <p>
              We are a theologically conservative Southern Baptist church. Our beliefs are summarized in the{" "}
              <a href="https://bfm.sbc.net/bfm2000/" target="_blank" rel="noopener" className="text-burgundy font-medium underline-offset-2 hover:underline">
                2000 Baptist Faith and Message
              </a>
              . In addition, we believe in the plenary, verbal inspiration of Scripture and that the Bible constitutes the whole of the written revelation of God to the world. The written Word is inerrant and points to the Living Word, Jesus — the incarnation of God. Jesus, the Son of God, has revealed God in His fullest. In order to have a relationship with God the Father, one must come through Jesus the Son, as led by the Holy Spirit.
            </p>
            <p>
              We also believe that Jesus died on the cross to pay for our sins and is now physically resurrected, seated on His throne at the right hand of God the Father. He will gather His church in the rapture prior to the Tribulation and then physically return with the church at the end of the Great Tribulation to execute judgment on the nations and establish His millennial reign. Following the final judgment, God will create a new heaven and a new earth, untainted by sin, where the saints of all ages will live together with God in His holy city, the New Jerusalem.
            </p>
          </div>
        </div>
      </section>

      <section id="leadership" className="scroll-mt-24 py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-up">
            <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-4 font-semibold">Our leadership</div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Meet Our Staff</h2>
          </div>
          <div className="space-y-16 md:space-y-24">
            {staff.map((p, i) => (
              <div key={p.name} className="grid md:grid-cols-5 gap-8 md:gap-12 items-center fade-up">
                <div className={`md:col-span-2 ${i % 2 ? "md:order-2" : ""}`}>
                  <div className="relative aspect-[4/5] max-w-sm mx-auto overflow-hidden rounded-2xl ring-1 ring-burgundy/10 shadow-xl shadow-black/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div className={`md:col-span-3 ${i % 2 ? "md:order-1" : ""}`}>
                  <h3 className="font-display text-3xl md:text-4xl mb-1">{p.name}</h3>
                  <div className="text-burgundy text-xs uppercase tracking-[0.2em] font-semibold mb-5">{p.role}</div>
                  {p.bio.map((para, j) => (
                    <p key={j} className="text-warm-gray leading-relaxed mb-4">{para}</p>
                  ))}
                  {p.note && <p className="text-burgundy font-display text-lg mt-2">{p.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-2 py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto fade-up">
          <div className="uppercase tracking-[0.25em] text-[11px] text-burgundy mb-4 font-semibold">How to join our church</div>
          <h2 className="font-display text-3xl md:text-4xl mb-8 leading-tight">Becoming part of the family.</h2>
          <div className="space-y-5 text-warm-gray text-lg leading-relaxed">
            <p>
              To join our church, you must first have a relationship with Jesus as your Lord and Savior. If you don&apos;t yet have a personal relationship with Jesus, allow us to introduce Him to you. As the Son of God, Jesus died on the cross and was resurrected so that, through Him, each of us can enjoy the gift of eternal life by faith in Christ. If you have already accepted God&apos;s gift of eternal life, we&apos;d encourage you to commit fully to serving God in the context of a local church — and we&apos;d love for that to be right here at Hardeetown. Please feel free to talk with us at any time about that opportunity.
            </p>
            <p>
              If you have accepted Jesus as your Lord and Savior, please speak with our pastor or one of our deacons about your decision. Following that discussion, you can present yourself to the church during the final hymn at the close of any worship service — simply step up to where the pastor is standing and briefly explain what you wish to do. You would then be invited for membership based on faith in Christ and baptism by immersion. (Let us know if you&apos;ve already been baptized at another Baptist church.)
            </p>
            <p className="text-ink font-medium">
              Most importantly: if you have accepted Jesus as your Lord and Savior, you are now a permanent member of God&apos;s eternal kingdom.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="/#visit" className="bg-burgundy text-cream px-7 py-3.5 rounded-full font-semibold hover:bg-ink transition text-center">Plan a Visit</a>
            <a href="/#contact" className="border-2 border-burgundy text-burgundy px-7 py-3.5 rounded-full font-semibold hover:bg-burgundy hover:text-cream transition text-center">Talk With Us</a>
          </div>
        </div>
      </section>

      <FadeInit />
    </>
  );
}
