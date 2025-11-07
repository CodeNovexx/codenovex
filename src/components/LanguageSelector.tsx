import { useTranslation } from "react-i18next";
import GeorgiaFlag from "../assets/GeorgiaFlag.webp";
import UKFlag from "../assets/UsaFlag.webp";
import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

interface LanguageSelectorProps {
  openUpward?: boolean;
}

function LanguageSelector({ openUpward = false }: LanguageSelectorProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentLanguage = i18n.language === "en" 
    ? { flag: UKFlag, name: "English", code: "EN" }
    : { flag: GeorgiaFlag, name: "ქართული", code: "KA" };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="group inline-flex items-center gap-2 px-4 py-5 rounded-xl bg-gray-900/80 border border-gray-700/50 hover:border-brand-primary/50 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/20 backdrop-blur-sm"
          id="language-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Globe Icon */}
          <Globe className="w-4 h-4 text-brand-primary" />
          
          {/* Flag */}
          <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-gray-600 group-hover:border-brand-primary transition-colors duration-300 shadow-sm">
            <img 
              src={currentLanguage.flag} 
              alt={currentLanguage.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Language Code */}
          <span className="text-sm font-bold tracking-wide">{currentLanguage.code}</span>
          
          {/* Chevron */}
          <ChevronDown 
            className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-[1000]" 
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Menu */}
          <div className={`${openUpward ? 'origin-bottom-right absolute right-0 bottom-full mb-2' : 'origin-top-right absolute right-0 mt-2'} w-56 rounded-xl shadow-2xl bg-gray-900/95 backdrop-blur-lg border border-gray-700/50 ring-1 ring-black/10 focus:outline-none z-[1001] overflow-hidden animate-in fade-in ${openUpward ? 'slide-in-from-bottom-2' : 'slide-in-from-top-2'} duration-200`}>
            <div
              className="py-2"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="language-menu"
            >
              {/* English Option */}
              <button
                onClick={() => changeLanguage("en")}
                className={`group flex items-center gap-3 w-full px-4 py-3 text-sm transition-all duration-200 ${
                  i18n.language === "en"
                    ? 'bg-gradient-to-r from-brand-primary/20 to-purple-600/20 text-white border-l-2 border-brand-primary'
                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                }`}
                role="menuitem"
              >
                <div className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-200 shadow-md ${
                  i18n.language === "en" 
                    ? 'border-brand-primary scale-110' 
                    : 'border-gray-600 group-hover:border-brand-primary/50 group-hover:scale-105'
                }`}>
                  <img 
                    src={UKFlag} 
                    alt="English" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold">English</div>
                  <div className="text-xs text-gray-400">International</div>
                </div>
                {i18n.language === "en" && (
                  <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
                )}
              </button>

              {/* Divider */}
              <div className="my-1 border-t border-gray-700/50"></div>

              {/* Georgian Option */}
              <button
                onClick={() => changeLanguage("ka")}
                className={`group flex items-center gap-3 w-full px-4 py-3 text-sm transition-all duration-200 ${
                  i18n.language === "ka"
                    ? 'bg-gradient-to-r from-brand-primary/20 to-purple-600/20 text-white border-l-2 border-brand-primary'
                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                }`}
                role="menuitem"
              >
                <div className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-200 shadow-md ${
                  i18n.language === "ka" 
                    ? 'border-brand-primary scale-110' 
                    : 'border-gray-600 group-hover:border-brand-primary/50 group-hover:scale-105'
                }`}>
                  <img 
                    src={GeorgiaFlag} 
                    alt="Georgian" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold">ქართული</div>
                  <div className="text-xs text-gray-400">საქართველო</div>
                </div>
                {i18n.language === "ka" && (
                  <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default LanguageSelector;
