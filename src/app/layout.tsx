import type { Metadata, Viewport } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { siteConfig } from "@/config/site";

import "./globals.css";

const defaultTitle =
  "Garuda Media Telematika 20 Jombang | Internet Cepat & Stabil";
const defaultDescription = siteConfig.description;
const socialTitle = "Garuda Media Telematika 20 Jombang";
const socialDescription =
  "Internet cepat dan stabil untuk rumah dan bisnis di Kabupaten Jombang.";
const keywords = [...siteConfig.keywords];

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultDescription,
  applicationName: siteConfig.name,
  keywords,
  authors: [{ name: siteConfig.company }],
  creator: siteConfig.company,
  publisher: siteConfig.company,
  category: "technology",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0080C8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <LocalBusinessSchema />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-[var(--gmt-dark)] px-4 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0"
        >
          Lewati ke konten utama
        </a>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
