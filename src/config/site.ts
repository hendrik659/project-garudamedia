const siteUrl = "https://garudamedia.net";

export const siteConfig = {
  name: "Garuda Media Telematika 2.0 Jombang",
  company: "Garuda Media Telematika 2.0 Jombang",
  description:
    "Garuda Media Telematika 2.0 Jombang menyediakan layanan internet cepat dan stabil untuk rumah, bisnis, serta pemasangan CCTV dengan dukungan teknisi profesional di Kabupaten Jombang.",
  url: siteUrl,
  locale: "id_ID",
  keywords: [
    "Internet Jombang",
    "WiFi Jombang",
    "Provider Internet Jombang",
    "Pasang WiFi Jombang",
    "Pemasangan CCTV Jombang",
    "Internet Rumah Jombang",
    "Garuda Media Telematika 2.0 Jombang",
  ],
  openGraphImage: {
    url: `${siteUrl}/images/hero-gmt20.jpg`,
    width: 1024,
    height: 640,
    alt: "Layanan internet Garuda Media Telematika 2.0 Jombang",
  },
} as const;
