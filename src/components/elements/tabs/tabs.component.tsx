import { Stack, SxProps, useTheme } from "@mui/material";
import { LayoutGroup, motion } from "framer-motion";
import React, { useEffect, useId, useState } from "react";
import { COLOR_CONSTANT, STYLE } from "../../../common";
import { StackTabs } from "../../styles";
import { IconContentElement } from "../icon";
import { LinkElement } from "../link";
import { StyledTab, StyledTabs, TAB_BACKGROUND_STYLES } from "./tabs.constant";

export interface TabComponent {
  id: string;
  icon?: string;
  name: string;
  onClick?: () => void;
  href?: string;
}

export interface TabsComponentProps {
  idSelect?: string;
  tabs: TabComponent[];
  size?: "large" | "small" | "medium";
  direction?: "column" | "row";
  variant?: "contained" | "outlined";
  onChange?: (newValue: string) => void;
  sx?: SxProps;
  sxTabs?: SxProps;
  sxWrapper?: SxProps;
}

export const TabsComponent: React.FC<TabsComponentProps> = ({
  idSelect,
  tabs,
  size,
  direction = "row",
  variant = "contained",
  onChange,
  sx,
  sxTabs,
  sxWrapper,
}) => {
  const { palette } = useTheme();

  const [selected, setSelected] = useState(idSelect);

  const layoutGroupId = useId();

  useEffect(() => {
    setSelected(idSelect);
  }, [idSelect]);

  if (variant === "outlined") {
    const selectedIndex = tabs.findIndex((tab) => tab.id === selected);
    return (
      <StyledTabs
        value={selectedIndex}
        onChange={(_, _value) => {
          onChange?.(tabs[_value].id);
        }}
        // aria-label="styled tabs example"
      >
        {tabs.map((it) => (
          <StyledTab
            icon={it.icon ?? ""}
            key={it.id}
            label={it.name}
            sx={{ textTransform: "inherit", ...sx }}
          />
        ))}
      </StyledTabs>
    );
  }

  return (
    <LayoutGroup id={layoutGroupId}>
      <StackTabs sx={{ ...sxWrapper }} direction={direction}>
        {tabs.map((tab, index) => (
          <LinkElement
            href={tab.href}
            onClick={() => tab.onClick?.()}
            key={tab.id}
            id={tab.id}
          >
            <Stack
              component={motion.div}
              sx={{
                height: "auto",
                position: "relative",
                padding: `10px ${STYLE.PADDING_GAP_LAYOUT}`,
                cursor: "pointer",
                borderRight:
                  index < tabs.length - 1
                    ? `1px solid ${COLOR_CONSTANT.gray}`
                    : "none",
                ...sxTabs,
              }}
              initial={{
                color:
                  tab.id === selected
                    ? palette.primary.contrastText
                    : palette.text.primary,
              }}
              animate={{
                color:
                  tab.id === selected
                    ? palette.primary.contrastText
                    : palette.text.primary,
              }}
              transition={{ duration: 0.3 }}
              onTap={() => setSelected(tab.id)}
            >
              <IconContentElement
                icon={tab.icon}
                content={tab.name}
                sx={{ zIndex: 1 }}
                size={size}
                isNowrap
              />

              {tab.id === selected && (
                <Stack
                  component={motion.div}
                  sx={TAB_BACKGROUND_STYLES}
                  layoutId="selected"
                  animate={{ backgroundColor: palette.primary.main }}
                  initial={{ backgroundColor: palette.primary.main }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Stack>
          </LinkElement>
        ))}
      </StackTabs>
    </LayoutGroup>
  );
};
