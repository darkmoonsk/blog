import ContactForm from "@/components/Contact/ContactForm";
import LottieAnimation from "@/components/Contact/LottieAnimation";
import siteMetaData from "@/utils/siteMetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entre em Contato",
  description: `Me contate por meio do formulario disponivel nesta pagina ou email em ${siteMetaData.email}`,
};

function Contact() {
  return (
    <section className="w-full h-auto lg:h-[75vh] border-b-2 border-solid 
      border-dark dark:border-light flex flex-col lg:flex-row items-center justify-center text-dark dark:text-light
      ">
      <div className="flex items-center w-full lg:w-2/5 h-full border-b-2 lg:border-r-2 border-solid border-dark dark:border-light"><LottieAnimation /></div>
      <div className="w-full lg:w-3/5 flex flex-col items-start justify-center p-8 md:px-16 pb-8">
        <h2 className="font-bold capitalize text-3xl lg:text-4xl">Vamos nos conectar!</h2>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact;