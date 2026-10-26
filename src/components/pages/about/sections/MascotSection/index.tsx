import { useTranslation } from "react-i18next";

import Logo from "/images/unbolinha/bolinha_croche.png";
import HeroImage from "@/components/common/HeroImage";
import SectionHeader from "@/components/common/SectionHeader";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";

function MascotSection() {
    const { t } = useTranslation();
    return(
        <BoxSection>
            <FlexBoxBetween
                sx={{
                    width: "100%",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 6, md: 4 },
                }}
            >
                <SectionHeader 
                    title={t("pages.about.mascot.title")} 
                    description={t("pages.about.mascot.description")}
                />
                <HeroImage 
                    src={Logo} 
                    alt={t("pages.about.mascot.imageAlt")}
                    width={{ xs: 295, md: 395 }}
                />
            </FlexBoxBetween>
        </BoxSection>
    );
}

export default MascotSection;