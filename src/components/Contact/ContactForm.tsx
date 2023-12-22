"use client";
import sendEmailParams from "@/app/models/sendEmailParams";
import { useForm } from "react-hook-form";
import SuccessModal from "./SuccessModal";
import { useState } from "react";
import { useLocale } from "next-intl";
import { translations } from "@/utils";

export default function ContactForm() {
  const locale = useLocale();
  const t = translations(locale).Contact;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<sendEmailParams>();

  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (data: sendEmailParams) => {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    reset();
  
    if (!response.ok) {
      console.error(errors);
    }

    if(response.ok) {
      console.log('Email enviado com sucesso')
      setShowModal(true);
    }
  }
  
  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <SuccessModal isOpen={showModal} onClose={toggleModal} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 text-xl font-medium leading-relaxed font-in"
      >
        {t.contactFormTextPT1}
        <input
          type="text"
          placeholder="Nome"
          {...register("name", { required: true, maxLength: 80 })}
          className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b
          border-gray focus:border-gray bg-transparent
          "
        />
        {t.contactFormTextPT2}
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
          className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b
        border-gray focus:border-gray bg-transparent
        "
        />
        {t.contactFormTextPT3}
        <input
          type="number"
          placeholder="Whatsapp"
          {...register("whatsapp", { required: true })}
          className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b
          border-gray focus:border-gray bg-transparent
          "
        />
        {t.contactFormTextPT4} <br/>
        <textarea
          {...register("description", {})}
          rows={3}
          placeholder="Meu projeto é sobre..."
          className="w-full resize-none outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b
          border-gray focus:border-gray bg-transparent
          "
        />
        <input type="submit" value="Enviar" className="mt-8 font-medium inline-block capitalize text-xl py-3 px-8 border-2 border-solid
        border-dark dark:border-light rounded cursor-pointer
        " />
      </form>
    </>
  );
}
