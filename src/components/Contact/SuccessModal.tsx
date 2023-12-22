import { translations } from "@/utils";
import { useLocale } from "next-intl";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  const locale = useLocale();
  const t = translations(locale).SuccessModal;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 text-dark z-50 flex justify-center items-center">
      <div className="bg-white px-16 py-8 rounded-md shadow-lg max-w-sm mx-auto">
        <div className="flex flex-col items-center">
          <svg
            className="w-16 h-16 text-green-600 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <h3 className="mb-5 text-2xl font-semibold text-gray-900">
            {t.title}
          </h3>
          <p className="mb-2 text-lg text-center text-gray-600">
            {t.description}
          </p>
          <p className="mb-5 text-lg text-center text-gray-600">
            
          </p>
          <button
            onClick={onClose}
            className=" text-light bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {t.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
