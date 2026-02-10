import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: "'Noto Serif JP', serif",
    weddingTitle: {
      fontSize: '45px',
      fontWeight: 400,
      fontFamily: "'Hafidz', sans-serif",
    },
    weddingTitleMobile: {
      fontSize: '45px',
      fontWeight: 400,
      fontFamily: "'Hafidz', sans-serif",
    },
    operetta18: {
      fontFamily: "'Operetta 18', sans-serif",
    },
    invitationTitle: { fontSize: '16px', fontWeight: 600 },
    XXS: { fontSize: '12px', lineHeight: '12px', fontWeight: 500 },
    XS: { fontSize: '13px', lineHeight: '15px' },
    S: { fontSize: '14px', lineHeight: '24px' },
    M: { fontSize: '16px', lineHeight: '24px', fontWeight: 500 },
    L: { fontSize: '18px', lineHeight: '24px', fontWeight: 500 },
    XL: { fontSize: '28px', lineHeight: '41px', fontWeight: 600 },
    XXL: { fontSize: '36px', lineHeight: '36px', fontWeight: 400 },
  },
  palette: {
    primary: {
      main: '#132B36',
      light: '#FFF',
      dark: '#D2A14A',
    },
    secondary: {
      main: '#DF8138',
      light: '#E6D4C0',
      dark: '#D2A14A',
    },
    text: {
      primary: '#132B36',
    },
  },
});
