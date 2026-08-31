"use client";

import { motion } from "framer-motion";

import { features } from "@/data/features";
import Container from "../layout/Container";
import Section from "../layout/Section";

export default function WhyChooseUs() {
  return (
    <Section className="bg-[var(--gmt-surface)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gmt-primary)]">
              Keunggulan Garuda Media Telematika 20 Jombang
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--gmt-dark)] sm:text-4xl lg:text-5xl">
              Lebih dari sekadar koneksi cepat
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[var(--gmt-gray)] sm:text-lg">
              Jaringan yang baik perlu didukung instalasi rapi dan tim yang mudah dihubungi.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="rounded-3xl border border-[var(--gmt-border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[var(--gmt-primary)]/35 hover:shadow-lg"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--gmt-primary)] to-[var(--gmt-light-blue)] text-white shadow-md">
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
        </div>
      </Container>
    </Section>
  );
}
