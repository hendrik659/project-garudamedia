"use client";

import { motion } from "framer-motion";
import { Check, MapPin, MessageCircle } from "lucide-react";

import { getWhatsAppUrl } from "@/config/contact";
import { coverageAreas } from "@/data/coverage";
import Container from "../layout/Container";
import Section from "../layout/Section";

const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.7273207949015!2d112.22810997500353!3d-7.641454792374485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e784273bc1f08cf%3A0x3205f4774798c9c7!2sPT.%20GARUDA%20MEDIA%20TELEMATIKA!5e1!3m2!1sid!2sid!4v1787943205052!5m2!1sid!2sid";

export default function Coverage() {
  return (
    <Section id="jangkauan" className="bg-[var(--gmt-surface)]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--gmt-primary)]">
            <MapPin size={17} aria-hidden="true" />
            Area layanan
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--gmt-dark)] sm:text-4xl lg:text-5xl">
            Seluruh kecamatan di Kabupaten Jombang.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--gmt-gray)] sm:text-lg">
            Layanan tersedia di seluruh 21 kecamatan. Konfirmasi alamat Anda
            untuk mendapatkan hasil pengecekan jaringan yang paling akurat.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-[var(--gmt-border)] bg-white shadow-[0_20px_55px_rgba(11,31,51,0.1)] lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="min-h-[320px] bg-slate-100 sm:min-h-[400px]"
          >
            <iframe
              title="Peta lokasi Garuda Media Telematika di Jombang"
              src={mapUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full min-h-[320px] w-full border-0 sm:min-h-[400px]"
            />
          </motion.div>

          <div className="p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl font-black text-[var(--gmt-dark)]">Cakupan saat ini</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--gmt-gray)]">
              Pilih kecamatan Anda, kemudian hubungi tim kami untuk memastikan
              ketersediaan jaringan di alamat pemasangan.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {coverageAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 rounded-xl bg-[var(--gmt-soft-blue)] px-4 py-3 text-sm font-semibold text-[var(--gmt-dark)]"
                >
                  <Check size={18} className="shrink-0 text-[var(--gmt-primary)]" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--gmt-orange)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--gmt-orange-dark)]"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Cek ketersediaan jaringan
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
