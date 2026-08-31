import type { Metadata } from "next";

import PackageCTA from "@/components/sections/PackageCTA";
import PackageFeature from "@/components/sections/PackageFeature";
import PackageHero from "@/components/sections/PackageHero";
import PricingGrid from "@/components/sections/PricingGrid";
import { siteConfig } from "@/config/site";

const title = "Paket Internet Jombang";
const description =
  "Pilih paket internet Garuda Media Telematika 2.0 Jombang mulai 15 Mbps hingga 500 Mbps dengan koneksi stabil untuk rumah dan bisnis di Kabupaten Jombang.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/paket",
  },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: new URL("/paket", siteConfig.url).toString(),
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

export default function PaketPage() {
  return (
    <main id="main-content">
      <PackageHero />
      <PricingGrid />
      <PackageFeature />
      <PackageCTA />
    </main>
  );
}
