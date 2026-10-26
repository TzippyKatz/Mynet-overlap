import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./assets/i18n/en.json";
import translationHE from "./assets/i18n/he.json";

const resources = {
  en: {
    translation: translationEN,
  },
  he: {
    translation: translationHE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  defaultNS: "translation",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
