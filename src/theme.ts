import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "'Noto Serif JP', serif",
    weddingTitle: {
      fontSize: "45px",
      fontWeight: 400,
      fontFamily: "Hafidz, sans-serif",
    },
    invitationTitle: { fontSize: "16px", fontWeight: 600 },
    XS: { fontSize: "13px", lineHeight: "15px" },
    S: { fontSize: "14px", lineHeight: "24px" },
    M: { fontSize: "16px", lineHeight: "24px", fontWeight: 500 },
    L: { fontSize: "18px", lineHeight: "24px", fontWeight: 500 },
    XL: { fontSize: "28px", lineHeight: "41px", fontWeight: 600 },
  },
  palette: {
    primary: {
      main: "#132B36",
      light: "#FFF",
      dark: "#d2a14a",
    },
    secondary: {
      main: "#DF8138",
      dark: "#E6D4C0",
    },
    text: {
      primary: "#132B36",
    },
  },
});
