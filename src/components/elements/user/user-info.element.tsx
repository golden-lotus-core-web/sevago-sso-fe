import React from 'react';
import { Stack, Typography, SxProps, Theme } from '@mui/material';
import { IconElement } from '../icon/icon.element';

export interface UserInfoProps {
  name: string;
  department?: string;
  icon?: string;
  sx?: SxProps<Theme>;
}

export const UserInfo: React.FC<UserInfoProps> = ({ name, department, icon = 'person', sx }) => {
  return (
    <Stack sx={sx}>
      <Stack direction="row" alignItems="center" gap={1}>
        <IconElement icon={icon} sx={{ fontSize: '16px', color: '#6B7280' }} />
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {name}
        </Typography>
      </Stack>
      {department && (
        <Typography variant="caption" sx={{ color: '#6B7280', ml: 2.5 }}>
          ({department})
        </Typography>
      )}
    </Stack>
  );
};
