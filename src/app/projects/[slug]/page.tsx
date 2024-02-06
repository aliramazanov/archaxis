import { SlugParams } from "@/types/Types";
import { allProjects } from "contentlayer/generated";
import ProjectContent from "../ProjectContent";

export async function generateStaticParams() {
  const projects = await allProjects;
  return projects.map((project) => ({ slug: project.slug }));
}

export const generateMetadata = async ({ params }: { params: SlugParams }) => {
  const projects = await allProjects;
  const project = projects.find((project) => {
    return project._raw.flattenedPath === "projects/" + params.slug;
  });

  return { title: project?.title, excerpt: project?.excerpt };
};

const page = ({ params }: { params: SlugParams }) => {
  const project = allProjects.find((project) => project.slug === params.slug);
  return <div>{project && <ProjectContent project={project} />}</div>;
};

export default page;
