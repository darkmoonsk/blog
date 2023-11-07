import siteMetaData from '@/utils/siteMetaData'
import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetaData.title,
    short_name: siteMetaData.description,
    description: siteMetaData.description,
    start_url: '/',
    display: 'standalone',
    // background_color: '#fff',
    // theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}