"use client";
import { StayInTouchProps } from "@/types/Types";
import { motion } from "framer-motion";
import React from "react";
import { BiSolidPaperPlane } from "react-icons/bi";

const stiContent = {
  heading: {
    title: "Never Miss an Update!",
    subtitle: "Join to our community",
    description:
      "Stay in the loop and never miss a beat by joining our vibrant community! Don't miss out on the chance to connect, learn, and stay updated.",
  },
  form: {
    placeholder: "Enter your email",
  },
};

const StayInTouch: React.FC<StayInTouchProps> = ({ className }) => {
  return (
    <section>
      <div className={`${className}`}>
        <div className="container px-4 mx-auto">
          <div className="flex justify-center">
            <div className="w-8/12 flex gap-0 items-center">
              <div className="text-center w-center max-w-md mx-auto mb-10">
                {stiContent.heading.subtitle && (
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
                    className="uppercase tracking-[3px] text-sm mb-6 inline-block text-white"
                  >
                    {stiContent.heading.subtitle}
                  </motion.span>
                )}
                {stiContent.heading.title && (
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
                    className="text-2xl lg:text-4xl text-white"
                  >
                    {stiContent.heading.title}
                  </motion.h2>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto justify-center">
            {stiContent.form.placeholder && (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.5,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                action="submit"
                className="flex relative w-auto max-w-xl mx-auto justify-center gap-5 items-center"
              >
                <input
                  required
                  type="email"
                  placeholder={stiContent.form.placeholder}
                  className="appearance-none bg-white py-4 px-7 w-auto lg:w-screen !pr-16 max-w-md shadow-md rounded-full outline  outline-none"
                />
                <button
                  type="submit"
                  className="appearance-none absolute top-1 right-1 bg-[#7062c3] hover:bg-[#4f4491] text-white shadow-md w-12 h-12 rounded-full flex items-center justify-center"
                >
                  <BiSolidPaperPlane />
                </button>
              </motion.form>
            )}
            {stiContent.heading.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.9,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="w-auto max-w-md mx-auto mt-10 text-center text-white text-opacity-60"
              >
                {stiContent.heading.description}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayInTouch;
