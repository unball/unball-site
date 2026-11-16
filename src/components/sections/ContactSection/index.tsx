import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import MascotImage from "@/assets/images/unbolinha/bolinha_bandeira.png";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SectionImage } from "@/components/common/SectionImage";
import type { SharedSectionProps } from "@/components/sections/types";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";

import { ContactForm } from "./ContactForm";

export type ContactSectionProps = SharedSectionProps;

function ContactSection({
  title,
  subtitle,
  showHeader = true,
}: ContactSectionProps = {}) {
  const { t } = useTranslation();

  return (
    <BoxSection sx={{ width: "100%" }}>
      <FlexBoxBetween
        sx={{
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 },
          alignItems: { xs: "stretch", md: "flex-start" },
        }}
      >
        <Stack
          spacing={4}
          sx={{
            width: "100%",
            maxWidth: { md: "45%" },
          }}
        >
          {showHeader && (
            <SectionHeader
              subtitle={subtitle ?? t("pages.home.contact.subtitle")}
              title={title ?? t("pages.home.contact.title")}
              description={t("pages.home.contact.description")}
            />
          )}
          <SectionImage
            src={MascotImage}
            alt={t("pages.home.contact.imageAlt")}
            maxHeight="489px"
          />
        </Stack>
        <Stack sx={{ width: "100%", maxWidth: { md: "55%" } }}>
          <ContactForm />
        </Stack>
      </FlexBoxBetween>
    </BoxSection>
  );
}

export default ContactSection;
