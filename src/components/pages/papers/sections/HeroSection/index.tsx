import { useTranslation } from "react-i18next";

import Logo from "/images/unbolinha/bolinha_ginasta.png";
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
          title={t("pages.papers.hero.title")}
          description={t("pages.papers.hero.description")}
        />
        <SectionImage src={Logo} alt={t("pages.papers.hero.imageAlt")} />
      </FlexBoxBetween>
    </BoxSection>
  );
}

export default HeroSection;