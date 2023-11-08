import Image from "next/image"
import Tag from "../Elements/Tag"
import Link from "next/link"
import { slug } from "github-slugger"

function BlogLayoutOne({blog}: any) {

  return (
    <div className="cursor-pointer group inline-block overflow-hidden rounded-xl">
       <div 
        className="
          absolute top-0 left-0 bottom-0 right-0 h-full
          bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10
        " />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all duration-300"
          sizes="(max-width: 1180px) 100vw, 50vw"
        />
        
        <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
          <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} 
            className="px-6 text-xs sm:text-sm py-1 sm:py-2 !border"
          />
          <Link href={blog.url_path} className="mt-6">
          <h2 
          className="
            font-bold capitalize text-light text-sm xs:text-base sm:text-xl md:text-2xl mt-3 sm:mt-5
          ">
            <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px]
            group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat 
            transition-[background-size] duration-500
            ">
              {blog.title}
            </span>
          </h2>
          </Link>
        </div>
    </div>
  )
}

export default BlogLayoutOne