import { format, parseISO } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import Link from "next/link";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";

function BlogDetails({ blog, slug: blogSlug }: any) {
  return (
    <div className="px-10 bg-cyan-700 text-light py-2 flex items-center justify-around flex-wrap text-xl
      mx-10 rounded-lg shadow-2xl
    ">
      <time>
        {format(parseISO(blog.publishedAt), "d 'de' LLLL, yyyy", {locale: ptBR})}
      </time>
      <span className="m-3">
        <ViewCounter slug={blogSlug} />
      </span>
      <div>
        {blog.readingTime.text.replace("read", "de leitura")}
      </div>
      <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3">
        #{slug(blog.tags[0])}
      </Link>
    </div>
  )
}

export default BlogDetails