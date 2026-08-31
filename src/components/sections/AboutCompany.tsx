"use client";

import { motion, type Variants } from "framer-motion";
import { Building2, CheckCircle2, MapPin } from "lucide-react";
import Image from "next/image";

import Container from "../layout/Container";

const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const highlights = [
  "Kantor layanan lokal di Jombang",
  "Konsultasi layanan internet dan CCTV",
  "Koordinasi teknisi yang cepat dan responsif",
];

export default function AboutCompany() {
  return (
    <section
      id="profil-perusahaan"
      aria-labelledby="company-title"
      className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.figure
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative min-w-0"
          >
            <div
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-28 w-28 rounded-3xl bg-[var(--gmt-soft-blue)] sm:-left-5 sm:-top-5"
            />
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-[0_24px_60px_rgba(11,31,51,0.14)] sm:rounded-[2rem]">
              <Image
                src="/images/about-office.jpg"
                alt="Kantor Garuda Media Telematika 20 Jombang sebagai pusat pelayanan pelanggan"
                width={1586}
                height={992}
                sizes="(max-width: 1023px) calc(100vw - 2rem), 46vw"
                className="h-full w-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[var(--gmt-dark)]/55 via-transparent to-transparent"
              />
              <figcaption className="absolute bottom-3 left-3 flex max-w-[calc(100%-1.5rem)] items-center gap-2.5 rounded-xl border border-white/20 bg-[var(--gmt-dark)]/82 p-2.5 text-white shadow-lg backdrop-blur sm:bottom-4 sm:left-4 sm:max-w-64 sm:p-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--gmt-primary)]">
                  <Building2 aria-hidden="true" size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-extrabold leading-4 sm:text-sm">
                    Kantor GMT20 Jombang
                  </span>
                  <span className="mt-0.5 block text-[0.68rem] leading-4 text-white/75 sm:text-xs">
                    Pusat layanan pelanggan
                  </span>
                </span>
              </figcaption>
            </div>
          </motion.figure>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="min-w-0"
          >
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--gmt-primary)]">
              Profil perusahaan
            </p>
            <h2
              id="company-title"
              className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.025em] text-[var(--gmt-dark)] sm:text-4xl lg:text-5xl"
            >
              Hadir lebih dekat untuk melayani Jombang.
            </h2>
            <p className="mt-6 text-base leading-8 text-[var(--gmt-gray)] sm:text-lg">
              Garuda Media Telematika 20 hadir sebagai penyedia layanan internet
              dan solusi CCTV dengan kantor pelayanan yang mudah dijangkau oleh
              masyarakat Jombang dan sekitarnya.
            </p>
            <p className="mt-4 leading-7 text-[var(--gmt-gray)]">
              Dari kantor ini, tim kami membantu konsultasi layanan, administrasi
              pelanggan, koordinasi instalasi, hingga penanganan gangguan secara
              responsif.
            </p>

            <ul
              className="mt-8 space-y-4"
              aria-label="Fokus layanan Garuda Media Telematika 20 Jombang"
            >
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm font-semibold leading-6 text-[var(--gmt-dark)] sm:text-base"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-[var(--gmt-primary)]"
                    size={20}
                  />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex min-w-0 items-center gap-4 rounded-2xl border border-sky-100 bg-[var(--gmt-soft-blue)] p-4 sm:p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--gmt-primary)] shadow-sm">
                <MapPin aria-hidden="true" size={24} />
              </span>
              <p className="min-w-0 text-sm leading-6 text-slate-600">
                <strong className="block text-base text-[var(--gmt-dark)]">
                  Pelayanan dekat, proses lebih jelas
                </strong>
                Pelanggan dapat berkonsultasi langsung sesuai kebutuhan layanan.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
