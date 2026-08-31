import type { Metadata } from "next";

import CTASection from "@/components/sections/CTASection";
import Coverage from "@/components/sections/Coverage";
import Hero from "@/components/sections/Hero";
import InstallationProcess from "@/components/sections/InstallationProcess";
import PackagePreview from "@/components/sections/PackagePreview";
import WhyChoose from "@/components/sections/WhyChooseUs";
import { siteConfig } from "@/config/site";

const title =
  "Garuda Media Telematika 20 Jombang | Internet Cepat & Stabil";
const description = siteConfig.description;
const socialTitle = "Garuda Media Telematika 20 Jombang";
const socialDescription =
  "Internet cepat dan stabil untuk rumah dan bisnis di Kabupaten Jombang.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [siteConfig.openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: [siteConfig.openGraphImage.url],
  },
};

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <PackagePreview />
      <WhyChoose />
      <InstallationProcess />
      <Coverage />
      <CTASection />
    </main>
  );
}
