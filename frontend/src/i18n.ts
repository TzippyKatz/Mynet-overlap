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
        posts: {
          title: "Posts",
          loadError: "Failed to load posts. Please try again.",
          noSearchResults: "No posts found in this search.",
          empty: "No posts found.",
          viewMedia: "View media",
          likes_one: "{{count}} like",
          likes_other: "{{count}} likes",
          searchPlaceholder: "search by post name.",
        },
        createPost: {
          title: "Create Post",
          postName: "Post Name",
          text: "Text",
          media: "Media URL",
          postNameRequired: "Post name is required.",
          textRequired: "Text is required.",
          textMaxLength: "Text up to 200 letters.",
          mediaInvalid: "Please enter a valid URL.",
          createError: "Failed to create post. Please try again.",
          createSuccess: "Post created successfully.",
          creating: "Creating...",
          submit: "Create Post",
        },
        navbar: {
          users: "Users",
          createUser: "Create User",
          posts: "Posts",
          createPost: "Create Post",
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
        posts: {
          title: "פוסטים",
          loadError: "טעינת הפוסטים נכשלה. נסו שוב.",
          noSearchResults: "לא נמצאו פוסטים שמתאימים לחיפוש זה.",
          empty: "לא נמצאו פוסטים.",
          viewMedia: "צפייה במדיה",
          likes_one: "{{count}} לייק",
          likes_other: "{{count}} לייקים",
          searchPlaceholder: "חיפוש לפי שם.",
        },
        createPost: {
          title: "יצירת פוסט",
          postName: "שם הפוסט",
          text: "תוכן הפוסט",
          media: "כתובת מדיה",
          postNameRequired: "יש להזין שם לפוסט.",
          textRequired: "יש להזין תוכן לפוסט.",
          textMaxLength: "יש להזין עד 200 אותיות.",
          mediaInvalid: "יש להזין כתובת URL תקינה.",
          createError: "יצירת הפוסט נכשלה. נסו שוב.",
          createSuccess: "הפוסט נוצר בהצלחה.",
          creating: "יוצר פוסט...",
          submit: "יצירת פוסט",
        },
        navbar: {
          users: "משתמשים",
          createUser: "יצירת משתמש",
          posts: "פוסטים",
          createPost: "יצירת פוסט",
        },
      },
    },
  },
});

export default i18n;
