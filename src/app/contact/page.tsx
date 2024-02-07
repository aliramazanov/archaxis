import ContactForm from "@/components/ContactForm";
import Hero from "@/components/PagesHero";
import React from "react";

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
