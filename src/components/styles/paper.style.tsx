import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { STYLE, TREE_COLOR } from '../../common';
import { lightenColor } from '../elements/tag/tag.element';

interface PaperSelectProps {
  disableSelectedStyle?: boolean;
  autoWidth?: boolean;
  isTreeSelect?: boolean;
}

export const PaperSelect = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'disableSelectedStyle' && prop !== 'autoWidth' && prop !== 'isTreeSelect',
})<PaperSelectProps>(({ theme, disableSelectedStyle, autoWidth, isTreeSelect }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: STYLE.BORDER_RADIUS_ELEMENT_WRAPPER,
  padding: STYLE.PADDING_GAP_ITEM,
  backgroundImage: 'none',
  boxShadow: theme.shadows[1],
  ...(autoWidth && {
    width: 'max-content',
  }),
  '& > .MuiAutocomplete-listbox': {
    padding: 0,
    '& > .MuiAutocomplete-option': {
      ...(isTreeSelect
        ? {
            padding: 0,
            borderRadius: 0,
            transition: STYLE.TRANSITION_TIME,
            backgroundColor: 'transparent !important',

            '& .option-content': {
              display: 'flex',
              alignItems: 'center',
              padding: STYLE.PADDING_GAP_ITEM,
              borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
              transition: STYLE.TRANSITION_TIME,
              backgroundColor: 'transparent',
              flex: 1,
              width: '100%',

              '&:hover': {
                backgroundColor: lightenColor(theme.palette.primary.dark, 0.8),
              },

              ...(disableSelectedStyle
                ? {}
                : {
                    '&.selected': {
                      backgroundColor: lightenColor(theme.palette.primary.dark, 0.8),
                      color: theme.palette.primary.contrastText,
                    },
                  }),
            },

            '&:hover': {
              backgroundColor: 'transparent !important',
            },

            "&[aria-selected='true']": {
              backgroundColor: 'transparent !important',
              color: TREE_COLOR.TREE_LEVEL_1,
            },
          }
        : {
            padding: STYLE.PADDING_GAP_ITEM,
            borderRadius: STYLE.BORDER_RADIUS_ELEMENT_SMALL,
            transition: STYLE.TRANSITION_TIME,
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
            ...(disableSelectedStyle
              ? {}
              : {
                  "&[aria-selected='true']": {
                    backgroundColor: lightenColor(theme.palette.primary.main, 0.9),
                    color: theme.palette.primary.main,
                  },
                }),
          }),
    },
  },
}));
