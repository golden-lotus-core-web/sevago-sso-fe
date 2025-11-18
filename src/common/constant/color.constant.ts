export const COLOR_CONSTANT = {
  error: '#EF1515',
  successLight: '#3CB353',
  success: '#069021',
  main: '#07554B',
  mainLight: '#11B6AF',
  info: '#1570EF',
  warning: '#CA8A03',
  secondary: '#BF00E0',

  //Color system
  white: '#ffffff',

  gray: '#F2F2F2',
  gray2: '#BEBEBE',
  gray3: '#7A7A7A',
  gray4: '#525252',
  gray5: '#4B5563',
  gray6: '#737373',
  gray7: '#E1E1E1',
  gray8: '#E3E3E3',
  gray9: '#F4F4F7',
  gray10: '#FAFAFA',

  green: '#07554B3D',
  green2: '#E6EEED',
  green3: '#008A77',
  green4: '#f2f6f5',
  green5: '#CFE7E1',

  blue: '#EDF2F7',
  blue2: '#2D9CDB',

  red: '#F0443829',
  red2: '#F04438',

  black: '#0A0A0A',

  yellow: '#FFF59D',

  //ProjectStatus
  new: '#DFDFDF',
  pending: '#D08B0D',
  overDue: '#D44B00',
  primary: '#2563EB',
};

export const colorMap: Record<string, { backgroundColor: string; color: string }> = {
  success: {
    backgroundColor: COLOR_CONSTANT.success,
    color: COLOR_CONSTANT.white,
  },
  error: { backgroundColor: COLOR_CONSTANT.error, color: COLOR_CONSTANT.white },
  cancel: {
    backgroundColor: COLOR_CONSTANT.gray2,
    color: COLOR_CONSTANT.white,
  },
};
