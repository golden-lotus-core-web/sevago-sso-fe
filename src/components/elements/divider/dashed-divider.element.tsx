import { Box } from '@mui/system';
import React from 'react';
import { COLOR_CONSTANT } from '../../../common';

interface DashedDividerElementProps {
  orientation?: 'horizontal' | 'vertical';
  color?: string;
  thickness?: number;
  length?: string | number;
  sx?: any;
  dashed?: boolean;
}

export const DashedDividerElement: React.FC<DashedDividerElementProps> = ({
  orientation = 'horizontal',
  color = COLOR_CONSTANT.gray2,
  thickness = 1,
  length = '100%',
  sx,
  dashed = true,
}) => {
  if (orientation === 'vertical') {
    return (
      <Box
        sx={{
          height: length,
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',
          '&::before': {
            content: '""',
            width: `${thickness}px`,
            height: '100%',
            borderLeft: `${thickness}px ${dashed ? 'dashed' : 'solid'} ${color}`,
            ...sx,
          },
        }}
      />
    );
  }

  return (
    <Box
      sx={{
        borderBottom: `${thickness}px ${dashed ? 'dashed' : 'solid'} ${color}`,
        width: typeof length === 'number' ? `${length}px` : length,
        alignSelf: 'stretch',
        display: 'block',
        ...sx,
      }}
    />
  );
};
