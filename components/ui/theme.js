import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(231, 69%, 60%)',
    },
    secondary: {
      main: 'hsl(0, 94%, 66%)',
    },
    common: {
      soft_blue: 'hsl(231, 69%, 60%)',
      soft_red: 'hsl(0, 94%, 66%)',
      grayish_blue: 'hsl(229, 8%, 60%)',
      very_dark_blue: 'hsl(229, 31%, 21%)',
    },
  },
  typography: {
    fontFamily: '"Kumbh Sans", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '0.9rem',
      fontWeight: 700,
    },
    body: {
      fontSize: '1.125rem',
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      xs: 450,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
      xxxl: 2080,
    },
  },
});

export default theme;
