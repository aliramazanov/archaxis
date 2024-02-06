import { SlugParams } from "@/types/Types";
import { allPosts, allProjects } from "contentlayer/generated";
import React from "react";
import BlogContent from "../BlogContent";

export async function generateStaticParams() {
  const posts = await allPosts;
  return posts.map((post) => ({ slug: post.slug }));
}

export const generateMetadata = async ({ params }: { params: SlugParams }) => {
  const posts = await allPosts;
  const post = posts.find((post) => {
    return post._raw.flattenedPath === "blog/" + params.slug;
  });

  return { title: post?.title, excerpt: post?.excerpt };
};

interface PageProps {
  params: SlugParams;
}

const page: React.FC<PageProps> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  return <div>{post && <BlogContent post={post} />}</div>;
};

export default page;
