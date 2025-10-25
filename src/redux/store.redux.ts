import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { initialStateSystem, reducerSystem } from "./system/system.slice";
import { initialStateAccount, reducerAccount } from "./account/account.slice";
import { useDispatch } from "react-redux";
import remainingWeightReducer, {
  initialStateRemainingWeight,
} from "./slices/remaining-weight.slice";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  migrate: (state: any) => {
    if (!state) return Promise.resolve(undefined);
    state.account = { ...initialStateAccount, ...state.account };
    state.system = { ...initialStateSystem, ...state.system };
    state.remainingWeight = {
      ...initialStateRemainingWeight,
      ...state.remainingWeight,
    };
    return Promise.resolve(state);
  },
};

const rootReducer = combineReducers({
  system: reducerSystem,
  account: reducerAccount,
  remainingWeight: remainingWeightReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = () =>
  useDispatch<AppDispatch>();

export const persistor = persistStore(store);
