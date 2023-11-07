import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/components/Blogs/BlogLayoutThree";
import Categories from "@/components/Blogs/Categories";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger()

export async function generateStaticParams() {
  const categories: any = [];
  const paths = [{slug: "all"}];

  allBlogs.map(blog => {
    if(blog.isPublished) {
      blog.tags?.map(tag => {
        let slugfield = slugger.slug(tag);
        if(!categories.includes(slugfield)) {
          categories.push(slugfield);
          paths.push({slug: slugfield});
        }
      })
    }
  })
 
  return paths;
}

export async function generateMetadata({ params }: any) {

  return {
    title: `${params.slug.replaceAll("-", " ")} Blogs`,
    description: `Aprenda mais sobre ${params.slug === "all" ? "Desenvolvimento Web" : params.slug} por meio da nossa coleção de blog posts e tutoriais.`,
  }
}

function page({ params }: any) {
  const allCategories = ["all"];
  const blogs = allBlogs.filter(blog => blog.isPublished === true).filter((blog) => {
    return blog.tags?.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }

      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md-text-4xl lg:text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Encontre novos temas e expanda o seu conhecimento!
        </span>
      </div>

      <Categories categories={allCategories.sort()} currentSlug={params.slug} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-24 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
}

export default page;