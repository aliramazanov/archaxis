"use client";
import { PropTypes } from "@/types/Types";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import img1 from "../../../public/images1.jpg";
import img2 from "../../../public/images2.jpg";
import img3 from "../../../public/images3.png";
import img4 from "../../../public/images4.jpg";
import img5 from "../../../public/images5.jpg";
import post1 from "../../../public/post1.jpg";
import post2 from "../../../public/post2.jpg";

const storyContent = {
  column1: {
    images: [
      {
        img: img1,
        alt: "Image related to architecture",
        width: 1100,
        height: 1100,
        tailwind: "h-56 lg:h-96 rounded-2xl",
      },
      {
        img: img2,
        alt: "Image related to architecture",
        width: 1100,
        height: 1100,
        tailwind: "h-56 lg:h-96 rounded-2xl",
      },
    ],
  },
  column2: {
    images: [
      {
        img: img3,
        alt: "Image related to architecture",
        width: 1100,
        height: 1100,
        tailwind: "h-56 lg:h-96 rounded-2xl",
      },
      {
        img: img4,
        alt: "Image related to architecture",
        width: 1100,
        height: 1100,
        tailwind: "h-56 lg:h-96 rounded-2xl",
      },
      {
        img: img5,
        alt: "Image related to architecture",
        width: 1100,
        height: 1100,
        tailwind: "h-56 lg:h-96 rounded-2xl",
      },
    ],
  },
  column3: {
    images: [
      {
        img: post1,
        alt: "Image related to architecture",
        width: 1100,
        height: 1100,
        tailwind: "h-56 lg:h-96 rounded-2xl",
      },
      {
        img: post2,
        alt: "Image related to architecture",
        width: 1100,
        height: 1100,
        tailwind: "h-56 lg:h-96 rounded-2xl",
      },
    ],
  },
  storyText: {
    heading: "Crafting Spaces, Shaping Dreams",
    p1: "We dedicated to creating cutting-edge designs that seamlessly blend functionality with aesthetics. Our portfolio showcases a diverse range of projects, from residential and commercial spaces to cultural and institutional developments. Committed to sustainability, we integrate eco-friendly practices into our designs, ensuring a harmonious balance between the built environment and nature.",
    p2: "We are a forward-thinking architectural firm renowned for its innovative and functional designs. Specializing in residential and commercial projects, we combine creativity with practicality to bring our clients' visions to life. Our experienced team is committed to delivering sustainable solutions that prioritize environmental responsibility. ",
    signature: "/sign.svg",
    name: "Bill Smith",
    role: "CEO & Founder",
  },
};

const Story: React.FC<PropTypes> = ({ className }) => {
  return (
    <section>
      <div className={className}>
        <div className="container px-4 mx-auto">
          <div className="md:flex w-full md:w-10/12 mx-auto items-stretch md:gap-7">
            <div className="md:w-4/12 self-center space-y-7 mb-7 md:mb-0">
              {storyContent.column1.images.map((item, idx) => {
                idx *= 0.5;
                return (
                  <motion.div
                    key={idx}
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
                  >
                    <Image
                      width={item.width}
                      height={item.height}
                      alt={item.alt}
                      src={item.img}
                      className={`${item.tailwind}`}
                    />
                  </motion.div>
                );
              })}
            </div>
            <div className="md:w-4/12 self-center space-y-7 mb-7 md:mb-0">
              {storyContent.column2.images.map((item, idx) => {
                idx *= 0.5;
                return (
                  <motion.div
                    key={idx}
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
                  >
                    <Image
                      alt={item.alt}
                      src={item.img}
                      className={`${item.tailwind}`}
                    />
                  </motion.div>
                );
              })}
            </div>
            <div className="md:w-4/12 self-center space-y-7 mb-7 md:mb-0">
              {storyContent.column3.images.map((item, idx) => {
                idx *= 0.5;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.7,
                        duration: 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                  >
                    <Image
                      alt={item.alt}
                      src={item.img}
                      className={`${item.tailwind}`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.7,
                duration: 0.5,
              },
            }}
            viewport={{ once: true }}
            className="lg:flex flex-col mt-32 text-left w-full lg:w-6/12 mx-auto"
          >
            {storyContent.storyText.heading && (
              <h2 className="text-2xl md:text-3xl text-gray-800 mb-5">
                {storyContent.storyText.heading}
              </h2>
            )}
            {storyContent.storyText.p1 && (
              <p className="leading-relaxed text-gray-800 mb-6">
                {storyContent.storyText.p1}
              </p>
            )}
            {storyContent.storyText.p2 && (
              <p className="leading-relaxed text-gray-800 mb-6">
                {storyContent.storyText.p2}
              </p>
            )}
            <div className="image mt-4">
              <Image
                alt={storyContent.storyText.name}
                src={storyContent.storyText.signature}
                width={300}
                height={100}
              />
              <strong className="block mb-2 mt-4 text-gray-800 font-medium">
                {storyContent.storyText.name}
                <span className="text-gray-400 ml-2">
                  {storyContent.storyText.role}
                </span>
              </strong>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
