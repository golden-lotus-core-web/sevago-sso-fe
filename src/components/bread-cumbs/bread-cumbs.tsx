import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton } from '@mui/material';
import { TYPOGRAPHY_STYLES } from '../../common';
import { IconElement } from '../elements';

interface BreadcrumbsProps {
  content: string;
  showBackButton?: boolean;
  onBack?: () => void;
  sxLabel?: React.CSSProperties;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ content, showBackButton = true, onBack, sxLabel }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px 0px',
      }}
    >
      {showBackButton && (
        <IconButton onClick={handleBack} size="medium">
          <IconElement icon="arrow_back" size="medium" />
        </IconButton>
      )}

      <Typography sx={{ ...TYPOGRAPHY_STYLES.textMd.semiBold, ...sxLabel }}>{content}</Typography>
    </Box>
  );
};
