import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

import { SectionHeader } from "@/components/common/SectionHeader";
import type { SharedSectionProps } from "@/components/sections/types";
import { useTranslatedList } from "@/hooks/useTranslatedList";
import { BoxSection, Panel, type PanelProps } from "@/shared/styled";
import type { PartnerItem } from "@/types/content";

import { PartnerCard } from "./PartnerCard";

export type PartnerSectionProps = SharedSectionProps & {
  bordered?: PanelProps["bordered"];
};

function PartnerSection({
  title,
  subtitle,
  showHeader = true,
  bordered = "y",
}: PartnerSectionProps = {}) {
  const { t } = useTranslation();
  const partnerItems = useTranslatedList<PartnerItem>("domain.partners.items");

  return (
    <BoxSection>
      <Panel
        bordered={bordered}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingY: { xs: 4, sm: 6, md: 10, xl: 12 },
          paddingX: { xs: 2, sm: 3, md: 4, xl: 6 },
          gap: { xs: 3, sm: 4, md: 6, xl: 8 },
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {showHeader && (
          <SectionHeader
            subtitle={subtitle ?? t("pages.home.partners.subtitle")}
            title={title ?? t("pages.home.partners.title")}
            spacing={1.5}
          />
        )}
        <Grid container spacing={1} sx={{ width: "100%" }}>
          {partnerItems.map((item) => (
            <Grid key={item.name} size={{ xs: 12, sm: 6, md: 3 }}>
              <PartnerCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Panel>
    </BoxSection>
  );
}

export default PartnerSection;
