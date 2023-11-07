import { format } from "date-fns"
import Image from "next/image"
import Link from "next/link"

function BlogLayoutThree({ blog }: any) {
  return (
    <div className="cursor-pointer group flex flex-col items-center it text-dark dark:text-light">
      <Link href={blog.url_path} className="h-full rounded-xl overflow-hidden" >
      <Image 
          src={blog.image.filePath.replace("../src/public", "")}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300"
          sizes="(max-width: 768px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-col w-full">
          <span className="uppercase mt-1 text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">{blog.tags[0]}</span>
          <Link href={blog.url_path} className="inline-block my-1">
          <h2 
          className="
            font-semibold capitaliz text-base sm:text-lg
          ">
            <span className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px]
            group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat 
            transition-[background-size] duration-500
            ">
              {blog.title}
            </span>
          </h2>
          </Link>

          <span className=" inline-block capitalize text-dark/70 dark:text-light/70 font-semibold text-xs sm:text-base">
            {format(new Date(blog.publishedAt), "dd MMM, yyyy")}
          </span>
        </div>
    </div>
  )
}

export default BlogLayoutThree