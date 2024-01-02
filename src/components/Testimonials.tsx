"use client";
import { TestimonialsProps } from "@/types/Types";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowRight from "./Icons/ArrowRight";

const testimonialsContent = {
  heading: {
    title: "What They Say About Us",
    subtitle: "Testimonials",
  },
  testimonials: [
    {
      img: require("/src/images/person1.jpg"),
      name: "Jane Duke",
      role: "Homeowner",
      quote:
        "Choosing Archaxis for our dream home was the best decision we made. Their team's creativity and attention to detail turned our ideas into a living masterpiece. From the initial concept discussions to the final touches, Archaxis showcased unparalleled professionalism.",
    },
    {
      img: require("/src/images/person3.jpg"),
      name: "David Chambers",
      role: "Business Owner",
      quote:
        "Choosing Archaxis for our dream home was the best decision we made. Their team's creativity and attention to detail turned our ideas into a living masterpiece. From the initial concept discussions to the final touches, Archaxis showcased unparalleled professionalism.",
    },
    {
      img: require("/src/images/person2.jpg"),
      name: "Lily Thompson",
      role: "Real Estate Agent",
      quote:
        "Choosing Archaxis for our dream home was the best decision we made. Their team's creativity and attention to detail turned our ideas into a living masterpiece. From the initial concept discussions to the final touches, Archaxis showcased unparalleled professionalism.",
    },
  ],
};

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  return (
    <section>
      <div className={`${className} overflow-hidden`}>
        <div className="container px-4 mx-auto">
          <div className="flex justify-center">
            <div className="w-full md:w-8/12 flex gap-0 items-center">
              <div className="text-center w-auto md:w-screen max-w-full md:max-w-xl mx-auto mb-16">
                {testimonialsContent.heading.subtitle && (
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
                    className="tracking-[3px] uppercase text-md mb-4 inline-block text-gray-500"
                  >
                    {testimonialsContent.heading.subtitle}
                  </motion.span>
                )}

                {testimonialsContent.heading.title && (
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
                    className="text-2xl lg:text-4xl mt-2"
                  >
                    {testimonialsContent.heading.title}
                  </motion.h2>
                )}
              </div>
            </div>
          </div>
          <div className="lg:flex justify-start lg:justify-center">
            <motion.div
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
              className="w-full lg:w-10/12 lg:flex gap-0 items-center"
            >
              <Swiper>
                {testimonialsContent.testimonials.map((testimonial, idx) => (
                  <SwiperSlide
                    className="w-full cursor-pointer"
                    key={testimonial.name}
                  >
                    <div className="block md:flex overflow-y-visible items-stretch bg-white">
                      <div className="md:w-4/12 md:flex md:items-center">
                        <Image
                          width={500}
                          height={500}
                          src={testimonial.img}
                          alt={testimonial.name}
                          className="object-cover object-center !h-full !w-full"
                        />
                      </div>

                      <div className="md:w-8/12 md:p-8 lg:p-16 flex items-center">
                        <div className="flex flex-col mt-4">
                          <blockquote className="mb-4 text-lg">
                            <span className="text-green-600 lg:text-7xl md:text-6xl sm:text-4xl">
                              &ldquo;
                            </span>
                            <span className="lg:text-2xl md:text-base sm:text-xs">
                              {testimonial.quote}
                            </span>
                          </blockquote>
                          <div className="flex space-x-3 text-sm mt-6">
                            <strong>{testimonial.name}</strong>
                            <span>&mdash;</span>
                            <span>{testimonial.role}</span>
                          </div>
                        </div>
                        <div className="ml-16  items-center gap-2 hidden lg:flex">
                          Swipe
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
