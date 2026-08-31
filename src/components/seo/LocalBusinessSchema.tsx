import { contact } from "@/config/contact";
import { siteConfig } from "@/config/site";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Garuda Media Telematika 2.0 Jombang",
  description:
    "Provider internet dan layanan pemasangan CCTV untuk rumah dan bisnis di Kabupaten Jombang.",
  url: siteConfig.url,
  image: new URL(siteConfig.openGraphImage.url, siteConfig.url).toString(),
  telephone: contact.phone,
  email: contact.email,
  address: contact.address,
  areaServed: "Kabupaten Jombang",
  serviceType: ["Internet Service Provider", "Pemasangan CCTV"],
  sameAs: [contact.instagram, contact.tiktok],
};

export default function LocalBusinessSchema() {
  return (
    <script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
