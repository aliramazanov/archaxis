"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RxTwitterLogo } from "react-icons/rx";
import { SlSocialLinkedin } from "react-icons/sl";
import { PropTypes } from "@/types/Types";

const teamContent = {
  heading: {
    title: "archaxis. Architecture",
    subtitle: "Innovative Design for a Transformative Future",
    desc: "Unleashing the Power of Creativity in Architectural Excellence",
  },
  team: [
    {
      image: "/person1.jpg",
      name: "Jane Moore",
      role: "Principal Architect",
      twitter: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      image: "/person2.jpg",
      name: "Alexandra Darya",
      role: "CEO & Head of Architecture",
      twitter: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      image: "/person3.jpg",
      name: "Billy Specter",
      role: "Head of Engineering",
      twitter: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      image: "/person4.jpg",
      name: "John Doe",
      role: "Design Architect",
      twitter: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      image: "/person5.jpg",
      name: "John Doe",
      role: "Design Architect",
      twitter: "twitter.com",
      linkedin: "linkedin.com",
    },
    {
      image: "/person6.jpg",
      name: "Jane Doe",
      role: "Design Architect",
      twitter: "twitter.com",
      linkedin: "linkedin.com",
    },
  ],
};

const Team: React.FC<PropTypes> = ({ className }) => {
  return (
    <section>
      <div className={className}>
        <div className="container px-4 mx-auto">
          <div className="lg:flex justify-center mb-4 lg:mb-28">
            <div className="w-full lg:w-8/12 lg:flex gap-7 items-center">
              <div className="lg:w-7/12 mb-5 lg:mb-0">
                {teamContent.heading.subtitle && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.2,
                        duration: 0.3,
                      },
                    }}
                    viewport={{ once: true }}
                    className="uppercase tracking-[3px] text-xs text-gray-500 mb-5 inline-block"
                  >
                    {teamContent.heading.subtitle}
                  </motion.span>
                )}
                {teamContent.heading.title && (
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.5,
                        duration: 0.3,
                      },
                    }}
                    viewport={{ once: true }}
                    className="text-2xl lg:text-4xl"
                  >
                    {teamContent.heading.title}
                  </motion.h2>
                )}
              </div>
              <div className="lg:w-5/12 self-end">
                {teamContent.heading.desc && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.5,
                        duration: 0.6,
                      },
                    }}
                    viewport={{ once: true }}
                    className="text-gray-500"
                  >
                    {teamContent.heading.desc}
                  </motion.p>
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:w-10/12 mx-auto">
            {teamContent.team.map((person, index) => {
              index *= 0.2;
              return (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index,
                      duration: 0.4,
                    },
                  }}
                  viewport={{ once: true }}
                  className="bg-white relative overflow-hidden"
                >
                  <Link href={"#"}>
                    <Image
                      width={600}
                      height={600}
                      src={person.image}
                      alt="Person"
                      className="object-cover object-top w-full !max-h-72 !max-w-full"
                    />
                  </Link>
                  <div className="p-8">
                    <h3 className="mb-1">{person.name}</h3>
                    <p className="text-gray-500 uppercase text-sm tracking-[1px] mb-4">
                      {person.role}
                    </p>
                    <div className="mt-5 flex space-x-5 items-center ">
                      {person.twitter && (
                        <Link
                          className="duration-300 transition-all ease-in-out hover:opacity-35"
                          href={person.twitter}
                        >
                          <RxTwitterLogo className="text-lg" />
                        </Link>
                      )}
                      {person.linkedin && (
                        <Link
                          className="duration-300 transition-all ease-in-out hover:opacity-35"
                          href={person.linkedin}
                        >
                          <SlSocialLinkedin className="text-lg" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
