import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import SectionHeader from "@/components/common/SectionHeader";
import { BoxSection } from "@/shared/styled";

function MascotSection() {
    const { t } = useTranslation();
    return(
        <BoxSection>
            <Stack 
                spacing={6} 
                sx={{ 
                    width: "100%", 
                    borderTop: 1, 
                    borderColor: "border.main",
                    py: 10
                }}
            >
                <SectionHeader 
                    title={t("pages.about.mascot.title")} 
                    description={t("pages.about.mascot.description")}
                />
                
            </Stack>
        </BoxSection>
    );
}

export default MascotSection;