import { BaseTextFieldProps, Box, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { STYLE } from '../../../common/constant';
import { IconElement } from '../icon/icon.element';

export interface TextFieldSearchCustomElementProps extends BaseTextFieldProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | any) => void;
  label?: string;
  iconLabel?: string;
  value?: string;
}

export const TextFieldSearchCustomElement: React.FC<TextFieldSearchCustomElementProps> = ({
  placeholder = 'Tìm kiếm...',
  rows,
  onChange,
  value,
  sx = {},
  ...rest
}) => {
  const [localValue, setLocalValue] = React.useState(value || '');
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setLocalValue(newValue);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newTimeoutId = setTimeout(() => {
      if (onChange) {
        onChange({
          target: {
            name: 'search',
            value: newValue === '' ? null : newValue,
          },
        });
      }
    }, 300);

    setTimeoutId(newTimeoutId);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <TextField
        {...rest}
        value={localValue}
        placeholder={placeholder}
        onChange={change}
        name="search"
        {...(rows && { rows, multiline: true })}
        sx={{
          '& .MuiOutlinedInput-root': {
            background: 'white',
            paddingY: '8px',
            paddingX: '10px',
            '&:hover & .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${STYLE.BORDER_COLOR_CARD}`,
            },
            '& .MuiOutlinedInput-input': { padding: 0 },
            '& .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${STYLE.BORDER_COLOR_CARD}`,
              borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL,
            },
            height: 36,
          },
          ...sx,
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <IconElement sx={{ color: '#7A8188' }} icon={'search'} />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};
