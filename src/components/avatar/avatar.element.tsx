import styled from '@emotion/styled';
import { Avatar, type AvatarProps, Tooltip, type TooltipProps, tooltipClasses } from '@mui/material';
import React, { type ReactNode } from 'react';
import { MAP_SIZE, type SizeProps } from './avatar-enum.enum';

export interface AvatarElementProps extends AvatarProps {
  url?: string | null;
  size?: SizeProps;
  tooltipContent?: ReactNode;
}

const ArrowTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: 'white',
  },
}));

export const AvatarElement: React.FC<AvatarElementProps> = ({
  url,
  sx = {},
  size = 'medium',
  tooltipContent,
  ...rest
}) => {
  if (tooltipContent) {
    return (
      <ArrowTooltip title={tooltipContent} arrow>
        <Avatar
          {...rest}
          src={url || ''}
          sx={{ ...MAP_SIZE[size], bgcolor: 'primary.main', ...sx, cursor: 'pointer' }}
        />
      </ArrowTooltip>
    );
  }
  return (
    <Avatar {...rest} src={url || ''} sx={{ ...MAP_SIZE[size], bgcolor: 'primary.main', ...sx, cursor: 'pointer' }} />
  );
};
