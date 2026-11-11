import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Logo from "@/assets/images/unbolinha/bolinha_sentado.png";
import PageHeroSection from "@/components/sections/PageHeroSection";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";

function HeroSection() {
  const { t } = useTranslation();
  const getPath = useLocalizedPath();

  return (
    <PageHeroSection
      subtitle={t("pages.home.hero.subtitle")}
      title={t("pages.home.hero.title")}
      description={t("pages.home.hero.description")}
      titleColor="primary"
      headerSpacing={3}
      headerSx={{ flex: 1, maxWidth: { md: "50%" } }}
      imageSrc={Logo}
      imageAlt={t("pages.home.hero.imageAlt")}
      showDimensions
    >
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        <Button component={Link} to={getPath("partners")} variant="contained">
          {t("pages.home.hero.ctaPartners")}
        </Button>
        <Button component={Link} to={getPath("about")} variant="outlined">
          {t("pages.home.hero.ctaAbout")}
        </Button>
      </Box>
    </PageHeroSection>
  );
}

export default HeroSection;
