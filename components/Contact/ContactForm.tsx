"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: {}) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-xl font-medium leading-relaxed font-in"
    >
      Olá! meu nome é{" "}
      <input
        type="text"
        placeholder="Nome"
        {...register("Seu Nome", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b
        border-gray focus:border-gray bg-transparent
        "
      />
      e eu quero falar sobre um possivel projeto. você pode falar comigo pelo e-mail:
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b
       border-gray focus:border-gray bg-transparent
       "
      />
      ou pelo whatsapp através do numero
      <input
        type="number"
        placeholder="Whatsapp"
        {...register}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b
        border-gray focus:border-gray bg-transparent
        "
      />
      Aqui está os detalhes sobre o meu projeto <br/>
      <textarea
        {...register("Detalhes do projeto", {})}
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
  );
}
