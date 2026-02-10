import '@mui/material/styles';
import type React from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    weddingTitle: React.CSSProperties;
    weddingTitleMobile: React.CSSProperties;
    operetta18: React.CSSProperties;
    invitationTitle: React.CSSProperties;
    XXS: React.CSSProperties;
    XS: React.CSSProperties;
    S: React.CSSProperties;
    M: React.CSSProperties;
    L: React.CSSProperties;
    XL: React.CSSProperties;
    XXL: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    weddingTitle?: React.CSSProperties;
    weddingTitleMobile: React.CSSProperties;
    operetta18: React.CSSProperties;
    invitationTitle: React.CSSProperties;
    XXS: React.CSSProperties;
    XS: React.CSSProperties;
    S: React.CSSProperties;
    M: React.CSSProperties;
    L: React.CSSProperties;
    XL: React.CSSProperties;
    XXL: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    weddingTitle: true;
    weddingTitleMobile: true;
    operetta18: true;
    invitationTitle: true;
    XXS: true;
    XS: true;
    S: true;
    M: true;
    L: true;
    XL: true;
    XXL: true;
  }
}
