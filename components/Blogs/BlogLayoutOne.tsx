import Image from "next/image"
import Tag from "../Elements/Tag"
import Link from "next/link"

function BlogLayoutOne({blog}: any) {
  return (
    <div className="inline-block overflow-hidden rounded-xl">
       <div 
        className="
          absolute top-0 left-0 bottom-0 right-0 h-full
          bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-10
        " />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="w-full h-full object-center object-cover rounded-xl"
        />
        
        <div className="w-full absolute bottom-0 p-10 z-20">
          <Tag Link={`/categories/${blog.tags[0]}`} name={blog.tags[0]} 
            className="px-6 text-sm py-2 !border"
          />
          <Link href={blog.url_path} className="mt-6">
          <h2 
          className="
            font-bold capitalize text-light text-2xl mt-5
          ">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px]
            hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat 
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