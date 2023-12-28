"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsProps } from "@/types/Types";
import "swiper/css";

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  return (
    <section>
      <div className={`${className}`}></div>
    </section>
  );
};

export default Testimonials;
