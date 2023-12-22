import { useForm } from "react-hook-form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ErrorMessage } from '@hookform/error-message';
import ConfirmationPopup from "./ConfirmationPopup";
import { useState } from "react";
import { useLocale } from "next-intl";
import { translations } from "@/utils";

interface FormInputs {
  email: string
}

function NewsLetterForm() {
  const supabase = createClientComponentClient();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const locale = useLocale();
  const t = translations(locale).NewsLetterForm;

  function toggleConfirmation() {
    setShowConfirmation(!showConfirmation);
  }

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();
  
  const onSubmit = async (data: FormInputs) => {
    const email = data.email;
    // Verifique se o e-mail já está inscrito
    const { data: count, error } = await supabase
      .from('subscribers')
      .select('email', { count: "exact"})
      .eq('email', email)

      

    if (error) {
      console.error("Subscriber verification error: ", error);
      return;
    }

    if (count.length === 1) {
      // Se o e-mail já está inscrito, defina um erro no campo de e-mail
      setError('email', {
        type: 'validate',
        message: t.alreadyRegistered,
      });
    } else {
      // Inscrever o novo e-mail
      const { error: insertError } = await supabase
        .from('subscribers')
        .insert({ email });
      
      if (insertError) {
        console.error("Insert Error:", insertError);
      } else {
        console.log('Inscrição realizada com sucesso.');
        setShowConfirmation(true);
        reset({email: ""});
      }
    }
  };


  return (
    <>
      <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 w-fit sm:min-w-[384px] flex flex-col items-stretch bg-light p-1 sm:p-2 rounded mx-4"
        >
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder={t.inputPlaceholder}
              {...register("email", { 
                required: t.required, 
                maxLength: { value: 80, message: t.maxLength }, 
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t.invalidEmail
                },
              })}
              className="w-full bg-transparent placeholder:text-xs sm:placeholder:text-lg text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
            />
            <input
              type="submit"
              value={t.button}
              className="bg-dark text-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
            />
          </div>
          <ErrorMessage 
            name="email" 
            errors={errors} 
            render={({message}) => <p style={{textShadow: "none"}} className="text-red-500 font-bold text-center sm:ml-2">{message}</p>} 
          />
      </form>
      {
        showConfirmation && 
        <ConfirmationPopup toggleConfirmation={toggleConfirmation} />
      }
    </>
  )
}

export default NewsLetterForm