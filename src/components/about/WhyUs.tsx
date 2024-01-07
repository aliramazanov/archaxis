"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { LegacyRef, useRef } from "react";
import { BiArch, BiHardHat, BiSolidUser } from "react-icons/bi";
import Image from "next/image";
import { PropTypes } from "@/types/Types";

const whyUsContent = {
  heading: {
    title: "Why Choose Archaxis?",
    subtitle: "Discover the Advantages of Partnering with Us",
  },
  whyUsItems: [
    {
      icon: BiHardHat,
      title: "Expertise",
      desc: "Our team of seasoned architects and engineers bring a wealth of expertise to every project, ensuring innovative and efficient solutions tailored to your needs.",
    },
    {
      icon: BiArch,
      title: "Architectural Excellence",
      desc: "At Archaxis, we strive for architectural excellence in every design. Our commitment to quality craftsmanship and attention to detail sets us apart in the industry.",
    },
    {
      icon: BiSolidUser,
      title: "Client-Centric Approach",
      desc: "We prioritize our clients, fostering open communication and collaboration throughout the entire project. Your vision is our inspiration, and your satisfaction is our top priority.",
    },
  ],
};

const WhyUs: React.FC<PropTypes> = ({ className }) => {
  const ref: LegacyRef<HTMLDivElement> | undefined = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScroll: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [30, -30]
  );

  return (
    <section>
      <div className={className} ref={ref}>
        <div className="container px-4 mx-auto">
          <div className="text-center lg:max-w-xl mx-auto mb-20 lg:mb-32">
            {whyUsContent.heading.subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-xs mb-5 inline-block text-gray-500"
              >
                {whyUsContent.heading.subtitle}
              </motion.span>
            )}
            {whyUsContent.heading.title && (
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.5, duration: 0.3 },
                }}
                viewport={{ once: true }}
                className="text-2xl lg:text-4xl"
              >
                {whyUsContent.heading.title}
              </motion.h2>
            )}
          </div>
          <div className="lg:flex justify-center">
            <div className="lg:w-8/12 lg:flex gap-20 items-start">
              <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.6, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  style={{ y: imgScroll }}
                >
                  <Image
                    className="object-cover object-center !w-full h-[500px] lg:w-max-2xl"
                    src={"/images6.jpg"}
                    alt=""
                    width={900}
                    height={600}
                  />
                </motion.div>
              </div>
              <div className="lg:w-6/12">
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.9, duration: 0.3 },
                  }}
                  viewport={{ once: true }}
                  className="list-none"
                >
                  {whyUsContent.whyUsItems.map((item, index) => (
                    <li
                      className="flex space-x-4 items-start mb-7"
                      key={item.title}
                    >
                      <span className="text-xl grow-0 flex-none inline-flex justify-center items-center w-12 h-12 rounded-full relative bg-[#7062c3]">
                        {<item.icon className="z-20 relative text-white" />}
                      </span>
                      <div className="">
                        <h3 className="text-gray-800 text-lg font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-500">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
