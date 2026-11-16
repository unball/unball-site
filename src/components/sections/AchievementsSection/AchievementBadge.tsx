import {
  EmojiEventsOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { alpha, Box, ButtonBase, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

import type { AchievementIcon, AchievementItem } from "@/types/content";

export type AchievementBadgeProps = {
  achievement: AchievementItem;
  onClick?: () => void;
};

const ICONS: Record<AchievementIcon, ReactNode> = {
  trophy: <EmojiEventsOutlined />,
  medal: <WorkspacePremiumOutlined />,
};

const CIRCLE_SIZE = { xs: 100, sm: 130, md: 150, lg: 175, xl: 208 };
const ICON_SIZE = { xs: 40, sm: 52, md: 64, lg: 72, xl: 88 };

export function AchievementBadge({
  achievement,
  onClick,
}: AchievementBadgeProps) {
  const { title, competition, year } = achievement;
  const icon = (achievement.icon && ICONS[achievement.icon]) || (
    <EmojiEventsOutlined />
  );

  return (
    <ButtonBase
      onClick={onClick}
      focusRipple
      sx={(theme) => ({
        display: "block",
        textAlign: "center",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.04)",
        },
        "&:hover .achievement-circle": {
          boxShadow: `0 0 24px ${alpha(theme.palette.primary.main, 0.3)}`,
        },
      })}
    >
      <Stack spacing={{ xs: 1.5, md: 2.5 }} sx={{ alignItems: "center" }}>
        <Box
          className="achievement-circle"
          sx={{
            width: CIRCLE_SIZE,
            height: CIRCLE_SIZE,
            borderRadius: "50%",
            border: 1,
            borderColor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "background.default",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Box
            sx={{
              color: "primary.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& .MuiSvgIcon-root": {
                fontSize: ICON_SIZE,
              },
            }}
          >
            {icon}
          </Box>
        </Box>

        <Stack>
          <Typography
            variant="h3"
            color="primary"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem", xl: "1.65rem" },
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "0.7rem", md: "0.8rem", xl: "0.9rem" },
              color: "text.primary",
            }}
          >
            {competition}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "0.7rem", md: "0.8rem", xl: "0.9rem" },
              color: "secondary.main",
            }}
          >
            {year}
          </Typography>
        </Stack>
      </Stack>
    </ButtonBase>
  );
}
