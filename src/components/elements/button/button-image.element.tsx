import { Button, ButtonProps, SxProps, Typography, useTheme } from '@mui/material';
import React from 'react';
import { STYLE } from '../../../common';
import { LoadingComponent } from '../../loading';
import { ImageElement } from '../image';

export interface ButtonImageElementProps extends ButtonProps {
  loading?: boolean;
  startIcon?: string;
  endIcon?: string;
  content: string;
  sx?: SxProps;
}

export const ButtonImageElement: React.FC<ButtonImageElementProps> = ({
  loading,
  content,
  startIcon,
  endIcon,
  sx,
  ...rest
}) => {
  const { palette } = useTheme();
  return (
    <Button
      {...rest}
      startIcon={
        startIcon &&
        !loading && (
          <ImageElement
            url={startIcon}
            sx={{
              width: STYLE.FONT_SIZE_ICON.small,
              height: STYLE.FONT_SIZE_ICON.small,
              borderRadius: STYLE.BORDER_RADIUS_ELEMENT_TAG,
              opacity: rest.disabled ? 0.6 : 1,
            }}
          />
        )
      }
      endIcon={
        endIcon &&
        !loading && (
          <ImageElement
            url={endIcon}
            sx={{
              width: STYLE.FONT_SIZE_ICON.medium,
              height: STYLE.FONT_SIZE_ICON.medium,
              borderRadius: STYLE.BORDER_RADIUS_ELEMENT_TAG,
              opacity: rest.disabled ? 0.6 : 1,
            }}
          />
        )
      }
      sx={{
        textTransform: 'none',
        borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL,
        minWidth: 'unset',
        '& > .MuiButton-endIcon': {
          margin: 0,
        },
        ...sx,
      }}
    >
      {loading ? (
        <LoadingComponent color={palette.primary.contrastText} size="small" sx={{ minHeight: '24.5px' }} />
      ) : (
        <Typography sx={{ transform: `translateY(0.5px)`, whiteSpace: 'nowrap' }}>{content}</Typography>
      )}
    </Button>
  );
};
