import { type Theme } from "@emotion/react";
import { Box } from "@mui/material";
import { type SxProps } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { STYLE } from "../../common/constant";
import { PAGE } from "../../router/route.constant";
import { ImageElement } from "../elements/image/image.element";

export interface LogoComponentProps {
  url: string;
  height?: number;
  sx?: SxProps<Theme>;
  fillColor?: string;
}

export const LogoComponent: React.FC<LogoComponentProps> = ({
  url,
  height = STYLE.HEIGHT_LOGO_DEFAULT,
  sx = {},
  fillColor,
}) => {
  const navigate = useNavigate();
  const toHome = () => navigate(PAGE.DASHBOARD.path);

  return (
    <Box onClick={toHome} sx={{ cursor: "pointer", height, ...sx }}>
      <ImageElement
        url={url}
        sx={{
          height,
          borderRadius: "unset",
          width: "auto",
          ...(fillColor === "white" && { filter: "brightness(0) invert(1)" }), // Chuyển đổi thành màu trắng
        }}
      />
    </Box>
  );
};
