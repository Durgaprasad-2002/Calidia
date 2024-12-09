import i18next from "i18next";
import Backend from "i18next-http-backend";
// import Cache from 'i18next-localstorage-cache';
// import postProcessor from 'i18next-sprintf-postprocessor';
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18next
  .use(Backend)
  //   .use(Cache)
  .use(LanguageDetector)
  //   .use(postProcessor)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
