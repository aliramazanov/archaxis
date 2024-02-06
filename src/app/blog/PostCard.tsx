"use client";
import { PostCardProps } from "@/types/Types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PostCard: React.FC<PostCardProps> = ({ post, index }) => {
  index *= 0.5;

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: index, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="relative overflow-hidden"
      >
        <Link href={post.url}>
          <Image
            className="object-cover object-center h-96 !max-w-full"
            src={post.image}
            alt="Ali Ramazanov"
            width={1000}
            height={650}
          />
        </Link>
        <div className="py-8 px-2">
          <span className="block mb-1 text-gray-500">{post.author}</span>
          <h3 className="mb-4">
            <Link href={post.url} className="text-2xl leading-none">
              {post.title}
            </Link>
          </h3>
        </div>
      </motion.div>
    </section>
  );
};

export default PostCard;
