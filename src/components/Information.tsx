import { Typography, Stack } from '@mui/material';
import { InvitaionBox } from './InvitaionBox';

export default function Information() {
  return (
    <Stack
      sx={{
        width: '100%',
        height: 'auto',
        gap: '14px',
        padding: '20px',
        alignItems: 'center',
      }}
    >
      <Typography variant="weddingTitle">Information</Typography>
      <Typography sx={{ fontSize: '14px' }}>その他のご案内</Typography>
      <Stack sx={{ gap: '14px' }}>
        <InvitaionBox boxTitle="挙式ご列席のお願い">
          <Typography
            sx={{
              fontSize: '14px',
              whiteSpace: 'pre-line',
              lineHeight: '180%',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            {`誠に恐れ入りますが
                      挙式からご列席賜りたく
                      当日は 9時45分 迄に
                      お越しくださいますよう
                      よろしくお願い申し上げます`}
          </Typography>
        </InvitaionBox>
        <InvitaionBox boxTitle="ドレスコードについて">
          <Typography
            sx={{
              fontSize: '14px',
              whiteSpace: 'pre-line',
              lineHeight: '180%',
              px: '20px',
              textAlign: 'center',
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
    </Stack>
  );
}
