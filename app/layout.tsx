import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
