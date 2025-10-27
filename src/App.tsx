import { ThemeProvider, createTheme, type Theme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { getToken } from "firebase/messaging";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes } from "react-router-dom";
import { messaging } from "./common/config/firebase.config";
import { MODE, STYLE } from "./common/constant";
import { OPACITY } from "./common/constant/opacity.constant";
import { getLimitLineCss } from "./common/utils/other/get-limit-line-css.utils";
import { getErrorMessage } from "./common/utils/string.utils";
import { useVersionCheck } from "./hooks";
import { SnackbarType, useSnackbar } from "./hooks/use-snackbar.hook";
import { ACTION_ACCOUNT } from "./redux";
import type { GlobalReduxState } from "./redux/store.interface";
import { store, useAppDispatch } from "./redux/store.redux";
import { renderRoutes } from "./router/render.route";
import { routes } from "./router/route.routes";
import { initSockets } from "./common";

initSockets(store);

export default function App() {
  useVersionCheck({ interval: 5 * 60 * 1000 });

  const dispatch = useAppDispatch();
  const account = useSelector((state: GlobalReduxState) => state.account);
  const system = useSelector((state: GlobalReduxState) => state.system);
  const { showSnackbar } = useSnackbar();

  const theme = createTheme({
    ...MODE[system.mode],
    ...MODE.OTHER,
    components: {
      MuiStack: {
        styleOverrides: {
          root: { gap: STYLE.PADDING_GAP_LAYOUT },
        },
      },
      MuiButton: {
        defaultProps: {
          size: "medium",
          fullWidth: true,
        },
        styleOverrides: {
          root: {
            "&.Mui-disabled": {
              borderColor: MODE[system.mode].palette.divider,
            },
            fontWeight: 400,
            lineHeight: "unset",
            height: STYLE.HEIGHT_DEFAULT_TEXT_FIELD_BUTTON,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: MODE[system.mode].palette.background.paper,
            color: MODE[system.mode].palette.text.primary,
            boxShadow: MODE[system.mode].shadows[1],
            padding: STYLE.PADDING_GAP_ITEM,
            margin: `5px !important`,
            borderRadius: STYLE.BORDER_RADIUS_ELEMENT_WRAPPER,
            maxWidth: "none",
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
          size: "small",
          fullWidth: true,
        },
        styleOverrides: {
          root: {
            "& fieldset": {
              borderColor: MODE[system.mode].palette.divider,
              borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
            },
            "& .MuiFormHelperText-root": {
              ...getLimitLineCss(1),
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: `${MODE[system.mode].palette.divider}${OPACITY[30]}`,
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            fontWeight: "unset",
            boxShadow: "none",
            border: "none",
            "&:first-of-type": {
              borderTopLeftRadius: STYLE.BORDER_RADIUS_ELEMENT,
              borderBottomLeftRadius: STYLE.BORDER_RADIUS_ELEMENT,
            },
            "&:last-of-type": {
              borderTopRightRadius: STYLE.BORDER_RADIUS_ELEMENT,
              borderBottomRightRadius: STYLE.BORDER_RADIUS_ELEMENT,
            },
          },
        },
      },
    },
  } as unknown as Theme);

  // ACCOUNT
  useEffect(() => {
    (async () => {
      try {
        account.user &&
          (await dispatch(ACTION_ACCOUNT.getAccount(account.user.id)).unwrap());
      } catch (error) {
        showSnackbar({
          message: getErrorMessage(error),
          type: SnackbarType.ERROR,
        });
      }
    })();
  }, []);

  // FCM
  useEffect(() => {
    (async () => {
      try {
        if (!("serviceWorker" in navigator)) return;

        const registration = await navigator.serviceWorker.register(
          "/firebase-messaging-sw.js"
        );

        await navigator.serviceWorker.ready;

        const permission = await Notification.requestPermission();

        if (permission === "granted" && account.isLogin && !account.fcmToken) {
          const fcmToken = await getToken(messaging, {
            vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY,
            serviceWorkerRegistration: registration,
          });

          if (fcmToken)
            await dispatch(
              ACTION_ACCOUNT.subscribeTopic({ fcmToken })
            ).unwrap();
        }
      } catch (error) {
        showSnackbar({
          message: getErrorMessage(error),
          type: SnackbarType.ERROR,
        });
      }
    })();
  }, [account.isLogin]);

  useEffect(() => {
    const handler = async (event: MessageEvent) => {
      if (!event.data) return;

      const { title, message } = event.data;

      const currentCount = store.getState().account.notificationCount;

      await dispatch(
        ACTION_ACCOUNT.changeNotificationCount(currentCount + 1)
      ).unwrap();

      showSnackbar({
        message: `${title}: ${message}`,
        type: SnackbarType.INFO,
      });
    };

    navigator.serviceWorker.addEventListener("message", handler);

    return () => {
      navigator.serviceWorker.removeEventListener("message", handler);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>{renderRoutes(routes, account)}</Routes>
    </ThemeProvider>
  );
}
