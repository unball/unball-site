import { ArrowForward } from "@mui/icons-material";
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { TagCard } from "@/components/common/TagCard";
import type { PaperItem } from "@/types/content";

import { YearBadge } from "./YearBadge";

export type PaperCardProps = {
  item: PaperItem;
};

export function PaperCard({ item }: PaperCardProps) {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const abstractRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = abstractRef.current;
    if (!el) return;

    const check = () => {
      if (!expanded) setIsOverflowing(el.scrollHeight > el.clientHeight + 1);
    };
    check();

    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, [expanded, item.abstract]);

  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 3 },
          alignItems: { xs: "flex-start", sm: "stretch" },
        }}
      >
        <Box sx={{ alignSelf: { xs: "flex-start", sm: "auto" } }}>
          <YearBadge date={new Date(item.date)} />
        </Box>
        <Stack spacing={1} sx={{ flex: 1, minWidth: 0 }}>
          <CardHeader
            sx={{ padding: 0 }}
            title={
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  {item.tags &&
                    item.tags.map((tag) => <TagCard tag={tag} key={tag} />)}
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    mb: 2,
                    fontSize: { xs: "1.1rem", sm: "1.5rem", md: "1.75rem" },
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            }
            subheader={
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                }}
              >
                {t("domain.papers.authorsLabel", "AUTORES:")}{" "}
                {Array.isArray(item.authors) && item.authors.join(", ")}
              </Typography>
            }
          />
          <CardContent sx={{ padding: 0, mt: 2 }}>
            <Typography
              ref={abstractRef}
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem" },
                ...(!expanded && {
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }),
              }}
            >
              {item.abstract}
            </Typography>
            {(isOverflowing || expanded) && (
              <Button
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                sx={{
                  color: "primary.main",
                  mt: 1,
                  px: 0,
                  minWidth: 0,
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  textTransform: "none",
                  "&:hover": { backgroundColor: "transparent", textDecoration: "underline" },
                }}
              >
                {expanded
                  ? t("domain.papers.readLess", "Leia menos")
                  : t("domain.papers.readMore", "Leia mais")}
              </Button>
            )}
          </CardContent>
          <Button
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={(theme) => ({
              color: "text.primary",
              gap: 2,
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              width: "fit-content",
              maxWidth: "100%",
              borderBottom: 1,
              borderColor: "border.main",
              mt: 1,
              px: 1,
              py: 0.5,
              "&:hover": {
                backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                borderBottomColor: "secondary.main",
              },
            })}
          >
            {item.ctaText}
            <ArrowForward sx={{ fontSize: "inherit" }} />
          </Button>
        </Stack>
      </Box>
    </Card>
  );
}
