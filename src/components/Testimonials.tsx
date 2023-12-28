import { TestimonialsProps } from "@/types/Types";
import React, { useState, useEffect } from "react";

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  return (
    <section>
      <div className={`${className}`}></div>
    </section>
  );
};

export default Testimonials;
