import { useTranslation } from "react-i18next";

import MascotImage from "@/assets/images/unbolinha/bolinha_peruano.png";
import PageHeroSection from "@/components/sections/PageHeroSection";

function Partners() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeroSection
        title={t("pages.partners.hero.title")}
        description={t("pages.partners.hero.description")}
        imageSrc={MascotImage}
        imageAlt={t("pages.partners.hero.imageAlt")}
      />
    </>
  );
}

export default Partners;
