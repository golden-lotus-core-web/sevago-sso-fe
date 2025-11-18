import { Stack, SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import { StackRow } from '../../styles';

type TypographyGridInfoRowProps = {
  label: string;
  value: React.ReactNode;
  sx?: SxProps<Theme>;
  lineLimit?: number;
  columns?: string;
  layout?: 'horizontal' | 'vertical';
  sxValue?: SxProps<Theme>;
  sxLabel?: SxProps<Theme>;
};

export const TypographyGridInfoRow: React.FC<TypographyGridInfoRowProps> = ({
  label,
  value,
  sx,
  columns = '1fr 2fr',
  layout = 'vertical',
  sxValue,
  sxLabel,
}) => {
  if (layout === 'vertical') {
    return (
      <React.Fragment>
        <StackRow sx={{ display: 'grid', gridTemplateColumns: columns, ...sx }}>
          <Stack>
            <Typography fontWeight="bold" sx={{ ...sxLabel }}>
              {label}
            </Typography>
          </Stack>
          <Stack sx={{ ...sxValue }}>{value || 'Không có'}</Stack>
        </StackRow>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Stack sx={{ gap: 0.5, ...sx }}>
        <Typography fontWeight="bold" sx={{ ...sxLabel }}>
          {label}
        </Typography>
        <Stack sx={{ ...sxValue }}>{value || 'Không có'}</Stack>
      </Stack>
    </React.Fragment>
  );
};
