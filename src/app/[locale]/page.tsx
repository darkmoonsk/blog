import HomeCoverSection from "@/components/Home/HomeCoverSection"
import { allBlogs } from "../../../.contentlayer/generated"
import FeaturedPosts from "@/components/Home/FeaturedPosts"
import RecentPosts from "@/components/Home/RecentPosts"
import { getLocale } from "next-intl/server";

export default async function Home() {
  const locale = await getLocale();
  const blogs = allBlogs.filter(blog => blog.lang.toLowerCase() === locale);

  if(!blogs) return;
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={blogs} />
      <FeaturedPosts blogs={blogs}/>
      <RecentPosts blogs={blogs}/>
    </main>
  )
}
