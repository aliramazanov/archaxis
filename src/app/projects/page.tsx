import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/PagesHero";
import Projects from "@/components/projects/Projects";
import CTA from "@/components/projects/CTA";

const page = () => {
  return (
    <React.Fragment>
      <Hero
        className="pt-36 pb-16"
        title="Projects"
        subtitle="Take a look at our projects"
      />
      <Projects className="pt-0 pb-44" itemsPerPage={4} />
      <CTA
        className="py-32 lg:py-32 bg-green-600"
        ctaLabel="Get in touch"
        ctaLink="contact/"
        ctaTitle="Do you have a project in your mind?"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id suscipit nulla sit similique. Placeat quis magnam, dolorum maiores id voluptatum!
        "
      />
    </React.Fragment>
  );
};

export default page;
