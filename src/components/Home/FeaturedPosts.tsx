import { sortBlogs, translations } from "@/utils";
import BlogLayoutOne from "../Blogs/BlogLayoutOne";
import BlogLayoutTwo from "../Blogs/BlogLayoutTwo";
import { useLocale } from "next-intl"

function FeaturedPosts({blogs}: any) {
  const sortedBlogs = sortBlogs(blogs.filter((blog: any) => blog.isPublished === true));
  const locale = useLocale();
  const t = translations(locale);


  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col item-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        {t.FeaturedPosts.title}
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