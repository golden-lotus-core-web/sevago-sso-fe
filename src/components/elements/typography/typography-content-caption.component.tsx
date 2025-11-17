import { Stack, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import {
  checkEmptyText,
  getLimitLineCss,
  TYPOGRAPHY_STYLES,
} from "../../../common";

export interface TypographyContentCaptionProps {
  sx?: SxProps<Theme>;
  content?: any; // fix
  caption?: string;
  sxContent?: SxProps;
  sxCaption?: SxProps;
  userTitleName?: string;
}

export const TypographyContentCaption: React.FC<
  TypographyContentCaptionProps
> = ({ content, caption, sx = {}, sxContent, sxCaption, userTitleName }) => {
  return (
    <Stack gap={0} sx={{ ...sx }}>
      <Typography
        sx={{
          ...getLimitLineCss(1),
          ...sxContent,
        }}
      >
        {checkEmptyText(content)}
      </Typography>
      {userTitleName && (
        <Typography
          sx={{
            ...TYPOGRAPHY_STYLES.textXs.regular,
            ...getLimitLineCss(1),
          }}
        >
          {checkEmptyText(userTitleName)}
        </Typography>
      )}
      {caption && (
        <Typography
          sx={{
            ...TYPOGRAPHY_STYLES.textXs.regular,
            // ...getLimitLineCss(1),
            ...sxCaption,
          }}
        >
          {checkEmptyText(caption)}
        </Typography>
      )}
    </Stack>
  );
};
