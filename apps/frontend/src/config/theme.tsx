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
    text: {
      primary: '#AAA',
      secondary: '#FFF',
      disabled: '#666',
    },
    mode: 'light',
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
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: '#AAA',
          borderColor: '#1db954',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderColor: '#AAA',
          },
        },
      },
    },
  },
});

export const facebookTheme = createTheme({
  palette: {
    primary: {
      main: '#1877f2',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica Neue', 'sans-serif'].join(','),
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
      fontSize: '1rem',
    },
  },
});

export const instagramTheme = createTheme({
  palette: {
    primary: {
      main: '#833ab4',
    },
    secondary: {
      main: '#c13584',
    },
    background: {
      default: '#fafafa',
    },
  },
  typography: {
    fontFamily: ['Helvetica Neue', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: 30,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});
