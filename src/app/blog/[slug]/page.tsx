import { SlugParams } from "@/types/Types";
import { allPosts, allProjects } from "contentlayer/generated";
import React from "react";

export async function generateStaticParams() {
  const posts = await allPosts;
  return posts.map((post) => ({ slug: post.slug }));
}

export const generateMetadata = async ({ params }: { params: SlugParams }) => {
  const posts = await allPosts;
  console.log("Params Slug:", params.slug);

  const post = posts.find((post) => {
    console.log("Flattened Path:", post._raw.flattenedPath);
    return post._raw.flattenedPath === "projects/" + params.slug;
  });

  console.log("Found Project:", post);

  return { title: post?.title, excerpt: post?.excerpt };
};

const page = () => {
  return (
    <div>
      <React.Fragment></React.Fragment>
    </div>
  );
};

export default page;
