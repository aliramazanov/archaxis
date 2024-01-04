export interface HeroProps {
  className?: string;
}
export interface AboutProps {
  className?: string;
}
export interface WorkProps {
  className?: string;
}
export interface ArrowProps {
  className?: string;
}
export interface TestimonialsProps {
  className?: string;
}
export interface BlogProps {
  className?: string;
}
export interface StayInTouchProps {
  className?: string;
}
export interface FooterProps {
  className?: string;
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
