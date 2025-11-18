import { Stack, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import { getLimitLineCss } from '../../../common';

export interface TypographyInfoRowProps {
  label: React.ReactNode;
  value?: React.ReactNode;
  sx?: SxProps<Theme>;
  lineLimit?: number;
  labelSx?: SxProps<Theme>;
  isColumn?: boolean;
}

export const TypographyInfoRow: React.FC<TypographyInfoRowProps> = ({
  label,
  value,
  sx = {},
  labelSx = {},
  lineLimit = 1,
  isColumn = false,
}) => {
  return (
    <Stack
      direction={isColumn ? 'column' : 'row'}
      sx={{
        m: 0,
        gap: 1,
        ...sx,
      }}
    >
      {label && (
        <Typography sx={{ ...labelSx }} variant="subtitle1">
          {label}:
        </Typography>
      )}
      <Stack color="text.secondary" sx={{ ...getLimitLineCss(lineLimit), paddingTop: '2.5px', flex: 1 }}>
        {value || 'Không có'}
      </Stack>
    </Stack>
  );
};
