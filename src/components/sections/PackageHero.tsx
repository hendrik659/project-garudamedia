"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, MessageCircle } from "lucide-react";
import Image from "next/image";

import { getWhatsAppUrl } from "@/config/contact";
import Container from "../layout/Container";

const highlights = ["Mulai 15 Mbps", "Tanpa batas kuota", "Dukungan teknisi"];

export default function PackageHero() {
  return (
    <section
      aria-labelledby="package-hero-title"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[var(--gmt-dark)] pb-10 pt-28 text-white md:pb-20 md:pt-32"
    >
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.75, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/promo-family.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-right"
        />
      </motion.div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#061728]/95 via-[#061728]/80 to-[#061728]/55 lg:from-[#061728]/95 lg:via-[#061728]/65 lg:to-transparent" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#061728]/45 via-transparent to-[#061728]/20" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-100 backdrop-blur sm:text-sm">
            Paket Internet Garuda Media Telematika 2.0 Jombang
          </p>
          <h1
            id="package-hero-title"
            className="mt-6 text-4xl font-black leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
          >
            Kecepatan yang tepat untuk rumah dan bisnis Anda
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/78 sm:text-lg">
            Pilih paket mulai 15 hingga 500 Mbps dengan koneksi stabil dan layanan lokal yang mudah dihubungi.
          </p>

          <ul className="mt-7 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <li key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur sm:text-sm">
                <CheckCircle2 size={16} className="text-sky-300" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#daftar-paket"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--gmt-orange)] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--gmt-orange-dark)]"
            >
              Lihat Semua Paket
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Konsultasi Paket
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
