import { useTranslation } from "react-i18next";
import GeorgiaFlag from "../assets/GeorgiaFlag.svg";
import UKFlag from "../assets/UsaFlag.svg";
import { useState } from "react";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-[150px]">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {i18n.language === "en" ? (
            <img src={UKFlag} alt="UK Flag" className="w-6 h-6 mr-2" />
          ) : (
            <img
              src={GeorgiaFlag}
              alt="Georgia Flag"
              className="w-6 h-6 mr-2"
            />
          )}
          {i18n.language === "en" ? "English" : "ქართული"}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.7-.29l-4-4a1 1 0 111.4-1.42L10 10.59l3.3-3.3a1 1 0 111.4 1.42l-4 4a1 1 0 01-.7.29z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => changeLanguage("en")}
              className="flex gap-2 text-left w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <img src={UKFlag} alt="UK Flag" className="w-6 h-6" />
              English
            </button>
            <button
              onClick={() => changeLanguage("ka")}
              className="flex gap-2 text-left w-full  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <img src={GeorgiaFlag} alt="Georgia Flag" className="w-6 h-6" />
              ქართული
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
