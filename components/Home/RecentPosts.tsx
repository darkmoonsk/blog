import { sortBlogs } from "@/utils";
import BlogLayoutOne from "../Blogs/BlogLayoutOne";
import BlogLayoutTwo from "../Blogs/BlogLayoutTwo";
import Link from "next/link";
import BlogLayoutThree from "../Blogs/BlogLayoutThree";

function RecentPosts({blogs}: any) {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col item-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Posts recentes
        </h2>
        <Link href={"/categories/all"} className="inline-block font-medium text-accent dark:text-accentDark
        underline underline-offset-2 text-base md:text-lg">
          Ver todos
        </Link>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {
          sortedBlogs.slice(4, 10).map((blog: any, index: number) => (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          ))
        }
       </div>
    </section>
  )
}

export default RecentPosts