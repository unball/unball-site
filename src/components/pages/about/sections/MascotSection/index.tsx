import { useTranslation } from "react-i18next";

import MascotImage from "@/assets/images/unbolinha/bolinha_croche.png";
import PageHeroSection from "@/components/sections/PageHeroSection";

function MascotSection() {
  const { t } = useTranslation();

  return (
    <PageHeroSection
      title={t("pages.about.mascot.title")}
      description={t("pages.about.mascot.description")}
      titleVariant="h2"
      imageSrc={MascotImage}
      imageAlt={t("pages.about.mascot.imageAlt")}
      imageWidth={{ xs: 295, md: 395 }}
      sx={{
        borderTop: 1,
        borderBottom: 1,
        borderColor: "border.main",
        py: 10,
      }}
    />
  );
}

export default MascotSection;
