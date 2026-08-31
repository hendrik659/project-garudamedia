"use client";

import { motion, type Variants } from "framer-motion";
import {
  CheckCircle2,
  MapPin,
  MessageCircle,
  Router,
  Wifi,
  type LucideIcon,
} from "lucide-react";

import { getWhatsAppUrl } from "@/config/contact";
import Container from "../layout/Container";
import Section from "../layout/Section";

interface InstallationStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
}

const steps = [
  {
    number: "01",
    title: "Konsultasi Paket",
    description:
      "Hubungi tim Garuda Media Telematika 2.0 Jombang untuk mendapatkan rekomendasi paket internet sesuai kebutuhan.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Pilih Paket Internet",
    description: "Pilih paket internet terbaik untuk rumah atau bisnis Anda.",
    icon: Wifi,
  },
  {
    number: "03",
    title: "Survey Lokasi",
    description: "Tim teknisi melakukan pengecekan lokasi pemasangan.",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Instalasi Internet",
    description: "Teknisi melakukan pemasangan hingga koneksi siap digunakan.",
    icon: Router,
  },
  {
    number: "05",
    title: "Internet Aktif",
    description: "Nikmati koneksi internet cepat dan stabil.",
    icon: CheckCircle2,
  },
] as const satisfies readonly InstallationStep[];

const timelineVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.12,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function InstallationProcess() {
  return (
    <Section id="proses" className="overflow-hidden bg-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gmt-primary)]">
            Proses Berlangganan
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--gmt-dark)] sm:text-4xl lg:text-5xl">
            Mulai Menggunakan Internet Garuda Media Telematika 2.0 Jombang
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--gmt-gray)] sm:text-lg">
            Proses pemasangan mudah, cepat, dan didampingi teknisi profesional.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-6xl lg:mt-16">
          <motion.div
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute bottom-7 left-[23px] top-7 w-0.5 origin-top bg-gradient-to-b from-[var(--gmt-primary)] to-sky-200 lg:hidden"
          />
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 origin-left bg-gradient-to-r from-[var(--gmt-primary)] to-sky-200 lg:block"
          />

          <motion.ol
            aria-label="Lima langkah proses berlangganan internet"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="relative grid gap-0 lg:grid-cols-5"
          >
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.li
                  key={step.number}
                  variants={stepVariants}
                  className="group grid min-w-0 grid-cols-[3rem_minmax(0,1fr)] gap-4 pb-10 last:pb-0 lg:block lg:px-3 lg:pb-0 lg:text-center"
                >
                  <span
                    role="img"
                    aria-label={step.title}
                    title={step.title}
                    className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[var(--gmt-primary)] text-white shadow-[0_8px_22px_rgba(0,128,200,0.24)] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[var(--gmt-primary-dark)] lg:mx-auto"
                  >
                    <Icon size={21} aria-hidden="true" />
                  </span>

                  <div className="min-w-0 pt-0.5 lg:pt-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--gmt-primary)]">
                      Langkah {step.number}
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold leading-snug text-[var(--gmt-dark)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--gmt-gray)]">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto mt-12 flex max-w-4xl flex-col items-start justify-between gap-5 rounded-2xl bg-[var(--gmt-soft-blue)] px-5 py-6 sm:flex-row sm:items-center sm:px-7 lg:mt-16"
        >
          <div className="min-w-0">
            <h3 className="text-xl font-extrabold text-[var(--gmt-dark)]">
              Tertarik berlangganan?
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-[var(--gmt-gray)] sm:text-base">
              Butuh bantuan memilih paket? Tim kami siap membantu.
            </p>
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--gmt-orange)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(245,158,11,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--gmt-orange-dark)] sm:w-auto"
          >
            <MessageCircle size={19} aria-hidden="true" />
            Chat WhatsApp
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
