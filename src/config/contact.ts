export const contact = {
  whatsapp: "6282142804006",
  whatsappMessage:
    "Halo Garuda Media Telematika 20 Jombang, saya ingin mendapatkan informasi layanan.",
  phone: "082142804006",
  email: "garuda.net2021@gmail.com",
  address: "Jombang, Jawa Timur",
  serviceHours: "Senin–Minggu, 09.00–17.00 WIB",
  instagram: "https://www.instagram.com/garudamediatelematika20",
  tiktok: "https://www.tiktok.com/@garudanet.jombang",
} as const;

export function getWhatsAppUrl(
  message: string = contact.whatsappMessage,
): string {
  const phoneNumber = contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
