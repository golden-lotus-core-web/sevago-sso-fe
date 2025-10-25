import { createAsyncThunk } from '@reduxjs/toolkit'; 
import type { LoginDto, LogoutDto, RefreshTokenDto, ResetPasswordDto, SubscribeUnsubscribeTopicDto } from '../../apis/auth/auth.interface';
import { authApi, userApi } from '../../apis';
import type { UpdateAccountDto } from '../../apis/user/user.interface';
import type { GlobalReduxState } from '../store.interface';

export const login = createAsyncThunk('LOGIN', async (params: LoginDto, { rejectWithValue }) => {
  try {
    return await authApi.login(params);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const logout = createAsyncThunk('LOGOUT', async (params: LogoutDto, { rejectWithValue }) => {
  try {
    return await authApi.logout(params);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const resetPassword = createAsyncThunk(
  'RESET_PASSWORD',
  async (params: ResetPasswordDto, { rejectWithValue }) => {
    try {
      return await authApi.resetPassword(params);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const refreshToken = createAsyncThunk('REFRESH_TOKEN', async (params: RefreshTokenDto, { rejectWithValue }) => {
  try {
    return await authApi.refreshToken(params);
  } catch (error) {
    return rejectWithValue(error);
  }
});

// FCM
export const subscribeTopic = createAsyncThunk(
  'SUBSCRIBE_TOPIC',
  async (params: SubscribeUnsubscribeTopicDto, { rejectWithValue }) => {
    try {
      await authApi.subscribeTopic(params);
      return { fcmToken: params.fcmToken };
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const unsubscribeTopic = createAsyncThunk(
  'UNSUBSCRIBE_TOPIC',
  async (params: SubscribeUnsubscribeTopicDto, { rejectWithValue }) => {
    try {
      return await authApi.unsubscribeTopic(params);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const changeNotificationCount = createAsyncThunk('CHANGE_NOTIFICATION_COUNT', (notificationCount: number) => {
  return notificationCount;
});

export const changeSidebarCount = createAsyncThunk(
  'CHANGE_SIDEBAR_COUNT',
  (params: { sidebarPath: string; count: number }) => {
    return params;
  },
);

// ACCOUNT
export const updateAccount = createAsyncThunk(
  'UPDATE_ACCOUNT',
  async (body: UpdateAccountDto, { rejectWithValue, getState }) => {
    try {
      await userApi.updateAccount(body);
      const state = getState() as GlobalReduxState;
      if (!state.account.user) {
        throw new Error('User not found');
      }
      return await userApi.getUser(state.account.user.id);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getAccount = createAsyncThunk('GET_ACCOUNT', async (id: string, { rejectWithValue }) => {
  try {
    return await userApi.getUser(id);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const updatePositionOrgUnit = createAsyncThunk('UPDATE_POSITION_ORG_UNIT', (userUnitPositionId: string) => {
  return userUnitPositionId;
});

export const updateCurrentAccess = createAsyncThunk('UPDATE_CURRENT_ACCESS', (current_access: string) => {
  return current_access;
});
