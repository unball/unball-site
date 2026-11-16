import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const FlexBoxBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const BoxSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}));

export type PanelProps = {
  bordered?: "all" | "y" | "x" | "none";
};

export const Panel = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bordered",
})<PanelProps>(({ theme, bordered = "all" }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.4),
  borderColor: theme.palette.border.main,
  borderStyle: "solid",
  borderWidth: 0,
  ...(bordered === "all" && { borderWidth: 1 }),
  ...(bordered === "y" && { borderTopWidth: 1, borderBottomWidth: 1 }),
  ...(bordered === "x" && { borderLeftWidth: 1, borderRightWidth: 1 }),
}));

export const SectionPanel = styled(Panel)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  overflow: "hidden",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  gap: theme.spacing(3),
  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    gap: theme.spacing(4),
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    gap: theme.spacing(6),
  },
  [theme.breakpoints.up("xl")]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    gap: theme.spacing(8),
  },
}));
