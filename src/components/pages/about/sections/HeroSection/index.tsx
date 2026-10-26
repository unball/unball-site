import { useTranslation } from "react-i18next";

import Logo from "@/assets/images/logos/unball-logo.png";
import SectionHeader from "@/components/common/SectionHeader";
import SectionImage from "@/components/common/SectionImage";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";

function HeroSection() {
  const { t } = useTranslation();
  return (
    <BoxSection>
      <FlexBoxBetween
        sx={{
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 4 },
        }}
      >
        <SectionHeader
          title={t("pages.about.hero.title")}
          description={t("domain.about.description")}
        />
        <SectionImage src={Logo} alt={t("pages.about.hero.imageAlt")} />
      </FlexBoxBetween>
    </BoxSection>
  );
}

export default HeroSection;
