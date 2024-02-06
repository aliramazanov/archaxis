import React from "react";
import Hero from "@/components/PagesHero";
import StayInTouch from "@/components/StayInTouch";
import { SlugParams } from "@/types/Types";
import { allPosts } from "contentlayer/generated";
import Posts from "@/components/blog/Posts";

const page = ({ params }: { params: SlugParams }) => {
  const newTitle = params?.slug.replace("-", "");
  let itemsTotal = 0,
    items = null;
  if (params?.slug) {
    items = allPosts.filter((post) =>
      post.categories?.some(
        (category) =>
          category.title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "") === params.slug
      )
    );
    itemsTotal = items.length;
  }
  return (
    <React.Fragment>
      <Hero
        className="pt-52 pb-20 capitalize"
        title={`${newTitle}`}
        subtitle="Category"
      />
      <Posts
        className="pt-0 pb-52 "
        archive={true}
        params={params}
        itemsPerPage={6}
      />
      <StayInTouch className="py-16 pt-64 lg:py-32 bg-green-600" />
    </React.Fragment>
  );
};

export default page;
