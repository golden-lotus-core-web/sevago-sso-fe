import { useState } from 'react';
import { AppInfo, Environment, IconAppsSidebar } from '../../common';
import { ImageElement, ImageSizeType } from '../elements';
import { AppsSidebar } from './apps-sidebar.component';

export interface SystemMonitorSidebarPartProps {
  position?: 'left' | 'right';
  blacklist?: string[]; // list of paths to show; if empty or no match -> show all
  env: Environment;
  onClickApp: (appInfo: AppInfo) => void;
}

export const SystemMonitorSidebarPart: React.FC<SystemMonitorSidebarPartProps> = ({
  position,
  blacklist,
  env,
  onClickApp,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ImageElement url={IconAppsSidebar} onClick={() => setOpen(true)} sizeType={ImageSizeType.SQUARE} />

      <AppsSidebar
        isOpen={open}
        onClose={() => setOpen(false)}
        position={position}
        blacklist={blacklist}
        env={env}
        onClickApp={onClickApp}
      />
    </>
  );
};
