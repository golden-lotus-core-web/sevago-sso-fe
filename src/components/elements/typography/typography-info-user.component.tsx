import { SxProps, Theme, Typography } from '@mui/material';
import React from 'react';
import { COLOR_CONSTANT, STYLE, TYPOGRAPHY_STYLES } from '../../../common';
import { StackRow } from '../../styles';
import { highlightYellow } from '../text-field';
import { Stack } from '@mui/system';

export interface InfoItem {
  label: string;
  value: string | React.ReactNode;
  sxValue?: SxProps<Theme>;
}

interface TypographyInfoGridProps {
  items: InfoItem[];
  columns?: number;
  sx?: SxProps<Theme>;
  columnGap?: number;
  showEmptyAsDots?: boolean;
  gridTemplateColumns?: string;
  gap?: number;
  highlightQuery?: string;
  direction?: 'row' | 'column';
}

export const TypographyInfoUser: React.FC<TypographyInfoGridProps> = ({
  items,
  columns = 2,
  sx,
  columnGap = '60px',
  gap = STYLE.PADDING_GAP_BUTTON,
  showEmptyAsDots = true,
  gridTemplateColumns = '1.75fr 2fr',
  highlightQuery,
  direction = 'row',
}) => {
  return (
    <StackRow
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: gap,
        columnGap: columnGap,
        ...sx,
      }}
    >
      {items.map((item, index) => (
        <Stack
          key={index}
          sx={{
            display: direction === 'row' ? 'grid' : 'flex',
            gridTemplateColumns: direction === 'row' ? (columns === 1 ? '1fr 3fr' : gridTemplateColumns) : 'unset',
            height: 'fit-content',
            flexDirection: direction === 'column' ? 'column' : 'row',
          }}
        >
          <Typography
            sx={{
              ...TYPOGRAPHY_STYLES.textSm.regular,
              color: COLOR_CONSTANT.gray6,
              flex: 1,
            }}
          >
            {highlightYellow(item.label, highlightQuery ?? '', showEmptyAsDots)}:
          </Typography>

          <Typography
            sx={{
              ...TYPOGRAPHY_STYLES.textSm.regular,
              color: COLOR_CONSTANT.black,
              flex: 1,
              borderBottom: `1px solid ${COLOR_CONSTANT.gray8}`,
              textAlign: 'right',
              ...item.sxValue,
            }}
          >
            {highlightYellow(item.value, highlightQuery ?? '', showEmptyAsDots)}
          </Typography>
        </Stack>
      ))}
    </StackRow>
  );
};
