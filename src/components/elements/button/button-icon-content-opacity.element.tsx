import { Button, ButtonProps, Typography } from "@mui/material";
import React from "react";
import { STYLE } from "../../../common";
import { LoadingComponent } from "../../loading";
import { IconElement } from "../icon";

export interface ButtonIconContentOpacityElementProps extends ButtonProps {
  loading?: boolean;
  icon: string;
  content: any;
  isQuare?: boolean;
}

export const ButtonIconContentOpacityElement: React.FC<
  ButtonIconContentOpacityElementProps
> = ({
  loading,
  icon,
  content,
  isQuare = false,
  variant = "outlined",
  ...rest
}) => {
  return (
    <Button
      {...rest}
      variant={variant}
      sx={{
        fontWeight: 500,
        fontSize: 15,
        textTransform: "none",
        borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
        minWidth: "unset",
        ...(isQuare
          ? {
              minWidth: STYLE.HEIGHT_DEFAULT_TEXT_FIELD_BUTTON,
              width: STYLE.HEIGHT_DEFAULT_TEXT_FIELD_BUTTON,
            }
          : {}),
        position: "relative",
        "& > .material-icons": {
          opacity: 0,
          position: "absolute",
          cursor: "pointer",
          transition: `opacity 0.3s`,
        },
        "& > .content": {
          position: "absolute",
          opacity: 1,
          transition: `opacity 0.3s`,
        },
        "&:hover": {
          "& > .material-icons": {
            opacity: 1,
            transition: `opacity 0.3s`,
          },
          "& > .content": {
            opacity: 0,
            transition: `opacity 0.3s`,
          },
        },
      }}
    >
      {loading ? (
        <LoadingComponent
          color="primary"
          size="small"
          sx={{ minHeight: "24.5px" }}
        />
      ) : (
        <React.Fragment>
          <IconElement className="icon" icon={icon} />
          <Typography className="content">{content}</Typography>
        </React.Fragment>
      )}
    </Button>
  );
};
