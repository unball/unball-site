import { Box, Button, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { SectionHeader } from "@/components/common/SectionHeader";
import { useTranslatedList } from "@/hooks/useTranslatedList";
import { useLocalizedPath } from "@/i18n/useLocalizedPath";
import { BoxSection } from "@/shared/styled";
import type { PaperItem } from "@/types/content";

import type { SharedSectionProps } from "../types";
import { PaperCard } from "./PaperCard";

export type PapersSectionProps = SharedSectionProps & {
  filterType?: string;
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
  const paperItems = useTranslatedList<PaperItem>("domain.papers.items");

  const filteredItems = useMemo(() => {
    if (!filterType || filterType === "all") return paperItems;
    return paperItems.filter(
      (item) => item.type?.toLowerCase() === filterType.toLowerCase()
    );
  }, [paperItems, filterType]);

  const displayedItems =
    limit !== undefined
      ? filteredItems.slice(0, limit)
      : showHeader
        ? filteredItems.slice(0, 2)
        : filteredItems;

  const shouldShowMore =
    showMoreButton !== undefined
      ? showMoreButton
      : showHeader && filteredItems.length > 2;

  const content = (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {showHeader && (
        <SectionHeader
          subtitle={subtitle ?? t("pages.home.papers.subtitle")}
          title={title ?? t("pages.home.papers.title")}
        />
      )}
      <Stack spacing={3} sx={{ width: "100%" }}>
        {displayedItems.length > 0 ? (
          displayedItems.map((item) => (
            <PaperCard key={item.id} item={item} />
          ))
        ) : (
          <Box
            sx={{
              p: 4,
              textAlign: "center",
              border: 1,
              borderColor: "border.subtle",
              color: "text.secondary",
              fontFamily: "fontFamilyMono",
            }}
          >
            <Typography variant="body1">
              {t("domain.papers.empty", "Nenhuma publicação encontrada.")}
            </Typography>
          </Box>
        )}
      </Stack>
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
