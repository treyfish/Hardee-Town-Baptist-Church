"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/ministries", label: "Ministries" },
  { href: "/#events", label: "Events" },
  { href: "/#sermons", label: "Sermons" },
  { href: "/#give", label: "Give" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-burgundy/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Hardeetown Baptist Church logo" className="h-11 w-auto" />
          <div className="leading-tight">
            <div className="font-display font-semibold text-[17px]">Hardeetown</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-warm-gray">Baptist Church</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-2">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="ul-grow hover:text-burgundy transition">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/#visit"
            className="hidden md:inline-flex bg-burgundy text-cream px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-ink transition shadow-sm"
          >
            Plan a Visit
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-lg text-ink hover:bg-burgundy/10 transition"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-burgundy/10 bg-cream/95 backdrop-blur">
          <div className="px-6 py-3 flex flex-col">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-ink-2 font-medium border-b border-burgundy/5 hover:text-burgundy transition"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#visit"
              onClick={() => setOpen(false)}
              className="mt-4 mb-2 bg-burgundy text-cream px-5 py-3 rounded-full text-sm font-semibold text-center hover:bg-ink transition"
            >
              Plan a Visit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
