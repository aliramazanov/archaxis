import Hero from "@/components/PagesHero";
import StayInTouch from "@/components/StayInTouch";
import Posts from "@/components/blog/Posts";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <Hero
        className="pt-36 pb-20"
        title="Recent Updates"
        subtitle="Our Blog"
      />
      <Posts
        className="pt-0 pb-48"
        itemsPerPage={6}
        params={{
          slug: undefined,
        }}
      />
      <StayInTouch className="py-16 pt-48 lg:py-32 bg-green-600" />
    </React.Fragment>
  );
};

export default page;
