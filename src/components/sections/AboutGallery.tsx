"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

import Container from "../layout/Container";

const featuredActivity = {
  src: "/images/about/about-installation.jpg",
  alt: "Teknisi Garuda Media Telematika 20 memasang perangkat internet di lokasi pelanggan",
  label: "Layanan lapangan",
  title: "Instalasi jaringan profesional",
  description:
    "Teknisi berpengalaman memastikan pemasangan berjalan rapi dan optimal.",
};

const supportingActivities = [
  {
    src: "/images/about/about-service.jpg",
    alt: "Tim Garuda Media Telematika 20 melayani pelanggan di kantor",
    label: "Pelayanan pelanggan",
    title: "Tim yang siap membantu",
    description: "Memberikan solusi internet sesuai kebutuhan pelanggan.",
    imagePosition: "object-center",
  },
  {
    src: "/images/about/about-network.jpg",
    alt: "Teknisi Garuda Media Telematika 20 membangun jaringan internet outdoor",
    label: "Infrastruktur jaringan",
    title: "Koneksi menjangkau pelanggan",
    description: "Membangun jaringan stabil untuk rumah dan bisnis.",
    imagePosition: "object-[center_48%]",
  },
  {
    src: "/images/about/about-team.jpg",
    alt: "Tim teknisi Garuda Media Telematika 20 berkolaborasi di lapangan",
    label: "Tim profesional",
    title: "Kolaborasi menjaga kualitas",
    description: "Kerja sama tim untuk memberikan layanan terbaik.",
    imagePosition: "object-center",
  },
];

const galleryVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutGallery() {
  return (
    <section
      aria-labelledby="gallery-title"
      className="bg-[var(--gmt-surface)] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--gmt-primary)]">
              Di balik layanan
            </p>
            <h2
              id="gallery-title"
              className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.025em] text-[var(--gmt-dark)] sm:text-4xl xl:text-5xl"
            >
              <span className="block">Dibangun oleh tim,</span>
              <span className="block text-[var(--gmt-primary)]">
                didukung teknologi,
              </span>
              <span className="block">melayani Jombang.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--gmt-gray)] lg:justify-self-end lg:text-lg">
            Mulai dari pelayanan pelanggan, instalasi jaringan, hingga
            pemeliharaan koneksi di lapangan, setiap proses kami jalankan dengan
            standar kerja profesional.
          </p>
        </div>

        <motion.div
          variants={galleryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid min-w-0 gap-5 lg:h-[760px] lg:grid-cols-[minmax(0,1.25fr)_minmax(340px,0.75fr)]"
        >
          <motion.figure
            variants={cardVariants}
            className="group relative min-h-[440px] min-w-0 overflow-hidden rounded-3xl bg-slate-200 shadow-[0_18px_50px_rgba(11,31,51,0.12)] sm:min-h-[520px] lg:min-h-0"
          >
            <Image
              src={featuredActivity.src}
              alt={featuredActivity.alt}
              fill
              sizes="(max-width: 1023px) calc(100vw - 2rem), 62vw"
              className="object-cover object-[68%_center] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[var(--gmt-dark)]/95 via-[var(--gmt-dark)]/20 to-transparent"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7 lg:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-200">
                {featuredActivity.label}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                {featuredActivity.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                {featuredActivity.description}
              </p>
            </figcaption>
          </motion.figure>

          <div className="grid min-w-0 gap-5 lg:grid-rows-3">
            {supportingActivities.map((activity) => (
              <motion.figure
                key={activity.title}
                variants={cardVariants}
                className="group relative min-h-[300px] min-w-0 overflow-hidden rounded-3xl bg-slate-200 shadow-[0_16px_45px_rgba(11,31,51,0.1)] lg:min-h-0"
              >
                <Image
                  src={activity.src}
                  alt={activity.alt}
                  fill
                  sizes="(max-width: 1023px) calc(100vw - 2rem), 38vw"
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${activity.imagePosition}`}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[var(--gmt-dark)]/95 via-[var(--gmt-dark)]/25 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-sky-200 sm:text-xs">
                    {activity.label}
                  </p>
                  <h3 className="mt-1.5 text-xl font-extrabold sm:text-2xl lg:text-xl xl:text-2xl">
                    {activity.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/78">
                    {activity.description}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
