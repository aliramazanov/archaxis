"use client";
import { WorkProps } from "@/types/Types";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  BiBulb,
  BiHardHat,
  BiLayer,
  BiNote,
  BiOutline,
  BiPaintRoll,
} from "react-icons/bi";
import ArrowRight from "./Icons/ArrowRight";

const worksContent = {
  heading: {
    title: "A Different Viewpoint",
    subtitle: "Working with Us",
    description:
      "Embracing innovation and creativity, we go beyond conventional boundaries to offer a fresh and unique approach to architecture. Our team of visionary architects and designers are committed to challenging the status quo, pushing the limits of traditional design to create spaces that inspire and captivate.",
  },
  steps: [
    {
      number: "01",
      icon: BiHardHat,
      title: "Project Initialization",
      description:
        "Embarking on each project with precision and foresight, we initiate the journey with the utmost attention to detail and strategic planning.",
      btn: {
        href: "#",
        label: "Discover More",
      },
    },
    {
      number: "02",
      icon: BiPaintRoll,
      title: "Conceptual Design",
      description:
        "Our team transforms visions into tangible concepts, crafting unique designs that redefine architectural boundaries.",
      btn: {
        href: "#",
        label: "Discover More",
      },
    },
    {
      number: "03",
      icon: BiNote,
      title: "Documentation",
      description:
        "We carefully document all the vital details about your project, ensuring clarity and readiness for the next steps in our thorough process.",
      btn: {
        href: "#",
        label: "Discover More",
      },
    },
  ],
  features: [
    {
      icon: BiHardHat,
      title: "Design Development",
      description:
        "With hard hats on and creativity in full swing, we shape and refine your ideas into a concrete design, ensuring a solid foundation. Our commitment to excellence lies in the successful completion of your project",
      btn: {
        href: "#",
        label: "Uncover Details",
      },
    },
    {
      icon: BiBulb,
      title: "Construction Administration",
      description:
        "Building your project from blueprint to reality, we oversee every detail of the construction process for seamless execution. Learn more about our construction administration services.",
      btn: {
        href: "#",
        label: "More Info",
      },
    },
    {
      icon: BiOutline,
      title: "Evaluation",
      description:
        "A critical analysis to refine and enhance, we meticulously assess every aspect of your project. Our commitment to excellence culminates in the successful completion of your project",
      btn: {
        href: "#",
        label: "Read More",
      },
    },
    {
      icon: BiLayer,
      title: "Finalization and Delivery",
      description:
        "Bringing your vision to life, we finalize details and ensure everything is in place for a smooth delivery. Our commitment to excellence culminates in the successful completion of your project.",
      btn: {
        href: "#",
        label: "Explore Completion",
      },
    },
  ],
};

const Works: React.FC<WorkProps> = ({ className }) => {
  return (
    <React.Fragment>
      <section>
        <div className={`${className}`}>
          <div className="container mx-auto px-4">
            <div className="lg:flex justify-center mb-20 lg:mb-36">
              <div className="w-full lg:w-8/12 lg:flex gap-20 items-center">
                <div className="lg-w-7/12 mb-5 lg:mb-0">
                  {worksContent.heading.subtitle && (
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
                      className="tracking-[3px] text-md uppercase mb-5 inline-block text-gray-500"
                    >
                      {worksContent.heading.subtitle}
                    </motion.span>
                  )}
                  {worksContent.heading.title && (
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
                      {worksContent.heading.title}
                    </motion.h2>
                  )}
                </div>
                <div className="lg:w-5/12 self-end">
                  {worksContent.heading.description && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.6,
                          duration: 0.5,
                        },
                      }}
                      viewport={{ once: true }}
                      className="text-gray-500"
                    >
                      {worksContent.heading.description}
                    </motion.p>
                  )}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 -mb-72 lg:w-10/12 mx-auto">
              {worksContent.steps.map((step, delay) => {
                delay *= 0.2;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: delay,
                        duration: 0.5,
                      },
                    }}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.1 },
                    }}
                    viewport={{ once: true }}
                    className="hover:cursor-pointer group duration-300 pt-16 pl-10 pr-10 pb-8 bg-white relative overflow-hidden hover:bg-[#7062c3] hover:shadow-xl"
                    key={step.title}
                  >
                    <span className="text-[200px] inline-block z-[1] font-semibold absolute -top-[120px] opacity-5 left-0 leading-0 hover:cursor-pointer">
                      {step.number}
                    </span>
                    <div className="absolute top-10 right-10">
                      <span className="text-3xl text-green-600 duration-300 transition-all ease-in-out group-hover:text-white">
                        <step.icon />
                      </span>
                    </div>
                    <div className="mt-20 relative flex z-40 gap-3 items-start">
                      <div className="font-semibold duration-300 transition-all ease-in-out group-hover:text-white group-hover:text-opacity-50">
                        {step.number}
                      </div>
                      <div className="relative flex flex-col z-40 gap-3 items-start">
                        <h3 className=" text-xl mb-4 duration-300 transition-all ease-in-out group-hover:text-white">
                          {step.title}
                        </h3>
                        <p className="leading-relaxed text-base text-gray-500 mb-7 duration-300 transition-all ease-in-out group-hover:text-white">
                          {step.description}
                        </p>
                        <div className=" items-center border-b-2 border-green-600 pb-2 group-hover:border-white">
                          <Link
                            className="flex gap-3 text-sm tracking-[2px] text-gray-600  duration-300 transition-all ease-in-out group-hover:text-white "
                            href={step.btn.href}
                          >
                            {step.btn.label}
                            <ArrowRight className="w-3 h-3 mt-1 duration-300 transition-all ease-in-out group-hover:text-white group-hover:border-white" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="pt-72 lg:pt-64 pb-32 bg-green-700">
          <div className="container px-4 mx-auto">
            <div className="lg:flex justify-center">
              <div className="w-full lg:w-8/12 flex gap-0 items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {worksContent.features.map((feature, delay) => {
                    delay *= 0.2;
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            delay: delay,
                            duration: 0.5,
                          },
                        }}
                        viewport={{ once: true }}
                        key={feature.title}
                        className="relative z-40 flex gap-3 items-start"
                      >
                        <div className="">
                          <span className="text-3xl text-white">
                            <feature.icon />
                          </span>
                        </div>
                        <div className="">
                          <h3 className="text-lg mb-4 text-white">
                            {feature.title}
                          </h3>
                          <p className="leading-relaxed text-base text-white text-opacity-75 mb-7">
                            {feature.description}
                          </p>

                          <div>
                            <Link
                              className="text-sm tracking-[2px] border-b-2 border-white border-opacity-30 pb-2 hover:border-opacity-100 border-dashed text-white duration-300 transition-all ease-in-out"
                              href={feature.btn.href}
                            >
                              {feature.btn.label}
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Works;
