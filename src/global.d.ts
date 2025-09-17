import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    weddingTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    weddingTitle?: React.CSSProperties;
  }
}

  declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      weddingTitle: true;
    }
  }