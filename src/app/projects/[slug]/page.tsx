import { SlugParams } from "@/types/Types";
import { allProjects } from "contentlayer/generated";
import React from "react";
import ProjectContent from "./ProjectContent";

export async function generateStaticParams() {
  const projects = await allProjects;
  console.log(projects);
  return projects.map((project) => ({ slug: project.slug }));
}

export const generateMetadata = async ({ params }: { params: SlugParams }) => {
  const projects = await allProjects;
  console.log("All Projects:", projects);

  const matchingProjects = projects.filter(
    (project) => project._raw.flattenedPath === "projects/" + params.slug
  );
  console.log("Matching Projects:", matchingProjects);

  if (matchingProjects.length > 0) {
    const project = matchingProjects[0];
    console.log("Selected Project:", project);
    return { title: project.title, excerpt: project.excerpt };
  } else {
    console.log("No Matching Project Found");
    return { title: "Project Not Found", excerpt: "No excerpt available" };
  }
};

const ProjectLayout = ({ params }: { params: SlugParams }) => {
  const projects = allProjects.find(
    (project) => project._raw.flattenedPath === "projects/" + params.slug
  );

  if (!projects) {
    return <div>Project not found</div>;
  }

  return (
    <React.Fragment>
      <ProjectContent project={projects} />
    </React.Fragment>
  );
};

export default ProjectLayout;
