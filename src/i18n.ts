import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./translation/en.json";
import geTranslations from "./translation/ka.json";
import { Cookies } from "react-cookie";
const cookies = new Cookies();
const resources = {
  en: {
    translation: enTranslations,
  },
  ka: {
    translation: geTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: cookies.get("lang") || "ka",
  fallbackLng: "ka",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
