import { ThemeProvider, createTheme, type Theme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { MODE, STYLE } from "./common/constant";
import { OPACITY } from "./common/constant/opacity.constant";
import { getLimitLineCss } from "./common/utils/other/get-limit-line-css.utils";

export default function App() {
  const theme = createTheme({
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
              borderColor: MODE["light"].palette.divider,
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
            backgroundColor: MODE["light"].palette.background.paper,
            color: MODE["light"].palette.text.primary,
            boxShadow: MODE["light"].shadows[1],
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
              borderColor: MODE["light"].palette.divider,
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
            borderColor: `${MODE["light"].palette.divider}${OPACITY[30]}`,
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
    </ThemeProvider>
  );
}
