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
import Information from './Information';
import { Album } from './Album';

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
      <Album />
      {/* パーティーのご案内 */}
      <PartyInvitaion />
      {/* その他のご案内 */}
      <Information />
      {/* 御出欠について */}
      <AttendanceForm />
    </Box>
  );
}
