import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import MascotImage from "@/assets/images/unbolinha/bolinha_peruano.png";
import PageHeroSection from "@/components/sections/PageHeroSection";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

function Partners() {
  const { t } = useTranslation();
  const getPath = useLocalizedPath();

  return (
    <>
      <PageHeroSection
        title={t("pages.partners.hero.title")}
        description={t("pages.partners.hero.description")}
        imageSrc={MascotImage}
        imageAlt={t("pages.partners.hero.imageAlt")}
      >
        <Button component={Link} to={getPath("contact")} variant="contained">
          {t("pages.partners.hero.ctaPartners")}
        </Button>
      </PageHeroSection>
    </>
  );
}

export default Partners;
