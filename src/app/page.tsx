import About from "@/components/About";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import StayInTouch from "@/components/StayInTouch";
import Testimonials from "@/components/Testimonials";
import Works from "@/components/Works";
import React from "react";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Hero className="pt-32 pb-0 lg:pb-10" />
      <About className="py-16 lg:py-32 overflow-hidden" />
      <Works className="py-16 lg:py-16 md:mb-16" />
      <Testimonials className="py-16 lg:py-20" />
      <Blog className="py-16 lg:py-28" />
      <StayInTouch className="py-16 pt-32 -mt-32 lg:py-28 bg-green-700" />
    </React.Fragment>
  );
};

export default Home;
