"use client";
import { ProjectProps } from "@/types/Types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PostCard: React.FC<ProjectProps> = ({ project, index }) => {
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
        <Link href={`/projects/${project.slug}`}>
          <Image
            className="object-cover object-center h-96 !max-w-full"
            src={project.image}
            alt="Ali Ramazanov"
            width={1000}
            height={650}
          />
        </Link>
        <div className="py-8 px-2">
          <span className="block mb-1 text-gray-500">{project.role}</span>
          <h3 className="mb-4">
            <Link
              href={`/projects/${project.slug}`}
              className="text-2xl leading-none"
            >
              {project.title}
            </Link>
          </h3>
        </div>
      </motion.div>
    </section>
  );
};

export default PostCard;
