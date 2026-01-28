import { Search, Add } from '@mui/icons-material';
import {
  Box,
  Typography,
  Divider,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
  TextField,
  InputLabel,
  Select,
  Input,
  Link,
  Button,
  useTheme,
  IconButton,
} from '@mui/material';
import { InvitaionBox } from './InvitaionBox';
import { useState, type ChangeEvent } from 'react';
import attend from '../assets/attend.png';

export function AttendanceForm() {
  const { palette } = useTheme();

  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { label: 'ご出席', value: 'Attend' },
    { label: 'ご欠席', value: 'Decline' },
    { label: '保留', value: 'Hold' },
  ];

  const [attendCelemonyValue, setAttendCelemonyValue] = useState('');
  const [attendReceptionValue, setAttendReceptionValue] = useState('');
  const [guestValue, setGuestValue] = useState('');
  const [allergyValue, setAllergyValue] = useState('');
  const [celebrateValue, setCelebrateValue] = useState('');
  const [rideBusValue, setRideBusValue] = useState('');

  const handleChangeAttendCelemonyValue = (e: ChangeEvent<HTMLInputElement>) => {
    setAttendCelemonyValue(e.currentTarget.value);
  };

  const handleChangeAttendReceptionValue = (e: ChangeEvent<HTMLInputElement>) => {
    setAttendReceptionValue(e.currentTarget.value);
  };

  const handleChangeGuestValue = (e: ChangeEvent<HTMLInputElement>) => {
    setGuestValue(e.currentTarget.value);
  };

  const handleChangeallergyValue = (e: ChangeEvent<HTMLInputElement>) => {
    setAllergyValue(e.currentTarget.value);
  };

  const handleChangeCelebrateValue = (e: ChangeEvent<HTMLInputElement>) => {
    setCelebrateValue(e.currentTarget.value);
  };

  const handleChangerideBusValue = (e: ChangeEvent<HTMLInputElement>) => {
    setRideBusValue(e.currentTarget.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: palette.secondary.dark,
        width: '100%',
        height: 'auto',
        padding: '56px 20px 20px',
      }}
    >
      <Typography variant="weddingTitle" sx={{ color: palette.primary.light }}>
        Attendance form
      </Typography>
      <Typography sx={{ fontSize: '14px', color: palette.primary.light }}>
        御出欠について
      </Typography>
      <Box
        sx={{
          marginTop: '20px',
        }}
      >
        <Typography
          sx={{
            fontSize: '14px',
            color: palette.primary.light,
            fontFamily: "'Noto Serif JP', serif",
          }}
        >
          誠に勝手ながら
          <br />
          <Typography
            component="span"
            sx={{
              fontSize: '20px',
              textDecoration: 'underline',
              fontFamily: "'Noto Serif JP', serif",
            }}
          >
            2025年5月31日（土）
          </Typography>
          <Typography component="span" sx={{ fontFamily: "'Noto Serif JP', serif" }}>
            迄に
          </Typography>
          <br />
          ご回答いただければ幸いに存じます
        </Typography>
      </Box>
      <Box
        sx={{
          border: `1px solid ${palette.text.primary}`,
          marginTop: '10px',
          padding: '8px',
        }}
      >
        <Typography variant="S">
          万が一ご都合が合わなくなってしまった場合は直接ご連絡ください
        </Typography>
      </Box>
      <InvitaionBox boxTitle="挙式" disableBorder>
        <Stack direction="row" sx={{ width: '100%' }}>
          {options.map(option => (
            <Box
              key={option.value}
              onClick={() => setSelected(option.value)}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                width: '100px',
                height: '100px',
                overflow: 'visible',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: selected === option.value ? 700 : 400,
                color: selected === option.value ? 'white' : 'black',
                transition: 'color 0.1s ease',
              }}
            >
              {/* 背景アニメーション部分 */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${attend})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.2s ease, opacity 0.2s ease',
                  transform: selected === option.value ? 'scale(1)' : 'scale(0.5)',
                  opacity: selected === option.value ? 1 : 0,
                  zIndex: 0,
                }}
              />

              {/* テキスト（前面） */}
              <Typography
                component="p"
                sx={{
                  zIndex: 1,
                  position: 'relative',
                  fontSize: '16px',
                }}
              >
                {option.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </InvitaionBox>
      <InvitaionBox boxTitle="披露宴" disableBorder>
        aiueo
      </InvitaionBox>
      <Box
        sx={{
          backgroundColor: palette.primary.light,
          padding: '30px 20px 34px',
        }}
      >
        <Box>
          <Typography>＊は必須項目です</Typography>
        </Box>
        <Divider />
        <Box>
          <Typography>いずれかをお選びください＊</Typography>
          <FormControl>
            <RadioGroup value={guestValue} onChange={handleChangeGuestValue}>
              <FormControlLabel value="guestOfMale" label="新郎ゲスト" control={<Radio />} />
              <FormControlLabel value="guestOfFemale" label="新婦ゲスト" control={<Radio />} />
            </RadioGroup>
          </FormControl>
        </Box>
        <Divider />
        <Box>
          <Typography>お名前＊</Typography>
          <FormControl>
            <Stack direction="row" spacing="14px">
              <TextField placeholder="姓" />
              <TextField placeholder="名" />
            </Stack>
          </FormControl>
        </Box>
        <Divider />
        <Box>
          <Typography>お名前（ローマ字）</Typography>
          <FormControl>
            <Stack direction="row" spacing="14px">
              <TextField placeholder="Sei" />
              <TextField placeholder="Mei" />
            </Stack>
          </FormControl>
        </Box>
        <Divider />
        <Box>
          <Typography>間柄</Typography>
          <FormControl fullWidth>
            <InputLabel>間柄を選択してください</InputLabel>
            <Select label="aiueo" sx={{ width: '100%' }} />
          </FormControl>
        </Box>
        <Divider />
        <Box>
          <Typography>プロフィール写真</Typography>
          <Typography>よろしければプロフィール写真の添付をお願いいたします</Typography>
          <Input type="file" hidden />
        </Box>
        <Divider />
        <Box>
          <Typography>ご住所</Typography>
          <Typography>郵便番号（7桁の半角数字）</Typography>
          <FormControl>
            <TextField placeholder="1234567" />
          </FormControl>
          <Link>
            <Search />
            郵便番号を調べたい方はこちら
          </Link>
        </Box>
        <Box>
          <Typography>都道府県</Typography>
          <FormControl fullWidth>
            <InputLabel>東京都</InputLabel>
            <Select label="aiueo" sx={{ width: '100%' }} />
          </FormControl>
        </Box>
        <Box>
          <Typography>市区町村</Typography>
          <FormControl>
            <TextField placeholder="新宿区新宿" />
          </FormControl>
        </Box>
        <Box>
          <Typography>丁目・番地</Typography>
          <FormControl>
            <TextField placeholder="1-36-2" />
          </FormControl>
        </Box>
        <Box>
          <Typography>建物名・部屋番号など</Typography>
          <FormControl>
            <TextField placeholder="新宿第七葉山ビル 301" />
          </FormControl>
        </Box>
        <Divider />
        <Box>
          <Typography>電話番号（半角数字・ハイフン）</Typography>
          <FormControl>
            <TextField placeholder="090-1234-5678" />
          </FormControl>
        </Box>
        <Divider />
        <Box>
          <Typography>メールアドレス（半角英数字・記号）＊</Typography>
          <FormControl>
            <TextField placeholder="sample@example.com" />
          </FormControl>
        </Box>
        <Divider />
        <Box>
          <Typography>アレルギーについて</Typography>
          <FormControl>
            <RadioGroup value={allergyValue} onChange={handleChangeallergyValue}>
              <FormControlLabel value="noAllergy" label="アレルギーなし" control={<Radio />} />
              <FormControlLabel value="hasAllergy" label="アレルギーあり" control={<Radio />} />
            </RadioGroup>
          </FormControl>
        </Box>
        <Divider />
        <Box>
          <Typography>お祝い画像・動画</Typography>
          <FormControl>
            <RadioGroup value={celebrateValue} onChange={handleChangeCelebrateValue}>
              <FormControlLabel
                value="listChoice"
                label="お祝い画像一覧から選ぶ"
                control={<Radio />}
              />
              <FormControlLabel
                value="selfUpload"
                label="お祝い画像・動画をアップロード"
                control={<Radio />}
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Divider />
        <Box>
          <Button variant="outlined">
            <Add />
            <Typography>お連れ様を追加</Typography>
          </Button>
        </Box>
        <Divider />
        <Box>
          <Typography>送迎バスのご利用について</Typography>
          <Typography></Typography>
          <FormControl>
            <RadioGroup value={rideBusValue} onChange={handleChangerideBusValue}>
              <FormControlLabel value="rideValue" label="利用する" control={<Radio />} />
              <FormControlLabel value="NoRideValue" label="利用しない" control={<Radio />} />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
