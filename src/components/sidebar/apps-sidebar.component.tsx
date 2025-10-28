import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AppGroup } from "../../common/constant/apps.data";
import {
  PADDING_GAP_ITEM,
  PADDING_GAP_LAYOUT,
} from "../../common/constant/style.constant";
import { useActiveSidebar, useApps } from "../../hooks/use-apps.hook";
import { useSidebar } from "../../hooks/user-sidebar";
import { ACTION_ACCOUNT } from "../../redux";
import { useAppDispatch } from "../../redux/store.redux";
import { PAGE } from "../../router/route.constant";
import { AppGrid } from "../app-grid/app-grid.component";
import { IconElement } from "../elements/icon/icon.element";
import { MotionBox } from "../motion/motion-box.component";

interface AppsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right";
  blacklist?: string[]; // list of paths to show; if empty or no match -> show all
}

export const AppsSidebar: React.FC<AppsSidebarProps> = ({
  isOpen,
  onClose,
  position = "left",
  blacklist,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const allApps = useApps();
  const dispatch = useAppDispatch();

  const currentApp = useActiveSidebar();
  const { setActiveExpandMenu } = useSidebar();

  const { palette } = useTheme();
  if (!isOpen) return null;

  const displayApps = React.useMemo(() => {
    if (!blacklist || blacklist.length === 0) return allApps;
    const matched = allApps.filter((a) =>
      a.path ? blacklist.includes(a.path) : false
    );
    return matched.length > 0 ? matched : allApps;
  }, [allApps, blacklist]);

  const groups: AppGroup[] = React.useMemo(() => {
    return Array.from(new Set(displayApps.map((v) => v.group)));
  }, [displayApps]);

  return (
    <>
      <Box
        onClick={onClose}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: palette.action.selected,
          zIndex: 100,
        }}
      />

      {/* Sidebar */}
      <MotionBox
        preset="fadeInLeft"
        sx={{
          position: "fixed",
          top: 0,
          left: position === "left" ? 0 : "auto",
          right: position === "right" ? 0 : "auto",
          height: "100vh",
          backgroundColor: theme.palette.common.white,
          zIndex: 100,
          padding: PADDING_GAP_LAYOUT,
          gap: PADDING_GAP_ITEM,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              color: theme.palette.grey[600],
              "&:hover": { backgroundColor: theme.palette.grey[100] },
            }}
          >
            <IconElement icon="close" />
          </IconButton>
          <IconButton
            sx={{
              color: theme.palette.grey[600],
              "&:hover": { backgroundColor: theme.palette.grey[100] },
            }}
          >
            <IconElement
              icon="home"
              onClick={() => {
                onClose();
                navigate(PAGE.DASHBOARD.path);
              }}
            />
          </IconButton>
        </Box>

        {groups.map((group) => (
          <Box
            key={group}
            sx={{
              gap: PADDING_GAP_ITEM,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle2">
              {group === AppGroup.PLATFORM_AND_INFO ? "Platform & Info" : group}
            </Typography>
            <AppGrid
              apps={displayApps.filter((app) => app.group === group)}
              columns={4}
              iconSize={60}
              iconRadius={5.5}
              gap={PADDING_GAP_ITEM}
              titleVariant="body1"
              captionVariant="caption"
              titleColor={theme.palette.grey[800]}
              captionColor={theme.palette.grey[600]}
              selectedAppId={currentApp?.path}
              onClickItem={async (app) => {
                await dispatch(
                  ACTION_ACCOUNT.updateCurrentAccess(app.path)
                ).unwrap();
                setActiveExpandMenu(null);
                onClose();
              }}
            />
          </Box>
        ))}
      </MotionBox>
    </>
  );
};
