import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface CountDownToDateProps {
  targetDate: string
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}


export const CountDownToDate = ({targetDate}: CountDownToDateProps) => {

  // 「TimeLeft | null」は返り値の型
  // 関数「calculateTimeLeft」は、{ days, hours, minutes, seconds }を返却する
  // もしくは、与えた日付を過ぎていたら、「null」を返却する
  const calculateTimeLeft = (): TimeLeft | null => {

    // new Date()は、現在の日付をミリ秒の数値（UNIXタイムスタンプ）として取得する関数
    // 1秒=1000ミリ秒
    // つまり、変数「difference」は、与えられた日付から現在の日付を引いたミリ秒の数値を取得する
    const difference = +new Date(targetDate) - +new Date();

    // 変数「difference」が0、つまり与えられた日付が来たら、nullが返却される
    if(difference <= 0) return null;

    return {
      // ÷1000=秒
      // ÷60=分
      // ÷60=時
      // ÷24=日
      days    : Math.floor(difference / (1000 * 60 * 60 * 24)),
      // 1000で割ると、残りが何秒か分かる、また60を掛けると、分が分かり、更に60を掛けると、時が分かる
      // 24で割ると、時が24まであるので、残りの時を表示可能
      hours   : Math.floor((difference / (1000 * 60 * 60)) % 24),
      // 1000で割ると、残りが何秒か分かる、また60を掛けているのは、分が60まであるから
      // 60で割ると、残りの分だけ表示可能
      minutes : Math.floor((difference / (1000 * 60) % 60)),
      // 1000で割ると、残りが何秒か分かる
      // 60で割ると、60秒未満が取得できるので、秒だけ表示可能
      seconds : Math.floor((difference / 1000) % 60),
    };
  };


  // 「timeLeft」は、現在の残り時間を保持するステート
  // 「setTimeLeft」は、「timeLeft」を更新する関数
  // 初期値は、「calculateTimeLeft()」
  const [ timeLeft, setTimeLeft ] = useState<TimeLeft | null>(calculateTimeLeft());

  // 
  useEffect(() => {
    // 与えられた日を過ぎているなら、何も返却されない
    if(!timeLeft) return ;

    // 「setInterval」関数は、指定した処理を一定間隔で繰り返す関数
    // 1000を指定することで、1秒毎にこの処理を実行する
    const timer = setInterval(() => {
      // 与えられた日付と、現在の日付を計算する
      const updated = calculateTimeLeft();
      // 「null」が返却されたら、タイマーをリセットする
      if(!updated) clearInterval(timer);
      // 「setTimeLeft」は、「timeLeft」を更新する関数なので、1秒ごとに状態を更新し続ける
      setTimeLeft(updated);
    }, 1000);

    // Reactのクリーンアップ。再実行やコンポーネント破棄の時に必ずタイマーを止める
    return () => clearInterval(timer);

  // 「timeLeft」が変化するたびに、この副作用を再実行する（この依存配列に含まれている値が変化する度に処理を実行する
  }, [timeLeft]);

  // 現在の残り時間がなくなったら（期日を迎えたら）
  if (!timeLeft) return <h1 style={{ color: "black"}}>カウントダウン終了！</h1>

  return (
    
    <Box
      style={{
        display: "flex",
        columnGap: "16px"
      }}>
      <Box style={{ fontSize: "36px"}}>
        <Typography>{timeLeft.days}<br/></Typography>
        <Typography style={{ fontSize: "12px"}}>DAYS</Typography>
      </Box>
      <Box style={{ fontSize: "36px"}}>
        {timeLeft.hours}<br/>
        <Typography style={{ fontSize: "12px"}}>HOURS</Typography>
      </Box>
      <Box style={{ fontSize: "36px"}}>
        {timeLeft.minutes}<br/>
        <Typography style={{ fontSize: "12px"}}>MINUTES</Typography>
      </Box>
      <Box style={{ fontSize: "36px"}}>
        {timeLeft.seconds}<br/>
        <Typography style={{ fontSize: "12px"}}>SECONDS</Typography>
      </Box>
    </Box>
  )
}