import { sortBlogs } from "@/utils";
import BlogLayoutOne from "../Blogs/BlogLayoutOne";
import BlogLayoutTwo from "../Blogs/BlogLayoutTwo";

function FeaturedPosts({blogs}: any) {
  const sortedBlogs = sortBlogs(blogs.filter((blog: any) => blog.isPublished === true));

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col item-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Artigos em Destaque
      </h2>
      <div className="grid grid-cols-2 gap-6 mt-10 sm:mt-16">
        <article className="col-span-2 sxl:col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
        <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  )
}

export default FeaturedPosts