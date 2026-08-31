import { MessageCircle } from "lucide-react";

import { getWhatsAppUrl } from "@/config/contact";

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat dengan tim Garuda Media Telematika 2.0 Jombang melalui WhatsApp"
      className="group fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:scale-105 hover:bg-[#20bd5a] sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={27} strokeWidth={2.4} aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[var(--gmt-dark)] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
        Chat WhatsApp
      </span>
    </a>
  );
}
