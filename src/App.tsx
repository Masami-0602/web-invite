import "./App.css";
import { Box } from "@mui/material";
import { LeftContents } from "./components/LeftContents";
import { RightContents } from "./components/RightContents";

function App() {
  return (
    <>
      {/* 全体のdiv */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: "848px",
          height: "100%",
          // maxHeight: "680px",
          margin: "0 auto",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 左側のdiv */}
        <LeftContents />

        {/* 右側のdiv（メインコンテンツ部） */}
        <RightContents />
      </Box>
    </>
  );
}

export default App;
