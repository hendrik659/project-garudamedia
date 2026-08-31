"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Headphones, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getWhatsAppUrl } from "@/config/contact";
import Container from "../layout/Container";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const trustPoints = [
  { icon: Zap, label: "Koneksi stabil" },
  { icon: ShieldCheck, label: "Unlimited" },
  { icon: Headphones, label: "Dukungan 24 jam" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[linear-gradient(145deg,#f7fbff_0%,#ffffff_52%,#eef8ff_100%)] pb-8 pt-24 sm:pb-10 sm:pt-28 md:pb-20 md:pt-32 lg:min-h-[760px]"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 top-10 -z-10 hidden h-[28rem] w-[28rem] rounded-full bg-[var(--gmt-primary)]/15 blur-3xl md:block"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 -z-10 hidden h-96 w-96 rounded-full bg-[var(--gmt-orange)]/10 blur-3xl md:block"
      />

      <Container>
        <div className="grid items-center gap-0 md:gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <motion.div initial="hidden" animate="show" className="relative z-10">
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--gmt-primary)]/15 bg-white/70 px-3 py-1.5 text-[11px] font-bold tracking-wide text-[var(--gmt-primary)] sm:bg-white/80 sm:px-4 sm:py-2 sm:text-sm sm:shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Internet lokal terpercaya di Jombang
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 max-w-[20ch] text-[2rem] font-black leading-[1.12] tracking-[-0.03em] text-[var(--gmt-dark)] sm:mt-6 sm:max-w-3xl sm:text-5xl sm:leading-[1.08] sm:tracking-[-0.035em] lg:text-[3.9rem]"
            >
              Internet cepat dan stabil untuk
              <span className="text-[var(--gmt-primary)]"> setiap kebutuhan.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-[15px] leading-7 text-[var(--gmt-gray)] sm:mt-6 sm:text-lg sm:leading-8"
            >
              Dari belajar dan bekerja hingga streaming serta kebutuhan bisnis,
              Garuda Media Telematika 20 Jombang menghadirkan koneksi andal
              dengan dukungan teknisi profesional.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3"
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[var(--gmt-orange)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_6px_16px_rgba(245,158,11,0.2)] transition hover:-translate-y-0.5 hover:bg-[var(--gmt-orange-dark)] sm:min-h-12 sm:px-7 sm:py-3.5 sm:shadow-[0_12px_28px_rgba(245,158,11,0.28)]"
              >
                Pasang WiFi Sekarang
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <Link
                href="/paket#daftar-paket"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[var(--gmt-primary)]/30 bg-transparent px-5 py-2.5 text-sm font-bold text-[var(--gmt-primary)] transition hover:border-[var(--gmt-primary)] hover:bg-[var(--gmt-soft-blue)] sm:min-h-12 sm:bg-white/70 sm:px-7 sm:py-3.5"
              >
                Lihat Paket Internet
              </Link>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3"
            >
              {trustPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex items-start gap-1.5 text-[11px] font-semibold leading-4 text-slate-600 sm:items-center sm:gap-2 sm:text-sm"
                  >
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center text-[var(--gmt-primary)] sm:h-8 sm:w-8 sm:rounded-lg sm:bg-[var(--gmt-soft-blue)]">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    {item.label}
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto hidden w-full max-w-2xl md:block"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border-4 border-white bg-slate-100 shadow-[0_30px_70px_rgba(11,31,51,0.2)] sm:rounded-[2.25rem]">
              <Image
                src="/images/hero-gmt20.jpg"
                alt="Ilustrasi jaringan internet Garuda Media Telematika 20 Jombang yang menghubungkan berbagai perangkat"
                fill
                priority
                sizes="(max-width: 1023px) 92vw, 46vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061b2c]/45 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-5 left-3 right-3 flex items-center justify-between gap-3 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur sm:-bottom-6 sm:left-6 sm:right-auto sm:min-w-64 sm:p-5">
              <div>
                <p className="text-xs font-semibold text-[var(--gmt-gray)]">Kecepatan tersedia</p>
                <p className="mt-1 text-xl font-black text-[var(--gmt-dark)] sm:text-2xl">
                  Hingga 500 Mbps
                </p>
              </div>
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Zap size={22} aria-hidden="true" />
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
