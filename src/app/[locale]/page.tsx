import HomeCoverSection from "@/components/Home/HomeCoverSection"
import { allBlogs } from "../../../.contentlayer/generated"
import FeaturedPosts from "@/components/Home/FeaturedPosts"
import RecentPosts from "@/components/Home/RecentPosts"
import { getLocale, unstable_setRequestLocale } from "next-intl/server";
import NewsPanel from "@/components/Home/News/NewsPanel";

export default async function Home({ params }: any) {
  unstable_setRequestLocale(params.locale);
  const locale = await getLocale();
  const blogs = allBlogs.filter(blog => blog.lang.toLowerCase() === locale);

  if(!blogs) return;
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={blogs} />
      <NewsPanel />
      <FeaturedPosts blogs={blogs}/>
      <RecentPosts blogs={blogs}/>
    </main>
  )
}
