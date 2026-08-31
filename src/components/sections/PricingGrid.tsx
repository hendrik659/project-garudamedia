"use client";

import { motion } from "framer-motion";
import { Check, Gauge, MessageCircle } from "lucide-react";

import { getWhatsAppUrl } from "@/config/contact";
import { packages } from "@/data/packages";
import Container from "../layout/Container";
import Section from "../layout/Section";

const includedBenefits = ["Unlimited tanpa FUP", "Instalasi profesional", "Dukungan pelanggan"];

const mobilePackageOrder = ["30 Mbps", "15 Mbps", "50 Mbps", "20 Mbps", "100 Mbps", "200 Mbps", "500 Mbps"];

const packageLayoutBySpeed: Record<string, string> = {
  "15 Mbps": "order-2 lg:order-1 lg:col-span-4",
  "20 Mbps": "order-4 lg:order-4 lg:col-span-3",
  "30 Mbps": "order-1 lg:order-2 lg:col-span-4",
  "50 Mbps": "order-3 lg:order-3 lg:col-span-4",
  "100 Mbps": "order-5 lg:order-5 lg:col-span-3",
  "200 Mbps": "order-6 lg:order-6 lg:col-span-3",
  "500 Mbps": "order-7 lg:order-7 lg:col-span-3",
};

const orderedPackages = [...packages].sort(
  (firstPackage, secondPackage) =>
    mobilePackageOrder.indexOf(firstPackage.speed) - mobilePackageOrder.indexOf(secondPackage.speed),
);

export default function PricingGrid() {
  return (
    <Section id="daftar-paket" className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gmt-primary)]">
            Daftar paket
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--gmt-dark)] sm:text-4xl lg:text-5xl">
            Pilih kecepatan sesuai kebutuhan
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--gmt-gray)] sm:text-lg">
            Semua paket dirancang untuk koneksi harian yang stabil, dari penggunaan ringan hingga kebutuhan profesional.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-12 lg:gap-7">
          {orderedPackages.map((item, index) => {
            const isPopular = item.popular;
            const layoutClassName = packageLayoutBySpeed[item.speed] ?? "order-last lg:col-span-3";

            return (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.42, delay: Math.min(index * 0.06, 0.24) }}
                aria-label={`${item.name}, ${item.speed}${isPopular ? ", Paling Banyak Dipilih" : ""}`}
                className={`${layoutClassName} relative flex h-full flex-col rounded-3xl border bg-white p-6 shadow-md transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl sm:p-7 ${
                  isPopular
                    ? "z-10 border-[var(--gmt-primary)] shadow-[0_22px_58px_rgba(0,128,200,0.22)] lg:scale-[1.03] lg:hover:scale-[1.045]"
                    : "border-[var(--gmt-border)]"
                }`}
              >
                {isPopular && (
                  <span className="absolute right-5 top-5 max-w-[calc(100%-6rem)] rounded-full bg-[var(--gmt-primary)] px-3 py-1.5 text-center text-[11px] font-bold leading-tight text-white shadow-sm">
                    Paling Banyak Dipilih
                  </span>
                )}
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gmt-soft-blue)] text-[var(--gmt-primary)]">
                  <Gauge size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-[var(--gmt-dark)]">{item.name}</h3>
                <p className="mt-4 text-4xl font-black tracking-tight text-[var(--gmt-primary)]">
                  {item.speed}
                </p>
                <p className="mt-3 text-2xl font-black text-[var(--gmt-dark)]">
                  Rp{item.price}
                  <span className="ml-1 text-sm font-medium text-[var(--gmt-gray)]">/bulan</span>
                </p>
                <p className="mt-5 min-h-12 text-sm leading-6 text-[var(--gmt-gray)]">
                  {item.description}
                </p>
                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-600">
                  {includedBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2.5">
                      <Check size={17} className="shrink-0 text-emerald-500" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 transition duration-300 ease-in-out hover:-translate-y-0.5 ${
                    isPopular
                      ? "bg-[var(--gmt-orange)] hover:bg-[var(--gmt-orange-dark)]"
                      : "bg-[var(--gmt-primary)] hover:bg-[var(--gmt-primary-dark)]"
                  }`}
                >
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-white">
                    <MessageCircle size={17} aria-hidden="true" />
                    Pilih Paket
                  </span>
                </a>
              </motion.article>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-[var(--gmt-gray)]">
          Harga dapat menyesuaikan hasil survei lokasi dan kebijakan pemasangan.
          Konfirmasi detail akhir kepada tim Garuda Media Telematika 2.0 Jombang
          sebelum berlangganan.
        </p>
      </Container>
    </Section>
  );
}
