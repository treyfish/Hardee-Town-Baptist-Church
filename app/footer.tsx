import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Hardeetown Baptist Church logo" className="h-12 w-auto" />
            <div>
              <div className="font-display font-semibold text-lg">Hardeetown</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-cream/60">Baptist Church</div>
            </div>
          </div>
          <p className="text-cream/70 max-w-md leading-relaxed mb-6">
            A family of believers in Chiefland, Florida, growing in Christ and reaching our community with the hope of the Gospel.
          </p>
          <div className="flex gap-3">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-burgundy hover:border-burgundy transition" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.325V1.325C24 .593 23.408 0 22.675 0z" />
              </svg>
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-burgundy hover:border-burgundy transition" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-burgundy hover:border-burgundy transition" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0 1.802c-3.15 0-3.523.012-4.767.069-1.024.047-1.58.218-1.95.362-.49.19-.84.418-1.207.785a3.25 3.25 0 0 0-.785 1.207c-.144.37-.315.926-.362 1.95-.057 1.244-.069 1.617-.069 4.767s.012 3.523.069 4.767c.047 1.024.218 1.58.362 1.95.19.49.418.84.785 1.207.367.367.717.595 1.207.785.37.144.926.315 1.95.362 1.244.057 1.617.069 4.767.069s3.523-.012 4.767-.069c1.024-.047 1.58-.218 1.95-.362.49-.19.84-.418 1.207-.785.367-.367.595-.717.785-1.207.144-.37.315-.926.362-1.95.057-1.244.069-1.617.069-4.767s-.012-3.523-.069-4.767c-.047-1.024-.218-1.58-.362-1.95a3.25 3.25 0 0 0-.785-1.207 3.25 3.25 0 0 0-1.207-.785c-.37-.144-.926-.315-1.95-.362-1.244-.057-1.617-.069-4.767-.069zm0 3.063a5.972 5.972 0 1 0 0 11.944 5.972 5.972 0 0 0 0-11.944zm0 9.852a3.88 3.88 0 1 1 0-7.76 3.88 3.88 0 0 1 0 7.76zm7.605-10.087a1.396 1.396 0 1 1-2.792 0 1.396 1.396 0 0 1 2.792 0z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div className="text-gold text-[10px] uppercase tracking-[0.25em] font-semibold mb-4">Visit</div>
          <div className="text-cream/80 leading-relaxed text-sm">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}
            <br />
            <a href={siteConfig.phoneHref} className="hover:text-cream transition">{siteConfig.phone}</a>
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
            <li><Link href="/about" className="hover:text-cream transition">About</Link></li>
            <li><Link href="/ministries" className="hover:text-cream transition">Ministries</Link></li>
            <li><Link href="/events" className="hover:text-cream transition">Events</Link></li>
            <li><Link href="/#sermons" className="hover:text-cream transition">Sermons</Link></li>
            <li><Link href="/give" className="hover:text-cream transition">Give</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 pt-6 text-center text-cream/50 text-xs">
        © 2026 Hardeetown Baptist Church · Built with care in Chiefland, FL
      </div>
    </footer>
  );
}
