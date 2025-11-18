// import { Box, GlobalStyles, SxProps, Theme, useTheme } from '@mui/material';
// import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
// import React from 'react';
// import { COLOR_CONSTANT } from '../../../common/constant/color.constant';
// import { getActionBarSx, getPickerSx, getPopperProps } from '../../styles/picker.style';
// import { IconElement } from '../icon/icon.element';
// import { TextFieldLabelElement } from './text-field-label.element';

// export interface TextFieldMonthYearElementProps extends Omit<DatePickerProps, 'views'> {
//   name: string;
//   label?: string;
//   iconLabel?: string;
//   error?: unknown;
//   value?: any;
//   onChange?: (value: any) => void;
//   helperText?: string;
//   required?: boolean;
//   sx?: SxProps<Theme>;
//   disablePast?: boolean;
//   disableFuture?: boolean;
//   onBlur?: (e: React.FocusEvent<any>) => void;
// }

// export const TextFieldMonthYearElement: React.FC<TextFieldMonthYearElementProps> = ({
//   name,
//   label = 'Tháng/Năm',
//   iconLabel = '',
//   error = '',
//   value = null,
//   helperText,
//   onChange,
//   sx = {},
//   format = 'MM/YYYY',
//   required = false,
//   disablePast = false,
//   disableFuture = false,
//   onBlur,
//   ...rest
// }) => {
//   const { palette } = useTheme();

//   const minDate = disablePast ? dayjs().startOf('month') : undefined;
//   const maxDate = disableFuture ? dayjs().endOf('month') : undefined;

//   return (
//     <Box sx={{ position: 'relative', width: '100%' }}>
//       <GlobalStyles
//         styles={{
//           '.MuiMonthCalendar-button.Mui-disabled': {
//             color: COLOR_CONSTANT.gray3 + ' !important',
//           },
//         }}
//       />
//       <TextFieldLabelElement label={label} iconLabel={iconLabel} required={required} />
//       <DatePicker
//         views={['month', 'year']}
//         minDate={minDate}
//         maxDate={maxDate}
//         value={value ? dayjs(value) : null}
//         onChange={(newVal) => onChange?.(newVal ? (dayjs.isDayjs(newVal) ? newVal.toDate() : newVal) : null)}
//         format={format}
//         name={name}
//         slots={{ openPickerIcon: () => <IconElement icon="calendar_today" /> }}
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
//         }}
//         sx={{
//           ...getPickerSx(palette, sx),
//         }}
//         {...rest}
//       />
//     </Box>
//   );
// };
