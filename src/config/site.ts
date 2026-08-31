const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (!configuredSiteUrl) {
  throw new Error("NEXT_PUBLIC_SITE_URL wajib diatur untuk metadata production.");
}

const siteUrl = configuredSiteUrl.replace(/\/+$/, "");

export const siteConfig = {
  name: "Garuda Media Telematika 20 Jombang",
  company: "Garuda Media Telematika 20 Jombang",
  description:
    "Garuda Media Telematika 20 Jombang menyediakan layanan internet cepat dan stabil untuk rumah, bisnis, serta pemasangan CCTV dengan dukungan teknisi profesional di Kabupaten Jombang.",
  url: siteUrl,
  locale: "id_ID",
  keywords: [
    "Internet Jombang",
    "WiFi Jombang",
    "Provider Internet Jombang",
    "Pasang WiFi Jombang",
    "Pemasangan CCTV Jombang",
    "Garuda Media Telematika 20 Jombang",
  ],
  openGraphImage: {
    url: `${siteUrl}/images/hero-gmt20.jpg`,
    width: 1024,
    height: 640,
    alt: "Layanan internet Garuda Media Telematika 20 Jombang",
  },
} as const;
