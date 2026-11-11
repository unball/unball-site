import { useTranslation } from "react-i18next";

import MascotImage from "@/assets/images/unbolinha/bolinha_ginasta.png";
import PageHeroSection from "@/components/sections/PageHeroSection";

import PaperSection from "./sections/PaperSection";

function Papers() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeroSection
        title={t("pages.papers.hero.title")}
        description={t("pages.papers.hero.description")}
        imageSrc={MascotImage}
        imageAlt={t("pages.papers.hero.imageAlt")}
      />
      <PaperSection />
    </>
  );
}

export default Papers;
