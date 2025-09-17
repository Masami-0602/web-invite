import "./App.css";
import { CountDownToDate } from './components/timer'
import mv_bg from "../src/assets/mv_bg.jpg"
import mv_text from "../src/assets/mv_text.svg"
import countDown_bg from "../src/assets/countDown_bg.png";
import { useState, type CSSProperties } from 'react'
import { Box, MenuItem, Typography } from "@mui/material";
import { LeftContents } from "./components/LeftContents";
import { RightContents } from "./components/RightContents";

function App() {
  const primary_color = "#132B36";
  const secondary_color = "#DF8138";
  const bg_primary_color = "#fff";
  const bg_secondary_color = "#E6D4C0";
  const text_color = "#132B36";
  const text_link_color = "#132B36";
  const text_caution_color = "#132B36";

  const [ isMenuOpen, setisMenuOpen ] = useState(false)
  
    const toggleMenu = () => {setisMenuOpen(!isMenuOpen)}
  
    const hanburgerButton: CSSProperties = {
      position: "absolute",
      top: "20px",
      right: "20px",
      width: "30px",
      height: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      cursor: "pointer",
      background: "transparent",
      border: "none",
      padding: 0,
      backgroundColor: "black"
    };



  return (
    <>
      {/* 全体のdiv */}
      <Box
        sx={{
          display: 'flex', 
          width: "100%", 
          maxWidth: "848px",
          height: "100vh",
          maxHeight: "680px",
          margin: "0 auto",
          position: "relative",
          alignItems: "center",
          justifyContent: "center"
      }}>

        {/* 左側のdiv */}
        <LeftContents />

        {/* 右側のdiv（メインコンテンツ部） */}
        <RightContents />
      </Box>
    </>
  )
}

export default App
