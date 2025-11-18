import { FormControlLabel, Radio, type RadioProps } from '@mui/material';
import React from 'react';
import { STYLE } from '../../../common';

export interface RadioElementProps extends RadioProps {
  name?: string;
  label: any;
}

export const RadioElement: React.FC<RadioElementProps> = ({ name, label, ...rest }) => {
  return (
    <FormControlLabel
      name={name}
      label={label}
      sx={{ alignItems: 'center', mr: 0 }}
      control={
        <Radio
          {...rest}
          sx={{
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: STYLE.PADDING_GAP_ITEM,
            marginLeft: '2px',
            '&:hover': { backgroundColor: 'unset' },
            '& .MuiSvgIcon-root': { fontSize: '18px' },
          }}
        />
      }
    />
  );
};
