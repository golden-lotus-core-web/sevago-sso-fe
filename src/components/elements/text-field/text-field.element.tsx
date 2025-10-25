import {
  Box,
  TextField,
  Typography,
  useTheme,
  type TextFieldProps,
} from "@mui/material";
import React from "react";
import {
  BORDER_RADIUS_ELEMENT_MIDDLE,
  GAP_ICON_CONTENT_BY_SIZE,
} from "../../../common/constant/style.constant";
import { TextFieldLabelElement } from "./text-field-label.element";
import { IconButtonElement } from "../icon/icon-button.element";

export interface TextFieldElementProps extends Omit<TextFieldProps, ""> {
  iconLabel?: string;
  error?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | any) => void;
  InputProps?: TextFieldProps["InputProps"];
  colorLabel?: string;
  description?: string | null;
  showResetButton?: boolean;
  onReset?: () => void;
}

export const TextFieldElement: React.FC<TextFieldElementProps> = ({
  name,
  label,
  iconLabel = "",
  error = "",
  placeholder = "Nhập dữ liệu...",
  value,
  helperText,
  rows,
  onChange,
  sx = {},
  InputProps,
  colorLabel,
  description,
  showResetButton = false,
  onReset,
  ...rest
}) => {
  if (rest.type === "number")
    throw "Please use component TextFieldNumberElement!";

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange)
      onChange({ target: { name, value: event.target.value || null } });
  };
  const { palette, typography } = useTheme();
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <TextFieldLabelElement
        label={label}
        iconLabel={iconLabel}
        colorLabel={colorLabel}
        required={rest.required}
      />
      <TextField
        error={Boolean(error)}
        helperText={helperText || error}
        placeholder={placeholder}
        value={value || ""}
        onChange={change}
        name={name}
        InputProps={{
          ...InputProps,
          endAdornment:
            showResetButton && value && onReset ? (
              <IconButtonElement icon="close" onClick={onReset} />
            ) : (
              InputProps?.endAdornment
            ),
          sx: {
            ...InputProps?.sx,
          },
        }}
        {...(rows && { rows, multiline: true })}
        sx={{
          ...sx,
        }}
        {...rest}
      />
      {description && (
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            bottom: 8,
            left: GAP_ICON_CONTENT_BY_SIZE.large,
            backgroundColor: palette.background.paper,
            borderRadius: BORDER_RADIUS_ELEMENT_MIDDLE,
            px: 1,
            width: "97%",
            display: "flex",
            gap: GAP_ICON_CONTENT_BY_SIZE.small,
          }}
        >
          <Box sx={{ fontWeight: typography.h2.fontWeight }}>Ghi chú:</Box>{" "}
          {description}
        </Typography>
      )}
    </Box>
  );
};
