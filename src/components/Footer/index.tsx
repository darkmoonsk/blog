"use client";
import LinkedinIcon from "../Icons/LinkedinIcon";
import GithubIcon from "../Icons/GithubIcon";
import portfolioImg from "../../../public/portfolio.png";
import Image from "next/image";
import Link from "next/link";
import siteMetaData from "@/utils/siteMetaData";
import NewsLetterForm from "./NewsLetterForm";


function Footer() {
  const year = new Date().getFullYear();

  const iconAnimation = "hover:scale-125 transition-all ease-in-out duration-200";

  return (
    <footer
      className="mt-16 rounded-2xl bg-[url('/footer-bg-2.jpg')] bg-no-repeat bg-cover m-5 sm:m-10 flex flex-col items-center text-light"
      style={{
        textShadow: "6px 3px 10px rgba(0, 0, 0, 1)",
      }}
    >
      <h3 className="mt-16 font-medium text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-2 sm:px-4">
        Blogs sobre Ciência & Tecnologia
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light text-sm sm:text-base">
        Se inscreva para aprender sobre novas tecnologias e assuntos interessantes do mundo da
        programação e da ciência.
      </p>

      <NewsLetterForm />

      <div className="flex flex-col xs:flex-row items-center gap-5 p-5 my-8 bg-blue-950/80 ">
        <a
          href={siteMetaData.linkedin}
          target="_blank"
          className="flex items-center drop-shadow-2xl"
        >
          <LinkedinIcon
            className={`
            inline-block max-w-6 max-h-6 mr-2
            ${iconAnimation}
            `}
          />
          Linkedin
        </a>
        <a href={siteMetaData.github} target="_blank" className="flex items-center drop-shadow-2xl">
          <GithubIcon
            className={`
            inline-block max-w-6 max-h-6 mr-2 fill-light
            ${iconAnimation}
            `}
          />
          Github
        </a>
        <a
          href={siteMetaData.portfolio}
          target="_blank"
          className="flex items-center drop-shadow-2xl"
        >
          <Image
            src={portfolioImg}
            alt="Logo do portfolio"
            width={64}
            height={64}
            className={`
            inline-block w-6 h-6 mr-2 
            ${iconAnimation}
            `}
          />
          Portfolio
        </a>
      </div>
      <div className="w-full rounded-b-2xl bg-blue-950/80 p-5 mx-8 flex flex-col gap-3 items-center text-center lg:flex-row lg:justify-between">
        <span className="font-semibold text-transparent bg-gradient-to-tr from-slate-100 to-sky-300 bg-clip-text">
          &copy; {year} Bruno Souza. Todos os direitos reservados
        </span>
        <Link href="/sitemap-0.xml" className="underline">
          sitemap.xml
        </Link>
        <span>
          Feito com &hearts; por <a href="#">Bruno Souza</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
