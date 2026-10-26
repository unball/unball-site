import { useTranslation } from "react-i18next";

import Logo from "/images/unbolinha/bolinha_croche.png";
import SectionHeader from "@/components/common/SectionHeader";
import SectionImage from "@/components/common/SectionImage";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";

function MascotSection() {
    const { t } = useTranslation();
    return (
        <BoxSection>
            <FlexBoxBetween
            sx={{
                width: "100%",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 6, md: 4 },
                borderTop: 1,
                borderColor: "border.main",
                py: 10,
            }}
            >
            <SectionHeader
                title={t("pages.about.mascot.title")}
                description={t("pages.about.mascot.description")}
            />
            <SectionImage
                src={Logo}
                alt={t("pages.about.mascot.imageAlt")}
                width={{ xs: 295, md: 395 }}
            />
            </FlexBoxBetween>
        </BoxSection>
    );
}

export default MascotSection;
