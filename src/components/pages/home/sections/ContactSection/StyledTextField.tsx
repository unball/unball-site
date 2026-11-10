import {
  Stack,
  TextField,
  type TextFieldProps,
  Typography,
} from "@mui/material";
import { alpha, styled, type Theme } from "@mui/material/styles";
import { type ElementType, useId } from "react";

const LabelText = styled(Typography)<{
  component?: ElementType;
  htmlFor?: string;
}>(({ theme }) => ({
  fontFamily: theme.typography.fontFamilyMono,
  fontWeight: "bold",
  fontSize: "0.625rem",
  color: alpha(theme.palette.text.primary, 0.7),
  textTransform: "uppercase",
}));

export function StyledTextField({
  id,
  label,
  variant = "standard",
  fullWidth = true,
  select,
  slotProps,
  ...props
}: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const labelId = `${inputId}-label`;

  const defaultSelectSlotProps = select
    ? {
        select: {
          displayEmpty: true,
          labelId: label ? labelId : undefined,
          MenuProps: {
            slotProps: {
              paper: {
                sx: {
                  backgroundColor: "background.paper",
                  border: 1,
                  borderColor: "border.main",
                  color: "text.primary",
                  "& .MuiMenuItem-root": {
                    fontFamily: (theme: Theme) =>
                      theme.typography.fontFamilyMono,
                    fontSize: "0.875rem",
                    "&:hover": {
                      backgroundColor: (theme: Theme) =>
                        alpha(theme.palette.primary.main, 0.15),
                    },
                    "&.Mui-selected": {
                      backgroundColor: (theme: Theme) =>
                        alpha(theme.palette.primary.main, 0.25),
                    },
                  },
                },
              },
            },
          },
        },
      }
    : {};

  const mergedSlotProps = {
    ...defaultSelectSlotProps,
    ...slotProps,
  };

  const inputComponent = (
    <TextField
      id={inputId}
      variant={variant}
      fullWidth={fullWidth}
      select={select}
      slotProps={mergedSlotProps}
      {...props}
    />
  );

  if (label) {
    return (
      <Stack spacing={1}>
        <LabelText id={labelId} component="label" htmlFor={inputId}>
          {label}
        </LabelText>
        {inputComponent}
      </Stack>
    );
  }
  return inputComponent;
}
