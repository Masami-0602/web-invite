import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    weddingTitle: React.CSSProperties;
    invitationTitle: React.CSSProperties;
    XS: React.CSSProperties;
    S: React.CSSProperties;
    M: React.CSSProperties;
    L: React.CSSProperties;
    XL: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    weddingTitle?: React.CSSProperties;
    invitationTitle: React.CSSProperties;
    XS: React.CSSProperties;
    S: React.CSSProperties;
    M: React.CSSProperties;
    L: React.CSSProperties;
    XL: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    weddingTitle: true;
    invitationTitle: true;
    XS: true;
    S: true;
    M: true;
    L: true;
    XL: true;
  }
}
