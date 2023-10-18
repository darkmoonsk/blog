"use client";
import { useForm } from "react-hook-form";
import { GithubIcon, LinkedinIcon, MoonIcon, SunIcon } from "../Icons";
import portfolioImage from "@/public/portfolio.png";
import Image from "next/image";
import Link from "next/link";
import siteMetaData from "@/utils/siteMetaData";

function Footer() {
  const year = new Date().getFullYear();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: {}) => console.log(data);
  // console.log(errors);
  // TODO: Manipulação de erros e formulario funcional

  const iconAnimation = "hover:scale-125 transition-all ease-in-out duration-200";

  return (
    <footer className="mt-16 rounded-2xl bg-[url('/footer-bg-2.jpg')] bg-no-repeat bg-cover m-5 sm:m-10 flex flex-col items-center text-light"
    style={{
      textShadow: "6px 3px 10px rgba(0, 0, 0, 1)"
    }}
    >
      <h3 className="mt-16 font-medium text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-2 sm:px-4">
        Blogs sobre Ciência & Tecnologia
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light text-sm sm:text-base">
        Se inscreva para aprender sobre novas tecnologias e assuntos interessantes do mundo da
        programação e da ciência.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light p-1 sm:p-2 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Escreva o seu e-mail"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent placeholder:text-xs sm:placeholder:text-lg text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-dark text-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>

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
        <a
          href={siteMetaData.github}
          target="_blank"
          className="flex items-center drop-shadow-2xl"
        >
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
            src={portfolioImage}
            alt="Logo do portfolio"
            className={`
            inline-block w-6 h-6 mr-2 
            ${iconAnimation}
            `}
          />
          Portfolio
        </a>
      </div>
      <div className="w-full rounded-b-2xl bg-blue-950/80 p-5 mx-8 flex flex-col gap-3 items-center text-center lg:flex-row lg:justify-between">
        <span className="font-semibold text-transparent bg-gradient-to-tr from-slate-100 to-sky-300 bg-clip-text">&copy; {year} Bruno Souza. Todos os direitos reservados</span>
        <Link href="/sitemap-0.xml" className="underline">
          sitemap.xml
        </Link>
        <span>Feito com &hearts; por <a href="#">Bruno Souza</a></span>
      </div>
    </footer>
  );
}

export default Footer;
