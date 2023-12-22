import { cx } from "@/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteMetaData from "@/utils/siteMetaData";
import ThemeScript from "@/components/ThemeScript";
import { unstable_setRequestLocale } from "next-intl/server";

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

const locales = ["pt-br", "es"];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({
  children, params: {locale}
}: Props) {

  unstable_setRequestLocale(locale);
  return (
    <html lang="pt-BR">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
          <ThemeScript />
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
