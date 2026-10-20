import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        users: {
          title: "Users",
          empty: "No users found.",
          loadError: "Failed to load users. Please try again.",
        },
      },
    },
    he: {
      translation: {
        users: {
          title: "משתמשים",
          empty: "לא נמצאו משתמשים.",
          loadError: "טעינת המשתמשים נכשלה. נסו שוב.",
        },
      },
    },
  },
});

export default i18n;
