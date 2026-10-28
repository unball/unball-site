import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import { SectionHeader } from "@/components/common/SectionHeader";
import { useTranslatedList } from "@/hooks/useTranslatedList";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";
import type { LeagueItem } from "@/types/content";

import { LeagueCard } from "./LeagueCard";

type LeagueSectionProps = {
  title?: string;
  subtitle?: string;
};

function LeagueSection({ title, subtitle }: LeagueSectionProps) {
  const { t } = useTranslation();
  const leagueItems = useTranslatedList<LeagueItem>("domain.league.items");

  return (
    <BoxSection>
      <FlexBoxBetween sx={{ width: "100%" }}>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <SectionHeader
            subtitle={subtitle ?? t("domain.league.subtitle")}
            title={title ?? t("domain.league.title")}
          />
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            sx={{ width: "100%" }}
          >
            {leagueItems.map((item) => (
              <LeagueCard key={item.shortName} item={item} />
            ))}
          </Stack>
        </Stack>
      </FlexBoxBetween>
    </BoxSection>
  );
}

export default LeagueSection;
