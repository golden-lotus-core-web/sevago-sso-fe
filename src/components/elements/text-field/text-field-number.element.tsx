import { BaseTextFieldProps, Box, TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import { IconButtonElement } from '../icon/icon-button.element';
import { TextFieldLabelElement } from './text-field-label.element';

export interface TextFieldNumberElementProps extends BaseTextFieldProps {
  iconLabel?: string;
  error?: any;
  placeholder?: string;
  value?: any;
  onChange?: (event: { target: { name?: string; value: any } }) => void;
  decimalScale?: number;
  showResetButton?: boolean;
  onReset?: () => void;
  InputProps?: TextFieldProps['InputProps'];
}

export const TextFieldNumberElement: React.FC<TextFieldNumberElementProps> = ({
  name,
  label,
  // iconLabel = 'edit_note',
  iconLabel = '',
  error = '',
  placeholder = 'Nhập số...',
  value,
  helperText,
  onChange,
  sx = {},
  decimalScale = 0,
  InputProps,
  showResetButton = false,
  onReset,
  ...rest
}) => {
  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <TextFieldLabelElement label={label} iconLabel={iconLabel} required={rest.required} />
      <NumericFormat
        customInput={TextField}
        thousandSeparator=","
        decimalSeparator="."
        decimalScale={decimalScale} // Giữ tối đa decimalScale số sau dấu thập phân
        fixedDecimalScale
        allowNegative={false}
        value={value}
        onValueChange={(values: any) => {
          if (onChange) {
            onChange({ target: { name, value: values.floatValue } });
          }
        }}
        error={Boolean(error)}
        helperText={error || helperText}
        placeholder={placeholder}
        sx={{ ...sx }}
        InputProps={{
          ...InputProps,
          endAdornment:
            showResetButton && value && onReset ? (
              <IconButtonElement icon="close" onClick={onReset} />
            ) : (
              InputProps?.endAdornment
            ),
          sx: {
            ...InputProps?.sx,
          },
        }}
        {...(rest as any)}
      />
    </Box>
  );
};
