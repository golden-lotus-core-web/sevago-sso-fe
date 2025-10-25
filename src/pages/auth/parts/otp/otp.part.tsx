import { Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { StackRow } from '../../../../components/styles/stack.style';
import { useFormikContext } from 'formik';
import { ForgotPasswordType } from '../../../../apis/auth/auth.enum';
import { SnackbarType, useSnackbar } from '../../../../hooks/use-snackbar.hook'; 
import { AuthProcess } from '../../auth.enum'; 
import { STYLE } from '../../../../common/constant';
import { getErrorMessage } from '../../../../common/utils/string.utils';
import type { AuthDto } from '../../auth.interface';
import { authApi } from '../../../../apis';
import { IconContentElement } from '../../../../components/elements/icon/icon-content.element';

export interface OtpPartProps {
  setAuthProcess: React.Dispatch<React.SetStateAction<AuthProcess>>;
}

export const OtpPart: React.FC<OtpPartProps> = ({ setAuthProcess }) => {
  const formik = useFormikContext<AuthDto>();

  const { showSnackbar } = useSnackbar();

  const initialOtp = ['', '', '', ''];
  const lengthOtp = initialOtp.length;

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const [otp, setOtp] = useState<string[]>(initialOtp);

  const changeOtp = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    const newOtp = [...otp];

    // Tách ký tự ra từng ô nếu người dùng dán nhiều ký tự (hoặc gõ nhanh)
    if (value.length > 1) {
      const chars = value.slice(0, lengthOtp - index).split('');
      for (let i = 0; i < chars.length; i++) if (index + i < lengthOtp) newOtp[index + i] = chars[i];

      // Focus vào ô cuối cùng đã nhập
      const nextIndex = Math.min(index + chars.length, lengthOtp - 1);
      inputRefs.current[nextIndex]?.focus();
    } else {
      newOtp[index] = value;

      for (let i = 0; i < lengthOtp; i++) if (index < i) newOtp[i] = '';

      // Di chuyển tới ô tiếp theo nếu không phải ô cuối
      if (index < lengthOtp - 1) inputRefs.current[index + 1]?.focus();
    }

    setOtp(newOtp);
    formik.setFieldValue('otp', newOtp.join(''));
  };

  const enterOtp = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const resetOtp = async () => {
    try {
      await authApi.forgotPassword({ phone: formik.values.phone, type: ForgotPasswordType.PHONE });
      showSnackbar({ message: 'Gửi lại OTP Thành Công', type: SnackbarType.SUCCESS });
    } catch (error) {
      showSnackbar({ message: getErrorMessage(error), type: SnackbarType.ERROR });
    } finally {
      setSecond(60);
      setOtp(initialOtp);
      inputRefs.current[0]?.focus();
      formik.setFieldValue('otp', initialOtp.join(''));
    }
  };

  const [second, setSecond] = useState(200);
  useEffect(() => {
    if (second === 0) setAuthProcess(AuthProcess.LOGIN);
    const timer = setTimeout(() => setSecond(second - 1), 1000);
    return () => clearTimeout(timer);
  }, [second]);

  return (
    <Stack flex={1}>
      <Typography
        sx={{ textAlign: 'center' }}
      >{`Mã OTP đã gửi đến ${formik.values.phone}. Mã có giá trị trong vòng ${second}s`}</Typography>
      <StackRow>
        {Array.from({ length: lengthOtp }, (_, index) => (
          <Stack
            component={'input'}
            sx={{
              width: '100%',
              height: '55px',
              borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
              border: 'none',
              textAlign: 'center',
              fontSize: '20px',
              fontWeight: '600',
            }}
            key={index}
            ref={(el) => { inputRefs.current[index] = el; }}
            value={otp[index]}
            onChange={(e) => changeOtp(e, index)}
            onKeyDown={(e) => enterOtp(e, index)}
            maxLength={1}
          />
        ))}
      </StackRow>
      <IconContentElement
        icon="send"
        content="Gửi lại mã OTP"
        onClick={resetOtp}
        sx={{ flexDirection: 'row-reverse', justifyContent: 'flex-end' }}
      />
    </Stack>
  );
};
