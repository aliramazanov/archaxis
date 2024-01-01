"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsProps } from "@/types/Types";
import "swiper/css";

const testimonialsContent = {
  heading: {
    title: "What They Say About Us",
    subtitle: "Testimonials",
  },
  testimonials: [
    {
      img: "/src/images/person1.jpg",
      name: "Jane Duke",
      role: "Homeowner",
      quote:
        "Working with Archaxis on our home project was an absolute delight. Their team seamlessly blended creativity with functionality, turning our vision into a breathtaking reality. From conceptualization to execution, their architects demonstrated unparalleled expertise and attention to detail. The result is a home that not only meets our needs but exceeds our expectations in terms of design and innovation. Archaxis navigated challenges with finesse, ensuring a smooth and efficient process.",
    },
    {
      img: "/src/images/person3.jpg",
      name: "David Chambers",
      role: "Business Owner",
      quote:
        "Collaborating with Archaxis on our commercial project was a game-changer. Their innovative approach and meticulous planning transformed our space into a dynamic, functional environment. Archaxis' architects brought a perfect blend of aesthetic flair and practical design, optimizing every square foot for productivity. Their dedication to understanding our business needs and translating them into an inspiring workspace was evident throughout. Archaxis not only met but exceeded our expectations.",
    },
    {
      img: "/src/images/person3.jpg",
      name: "Lily Thompson",
      role: "Real Estate Agent",
      quote:
        "Choosing Archaxis for our dream home was the best decision we made. Their team's creativity and attention to detail turned our ideas into a living masterpiece. From the initial concept discussions to the final touches, Archaxis showcased unparalleled professionalism. The architects seamlessly blended modern design with our lifestyle preferences, creating a harmonious living space. They navigated challenges with grace, ensuring a stress-free experience. Our home is not just a structure; it's a reflection of our personality.",
    },
  ],
};

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  return (
    <section>
      <div className={`${className}`}></div>
    </section>
  );
};

export default Testimonials;
