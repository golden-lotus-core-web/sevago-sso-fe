import { Button, ButtonProps, Typography, useTheme } from "@mui/material";
import React from "react";
import { STYLE, TYPOGRAPHY_STYLES } from "../../../common";
import { LoadingComponent } from "../../loading";
import { IconElement } from "../icon";

export interface ButtonElementProps extends ButtonProps {
  content?: string;
  loading?: boolean;
  startIcon?: string | React.ReactNode;
  endIcon?: string | React.ReactNode;
  disabled?: boolean;
}

export const ButtonElement: React.FC<ButtonElementProps> = ({
  content,
  loading = false,
  startIcon,
  endIcon,
  variant = "contained",
  sx,
  disabled = false,
  ...rest
}) => {
  const { palette } = useTheme();

  return (
    <Button
      {...rest}
      variant={variant}
      startIcon={
        !loading && startIcon ? (
          typeof startIcon === "string" ? (
            <IconElement icon={startIcon} sx={{ cursor: "pointer" }} />
          ) : (
            startIcon
          )
        ) : undefined
      }
      endIcon={
        !loading && endIcon ? (
          typeof endIcon === "string" ? (
            <IconElement icon={endIcon} sx={{ cursor: "pointer" }} />
          ) : (
            endIcon
          )
        ) : undefined
      }
      sx={{
        minWidth: 100,
        textTransform: "none",
        borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL,
        ...sx,
      }}
      disabled={disabled}
    >
      {loading ? (
        <LoadingComponent
          color={palette.primary.contrastText}
          size="small"
          sx={{ minHeight: "24.5px" }}
        />
      ) : (
        <Typography
          sx={{ ...TYPOGRAPHY_STYLES.textSm.regular, whiteSpace: "nowrap" }}
        >
          {content}
        </Typography>
      )}
    </Button>
  );
};
