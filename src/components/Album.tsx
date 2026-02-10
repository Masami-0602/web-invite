import { ExpandCircleDown } from '@mui/icons-material';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ImageGallery, { type ReactImageGalleryItem } from 'react-image-gallery';
import inSpain from '../assets/inSpain.jpeg';
import inGlassland from '../assets/inGlassland.jpeg';
import inTheSnow from '../assets/inTheSnow.jpeg';
import hakuoh from '../assets/hakuoh.jpeg';

export function Album() {
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
    <Stack sx={{ width: '100%', height: 'auto', padding: '30px 0 50px', alignItems: 'center' }}>
      <Typography variant="weddingTitleMobile">Album</Typography>
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
              <ExpandCircleDown sx={{ transform: 'rotateZ(-90deg)', transformOrigin: 'center' }} />
            </IconButton>
          );
        }}
      />
    </Stack>
  );
}
