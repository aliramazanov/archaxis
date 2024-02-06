import { SlugParams } from "@/types/Types";
import { Project, allProjects } from "contentlayer/generated";
import React from "react";
import ProjectContent from "./ProjectContent";

export async function generateStaticParams() {
  const projects = await allProjects;
  return projects.map((project) => ({ slug: project.slug }));
}

export const generateMetadata = async ({ params }: { params: SlugParams }) => {
  const projects = allProjects;
  const project = projects.find((project) => {
    return project._raw.flattenedPath === "projects/" + params.slug;
  });
  return { title: project?.title, excerpt: project?.excerpt };
};

const ProjectLayout = ({ params }: { params: SlugParams }) => {
  const projects = allProjects;
  const project: Project =
    projects.find(
      (proj) => proj._raw.flattenedPath === "projects/" + params.slug
    ) || ({} as Project);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <React.Fragment>
      <ProjectContent project={project} />
    </React.Fragment>
  );
};

export default ProjectLayout;
