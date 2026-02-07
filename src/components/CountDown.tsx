import { Box, Divider, Stack, Typography } from '@mui/material';
import countDown_bg from '../assets/countDown_bg.png';
import { useCountDown } from '../hooks/useCountDown';

export function CountDown() {
  const { days, hours, minutes, seconds } = useCountDown({
    targetDate: '2025-12-30T10:00:00',
  });

  return (
    <Box
      sx={{
        backgroundImage: `url(${countDown_bg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '440px',
        width: '100%',
        margin: 'auto',
        alignContent: 'center',
      }}
    >
      <Stack sx={{ alignItems: 'center' }}>
        <Typography>Count Down</Typography>
        <Typography>{days}days</Typography>
        <Stack direction="row">
          <Box sx={{ whiteSpace: 'pre-line', textAlign: 'center' }}>
            <Typography>{`${hours}\nhours`}</Typography>
          </Box>
          <Box sx={{ whiteSpace: 'pre-line', textAlign: 'center' }}>
            <Typography>{`${minutes}\nminutes`}</Typography>
          </Box>
          <Box sx={{ whiteSpace: 'pre-line', textAlign: 'center' }}>
            <Typography>{`${seconds}\nseconds`}</Typography>
          </Box>
        </Stack>
        <Typography>to our Wedding</Typography>
        <Divider />
        <Typography>2025.6.22</Typography>
      </Stack>
    </Box>
  );
}
