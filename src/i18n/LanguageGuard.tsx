import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Outlet, useParams } from "react-router-dom";

import { isSupportedLang } from "./routesMap";

function LanguageGuard() {
  const { lang } = useParams<{ lang?: string }>();
  const { i18n } = useTranslation();

  const isValid = isSupportedLang(lang);

  useEffect(() => {
    if (!isValid) return;
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [isValid, lang, i18n]);

  if (!isValid) {
    return <Navigate to="/pt" replace />;
  }

  return <Outlet />;
}

export default LanguageGuard;
