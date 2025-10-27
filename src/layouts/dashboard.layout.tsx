import { Stack } from "@mui/material";
import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { STYLE } from "../common/constant";
import { StackRow } from "../components/styles/stack.style";
import { useIsSystemMonitor } from "../hooks/use-apps.hook";
import { useUpdateCurrentAccess } from "../hooks/use-update-current-access.hook";
import MonitorPart from "../pages/dashboard/parts/monitor/monitor.part";
import { DASHBOARD_SCREEN } from "../router/route.constant";
import { useSidebar } from "../hooks";
import { SidebarLeftPart } from "../pages/dashboard/sidebar/sidebar-left.part";
import { SidebarPart } from "../pages";

export interface DashboardLayoutProps {
  children?: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  const isSystemMonitor = useIsSystemMonitor();
  const { sidebarWidth } = useSidebar();
  const location = useLocation();
  useUpdateCurrentAccess();

  // Check if current route is chat screen
  const isChatScreen = location.pathname.includes(DASHBOARD_SCREEN.CHAT.path);

  if (isSystemMonitor) return <MonitorPart>{children}</MonitorPart>;
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Stack p={0} gap={0}>
        <SidebarPart />
        <StackRow>
          {!isChatScreen && <SidebarLeftPart autoCollapse={isChatScreen} />}
          <Stack
            sx={{
              overflowY: "auto",
              marginLeft: isChatScreen ? 0 : sidebarWidth,
              width: "100%",
              transition: "margin-left 0.3s ease",
              background: "#F5F6F8",
              minHeight: `calc(100vh - ${STYLE.HEIGHT_HEADER}px)`,
            }}
          >
            {children}
          </Stack>
        </StackRow>
      </Stack>
    </Stack>
  );
};
