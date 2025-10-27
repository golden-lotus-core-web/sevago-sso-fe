import { Box, Stack, Typography } from "@mui/material";
import {
  BORDER_RADIUS_ELEMENT_WRAPPER,
  getAppColor,
  STYLE,
} from "../../../common";
import {
  AppsSidebar,
  AvatarUserComponent,
  BellComponent,
  ImageElement,
  MAP_SIZE,
  StackRowAlignCenter,
  StackRowJustBetween,
} from "../../../components";
import { ImageSizeType } from "../../../components/elements/image";
import { useActiveSidebar, useSidebarState } from "../../../hooks";

export interface SidebarPartProps {}

export const SidebarPart: React.FC<SidebarPartProps> = ({}) => {
  const activeSidebar = useActiveSidebar();
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebarState();

  return (
    <>
      <StackRowJustBetween
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "white",
          padding: STYLE.PADDING_LAYOUT_HEADER,
          height: STYLE.HEIGHT_HEADER,
          borderBottom: `1px solid ${STYLE.BORDER_COLOR_LAYOUT}`,
        }}
      >
        <StackRowAlignCenter>
          <ImageElement
            url="/images/icon-apps-sidebar.svg"
            onClick={openSidebar}
            sizeType={ImageSizeType.SQUARE}
            sx={{
              width: MAP_SIZE.medium.width,
              height: MAP_SIZE.medium.height,
            }}
          />
          {activeSidebar && (
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: MAP_SIZE.large.width,
                  height: MAP_SIZE.large.height,
                  borderRadius: BORDER_RADIUS_ELEMENT_WRAPPER,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: getAppColor(activeSidebar.category),
                }}
              >
                <ImageElement
                  url={activeSidebar.icon}
                  sizeType={ImageSizeType.SQUARE}
                  size="small"
                  sx={{
                    width: MAP_SIZE.small.width,
                    height: MAP_SIZE.small.height,
                  }}
                />
              </Box>
              <Typography variant="subtitle2">
                {activeSidebar.title} - {activeSidebar.caption}
              </Typography>
            </Stack>
          )}
        </StackRowAlignCenter>
        <StackRowAlignCenter>
          <BellComponent />
          <AvatarUserComponent />
        </StackRowAlignCenter>
      </StackRowJustBetween>

      <AppsSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};
