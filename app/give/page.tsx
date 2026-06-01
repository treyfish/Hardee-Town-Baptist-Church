import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import FadeInit from "../fade-init";

export const metadata: Metadata = {
  title: "Give · Hardeetown Baptist Church",
  description:
    "Tithing is an act of worship. Give to the ministry of Hardeetown Baptist Church online, in person, or by mail.",
};

export default function GivePage() {
  return (
    <>
      <section className="bg-ink text-cream py-20 md:py-28 px-6 text-center">
        <div className="uppercase tracking-[0.3em] text-[11px] text-gold mb-4 font-semibold">Generosity</div>
        <h1 className="font-display text-4xl md:text-6xl leading-tight">Give to the Lord&apos;s work</h1>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="fade-up text-warm-gray text-lg leading-relaxed space-y-4">
            <p>
              Tithing is a test of our faith. Do we trust God to bless our increase by returning to Him the 10% that He requires of us? If we are God&apos;s children, all that we have is already His.
            </p>
            <p className="font-display text-burgundy text-2xl">Tithing is an act of worship!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-12 fade-up">
            <div className="rounded-2xl border border-burgundy/15 bg-cream-2 p-7 text-center flex flex-col">
              <div className="text-burgundy text-[10px] uppercase tracking-[0.25em] font-semibold mb-3">Give Online</div>
              {siteConfig.givingUrl ? (
                <a href={siteConfig.givingUrl} target="_blank" rel="noopener" className="mt-auto inline-block bg-burgundy text-cream px-6 py-3 rounded-full font-semibold hover:bg-ink transition">Give Now</a>
              ) : (
                <p className="text-warm-gray">Online giving is coming soon.</p>
              )}
            </div>
            <div className="rounded-2xl border border-burgundy/15 bg-cream-2 p-7 text-center">
              <div className="text-burgundy text-[10px] uppercase tracking-[0.25em] font-semibold mb-3">Give in Person</div>
              <p className="text-warm-gray leading-relaxed">
                Join us for worship on Sundays at <span className="font-semibold text-ink">10:45 AM</span> and place your gift in the offering.
              </p>
            </div>
            <div className="rounded-2xl border border-burgundy/15 bg-cream-2 p-7 text-center">
              <div className="text-burgundy text-[10px] uppercase tracking-[0.25em] font-semibold mb-3">Give by Mail</div>
              <p className="text-warm-gray leading-relaxed">
                Hardeetown Baptist Church
                <br />
                1716 NW 14th Street
                <br />
                Chiefland, FL 32626
              </p>
            </div>
          </div>

          <p className="text-warm-gray text-sm leading-relaxed mt-10 fade-up">
            All donations and tithes are credited to the general operating budget of the church. If you&apos;d like to give to a specific ministry, please contact the church office so your wishes can be shared with our stewardship team. We encourage undesignated contributions so the church can support all of our ministries equally. (In situations of financial emergency, the church reserves the right to redistribute designated offerings as necessary.)
          </p>
        </div>
      </section>

      <FadeInit />
    </>
  );
}
