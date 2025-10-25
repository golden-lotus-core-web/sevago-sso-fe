import { Stack, type SxProps, type Theme, Typography } from '@mui/material';
import React from 'react';
import { getLimitLineCss } from '../../../common/utils/other/get-limit-line-css.utils';
import { TYPOGRAPHY_STYLES } from '../../../common/constant/typography.constant';

export interface TypographyContentCaptionProps {
  sx?: SxProps<Theme>;
  content?: any; // fix
  caption?: string;
  sxContent?: SxProps;
  sxCaption?: SxProps;
}

export const TypographyContentCaption: React.FC<TypographyContentCaptionProps> = ({
  content,
  caption,
  sx = {},
  sxContent,
  sxCaption,
}) => {
  return (
    <Stack gap={0} sx={{ ...sx }}>
      <Typography
        sx={{
          ...getLimitLineCss(1),
          ...sxContent,
        }}
      >
        {content || '#'}
      </Typography>
      {caption && (
        <Typography
          sx={{
            ...TYPOGRAPHY_STYLES.textXs.regular,
            ...getLimitLineCss(1),
            ...sxCaption,
          }}
        >
          {caption || '#'}
        </Typography>
      )}
    </Stack>
  );
};
