import { Divider, useTheme, type SxProps, type Theme, type TypographyProps } from '@mui/material';
import { Box, Typography } from '@mui/material';
import type React from 'react';

export type InvitationBoxProps = {
  boxTitle: string;
  disableBorder?: boolean;
  disableHyphen?: boolean;
  children: React.ReactNode;
  titleTypographyProps?: TypographyProps;
};

export function InvitaionBox({
  boxTitle,
  disableBorder = false,
  disableHyphen = false,
  children,
  titleTypographyProps,
}: InvitationBoxProps) {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        border: disableBorder ? undefined : `1px solid ${palette.text.primary}`,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ padding: '16px 20px 24px' }}>
        {disableHyphen ? (
          <Typography {...titleTypographyProps}>{boxTitle}</Typography>
        ) : (
          <Divider
            sx={{
              '&::before, &::after': {
                backgroundColor: palette.primary.main,
              },
            }}
          >
            <Typography {...titleTypographyProps}>{boxTitle}</Typography>
          </Divider>
        )}
        {children}
      </Box>
    </Box>
  );
}
