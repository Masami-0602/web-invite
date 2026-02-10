import { Box, Typography, Stack, useTheme } from '@mui/material';
import { InvitaionBox } from './InvitaionBox';

export function PartyInvitaion() {
  const { palette } = useTheme();

  return (
    <Stack
      sx={{
        backgroundColor: palette.secondary.light,
        width: '100%',
        height: 'auto',
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
      <Typography noWrap variant="weddingTitle" sx={{ fontSize: '35px', overflow: 'visible' }}>
        Party Information
      </Typography>
      <Typography sx={{ fontSize: '14px' }}>パーティのご案内</Typography>
      <Box sx={{ textAlign: 'center' }}>
        <Typography>開催日</Typography>
        <Typography>2025年6月22日 日曜日</Typography>
      </Box>
      <Stack sx={{ gap: '14px' }}>
        <InvitaionBox boxTitle="挙式" titleTypographyProps={{ variant: 'L' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Typography variant="S" sx={{ display: 'flex' }}>
              開始時刻
            </Typography>
            <Typography variant="XL" sx={{ display: 'flex' }}>
              10:00
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Typography variant="S" sx={{ display: 'flex' }}>
              受付
            </Typography>
            <Typography sx={{ display: 'flex' }}>9:15</Typography>
          </Box>
        </InvitaionBox>
        <InvitaionBox boxTitle="披露宴" titleTypographyProps={{ variant: 'L' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Typography variant="S" sx={{ display: 'flex' }}>
              開始時刻
            </Typography>
            <Typography variant="XL" sx={{ display: 'flex' }}>
              11:00
            </Typography>
          </Box>
        </InvitaionBox>
        <InvitaionBox boxTitle="披露宴" titleTypographyProps={{ variant: 'L' }}>
          <Stack spacing="12px">
            <Typography variant="L" component="p">
              リストランテASO
            </Typography>
            <Typography variant="XS" component="p">
              東京都渋谷区猿楽町29-3 リストランテASO
            </Typography>
            <Typography>TEL : 03-3770-3748</Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d12968.63389738174!2d139.699289!3d35.648467!3m2!1i1024!2i768!4f13.1!2m1!1z5p2x5Lqs6YO95riL6LC35Yy654y_5qW955S6MjktMyDjg6rjgrnjg4jjg6njg7Pjg4ZBU08!5e0!3m2!1sja!2sus!4v1761971482659!5m2!1sja!2sus"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </InvitaionBox>
      </Stack>
    </Stack>
  );
}
