import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { getLocale } from "next-intl/server";

async function BlogLayoutTwo({ blog }: any) {
  const locale = await getLocale();

  if (!blog) return

  return (
    <div className="cursor-pointer group grid grid-cols-12 gap-4 items-center text-dark dark:text-light">
      <Link href={blog.url_path} className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden" >
      <Image
          src={blog.image.filePath.replace("../public", "")}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="curso-pointer aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="col-span-12 lg:col-span-8 w-full">
          <span className="inline-block w-full uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">{blog.tags[0]}</span>
          <Link href={locale + blog.url_path} className="inline-block my-1">
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

          <span className=" inline-block w-full capitalize text-dark/70 dark:text-light/70 font-semibold text-xs sm:text-base">
            {format(new Date(blog?.publishedAt), "dd MMM, yyyy")}
          </span>
        </div>
    </div>
  )
}

export default BlogLayoutTwo