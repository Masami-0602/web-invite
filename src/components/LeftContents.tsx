import { Box, Button, Typography } from "@mui/material";
import { CountDownToDate } from "./timer";

/* 左側のコンテンツ */
export function LeftContents() {
  return (
    <Box sx={{ paddingRight: "118px" }}>
      {/* 左側の名前と式の日付部 */}
      <Box sx={{ border: "1px solid #000000", padding: "45px 20px" }}>
        <Box sx={{ borderBottom: "1px solid #000000" }}>
          <Typography
            sx={{ fontSize: "26px", margin: "0 0 12px 0", color: "black" }}
          >
            Daich & Miho
          </Typography>
          <Typography
            sx={{
              fontSize: "42px",
              display: "block",
              margin: "0 0 12px 0",
              color: "black",
            }}
          >
            2025.6.22
          </Typography>
          <Typography
            style={{
              fontSize: "18px",
              display: "block",
              margin: "0 0 24px 0",
              color: "black",
            }}
          >
            Sunday 10:00AM
          </Typography>
        </Box>
        {/* 式までの日付カウント部 */}
        <Box>
          <CountDownToDate
            targetDate="2025-12-30T10:00:00"
            units={["days", "hours", "minutes", "seconds"]}
          />
        </Box>
      </Box>

      {/* 左下のご案内部 */}
      <Box
        sx={{
          border: "1px solid #000000",
          padding: "45px 20px",
          marginTop: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            color: "black",
            fontFamily: "'Noto Serif JP', serif",
          }}
        >
          お手数ではございますが
          <br />
          <Typography
            component="span"
            sx={{
              fontSize: "20px",
              textDecoration: "underline",
              fontFamily: "'Noto Serif JP', serif",
            }}
          >
            2025年5月31日（土）
          </Typography>
          <Typography
            component="span"
            sx={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            までに
          </Typography>
          <br />
          ご一報くださいますようお願いします
        </Typography>
        <Button
          sx={{
            textDecoration: "underline",
            margin: "24px auto 0px",
            backgroundColor: "#132B36",
            width: "50%",
            color: "white",
          }}
        >
          招待状に回答
        </Button>
      </Box>
    </Box>
  );
}
