import { Box, Stack, Typography } from "@mui/material";
import countDown_bg from "../assets/countDown_bg.png";
import { useCountDown } from "../hooks/useCountDown";

export function CountDown() {
  const { days, hours, minutes, seconds } = useCountDown({
    targetDate: "2025-12-30T10:00:00",
  });

  return (
    <Box
      style={{
        backgroundImage: `url(${countDown_bg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "440px",
        width: "100%",
        margin: "auto",
      }}
    >
      <Box style={{ padding: "45px 20px" }}>
        <Box
          style={{
            borderBottom: "1px solid",
          }}
        >
          <Typography
            style={{
              fontSize: "26px",
              margin: "0 0 12px 0",
            }}
          >
            Count Down
          </Typography>
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontSize: "36px" }}>{days}</Typography>
            <Typography variant="XXS">DAYS</Typography>
          </Box>
          <Stack direction="row" sx={{ display: "flex", gap: "8px" }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "36px" }}>{hours}</Typography>
              <Typography variant="XXS">HOURS</Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "36px" }}>{minutes}</Typography>
              <Typography variant="XXS">MINUTES</Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: "36px" }}>{seconds}</Typography>
              <Typography variant="XXS">SECONDS</Typography>
            </Box>
          </Stack>
          <Typography
            sx={{
              fontSize: "18px",
              display: "block",
              margin: "0 0 24px 0",
            }}
          >
            to out Wedding
          </Typography>
        </Box>
        {/* 式までの日付カウント部 */}
        <Box
          style={{
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "42px",
              display: "block",
              margin: "0 0 12px 0",
            }}
          >
            2025.6.22
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
