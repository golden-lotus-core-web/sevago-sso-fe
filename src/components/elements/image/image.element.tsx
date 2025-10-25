import React, { type ReactNode, useState } from 'react';
import { Box, type BoxProps, Skeleton, useTheme } from '@mui/material';
import { StackRow } from '../../styles/stack.style';
import { STYLE } from '../../../common/constant';
import { ImageSizeType } from './image.enum';
import { MAP_SIZE, type SizeProps } from '../../avatar/avatar-enum.enum';

export interface ImageElementProps extends BoxProps {
  url: string;
  isBorder?: boolean;
  isWrap?: boolean;
  sizeType?: ImageSizeType;
  size?: SizeProps;
}

const ImageWrapper: React.FC<{ isWrap: boolean; children: ReactNode }> = ({ isWrap = false, children }) => {
  return isWrap ? (
    <StackRow alignItems="center" className="jsdsdj">
      {children}
    </StackRow>
  ) : (
    <>{children}</>
  );
};

export const ImageElement: React.FC<ImageElementProps> = ({
  url,
  onClick,
  sx = {},
  isBorder = false,
  isWrap = false,
  sizeType = ImageSizeType.CIRCLE,
  size = 'medium',
  ...rest
}) => {
  const { palette } = useTheme();
  const [loaded, setLoaded] = useState(false);

  if (onClick) sx = { ...sx, cursor: 'pointer' };

  // const height = rest.height || STYLE.HEIGHT_IMAGE_DEFAULT;
  // const width = sizeType === ImageSizeType.FULL_WIDTH ? '100%' : STYLE.HEIGHT_IMAGE_DEFAULT;

  const borderRadius =
    sizeType === ImageSizeType.CIRCLE
      ? '50%'
      : sizeType === ImageSizeType.SQUARE
        ? STYLE.BORDER_RADIUS_ELEMENT_SMALL
        : 0;

  return (
    <ImageWrapper isWrap={isWrap}>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          sx={{
            ...MAP_SIZE[size],
            borderRadius,
          }}
        />
      )}
      <Box
        {...rest}
        component="img"
        src={url as string}
        onClick={onClick}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '/images/diamond.png';
        }}
        sx={{
          display: loaded ? 'block' : 'none',
          ...MAP_SIZE[size],
          objectFit: 'cover',
          borderRadius,
          border: isBorder ? `1px solid ${palette.divider}` : 'none',
          ...sx,
        }}
      />
    </ImageWrapper>
  );
};
