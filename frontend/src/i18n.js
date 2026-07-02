import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ro from "./locales/ro.json";

export const SUPPORTED_LANGUAGES = ["ro", "en"];

function detectLanguage() {
  const pathLang = window.location.pathname.split("/")[1];
  if (SUPPORTED_LANGUAGES.includes(pathLang)) return pathLang;

  const storedLang = localStorage.getItem("lang");
  if (SUPPORTED_LANGUAGES.includes(storedLang)) return storedLang;

  return "ro";
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ro: { translation: ro },
  },
  lng: detectLanguage(),
  fallbackLng: "ro",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
});

export default i18n;