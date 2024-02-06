"use client";
import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import { getMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PostCard from "./PostCard";

const BlogContent: React.FC<{ post: Post }> = ({ post }) => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  let MDXContent: React.FC<{}> = () => null;
  if (!posts) return null;
  if (!posts) {
    console.log("Posts not found");
  } else {
    MDXContent = getMDXComponent(post.body.code);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="pt-44 pb-20 container px-4 mx-auto"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-slate-900 text-center text-4xl/none lg:text-6xl/none font-medium">
            {post.title}
          </h1>
          <p className="text-slate-500 mt-10">
            <span className="inline-flex space-x-3"></span>

            <span>{format(parseISO(post.date), "LLL d, yyyy")}</span>
            <span>&#8226;</span>
            <span>{post.author}</span>
            <span className="mx-3">{post.author}</span>
            {post.categories?.map((category, index: number) => {
              return (
                <Link
                  className="font-medium"
                  key={category.title}
                  href={`blog/categories/${post.slug}`}
                >
                  {category.title}
                  {index < (post.categories?.length ?? 0) - 1 ? "," : ""}
                </Link>
              );
            })}
          </p>
        </div>
        <div className="mb-16">
          <Image
            src={post.image}
            width={1000}
            height={600}
            alt={post.title}
            className="object-cover object-top"
          />
        </div>
        <article className="prose mx-auto max-2-2xl">
          <MDXContent />
        </article>
        <div className="max-w-4xl mx-auto mt-20 lg:mt-32">
          <h2 className="text-2xl text-gray-700 mb-10">More Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts &&
              posts
                .filter((a) => post.title !== a.title)
                .map((item, index) => {
                  if (index > 2) return null;
                  return <PostCard key={index} index={index} post={item} />;
                })}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href={"/blog"}
            className="transition-all duration-300 ease-in-out text-sm tracking-[2px] font-bold uppercase bg-green-600 py-4 px-5 text-white inline-block hover:bg-white hover:text-green-600 hover:shadow-2xl"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogContent;
