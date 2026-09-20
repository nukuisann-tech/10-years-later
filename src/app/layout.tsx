import type { Metadata } from "next";
import {
  Noto_Serif_JP,
  Noto_Sans_JP,
  Cormorant_Garamond,
  Instrument_Serif,
} from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-serif-jp",
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans-jp",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-en-serif",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-en-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nameJa} ${site.nameEn} | ${site.tagline}`,
    template: `%s | ${site.nameJa}`,
  },
  description: site.description,
  openGraph: {
    title: site.nameJa,
    description: site.description,
    url: site.url,
    siteName: site.nameJa,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.nameJa,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      data-scroll-behavior="smooth"
      className={`${notoSerifJp.variable} ${notoSansJp.variable} ${cormorant.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <MotionConfig reducedMotion="user">
          <Header />
          <main className="pb-[68px] pt-[72px] md:pt-[88px] lg:pb-0">{children}</main>
          <Footer />
          <MobileCTA />
        </MotionConfig>
      </body>
    </html>
  );
}
