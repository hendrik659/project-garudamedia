import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

import { contact, getWhatsAppUrl } from "@/config/contact";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import Container from "./Container";

const services = [
  "Internet Rumah",
  "Internet Bisnis",
  "Pemasangan CCTV",
  "Maintenance Jaringan",
];

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl();
  const phoneHref = `tel:${contact.phone.replace(/[^+\d]/g, "")}`;

  return (
    <footer className="bg-[#071a2d] text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.2fr] lg:gap-12">
          <div>
            <Link
              href="/"
              aria-label="Garuda Media Telematika 2.0 Jombang - beranda"
              className="inline-block rounded-md bg-white px-3 py-2"
            >
              <Image
                src="/images/logo-gmt.png"
                alt="Garuda Media Telematika 2.0 Jombang"
                width={1024}
                height={1024}
                className="h-20 w-20 object-contain"
                sizes="80px"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink
                href={contact.instagram}
                label="Instagram Garuda Media Telematika 2.0 Jombang"
              >
                <FaInstagram aria-hidden="true" />
              </SocialLink>
              <SocialLink
                href={contact.tiktok}
                label="TikTok Garuda Media Telematika 2.0 Jombang"
              >
                <FaTiktok aria-hidden="true" />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Navigasi">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Layanan">
            {services.map((service) => (
              <span key={service} className="text-sm text-white/70">
                {service}
              </span>
            ))}
          </FooterColumn>

          <div>
            <h2 className="text-base font-bold">Hubungi Kami</h2>
            <address className="mt-5 flex flex-col gap-4 not-italic">
              <ContactLink href={whatsappUrl} icon={<MessageCircle size={18} />} external>
                WhatsApp Garuda Media Telematika 2.0 Jombang
              </ContactLink>
              <ContactLink href={phoneHref} icon={<Phone size={18} />}>
                {contact.phone}
              </ContactLink>
              <ContactLink href={`mailto:${contact.email}`} icon={<Mail size={18} />}>
                {contact.email}
              </ContactLink>
              <div className="flex items-start gap-3 text-sm leading-6 text-white/70">
                <MapPin className="mt-0.5 shrink-0" size={18} aria-hidden="true" />
                <span>{contact.address}</span>
              </div>
              <div className="flex items-start gap-3 text-sm leading-6 text-white/70">
                <Clock3 className="mt-0.5 shrink-0" size={18} aria-hidden="true" />
                <span>{contact.serviceHours}</span>
              </div>
            </address>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-center text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Garuda Media Telematika 2.0 Jombang. Hak cipta dilindungi.
          </p>
          <p>{siteConfig.company} · {contact.address}</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-bold">{title}</h2>
      <div className="mt-5 flex flex-col gap-3.5">{children}</div>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-[var(--gmt-primary)]"
    >
      {children}
    </a>
  );
}

function ContactLink({
  href,
  icon,
  external = false,
  children,
}: {
  href: string;
  icon: ReactNode;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-start gap-3 text-sm leading-6 text-white/70 transition hover:text-white"
    >
      <span className="mt-0.5 shrink-0" aria-hidden="true">
        {icon}
      </span>
      <span className="break-words">{children}</span>
    </a>
  );
}
