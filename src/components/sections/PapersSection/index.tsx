import { Box, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { SectionHeader } from "@/components/common/SectionHeader";
import type { SharedSectionProps } from "@/components/sections/types";
import { usePapers } from "@/hooks/usePapers";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import { BoxSection } from "@/shared/styled";
import type { PaperFilterType } from "@/types/content";

import { PaperList } from "./PaperList";

export type PapersSectionProps = SharedSectionProps & {
  filterType?: PaperFilterType;
  disableWrapper?: boolean;
};

function PapersSection({
  title,
  subtitle,
  showHeader = true,
  filterType = "all",
  disableWrapper = false,
}: PapersSectionProps = {}) {
  const { t } = useTranslation();
  const getPath = useLocalizedPath();

  const { displayedPapers, hasMore } = usePapers({
    filterType,
    limit: showHeader ? 2 : undefined,
  });

  const shouldShowMore = showHeader && hasMore;

  const content = (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {showHeader && (
        <SectionHeader
          subtitle={subtitle ?? t("pages.home.papers.subtitle")}
          title={title ?? t("pages.home.papers.title")}
        />
      )}
      <PaperList items={displayedPapers} />
      {shouldShowMore && (
        <Box sx={{ display: "flex", pt: 2 }}>
          <Button component={Link} to={getPath("papers")} variant="outlined">
            {t("pages.home.papers.ctaMore")}
          </Button>
        </Box>
      )}
    </Stack>
  );

  if (disableWrapper) {
    return <Box sx={{ flex: 1, width: "100%", minWidth: 0 }}>{content}</Box>;
  }

  return <BoxSection>{content}</BoxSection>;
}

export default PapersSection;
