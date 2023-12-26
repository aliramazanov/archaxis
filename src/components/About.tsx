"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AboutProps } from "@/types/Types";
import Dots from "../../src/images/dots.svg";

const aboutContent = {
  heading: {
    title: "Transforming Spaces, Defining Futures",
    subtitle: "About Us",
  },
  content: {
    img: "/src/images/architects.jpg",
    title:
      "Revolutionizing Architecture: Crafting Inspirational Spaces for a Bold Tomorrow",
    description:
      "We are dedicated to revolutionizing the architectural landscape by crafting inspirational spaces that transcend conventional boundaries, paving the way for a bold and visionary tomorrow.",
    btn: {
      href: "/about",
      label: "Learn More",
    },
  },
};

const About: React.FC<AboutProps> = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScroll = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);
  const imgScrollTwo = useTransform(scrollYProgress, [0, 1], ["100%", "100%"]);

  return (
    <section>
      <div className={`${className}`} ref={ref}>
        <div className="container px-4 mx-auto">
          <div className="text-center lg:max-w-xl mx-auto mb-2 lg:mb-2 relative z-[5]">
            {aboutContent.heading.subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-xs mb-4 inline-block text-gray-500"
              >
                {aboutContent.heading.subtitle}
              </motion.span>
            )}
            {aboutContent.heading.title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.3,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="text-2xl lg:text-4xl"
              >
                {aboutContent.heading.title}
              </motion.h2>
            )}
          </div>
          <div className="lg:flex justify-center">
            <div className="lg:w-8/12 lg:flex gap-20 items-center">
              <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
                <motion.div
                  style={{ y: imgScroll, marginBottom: "5rem" }}
                  className="z-[2] relative "
                >
                  <Image
                    className="object-cover w-full lg:max-w-2xl object-center h-[550px]"
                    src={require("/src/images/architects.jpg")}
                    alt="Architecture"
                    width={550}
                    height={550}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.4,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  style={{ y: imgScrollTwo }}
                  className="absolute bottom-0 lg:bottom-28 -left-28 z-[1]"
                >
                  <Image
                    src={Dots}
                    alt="Decoration"
                    width={200}
                    height={200}
                    className="w-64"
                  />
                </motion.div>
              </div>
              <div className="lg:w-6/12">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="text-2xl text-gray-800 mb-6 "
                >
                  {aboutContent.content.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.4,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="leading-relaxed mb-7 text-gray-500"
                >
                  {aboutContent.content.description}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className=""
                >
                  <Link
                    className="transition-all duration-300 ease-in-out text-sm tracking-[2px] font-bold uppercase bg-green-600 py-4 px-5 text-white inline-block hover:bg-white hover:text-green-600 hover:shadow-xl"
                    href={"/about"}
                  >
                    {aboutContent.content.btn.label}
                  </Link>
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
