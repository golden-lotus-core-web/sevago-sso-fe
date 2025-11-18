import { Box, Chip, ChipProps } from '@mui/material';
import Autocomplete, { AutocompleteRenderOptionState } from '@mui/material/Autocomplete';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';
import React, { Fragment } from 'react';
import { getLimitLineCss, STYLE } from '../../../common';
import { EmptyComponent } from '../../empty/empty.component';
import { LoadingComponent } from '../../loading';
import { StackRow } from '../../styles';
import { AvatarElement } from '../avatar';
import { IconElement } from '../icon';
import { TextFieldLabelElement } from './text-field-label.element';
import { PaperSelect } from '../../styles/paper.style';

export interface TextFieldSelectSearchObjectElementProps extends BaseTextFieldProps {
  openTest?: boolean;
  iconLabel?: string;
  error?: any;
  multiple?: boolean;
  loading?: boolean;
  options?: any[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement> | any) => void;
  onInputChange?: (event: React.SyntheticEvent, newInputValue: string, reason: string) => void;
  renderOption?: (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: any,
    state: AutocompleteRenderOptionState,
  ) => React.ReactNode;
  isOptionEqualToValue?: (option: any, value: any) => boolean;
  getOptionLabel?: (option: any) => any;
  getOptionDisabled?: (option: any) => boolean;
  freeSolo?: boolean;
  isCheckIcon?: boolean;
  showAvatar?: boolean;
  colorLabel?: string;
  renderTags?: (value: any[], getTagProps: (params: { index: number }) => any) => React.ReactNode;
  maxDisplayTags?: number;
}

type TagProps = ChipProps & { key: number };

export const TextFieldSelectSearchObjectElement: React.FC<TextFieldSelectSearchObjectElementProps> = ({
  name,
  openTest = false,
  label,
  iconLabel = '',
  error = '',
  placeholder = 'Tìm kiếm...',
  value,
  multiple = false,
  loading,
  disabled = false,
  fullWidth = true,
  helperText,
  options,
  onInputChange,
  renderOption,
  onChange,
  isOptionEqualToValue,
  getOptionLabel,
  getOptionDisabled,
  sx = {},
  freeSolo = false,
  isCheckIcon = true,
  showAvatar = false,
  colorLabel,
  renderTags,
  maxDisplayTags,
  ...restInput
}) => {
  const change = (_: any, value: any) => {
    onChange?.({ target: { name, value } });
  };

  const customRenderTags = (
    tagValue: Array<{ label: string; value: string; url?: string | null }>,
    getTagProps: (params: { index: number }) => TagProps,
  ) => {
    if (multiple) {
      const maxDisplay = maxDisplayTags || tagValue?.length;
      const displayed = tagValue.slice(0, maxDisplay);
      const remaining = tagValue.length - maxDisplay;
      return (
        <Fragment>
          {displayed.map((option, index) => {
            return (
              <Chip
                {...getTagProps({ index })}
                key={index}
                avatar={showAvatar ? <AvatarElement url={option.url} alt={option.label} /> : undefined}
                label={getOptionLabel ? getOptionLabel(option) : (option as any)?.label || ''}
                size="small"
                sx={{
                  '& .MuiChip-avatar': {
                    marginLeft: '5px',
                    marginRight: '6px',
                  },
                  '& .MuiChip-label': { ...getLimitLineCss(1) },
                }}
              />
            );
          })}
          {remaining > 0 && (
            <Chip
              label={`+${remaining}`}
              size="small"
              sx={{
                backgroundColor: 'grey.300',
                color: 'text.primary',
              }}
            />
          )}
        </Fragment>
      );
    }
    return undefined;
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
        // filterOptions={(x) => x}
        openOnFocus
        options={options || []}
        sx={{
          '& .MuiAutocomplete-inputRoot': {
            gap: 0.5,
          },
          '& .MuiChip-root': {
            borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
            padding: '0 4px',
            margin: '0px 1px',
            height: '25px',
            '& .MuiChip-deleteIcon': { fontSize: '18px', marginRight: '0px' },
            '& .MuiChip-label': {
              paddingLeft: '1px',
              transform: 'translateY(0.5px)',
              paddingRight: 1.5,
            },
            '&.Mui-disabled': { opacity: 1 },
          },
          ...sx,
        }}
        {...(openTest && { open: openTest })}
        // renderTags={(value, getTagProps) =>
        //   value.map((option, index) => (
        //     <Chip
        //       {...getTagProps({ index })}
        //       label={getOptionLabel ? getOptionLabel(option) : option?.label || option}
        //       size="small"
        //       disabled={disabled}
        //     />
        //   ))
        // }
        getOptionLabel={getOptionLabel}
        getOptionDisabled={getOptionDisabled}
        value={value || (multiple ? [] : null)}
        disabled={disabled}
        freeSolo={freeSolo}
        onChange={change}
        // onInputChange={onInputChange}
        renderTags={renderTags || ((tagValue, getTagProps) => customRenderTags(tagValue, getTagProps))}
        onInputChange={(event, newInputValue, reason) => {
          if (reason === 'input') onInputChange?.(event, newInputValue, reason);
        }}
        renderOption={
          showAvatar
            ? (props, option) => {
                const labelText = getOptionLabel?.(option) ?? option?.label ?? '';
                const parts = String(labelText).replaceAll('\\n', '\n').split(/\r?\n/);

                return (
                  <li {...props}>
                    <StackRow sx={{ alignItems: 'center', gap: 1 }}>
                      <AvatarElement url={option?.url} alt={option?.name} />
                      <span>
                        {parts.map((part, index) => (
                          <span key={index} style={{ color: index > 0 ? 'gray' : 'inherit' }}>
                            {part}
                            {index < parts.length - 1 && <br />}
                          </span>
                        ))}
                      </span>
                    </StackRow>
                  </li>
                );
              }
            : renderOption
        }
        multiple={multiple}
        disableCloseOnSelect={multiple}
        fullWidth={fullWidth}
        loading={loading}
        clearIcon={<IconElement icon="close_small" />}
        popupIcon={<IconElement icon="arrow_drop_down" />}
        isOptionEqualToValue={isOptionEqualToValue}
        noOptionsText={<EmptyComponent />}
        loadingText={<LoadingComponent />}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              startAdornment:
                showAvatar && !multiple && value ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                    <AvatarElement url={(value as any)?.url} />
                  </Box>
                ) : (
                  params.InputProps?.startAdornment
                ),
            }}
            // label={
            //   <Box color={colorLabel} sx={{ whiteSpace: 'pre-line' }}>
            //     {isCheckIcon && <IconElement icon={iconLabel} sx={{ fontSize: STYLE.TEXT_FIELD.FONT_SIZE_LABEL }} />}
            //     {label}
            //   </Box>
            // }
            error={Boolean(error)}
            name={name}
            placeholder={placeholder}
            helperText={helperText || error}
            {...restInput}
          />
        )}
        PaperComponent={({ children }) => <PaperSelect>{children}</PaperSelect>}
      />
    </Box>
  );
};
