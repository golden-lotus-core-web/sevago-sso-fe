import React from 'react';
import { SizeProps } from '../../../common';
import { StackRow } from '../../styles';
import { AvatarElement } from '../avatar';
import { TimeAgoContentComponent } from '../time-ago';

export interface ImageContentTimeComponentProps {
  url: string;
  content: string;
  time: Date;
  sizeType?: SizeProps;
}

export const ImageContentTimeComponent: React.FC<ImageContentTimeComponentProps> = ({
  url,
  content,
  time,
  sizeType = 'medium',
}) => {
  return (
    <StackRow alignItems="center">
      <AvatarElement url={url} size={sizeType} />
      <TimeAgoContentComponent content={content} time={time} />
    </StackRow>
  );
};
