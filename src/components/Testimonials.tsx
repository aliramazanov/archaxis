"use client";
import { TestimonialsProps } from "@/types/Types";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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
        "Choosing Archaxis for our dream home was the best decision we made. Their team's creativity and attention to detail turned our ideas into a living masterpiece. From the initial concept discussions to the final touches, Archaxis showcased unparalleled professionalism. The architects seamlessly blended modern design with our lifestyle preferences, creating a harmonious living space. They navigated challenges with grace, ensuring a stress-free experience. Our home is not just a structure; it's a reflection of our personality.",
    },
    {
      img: require("/src/images/person3.jpg"),
      name: "David Chambers",
      role: "Business Owner",
      quote:
        "Choosing Archaxis for our dream home was the best decision we made. Their team's creativity and attention to detail turned our ideas into a living masterpiece. From the initial concept discussions to the final touches, Archaxis showcased unparalleled professionalism. The architects seamlessly blended modern design with our lifestyle preferences, creating a harmonious living space. They navigated challenges with grace, ensuring a stress-free experience. Our home is not just a structure; it's a reflection of our personality.",
    },
    {
      img: require("/src/images/person2.jpg"),
      name: "Lily Thompson",
      role: "Real Estate Agent",
      quote:
        "Choosing Archaxis for our dream home was the best decision we made. Their team's creativity and attention to detail turned our ideas into a living masterpiece. From the initial concept discussions to the final touches, Archaxis showcased unparalleled professionalism. The architects seamlessly blended modern design with our lifestyle preferences, creating a harmonious living space. They navigated challenges with grace, ensuring a stress-free experience. Our home is not just a structure; it's a reflection of our personality.",
    },
  ],
};

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(null);
  const [isBeginning, setIsBeginning] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const swiper = (sliderRef.current as any).swiper;
      if (swiper) {
        setIsEnd(swiper.isEnd);
        setIsBeginning(swiper.isBeginning);
      }
    }
  }, []);

  const prevHandler = () => {
    console.log("Prev clicked");
    if (!sliderRef.current) return;
    (sliderRef.current as any).swiper.slidePrev();
  };

  const nextHandler = () => {
    console.log("Next clicked");
    if (!sliderRef.current) return;
    (sliderRef.current as any).swiper.slideNext();
  };

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
                    className="tracking-[3px] text-xl mb-4 inline-block text-gray-500"
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
                    <div className="block md:flex overflow-y-visible mt-4 items-stretch bg-white">
                      <div className="md:w-4/12 md:flex md:items-center">
                        <Image
                          width={300}
                          height={300}
                          src={testimonial.img}
                          alt={testimonial.name}
                          className="object-cover object-center !h-full !w-full"
                        />
                      </div>

                      <div className="md:w-8/12 p-4 md:p-16 flex items-center mt-8">
                        <div className="flex flex-col">
                          <blockquote className="lg:text-lg sm:text-xs md:text-base mb-4 text-lg">
                            <span className="lg:text-9xl md:text-4xl sm:text-2xl mr-4 leading-[0] relative text-green-600">
                              &ldquo;
                            </span>
                            {testimonial.quote}
                          </blockquote>
                          <div className="flex space-x-3 text-sm mt-6">
                            <strong>{testimonial.name}</strong>
                            <span>&mdash;</span>
                            <span>{testimonial.role}</span>
                          </div>
                        </div>
                        <div className="ml-16 flex items-center gap-2">
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
