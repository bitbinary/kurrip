import { createTheme } from '@mui/material';
import { colors } from './colors';
// const colors = {
//   lightShade: '#80BFAA',
//   darkShade: '#287075',
//   highlight: '#F7D854',
//   shadow: '#1B4252',
//   success: '#00D909',
//   danger: '#FF3000',
//   primary: '#0085FF',
// };
const { lightShade, darkShade, highlight, shadow } = colors;

export const themes = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    shadow: {
      main: shadow,
    },
    highlight: {
      main: highlight,
    },
  },
  mixins: {
    MuiButton: {
      disableRipple: true,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'dark' },
          style: {
            backgroundColor: shadow,
            color: '#F7D854',
            textTransform: 'uppercase',
            ':hover': {
              backgroundColor: shadow,
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            backgroundColor: colors.secondary,
            color: colors.primary,
            boxShadow: '-4px 9px 8px -3px rgba(0, 0, 0, 0.11)',
            borderRadius: '12px',
            textTransform: 'uppercase',
            ':hover': {
              backgroundColor: 'transparent',
              color: colors.secondary,
              border: `1px solid ${colors.secondary}`,
            },
          },
        },
      ],
    },
  },
});
