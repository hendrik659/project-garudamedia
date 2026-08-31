"use client";

import { motion } from "framer-motion";
import { Camera, Headphones, Home, Wifi, Wrench, Zap } from "lucide-react";

import Container from "../layout/Container";
import Section from "../layout/Section";

const packageFeatures = [
  {
    icon: Wifi,
    title: "Koneksi stabil",
    description: "Performa jaringan yang konsisten untuk aktivitas digital sehari-hari.",
  },
  {
    icon: Camera,
    title: "Pemasangan CCTV",
    description:
      "Layanan pemasangan CCTV profesional untuk membantu meningkatkan keamanan rumah dan bisnis Anda.",
  },
  {
    icon: Wrench,
    title: "Instalasi profesional",
    description: "Pemasangan dan konfigurasi dilakukan teknisi berpengalaman.",
  },
  {
    icon: Headphones,
    title: "Dukungan responsif",
    description: "Tim lokal siap membantu saat Anda membutuhkan penanganan.",
  },
  {
    icon: Zap,
    title: "Pilihan hingga 500 Mbps",
    description: "Skala kecepatan fleksibel untuk rumah, kantor, dan bisnis.",
  },
  {
    icon: Home,
    title: "Solusi sesuai lokasi",
    description: "Rekomendasi pemasangan disesuaikan hasil pengecekan jaringan.",
  },
];

export default function PackageFeature() {
  return (
    <Section className="bg-[var(--gmt-surface)]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gmt-primary)]">
            Termasuk di setiap paket
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--gmt-dark)] sm:text-4xl lg:text-5xl">
            Layanan menyeluruh, bukan hanya kecepatan
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--gmt-gray)] sm:text-lg">
            Kami menjaga pengalaman pelanggan sejak survei lokasi hingga dukungan setelah pemasangan.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {packageFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-3xl border border-[var(--gmt-border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[var(--gmt-primary)]/35 hover:shadow-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gmt-primary)] to-[var(--gmt-light-blue)] text-white">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-[var(--gmt-dark)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--gmt-gray)]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
