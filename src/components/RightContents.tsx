import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
  type CSSProperties,
} from '@mui/material';
import { useRef, useState } from 'react';
import { InvitaionBox } from './InvitaionBox';
import { MainCover } from './MainCover';
import { Greeting } from './Greeting';
import { Profile } from './Profile';
import { PartyInvitaion } from './PartyInvitaion';
import { CountDown } from './CountDown';
import { AttendanceForm } from './AttendanceForm';
import ImageGallery, { type ReactImageGalleryItem } from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import inSpain from '../assets/inSpain.jpeg';
import inGlassland from '../assets/inGlassland.jpeg';
import inTheSnow from '../assets/inTheSnow.jpeg';
import hakuoh from '../assets/hakuoh.jpeg';
import { ArrowCircleLeft, ExpandCircleDown } from '@mui/icons-material';

/* 右側のBox（メインコンテンツ部） */
export function RightContents() {
  const drawerContainerRef = useRef(null);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => setisMenuOpen(!isMenuOpen);

  const hanburgerButton: CSSProperties = {
    width: '30px',
    height: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const menuArray = [
    'カウントダウン',
    'ご挨拶',
    '新郎新婦',
    'アルバム',
    'パーティのご案内',
    'その他のご案内',
    '御出欠について',
  ];

  const images: ReactImageGalleryItem[] = [
    {
      original: `${hakuoh}`,
      thumbnail: `${hakuoh}`,
      originalHeight: 250,
      originalWidth: 250,
      thumbnailHeight: 40,
      thumbnailWidth: 40,
    },
    {
      original: `${inSpain}`,
      thumbnail: `${inSpain}`,
      originalHeight: 250,
      originalWidth: 250,
      thumbnailHeight: 100,
      thumbnailWidth: 100,
    },
    {
      original: `${inGlassland}`,
      thumbnail: `${inGlassland}`,
      originalHeight: 250,
      originalWidth: 250,
      thumbnailHeight: 100,
      thumbnailWidth: 100,
    },
    {
      original: `${inTheSnow}`,
      thumbnail: `${inTheSnow}`,
      originalHeight: 250,
      originalWidth: 250,
      thumbnailHeight: 100,
      thumbnailWidth: 100,
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: '375px',
        width: '100%',
        height: '680px',
        minHeight: '100%',
        borderRadius: '14px',
        overflowX: 'hidden',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* ハンバーガーメニューボタン */}
      <IconButton onClick={() => toggleMenu()} sx={{ position: 'absolute', top: 20, right: 20 }}>
        <Box sx={hanburgerButton}>
          <Typography sx={{ height: '2px', background: '#333', borderRadius: '2px' }}></Typography>
          <Typography sx={{ height: '2px', background: '#333', borderRadius: '2px' }}></Typography>
          <Typography sx={{ height: '2px', background: '#333', borderRadius: '2px' }}></Typography>
        </Box>
      </IconButton>
      {/* メニュー本体 */}
      {isMenuOpen && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            boxShadow: '-2px 0 8px rgba(0,0,0,0.2)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '16px',
            zIndex: 1000,
            backgroundColor: 'black',
            color: 'white',
            justifyContent: 'center',
            alignItems: 'center',
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
      <Box sx={{ width: '100%', height: '100%', padding: '30px 0 50px' }}>
        <Typography variant="weddingTitle">Album</Typography>
        <Typography sx={{ fontSize: '14px', mb: '36px' }}>アルバム</Typography>
        <ImageGallery
          items={images} // 表示する写真
          showPlayButton={false} // プレイボタンを表示（デフォルト：true）
          showFullscreenButton={false} // フルスクリーンボタンを表示（デフォルト：true）
          showThumbnails={true} // サムネイルを表示
          // showBullets={true}               // インジケーター（ドット）を表示
          slideInterval={undefined} // スライドショーの間隔（ミリ秒）
          autoPlay={true} // 自動再生を有効にする
          infinite={true} // ループを有効にする
          showNav={true} // ナビゲーション矢印を表示
          additionalClass="custom-gallery" // カスタムクラスを追加
          renderItem={item => (
            <img
              src={item.original}
              style={{
                width: '70%',
                height: '250px',
                objectFit: 'cover',
              }}
            />
          )}
          renderThumbInner={item => (
            <img
              src={item.original}
              style={{
                width: '100%',
                height: '100px',
                objectFit: 'cover',
              }}
            />
          )}
          // 左のナビゲーションエリアを任意にレンダリング可能
          // onClickで、写真を左に動かすハンドラーを継承可能
          renderLeftNav={onClick => {
            return (
              <IconButton
                onClick={onClick}
                sx={{
                  display: 'inline',
                  padding: '50px 10px',
                  top: '25%',
                  left: 0,
                  position: 'absolute',
                  zIndex: 4,
                  '&:focus': {
                    // borderより更に外側に線を表示するプロパティ
                    // https://web-camp.io/magazine/archives/89719/
                    outlineStyle: 'none',
                  },
                }}
              >
                <ExpandCircleDown sx={{ transform: 'rotateZ(90deg)', transformOrigin: 'center' }} />
              </IconButton>
            );
          }}
          // 左のナビゲーションエリアを任意にレンダリング可能
          // onClickで、写真を左に動かすハンドラーを継承可能
          renderRightNav={onClick => {
            return (
              <IconButton
                onClick={onClick}
                sx={{
                  display: 'inline',
                  padding: '50px 10px',
                  top: '25%',
                  right: 0,
                  position: 'absolute',
                  zIndex: 4,
                  '&:focus': {
                    // borderより更に外側に線を表示するプロパティ
                    // https://web-camp.io/magazine/archives/89719/
                    outlineStyle: 'none',
                  },
                }}
              >
                <ExpandCircleDown
                  sx={{ transform: 'rotateZ(-90deg)', transformOrigin: 'center' }}
                />
              </IconButton>
            );
          }}
        />
      </Box>
      {/* パーティーのご案内 */}
      <PartyInvitaion />
      {/* その他のご案内 */}
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          gap: '14px',
          padding: '20px',
        }}
      >
        <Typography variant="weddingTitle">Information</Typography>
        <Typography sx={{ fontSize: '14px' }}>その他のご案内</Typography>
        <Stack sx={{ gap: '14px' }}>
          <InvitaionBox boxTitle="挙式ご列席のお願い" disableHyphen>
            <Typography
              sx={{
                fontSize: '14px',
                whiteSpace: 'pre-line',
                lineHeight: '180%',
                padding: '20px',
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
                fontSize: '14px',
                whiteSpace: 'pre-line',
                lineHeight: '180%',
                padding: '20px',
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
