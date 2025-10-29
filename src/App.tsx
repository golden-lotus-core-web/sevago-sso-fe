import { ThemeProvider, createTheme, type Theme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import { Routes } from "react-router-dom";
import { initSockets } from "./common";
import { MODE, STYLE } from "./common/constant";
import { OPACITY } from "./common/constant/opacity.constant";
import { getLimitLineCss } from "./common/utils/other/get-limit-line-css.utils";
import { useVersionCheck } from "./hooks";
import type { GlobalReduxState } from "./redux/store.interface";
import { store } from "./redux/store.redux";
import { renderRoutes } from "./router/render.route";
import { routes } from "./router/route.routes";

initSockets(store);

export default function App() {
  useVersionCheck({ interval: 5 * 60 * 1000 });

  const account = useSelector((state: GlobalReduxState) => state.account);
  const system = useSelector((state: GlobalReduxState) => state.system);

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>{renderRoutes(routes, account)}</Routes>
    </ThemeProvider>
  );
}
