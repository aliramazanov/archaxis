export interface PropTypes {
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
