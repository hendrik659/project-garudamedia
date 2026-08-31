"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getWhatsAppUrl } from "@/config/contact";
import { navigation } from "@/config/navigation";
import Container from "./Container";

const SCROLL_THRESHOLD = 40;
const DARK_HERO_ROUTES = ["/paket", "/tentang"];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const hasDarkHero = DARK_HERO_ROUTES.some((route) =>
    pathname.startsWith(route),
  );
  const hasSolidBackground = isScrolled || isMenuOpen;
  const usesLightNavigation = !hasSolidBackground && hasDarkHero;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: hasSolidBackground
          ? "rgba(255, 255, 255, 0.98)"
          : "rgba(255, 255, 255, 0)",
        boxShadow: hasSolidBackground
          ? "0 10px 35px rgba(11, 31, 51, 0.09)"
          : "0 0 0 rgba(11, 31, 51, 0)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[border-color,backdrop-filter] duration-300 ease-in-out ${
        hasSolidBackground
          ? "border-slate-200/80 backdrop-blur-xl"
          : "border-transparent bg-transparent backdrop-blur-[2px]"
      }`}
    >
      <Container>
        <nav
          aria-label="Navigasi utama"
          className={`flex items-center justify-between transition-[height] duration-300 ease-in-out ${
            isScrolled ? "h-16" : "h-20 lg:h-24"
          }`}
        >
          <Link
            href="/"
            aria-label="Garuda Media Telematika 2.0 Jombang - kembali ke beranda"
            className={`relative z-10 shrink-0 rounded-md transition-[filter] duration-300 ease-in-out ${
              hasSolidBackground
                ? "drop-shadow-none"
                : "drop-shadow-[0_2px_5px_rgba(0,0,0,0.28)]"
            }`}
          >
            <Image
              src="/images/garudamedianet.png"
              alt="Garuda Media Net"
              width={230}
              height={32}
              className={`h-auto w-[156px] transition-[width] duration-300 ease-in-out sm:w-[180px] ${
                isScrolled ? "lg:w-[176px]" : "lg:w-[205px]"
              }`}
              sizes="(max-width: 639px) 156px, (max-width: 1023px) 180px, 205px"
            />
          </Link>

          <div
            data-desktop-navigation
            className="hidden items-center gap-7 lg:flex xl:gap-9"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="group relative py-3 text-sm font-semibold"
                >
                  <span
                    className={`transition-colors duration-300 ease-in-out ${
                      active
                        ? "text-[var(--gmt-primary)]"
                        : usesLightNavigation
                          ? "text-white group-hover:text-sky-200"
                          : "text-[var(--gmt-dark)] group-hover:text-[var(--gmt-primary)]"
                    }`}
                  >
                    {item.label}
                  </span>
                  <motion.span
                    aria-hidden="true"
                    initial={false}
                    animate={{ scaleX: active ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-x-0 bottom-1 h-0.5 origin-left rounded-full bg-[var(--gmt-primary)]"
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl bg-[var(--gmt-orange)] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_22px_rgba(245,158,11,0.28)] transition duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[var(--gmt-orange-dark)] sm:inline-flex lg:px-6"
            >
              <span className="text-white">Langganan Sekarang</span>
            </a>

            <button
              type="button"
              data-mobile-menu-button
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((current) => !current)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border shadow-sm transition duration-300 ease-in-out lg:hidden ${
                usesLightNavigation
                  ? "border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/20"
                  : "border-slate-200 bg-white text-[var(--gmt-dark)] hover:border-[var(--gmt-primary)] hover:text-[var(--gmt-primary)]"
              }`}
            >
              {isMenuOpen ? <X aria-hidden="true" size={23} /> : <Menu aria-hidden="true" size={23} />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0, y: -8 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200/80 bg-white lg:hidden"
          >
            <Container className="py-4">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors duration-300 ease-in-out ${
                        active
                          ? "bg-[var(--gmt-soft-blue)]"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className={`transition-colors duration-300 ease-in-out ${
                          active
                            ? "text-[var(--gmt-primary)]"
                            : "text-[var(--gmt-dark)] group-hover:text-[var(--gmt-primary)]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 rounded-xl bg-[var(--gmt-orange)] px-5 py-3.5 text-center text-sm font-bold text-white transition duration-300 ease-in-out hover:bg-[var(--gmt-orange-dark)] sm:hidden"
                >
                  <span className="text-white">Langganan Sekarang</span>
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
