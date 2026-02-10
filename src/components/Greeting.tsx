import { Box, Stack, Typography } from '@mui/material';
import up_them from '../assets/up_them.jpeg';

export function Greeting() {
  return (
    <Stack sx={{ alignItems: 'center' }}>
      <Typography variant="weddingTitle">Message</Typography>
      <Typography sx={{ fontSize: '14px' }}>ご挨拶</Typography>
      <Typography
        sx={{
          fontSize: '14px',
          whiteSpace: 'pre-line',
          padding: '30px 40px 32px',
          textAlign: 'center',
        }}
      >
        {`春光を浴びて
            新緑ひときわ鮮やかな季節となりました

            皆様におかれましては
            ご清祥のこととお慶び申し上げます

            このたび　私たちは結婚式を
            挙げることに決めました

            つきましては
            日頃お世話になっている皆様にお集まりいただき
            ささやかなパーティを催します

            ご多用中誠に恐縮ではございますが
            ご来臨の栄を賜りたく
            謹んでご案内申し上げます`}
      </Typography>
      {/* 新郎新婦の写真 */}
      <Box sx={{ padding: '30px 20px' }}>
        <img
          src={up_them}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'none',
            objectPosition: '0% 27.934%',
            transform: 'rotate(0deg)',
            zoom: 0.33264,
            aspectRatio: '1.28846 / 1',
          }}
        />
      </Box>
    </Stack>
  );
}
