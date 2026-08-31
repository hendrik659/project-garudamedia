"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Rocket, Target } from "lucide-react";

import Container from "../layout/Container";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const missions = [
  "Menyediakan koneksi internet yang cepat dan stabil.",
  "Memberikan pelayanan yang ramah, responsif, dan profesional.",
  "Mengembangkan infrastruktur jaringan secara berkelanjutan.",
  "Menghadirkan solusi digital untuk masyarakat dan pelaku bisnis.",
];

export default function AboutVisionMission() {
  return (
    <section
      id="visi-misi"
      aria-labelledby="vision-mission-title"
      className="relative isolate overflow-hidden bg-[var(--gmt-dark)] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[var(--gmt-primary)]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-96 w-96 rounded-full bg-[var(--gmt-orange)]/10 blur-3xl"
      />

      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-sky-300">
              Visi &amp; misi
            </p>
            <h2
              id="vision-mission-title"
              className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl"
            >
              Menumbuhkan masa depan melalui konektivitas.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end lg:text-lg">
            Kami percaya akses internet yang andal dapat membuka lebih banyak
            kesempatan untuk belajar, bekerja, berusaha, dan berkembang.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-12 grid min-w-0 gap-5 lg:grid-cols-2"
        >
          <motion.article
            variants={cardVariants}
            className="relative min-w-0 overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,var(--gmt-primary),#159bdc)] p-6 text-white shadow-[0_22px_55px_rgba(0,128,200,0.22)] sm:p-8 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[36px] border-white/10"
            />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
              <Target aria-hidden="true" size={28} />
            </span>
            <div className="relative mt-12 sm:mt-16">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/70">
                Arah kami
              </p>
              <h3 className="mt-2 text-3xl font-extrabold">Visi</h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/90">
                Menjadi penyedia layanan internet terpercaya yang mendukung
                kemajuan digital masyarakat dan bisnis melalui koneksi
                berkualitas serta pelayanan yang berkelanjutan.
              </p>
            </div>
          </motion.article>

          <motion.article
            variants={cardVariants}
            className="min-w-0 rounded-[1.5rem] border border-white/10 bg-white p-6 text-[var(--gmt-dark)] shadow-[0_22px_55px_rgba(0,0,0,0.16)] sm:p-8 lg:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[var(--gmt-orange-dark)]">
                <Rocket aria-hidden="true" size={27} />
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="text-slate-300"
                size={28}
              />
            </div>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-[var(--gmt-primary)]">
              Langkah kami
            </p>
            <h3 className="mt-2 text-3xl font-extrabold">Misi</h3>
            <ol className="mt-6 space-y-4">
              {missions.map((mission, index) => (
                <li key={mission} className="flex min-w-0 items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--gmt-soft-blue)] text-xs font-extrabold text-[var(--gmt-primary)]">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-sm leading-6 text-slate-600 sm:text-base">
                    {mission}
                  </span>
                </li>
              ))}
            </ol>
          </motion.article>
        </motion.div>
      </Container>
    </section>
  );
}
