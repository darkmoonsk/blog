import { format } from "date-fns"
import Image from "next/image"
import Link from "next/link"

function BlogLayoutThree({ blog }: any) {
  return (
    <div className="cursor-pointer group flex flex-col items-center it text-dark">
      <Link href={blog.url_path} className="h-full rounded-xl overflow-hidden" >
      <Image 
          src={blog.image.filePath.replace("../public", "")}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300"
        />
      </Link>

      <div className="flex flex-col w-full">
          <span className="uppercase text-accent font-semibold text-sm">{blog.tags[0]}</span>
          <Link href={blog.url_path} className="inline-block my-1">
          <h2 
          className="
            font-semibold capitaliz text-lg
          ">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px]
            group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat 
            transition-[background-size] duration-500
            ">
              {blog.title}
            </span>
          </h2>
          </Link>

          <span className=" inline-block capitalize text-dark/70 font-semibold text-base">
            {format(new Date(blog.publishedAt), "dd MMM, yyyy")}
          </span>
        </div>
    </div>
  )
}

export default BlogLayoutThree