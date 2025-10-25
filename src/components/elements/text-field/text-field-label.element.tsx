import { Typography, useTheme } from '@mui/material';
import React from 'react';
import { STYLE } from '../../../common/constant';
import { PADDING_GAP_ITEM_SMALL } from '../../../common/constant/style.constant';
import { IconElement } from '../icon/icon.element';

interface TextFieldLabelElementProps {
  label?: string | React.ReactNode;
  iconLabel?: string;
  colorLabel?: string;
  required?: boolean;
}

export const TextFieldLabelElement: React.FC<TextFieldLabelElementProps> = ({
  label,
  iconLabel,
  colorLabel,
  required,
}) => {
  const { palette } = useTheme();

  if (!label) return null;

  return (
    <Typography
      variant="subtitle1"
      sx={{
        color: colorLabel || palette.text.primary,
        display: 'flex',
        alignItems: 'center',
        gap: PADDING_GAP_ITEM_SMALL,
      }}
    >
      {iconLabel && <IconElement icon={iconLabel} sx={{ fontSize: STYLE.TEXT_FIELD.FONT_SIZE_LABEL }} />}
      {label}
      {required && <span style={{ color: 'red' }}>*</span>}
    </Typography>
  );
};
