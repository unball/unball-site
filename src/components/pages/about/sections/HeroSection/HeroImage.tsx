import { Box } from "@mui/material";
import type { ResponsiveStyleValue, SxProps, Theme } from "@mui/system";

import defaultHeroImg from "@/assets/images/logos/unball-logo.png";

export type HeroImageProps = {
  src?: string;
  alt?: string;
  width?: ResponsiveStyleValue<string | number>;
  sx?: SxProps<Theme>;
};

const DEFAULT_WIDTH = { xs: "100%", sm: "380px", lg: "410px", xl: "650px" };

export function HeroImage({
  src = defaultHeroImg,
  alt = "",
  width = DEFAULT_WIDTH,
  sx,
}: HeroImageProps) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
        boxSizing: "border-box",
        ...sx,
      }}
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
          src={src}
          alt={alt}
          sx={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: 1,
          }}
        />
      </Box>
    </Box>
  );
}

export default HeroImage;
