"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { getWhatsAppUrl } from "@/config/contact";
import Container from "../layout/Container";
import Section from "../layout/Section";

export default function PackageCTA() {
  return (
    <Section className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--gmt-primary-dark)] via-[var(--gmt-primary)] to-[var(--gmt-light-blue)] px-5 py-14 text-center text-white shadow-[0_25px_60px_rgba(0,128,200,0.22)] sm:px-10 sm:py-16 lg:px-16"
        >
          <div aria-hidden="true" className="absolute -right-24 -top-28 -z-10 h-72 w-72 rounded-full border-[42px] border-white/10" />
          <div aria-hidden="true" className="absolute -bottom-40 -left-32 -z-10 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
          <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Masih ragu memilih paket?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/85 sm:text-lg">
            Sampaikan jumlah perangkat dan kebutuhan harian Anda. Tim Garuda Media
            Telematika 20 Jombang siap memberi rekomendasi tanpa biaya konsultasi.
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[var(--gmt-orange)] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--gmt-orange-dark)] sm:px-8"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Konsultasi via WhatsApp
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
