"use client";
import { BlogProps } from "@/types/Types";
import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";

const Items: React.FC<{ currentItems: Post[] }> = ({ currentItems }) => {
  return (
    currentItems &&
    currentItems.map((post, index: number) => {
      index *= 0.5;
      return (
        <motion.div
          key={post.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="bg-white relative overflow-hidden group"
        >
          <Link className="relative block overflow-hidden" href={post.url}>
            <Image
              src={post.image}
              className="object-cover object-center h-48 duration-300 transition-all ease-in-out group-hover:scale-105"
              alt="Project Image"
              width={1000}
              height={650}
            />
          </Link>
          <div className="p-8">
            <p className="text-gray-500 mb-3 uppercase text-xs tracking-[1px]">
              {format(parseISO(post.date), "LLL d, yyyy")} &#8226; {post.author}
            </p>
            <h3 className="mb-4">
              <Link href={post.url} className="text-lg leading-none">
                {post.title}
              </Link>
            </h3>
            <p className="">
              <Link
                className="text-xs tracking-[2px] uppercase border-b-2 pb-2 inline-block border-green-600"
                href={post.url}
              >
                Read More
              </Link>
            </p>
          </div>
        </motion.div>
      );
    })
  );
};

const Posts: React.FC<BlogProps> = ({
  className,
  itemsPerPage,
  archive = false,
  params,
}) => {
  const [currentItems, setCurrentItems] = useState<Post[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [clickPaginate, setClickPaginate] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  let items: Post[] | null = null;

  if (archive === false) {
    items = allPosts.sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );
  } else {
    if (params?.slug) {
      items = allPosts.filter((post) =>
        post.categories?.some(
          (category) =>
            category.title
              .toLowerCase()
              .trim()
              .replace(/[^\w\s-]/g, "")
              .replace(/[\s_-]+/g, "-")
              .replace(/[-&]+/g, "") === params.slug
        )
      );
    }
  }

  useEffect(() => {
    if (!items) return;
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil((items!.length || 0) / itemsPerPage));

    if (clickPaginate === true) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ block: "start", behavior: "smooth" });
      }, 300);
      setClickPaginate(false);
    }
  }, [itemOffset, itemsPerPage, clickPaginate, items]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % (items?.length || 0);
    setClickPaginate(true);
    setItemOffset(newOffset);
  };

  if (!items) return null;

  return (
    <section>
      <div ref={ref} className={className}>
        <div className="container px-4 mx-auto">
          <div className="lg:w-10/12 mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Items currentItems={currentItems} />
          </div>
          <div className="lg:w-10/12 mx-auto flex flex-wrap">
            <ReactPaginate
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
      </div>
    </section>
  );
};

export default Posts;
