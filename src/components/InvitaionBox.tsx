import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import type React from "react";

export type InvitationBoxProps = {
  boxTitle: string;
  disableHyphen?: boolean;
  children: React.ReactNode;
};

export function InvitaionBox({
  boxTitle,
  disableHyphen = false,
  children,
}: InvitationBoxProps) {
  const { palette } = useTheme();

  const hyphenProperties = {
    content: '""',
    height: "1px",
    flexGrow: 1,
    backgroundColor: "black",
  };

  return (
    <Box sx={{ border: `1px solid ${palette.text.primary}`, mx: "20px" }}>
      <Box sx={{ padding: "16px 20px 24px" }}>
        <Typography
          variant="invitationTitle"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...(disableHyphen
              ? {}
              : {
                  "&::before, &::after": { ...hyphenProperties },
                  "&::before": { mr: "12px" },
                  "&::after": { ml: "12px" },
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
