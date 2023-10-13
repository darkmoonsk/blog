"use client"
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image  from "next/image";

const mdxComponents = {
  Image
}

function RenderMdx({ blog }: any) {
  const MDXContent = useMDXComponent(blog.body.code)

  return (
    <div className="col-span-8 font-in prose prose-lg max-w-max
      prose-blockquote:bg-cyan-300/20 prose-blockquote:border-cyan-700 
      prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:rounded

      prose-li:marker:text-cyan-700
    ">
      <MDXContent components={mdxComponents} />
    </div>
  )
}

export default RenderMdx