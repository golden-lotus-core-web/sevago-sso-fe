// import { Box, SxProps, Theme, useTheme } from '@mui/material';
// import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
// import React from 'react';
// import { getActionBarSx, getPickerSx, getPopperProps } from '../../styles/picker.style';
// import { IconElement } from '../icon/icon.element';
// import { TextFieldLabelElement } from './text-field-label.element';

// export interface TextFieldDateElementProps extends DatePickerProps {
//   name: string;
//   label?: string;
//   iconLabel?: string;
//   error?: unknown;
//   value?: any;
//   onChange?: (event: React.ChangeEvent<HTMLInputElement> | any) => void;
//   helperText?: string;
//   required?: boolean;
//   sx?: SxProps<Theme>;
//   disablePast?: boolean;
//   disableFuture?: boolean;
//   dateRangeInDays?: number;
//   onBlur?: (e: React.FocusEvent<any>) => void;
//   minDate?: any;
//   maxDate?: any;
// }

// export const TextFieldDateElement: React.FC<TextFieldDateElementProps> = ({
//   name,
//   label = 'Ngày',
//   iconLabel = '',
//   error = '',
//   value = null,
//   helperText,
//   onChange,
//   sx = {},
//   format = 'DD/MM/YYYY',
//   required = false,
//   disablePast = false,
//   disableFuture = false,
//   dateRangeInDays = undefined,
//   onBlur,
//   ...rest
// }) => {
//   const { palette } = useTheme();

//   if (disablePast) rest.minDate = dayjs();
//   if (disableFuture) rest.maxDate = dayjs();
//   if (dateRangeInDays) rest.maxDate = dayjs().add(dateRangeInDays, 'day');

//   return (
//     <Box sx={{ position: 'relative', width: '100%' }}>
//       <TextFieldLabelElement label={label} iconLabel={iconLabel} required={required} />
//       <DatePicker
//         value={value ? dayjs(value) : null}
//         onChange={(newVal) => onChange?.({ target: { name, value: newVal } })}
//         format={format}
//         name={name}
//         slots={{
//           openPickerIcon: () => <IconElement icon="calendar_today" />,
//           clearIcon: () => <IconElement icon="close_small" />,
//         }}
//         slotProps={{
//           textField: ({ inputProps, ...rest }: any) => ({
//             ...rest,
//             ...inputProps,
//             error: Boolean(error),
//             helperText: error || (helperText as any),
//             fullWidth: true,
//             onBlur,
//             required,
//           }),
//           popper: getPopperProps() as any,
//           actionBar: { sx: getActionBarSx(palette) },
//           clearButton: {
//             sx: {
//               padding: '2px',
//             },
//           },

//           field: { clearable: true },
//         }}
//         sx={getPickerSx(palette, sx)}
//         {...rest}
//         minDate={rest.minDate}
//         maxDate={rest.maxDate}
//       />
//     </Box>
//   );
// };
