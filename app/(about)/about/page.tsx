import AboutCoverSection from "@/components/About/AboutCoverSection"
import Skills from "@/components/About/Skills"
import { Metadata } from "next";
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sobre mim",
  description: `Veja alguns detalhes sobre mim`,
};

function About() {
  return (
   <>
    <AboutCoverSection />
    <Skills />
    <h2 className="mt-8 font-semibold text-2xl self-start mx-20 text-dark">
      Tem algum projeto em mente? entre em contato comigo <Link href="/contact" className="!underline underline-offset-2" >aqui</Link>
    </h2>
   </>
  )
}

export default About