import type { SxProps, Theme } from "@mui/material";
import { Box, Typography, useTheme } from "@mui/material";
import type { ResponsiveStyleValue } from "@mui/system";
import { useEffect, useRef, useState } from "react";

import defaultHeroImg from "@/assets/images/unbolinha/bolinha_sentado.png";

export type BadgePosition = "top" | "right" | "bottom" | "left";

export type TextBadgeProps = {
  value: number | string;
  unit?: string;
  position?: BadgePosition;
  sx?: SxProps<Theme>;
};

const positionStyles: Record<BadgePosition, SxProps<Theme>> = {
  top: {
    top: "-22px",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  right: {
    right: "-22px",
    top: "50%",
    transform: "translate(50%, -50%) rotate(90deg)",
  },
  bottom: {
    bottom: "-22px",
    left: "50%",
    transform: "translate(-50%, 50%)",
  },
  left: {
    left: "-22px",
    top: "50%",
    transform: "translate(-50%, -50%) rotate(-90deg)",
  },
};

function TextBadge({ value, unit = "px", position, sx }: TextBadgeProps) {
  const basePositionSx = position ? positionStyles[position] : {};
  return (
    <Box
      sx={[
        {
          position: "absolute",
          backgroundColor: "background.default",
          color: "text.primary",
          px: 1,
          py: 0.25,
          pointerEvents: "none",
          ...basePositionSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Typography
        sx={(theme) => ({
          fontFamily: theme.typography.fontFamilyMono,
          fontSize: "0.75rem",
          whiteSpace: "nowrap",
        })}
      >
        {unit ? `${value} ${unit}` : value}
      </Typography>
    </Box>
  );
}

export type HeroImageProps = {
  src?: string;
  alt?: string;
  width?: ResponsiveStyleValue<string | number>;
  showDimensions?: boolean;
  sx?: SxProps<Theme>;
};

const DEFAULT_WIDTH = { xs: "100%", sm: "380px", lg: "410px", xl: "650px" };

export function HeroImage({
  src = defaultHeroImg,
  alt = "",
  width = DEFAULT_WIDTH,
  showDimensions = false,
  sx,
}: HeroImageProps) {
  const theme = useTheme();
  const imgRef = useRef<HTMLImageElement>(null);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 380,
    height: 383,
  });

  const updateDimensions = () => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setDimensions({
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        });
      }
    }
  };

  useEffect(() => {
    if (!showDimensions) return;

    updateDimensions();
    const imgEl = imgRef.current;
    if (!imgEl) return;

    const observer = new ResizeObserver(() => {
      updateDimensions();
    });
    observer.observe(imgEl);

    return () => {
      observer.disconnect();
    };
  }, [showDimensions]);

  const primaryColor = theme.palette.text.primary;
  const { width: imgW, height: imgH } = dimensions;

  return (
    <Box
      sx={[
        {
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
          boxSizing: "border-box",
          ...(showDimensions && {
            pt: "32px",
            pr: "44px",
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        sx={{
          position: "relative",
          width,
          maxWidth: "100%",
          display: "inline-block",
        }}
      >
        <Box
          component="img"
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={showDimensions ? updateDimensions : undefined}
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: 1,
          }}
        />

        {showDimensions && (
          <>
            <Box
              component="svg"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "visible",
                pointerEvents: "none",
              }}
            >
              <line
                x1="0"
                y1="-22"
                x2={imgW}
                y2="-22"
                stroke={primaryColor}
                strokeWidth="0.5"
              />
              <polygon points="0,-22 8,-26 6,-22 8,-18" fill={primaryColor} />
              <polygon
                points={`${imgW},-22 ${imgW - 8},-26 ${imgW - 6},-22 ${imgW - 8},-18`}
                fill={primaryColor}
              />

              <line
                x1={imgW + 22}
                y1="0"
                x2={imgW + 22}
                y2={imgH}
                stroke={primaryColor}
                strokeWidth="0.5"
              />
              <polygon
                points={`${imgW + 22},0 ${imgW + 18},8 ${imgW + 22},6 ${imgW + 26},8`}
                fill={primaryColor}
              />
              <polygon
                points={`${imgW + 22},${imgH} ${imgW + 18},${imgH - 8} ${imgW + 22},${imgH - 6} ${imgW + 26},${imgH - 8}`}
                fill={primaryColor}
              />
            </Box>
            <TextBadge value={imgW} position="top" />
            <TextBadge value={imgH} position="right" />
          </>
        )}
      </Box>
    </Box>
  );
}

export default HeroImage;
