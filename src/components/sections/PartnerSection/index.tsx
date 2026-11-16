import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

import { SectionHeader } from "@/components/common/SectionHeader";
import type { SharedSectionProps } from "@/components/sections/types";
import { useTranslatedList } from "@/hooks/useTranslatedList";
import { BoxSection, type PanelProps, SectionPanel } from "@/shared/styled";
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
      <SectionPanel bordered={bordered}>
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
      </SectionPanel>
    </BoxSection>
  );
}

export default PartnerSection;
