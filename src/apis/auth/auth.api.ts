import { axiosRequest } from "../../common/config";
import type {
  ForgotPasswordDto,
  LoginDto,
  LogoutDto,
  RefreshTokenDto,
  ResetPasswordDto,
  ResponseAuth,
  TokenObject,
  VerifyOtpDto,
} from "./auth.interface";

export const login = async (body: LoginDto): Promise<ResponseAuth> =>
  await axiosRequest.post("auth/login", body);

export const logout = async (body: LogoutDto) =>
  await axiosRequest.post("auth/logout", body);

export const forgotPassword = async (body: ForgotPasswordDto) =>
  await axiosRequest.post("auth/forgot-password", body);

export const verifyOtp = async (body: VerifyOtpDto): Promise<TokenObject> =>
  await axiosRequest.post("auth/verify-otp", body);

export const resetPassword = async (
  body: ResetPasswordDto
): Promise<ResponseAuth> =>
  await axiosRequest.post("auth/reset-password", body);

export const refreshToken = async (
  body: RefreshTokenDto
): Promise<Omit<ResponseAuth, "user">> =>
  await axiosRequest.post("auth/refresh-token", body);
