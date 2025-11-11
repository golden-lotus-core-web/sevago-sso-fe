import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { APP_OBJ, AppGroup, AppInfo } from "../../common/constant/apps.data";
import { PADDING_GAP_TAB } from "../../common/constant/style.constant";
import { Environment } from "../../common/utils/other/app.utils";
import { AppGrid } from "../app-grid";
import { MotionBox } from "../motion";

export interface SystemMonitorScreenProps {
  blacklist?: string[];
  env: Environment;
}

export const SystemMonitorScreen: React.FC<SystemMonitorScreenProps> = ({
  blacklist,
  env,
}) => {
  const theme = useTheme();
  const [tab, setTab] = useState<AppGroup>(AppGroup.ALL);

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
          {Object.values(AppGroup).map((g) => (
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
                {g}
              </Typography>

              {/* {tab === g && (
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
                ></MotionBox>
              )} */}
            </MotionBox>
          ))}
        </Box>
        <MotionBox key={tab} preset="tabContent">
          <AppGrid
            apps={
              Object.values(APP_OBJ).filter((e) => {
                const isBlacklisted = !!blacklist?.includes(e.path[env]);
                const isInSelectedGroup =
                  tab === AppGroup.ALL ? true : e.group === tab;
                return !isBlacklisted && isInSelectedGroup;
              }) as AppInfo[]
            }
            iconSize={80}
            iconRadius={7}
            gap={PADDING_GAP_TAB}
            env={env}
          />
        </MotionBox>
      </Box>
    </MotionBox>
  );
};
