import { useTranslation } from "react-i18next";

import { SectionHeader } from "@/components/common/SectionHeader";
import type { SharedSectionProps } from "@/components/sections/types";
import { useTranslatedList } from "@/hooks/useTranslatedList";
import { BoxSection, type PanelProps, SectionPanel } from "@/shared/styled";
import type { AchievementItem } from "@/types/content";

import { AchievementCarousel } from "./AchievementCarousel";

export type AchievementsSectionProps = SharedSectionProps & {
  bordered?: PanelProps["bordered"];
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
      <SectionPanel bordered={bordered}>
        {showHeader && (
          <SectionHeader
            subtitle={subtitle ?? t("domain.achievements.subtitle")}
            title={title ?? t("domain.achievements.title")}
            spacing={1.5}
          />
        )}

        <AchievementCarousel items={achievementItems} />
      </SectionPanel>
    </BoxSection>
  );
}

export default AchievementsSection;
