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
    <section className="w-full h-[75vh] border-b-2 border-solid 
      order-dark flex flex-row items-center justify-center text-dark
      ">
      <div className="inline-block w-2/5 h-full border-r-2 border-solid border-dark"><LottieAnimation /></div>
      <div className="w-3/5 flex flex-col items-start justify-center px-16 pb-8">
        <h2 className="font-bold capitalize text-4xl">Vamos nos conectar!</h2>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact;