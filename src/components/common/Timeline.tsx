import type { SxProps, Theme } from "@mui/material";
import { Box, Typography } from "@mui/material";

import { Panel } from "@/shared/styled";
import type { TimelineItem } from "@/types/content";

export type TimelineProps = {
  items: TimelineItem[];
  sx?: SxProps<Theme>;
};

const MARKER_SIZE = 10;
const MARKER_RADIUS = MARKER_SIZE / 2;
const CONNECTOR_WIDTH_XS = 16;
const CONNECTOR_WIDTH_SM = 32;
const MARKER_TOP = 24;
const LINE_EXTENSION = 48;

export function Timeline({ items, sx }: TimelineProps) {
  if (items.length === 0) return null;

  return (
    <Box
      component="ol"
      sx={[
        {
          listStyle: "none",
          m: 0,
          p: 0,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {items.map((item, index) => {
        const isLeft = index % 2 === 0;
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        return (
          <Box
            component="li"
            key={`${item.date}-${index}`}
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: {
                xs: "flex-end",
                md: isLeft ? "flex-start" : "flex-end",
              },
            }}
          >
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                left: { xs: MARKER_RADIUS, md: "50%" },
                transform: "translateX(-50%)",
                width: "1px",
                top: isFirst ? MARKER_TOP : 0,
                bottom: isLast ? "auto" : "-32px",
                height: isLast ? `${MARKER_TOP + LINE_EXTENSION}px` : "auto",
                backgroundImage: (theme) =>
                  `linear-gradient(to bottom, ${theme.palette.border.main} 2px, transparent 2px)`,
                backgroundSize: "1px 8px",
                backgroundRepeat: "repeat-y",
                backgroundPosition: "center top",
                zIndex: 0,
              }}
            />
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                top: MARKER_TOP - MARKER_RADIUS,
                left: { xs: 0, md: `calc(50% - ${MARKER_RADIUS}px)` },
                width: MARKER_SIZE,
                height: MARKER_SIZE,
                borderRadius: "50%",
                bgcolor: "primary.main",
                zIndex: 1,
              }}
            />
            <Box
              aria-hidden
              sx={{
                position: "absolute",
                top: MARKER_TOP,
                width: { xs: CONNECTOR_WIDTH_XS, sm: CONNECTOR_WIDTH_SM },
                borderTop: "1px dashed",
                borderColor: "border.main",
                left: {
                  xs: MARKER_RADIUS,
                  md: isLeft ? `calc(50% - ${CONNECTOR_WIDTH_SM}px)` : "50%",
                },
              }}
            />
            <Panel
              sx={{
                width: {
                  xs: `calc(100% - ${CONNECTOR_WIDTH_XS + MARKER_RADIUS}px)`,
                  sm: `calc(100% - ${CONNECTOR_WIDTH_SM + MARKER_RADIUS}px)`,
                  md: `calc(50% - ${CONNECTOR_WIDTH_SM}px)`,
                },
                p: { xs: 2, sm: 3 },
              }}
            >
              <Typography
                variant="h3"
                component="time"
                color="primary"
                sx={{
                  display: "block",
                  fontSize: { xs: "1.375rem", sm: "1.5rem", lg: "1.875rem" },
                }}
              >
                {item.date}
              </Typography>
              <Typography
                variant="body1"
                component="h3"
                sx={{ my: 1, fontWeight: "bold" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {item.description}
              </Typography>
            </Panel>
          </Box>
        );
      })}
    </Box>
  );
}

export default Timeline;
