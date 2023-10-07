import Link from "next/link";
import Logo from "./Logo";
import { GithubIcon, LinkedinIcon, MoonIcon, SunIcon } from "../Icons";
import portfolioImage from "@/public/portfolio.png";
import Image from "next/image";

function Header() {
  const iconAnimation = "hover:scale-125 transition-all ease-in-out duration-200";

  return (
    <header className="w-full p-4 px 10 flex items-center justify-between">
      <Logo />
      <nav
        className="
          flex items-center gap-2 w-max py-3 px-8 bg-light/80 backdrop-blur-sm
          border border-solid border-dark rounded-full 
          font-medium capitalize 
          fixed top-6 right-1/2 translate-x-1/2
      "
      >
        <Link href="/">Inicio</Link>
        <Link href="/about">Sobre</Link>
        <Link href="/contact">Contato</Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      <div className="flex items-center gap-5">
        <a
          href="https://www.linkedin.com/in/brunosouzadkm"
          target="_blank"
          className="flex items-center"
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
          href="https://www.linkedin.com/in/brunosouzadkm"
          target="_blank"
          className="flex items-center"
        >
          <GithubIcon
            className={`
            inline-block max-w-6 max-h-6 mr-2
            ${iconAnimation}
            `}
          />
          Linkedin
        </a>
        <a
          href="https://www.linkedin.com/in/brunosouzadkm"
          target="_blank"
          className="flex items-center"
        >
          <Image src = {portfolioImage} alt="Logo do portfolio"
            className={`
            inline-block w-6 h-6 mr-2
            ${iconAnimation}
            `}
          />
          Linkedin
        </a>
      </div>
    </header>
  );
}

export default Header;
