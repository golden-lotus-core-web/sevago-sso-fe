import { Box, MenuItem, useTheme } from '@mui/material';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';
import React, { useState } from 'react';
import { TextFieldLabelElement } from './text-field-label.element';
import { STYLE } from '../../../common';
import { EmptyComponent } from '../../empty';
import { StackRow } from '../../styles';
import { AvatarElement } from '../avatar';
import { IconElement } from '../icon';

interface TextFieldSelectElementProps extends BaseTextFieldProps {
  openTest?: boolean;
  iconLabel?: string;
  options: any[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: any;
  multiple?: boolean;
  renderValue?: (selected: any) => React.ReactNode;
  placeholder?: string;
  showAvatar?: boolean;
  helperText?: string;
  getOptionDisabled?: (option: any) => boolean;
}

export const TextFieldSelectElement: React.FC<TextFieldSelectElementProps> = ({
  openTest = false,
  label,
  iconLabel = '',
  options,
  onChange,
  error,
  multiple,
  renderValue,
  placeholder,
  showAvatar = false,
  getOptionDisabled,
  helperText,
  ...rest
}) => {
  const { palette } = useTheme();
  const [open, setOpen] = useState(openTest || false);

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <TextFieldLabelElement label={label} iconLabel={iconLabel} required={rest.required} />
      <TextField
        select
        {...rest}
        error={Boolean(error)}
        helperText={helperText || error}
        onChange={onChange}
        SelectProps={{
          open,
          onOpen: () => setOpen(true),
          onClose: () => setOpen(false),
          multiple,
          displayEmpty: true,
          renderValue:
            renderValue ||
            ((selected) => {
              if (
                selected === null ||
                selected === undefined ||
                selected === '' ||
                (Array.isArray(selected) && selected.length === 0)
              ) {
                return <span style={{ color: palette.text.disabled }}>{placeholder || 'Chọn...'}</span>;
              }

              if (multiple) {
                return (selected as any[])
                  .map((value) => {
                    const option = options.find((opt) => opt.value === value);
                    return option?.label || value;
                  })
                  .join(', ');
              }

              const option = options.find((opt) => opt.value === selected);
              return option?.label || selected;
            }),
          IconComponent: () => (
            <IconElement
              icon="arrow_drop_down"
              sx={{
                marginRight: '8px',
                transition: 'transform 0.3s',
                color: palette.action.active,
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          ),
          MenuProps: {
            disableScrollLock: true,
            PaperProps: {
              style: {
                maxHeight: 300,
              },
            },
            sx: {
              zIndex: 9999,
              '& .MuiPaper-root': {
                backgroundImage: 'none',
                backgroundColor: palette.background.paper,
                borderRadius: STYLE.BORDER_RADIUS_ELEMENT_WRAPPER,
                padding: STYLE.PADDING_GAP_ITEM,
                boxShadow: 1,
                '& > .MuiList-root': {
                  padding: 0,
                  '& > .MuiMenuItem-root': {
                    padding: STYLE.PADDING_GAP_ITEM,
                    borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
                    transition: STYLE.TRANSITION_TIME,
                    '&:hover': {
                      backgroundColor: palette.action.hover,
                    },
                    "&[aria-selected='true']": {
                      backgroundColor: palette.primary.main,
                      color: palette.primary.contrastText,
                    },
                  },
                },
              },
            },
          } as any,
        }}
      >
        {options.length === 0 ? (
          <EmptyComponent />
        ) : (
          options.map((option, index) => {
            const optionValue = typeof option === 'object' ? option.value : option;

            if (typeof option === 'object') {
              return (
                <MenuItem
                  sx={{
                    '& .Mui-disabled': {
                      opacity: 0.5,
                      background: '#eaeaeac7',
                    },
                  }}
                  disabled={getOptionDisabled?.(option)}
                  key={`option-${optionValue}-${index}`}
                  value={option.value}
                >
                  {showAvatar ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <StackRow sx={{ gap: STYLE.PADDING_GAP_ITEM }}>
                        <AvatarElement url={option.url} />
                        <span>{option.label}</span>
                      </StackRow>
                    </Box>
                  ) : (
                    <span>{option.label}</span>
                  )}
                </MenuItem>
              );
            }
            return (
              <MenuItem
                sx={{
                  '&.Mui-disabled': {
                    opacity: 0.5,
                    background: '#eaeaeac7',
                  },
                }}
                disabled={getOptionDisabled?.(option)}
                key={`option-${optionValue}-${index}`}
                value={option}
              >
                {option}
              </MenuItem>
            );
          })
        )}
      </TextField>
    </Box>
  );
};
