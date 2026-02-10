import { Box, Typography } from '@mui/material';
import mv_bg from '../assets/mv_bg.jpg';

export function MainCover() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${mv_bg})`, // 背景画像
        backgroundSize: 'cover', // 背景画像のサイズ：「auto」「contain」「cover」「数値（px）」「数値（%）」
        backgroundPosition: 'center', // 背景画像の配置市：「キーワードで指定（centerとか」「数値（px）」「数値（%）」
        backgroundRepeat: 'no-repeat', // 背景画像の繰り返し指定：「repeat」「repeat-x」「repaeat-y」「no-repeat」
        height: '100vh',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        color: '#333',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <Typography noWrap variant="weddingTitle" sx={{ fontSize: '35px' }}>
          Wedding Invitation
        </Typography>
        <Typography variant="operetta18" sx={{ whiteSpace: 'pre-line' }}>
          {`Daich&Miho\n2025.6.22`}
        </Typography>
      </Box>
    </Box>
  );
}
