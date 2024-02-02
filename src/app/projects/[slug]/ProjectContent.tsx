"use client";
import React from "react";
import { compareDesc, format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getMDXComponent } from "next-contentlayer/hooks";
import { Project, allPosts } from "contentlayer/generated";
import PostCard from "@/components/projects/PostCard";

interface ProjectContentProps {
  project: Project;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  const allProjects = allPosts;
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  let MDXContent: React.FC<{}> = () => null;

  if (!projects) return null;

  if (project) {
    MDXContent = getMDXComponent(project.body.code);
  }

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="pt-44 pb-20 lg:pb-36 container px-4 mx-auto"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-center text-4xl lg:text-6xl font-medium text-zinc-900">
              {project.title}
            </h1>
            <p className="text-zinc-500 mt-10">
              <span className="inline-flex space-x-3">
                <span className="">
                  {format(parseISO(project.date), "LLL d, yyyy")}
                </span>
                <span>&#8226;</span>
                <span>{project.role}</span>
              </span>
            </p>
          </div>
          <div className="mb-16">
            <Image
              src={project.image}
              alt="Image"
              width={1000}
              height={650}
              className="object-cover object-top"
            />
          </div>
          <article className="prose mx-auto max-w-2xl">
            <div className="mx-auto max-w-2xl mb-10">
              <div className="flex justify-between">
                <div className="border-l border-gray-200 relative pl-3 before:content-[''] before:top-0 before:left-[1px] before:absolute before:h-7 before:w-[1px] before:bg-green-600">
                  <span className="block text-gray-400">Client</span>
                  <span>{project.client}</span>
                </div>
                <div className="border-l border-gray-200 relative pl-3 before:content-[''] before:top-0 before:left-[1px] before:absolute before:h-7 before:w-[1px] before:bg-green-600">
                  <span className="block text-gray-400">Year</span>
                  <span>{project.year}</span>
                </div>
                <div className="border-l border-gray-200 relative pl-3 before:content-[''] before:top-0 before:left-[1px] before:absolute before:h-7 before:w-[1px] before:bg-green-600">
                  <span className="block text-gray-400">Role</span>
                  <span>{project.role}</span>
                </div>
              </div>
            </div>
            {MDXContent && <MDXContent />}
          </article>
        </div>
        <div className="max-w-4xl mx-auto mt-14 lg:mt-28">
          <h2 className="text-2xl text-gray-700 mb-10">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects
              .filter((a: { title: any }) => project.title !== a.title)
              .map((item: any, index: number) => {
                if (index > 2) return null;
                return <PostCard key={index} index={index} project={item} />;
              })}
            <div>
              <div className="flex justify-center mt-10">
                <Link
                  href={"/project"}
                  className="transition-all duration-300 ease-in-out text-xs tracking-[2px] font-bold uppercase bg-green-600 py-4 px-5 text-white hover:bg-white hover:text-green-600 hover:shadow-2xl"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectContent;
