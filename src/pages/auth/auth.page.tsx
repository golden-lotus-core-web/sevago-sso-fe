import { InputAdornment, Stack, useTheme } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Form, Formik, type FormikHelpers } from "formik";
import { ACTION_ACCOUNT } from "../../redux";
import { SnackbarType, useSnackbar } from "../../hooks/use-snackbar.hook";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store.redux";
import { ButtonElement } from "../../components/elements/button/button.element";
import { TextFieldElement } from "../../components/elements/text-field/text-field.element";
import { BUTTON_BACK_ICON_CONTENT, validationSchema } from "./auth.constant";
import { AuthProcess } from "./auth.enum";
import {
  ForgotPasswordType,
  ResetPasswordType,
} from "../../apis/auth/auth.enum";
import { OtpPart } from "./parts/otp/otp.part";
import { IconElement } from "../../components/elements/icon/icon.element";
import { OPACITY } from "../../common/constant/opacity.constant";
import { LogoComponent } from "../../components/logo/logo.component";
import { PAGE } from "../../router/route.constant";
import { getErrorMessage } from "../../common/utils/string.utils";
import type { AuthDto } from "./auth.interface";
import { authApi } from "../../apis";
import { IconContentElement } from "../../components/elements/icon/icon-content.element";

export interface AuthPageProps {}

export const AuthPage: React.FC<AuthPageProps> = ({}) => {
  const { palette } = useTheme();
  const { showSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [authProcess, setAuthProcess] = React.useState(AuthProcess.LOGIN);

  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (
    authDto: AuthDto,
    { setFieldValue, resetForm }: FormikHelpers<AuthDto>
  ) => {
    setLoading(true);
    try {
      switch (authProcess) {
        case AuthProcess.LOGIN:
          await dispatch(ACTION_ACCOUNT.login(authDto)).unwrap();
          resetForm();
          break;

        case AuthProcess.FORGOT_PASSWORD:
          await authApi.forgotPassword({
            phone: authDto.phone,
            type: ForgotPasswordType.PHONE,
          });
          setAuthProcess(AuthProcess.VERIFY_OTP);
          break;

        case AuthProcess.VERIFY_OTP: {
          const res = await authApi.verifyOtp({
            otp: authDto.otp,
            phone: authDto.phone,
          });
          setFieldValue("token", res.token);
          setAuthProcess(AuthProcess.RESET_PASSWORD);
          break;
        }

        case AuthProcess.RESET_PASSWORD:
          await dispatch(
            ACTION_ACCOUNT.resetPassword({
              token: authDto.token,
              password: authDto.password,
              type: ResetPasswordType.OTP,
            })
          ).unwrap();
          navigate(PAGE.DASHBOARD.path);
          break;

        default:
          break;
      }
    } catch (error) {
      showSnackbar({
        message: getErrorMessage(error),
        type: SnackbarType.ERROR,
      });
    } finally {
      if (showPassword) setShowPassword(false);
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Formik
        initialValues={{
          emailOrPhone: "",
          password: "",
          token: "",
          otp: "",
          phone: "",
        }}
        validationSchema={validationSchema(authProcess)}
        onSubmit={onSubmit}
        validateOnChange={false}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form noValidate>
              <Stack
                sx={{
                  width: 400,
                  backgroundColor: `${palette.background.default}${OPACITY[80]}`,
                  backdropFilter: "blur(10px)",
                  borderRadius: 3.5,
                  padding: 3,
                  boxShadow: 1,
                  alignItems: "center",
                }}
                gap={3}
              >
                <LogoComponent url={"/images/logo/logo-sub-4.svg"} />

                {authProcess === AuthProcess.LOGIN && (
                  <Fragment>
                    <TextFieldElement
                      iconLabel="mail"
                      label="Số điện thoại"
                      name="emailOrPhone"
                      placeholder="Nhập số điện thoại"
                      error={formik.errors.emailOrPhone}
                      value={formik.values.emailOrPhone}
                      onChange={formik.handleChange}
                      sx={{
                        "& fieldset": { borderColor: palette.primary.light },
                      }}
                      required
                    />

                    <TextFieldElement
                      iconLabel="vpn_key"
                      label="Mật khẩu"
                      name="password"
                      autoComplete="current-password"
                      placeholder="Nhập mật khẩu"
                      error={formik.errors.password}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      type={showPassword ? "text" : "password"}
                      sx={{
                        "& fieldset": { borderColor: palette.primary.light },
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconElement
                              icon={
                                showPassword ? "visibility" : "visibility_off"
                              }
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          </InputAdornment>
                        ),
                      }}
                      required
                    />
                  </Fragment>
                )}

                {authProcess === AuthProcess.FORGOT_PASSWORD && (
                  <TextFieldElement
                    iconLabel="mail"
                    label="Số điện thoại"
                    name="phone"
                    placeholder="Nhập số điện thoại"
                    sx={{
                      "& fieldset": { borderColor: palette.primary.light },
                    }}
                    error={formik.errors.phone}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    required
                  />
                )}

                {authProcess === AuthProcess.VERIFY_OTP && (
                  <OtpPart setAuthProcess={setAuthProcess} />
                )}

                {authProcess === AuthProcess.RESET_PASSWORD && (
                  <TextFieldElement
                    label="Mật khẩu"
                    placeholder="Nhập mật khẩu"
                    name="password"
                    error={formik.errors.password}
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    sx={{
                      "& fieldset": { borderColor: palette.primary.light },
                    }}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconElement
                            icon={
                              showPassword ? "visibility" : "visibility_off"
                            }
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}

                <IconContentElement
                  icon={BUTTON_BACK_ICON_CONTENT[authProcess].backIcon}
                  content={BUTTON_BACK_ICON_CONTENT[authProcess].backContent}
                  sx={{ flexDirection: "row-reverse", width: "100%" }}
                  onClick={() =>
                    authProcess === AuthProcess.LOGIN
                      ? setAuthProcess(AuthProcess.FORGOT_PASSWORD)
                      : setAuthProcess(AuthProcess.LOGIN)
                  }
                />

                <ButtonElement
                  loading={loading}
                  content={BUTTON_BACK_ICON_CONTENT[authProcess].button}
                  type="submit"
                  disabled={
                    authProcess === AuthProcess.VERIFY_OTP
                      ? formik.values.otp.length < 4
                      : false
                  }
                />
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Stack>
  );
};
