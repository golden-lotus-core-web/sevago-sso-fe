import { Fade, Stack, SxProps, Theme } from '@mui/material';
import React, { ReactNode } from 'react';
import { STYLE } from '../../../common/constant';
import { LoadingComponent } from '../../loading/loading.component';
import { StackRowAlignJustCenter, StackRowJustBetween } from '../../styles/stack.style';
import { IconContentElement } from '../icon/icon-content.element';

export interface WrapperElementProps {
  iconLabel?: string;
  labelId?: string;
  label?: string;
  nodeAction?: ReactNode;
  nodeLabel?: ReactNode;
  labelSize?: 'large' | 'small' | 'medium';
  flex?: number;
  height?: string | number | 'fit-content';
  width?: string | number | 'fit-content';
  direction?: 'column' | 'row';
  directionNodeLabel?: 'column' | 'row';
  loading?: boolean;
  sx?: SxProps<Theme>;
  children?: ReactNode;
  sxChildren?: SxProps<Theme>;
  sxLabel?: SxProps<Theme>;
  divider?: ReactNode;
  isTopLabel?: boolean;
}

export const WrapperElement: React.FC<WrapperElementProps> = ({
  iconLabel,
  label,
  nodeAction,
  nodeLabel,
  labelSize = 'large',
  flex = 1,
  height = 'fit-content',
  width,
  direction = 'column',
  directionNodeLabel = 'column',
  sx = {},
  loading = false,
  children,
  sxChildren = {},
  sxLabel = {},
  divider,
  labelId,
  isTopLabel = false,
}) => {
  return (
    <Fade in={true} timeout={STYLE.ANIMATION_TIME}>
      <Stack
        sx={{
          ...(width ? { width } : { flex }),
          paddingTop: STYLE.PADDING_GAP_LAYOUT,
          paddingX: STYLE.PADDING_GAP_TAB,
          overflowY: 'auto',
          overflowX: 'hidden',
          height,
          gap: 'unset',
          ...sx,
        }}
      >
        {/* label */}
        {label && (
          <StackRowJustBetween
            sx={{
              paddingBottom: 2,
              position: 'sticky',
              alignItems: 'stretch',
              overflow: 'auto',
              flexDirection: 'row',
              ...sxLabel,
            }}
          >
            {label && (
              <IconContentElement
                id={labelId}
                icon={iconLabel}
                content={label}
                size={labelSize}
                sxText={{ fontSize: '20px' }}
              />
            )}
            {nodeAction && (
              <Stack
                sx={{
                  flexDirection: directionNodeLabel,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {nodeAction}
              </Stack>
            )}
          </StackRowJustBetween>
        )}

        {nodeLabel}

        <Stack
          sx={{
            flex: 1,
            flexDirection: direction,
            // padding: STYLE.PADDING_GAP_LAYOUT,
            // paddingTop: label || nodeLabel ? 0 : STYLE.PADDING_GAP_LAYOUT,
            marginTop: isTopLabel ? STYLE.PADDING_GAP_LAYOUT : 0,
            background: 'white',
            ...sxChildren,
          }}
          divider={divider}
        >
          {loading ? (
            <StackRowAlignJustCenter height={100} width={'100%'}>
              <LoadingComponent />
            </StackRowAlignJustCenter>
          ) : (
            children
          )}
        </Stack>
      </Stack>
    </Fade>
  );
};
