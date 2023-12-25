import { ImageFieldData } from "contentlayer/core"

export default interface Blog {
  title: string
  lang: string
  publishedAt: string
  updatedAt: string
  description: string
  image?: ImageFieldData | undefined
  isPublished: boolean
  author: string
  tags?: Array<string> | undefined
  readingTime: {
    text: string
  }
}