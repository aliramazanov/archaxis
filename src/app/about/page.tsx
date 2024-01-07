import Testimonials from "@/components/Testimonials";
import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import Team from "@/components/about/Team";
import WhyUs from "@/components/about/WhyUs";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <Hero className="pt-36 pb-16" />
      <Story className="" />
      <WhyUs className="pt-32 pb-0" />
      <Testimonials className="py-16 lg:py-20" />
      <Team className="" />
    </React.Fragment>
  );
};

export default page;
