import { IconAppsSidebar } from "../../common";
import { useSidebarState } from "../../hooks";
import { MAP_SIZE } from "../avatar";
import { ImageElement } from "../elements";
import { ImageSizeType } from "../elements/image";
import { AppsSidebar } from "./apps-sidebar.component";

export interface SystemMonitorSidebarPartProps {}

export const SystemMonitorSidebarPart: React.FC<
  SystemMonitorSidebarPartProps
> = ({}) => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebarState();
  return (
    <>
      <ImageElement
        url={IconAppsSidebar}
        onClick={openSidebar}
        sizeType={ImageSizeType.SQUARE}
        sx={{ width: MAP_SIZE.medium.width, height: MAP_SIZE.medium.height }}
      />
      <AppsSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};
