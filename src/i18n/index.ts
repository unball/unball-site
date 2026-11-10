import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./locales/en";
import { pt } from "./locales/pt";
import { isSupportedLang } from "./routesMap";

const initialSegment = window.location.pathname.split("/")[1];
const initialLang = isSupportedLang(initialSegment) ? initialSegment : "pt";

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: initialLang,
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});
