import { Box, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import IconLeft from '../../assets/icon/icon-left';
import IconRight from '../../assets/icon/icon-right';
import { AppInfo } from '../../common/constant/apps.data';
import {
  BORDER_RADIUS_ELEMENT_WRAPPER,
  PADDING_GAP_BUTTON,
  PADDING_GAP_ITEM,
  PADDING_GAP_ITEM_SMALL,
} from '../../common/constant/style.constant';
import { ImageElement } from '../elements/image/image.element';
import { ImageSizeType } from '../elements/image/image.enum';
import { MotionBox } from '../motion/motion-box.component';
import { StackRowAlignJustCenter } from '../styles';

export interface AppGridProps {
  apps: AppInfo[];
  columns?: number;
  rows?: number;
  iconSize?: number;
  iconRadius?: number;
  gap?: number | string;
  titleVariant?: 'subtitle1' | 'body1' | 'caption';
  captionVariant?: 'caption' | 'body2';
  titleColor?: string;
  captionColor?: string;
  showPagination?: boolean;
  onClickApp: (appInfo: AppInfo) => void;
}

export const AppGrid: React.FC<AppGridProps> = ({
  apps,
  columns = 5,
  rows = 3,
  iconSize = 80,
  iconRadius = 7,
  gap = PADDING_GAP_ITEM,
  titleVariant = 'subtitle1',
  titleColor,
  showPagination = true,
  onClickApp,
}) => {
  const theme = useTheme();

  const pageSize = Math.max(1, columns * Math.max(1, rows));
  const totalPages = Math.max(1, Math.ceil(apps.length / pageSize));
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    setPage((prev) => (prev >= totalPages ? totalPages - 1 : prev));
  }, [totalPages, columns, rows, apps.length]);

  const start = page * pageSize;
  const end = start + pageSize;
  const visibleApps = totalPages > 1 ? apps.slice(start, end) : apps;

  const placeholdersCount = Math.max(0, pageSize - visibleApps.length);
  const placeholderHeight = iconSize + 48;

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap,
        }}
      >
        {visibleApps.map((app, index) => {
          return (
            <MotionBox
              key={index}
              preset="staggerItem"
              index={index}
              hover
              sx={{
                cursor: 'pointer',
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                flexDirection: 'column',
              }}
              onClick={() => onClickApp(app)}
            >
              <StackRowAlignJustCenter
                sx={{
                  width: iconSize,
                  height: iconSize,
                  borderRadius: iconRadius,
                  mb: 1.5,
                  background: app.color,
                }}
              >
                <ImageElement
                  sx={{ width: iconSize * 0.56, height: iconSize * 0.56 }}
                  url={app.icon}
                  sizeType={ImageSizeType.SQUARE}
                />
              </StackRowAlignJustCenter>

              <Typography variant={titleVariant} sx={{ color: titleColor ?? theme.palette.common.white }}>
                {app.content}
              </Typography>
            </MotionBox>
          );
        })}
        {placeholdersCount > 0 &&
          Array.from({ length: placeholdersCount }).map((_, fillerIndex) => (
            <Box
              key={`placeholder-${fillerIndex}`}
              sx={{
                visibility: 'hidden',
                width: 1,
                minHeight: placeholderHeight,
              }}
            />
          ))}
      </Box>

      {showPagination && totalPages > 1 && (
        <>
          {page === totalPages - 1 && (
            <IconButton
              size="small"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              sx={{
                position: 'absolute',
                top: '50%',
                left: -30,
                transform: 'translateY(-120%)',
                color: theme.palette.divider,
              }}
            >
              <IconLeft />
            </IconButton>
          )}

          {/* Right arrow */}
          {page !== totalPages - 1 && (
            <IconButton
              size="small"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              sx={{
                position: 'absolute',
                top: '50%',
                right: -30,
                transform: 'translateY(-120%)',
                color: theme.palette.divider,
              }}
            >
              <IconRight />
            </IconButton>
          )}

          {/* Dots bar */}
          <Box
            sx={{
              mt: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: PADDING_GAP_BUTTON,
                px: PADDING_GAP_BUTTON,
                py: PADDING_GAP_ITEM_SMALL,
                borderRadius: BORDER_RADIUS_ELEMENT_WRAPPER,
                backgroundColor: 'rgba(255,255,255,0.15)',
              }}
            >
              {Array.from({ length: totalPages }).map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setPage(i)}
                  sx={{
                    height: 10,
                    borderRadius: BORDER_RADIUS_ELEMENT_WRAPPER,
                    cursor: 'pointer',
                    transition: 'width 0.3s ease',
                    width: i === page ? '40px' : '10px',
                    backgroundColor: i === page ? theme.palette.common.white : 'rgba(255,255,255,0.35)',
                  }}
                />
              ))}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};
