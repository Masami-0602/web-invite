import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
  type CSSProperties,
} from "@mui/material";
import { useState } from "react";
import { InvitaionBox } from "./InvitaionBox";
import { MainCover } from "./MainCover";
import { Greeting } from "./Greeting";
import { Profile } from "./Profile";
import { PartyInvitaion } from "./PartyInvitaion";
import { CountDown } from "./CountDown";
import { AttendanceForm } from "./AttendanceForm";

/* 右側のBox（メインコンテンツ部） */
export function RightContents() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => setisMenuOpen(!isMenuOpen);

  const hanburgerButton: CSSProperties = {
    width: "30px",
    height: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const menuArray = [
    "カウントダウン",
    "ご挨拶",
    "新郎新婦",
    "アルバム",
    "パーティのご案内",
    "その他のご案内",
    "御出欠について",
  ];

  return (
    <Box
      sx={{
        maxWidth: "375px",
        width: "100%",
        height: "680px",
        minHeight: "100%",
        borderRadius: "14px",
        overflowX: "hidden",
        overflowY: "auto",
        position: "relative",
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.4)",
      }}
    >
      {/* ハンバーガーメニューボタン */}
      <IconButton
        onClick={() => toggleMenu()}
        sx={{ position: "absolute", top: 20, right: 20 }}
      >
        <Box sx={hanburgerButton}>
          <Typography
            sx={{ height: "2px", background: "#333", borderRadius: "2px" }}
          ></Typography>
          <Typography
            sx={{ height: "2px", background: "#333", borderRadius: "2px" }}
          ></Typography>
          <Typography
            sx={{ height: "2px", background: "#333", borderRadius: "2px" }}
          ></Typography>
        </Box>
      </IconButton>
      {/* メニュー本体 */}
      {isMenuOpen && (
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
          }}
        >
          <List>
            {menuArray.map((value, index) => (
              <ListItem key={index} onClick={toggleMenu}>
                {value}
              </ListItem>
            ))}
          </List>
          <Button onClick={toggleMenu} sx={{ ...hanburgerButton }} />
        </Box>
      )}
      {/* 表紙 */}
      <MainCover />
      {/* カウントダウン */}
      <CountDown />
      {/* ご挨拶 */}
      <Greeting />
      {/* プロフィール */}
      \<Profile />
      {/* アルバム */}
      <Box sx={{ width: "100%", height: "100%" }}>
        <Typography variant="weddingTitle">Album</Typography>
        <Typography sx={{ fontSize: "14px" }}>アルバム</Typography>
      </Box>
      {/* パーティーのご案内 */}
      <PartyInvitaion />
      {/* その他のご案内 */}
      <Box
        sx={{
          width: "100%",
          height: "auto",
          gap: "14px",
          padding: "20px",

        }}
      >
        <Typography variant="weddingTitle">Information</Typography>
        <Typography sx={{ fontSize: "14px" }}>その他のご案内</Typography>
        <Stack sx={{ gap: "14px" }}>
          <InvitaionBox boxTitle="挙式ご列席のお願い" disableHyphen>
            <Typography
              sx={{
                fontSize: "14px",
                whiteSpace: "pre-line",
                lineHeight: "180%",
                padding: "20px",
              }}
            >
              {`誠に恐れ入りますが
                      挙式からご列席賜りたく
                      当日は 9時45分 迄に
                      お越しくださいますよう
                      よろしくお願い申し上げます`}
            </Typography>
          </InvitaionBox>
          <InvitaionBox boxTitle="ドレスコードについて" disableHyphen>
            <Typography
              sx={{
                fontSize: "14px",
                whiteSpace: "pre-line",
                lineHeight: "180%",
                padding: "20px",
              }}
            >
              {`
                    当日は皆様が
                    リラックスして楽しめる
                    パーティーにしたいと思っています🥂
                    
                    気張らず過ごしやすい服装や
                    心が弾むファッションなど
                    皆様らしい服装で
                    どうぞお越しくださいませ


                    例）サンダル　長靴　スニーカー
                    ノージャケット　ノーネクタイ　
                    ノーヒール　
                    ハーフパンツ　柄シャツ
                    オールブラック　アニマル柄
                    着物　浴衣


                    なんでもOKです
                    もちろんフォーマルスタイルも
                    ウェルカムです🌹
                    


                    ご不明な点がございましたら
                    いつでもお気軽にご相談ください

                    大好きな皆様とお会いできることを
                    楽しみにしております🕊️
                    `}
            </Typography>
          </InvitaionBox>
        </Stack>
      </Box>
      {/* 御出欠について */}
      <AttendanceForm />
    </Box>
  );
}
