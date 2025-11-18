import { Box, ListItem, ListItemText, Radio } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';
import React from 'react';
import { HEIGHT_LOGO_DEFAULT } from '../../../common/constant/style.constant';
import { PaperSelect } from '../../styles/paper.style';
import { IconElement } from '../icon';
import { TextFieldLabelElement } from './text-field-label.element';

interface TextFieldSelectSearchElementProps extends BaseTextFieldProps {
  openTest?: boolean;
  iconLabel?: string;
  error?: any;
  value?: any;
  multiple?: boolean;
  loading?: boolean;
  options: any[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | any) => void;
  renderOption?: (props: React.HTMLAttributes<HTMLLIElement>, option: any) => React.ReactNode;
  getOptionLabel?: (option: any) => string;
  isCheckIcon?: boolean;
  colorLabel?: string;
  showRadioBtn?: boolean;
  disableCloseOnSelect?: boolean;
  helperText?: any;
}

export const TextFieldSelectSearchElement: React.FC<TextFieldSelectSearchElementProps> = ({
  name,
  openTest = false,
  label,
  iconLabel = '',
  error = '',
  placeholder = 'Tìm kiếm...',
  value,
  multiple = false,
  autoFocus = false,
  disabled = false,
  fullWidth = true,
  loading,
  helperText,
  options,
  onChange,
  sx = {},
  renderOption,
  getOptionLabel,
  isCheckIcon = true,
  colorLabel,
  showRadioBtn = false,
  disableCloseOnSelect = false,
  ...restInput
}) => {
  const change = (_: any, value: any) => {
    if (onChange) {
      onChange({ target: { name, value } });
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <TextFieldLabelElement
        label={label}
        iconLabel={iconLabel}
        colorLabel={colorLabel}
        required={restInput.required}
      />
      <Autocomplete
        options={options || []}
        {...(openTest && { open: openTest })}
        sx={{ ...sx }}
        getOptionLabel={getOptionLabel}
        renderOption={
          showRadioBtn
            ? (props, option) => (
                <ListItem
                  {...props}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    maxHeight: HEIGHT_LOGO_DEFAULT,
                  }}
                >
                  {showRadioBtn && <Radio checked={value === option} disableRipple size="small" />}
                  <ListItemText primary={getOptionLabel ? getOptionLabel(option) : option} />
                </ListItem>
              )
            : renderOption
        }
        value={value || (multiple ? [] : null)}
        disabled={disabled}
        onChange={change}
        loading={loading}
        multiple={multiple}
        disableCloseOnSelect={disableCloseOnSelect}
        fullWidth={fullWidth}
        clearIcon={<IconElement icon="close_small" />}
        popupIcon={<IconElement icon="arrow_drop_down" />}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{
              shrink: isCheckIcon ? true : false,
              sx: { display: 'flex' },
            }}
            // label={
            //   isCheckIcon ? (
            //     <StackLabel color={colorLabel}>
            //       {isCheckIcon && <IconElement icon={iconLabel} sx={{ fontSize: STYLE.TEXT_FIELD.FONT_SIZE_LABEL }} />}
            //       {label}
            //     </StackLabel>
            //   ) : undefined
            // }
            error={Boolean(error)}
            name={name}
            placeholder={placeholder}
            autoFocus={autoFocus}
            variant="outlined"
            helperText={error || helperText}
            {...restInput}
          />
        )}
        PaperComponent={({ children }) => <PaperSelect>{children}</PaperSelect>}
      />
    </Box>
  );
};
