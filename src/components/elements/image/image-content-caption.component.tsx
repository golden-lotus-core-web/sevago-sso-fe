import { SxProps } from '@mui/system';
import React from 'react';
import { SizeProps, STYLE } from '../../../common';
import { StackRow } from '../../styles';
import { AvatarElement } from '../avatar';
import { TypographyContentCaption } from '../typography';

export interface ImageContentCaptionComponentProps {
  url?: string;
  content?: string;
  caption?: string;
  sizeType?: SizeProps;
  sx?: SxProps;
  sxContent?: SxProps;
  sxCaption?: SxProps;
  alt?: string;
  userTitleName?: string;
}

export const ImageContentCaptionComponent: React.FC<ImageContentCaptionComponentProps> = ({
  url,
  content,
  caption,
  sizeType = 'medium',
  sx,
  sxContent,
  sxCaption,
  alt = '',
  userTitleName,
}) => {
  return (
    <StackRow alignItems="center" sx={{ ...sx, gap: STYLE.PADDING_GAP_ITEM }}>
      <AvatarElement alt={alt} url={url} size={sizeType} />
      <TypographyContentCaption
        userTitleName={userTitleName}
        content={content}
        caption={caption}
        sxContent={sxContent}
        sxCaption={sxCaption}
      />
    </StackRow>
  );
};
