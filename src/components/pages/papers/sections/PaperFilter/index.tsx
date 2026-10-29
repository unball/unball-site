import { alpha, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import type { PaperFilterType } from "@/types/content";

export type { PaperFilterType };

export interface PaperFilterProps {
  activeFilter: PaperFilterType;
  onFilterChange: (filter: PaperFilterType) => void;
}

const FILTER_OPTIONS: {
  key: PaperFilterType;
  labelKey: string;
  defaultLabel: string;
}[] = [
  { key: "all", labelKey: "pages.papers.filters.all", defaultLabel: "TODOS" },
  { key: "tdp", labelKey: "pages.papers.filters.tdp", defaultLabel: "TDPS" },
  {
    key: "article",
    labelKey: "pages.papers.filters.article",
    defaultLabel: "ARTIGOS",
  },
  { key: "tcc", labelKey: "pages.papers.filters.tcc", defaultLabel: "TCCS" },
];

function PaperFilter({ activeFilter, onFilterChange }: PaperFilterProps) {
  const { t } = useTranslation();

  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      spacing={1.5}
      sx={{
        flexWrap: { xs: "wrap", md: "nowrap" },
        width: { xs: "100%", md: "180px", lg: "220px" },
        flexShrink: 0,
        position: { md: "sticky" },
        top: { md: 100 },
      }}
    >
      {FILTER_OPTIONS.map((option) => {
        const isActive = activeFilter === option.key;
        return (
          <Button
            key={option.key}
            onClick={() => onFilterChange(option.key)}
            sx={(theme) => ({
              fontFamily: theme.typography.fontFamilyMono,
              fontSize: { xs: "0.75rem", sm: "0.8125rem" },
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              px: { xs: 2, sm: 2.5 },
              py: { xs: 0.75, sm: 1.25 },
              width: { xs: "auto", md: "100%" },
              justifyContent: "center",
              minWidth: "auto",
              borderRadius: 0,
              transition: "all 0.2s ease-in-out",
              ...(isActive
                ? {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    border: `1px solid ${theme.palette.primary.main}`,
                    "&:hover": {
                      backgroundColor: theme.palette.primary.dark,
                      borderColor: theme.palette.primary.dark,
                    },
                  }
                : {
                    backgroundColor: alpha(theme.palette.background.paper, 0.4),
                    color: theme.palette.text.primary,
                    border: `1px solid ${theme.palette.border.subtle}`,
                    "&:hover": {
                      backgroundColor: alpha(
                        theme.palette.secondary.main,
                        0.15
                      ),
                      borderColor: theme.palette.secondary.main,
                      color: theme.palette.text.primary,
                    },
                  }),
            })}
          >
            {t(option.labelKey, option.defaultLabel)}
          </Button>
        );
      })}
    </Stack>
  );
}

export default PaperFilter;
