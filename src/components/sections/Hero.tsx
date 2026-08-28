"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Container from "../layout/Container";


const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        pt-28
        pb-16
        md:pt-32
        md:pb-24
      "
    >

      {/* Background Decoration */}

      <div
        className="
          absolute
          right-0
          top-20
          hidden
          h-96
          w-96
          rounded-full
          bg-[var(--gmt-light-blue)]
          opacity-20
          blur-3xl
          md:block
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          h-72
          w-72
          rounded-full
          bg-[var(--gmt-orange)]
          opacity-10
          blur-3xl
        "
      />



      <Container>

        <div
          className="
            grid
            items-center
            gap-10
            md:grid-cols-2
            md:gap-14
          "
        >


          {/* Hero Content */}

          <div>

            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="
                inline-flex
                rounded-full
                bg-[#EAF6FD]
                px-5
                py-2
                text-sm
                font-semibold
                text-[var(--gmt-primary)]
              "
            >
              ● Internet Provider Terpercaya Jombang
            </motion.span>



            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{
                delay:0.2,
              }}
              className="
                mt-6
                text-4xl
                font-extrabold
                leading-[1.1]
                text-[var(--gmt-dark)]
                sm:text-5xl
                md:text-6xl
              "
            >

              Internet Cepat dan

              <br />

              Stabil untuk

              <br />


              <span
                className="
                  text-[var(--gmt-primary)]
                "
              >

                <TypeAnimation
                  sequence={[
                    "Keluarga",
                    2000,
                    "Bisnis",
                    2000,
                    "Gaming",
                    2000,
                    "Kebutuhan Anda",
                    2500,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  cursor
                />

              </span>


            </motion.h1>



            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{
                delay:0.4,
              }}
              className="
                mt-6
                max-w-xl
                text-base
                leading-relaxed
                text-[var(--gmt-gray)]
                sm:text-lg
              "
            >

              Nikmati layanan internet berkualitas dari GMT20
              dengan koneksi stabil, teknisi profesional,
              dan layanan maintenance 24 jam.

            </motion.p>



            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{
                delay:0.6,
              }}
              className="
                mt-8
                flex
                flex-col
                gap-4
                sm:flex-row
              "
            >

              <button
                className="
                  w-full
                  rounded-xl
                  bg-[var(--gmt-orange)]
                  px-7
                  py-3
                  font-semibold
                  text-white
                  shadow-md
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                  sm:w-auto
                "
              >
                Pasang WiFi Sekarang
              </button>


              <button
                className="
                  w-full
                  rounded-xl
                  border
                  border-[var(--gmt-primary)]
                  px-7
                  py-3
                  font-semibold
                  text-[var(--gmt-primary)]
                  transition
                  hover:bg-[var(--gmt-primary)]
                  hover:text-white
                  sm:w-auto
                "
              >
                Lihat Paket Internet
              </button>


            </motion.div>


          </div>




          {/* Hero Image Desktop Only */}

          <motion.div
            animate={{
              y:[0,-15,0],
            }}
            transition={{
              duration:5,
              repeat:Infinity,
              ease:"easeInOut",
            }}
            className="
              relative
              hidden
              justify-center
              md:flex
            "
          >

            <div
              className="
                absolute
                inset-10
                rounded-full
                bg-[var(--gmt-primary)]
                opacity-20
                blur-3xl
              "
            />


            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                shadow-2xl
              "
            >

              <Image
                src="/images/hero-gmt20.jpg"
                alt="GMT20 Internet Service"
                width={650}
                height={500}
                priority
                className="
                  h-auto
                  w-full
                  object-cover
                "
              />



              {/* Floating Badge */}

              <motion.div
                initial={{
                  opacity:0,
                  y:20,
                }}
                animate={{
                  opacity:1,
                  y:0,
                }}
                transition={{
                  delay:1,
                  duration:0.5,
                }}
                className="
                  absolute
                  bottom-5
                  right-5
                  rounded-2xl
                  bg-white/95
                  px-5
                  py-3
                  shadow-xl
                  backdrop-blur
                "
              >

                <p
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[var(--gmt-dark)]
                  "
                >

                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[var(--gmt-primary)]
                    "
                  />

                  Internet Stabil 24 Jam

                </p>


              </motion.div>


            </div>


          </motion.div>


        </div>


      </Container>


    </section>
  );
}