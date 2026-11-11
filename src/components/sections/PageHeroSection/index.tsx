import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";

import type { SectionHeaderProps } from "@/components/common/SectionHeader";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { SectionImageProps } from "@/components/common/SectionImage";
import SectionImage from "@/components/common/SectionImage";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";

export interface PageHeroSectionProps {
  title: string;
  description: string;
  subtitle?: string;
  titleVariant?: SectionHeaderProps["titleVariant"];
  titleColor?: SectionHeaderProps["titleColor"];
  headerSpacing?: number;
  headerSx?: SxProps<Theme>;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: SectionImageProps["width"];
  showDimensions?: boolean;
  sx?: SxProps<Theme>;
  children?: ReactNode;
}

function PageHeroSection({
  title,
  description,
  subtitle,
  titleVariant = "h1",
  titleColor,
  headerSpacing,
  headerSx,
  imageSrc,
  imageAlt,
  imageWidth,
  showDimensions,
  sx,
  children,
}: PageHeroSectionProps) {
  return (
    <BoxSection>
      <FlexBoxBetween
        sx={[
          {
            width: "100%",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 4 },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <SectionHeader
          subtitle={subtitle}
          title={title}
          description={description}
          titleVariant={titleVariant}
          titleColor={titleColor}
          spacing={headerSpacing}
          sx={headerSx}
        >
          {children}
        </SectionHeader>
        <SectionImage
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          showDimensions={showDimensions}
        />
      </FlexBoxBetween>
    </BoxSection>
  );
}

export default PageHeroSection;
