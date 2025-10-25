import { Stack } from "@mui/material";
import React, { type ReactNode } from "react";
import { STYLE } from "../common/constant";

export interface DefaultLayoutProps {
  children?: ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Stack
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        width: "100%",
        overflowY: "auto",
      }}
    >
      <Stack
        sx={{
          flex: 1,
          alignItems: "center",
          py: STYLE.PADDING_GAP_LAYOUT,
          justifyContent: "center",
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};
