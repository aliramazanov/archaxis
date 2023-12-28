import React from "react";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Testimonials from "@/components/Testimonials";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Hero className="pt-32 pb-0 lg:pb-10" />
      <About className="py-16 lg:py-32 overflow-hidden" />
      <Works className="py-16 pt-32 lg:py-32" />
      <Testimonials className="py-16 lg:py-32" />
    </React.Fragment>
  );
};

export default Home;
