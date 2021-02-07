import { createMuiTheme, rgbToHex } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const font = "'roboto', sans-serif;"

// Create a theme instance.
export const themeDefault = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#EDF2F7', // Background
    },
    primary: {
      main: '#FAFAFA', // Appbar
      dark: '#4A5568', // Button
    },
    secondary: {
      main: '#2D3748', // Drawer Paper
      light: '#E2E8F0', // Text
      dark: '#A0AEC0', // Divider
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: font,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    }
  },
})


// Create a theme instance.
export const themeDark = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#282828',
    },
    primary: {
      main: '#101010', // Appbar
      light: '#136600', // Green Text (Button hover)
      dark: '#1A202C', // Button Text
    },
    secondary: {
      main: '#202020', // Drawer Paper
      light: '#22BB00', // Green Text
      dark: '#A0AEC0', // Divider
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: 'rgb(203,203,203)',
    },
  },
  typography: {
    fontFamily: font,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    }
  },
})