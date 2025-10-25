import { Box, Divider, Menu, MenuItem, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogoutType } from '../../apis/auth/auth.enum';
import { getLimitLineCss } from '../../common/utils/other/get-limit-line-css.utils';
import { getErrorMessage } from '../../common/utils/string.utils';
import { SnackbarType, useSnackbar } from '../../hooks/use-snackbar.hook';
import { ACTION_ACCOUNT } from '../../redux';
import { useAppDispatch } from '../../redux/store.redux';
import { DASHBOARD_SCREEN, PAGE } from '../../router/route.constant';
import { IconElement } from '../elements/icon/icon.element';
import { StackRowAlignStartJustBetween } from '../styles/stack.style';
import type { GlobalReduxState } from '../../redux/store.interface';
import { AvatarUserInfo } from '../avatar/avatar-user-info.element';
import { IconContentElement } from '../elements/icon/icon-content.element';
import { RadioGroupElement } from '../elements/radio/radio-group.element';
import { RadioElement } from '../elements/radio/radio.element';

export interface AvatarUserComponentProps { }

export const AvatarUserComponent: React.FC<AvatarUserComponentProps> = ({ }) => {
  const account = useSelector((state: GlobalReduxState) => state.account);
  const { showSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const positions = account?.user?.managedOrgUnits?.map((e) => e.name) || [];


  const menu = [ 
    {
      content: 'Đăng xuất khỏi thiết bị',
      icon: 'logout',
      onClick: async () => {
        try { 
          await Promise.all([
            dispatch(
              ACTION_ACCOUNT.logout({ type: LogoutType.THIS_DEVICE, refreshToken: account.refreshToken }),
            ).unwrap(),
            dispatch(ACTION_ACCOUNT.unsubscribeTopic({ fcmToken: account.fcmToken })).unwrap(),
          ]); 
          navigate(PAGE.AUTH.path);
        } catch (error) {
          showSnackbar({ message: getErrorMessage(error), type: SnackbarType.ERROR });
        }
      },
    },
    {
      content: 'Đăng xuất khỏi tất cả thiết bị',
      icon: 'exit_to_app',
      onClick: async () => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker
            .getRegistrations()
            .then((registrations) => {
              registrations.forEach((registration) => {
                registration.unregister();
              });
            })
            .catch((error) => {
              console.error('Error unregistering Service Workers: ', error);
            });
        } else {
          console.warn('Service Worker is not supported in this browser.');
        }

        await Promise.all([
          dispatch(
            ACTION_ACCOUNT.logout({ type: LogoutType.THIS_DEVICE, refreshToken: account.refreshToken }),
          ).unwrap(),

          dispatch(ACTION_ACCOUNT.unsubscribeTopic({ fcmToken: account.fcmToken })).unwrap(),
        ]); 
        navigate(PAGE.AUTH.path);
      },
    },
  ];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box onClick={handleClick} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 1 }}>
        <AvatarUserInfo url={account.user?.url} name={account.user?.name ?? ''} positions={positions} isTag />
        <IconElement
          icon="arrow_drop_down"
          size="medium"
          sx={{
            color: 'text.secondary',
            transition: 'transform 0.2s ease-in-out',
            transform: anchorEl ? 'rotate(180deg)' : 'rotate(0deg)',
            fontVariationSettings: "'wght' 600, 'FILL' 0",
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
        />
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        disableScrollLock={true}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* User Info Header */}
        <Box sx={{ p: 2 }}>
          <StackRowAlignStartJustBetween>
            <Typography variant="subtitle1" sx={{ lineHeight: 1 }}>
              {account.user?.name}
            </Typography>
            <IconElement
              icon="settings"
              onClick={() => navigate(PAGE.DASHBOARD.path + DASHBOARD_SCREEN.ACCOUNT.path)}
            />
          </StackRowAlignStartJustBetween>

          {account.user?.userOrgUnitPositions && account.user.userOrgUnitPositions.length > 0 && (
            <React.Fragment>
              <IconContentElement icon="admin_panel_settings" content="Vai trò" />

              <RadioGroupElement
                direction="column"
                sx={{ paddingLeft: '20px' }}
                value={account.userUnitPositionId}
                onChange={(event) => {
                  dispatch(ACTION_ACCOUNT.updatePositionOrgUnit(event.target.value));
                  window.location.reload();
                }}
              >
                {account.user.userOrgUnitPositions.map((e) => (
                  <RadioElement
                    key={e.id}
                    value={e.id}
                    size="small"
                    label={
                      <Stack gap={0}>
                        <Typography>{e.orgUnit.name}</Typography>
                        <Typography variant="caption" sx={{ ...getLimitLineCss(1), color: 'text.disabled' }}>
                          {e.position.name}
                        </Typography>
                      </Stack>
                    }
                  />
                ))}
              </RadioGroupElement>
            </React.Fragment>
          )}
        </Box>

        <Divider />

        {/* Menu Items */}
        {menu.map((item, index) => (
          <MenuItem key={index} onClick={item.onClick}>
            <IconElement icon={item.icon} size="small" sx={{ mr: 1 }} />
            <Typography>{item.content}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
