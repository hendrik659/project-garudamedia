const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  "https://garudamedia20jbg.net"
).replace(/\/+$/, "");

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
    "Internet Rumah Jombang",
    "Garuda Media Telematika 20 Jombang",
  ],
  openGraphImage: {
    url: `${siteUrl}/images/hero-gmt20.jpg`,
    width: 1200,
    height: 630,
    alt: "Garuda Media Telematika 20 Jombang",
  },
} as const;
