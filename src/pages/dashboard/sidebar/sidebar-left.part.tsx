import { Box, Divider, IconButton, Stack } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { UserType } from "../../../apis";
import { AppModule, STYLE, SYSTEM_MODULES } from "../../../common";
import { ButtonElement, IconElement, StackRow } from "../../../components";
import { useSidebar } from "../../../hooks";
import { GlobalReduxState } from "../../../redux";
import { SidebarMenuExpand } from "./sidebar-menu/sidebar-menu-expand.component";
import { SidebarMenu } from "./sidebar-menu/sidebar-menu.component";

export interface SidebarLeftPartProps {
  autoCollapse?: boolean;
}

export const SidebarLeftPart: React.FC<SidebarLeftPartProps> = ({
  autoCollapse = false,
}) => {
  const { user, current_access } = useSelector(
    (state: GlobalReduxState) => state.account
  );
  const [tabs, setTabs] = useState<AppModule[]>([]);
  const [wasAutoCollapsed, setWasAutoCollapsed] = useState(false);

  // Clear localStorage khi click vào sidebar
  const handleSidebarClick = () => {
    // Clear tất cả localStorage keys liên quan đến proposals-user
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("proposals-user-")) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((key) => localStorage.removeItem(key));
  };

  const filterMenu = useCallback(
    (menu: AppModule[], userType: UserType): AppModule[] => {
      return menu
        .map((item) => {
          const isAllowed = item.allowUserTypes
            ? item.allowUserTypes.includes(userType)
            : true;
          if (!isAllowed) return null;
          let newChildren: AppModule[] | undefined = undefined;
          if (item.children) {
            newChildren = filterMenu(item.children, userType);
            if (newChildren.length === 0) {
              newChildren = undefined;
            }
          }

          return {
            ...item,
            children: newChildren,
          };
        })
        .filter(Boolean) as AppModule[];
    },
    []
  );

  useEffect(() => {
    const findActiveSidebar =
      SYSTEM_MODULES.find((it) => it.key === current_access)?.children || [];
    const filteredSidebar = user?.type
      ? filterMenu(findActiveSidebar, user.type)
      : [];

    setTabs(filteredSidebar);
  }, [current_access, user, filterMenu]);

  const { isCollapsed, setIsCollapsed, activeExpandMenu } = useSidebar();

  // Auto collapse/expand sidebar based on autoCollapse prop
  useEffect(() => {
    if (autoCollapse && !isCollapsed) {
      setIsCollapsed(true);
      setWasAutoCollapsed(true);
    } else if (!autoCollapse && isCollapsed && wasAutoCollapsed) {
      // Only auto expand if it was collapsed by auto-collapse
      setIsCollapsed(false);
      setWasAutoCollapsed(false);
    }
  }, [autoCollapse, isCollapsed, setIsCollapsed, wasAutoCollapsed]);

  return (
    <Stack
      onClick={handleSidebarClick}
      sx={{
        position: "fixed",
        left: 0,
        top: STYLE.HEIGHT_HEADER, // height header
        bottom: 0,
        backgroundColor: "#fff",
        transition: "width 0.3s ease",
        zIndex: 10,
        overflow: "hidden",
      }}
    >
      <StackRow sx={{ height: "100%", gap: 0 }}>
        {/* primary menu */}
        <Stack
          sx={{
            borderRight: `1px solid ${STYLE.BORDER_COLOR_LAYOUT}`,
            width: isCollapsed ? STYLE.WIDTH_COLLAPSE : STYLE.WIDTH_SIDEBAR,
            height: "100%",
            padding: "12px 8px 8px 8px",
          }}
        >
          <SidebarMenu items={tabs} />
          <Divider sx={{ marginTop: "auto" }} />

          {isCollapsed ? (
            <Box sx={{ position: "relative" }}>
              <IconButton
                color="primary"
                onClick={() => {
                  setIsCollapsed(!isCollapsed);
                  setWasAutoCollapsed(false);
                }}
                sx={{ padding: 1.25, borderRadius: 1.5 }}
                aria-label="delete"
                size="small"
              >
                <IconElement icon={"menu_open"} />
              </IconButton>
            </Box>
          ) : (
            <ButtonElement
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                setWasAutoCollapsed(false);
              }}
              sx={{
                textAlign: "left",
                "&.MuiButton-text": {
                  justifyContent: "start !important",
                  padding: 1.25,
                  borderRadius: 1.5,
                },
              }}
              content={"Ẩn điều hướng"}
              variant="text"
              startIcon="menu_open"
            />
          )}
        </Stack>
        {/* submenu */}
        {activeExpandMenu && (
          <Stack
            sx={{
              borderRight: `1px solid ${STYLE.BORDER_COLOR_LAYOUT}`,
              width: STYLE.WIDTH_SIDEBAR_EXPAND,
              height: "100%",
              padding: "10px",
              gap: 4,
            }}
          >
            <SidebarMenuExpand items={activeExpandMenu} />
          </Stack>
        )}
      </StackRow>
    </Stack>
  );
};
