import { IconAppsSidebar } from "../../common";
import { useSidebarState } from "../../hooks";
import { MAP_SIZE } from "../avatar/avatar-enum.enum";
import { ImageElement } from "../elements";
import { ImageSizeType } from "../elements/image";
import { AppsSidebar } from "./apps-sidebar.component";

export interface SystemMonitorSidebarPartProps {
  position?: "left" | "right";
  blacklist?: string[]; // list of paths to show; if empty or no match -> show all
}

export const SystemMonitorSidebarPart: React.FC<
  SystemMonitorSidebarPartProps
> = ({ position, blacklist }) => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebarState();
  return (
    <>
      <ImageElement
        url={IconAppsSidebar}
        onClick={openSidebar}
        sizeType={ImageSizeType.SQUARE}
        sx={{ width: MAP_SIZE.medium.width, height: MAP_SIZE.medium.height }}
      />
      <AppsSidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        position={position}
        blacklist={blacklist}
      />
    </>
  );
};
