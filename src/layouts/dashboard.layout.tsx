import { Stack } from "@mui/material";
import React, { ReactNode } from "react";
import { STYLE } from "../common/constant";
import { StackRow } from "../components/styles/stack.style";
import { useSidebar } from "../hooks";
import { useIsSystemMonitor } from "../hooks/use-apps.hook";
import MonitorPart from "../pages/dashboard/parts/monitor/monitor.part";

export interface DashboardLayoutProps {
  children?: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  const isSystemMonitor = useIsSystemMonitor();
  const { sidebarWidth } = useSidebar();

  if (isSystemMonitor) return <MonitorPart>{children}</MonitorPart>;
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Stack p={0} gap={0}>
        <StackRow>
          <Stack
            sx={{
              overflowY: "auto",
              marginLeft: sidebarWidth,
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
