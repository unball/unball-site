import SectionHeader from "@/components/common/SectionHeader";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";
import { useTranslation } from "react-i18next";

import HeroImage from "./HeroImage";

function HeroSection() {
  const { t } = useTranslation();
  return (
    <BoxSection>
      <FlexBoxBetween
        sx={{
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 4 },
          color: "text.primary",
        }}
      >
        <SectionHeader title={t("pages.about.hero.title")} />
        <HeroImage alt={t("pages.about.hero.imageAlt")} />
      </FlexBoxBetween>
    </BoxSection>
  );
}

export default HeroSection;