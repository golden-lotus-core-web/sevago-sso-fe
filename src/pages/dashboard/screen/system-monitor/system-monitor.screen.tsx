import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { PADDING_GAP_TAB } from "../../../../common/constant/style.constant";
import { AppCategory } from "../../../../common/enums/app-category.enum";
import { AppGrid } from "../../../../components";
import { MotionBox } from "../../../../components/motion/motion-box.component";
import { useActiveSidebar, useApps } from "../../../../hooks/use-apps.hook";
import { ACTION_ACCOUNT } from "../../../../redux";
import { GlobalReduxState } from "../../../../redux/store.interface";
import { useAppDispatch } from "../../../../redux/store.redux";

export const SystemMonitorScreen: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [tab, setTab] = useState<AppCategory>(AppCategory.ALL);

  const user = useSelector((state: GlobalReduxState) => state.account?.user);

  const listApp = useApps(tab);
  const currentApp = useActiveSidebar();
  const checkUserNotOrg = useMemo(
    () =>
      !user?.userOrgUnitPositions?.length ||
      user.userOrgUnitPositions.some((pos) => !pos.orgUnit || !pos.position),
    [user]
  );

  if (checkUserNotOrg) {
    return (
      <MotionBox
        preset="fadeInUp"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          top: 150,
          minHeight: "400px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 4,
            borderRadius: 2,
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[4],
            maxWidth: 500,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.error.main,
              marginBottom: 2,
              fontWeight: 600,
            }}
          >
            Thông báo
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              lineHeight: 1.6,
              marginBottom: 3,
            }}
          >
            Bạn chưa có người quản lý trực tiếp. Vui lòng liên hệ quản trị viên
            để được hỗ trợ.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.disabled,
              fontStyle: "italic",
            }}
          >
            Hệ thống sẽ tự động cập nhật khi bạn được phân quyền.
          </Typography>
        </Box>
      </MotionBox>
    );
  }

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
              { key: AppCategory.ALL, label: "Tất Cả" },
              { key: AppCategory.HRM, label: "HRM" },
              { key: AppCategory.WORKFLOW, label: "Workflow Engine" },
              { key: AppCategory.PLATFORM_INFO, label: "Platform & Info" },
            ] as { key: AppCategory; label: string }[]
          ).map((t) => (
            <MotionBox
              key={t.key}
              sx={{ position: "relative" }}
              preset="tabUnderline"
            >
              <Typography
                onClick={() => setTab(t.key)}
                sx={{
                  cursor: "pointer",
                  color:
                    tab === t.key
                      ? theme.palette.common.white
                      : theme.palette.grey[300],
                }}
              >
                {t.label}
              </Typography>

              {tab === t.key && (
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
            apps={listApp}
            columns={5}
            iconSize={80}
            iconRadius={7}
            gap={PADDING_GAP_TAB}
            selectedAppId={currentApp?.key}
            onClickItem={async (app) => {
              await dispatch(
                ACTION_ACCOUNT.updateCurrentAccess(app.key)
              ).unwrap();
            }}
          />
        </MotionBox>
      </Box>
    </MotionBox>
  );
};
