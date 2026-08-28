"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Container from "./Container";


const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Paket Internet", href: "#paket" },
  { label: "Tentang Kami", href: "#tentang" },
];


export default function Navbar() {
  const lastScrollY = useRef(0);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > 50);

      setIsVisible(
        currentScroll < lastScrollY.current
      );

      lastScrollY.current = currentScroll;


      navLinks.forEach((item) => {
        const section = document.getElementById(
          item.href.replace("#", "")
        );

        if (!section) return;

        const offset = section.offsetTop - 150;

        if (currentScroll >= offset) {
          setActiveSection(
            item.href.replace("#", "")
          );
        }
      });
    };


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  return (
    <motion.nav
      animate={{
        y: isVisible ? 0 : "-100%",
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-300
        ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/80 backdrop-blur"
        }
      `}
    >

      <Container>

        <div className="
          flex
          h-20
          items-center
          justify-between
        ">


          {/* Logo */}
          <Link href="#home">
            <Image
              src="/images/logo-gmt-black.png"
              alt="GMT20 Jombang"
              width={85}
              height={50}
              priority
            />
          </Link>



          {/* Desktop Menu */}
          <div className="
            hidden
            items-center
            gap-10
            md:flex
          ">
            {navLinks.map((item) => {
              const active =
                activeSection === item.href.replace("#", "");

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    relative
                    text-sm
                    font-semibold
                    transition
                    hover:text-[var(--gmt-primary)]
                    ${
                      active
                        ? "text-[var(--gmt-primary)]"
                        : "text-[var(--gmt-dark)]"
                    }
                  `}
                >
                  {item.label}

                  <span
                    className={`
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      bg-[var(--gmt-primary)]
                      transition-all
                      ${
                        active
                          ? "w-full"
                          : "w-0"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>



          {/* Desktop CTA */}
          <button className="
            hidden
            rounded-xl
            bg-[var(--gmt-orange)]
            px-7
            py-3
            font-semibold
            text-white
            shadow-md
            transition
            hover:-translate-y-1
            hover:shadow-xl
            md:block
          ">
            Pasang WiFi
          </button>



          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              text-[var(--gmt-dark)]
              md:hidden
            "
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </Container>



      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          overflow-hidden
          border-t
          border-[var(--gmt-border)]
          bg-white
          md:hidden
        "
      >

        <Container>

          <div className="
            flex
            flex-col
            gap-5
            py-6
          ">

            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  font-semibold
                  text-[var(--gmt-dark)]
                  transition
                  hover:text-[var(--gmt-primary)]
                "
              >
                {item.label}
              </Link>
            ))}


            <button className="
              rounded-xl
              bg-[var(--gmt-orange)]
              px-6
              py-3
              font-semibold
              text-white
            ">
              Pasang WiFi
            </button>

          </div>

        </Container>

      </motion.div>


    </motion.nav>
  );
}