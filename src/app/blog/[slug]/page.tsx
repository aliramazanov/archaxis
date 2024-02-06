import { SlugParams } from "@/types/Types";
import { allPosts } from "contentlayer/generated";
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

const page = ({ params }: { params: SlugParams }) => {
  const post = allPosts.find((post) => post.slug === params.slug);
  return <div>{post && <BlogContent post={post} />}</div>;
};

export default page;
