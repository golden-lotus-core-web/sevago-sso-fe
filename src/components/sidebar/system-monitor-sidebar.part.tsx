import { useEffect, useState } from 'react';
import { APP_OBJ, AppInfo, Environment, IconAppsSidebar } from '../../common';
import { AppGridItem } from '../app-grid';
import { ImageElement, ImageSizeType } from '../elements';
import { AppsSidebar } from './apps-sidebar.component';

export interface SystemMonitorSidebarPartProps {
  position?: 'left' | 'right';
  blacklist?: string[]; // list of paths to show; if empty or no match -> show all
  env: Environment;
  onClickApp: (appInfo: AppInfo) => void;
  showNameApps?: boolean;
  direction?: 'row' | 'column';
}

export const SystemMonitorSidebarPart: React.FC<SystemMonitorSidebarPartProps> = ({
  position,
  blacklist,
  env,
  onClickApp,
  showNameApps = false,
  direction = 'row',
}) => {
  const [open, setOpen] = useState(false);
  const [currentApp, setCurrentApp] = useState<AppInfo | null>(null);

  useEffect(() => {
    const href = window.location.href;
    const matchedKey = Object.keys(APP_OBJ).find((key) => {
      const app = APP_OBJ[key as keyof typeof APP_OBJ] as AppInfo;
      const target = app.path[env];
      return !!target && href.startsWith(target);
    });

    setCurrentApp(matchedKey ? (APP_OBJ[matchedKey as keyof typeof APP_OBJ] as AppInfo) : null);
  }, [window.location.href]);

  return (
    <>
      <ImageElement url={IconAppsSidebar} onClick={() => setOpen(true)} sizeType={ImageSizeType.SQUARE} />
      {currentApp && (
        <AppGridItem app={currentApp} iconSize={32} iconRadius={6} showNameApps={showNameApps} direction={direction} />
      )}

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
