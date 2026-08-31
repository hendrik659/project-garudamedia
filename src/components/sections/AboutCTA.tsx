import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";

import { getWhatsAppUrl } from "@/config/contact";
import Container from "../layout/Container";

const benefits = ["Konsultasi gratis", "Respon cepat", "Teknisi profesional"];

export default function AboutCTA() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="hubungi-kami"
      aria-labelledby="about-cta-title"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#006da9_0%,#008bd3_58%,#159bdc_100%)] py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 -z-10 h-80 w-80 rounded-full border-[48px] border-white/10 sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-32 -z-10 h-80 w-80 rounded-full bg-[var(--gmt-orange)]/20 blur-3xl"
      />

      <Container>
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="min-w-0 text-white">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky-100">
              Mulai terhubung
            </p>
            <h2
              id="about-cta-title"
              className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl"
            >
              Mari temukan koneksi yang tepat untuk Anda.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Ceritakan kebutuhan internet Anda. Tim Garuda Media Telematika 2.0
              Jombang siap membantu memilih layanan yang sesuai untuk rumah
              maupun bisnis.
            </p>

            <ul className="mt-7 flex flex-col gap-3 text-sm font-semibold text-white/90 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2">
                  <CheckCircle2
                    aria-hidden="true"
                    className="shrink-0 text-sky-200"
                    size={18}
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 rounded-[1.5rem] border border-white/20 bg-white/10 p-5 shadow-[0_24px_55px_rgba(0,45,74,0.22)] backdrop-blur-sm sm:p-7">
            <p className="text-sm font-bold text-white/70">Siap berkonsultasi?</p>
            <p className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
              Hubungi tim Garuda Media Telematika 2.0 Jombang sekarang.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--gmt-orange)] px-5 py-3.5 text-center text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(245,158,11,0.28)] transition hover:-translate-y-0.5 hover:bg-[var(--gmt-orange-dark)]"
              >
                <MessageCircle aria-hidden="true" size={20} />
                Chat via WhatsApp
              </a>
              <Link
                href="/paket#daftar-paket"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3.5 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Lihat Semua Paket
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
