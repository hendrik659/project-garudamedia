"use client";

import { motion, type Variants } from "framer-motion";
import { ShieldCheck, Users, Wifi, Zap } from "lucide-react";

import Container from "../layout/Container";

const values = [
  {
    icon: Wifi,
    number: "01",
    title: "Stabil",
    description:
      "Menjaga kualitas koneksi agar aktivitas digital pelanggan tetap berjalan lancar.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Cepat",
    description:
      "Menghadirkan performa jaringan yang tanggap untuk berbagai kebutuhan sehari-hari.",
  },
  {
    icon: Users,
    number: "03",
    title: "Profesional",
    description:
      "Melayani dengan keahlian, komunikasi yang jelas, dan perhatian pada setiap detail.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Terpercaya",
    description:
      "Membangun hubungan jangka panjang melalui layanan yang konsisten dan bertanggung jawab.",
  },
];

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function AboutValue() {
  return (
    <section
      aria-labelledby="values-title"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--gmt-primary)]">
            Nilai Garuda Media Telematika 2.0 Jombang
          </p>
          <h2
            id="values-title"
            className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.025em] text-[var(--gmt-dark)] sm:text-4xl lg:text-5xl"
          >
            Prinsip yang hadir di setiap layanan.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--gmt-gray)] sm:text-lg">
            Empat nilai ini menjadi dasar kami dalam membangun jaringan dan
            menjaga kepercayaan setiap pelanggan.
          </p>
        </div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid min-w-0 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                variants={itemVariants}
                className="group relative min-w-0 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_12px_36px_rgba(11,31,51,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-sky-200 hover:shadow-[0_20px_48px_rgba(0,128,200,0.13)] sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 text-5xl font-black text-slate-100 transition-colors group-hover:text-sky-50"
                >
                  {value.number}
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gmt-soft-blue)] text-[var(--gmt-primary)] transition duration-300 group-hover:bg-[var(--gmt-primary)] group-hover:text-white">
                  <Icon aria-hidden="true" size={27} />
                </span>
                <h3 className="relative mt-8 text-xl font-extrabold text-[var(--gmt-dark)]">
                  {value.title}
                </h3>
                <p className="relative mt-3 text-sm leading-7 text-[var(--gmt-gray)]">
                  {value.description}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-6 bottom-0 h-1 origin-left scale-x-0 rounded-t-full bg-[var(--gmt-primary)] transition-transform duration-300 group-hover:scale-x-100"
                />
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
