import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useMemo, useState } from "react";
import { APP_OBJ, AppGroup } from "../../../../common/constant/apps.data";
import { PADDING_GAP_TAB } from "../../../../common/constant/style.constant";
import { AppGrid } from "../../../../components";
import { MotionBox } from "../../../../components/motion/motion-box.component";
import { useActiveSidebar, useApps } from "../../../../hooks/use-apps.hook";
import { ACTION_ACCOUNT } from "../../../../redux";
import { useAppDispatch } from "../../../../redux/store.redux";

export interface SystemMonitorScreenProps {
  blacklist?: string[]; // list of paths to show; if empty or no match -> show all
}

export const SystemMonitorScreen: React.FC<SystemMonitorScreenProps> = ({
  blacklist,
}) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [tab, setTab] = useState<AppGroup>(AppGroup.ALL);
  const listApp = useApps(tab);
  const currentApp = useActiveSidebar();

  const displayApps = useMemo(() => {
    if (!blacklist || blacklist.length === 0) return listApp;
    const matched = listApp.filter((a) =>
      a.path ? blacklist.includes(a.path) : false
    );
    return matched.length > 0 ? matched : listApp;
  }, [blacklist, listApp]);

  return (
    <MotionBox
      preset="fadeInUp"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        top: 150,
      }}
    >
      <Box
        sx={{
          width: 865,
          gap: 6.25,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: PADDING_GAP_TAB,
            width: "100%",
            justifyContent: "flex-start",
          }}
        >
          {(
            [
              AppGroup.ALL,
              ...Array.from(
                new Set(Object.values(APP_OBJ).map((v) => v.group))
              ),
            ] as AppGroup[]
          ).map((g) => (
            <MotionBox
              key={g}
              sx={{ position: "relative" }}
              preset="tabUnderline"
            >
              <Typography
                onClick={() => setTab(g)}
                sx={{
                  cursor: "pointer",
                  color:
                    tab === g
                      ? theme.palette.common.white
                      : theme.palette.grey[300],
                }}
              >
                {g === AppGroup.ALL ? "Tất Cả" : g}
              </Typography>

              {tab === g && (
                <MotionBox
                  preset="tabUnderline"
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: 2,
                    backgroundColor: theme.palette.common.white,
                    transformOrigin: "left",
                  }}
                >
                  <div />
                </MotionBox>
              )}
            </MotionBox>
          ))}
        </Box>
        <MotionBox key={tab} preset="tabContent">
          <AppGrid
            apps={displayApps}
            columns={5}
            iconSize={80}
            iconRadius={7}
            gap={PADDING_GAP_TAB}
            selectedAppId={currentApp?.path}
            onClickItem={async (app) => {
              await dispatch(
                ACTION_ACCOUNT.updateCurrentAccess(app.path)
              ).unwrap();
            }}
          />
        </MotionBox>
      </Box>
    </MotionBox>
  );
};
