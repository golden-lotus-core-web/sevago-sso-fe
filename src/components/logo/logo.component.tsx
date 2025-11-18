import { Theme } from '@emotion/react';
import { SxProps } from '@mui/system';
import React from 'react';
import { ImageElement } from '../elements/image/image.element';
import { ImageSizeType } from '../elements/image/image.enum';
import { LinkElement } from '../elements/link/link.element';
import { STYLE } from '../../common';

export interface LogoComponentProps {
  url: string;
  height?: number;
  sx?: SxProps<Theme>;
}

export const LogoComponent: React.FC<LogoComponentProps> = ({ url, height = STYLE.HEIGHT_LOGO_DEFAULT, sx = {} }) => {
  return (
    <LinkElement href={process.env.REACT_APP_SSO_FE_URL} sx={{ height, ...sx }}>
      <ImageElement url={url} sizeType={ImageSizeType.FULL_WIDTH} sx={{ height }} />
    </LinkElement>
  );
};
