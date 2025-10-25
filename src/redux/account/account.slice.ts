import { createSlice } from "@reduxjs/toolkit";
import type { CURRENT_ACCESS, GlobalAccountState } from "./account.interface";
import {
  login,
  logout,
  resetPassword,
  refreshToken,
  subscribeTopic,
  unsubscribeTopic,
  changeNotificationCount,
  changeSidebarCount,
  updateAccount,
  getAccount,
  updatePositionOrgUnit,
  updateCurrentAccess,
} from "./account.action";
import { changeMode } from "../system";
import { Mode } from "../../common";

export const initialStateAccount: GlobalAccountState = {
  isLogin: false,
  user: null,
  accessToken: "",
  refreshToken: "",
  fcmToken: "",
  notificationCount: 0,
  userUnitPositionId: "",
  sidebarCountObj: {},
  current_access: "recruitment",
};

export const slice = createSlice({
  // Name Slice
  name: "account",
  initialState: initialStateAccount,
  reducers: {},

  extraReducers: (builder) => {
    // Login
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLogin = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userUnitPositionId =
        state.userUnitPositionId ||
        action.payload.user.userOrgUnitPositions[0].id;
      state.sidebarCountObj = action.payload.sidebarCountObj;
    });

    // Logout
    builder.addCase(logout.fulfilled, (state) => {
      state.isLogin = initialStateAccount.isLogin;
      state.user = initialStateAccount.user;
      state.accessToken = initialStateAccount.accessToken;
      state.refreshToken = initialStateAccount.refreshToken;
      state.fcmToken = initialStateAccount.fcmToken;
      state.userUnitPositionId = initialStateAccount.userUnitPositionId;
      state.sidebarCountObj = initialStateAccount.sidebarCountObj;
    });
    builder.addCase(logout.rejected, (state) => {
      state.isLogin = initialStateAccount.isLogin;
      state.user = initialStateAccount.user;
      state.accessToken = initialStateAccount.accessToken;
      state.refreshToken = initialStateAccount.refreshToken;
      state.fcmToken = initialStateAccount.fcmToken;
      state.userUnitPositionId = initialStateAccount.userUnitPositionId;
      state.sidebarCountObj = initialStateAccount.sidebarCountObj;
    });

    // Reset password
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.isLogin = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userUnitPositionId =
        state.userUnitPositionId ||
        action.payload.user.userOrgUnitPositions[0].id;
      state.sidebarCountObj = initialStateAccount.sidebarCountObj;
    });

    // Refresh token
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(refreshToken.rejected, (state) => {
      state.isLogin = initialStateAccount.isLogin;
      state.user = initialStateAccount.user;
      state.accessToken = initialStateAccount.accessToken;
      state.refreshToken = initialStateAccount.refreshToken;
      state.fcmToken = initialStateAccount.fcmToken;
      state.userUnitPositionId = initialStateAccount.userUnitPositionId;
      state.sidebarCountObj = initialStateAccount.sidebarCountObj;
    });

    // Subscribe Topic
    builder.addCase(subscribeTopic.fulfilled, (state, action) => {
      state.fcmToken = action.payload.fcmToken;
    });
    builder.addCase(subscribeTopic.rejected, (state) => {
      state.fcmToken = initialStateAccount.fcmToken;
    });

    // Unsubscribe Topic
    builder.addCase(unsubscribeTopic.fulfilled, (state) => {
      state.fcmToken = initialStateAccount.fcmToken;
    });
    builder.addCase(unsubscribeTopic.rejected, (state) => {
      state.fcmToken = initialStateAccount.fcmToken;
    });

    // Change notification Count
    builder.addCase(changeNotificationCount.fulfilled, (state, action) => {
      state.notificationCount = action.payload;
    });

    // Change sidebar count
    builder.addCase(changeSidebarCount.fulfilled, (state, action) => {
      state.sidebarCountObj = {
        ...state.sidebarCountObj,
        [action.payload.sidebarPath]:
          (state.sidebarCountObj[action.payload.sidebarPath] || 0) +
          action.payload.count,
      };
    });

    // Update account
    builder.addCase(updateAccount.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    // Get account
    builder.addCase(getAccount.fulfilled, (state, action) => {
      state.user = action.payload;
      state.userUnitPositionId =
        state.userUnitPositionId || action.payload.userOrgUnitPositions[0].id;
    });

    // Update position org unit
    builder.addCase(updatePositionOrgUnit.fulfilled, (state, action) => {
      state.userUnitPositionId = action.payload;
    });

    builder.addCase(updateCurrentAccess.fulfilled, (state, action) => {
      state.current_access = action.payload as CURRENT_ACCESS;
    });
  },
});

export const reducerAccount = slice.reducer;
