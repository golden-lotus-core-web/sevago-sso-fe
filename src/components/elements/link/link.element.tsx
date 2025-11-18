import { Link, LinkProps } from '@mui/material';
import React from 'react';

export interface LinkElementProps extends LinkProps {
  onClick?: () => void;
  target?: string;
}

export const LinkElement: React.FC<LinkElementProps> = ({ onClick, sx = {}, target = '_self', ...rest }) => {
  return (
    <Link
      target={target}
      rel="noopener"
      sx={{ textDecoration: 'none', color: 'unset', ...sx }}
      onClick={(event) => {
        if (onClick) {
          event.preventDefault();
          onClick();
        }
      }}
      {...rest}
    />
  );
};
