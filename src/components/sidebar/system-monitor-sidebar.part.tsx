import { IconAppsSidebar } from "../../common";
import { Environment, getSsoUrl } from "../../common/utils/other/app.utils";
import { useSidebarState } from "../../hooks";
import { MAP_SIZE } from "../avatar/avatar-enum.enum";
import { ImageElement } from "../elements";
import { ImageSizeType } from "../elements/image";
import { AppsSidebar } from "./apps-sidebar.component";

export interface SystemMonitorSidebarPartProps {
  position?: "left" | "right";
  blacklist?: string[]; // list of paths to show; if empty or no match -> show all
  env: Environment;
}

export const SystemMonitorSidebarPart: React.FC<
  SystemMonitorSidebarPartProps
> = ({ position, blacklist, env }) => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebarState();

  const handleIconClick = () => {
    const ssoUrl = getSsoUrl(env);
    if (ssoUrl) {
      window.location.href = ssoUrl;
    } else {
      openSidebar();
    }
  };

  return (
    <>
      <ImageElement
        url={IconAppsSidebar}
        onClick={handleIconClick}
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
