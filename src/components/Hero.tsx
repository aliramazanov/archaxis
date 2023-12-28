"use client";
import { HeroProps } from "@/types/Types";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const heroContent = {
  intro: {
    title: "Combining artistic innovation with architectural strength",
    subtitle: "Welcome",
    description:
      "In this architectural haven, imaginative design seamlessly intertwines with robust structural foundations. Our space is a dynamic intersection where creative visions are brought to life.",

    btn: { href: "/projects", label: "View Projects" },
  },
};

const Hero: React.FC<HeroProps> = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScroll = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const imgScrollTwo = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);

  return (
    <section>
      <div className={`${className}`} ref={ref}>
        <div className="container px-4 mx-auto md:px-8">
          <div className="lg:flex items-center justify-between w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px]">
            <div className="lg:w-4/12 z-[3] relative">
              {heroContent.intro.subtitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="tracking-[3px] text-md mb-5 inline-block text-green-500"
                >
                  {heroContent.intro.subtitle}
                </motion.span>
              )}
              {heroContent.intro.title && (
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-auto lg:w-screen max-w-xs md:min-w-full sm:min-w-full mb-4 md:mb-6"
                >
                  {heroContent.intro.title}
                  <span className="text-green-500">.</span>
                </motion.h1>
              )}
              {heroContent.intro.description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="leading-relaxed text-black p-8 bg-white shadow-md w-auto lg:w-[600px] text-base lg:text-lg mb-6 lg:mb-10 z-[8]"
                >
                  {heroContent.intro.description}
                </motion.p>
              )}
              {heroContent.intro.btn.label && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="leading-relaxed text-gray-500 w-auto lg:w-screen max-w-xl text-base lg:text-lg mb-4 lg:mb-4"
                >
                  <Link
                    href={heroContent.intro.btn.href}
                    className="transition-all duration-300 ease-in-out text-sm tracking-[2px] font-bold uppercase bg-green-600 py-4 px-5 text-white inline-block hover:bg-white hover:text-green-600 hover:shadow-xl"
                  >
                    {heroContent.intro.btn.label}
                  </Link>
                </motion.p>
              )}
            </div>
            <div className="lg:w-7/12 relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                style={{ y: imgScroll, marginTop: "4rem" }}
                className="z-[1] relative bg-cover bg-center"
              >
                <Image
                  src={require("/src/images/hero.jpg")}
                  alt="Architecture, Ladder, Home"
                  width={800}
                  height={900}
                  className="z-[1]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
