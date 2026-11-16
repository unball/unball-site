import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOn,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

import { useTranslatedList } from "@/hooks/useTranslatedList";
import type { ContactItem, ContactType } from "@/types/content";

const CONTACT_ICONS: Record<ContactType, ReactNode> = {
  email: <Email fontSize="small" />,
  github: <GitHub fontSize="small" />,
  instagram: <Instagram fontSize="small" />,
  linkedin: <LinkedIn fontSize="small" />,
  location: <LocationOn fontSize="small" />,
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
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1.5,
            color: "text.secondary",
          }}
        >
          {CONTACT_ICONS[item.type]}
          <Typography
            variant="body1"
            sx={(theme) => ({
              fontFamily: theme.typography.fontFamilyMono,
            })}
          >
            <Box component="span" sx={{ textTransform: "uppercase" }}>
              {item.title}:
            </Box>{" "}
            <Box
              component="a"
              {...externalLinkProps(item.link)}
              sx={{
                color: "inherit",
                textDecoration: "none",
                transition: "color 0.2s ease-in-out",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              {item.value}
            </Box>
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}
