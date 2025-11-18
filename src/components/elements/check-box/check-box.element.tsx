import { Checkbox, CheckboxProps, FormControlLabel, SxProps, Theme } from '@mui/material';
import React from 'react';
import { STYLE } from '../../../common';

export interface CheckboxElementProps extends CheckboxProps {
  label?: string;
  sx?: SxProps<Theme>;
  name?: string;
}

export const CheckboxElement: React.FC<CheckboxElementProps> = ({ label, name, size = 'small', sx, ...rest }) => {
  return (
    <FormControlLabel
      sx={{ marginRight: 0 }}
      name={name}
      control={
        <Checkbox
          size={size}
          {...rest}
          sx={{
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: STYLE.PADDING_GAP_ITEM,
            borderRadius: 10,
            '&:hover': {
              backgroundColor: 'unset',
            },
            ...sx,
          }}
        />
      }
      label={label}
    />
  );
};
