import { format, parseISO } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import es from "date-fns/locale/es";
import Link from "next/link";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";
import { translations } from "@/utils";
import Blog from "@/app/models/blog";


interface BlogDetailsProps {
  blog: Blog,
  slug: string
  locale: string
}

function BlogDetails({ blog, slug: blogSlug, locale }: BlogDetailsProps) {
  const dateLocale = locale === "pt-br" ? ptBR : es;
  const t = translations(locale).BlogDetails;

  return (
    <div className="px-2 md:px-10 bg-cyan-700 dark:bg-cyan-950 text-light py-2 flex items-center justify-around flex-wrap text-lg sm:text-xl
      mx-5 md:mx-10 rounded-lg shadow-2xl
    ">
      <time>
        {format(parseISO(blog.publishedAt), "d 'de' LLLL, yyyy", {locale: dateLocale})}
      </time>
      <span className="m-3">
        <ViewCounter slug={blogSlug} />
      </span>
      <div>
        {blog.readingTime.text.replace("read", t.read)}
      </div>
      <Link href={`/${locale}/categories/${blog.tags ? slug(blog.tags[0]) : ""}`} className="m-3">
        #{slug(blog.tags ? slug(blog.tags[0]) : "")}
      </Link>
    </div>
  )
}

export default BlogDetails