import { Badge, List, ListItem, Stack, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { Notification } from '../../apis/notification/notification.entities';
import { NotificationStatus, UpdateNotificationAction } from '../../apis/notification/notification.enum';
import { UserMovementSearchType } from '../../apis/user/user.enum';
import { STYLE } from '../../common/constant';
import { getLimitLineCss } from '../../common/utils/other/get-limit-line-css.utils';
import { getErrorMessage } from '../../common/utils/string.utils';
import { SnackbarType, useSnackbar } from '../../hooks/use-snackbar.hook';
import { ACTION_ACCOUNT } from '../../redux';
import type { GlobalReduxState } from '../../redux/store.interface';
import { useAppDispatch } from '../../redux/store.redux';
import { DASHBOARD_SCREEN, PAGE } from '../../router/route.constant';
import { IconElement } from '../elements/icon/icon.element';
import { ImageContentTimeComponent } from '../elements/image/image-name-time.component';
import { TooltipOnClickElement } from '../elements/tooltip/tooltip-on-click.element';
import { EmptyComponent } from '../empty/empty.component';
import { LoadingComponent } from '../loading/loading.component';
import { StackRow, StackRowAlignCenter } from '../styles/stack.style';
import { notificationApi } from '../../apis';
import { useIsSystemMonitor } from '../../hooks/use-apps.hook';

export interface BellComponentProps { }

export const BellComponent: React.FC<BellComponentProps> = ({ }) => {
  const isSystemMonitor = useIsSystemMonitor();
  const { notificationCount } = useSelector((state: GlobalReduxState) => state.account);
  const account = useSelector((state: GlobalReduxState) => state.account);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { palette } = useTheme();
  const { showSnackbar } = useSnackbar();

  const [open, setOpen] = useState(false);

  const [list, setList] = useState<Notification[]>([]);

  const [loading, setLoading] = useState(false);

  const handleGetListNotification = async () => {
    setLoading(true);
    try {
      const res = await notificationApi.getListNotification({
        status: NotificationStatus.NOT_VIEWED,
        page: 0,
        take: 0,
      });

      setList(res.list);
      dispatch(ACTION_ACCOUNT.changeNotificationCount(res.total));
    } catch (error) {
      showSnackbar({ message: getErrorMessage(error), type: SnackbarType.ERROR });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => await handleGetListNotification())();
  }, []);

  const clickNotification = async (notification: Notification) => {
    setOpen(false);
    const isMyProposal = notification?.createdById === account.user!.id;
    try {
      await notificationApi.updateNotification({
        updateNotificationAction: UpdateNotificationAction.VIEW_ONE,
        id: notification.id,
      });

      dispatch(ACTION_ACCOUNT.changeNotificationCount(notificationCount - 1));

      navigate(notification.path || PAGE.DASHBOARD.path, {
        state: {
          searchType: isMyProposal ? UserMovementSearchType.MY_PROPOSAL : UserMovementSearchType.NEED_APPROVE,
        },
      });
    } catch (error) {
      showSnackbar({ message: getErrorMessage(error), type: SnackbarType.ERROR });
    }
  };

  return (
    <TooltipOnClickElement
      open={open}
      onClickAway={() => setOpen(false)}
      placement="bottom-end"
      content={
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: 0,
            maxHeight: 500,
            overflowY: 'auto',
            flex: 1,
            width: '300px',
          }}
        >
          <ListItem
            sx={{
              padding: STYLE.PADDING_GAP_ITEM,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'sticky',
              top: 0,
              backgroundColor: palette.background.paper,
              zIndex: 1,
            }}
          >
            <Typography variant="subtitle1">Thông báo</Typography>

            <StackRow>
              <IconElement
                sx={{ cursor: 'pointer' }}
                icon="mark_email_read"
                onClick={async (e) => {
                  e.stopPropagation();
                  try {
                    await notificationApi.updateNotification({
                      updateNotificationAction: UpdateNotificationAction.VIEW_ALL,
                    });
                    dispatch(ACTION_ACCOUNT.changeNotificationCount(0));
                  } catch (error) {
                    showSnackbar({ message: getErrorMessage(error), type: SnackbarType.ERROR });
                  }
                }}
              />

              <IconElement
                icon="settings"
                onClick={(e) => {
                  e.stopPropagation();
                  // setOpen(false);
                  // navigate(PAGE.DASHBOARD.path + DASHBOARD_SCREEN.NOTIFICATION.path);
                }}
              />
            </StackRow>
          </ListItem>

          {loading ? (
            <StackRowAlignCenter sx={{ height: 50 }}>
              <LoadingComponent />
            </StackRowAlignCenter>
          ) : list.length === 0 ? (
            <EmptyComponent />
          ) : (
            list.map((notification) => (
              <ListItem
                onClick={() => clickNotification(notification)}
                key={notification.id}
                id={notification.id}
                sx={{
                  borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
                  padding: STYLE.PADDING_GAP_ITEM,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: STYLE.TRANSITION_TIME,
                  '&:hover': {
                    backgroundColor: palette.action.hover,
                    color: palette.primary.main,
                  },
                }}
              >
                <Stack gap={1}>
                  <ImageContentTimeComponent
                    url={notification.createdBy?.url || ''}
                    content={notification.title}
                    time={notification.createdAt}
                  />

                  <Typography variant="caption" sx={{ ...getLimitLineCss(2) }}>
                    {notification.content}
                  </Typography>
                </Stack>
              </ListItem>
            ))
          )}
        </List>
      }
    >
      <Badge
        onClick={async () => {
          setOpen(!open);
          await handleGetListNotification();
        }}
        badgeContent={notificationCount}
        color="error"
        sx={{ cursor: 'pointer' }}
      >
        <IconElement
          icon="notifications"
          onClick={() => setOpen(!open)}
          size="large"
          sx={{
            color: isSystemMonitor ? palette.background.default : palette.primary.main,
            '&:hover': { color: isSystemMonitor ? palette.background.default : palette.primary.main },
          }}
        />
      </Badge>
    </TooltipOnClickElement>
  );
};
