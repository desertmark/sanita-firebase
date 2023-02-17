import { createTheme } from '@mui/material';

export const spotifyTheme = createTheme({
  palette: {
    primary: {
      main: '#1db954',
    },
    secondary: {
      main: '#282828',
    },
    background: {
      default: '#121212',
      paper: '#282828',
    },
  },
  typography: {
    fontFamily: 'Circular, Helvetica, Arial, sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          fontWeight: 'bold',
        },
        containedPrimary: {
          color: '#ffffff',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#b3b3b3',
        },
        colorSecondary: {
          '&:hover': {
            backgroundColor: '#b3b3b3',
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#1db954',
        },
        thumb: {
          '&:focus, &:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});
