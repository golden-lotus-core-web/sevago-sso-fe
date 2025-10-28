import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import IconLeft from "../../assets/icon/icon-left";
import IconRight from "../../assets/icon/icon-right";

import { AppInfo } from "../../common/constant/apps.data";
import {
  BORDER_COLOR_CARD,
  BORDER_RADIUS_ELEMENT_WRAPPER,
  PADDING_GAP_BUTTON,
  PADDING_GAP_ITEM,
  PADDING_GAP_ITEM_SMALL,
  PADDING_GAP_LAYOUT,
} from "../../common/constant/style.constant";
import { GlobalReduxState } from "../../redux/store.interface";
import { ImageElement } from "../elements/image/image.element";
import { ImageSizeType } from "../elements/image/image.enum";
import { MotionBox } from "../motion/motion-box.component";

export interface AppGridProps {
  apps: AppInfo[];
  onClickItem?: (app: AppInfo) => void;
  columns?: number;
  rows?: number;
  iconSize?: number;
  iconRadius?: number;
  iconShadow?: string;
  gap?: number | string;
  titleVariant?: "subtitle1" | "body1" | "caption";
  titleColor?: string;
  selectedAppId?: string;
  showPagination?: boolean;
}

export const AppGrid: React.FC<AppGridProps> = ({
  apps,
  onClickItem,
  columns = 5,
  rows = 3,
  iconSize = 80,
  iconRadius = 7,
  iconShadow = `0 ${PADDING_GAP_ITEM_SMALL} ${PADDING_GAP_LAYOUT} ${BORDER_COLOR_CARD}`,
  gap = PADDING_GAP_ITEM,
  titleVariant = "subtitle1",
  titleColor,
  selectedAppId,
  showPagination = true,
}) => {
  const theme = useTheme();

  // Pagination calculations
  const pageSize = Math.max(1, columns * Math.max(1, rows));
  const totalPages = Math.max(1, Math.ceil(apps.length / pageSize));
  const [page, setPage] = React.useState(0);
  const { user } = useSelector((state: GlobalReduxState) => state.account);

  React.useEffect(() => {
    setPage((prev) => (prev >= totalPages ? totalPages - 1 : prev));
  }, [totalPages, columns, rows, apps.length]);

  const start = page * pageSize;
  const end = start + pageSize;
  const visibleApps = totalPages > 1 ? apps.slice(start, end) : apps;

  const findLink = (app: AppInfo) => app.path;
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap,
        }}
      >
        {visibleApps.map((app, index) => {
          const isSelected = selectedAppId === app.path;
          return (
            <a
              key={app.path}
              href={findLink(app) || "#"}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
                display: "block",
              }}
              onClick={(e) => {
                const url = findLink(app);
                e.preventDefault();
                onClickItem?.(app);
                // open url in new tab if valid
                if (url && url !== "#") {
                  try {
                    window.open(url, "_blank", "noopener");
                  } catch (err) {
                    // fallback to setting location
                    const newWindow = window.open("about:blank");
                    if (newWindow) newWindow.location.href = url;
                  }
                }
              }}
            >
              <MotionBox
                preset="staggerItem"
                index={index}
                hover
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  flex: 1,
                  alignItems: "center",
                  flexDirection: "column",
                }}
                onClick={() => {
                  /* keep empty — handled by anchor onClick to ensure new tab opens after handler */
                }}
              >
                <Box
                  sx={{
                    width: iconSize,
                    height: iconSize,
                    borderRadius: iconRadius,
                    mb: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: app.color,
                    boxShadow: isSelected
                      ? `0 0 0 1px ${theme.palette.primary.main}, ${iconShadow}`
                      : iconShadow,
                  }}
                >
                  {typeof app.icon === "string" && app.icon && (
                    <ImageElement
                      sx={{ width: iconSize * 0.56, height: iconSize * 0.56 }}
                      url={app.icon}
                      sizeType={ImageSizeType.SQUARE}
                    />
                  )}
                </Box>

                <Typography
                  variant={titleVariant}
                  sx={{ color: titleColor ?? theme.palette.common.white }}
                >
                  {app.content}
                </Typography>
                {/* <Typography
                  variant={captionVariant}
                  sx={{ color: captionColor ?? theme.palette.common.white }}
                >
                  {app.content}
                </Typography> */}
              </MotionBox>
            </a>
          );
        })}
      </Box>

      {showPagination && totalPages > 1 && (
        <>
          {page === totalPages - 1 && (
            <IconButton
              size="small"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              sx={{
                position: "absolute",
                top: "50%",
                left: -30,
                transform: "translateY(-120%)",
                color: theme.palette.divider,
              }}
            >
              <IconLeft />
            </IconButton>
          )}

          {/* Right arrow */}
          {page !== totalPages - 1 && (
            <IconButton
              size="small"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              sx={{
                position: "absolute",
                top: "50%",
                right: -30,
                transform: "translateY(-120%)",
                color: theme.palette.divider,
              }}
            >
              <IconRight />
            </IconButton>
          )}

          {/* Dots bar */}
          <Box
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: PADDING_GAP_BUTTON,
                px: PADDING_GAP_BUTTON,
                py: PADDING_GAP_ITEM_SMALL,
                borderRadius: BORDER_RADIUS_ELEMENT_WRAPPER,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
            >
              {Array.from({ length: totalPages }).map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setPage(i)}
                  sx={{
                    height: 10,
                    borderRadius: BORDER_RADIUS_ELEMENT_WRAPPER,
                    cursor: "pointer",
                    transition: "width 0.3s ease",
                    width: i === page ? "40px" : "10px",
                    backgroundColor:
                      i === page
                        ? theme.palette.common.white
                        : "rgba(255,255,255,0.35)",
                  }}
                />
              ))}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};
