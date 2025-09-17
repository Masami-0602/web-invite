import { Box, Button, IconButton, List, ListItem, Typography, type CSSProperties } from "@mui/material";
import { useState } from "react";
import { CountDownToDate } from "./timer";
import mv_bg  from "../assets/mv_bg.jpg";
import countDown_bg from "../assets/countDown_bg.png";


{/* 右側のdiv（メインコンテンツ部） */}
export function RightContents() {

  const [ isMenuOpen, setisMenuOpen ] = useState(false)

  const toggleMenu = () => setisMenuOpen(!isMenuOpen)

  const hanburgerButton: CSSProperties = {
    width: "30px",
    height: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const menuArray = [ "カウントダウン", "ご挨拶", "新郎新婦", "アルバム", "パーティのご案内", "その他のご案内", "御出欠について" ]

  return (
    <Box sx={{
          maxWidth: "375px",
          width: "100%",
          height: "680px",
          borderRadius: "14px",
          boxShadow: "0 0 10 #0006",
          overflowX: "hidden",
          overflowY: "auto",
        }}>
          
          {/* ハンバーガーメニューボタン */}
          <IconButton onClick={() => toggleMenu()} sx={{ position: "absolute", top: 20, right: 20 }}>
            <Box sx={hanburgerButton}>
                <span style={{ height: "4px", background: "#333", borderRadius: "2px"}}></span>
                <span style={{ height: "4px", background: "#333", borderRadius: "2px"}}></span>
                <span style={{ height: "4px", background: "#333", borderRadius: "2px"}}></span>
            </Box  >
          </IconButton>
          

          {/* メニュー本体 */}
          { isMenuOpen &&
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100%",
              height: "100vh",
              boxShadow: "-2px 0 8px rgba(0,0,0,0.2)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              rowGap: "16px",
              zIndex: 1000,
              backgroundColor: "black",
              color: "white",
            }}>
              <List>
                { menuArray.map((value, index) => (
                  <ListItem key={index} onClick={toggleMenu}>
                    {value}
                  </ListItem>))}
              </List>
            <Button onClick={toggleMenu} sx={{ ...hanburgerButton, }}/>
          </Box>

          }

          {/* 表紙 */}
          <Box
            style={{ 
              backgroundImage: `url(${mv_bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              textShadow: "0 2px 4px rgba(0,0,0,0.6)"
            }}>
              <Typography variant="weddingTitle">Wedding Invitation</Typography>
              <Typography>Daich&Miho<br/></Typography>
              <Typography>2025.6.22</Typography>
                
          </Box>

          {/* カウントダウン */}
          <div style={{
            backgroundImage: `url(${countDown_bg})`,
            // backgroundColor: "#fff",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "440px",
            width: "440px",
            margin: "auto"
          }}>
            <div style={{padding: "45px 20px",}}>
            <div
              style={{
                borderBottom: "1px solid",
              }}>
              <p
                style={{
                  fontSize: "26px",
                  margin: "0 0 12px 0"
                }}>
                Count Down
              </p>
              <CountDownToDate targetDate="2025-06-22T10:00:00" />
              <p style={{ 
                fontSize: "18px",
                display: "block",
                margin: "0 0 24px 0"}}
                >to out Wedding</p>
            </div>
            {/* 式までの日付カウント部 */}
            <div
              style={{
                alignItems: "center"
              }}>
            <p
                style={{
                  fontSize: "42px",
                  display: "block",
                  margin: "0 0 12px 0",
                }}>
                2025.6.22
              </p>
            </div>
          </div>
          </div>
          
          {/* ご挨拶 */}
          <div>
                <Typography 
                  variant="weddingTitle" 
                  style={{
                    // fontSize: "45px",
                    // color: text_color,
                    // fontWeight: 400,
                    // fontFamily: "Hafidz, sans-serif"
                }}
                >
                  Message
                </Typography>
                <Typography sx={{ fontSize: "14px" }}>ご挨拶</Typography>
          </div>

          {/* 新郎新婦 */}
          <div>


          </div>

          {/* アルバム */}
          <div>

          </div>

          {/* パーティーのご案内 */}
          <div>


          </div>

          {/* その他のご案内 */}
          <div>

          </div>

          {/* 御出欠について */}
          <div>

          </div>
        </Box>
  )
}