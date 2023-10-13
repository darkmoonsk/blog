import { sortBlogs } from "@/utils";
import BlogLayoutOne from "../Blogs/BlogLayoutOne";
import BlogLayoutTwo from "../Blogs/BlogLayoutTwo";
import Link from "next/link";
import BlogLayoutThree from "../Blogs/BlogLayoutThree";

function RecentPosts({blogs}: any) {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-32 px-32 flex flex-col item-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-full inline-block font-bold capitalize text-4xl">
          Posts recentes
        </h2>
        <Link href={"/categories/all"} className="inline-block font-medium text-accent
        underline underline-offset-2 text-lg">
          Ver todos
        </Link>
       </div>
       <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-16">
        {
          sortedBlogs.slice(5, 11).map((blog: any, index: number) => (
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