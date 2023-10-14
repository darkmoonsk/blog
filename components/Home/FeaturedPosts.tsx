import { sortBlogs } from "@/utils";
import BlogLayoutOne from "../Blogs/BlogLayoutOne";
import BlogLayoutTwo from "../Blogs/BlogLayoutTwo";

function FeaturedPosts({blogs}: any) {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-32 px-32 flex flex-col item-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-4xl">
        Posts em Destaque
      </h2>
      <div className="grid grid-cols-2 gap-6 mt-16">
        <article className="col-span-1 row-span-2 relative">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
        <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  )
}

export default FeaturedPosts