import { Button, ButtonProps, useTheme } from '@mui/material';
import React from 'react';
import { STYLE } from '../../../common';
import { LoadingComponent } from '../../loading';
import { IconElement } from '../icon';

export interface ButtonIconSquareElementProps extends ButtonProps {
  loading?: boolean;
  icon: string;
}

export const ButtonIconSquareElement: React.FC<ButtonIconSquareElementProps> = ({
  loading = false,
  icon,
  variant = 'outlined',
  sx,
  ...rest
}) => {
  const { palette } = useTheme();

  return (
    <Button
      {...rest}
      variant={variant}
      sx={{
        ...sx,
        textTransform: 'none',
        borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
        minWidth: 'unset',
        width: STYLE.HEIGHT_DEFAULT_TEXT_FIELD_BUTTON,
      }}
    >
      {loading ? (
        <LoadingComponent color={palette.primary.contrastText} size="small" sx={{ minHeight: 24.5 }} />
      ) : (
        <IconElement icon={icon} sx={{ cursor: 'pointer', height: 24.5, alignContent: 'center' }} />
      )}
    </Button>
  );
};
