import { sortBlogs } from "@/utils";
import Image from "next/image";
import Link from "next/link";

function HomeCoverSection({ blogs }: any) {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">
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
        />
        <div className="w-3/4 p-16 flex flex-col items-start justify-center z-10 text-light">
          <Link href={`/categories/${blog.tags[0]}`} >
            {blog.tags[0]}
          </Link>
          <h1>
            {blog.title}
          </h1>
          <p>
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
}

export default HomeCoverSection;
