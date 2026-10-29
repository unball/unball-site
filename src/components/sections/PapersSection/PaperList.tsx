import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import type { PaperItem } from "@/types/content";

import { PaperCard } from "./PaperCard";

export interface PaperListProps {
  items: PaperItem[];
  emptyMessage?: string;
}

export function PaperList({ items, emptyMessage }: PaperListProps) {
  const { t } = useTranslation();

  if (items.length === 0) {
    return (
      <Box
        sx={{
          p: 4,
          textAlign: "center",
          border: 1,
          borderColor: "border.subtle",
          color: "text.secondary",
          fontFamily: "fontFamilyMono",
          width: "100%",
        }}
      >
        <Typography variant="body1">
          {emptyMessage ??
            t(
              "domain.papers.empty",
              "Nenhuma publicação encontrada para o filtro selecionado."
            )}
        </Typography>
      </Box>
    );
  }

  return (
    <Stack spacing={3} sx={{ width: "100%" }}>
      {items.map((item) => (
        <PaperCard key={item.id} item={item} />
      ))}
    </Stack>
  );
}
