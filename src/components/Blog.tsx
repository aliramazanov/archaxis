"use client";
import { PropTypes, PostCardProps } from "@/types/Types";
import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const blogContent = {
  heading: {
    title: "Recent Updates",
    subtitle: "Our Blog",
    description:
      "Discover the intricate world of architecture through our blog, where we delve into the art and science of designing spaces that shape our daily lives. Explore the latest trends, innovative technologies, and timeless principles that define architectural excellence. From iconic structures that stand as testaments to human creativity to sustainable and eco-friendly designs revolutionizing the field, our blog is your gateway to the dynamic realm of architecture.",
  },
};

const PostCard: React.FC<PostCardProps> = ({ index, post }) => {
  index *= 0.05;
  const imagePath = post.image.startsWith("/") ? post.image : `/${post.image}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: index, duration: 0.5 },
      }}
      viewport={{ once: true }}
      className="bg-white relative overflow-hidden group"
    >
      <Link href={post.url} className="relative block overflow-hidden">
        <Image
          className="object-cover object-center h-52 duration-300 transition-all ease-in-out group-hover:scale-110"
          src={imagePath}
          alt={post.title}
          width={1064}
          height={640}
        />
      </Link>
      <div className="p-8">
        <p className="text-gray-500 mb-4 uppercase text-xs tracking-[1px]">
          {format(parseISO(post.date), "LLL d, yyyy")} &#8226; {post.author}
        </p>
        <h3 className="mb-4">
          <Link href={post.url} className="text-lg leading-none">
            {post.title}
          </Link>
        </h3>
        <p className="">
          <Link
            href={post.url}
            className="text-xs tracking-[2px] uppercase border-b-2 border-green-600 pb-2 inline-block"
          >
            Read More
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

const Blog: React.FC<PropTypes> = ({ className }) => {
  const post = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <section>
      <div className={`${className}`}>
        <div className="container px-4 mx-auto">
          <div className="lg:flex justify-center mb-20">
            <div className="w-full lg:w-8/12 lg:flex gap-0 items-center">
              <div className="lg:w-7/12">
                {blogContent.heading.subtitle && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.05, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500"
                  >
                    {blogContent.heading.subtitle}
                  </motion.span>
                )}
                {blogContent.heading.title && (
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.1, duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className="text-2xl lg:text-4xl mb-4 lg:mb-1"
                  >
                    {blogContent.heading.title}
                  </motion.h2>
                )}
              </div>
              <div className="lg:w-5/12 self-end">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.1, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-gray-500"
                >
                  {blogContent.heading.description}
                </motion.p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full lg:w-10/12 mx-auto">
            {post.slice(0, 3).map((post, idx) => (
              <PostCard key={idx} index={idx} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
