import { cx } from "@/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteMetaData from "@/utils/siteMetaData";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetaData.siteUrl),
  title: {
    template: `%s | ${siteMetaData.title}`,
    default: siteMetaData.title, 
  },
  description: siteMetaData.description,
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    url: siteMetaData.siteUrl,
    siteName: siteMetaData.title,
    images: [
      siteMetaData.socialBanner
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetaData.title,
    images: [siteMetaData.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >


      <Script id="darkMode">
        {
          `
            if (localStorage.getItem("theme") === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `
        }
      </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
