import Link from "next/link";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-burgundy/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Hardeetown Baptist Church logo" className="h-11 w-auto" />
          <div className="leading-tight">
            <div className="font-display font-semibold text-[17px]">Hardeetown</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-warm-gray">Baptist Church</div>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-2">
          <Link href="/about" className="ul-grow hover:text-burgundy transition">About</Link>
          <Link href="/ministries" className="ul-grow hover:text-burgundy transition">Ministries</Link>
          <Link href="/#events" className="ul-grow hover:text-burgundy transition">Events</Link>
          <Link href="/#sermons" className="ul-grow hover:text-burgundy transition">Sermons</Link>
          <Link href="/#give" className="ul-grow hover:text-burgundy transition">Give</Link>
          <Link href="/#contact" className="ul-grow hover:text-burgundy transition">Contact</Link>
        </div>
        <Link href="/#visit" className="bg-burgundy text-cream px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-ink transition shadow-sm">
          Plan a Visit
        </Link>
      </div>
    </nav>
  );
}
