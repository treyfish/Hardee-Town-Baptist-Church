import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./globals.css";
import Nav from "./nav";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Hardeetown Baptist Church — Loving, Learning, Serving",
  description:
    "A family of believers in Chiefland, Florida. Join us Sundays at 10:45 AM and 6:00 PM, and Wednesdays at 6:00 PM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <div className="bg-ink text-cream text-center py-2 text-[11px] tracking-[0.2em] font-medium">
          PREVIEW · REAL PHOTOS &amp; PASTOR FEEDBACK APPLIED · v2
        </div>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
