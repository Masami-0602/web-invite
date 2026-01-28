import { Box, Typography } from '@mui/material';
import profile_1 from '../assets/profile_1.png';
import profile_2 from '../assets/profile_2.png';
import groom from '../assets/groom.jpeg';
import bride from '../assets/bride.jpeg';

export function Profile() {
  return (
    <>
      <Box>
        <Typography variant="weddingTitle">Profile</Typography>
        <Typography sx={{ fontSize: '14px' }}>プロフィール</Typography>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${profile_1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: '50%',
          backgroundPositionY: '50%',
          width: '316px',
          height: '291px',
        }}
      >
        <img
          src={groom}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            objectFit: 'none',
            objectPosition: '72.4849%',
            transform: 'rotate(0deg)',
            zoom: '0.2842769',
            aspectRatio: '0.957983 / 1',
            overflow: 'hidden',
          }}
        />
      </Box>
      <Box sx={{ mb: '30px' }}>
        <Typography>新郎</Typography>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 600,
            pb: '10px',
          }}
        >
          鬼澤 大地
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            whiteSpace: 'pre-line',
          }}
        >
          {`これからも2人で
            力を合わせて歩んでいきます
            今後ともよろしくお願いいたします
            当日は一緒に楽しみましょう🥂`}
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundImage: `url(${profile_2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '316px',
          height: '291px',
        }}
      >
        <img
          src={bride}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            objectFit: 'none',
            objectPosition: '72.4849%',
            transform: 'matrix(1, 0, 0, 1, 0, 0)',
            zoom: '0.2842769',
            aspectRatio: '0.957983 / 1',
            overflow: 'hidden',
          }}
        />
      </Box>
      <Box sx={{ mb: '30px' }}>
        <Typography>新婦</Typography>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 600,
            pb: '10px',
          }}
        >
          鬼澤 美帆
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            whiteSpace: 'pre-line',
            lineHeight: '180%',
          }}
        >
          {`大切な皆様と
            楽しい時間を過ごせたら嬉しいです
            美味しい料理と飲み物をご用意して
            お待ちしています！`}
        </Typography>
      </Box>
    </>
  );
}
