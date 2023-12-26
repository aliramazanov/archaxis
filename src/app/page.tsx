import About from "@/components/About";
import Hero from "@/components/Hero";
import React from "react";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Hero className="pt-32 pb-0 lg:pb-10" />
      <About className="py-16 lg:py-32 overflow-hidden" />
    </React.Fragment>
  );
};

export default Home;
