import { sortBlogs } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Elements/Tag";
import GithubSlugger, { slug }  from "github-slugger";
import { getLocale } from "next-intl/server";


async function HomeCoverSection({ blogs }: any) {
  const sortedBlogs = sortBlogs(blogs.filter((blog: any) => blog.isPublished === true));
  const blog = sortedBlogs[0];
  const locale = await getLocale();

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        <div 
        className="
          absolute top-0 left-0 bottom-0 right-0 h-full
          bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-10
        " />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          alt={blog.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl z-0"
          priority
        />
        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-10 text-light">
          <Tag link={`${locale}/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
          <Link href={locale + blog.url_path} className="mt-6">
          <h1 
          className="
            font-bold capitalize text-light text-lg sm:text-xl md:text-3xl lg:text-4xl
          ">
            <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px]
            hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat 
            transition-[background-size] duration-500
            ">
              {blog.title}
            </span>
          </h1>
          </Link>
          <p className="
            hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in
          ">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
}

export default HomeCoverSection;
