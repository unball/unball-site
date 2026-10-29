import { useTranslation } from "react-i18next";

import { SectionHeader } from "@/components/common/SectionHeader";
import { useTranslatedList } from "@/hooks/useTranslatedList";
import { BoxSection, Panel } from "@/shared/styled";
import type { AchievementItem } from "@/types/content";

import type { SharedSectionProps } from "../types";
import { AchievementCarousel } from "./AchievementCarousel";

export type AchievementsSectionProps = SharedSectionProps & {
  bordered?: "all" | "x" | "y" | "none";
};

function AchievementsSection({
  title,
  subtitle,
  showHeader = true,
  bordered = "y",
}: AchievementsSectionProps = {}) {
  const { t } = useTranslation();
  const achievementItems = useTranslatedList<AchievementItem>(
    "domain.achievements.items"
  );

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
            subtitle={subtitle ?? t("domain.achievements.subtitle")}
            title={title ?? t("domain.achievements.title")}
            spacing={1.5}
          />
        )}

        <AchievementCarousel items={achievementItems} />
      </Panel>
    </BoxSection>
  );
}

export default AchievementsSection;
