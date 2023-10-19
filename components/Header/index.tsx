"use client"
import Logo from "./Logo";
import LinkedinIcon from "../Icons/LinkedinIcon";
import GithubIcon from "../Icons/GithubIcon";
import portfolioImage from "@/public/portfolio.png";
import Image from "next/image";
import siteMetaData from "@/utils/siteMetaData";
import { useState } from "react";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import('@/components/Header/Menu'), {
  ssr: false,
})

function Header() {
  const [click, setClick] = useState(false);
  const iconAnimation = "hover:scale-125 transition-all ease-in-out duration-200";

  const toggleClick = () => {
    setClick(!click);
  }

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <button className="fixed right-6 top-4 cursor-pointer lg:hidden z-50 bg-light"
      onClick={toggleClick}
      >
        <div className="w-6 transition-all ease duration-300">
          <div className="relative">
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all
            ease duration-200
            "
            style={{
              transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0) translateY(6px)"
            }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all
            ease duration-200"
            style={{
              opacity: click ? 0 : 1
            }}
            >&nbsp;</span>
            <span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all
            ease duration-200"
            style={{
              transform: click ? "rotate(45deg) translateY(0)" : "rotate(0) translateY(-6px)"
            }}
            >&nbsp;</span>
          </div>
        </div>
      </button>

      <Menu isActive={click} />

      <div className="items-center gap-5 hidden lg:flex">
        <a
          href={siteMetaData.linkedin}
          target="_blank"
          className="flex items-center text-dark dark:text-light"
        >
          <LinkedinIcon
            className={`
            inline-block max-w-6 max-h-6 mr-2
            ${iconAnimation}
            `}
          />
          Linkedin
        </a>
        <a
          href={siteMetaData.github}
          target="_blank"
          className="flex items-center text-dark dark:text-light"
        >
          <GithubIcon
            className={`
            inline-block max-w-6 max-h-6 mr-2 dark:fill-light
            ${iconAnimation}
            `}
          />
          Github
        </a>
        <a
          href={siteMetaData.portfolio}
          target="_blank"
          className="flex items-center text-dark dark:text-light"
        >
          <Image src = {portfolioImage} alt="Logo do portfolio"
            className={`
            inline-block w-6 h-6 mr-2
            ${iconAnimation}
            `}
          />
          Portfolio
        </a>
      </div>
    </header>
  );
}

export default Header;
