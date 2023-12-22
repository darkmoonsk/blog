import { translations } from "@/utils";
import { useLocale } from "next-intl";
import React from "react";

interface ConfirmationPopupProps {
  toggleConfirmation: Function;
}

function ConfirmationPopup({toggleConfirmation}: ConfirmationPopupProps) {
  const locale = useLocale();
  const t = translations(locale).ConfirmationPopup;

  return (
    <div 
    style={{textShadow: "none"}} 
    className="fixed top-0 w-full h-full bg-black/70 z-30"
    onClick={() => toggleConfirmation()}
    >
      <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] 
        text-center text-dark max-w-[380px] bg-slate-200 p-5 rounded
      ">
        <h3 className="font-bold text-green-600 text-2xl mb-4">{t.title}</h3>
        <p className="pb-4">{t.description} 📰</p>
        <button className="bg-cyan-600 text-light px-8 py-2 rounded-md 
          transition-all ease duration-200 hover:bg-cyan-900
        "
        onClick={() => toggleConfirmation()}
        >
          {t.button}
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPopup;
