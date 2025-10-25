import axios from "axios";
import { ACTION_ACCOUNT } from "../../redux";
import { initialStateAccount } from "../../redux/account/account.slice";
import { store } from "../../redux/store.redux";
import { PAGE } from "../../router/route.constant";
import type { Error } from "../interfaces/error.interface";

export const axiosRequest = axios.create({
  baseURL: process.env.REACT_APP_BE_URL,
  timeout: 20000,
  headers: { "Content-Type": "application/json", "X-CSRF-TOKEN": "CSRF-Token" },
  withCredentials: true,
});

// Chặn request để add access token
axiosRequest.interceptors.request.use(async (config) => {
  const { userUnitPositionId, accessToken } = store.getState().account;

  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  if (userUnitPositionId)
    config.headers["userUnitPositionId"] = userUnitPositionId;

  return config;
});

let refreshingToken: any = null;

// Chặn response để refresh token
axiosRequest.interceptors.response.use(
  (response) => response.data,

  async (error) => {
    const originalConfig = error.config;

    const errorData = error.response?.data as Error;

    // Refreshing token
    if (errorData.statusCode === 777) {
      const refreshToken = store.getState().account.refreshToken;

      refreshingToken =
        refreshingToken ||
        store.dispatch(ACTION_ACCOUNT.refreshToken({ refreshToken })).unwrap();

      const data = await refreshingToken;

      refreshingToken = null;

      if (data.accessToken)
        originalConfig.headers.Authorization = `Bearer ${data.accessToken}`;

      // Thực hiện lại request với config ban đầu
      const response = await axios.request(originalConfig);

      return response.data;
    }

    if (errorData.statusCode === 888) {
      localStorage.setItem("account", JSON.stringify(initialStateAccount));

      window.location.href = process.env.REACT_APP_URL + PAGE.AUTH.path;
    }
    return Promise.reject(errorData);
  }
);
