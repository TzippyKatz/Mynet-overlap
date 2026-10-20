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
        createUser: {
          title: "Create User",
          displayedName: "Display Name",
          username: "Username",
          displayedNameRequired: "Display name is required.",
          usernameRequired: "Username is required.",
          createError: "Failed to create user. Please try again.",
          createSuccess: "User created successfully.",
          creating: "Creating...",
          submit: "Create User",
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
        createUser: {
          title: "יצירת משתמש",
          displayedName: "שם לתצוגה",
          username: "שם משתמש",
          displayedNameRequired: "יש להזין שם לתצוגה.",
          usernameRequired: "יש להזין שם משתמש.",
          createError: "יצירת המשתמש נכשלה. נסו שוב.",
          createSuccess: "המשתמש נוצר בהצלחה.",
          creating: "יוצר משתמש...",
          submit: "יצירת משתמש",
        },
      },
    },
  },
});

export default i18n;
