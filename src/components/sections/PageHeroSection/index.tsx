import { SectionHeader } from "@/components/common/SectionHeader";
import SectionImage from "@/components/common/SectionImage";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";

export interface PageHeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

function PageHeroSection({
  title,
  description,
  imageSrc,
  imageAlt,
}: PageHeroSectionProps) {
  return (
    <BoxSection>
      <FlexBoxBetween
        sx={{
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 4 },
        }}
      >
        <SectionHeader
          title={title}
          description={description}
          titleVariant="h1"
        />
        <SectionImage src={imageSrc} alt={imageAlt} />
      </FlexBoxBetween>
    </BoxSection>
  );
}

export default PageHeroSection;

