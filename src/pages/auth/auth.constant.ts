import * as Yup from 'yup';
import { AuthProcess } from './auth.enum';

export const validationSchema = (authProcess: AuthProcess) =>
  Yup.object({
    emailOrPhone:
      authProcess === AuthProcess.LOGIN ? Yup.string().required('Vui lòng cung cấp thông tin') : Yup.string(),
    password: [AuthProcess.LOGIN, AuthProcess.RESET_PASSWORD].includes(authProcess)
      ? Yup.string().required('Vui lòng cung cấp thông tin')
      : Yup.string(),
    phone:
      authProcess === AuthProcess.FORGOT_PASSWORD ? Yup.string().required('Vui lòng cung cấp thông tin') : Yup.string(),
    otp: authProcess === AuthProcess.VERIFY_OTP ? Yup.string().required('Vui lòng cung cấp thông tin') : Yup.string(),
  });

export const BUTTON_BACK_ICON_CONTENT = {
  [AuthProcess.LOGIN]: {
    button: 'Đăng nhập',
    backContent: 'Bạn quên mật khẩu',
    backIcon: 'lock',
  },
  [AuthProcess.FORGOT_PASSWORD]: {
    button: 'Gửi OTP',
    backContent: 'Quay lại đăng nhập',
    backIcon: 'chevron_right',
  },
  [AuthProcess.VERIFY_OTP]: {
    button: 'Xác thực',
    backContent: 'Quay lại đăng nhập',
    backIcon: 'chevron_right',
  },
  [AuthProcess.RESET_PASSWORD]: {
    button: 'Đặt lại mật khẩu',
    backContent: 'Quay lại đăng nhập',
    backIcon: 'chevron_right',
  },
};
