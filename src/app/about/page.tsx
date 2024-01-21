import StayInTouch from "@/components/StayInTouch";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/PagesHero";
import Story from "@/components/about/Story";
import Team from "@/components/about/Team";
import WhyUs from "@/components/about/WhyUs";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <Hero
        className="pt-36 pb-16"
        title="Shaping Tomorrow's Terrain with Today's Visionary Blueprint"
        subtitle="About Us"
      />
      <Story className="" />
      <WhyUs className="pt-32 pb-0" />
      <Testimonials className="py-16 lg:py-20" />
      <Team className="py-16" />
      <StayInTouch className="py-16 pt-32 mt-10 lg:py-28 bg-green-700" />
    </React.Fragment>
  );
};

export default page;
