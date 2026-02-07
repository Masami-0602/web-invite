import './App.css';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { LeftContents } from './components/LeftContents';
import { RightContents } from './components/RightContents';
import { MobileContents } from './components/mobile/MobileContents';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {isMobile ? (
        <MobileContents />
      ) : (
        // {/* 全体のdiv */}
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            maxWidth: '848px',
            height: '100%',
            // maxHeight: "680px",
            margin: '0 auto',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* 左側のdiv */}
          <LeftContents />

          {/* 右側のdiv（メインコンテンツ部） */}
          <RightContents />
        </Box>
      )}
    </>
  );
}

export default App;
