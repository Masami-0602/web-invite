import { Box, Button, IconButton, List, ListItem, Typography, type CSSProperties } from "@mui/material";
import { useState } from "react";
import { CountDownToDate } from "./timer";
import mv_bg  from "../assets/mv_bg.jpg";
import countDown_bg from "../assets/countDown_bg.png";
import up_them from "../assets/up_them.jpeg";
import profile_1 from "../assets/profile_1.png";
import profile_2 from "../assets/profile_2.png";
import groom from "../assets/groom.jpeg";
import bride from "../assets/bride.jpeg";



{/* 右側のBox（メインコンテンツ部） */}
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
    <Box 
      sx={{
        maxWidth: "375px",
        width: "100%",
        height: "680px",
        borderRadius: "14px",
        boxShadow: "0 0 10 #0006",
        overflowX: "hidden",
        overflowY: "auto",
        position: "relative",
        WebkitBoxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.4)"
      }}
    >
          
          {/* ハンバーガーメニューボタン */}
          <IconButton onClick={() => toggleMenu()} sx={{ position: "absolute", top: 20, right: 20 }}>
            <Box sx={hanburgerButton}>
                <Typography sx={{ height: "2px", background: "#333", borderRadius: "2px"}}></Typography>
                <Typography sx={{ height: "2px", background: "#333", borderRadius: "2px"}}></Typography>
                <Typography sx={{ height: "2px", background: "#333", borderRadius: "2px"}}></Typography>
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
              height: "100%",
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
            sx={{ 
              backgroundImage: `url(${mv_bg})`,         // 背景画像
              backgroundSize: "cover",                  // 背景画像のサイズ：「auto」「contain」「cover」「数値（px）」「数値（%）」
              backgroundPosition: "center",             // 背景画像の配置市：「キーワードで指定（centerとか」「数値（px）」「数値（%）」
              backgroundRepeat: "no-repeat",            // 背景画像の繰り返し指定：「repeat」「repeat-x」「repaeat-y」「no-repeat」
              height: "100%",
              width: "100%",
              flexDirection: "column",
              alignContent: "center",              
              justifyContent: "center",
              color: "#fff",
              textShadow: "0 2px 4px rgba(0,0,0,0.6)"
            }}>
              <Typography variant="weddingTitle">Wedding Invitation</Typography>
              <Typography>Daich&Miho<br/></Typography>
              <Typography>2025.6.22</Typography>
                
          </Box>

          {/* カウントダウン */}
          <Box style={{
            backgroundImage: `url(${countDown_bg})`,
            // backgroundColor: "#fff",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "440px",
            width: "100%",
            margin: "auto"
          }}>
            <Box style={{padding: "45px 20px",}}>
            <Box
              style={{
                borderBottom: "1px solid",
              }}>
              <Typography
                style={{
                  fontSize: "26px",
                  margin: "0 0 12px 0"
                }}>
                Count Down
              </Typography>
              <CountDownToDate targetDate="2025-12-31T10:00:00" />
              <p style={{ 
                fontSize: "18px",
                display: "block",
                margin: "0 0 24px 0"}}
                >to out Wedding</p>
            </Box>
            {/* 式までの日付カウント部 */}
            <Box
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
            </Box>
          </Box>
          </Box>
          
          {/* ご挨拶 */}
          <Box>
                <Typography variant="weddingTitle">Message</Typography>
                <Typography sx={{ fontSize: "14px" }}>ご挨拶</Typography>
                <Typography sx={{ fontSize: "14px", whiteSpace: "pre-line", paddingTop: "30px" }}>
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
          </Box>

          {/* 新郎新婦 */}
          <Box sx={{ padding: "30px 20px"}}> 
           <img src={up_them} style={{ width: "100%", height: "100%" }}/>

          </Box>

          {/* プロフィール */}
          <Box>
           <Typography variant="weddingTitle">Profile</Typography>
           <Typography sx={{ fontSize: "14px" }}>プロフィール</Typography>
          </Box>

          <Box
            sx={{
              backgroundImage: `url(${profile_1})`,
              backgroundSize: "cover",
              backgroundPosition: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "50%",
              backgroundPositionY: "50%",
              width: "316px",
              height: "291px"
            }}
          >
            <Box sx={{ width: "230px", height: "240px" }}>
              {/* <img src={groom} /> */}
            </Box>
          </Box>

          {/* アルバム */}
          <Box>

          </Box>

          {/* パーティーのご案内 */}
          <Box>


          </Box>

          {/* その他のご案内 */}
          <Box>

          </Box>

          {/* 御出欠について */}
          <Box>

          </Box>
        </Box>
  )
}