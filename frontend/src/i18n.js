import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "test-msg": "Click on the Vite and React logos to learn more",
      "select-lang": "Select Language",
      "en": "English",
      "id": "Indonesia",
    }
  },
  id: {
    translation: {
      "test-msg": "Klik logo Vite dan React untuk mempelajari lebih jauh",
      "select-lang": "Pilih Bahasa",
      "en": "Inggris",
      "id": "Indonesia"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
