import { Theme } from "@emotion/react";
import { SxProps } from "@mui/system";

import styled from "@emotion/styled";
import { Tab, Tabs } from "@mui/material";
import React from "react";
import { STYLE } from "../../../common";
import { IconElement } from "../icon";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
export const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: "#000",
  },
  minHeight: "auto",
});

export const StyledTab = styled(
  ({ icon, ...props }: { label: string; sx?: SxProps; icon?: string }) => (
    <Tab
      icon={icon ? <IconElement icon={icon} /> : undefined}
      iconPosition="start"
      disableRipple
      {...props}
    />
  )
)(({}) => ({
  padding: "8px",
  paddingBottom: "8px",
  gap: "8px",
  fontWeight: 500,
  "&.Mui-selected": {
    fontWeight: 600,
    color: "#000 ",
  },
  minHeight: "auto",
}));

export const TAB_STYLES: SxProps<Theme> = {
  height: "auto",
  position: "relative",
  padding: `10px ${STYLE.PADDING_GAP_LAYOUT}`,
  cursor: "pointer",
};

export const TAB_BACKGROUND_STYLES: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  position: "absolute",
  borderRadius: STYLE.BORDER_RADIUS_ELEMENT_TAG,
  top: 0,
  left: 0,
};
