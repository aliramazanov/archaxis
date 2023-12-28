"use client";
import { WorkProps } from "@/types/Types";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BiHardHat,
  BiPaintRoll,
  BiNote,
  BiBulb,
  BiLayer,
  BiOutline,
} from "react-icons/bi";

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
        "Commencing each project with precision and foresight, we initiate the journey with the utmost attention to detail. In this crucial phase, our team, equipped with the industry's best practices, collaborates with you to define the project scope, goals, and parameters.",
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
        "Unleashing creativity with a stroke of innovation, our team transforms visions into tangible concepts, crafting unique and inspiring designs that redefine architectural boundaries.",
      btn: {
        href: "#",
        label: "Discover More",
      },
    },
    {
      number: "03",
      icon: BiNote,
      title: "Documentation Process",
      description:
        "We carefully write down all the important details about your project to make sure everything is clear and ready for the next steps.",
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
        "With hard hats on and creativity in full swing, we shape and refine your ideas into a concrete design, ensuring a solid foundation for your project to flourish.",
      btn: {
        href: "#",
        label: "Uncover Details",
      },
    },
    {
      icon: BiBulb,
      title: "Construction Administration",
      description:
        "Buiding your project from blueprint to reality, we oversee every detail of the construction process to ensure seamless execution. More info on our comprehensive construction administration services.",
      btn: {
        href: "#",
        label: "More Info",
      },
    },
    {
      icon: BiOutline,
      title: "Evaluation",
      description:
        "A critical analysis to refine and enhance, we meticulously assess every aspect of your project.",
      btn: {
        href: "#",
        label: "Read More",
      },
    },
    {
      icon: BiLayer,
      title: "Finalization and Delivery",
      description:
        "Bringing your vision to life, we finalize the details and ensure everything is in place for a smooth delivery. Our commitment to excellence culminates in the successful completion of your project.",
      btn: {
        href: "#",
        label: "Explore Completion",
      },
    },
  ],
};

const Works: React.FC<WorkProps> = ({ className }) => {
  return (
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
                    className="tracking-[3px] text-sm mb-5 inline-block text-gray-500"
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
          <div className="grid"></div>
        </div>
      </div>
    </section>
  );
};

export default Works;
