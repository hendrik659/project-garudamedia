"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getWhatsAppUrl } from "@/config/contact";
import Container from "../layout/Container";

const companyBenefits = [
  "Provider Internet Lokal Jombang",
  "Teknisi Profesional",
  "Solusi Internet & CCTV",
];

const benefitListVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.42,
      staggerChildren: 0.1,
    },
  },
};

const benefitVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[var(--gmt-dark)] pb-10 pt-28 text-white md:pb-20 md:pt-32"
    >
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.78, scale: 1.035 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/about-office.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[center_46%]"
        />
      </motion.div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#061728]/98 via-[#061728]/92 to-[#061728]/75 lg:from-[#061728]/95 lg:via-[#061728]/72 lg:to-[#061728]/20" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#061728]/55 via-transparent to-[#061728]/30" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex max-w-full rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase leading-5 tracking-[0.14em] text-sky-100 backdrop-blur sm:text-sm sm:tracking-[0.16em]"
          >
            Tentang Garuda Media Telematika 20
          </motion.p>

          <motion.h1
            id="about-hero-title"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.08, ease: "easeOut" }}
            className="mt-6 text-4xl font-black leading-[1.06] tracking-[-0.035em] sm:text-5xl lg:text-6xl"
          >
            <span className="block">Membangun Koneksi,</span>
            <span className="block text-sky-300">Menghadirkan Solusi</span>
            <span className="block">Teknologi Terpercaya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.22, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8"
          >
            Garuda Media Telematika 20 Jombang adalah penyedia layanan internet
            dan solusi teknologi yang memberikan koneksi stabil, layanan
            profesional, serta dukungan terbaik untuk masyarakat dan bisnis.
          </motion.p>

          <motion.ul
            variants={benefitListVariants}
            initial="hidden"
            animate="visible"
            className="mt-7 flex flex-wrap gap-3"
          >
            {companyBenefits.map((benefit) => (
              <motion.li
                key={benefit}
                variants={benefitVariants}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur sm:text-sm"
              >
                <CheckCircle2
                  aria-hidden="true"
                  size={16}
                  className="shrink-0 text-sky-300"
                />
                {benefit}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.72, ease: "easeOut" }}
            className="mr-16 mt-9 flex flex-col gap-3 sm:mr-0 sm:flex-row"
          >
            <Link
              href="/paket#daftar-paket"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--gmt-orange)] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--gmt-orange-dark)]"
            >
              Kenali Layanan Kami
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              <MessageCircle aria-hidden="true" size={18} />
              Hubungi Kami
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
