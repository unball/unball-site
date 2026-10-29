import { Box, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { SectionHeader } from "@/components/common/SectionHeader";
import { usePapers } from "@/hooks/usePapers";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import { BoxSection } from "@/shared/styled";
import type { PaperFilterType } from "@/types/content";

import type { SharedSectionProps } from "../types";
import { PaperList } from "./PaperList";

export { PaperList };

export type PapersSectionProps = SharedSectionProps & {
  filterType?: PaperFilterType;
  limit?: number;
  showMoreButton?: boolean;
  disableWrapper?: boolean;
};

function PapersSection({
  title,
  subtitle,
  showHeader = true,
  filterType = "all",
  limit,
  showMoreButton,
  disableWrapper = false,
}: PapersSectionProps = {}) {
  const { t } = useTranslation();
  const getPath = useLocalizedPath();

  const effectiveLimit =
    limit !== undefined ? limit : showHeader ? 2 : undefined;

  const { displayedPapers, hasMore } = usePapers({
    filterType,
    limit: effectiveLimit,
  });

  const shouldShowMore = showMoreButton ?? (showHeader && hasMore);

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
