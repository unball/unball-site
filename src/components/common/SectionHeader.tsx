import type { SxProps, Theme } from "@mui/material";
import { Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

export interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  titleVariant?: "h1" | "h2" | "h3";
  titleColor?: "text.primary" | "primary" | "secondary" | string;
  spacing?: number;
  align?: "left" | "center" | "right";
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

const ALIGNMENT_MAP = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
} as const;

export function SectionHeader({
  subtitle,
  title,
  description,
  titleVariant = "h2",
  titleColor = "text.primary",
  spacing = 2,
  align = "left",
  sx,
  children,
}: SectionHeaderProps) {
  return (
    <Stack
      component="header"
      spacing={spacing}
      sx={[
        {
          alignItems: ALIGNMENT_MAP[align],
          textAlign: align,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {subtitle && (
        <Typography variant="h6" component="span">
          {subtitle}
        </Typography>
      )}
      <Typography variant={titleVariant} color={titleColor}>
        {title}
      </Typography>
      {description && (
        <Typography color="text.secondary" sx={{ whiteSpace: "pre-line" }}>
          {description}
        </Typography>
      )}
      {children}
    </Stack>
  );
}
