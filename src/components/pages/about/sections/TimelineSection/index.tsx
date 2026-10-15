import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import SectionHeader from "@/components/common/SectionHeader";
import Timeline from "@/components/common/Timeline";
import { useTranslatedList } from "@/hooks/useTranslatedList";
import { BoxSection } from "@/shared/styled";
import type { TimelineItem } from "@/types/content";

function TimelineSection() {
  const { t } = useTranslation();
  const timelineItems = useTranslatedList<TimelineItem>(
    "pages.about.timeline.items",
  );
  return (
    <BoxSection>
      <Stack spacing={6} sx={{ width: "100%" }}>
        <SectionHeader title={t("pages.about.timeline.title")} />
        <Timeline items={timelineItems} />
      </Stack>
    </BoxSection>
  );
}

export default TimelineSection;