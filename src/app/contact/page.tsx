import React from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/PagesHero";
import ContactForm from "@/components/ContactForm";

const page = () => {
  return (
    <React.Fragment>
      <Hero
        className="pt-36 pb-16"
        title="Contact"
        subtitle="Get In Touch With Us"
      />
      <ContactForm className="pt-5 pb-5" />
    </React.Fragment>
  );
};

export default page;
