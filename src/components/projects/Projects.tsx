"use client";
import { ItemTypes, ProjectTypes } from "@/types/Types";
import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ReacrPaginate from "react-paginate";

const Items: React.FC<ItemTypes> = ({ currentItems }) => {
  return (
    <React.Fragment>
      {currentItems &&
        currentItems.map((project: any, index: number) => {
          index *= 0.5;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index,
                  duration: 0.3,
                },
              }}
              viewport={{ once: true }}
              className="relative overflow-hidden w-full lg:w-6/12 p-2 group"
            >
              <Link
                className="overflow-hidden block relative "
                href={project.url}
              >
                <Image
                  className="object-cover object-center h-[400px] !max-w-full duration-300 transition-all ease-in-out group-hover:scale-105"
                  src={project.image}
                  alt="Image"
                  width={1060}
                  height={640}
                />
              </Link>
              <div className="py-8 px-2">
                <span className="block mb-1 text-gray-500">{project.role}</span>
                <h3 className="mb-4">
                  <Link className="text-2xl leading-none" href={project.url}>
                    {project.title}
                  </Link>
                </h3>
              </div>
            </motion.div>
          );
        })}
    </React.Fragment>
  );
};

const Projects: React.FC<ProjectTypes> = ({ className, itemsPerPage }) => {
  const items = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  console.log(items);

  const [currentItems, setCurrentItems] = useState<string[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [clcikPaginate, setClcikPaginate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    //@ts-ignore
    setCurrentItems(Array.from(items.slice(itemOffset, endOffset)));

    setPageCount(Math.ceil(items.length / itemsPerPage));

    if (clcikPaginate === true) {
      ref.current?.scrollIntoView({
        top: -50,
        behavior: "smooth",
      } as ScrollIntoViewOptions);
      setClcikPaginate(false);
    }
  }, [itemOffset, itemsPerPage, clcikPaginate, items]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setClcikPaginate(true);
    setItemOffset(newOffset);
  };

  if (!items) return null;

  return (
    <section className={className}>
      <div className="container px-4 mx-auto">
        <div className="lg:w-10/12 mx-auto flex flex-wrap mb-10">
          <Items currentItems={currentItems} />
        </div>
        <div className="lg:w-10/12 mx-auto flex flex-wrap">
          <ReacrPaginate
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="Previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousLinkClassName="page-item"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
