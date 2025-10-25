import { Stack,  Typography, useTheme, type SxProps } from '@mui/material';
import React from 'react'; 
import { AvatarElement } from './avatar.element';
import type { SizeProps } from './avatar-enum.enum';
import { useIsSystemMonitor } from '../../hooks/use-apps.hook';
import { STYLE } from '../../common/constant';
import { StackRow } from '../styles/stack.style';
import { getLimitLineCss } from '../../common/utils/other/get-limit-line-css.utils';
import { TYPOGRAPHY_STYLES } from '../../common/constant/typography.constant';

interface AvatarUserInfoProps {
  name: string;
  url?: string;
  positions?: string[];
  maxWidth?: string | number;
  isTag?: boolean;
  sxName?: SxProps;
  sxPosition?: SxProps;
  sizeAvatar?: SizeProps;
}

export const AvatarUserInfo: React.FC<AvatarUserInfoProps> = ({
  name,
  url,
  positions = [],
  maxWidth = '440px',
  isTag = false,
  sxName,
  sxPosition,
  sizeAvatar = 'large',
}) => {
  const { palette } = useTheme();
  const isSystemMonitor = useIsSystemMonitor();

  return (
    <StackRow sx={{ alignItems: 'center', gap: STYLE.PADDING_GAP_ITEM }}>
      <AvatarElement url={url} size={sizeAvatar} />
      {positions.length > 0 ? (
        <Stack sx={{ gap: 0 }}>
          <Typography
            sx={{
              color: isSystemMonitor ? palette.primary.contrastText : palette.text.secondary,
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '20px',
              ...getLimitLineCss(1),
              ...sxName,
            }}
          >
            {name}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              ...getLimitLineCss(1),
              color: palette.text.disabled,
              maxWidth,
              ...(isTag && {
                display: 'flex',
                padding: '2px 4px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '4px',
                background: ' #EFF8FF',
                color: ' #035388',
                width: 'fit-content',
                ...sxPosition,
              }),
            }}
          >
            {positions.join(' / ')}
          </Typography>
        </Stack>
      ) : (
        <Typography sx={{ ...TYPOGRAPHY_STYLES.textSm.semiBold, ...getLimitLineCss(1), ...sxName }}>{name}</Typography>
      )}
    </StackRow>
  );
};
