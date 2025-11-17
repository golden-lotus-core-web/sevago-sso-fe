import { CircularProgress, Stack, SxProps, Theme } from "@mui/material";
import { STYLE } from "../../common";

export interface LoadingComponentProps {
  color?: string;
  size?: "large" | "small" | "medium";
  sx?: SxProps<Theme>;
}

export const LoadingComponent: React.FC<LoadingComponentProps> = ({
  color,
  size = "medium",
  sx = {},
}) => {
  return (
    <Stack
      sx={{
        ...sx,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress size={STYLE.FONT_SIZE_LOADING[size]} sx={{ color }} />
    </Stack>
  );
};
