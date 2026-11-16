import {
  Email,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOn,
} from "@mui/icons-material";
import {
  alpha,
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  type Theme,
  Typography,
} from "@mui/material";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Logo from "@/assets/images/logos/unball-logo.png";
import { useNavItems } from "@/hooks/useNavItems";
import { useTranslatedList } from "@/hooks/useTranslatedList";
import { FlexBoxBetween } from "@/shared/styled";
import type {
  ContactItem,
  ContactType,
  InstitutionalItem,
} from "@/types/content";

const CONTACT_ICONS: Record<ContactType, ReactNode> = {
  email: <Email fontSize="small" />,
  github: <GitHub fontSize="small" />,
  instagram: <Instagram fontSize="small" />,
  linkedin: <LinkedIn fontSize="small" />,
  location: <LocationOn fontSize="small" />,
};

const FOOTER_LINK_SX = {
  color: "text.secondary",
  textDecoration: "none",
  transition: "color 0.2s ease-in-out",
  "&:hover": {
    color: "primary.main",
  },
} as const;

const FOOTER_HEADING_SX = (theme: Theme) => ({
  fontFamily: theme.typography.fontFamilyMono,
  fontSize: "0.875rem",
  color: "text.primary",
  textTransform: "uppercase",
});

function externalLinkProps(href: string) {
  return href.startsWith("mailto:")
    ? { href }
    : { href, target: "_blank", rel: "noopener noreferrer" };
}

function Footer() {
  const { t } = useTranslation();
  const navItems = useNavItems();
  const contactItems = useTranslatedList<ContactItem>("domain.contact.items");
  const institutionalItems = useTranslatedList<InstitutionalItem>(
    "footer.institutional"
  );

  return (
    <Box
      component="footer"
      sx={(theme) => ({
        width: "100%",
        backgroundColor: theme.palette.background.default,
        color: "text.primary",
        px: { xs: 3, sm: 6, md: 10, lg: 14 },
        py: { xs: 6, md: 8 },
      })}
    >
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={3}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <img
                src={Logo}
                alt={t("navbar.logoAlt")}
                width={32}
                height={32}
              />
              <Typography
                component="span"
                sx={(theme) => ({
                  fontFamily: theme.typography.fontFamilyDisplay,
                  fontSize: "1.25rem",
                })}
              >
                UNBALL
              </Typography>
            </Stack>
            <Stack
              spacing={1.25}
              sx={(theme) => ({
                color: "text.secondary",
                "& .MuiTypography-root": {
                  fontFamily: theme.typography.fontFamilyMono,
                },
              })}
            >
              {contactItems.map((item) => (
                <Box
                  key={item.type}
                  component="a"
                  {...externalLinkProps(item.link)}
                  aria-label={item.title}
                  sx={{
                    ...FOOTER_LINK_SX,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    width: "fit-content",
                  }}
                >
                  {CONTACT_ICONS[item.type]}
                  <Typography variant="body2">{item.value}</Typography>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Stack spacing={3}>
            <Typography variant="h6" sx={FOOTER_HEADING_SX}>
              {t("footer.mappingTitle")}
            </Typography>
            <Stack spacing={1.25}>
              {navItems.map((item) => (
                <Typography
                  key={item.key}
                  component={Link}
                  to={item.path}
                  sx={FOOTER_LINK_SX}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Stack spacing={3}>
            <Typography variant="h6" sx={FOOTER_HEADING_SX}>
              {t("footer.institutionalTitle")}
            </Typography>
            <Stack spacing={1.25}>
              {institutionalItems.map((item) => (
                <Typography
                  key={item.label}
                  component="a"
                  {...externalLinkProps(item.href)}
                  sx={FOOTER_LINK_SX}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ my: 6, borderColor: "border.subtle" }} />
      <FlexBoxBetween>
        <Typography
          sx={(theme) => ({
            fontFamily: theme.typography.fontFamilyMono,
            fontSize: "0.75rem",
            color: alpha(theme.palette.text.secondary, 0.6),
          })}
        >
          {t("footer.bottomText")}
        </Typography>
        <Stack direction="row" spacing={1.25}>
          {contactItems.map((item) => (
            <IconButton
              key={item.type}
              {...externalLinkProps(item.link)}
              aria-label={item.title}
              sx={(theme) => ({
                color: "text.primary",
                transition:
                  "color 0.2s ease-in-out, transform 0.2s ease-in-out",
                "&:hover": {
                  color: theme.palette.primary.main,
                  backgroundColor: "transparent",
                  transform: "translateY(-1px)",
                },
              })}
            >
              {CONTACT_ICONS[item.type]}
            </IconButton>
          ))}
        </Stack>
      </FlexBoxBetween>
    </Box>
  );
}

export default Footer;
