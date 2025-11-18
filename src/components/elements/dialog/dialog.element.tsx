import {
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Stack,
  SxProps,
  Theme,
  useTheme,
} from '@mui/material';
import { Form } from 'formik';
import React, { ReactNode, useState } from 'react';
import { SnackbarType, colorMap, STYLE } from '../../../common';
import { StackRowAlignCenterJustBetween, StackRow } from '../../styles';
import { ButtonElement } from '../button';
import { ButtonElementProps } from '../button/button.element';
import { IconContentElement, IconElement } from '../icon';

export interface DialogElementProps extends DialogProps {
  iconLabel?: string;
  label: string;
  nodeLabel?: ReactNode;
  nodeHelp?: ReactNode;
  nodeBottomLeft?: ReactNode;
  buttonRight?: ButtonElementProps & { buttonType?: SnackbarType };
  buttonCenter?: ButtonElementProps & { buttonType?: SnackbarType };
  buttonLeft?: ButtonElementProps & { buttonType?: SnackbarType };
  // direction?: 'column' | 'row';
  nodeContent?: ReactNode;
  isForm?: boolean;
  widthButton?: number;
  sxDialogTitle?: SxProps<Theme>;
  sxContent?: SxProps<Theme>;
  closeButton?: boolean;
  fullWidth?: boolean;
  sxTitle?: SxProps<Theme>;
  sxBottom?: SxProps<Theme>;
}

const DialogWrapper: React.FC<{ isForm: boolean; children: ReactNode }> = ({ isForm = false, children }) => {
  return isForm ? <Form noValidate>{children}</Form> : <React.Fragment>{children}</React.Fragment>;
};

const getButtonColor = (
  button: (ButtonElementProps & { buttonType?: SnackbarType }) | undefined,
  position: 'left' | 'center' | 'right',
): ButtonElementProps | undefined => {
  if (!button) return button;

  let colors = colorMap[button.buttonType || ''];

  if (!colors) {
    if (position === 'left') {
      colors = colorMap.cancel;
    } else {
      colors = colorMap.success;
    }
  }

  const { ...buttonProps } = button;

  return {
    variant: 'contained',
    sx: {
      backgroundColor: colors.backgroundColor,
      color: colors.color,
      '&:hover': {
        backgroundColor: colors.backgroundColor,
        opacity: 0.9,
      },
      ...button.sx,
    },
    ...buttonProps,
  };
};

export const DialogElement: React.FC<DialogElementProps> = ({
  iconLabel = '',
  label,
  nodeLabel,
  nodeHelp,
  nodeBottomLeft,
  buttonRight,
  buttonCenter,
  buttonLeft,
  // direction = 'column',
  nodeContent,
  sx,
  isForm = false,
  widthButton,
  sxDialogTitle,
  sxContent,
  closeButton = true,
  onClose,
  fullWidth = false,
  sxTitle,
  sxBottom,
  ...rest
}) => {
  const { palette } = useTheme();

  // const mode = useSelector((state: GlobalReduxState) => state.system.mode);

  const [openHelp, setOpenHelp] = useState(false);

  // STYLE
  if (widthButton)
    [buttonLeft, buttonCenter, buttonRight].forEach((btn) => btn && (btn.sx = { width: widthButton, ...btn.sx }));

  // Apply automatic color styling to buttons
  const styledButtonLeft = getButtonColor(buttonLeft, 'left');
  const styledButtonCenter = getButtonColor(buttonCenter, 'center');
  const styledButtonRight = getButtonColor(buttonRight, 'right');

  return (
    <Dialog
      {...rest}
      onClose={onClose}
      disableScrollLock
      PaperProps={{
        sx: { borderRadius: STYLE.BORDER_RADIUS_ELEMENT_WRAPPER, ...sx },
      }}
      BackdropProps={{
        sx: {
          // backgroundColor: mode === Mode.DARK ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)',
        },
      }}
    >
      <DialogTitle
        component={'div'}
        sx={{
          display: 'flex',
          // padding: `calc(${STYLE.PADDING_GAP_LAYOUT} )`,
          paddingBottom: label || nodeLabel ? STYLE.PADDING_GAP_LAYOUT : 0,
          paddingRight: 1,
          gap: STYLE.PADDING_GAP_ITEM_SMALL,
          backgroundColor: palette.background.paper,
          alignItems: 'center',
          justifyContent: 'space-between',
          textTransform: 'capitalize',
          ...sxDialogTitle,
        }}
      >
        {label && (
          <StackRowAlignCenterJustBetween sx={{ width: '100%' }}>
            <IconContentElement
              icon={iconLabel}
              content={label.toLowerCase()}
              size="medium"
              sxText={{ fontSize: '16px', ...sxTitle }}
            />
            {closeButton && (
              <IconButton onClick={() => onClose?.({}, 'escapeKeyDown')}>
                <IconElement icon={'close'} sx={{ fontSize: 20 }} />
              </IconButton>
            )}
          </StackRowAlignCenterJustBetween>
        )}
        {nodeLabel}
      </DialogTitle>
      <DialogWrapper isForm={isForm}>
        <DialogContent
          sx={{
            padding: 0,
            paddingBottom: !buttonLeft && !buttonRight ? `calc(${STYLE.PADDING_GAP_LAYOUT} * 1.5)` : 0,
            px: `calc(${STYLE.PADDING_GAP_LAYOUT} * 1.5)`,
            backgroundColor: palette.background.paper,
            maxHeight: '65vh',
            ...sxContent,
          }}
        >
          {nodeContent}
        </DialogContent>

        {(buttonLeft || buttonRight) && (
          <DialogActions
            sx={{
              padding: `${STYLE.PADDING_GAP_LAYOUT} calc(${STYLE.PADDING_GAP_LAYOUT} * 1.5) `,
              backgroundColor: palette.background.paper,
              ...sxBottom,
              // '& > :not(style) ~ :not(style)': { marginLeft: STYLE.PADDING_GAP_LAYOUT },
            }}
          >
            <Stack sx={{ flex: 1 }}>
              <StackRowAlignCenterJustBetween gap={0}>
                <StackRow>
                  {nodeBottomLeft}
                  {nodeHelp && (
                    <ButtonElement
                      variant="outlined"
                      content="Giúp đỡ"
                      endIcon={openHelp ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
                      size="medium"
                      onClick={() => setOpenHelp(!openHelp)}
                      fullWidth={false}
                    />
                  )}
                </StackRow>

                <StackRow sx={{ flex: 1, justifyContent: 'flex-end' }}>
                  {styledButtonLeft && <ButtonElement {...styledButtonLeft} fullWidth={fullWidth} />}
                  {styledButtonCenter && <ButtonElement {...styledButtonCenter} fullWidth={fullWidth} />}
                  {styledButtonRight && (
                    <ButtonElement
                      {...styledButtonRight}
                      fullWidth={fullWidth}
                      loading={styledButtonRight.loading}
                      sx={{ bgcolor: styledButtonRight.color }}
                    />
                  )}
                </StackRow>
              </StackRowAlignCenterJustBetween>
            </Stack>
          </DialogActions>
        )}
      </DialogWrapper>

      <Collapse in={openHelp} timeout={500}>
        {
          <Stack
            sx={{
              maxHeight: 200,
              padding: `calc(${STYLE.PADDING_GAP_LAYOUT} * 1.5)`,
              paddingTop: 0,
              overflowY: 'auto',
              backgroundColor: palette.background.paper,
            }}
          >
            {nodeHelp}
          </Stack>
        }
      </Collapse>
    </Dialog>
  );
};
