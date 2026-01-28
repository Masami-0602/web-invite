import { useTheme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import type React from 'react';

export type InvitationBoxProps = {
  boxTitle: string;
  disableHyphen?: boolean;
  disableBorder?: boolean;
  children: React.ReactNode;
};

export function InvitaionBox({
  boxTitle,
  disableHyphen = false,
  disableBorder = false,
  children,
}: InvitationBoxProps) {
  const { palette } = useTheme();

  const hyphenProperties = {
    content: '""',
    height: '1px',
    flexGrow: 1,
    backgroundColor: 'black',
  };

  return (
    <Box
      sx={{
        border: disableBorder ? {} : `1px solid ${palette.text.primary}`,
        // mx: "20px",
        // maxWidth: "calc(100% - 16px)",
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ padding: '16px 20px 24px' }}>
        <Typography
          variant="invitationTitle"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ...(disableHyphen
              ? {}
              : {
                  '&::before, &::after': { ...hyphenProperties },
                  '&::before': { mr: '12px' },
                  '&::after': { ml: '12px' },
                }),
          }}
        >
          {boxTitle}
        </Typography>
        {children}
      </Box>
    </Box>
  );
}
