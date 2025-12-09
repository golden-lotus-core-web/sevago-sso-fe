import { Typography } from '@mui/material';
import React from 'react';
import { AppInfo, STYLE } from '../../common';
import { ImageElement, ImageSizeType } from '../elements';
import { StackRowAlignCenter, StackRowAlignJustCenter } from '../styles';

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
    <StackRowAlignCenter sx={{ flexDirection: direction, gap: STYLE.PADDING_GAP_ITEM }}>
      <StackRowAlignJustCenter
        sx={{
          width: iconSize,
          height: iconSize,
          borderRadius: iconRadius,
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
    </StackRowAlignCenter>
  );
};
