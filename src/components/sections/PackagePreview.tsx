"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Gauge } from "lucide-react";
import Link from "next/link";

import { getWhatsAppUrl } from "@/config/contact";
import { featuredPackages } from "@/data/packages";
import Container from "../layout/Container";
import Section from "../layout/Section";

export default function PackagePreview() {
  return (
    <Section id="paket-preview" className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gmt-primary)]">
            Paket pilihan
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--gmt-dark)] sm:text-4xl lg:text-5xl">
            Internet yang pas untuk aktivitas Anda
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--gmt-gray)] sm:text-lg">
            Pilih kecepatan sesuai jumlah perangkat dan pola penggunaan harian Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-14">
          {featuredPackages.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`relative flex h-full flex-col rounded-3xl border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${
                item.popular
                  ? "border-[var(--gmt-primary)] shadow-[0_18px_45px_rgba(0,128,200,0.14)]"
                  : "border-[var(--gmt-border)] shadow-sm"
              }`}
            >
              {item.popular && (
                <span className="absolute right-5 top-5 rounded-full bg-[var(--gmt-primary)] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                  Favorit
                </span>
              )}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gmt-soft-blue)] text-[var(--gmt-primary)]">
                <Gauge size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[var(--gmt-dark)]">{item.name}</h3>
              <p className="mt-4 text-4xl font-black tracking-tight text-[var(--gmt-primary)]">
                {item.speed}
              </p>
              <p className="mt-3 text-2xl font-black text-[var(--gmt-dark)]">
                Rp{item.price}
                <span className="ml-1 text-sm font-medium text-[var(--gmt-gray)]">/bulan</span>
              </p>
              <p className="mt-5 min-h-14 text-sm leading-6 text-[var(--gmt-gray)]">
                {item.description}
              </p>
              <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-600">
                {[
                  "Tanpa batas kuota",
                  "Instalasi oleh teknisi",
                  "Dukungan pelanggan",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2.5">
                    <Check size={17} className="text-emerald-500" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--gmt-orange)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--gmt-orange-dark)]"
              >
                Pilih Paket
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/paket#daftar-paket"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--gmt-primary)]/40 px-6 py-3 text-sm font-bold text-[var(--gmt-primary)] transition hover:border-[var(--gmt-primary)] hover:bg-[var(--gmt-soft-blue)]"
          >
            Bandingkan semua paket
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
