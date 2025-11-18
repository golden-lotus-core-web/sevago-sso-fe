import React from 'react';
import { ImageElement } from '../elements/image/image.element';
import { STYLE } from '../../common/constant';
import { Fade, Stack } from '@mui/material';

export interface BannerComponentProps {
  url: string;
}

export const BannerComponent: React.FC<BannerComponentProps> = ({ url }) => {
  return (
    <Fade in={true} timeout={STYLE.ANIMATION_TIME}>
      <Stack>
        <ImageElement
          url={url}
          sx={{
            borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
            maxWidth: '100%',
            width: '100%',
            height: 'auto',
          }}
        />
      </Stack>
    </Fade>
  );
};
