import { Box, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { AppGrid } from '../app-grid/app-grid.component';
import { Environment, AppInfo, APP_OBJ, AppGroup, SSO } from '../../common';
import { PADDING_GAP_LAYOUT, PADDING_GAP_ITEM } from '../../common/constant/style.constant';
import { IconElement } from '../elements';
import { MotionBox } from '../motion';

interface AppsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  position?: 'left' | 'right';
  blacklist?: string[]; // list of paths to show; if empty or no match -> show all
  env: Environment;
  onClickApp: (appInfo: AppInfo) => void;
}

export const AppsSidebar: React.FC<AppsSidebarProps> = ({
  isOpen,
  onClose,
  position = 'left',
  blacklist = [],
  env,
  onClickApp,
}) => {
  if (!isOpen) return null;

  const theme = useTheme();

  const appsGroupObj = Object.keys(APP_OBJ).reduce((r, key) => {
    if (blacklist.includes(key)) return r;
    const e = (APP_OBJ as any)[key] as AppInfo;

    if (r[e.group]) r[e.group].push(e);
    else r[e.group] = [e];

    return r;
  }, {} as Record<AppGroup, AppInfo[]>);

  return (
    <>
      <Box
        onClick={onClose}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 100,
        }}
      />

      {/* Sidebar */}
      <MotionBox
        preset="fadeInLeft"
        sx={{
          position: 'fixed',
          top: 0,
          left: position === 'left' ? 0 : 'auto',
          right: position === 'right' ? 0 : 'auto',
          height: '100vh',
          backgroundColor: theme.palette.common.white,
          zIndex: 100,
          padding: PADDING_GAP_LAYOUT,
          gap: PADDING_GAP_ITEM,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              color: theme.palette.grey[600],
              '&:hover': { backgroundColor: theme.palette.grey[100] },
            }}
          >
            <IconElement icon="close" />
          </IconButton>
          <IconButton
            sx={{
              color: theme.palette.grey[600],
              '&:hover': { backgroundColor: theme.palette.grey[100] },
            }}
          >
            <IconElement icon="home" onClick={() => (window.location.href = SSO[env])} />
          </IconButton>
        </Box>

        {Object.keys(appsGroupObj).map((group) => (
          <Box
            key={group}
            sx={{
              gap: PADDING_GAP_ITEM,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography variant="subtitle2">
              {group === AppGroup.PLATFORM_AND_INFO ? 'Platform & Info' : group}
            </Typography>
            <AppGrid
              apps={appsGroupObj[group as AppGroup]}
              iconSize={60}
              iconRadius={5.5}
              gap={PADDING_GAP_ITEM}
              titleVariant="body1"
              captionVariant="caption"
              titleColor={theme.palette.grey[800]}
              captionColor={theme.palette.grey[600]}
              onClickApp={onClickApp}
            />
          </Box>
        ))}
      </MotionBox>
    </>
  );
};
