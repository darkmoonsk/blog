import { compareDesc, parseISO } from "date-fns";

export const cx = (...classNames: string[]) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs: any) => {
  return blogs
    .slice()
    .sort((a: any, b: any) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));
};
