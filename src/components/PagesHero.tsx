"use client";
import { HeroTypes } from "@/types/Types";
import { motion } from "framer-motion";
import React from "react";

const Hero: React.FC<HeroTypes> = ({ className, title, subtitle }) => {
  return (
    <section>
      <div className={className}>
        <div className="container px-4 mx-auto">
          <div className="lg:flex w-full lg:w-10/12 mx-auto items-center justify-between">
            <div className="text-center lg:max-w-4xl mx-auto">
              {subtitle && (
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.05,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="uppercase tracking-[3px] text-xs text-gray-500 mb-5 inline-block"
                >
                  {subtitle}
                </motion.span>
              )}
              {title && (
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.1,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                  className="text-3xl sm:text-4xl md:text-5xl"
                >
                  {title}
                </motion.h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
