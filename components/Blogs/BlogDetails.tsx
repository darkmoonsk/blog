import { format, parseISO } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import Link from "next/link";

function BlogDetails({ blog, slug }: any) {
  return (
    <div className="px-10 bg-cyan-700 text-light py-2 flex items-center justify-around flex-wrap text-xl
      mx-10 rounded-lg shadow-2xl
    ">
      <time>
        {format(parseISO(blog.publishedAt), "d 'de' LLLL, yyyy", {locale: ptBR})}
      </time>
      <span>20 visualizações</span>
      <div>
        {blog.readingTime.text.replace("read", "de leitura")}
      </div>
      <Link href={`/categories/${blog.tags[0]}`} className="m-3">
        #{blog.tags[0]}
      </Link>
    </div>
  )
}

export default BlogDetails