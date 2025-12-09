import { Typography } from '@mui/material';
import React from 'react';
import { AppInfo } from '../../common/constant/apps.data';
import { ImageElement } from '../elements/image/image.element';
import { ImageSizeType } from '../elements/image/image.enum';
import { StackRowAlignJustCenter } from '../styles';
import { Stack } from '@mui/system';

export interface AppGridItemProps {
  app: AppInfo;
  iconSize: number;
  iconRadius: number;
  titleVariant?: 'subtitle1' | 'body1' | 'caption';
  titleColor?: string;
  showNameApps?: boolean;
  direction?: 'row' | 'column';
}

export const AppGridItem: React.FC<AppGridItemProps> = ({
  app,
  iconSize,
  iconRadius,
  titleVariant = 'subtitle1',
  titleColor,
  showNameApps = true,
  direction = 'column',
}) => {
  return (
    <Stack sx={{ flexDirection: direction }}>
      <StackRowAlignJustCenter
        sx={{
          width: iconSize,
          height: iconSize,
          borderRadius: iconRadius,
          mb: 1.5,
          background: app.color,
        }}
      >
        <ImageElement
          sx={{ width: iconSize * 0.56, height: iconSize * 0.56 }}
          url={app.icon}
          sizeType={ImageSizeType.SQUARE}
        />
      </StackRowAlignJustCenter>

      {showNameApps && (
        <Typography variant={titleVariant} sx={{ color: titleColor }}>
          {app.content}
        </Typography>
      )}
    </Stack>
  );
};
