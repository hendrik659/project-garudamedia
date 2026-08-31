import type { Metadata } from "next";

import AboutCompany from "@/components/sections/AboutCompany";
import AboutCTA from "@/components/sections/AboutCTA";
import AboutGallery from "@/components/sections/AboutGallery";
import AboutHero from "@/components/sections/AboutHero";
import AboutValue from "@/components/sections/AboutValue";
import { siteConfig } from "@/config/site";

const title = "Tentang Kami";
const description =
  "Mengenal Garuda Media Telematika 2.0 Jombang sebagai penyedia layanan internet cepat, stabil, dan terpercaya di Kabupaten Jombang.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/tentang",
  },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: new URL("/tentang", siteConfig.url).toString(),
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [siteConfig.openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
    images: [siteConfig.openGraphImage.url],
  },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutHero />
      <AboutCompany />
      <AboutValue />
      <AboutGallery />
      <AboutCTA />
    </main>
  );
}
