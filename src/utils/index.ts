import { compareDesc, parseISO } from "date-fns";
import pt from "../messages/pt-br.json";
import es from "../messages/es.json";

export const cx = (...classNames: string[]) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs: any) => {
  return blogs
    .slice()
    .sort((a: any, b: any) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)));
};

export const translations = (locale: string) => {
  return locale === "pt-br" ? pt : es;
};
