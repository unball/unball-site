import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

import { useTranslatedList } from "@/hooks/useTranslatedList";
import type { ContactItem, ContactType } from "@/types/content";

const CONTACT_ICONS: Record<ContactType, ReactNode> = {
  email: <Email fontSize="small" />,
  github: <GitHub fontSize="small" />,
  instagram: <Instagram fontSize="small" />,
  linkedin: <LinkedIn fontSize="small" />,
};

function externalLinkProps(href: string) {
  return href.startsWith("mailto:")
    ? { href }
    : { href, target: "_blank", rel: "noopener noreferrer" };
}

export function ContactLinks() {
  const contactItems = useTranslatedList<ContactItem>("domain.contact.items");

  return (
    <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
      {contactItems.map((item) => (
        <Box
          key={item.type}
          component="a"
          {...externalLinkProps(item.link)}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1.5,
            textDecoration: "none",
            color: "text.secondary",
            transition: "color 0.2s ease-in-out",
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          {CONTACT_ICONS[item.type]}
          <Typography
            variant="body1"
            sx={(theme) => ({
              fontFamily: theme.typography.fontFamilyMono,
            })}
          >
            {item.value}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}
