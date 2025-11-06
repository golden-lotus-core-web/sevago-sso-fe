import { useState } from "react";
import { IconAppsSidebar } from "../../common";
import { Environment } from "../../common/utils/other/app.utils";
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
  const [open, setOpen] = useState(false);

  return (
    <>
      <ImageElement
        url={IconAppsSidebar}
        onClick={() => setOpen(true)}
        sizeType={ImageSizeType.SQUARE}
      />

      <AppsSidebar
        isOpen={open}
        onClose={() => setOpen(false)}
        position={position}
        blacklist={blacklist}
        env={env}
      />
    </>
  );
};
