import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a1a1a',
    },
    secondary: {
      main: '#c8ff00',
    },
    background: {
      default: '#f4f1eb',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#5a5650',
    },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Syne', sans-serif", fontWeight: 800 },
    h2: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
    h3: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
    h5: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
    h6: { fontFamily: "'Syne', sans-serif", fontWeight: 600 },
    button: { fontFamily: "'Syne', sans-serif", fontWeight: 600, letterSpacing: '0.06em' },
  },
  shape: {
    borderRadius: 0,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c8ff00',
    },
    secondary: {
      main: '#c8ff00',
    },
    background: {
      default: '#0a0a0a',
      paper: '#161616',
    },
    text: {
      primary: '#e8e4dd',
      secondary: '#8a8780',
    },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Syne', sans-serif", fontWeight: 800 },
    h2: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
    h3: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
    h5: { fontFamily: "'Syne', sans-serif", fontWeight: 700 },
    h6: { fontFamily: "'Syne', sans-serif", fontWeight: 600 },
    button: { fontFamily: "'Syne', sans-serif", fontWeight: 600, letterSpacing: '0.06em' },
  },
  shape: {
    borderRadius: 0,
  },
});
