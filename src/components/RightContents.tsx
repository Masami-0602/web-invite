import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
  useTheme,
  type CSSProperties,
} from "@mui/material";
import { useState } from "react";
import { CountDownToDate } from "./timer";
import mv_bg from "../assets/mv_bg.jpg";
import countDown_bg from "../assets/countDown_bg.png";
import up_them from "../assets/up_them.jpeg";
import profile_1 from "../assets/profile_1.png";
import profile_2 from "../assets/profile_2.png";
import groom from "../assets/groom.jpeg";
import bride from "../assets/bride.jpeg";
import { InvitaionBox } from "./InvitaionBox";

/* 右側のBox（メインコンテンツ部） */
export function RightContents() {
  const { palette } = useTheme();

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
      <Box
        sx={{
          backgroundImage: `url(${mv_bg})`, // 背景画像
          backgroundSize: "cover", // 背景画像のサイズ：「auto」「contain」「cover」「数値（px）」「数値（%）」
          backgroundPosition: "center", // 背景画像の配置市：「キーワードで指定（centerとか」「数値（px）」「数値（%）」
          backgroundRepeat: "no-repeat", // 背景画像の繰り返し指定：「repeat」「repeat-x」「repaeat-y」「no-repeat」
          height: "100%",
          width: "100%",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          color: "#fff",
          textShadow: "0 2px 4px rgba(0,0,0,0.6)",
        }}
      >
        <Typography variant="weddingTitle">Wedding Invitation</Typography>
        <Typography>
          Daich&Miho
          <br />
        </Typography>
        <Typography>2025.6.22</Typography>
      </Box>

      {/* カウントダウン */}
      <Box
        style={{
          backgroundImage: `url(${countDown_bg})`,
          // backgroundColor: "#fff",
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
            <CountDownToDate
              targetDate="2025-12-31T10:00:00"
              units={["days"]}
            />
            <CountDownToDate
              targetDate="2025-12-31T10:00:00"
              units={["hours", "minutes", "seconds"]}
            />
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

      {/* ご挨拶 */}
      <Box>
        <Typography variant="weddingTitle">Message</Typography>
        <Typography sx={{ fontSize: "14px" }}>ご挨拶</Typography>
        <Typography
          sx={{
            fontSize: "14px",
            whiteSpace: "pre-line",
            paddingTop: "30px",
          }}
        >
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
      <Box sx={{ padding: "30px 20px" }}>
        <img
          src={up_them}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "none",
            objectPosition: "0% 27.934%",
            transform: "rotate(0deg)",
            zoom: 0.33264,
            aspectRatio: "1.28846 / 1",
          }}
        />
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
          height: "291px",
        }}
      >
        <img
          src={groom}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            objectFit: "none",
            objectPosition: "72.4849%",
            transform: "rotate(0deg)",
            zoom: "0.2842769",
            aspectRatio: "0.957983 / 1",
            overflow: "hidden",
          }}
        />
      </Box>
      <Box sx={{ mb: "30px" }}>
        <Typography>新郎</Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            pb: "10px",
          }}
        >
          鬼澤 大地
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            whiteSpace: "pre-line",
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "316px",
          height: "291px",
        }}
      >
        <img
          src={bride}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            objectFit: "none",
            objectPosition: "72.4849%",
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            zoom: "0.2842769",
            aspectRatio: "0.957983 / 1",
            overflow: "hidden",
          }}
        />
      </Box>
      <Box sx={{ mb: "30px" }}>
        <Typography>新婦</Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            pb: "10px",
          }}
        >
          鬼澤 美帆
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            whiteSpace: "pre-line",
            lineHeight: "180%",
          }}
        >
          {`大切な皆様と
            楽しい時間を過ごせたら嬉しいです
            美味しい料理と飲み物をご用意して
            お待ちしています！`}
        </Typography>
      </Box>

      {/* アルバム */}
      <Box sx={{ width: "100%", height: "100%" }}>
        <Typography variant="weddingTitle">Album</Typography>
        <Typography sx={{ fontSize: "14px" }}>アルバム</Typography>
      </Box>

      {/* パーティーのご案内 */}
      <Box
        sx={{
          backgroundColor: palette.secondary.dark,
          width: "100%",
          height: "auto",
          py: "40px",
        }}
      >
        <Typography variant="weddingTitle">Party Information</Typography>
        <Typography sx={{ fontSize: "14px" }}>パーティのご案内</Typography>
        <Box>
          <Typography>開催日</Typography>
          <Typography>2025年6月22日 日曜日</Typography>
        </Box>
        <Stack sx={{ gap: "14px" }}>
          <InvitaionBox boxTitle="挙式">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Typography variant="S" sx={{ display: "flex" }}>
                開始時刻
              </Typography>
              <Typography variant="XL" sx={{ display: "flex" }}>
                10:00
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Typography variant="S" sx={{ display: "flex" }}>
                受付
              </Typography>
              <Typography sx={{ display: "flex" }}>9:15</Typography>
            </Box>
          </InvitaionBox>
          <InvitaionBox boxTitle="披露宴">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Typography variant="S" sx={{ display: "flex" }}>
                開始時刻
              </Typography>
              <Typography variant="XL" sx={{ display: "flex" }}>
                11:00
              </Typography>
            </Box>
          </InvitaionBox>
          <InvitaionBox boxTitle="披露宴">
            <Stack spacing="12px">
              <Typography variant="L" component="p">
                リストランテASO
              </Typography>
              <Typography variant="XS" component="p">
                東京都渋谷区猿楽町29-3 リストランテASO
              </Typography>
              <Typography>TEL : 03-3770-3748</Typography>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d12968.63389738174!2d139.699289!3d35.648467!3m2!1i1024!2i768!4f13.1!2m1!1z5p2x5Lqs6YO95riL6LC35Yy654y_5qW955S6MjktMyDjg6rjgrnjg4jjg6njg7Pjg4ZBU08!5e0!3m2!1sja!2sus!4v1761971482659!5m2!1sja!2sus"
                style={{
                  width: "278px",
                  height: "210px",
                  border: "none",
                }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Stack>
          </InvitaionBox>
        </Stack>
      </Box>

      {/* その他のご案内 */}
      <Box
        sx={{ width: "100%", height: "auto", gap: "14px", paddingTop: "20px" }}
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
      <Box
        sx={{
          backgroundColor: palette.secondary.dark,
          width: "100%",
          height: "auto",
        }}
      >
        <Typography variant="weddingTitle">Attendance form</Typography>
        <Typography sx={{ fontSize: "14px" }}>その他のご案内</Typography>
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
    </Box>
  );
}
