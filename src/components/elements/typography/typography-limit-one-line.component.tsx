import { SxProps, Theme, Typography, TypographyProps } from "@mui/material";
import React from "react";
import { getLimitLineCss } from "../../../common";

export interface TypographyOneLineProps extends TypographyProps {
  sx?: SxProps<Theme>;
  content: any;
}

export const TypographyOneLine: React.FC<TypographyOneLineProps> = ({
  content,
  sx = {},
  ...rest
}) => {
  return (
    <Typography
      sx={{
        ...getLimitLineCss(1),
        ...sx,
      }}
      {...rest}
    >
      {content}
    </Typography>
  );
};
