import { Project } from "contentlayer/generated";

export interface PropTypes {
  className?: string;
}

export interface CTATypes {
  className?: string;
  ctaLabel?: string;
  ctaLink: string;
  ctaTitle?: string;
  desc?: string;
}

export interface ItemTypes {
  className?: string;
  currentItems?: Array<string>;
}

export interface HeroTypes {
  className?: string;
  title?: string;
  subtitle?: string;
}

export interface ProjectTypes {
  className?: string;
  itemsPerPage: number;
}

export interface NavMenuItem {
  href: string;
  label: string;
}

export interface PostCardProps {
  index: number;
  post: {
    url: string;
    image: string;
    title: string;
    date: string;
    author: string;
  };
}

export interface ProjectState {
  id: number;
  name: string;
  date: string;
}

export interface BlogCategory {
  title: string;
}

export interface BlogProps {
  className: string;
  itemsPerPage: number;
  archive?: boolean;
  params: {
    slug?: string;
  };
}

export interface Category {
  title: string;
}

export interface SlugParams {
  slug: string;
}
