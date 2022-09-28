import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  // 分割代入を実施
  const time = [date.getHours(), date.getMinutes(), date.getSeconds()];
  const [h, m, s] = time;
  // 時刻表示用文字列
  const strTime: string[] = [
    '00',
    '01',
    '02',
    'さぁ～ん',
    '04',
    '05',
    'ろぉ～く',
    '07',
    '08',
    'きゅ～',
    '10',
    '11',
    'じゅうにぃ～',
    'じゅうさぁ～ん',
    '14',
    'じゅうごぉ～',
    '16',
    '17',
    'じゅうは～ち',
    '19',
    '20',
    'に～じゅうい～ち',
    '22',
    'に～じゅうさぁ～ん',
    'に～じゅうしぃ～',
    '25',
    '26',
    'に～じゅうしちぃ～',
    '28',
    '29',
    'さぁ～んじゅう',
    'さぁ～んじゅうい～ち',
    'さぁ～んじゅうにぃ～',
    'さぁ～んじゅうさぁ～ん',
    'さぁ～んじゅうしぃ～',
    'さぁ～んじゅうごぉ～',
    'さぁ～んじゅうろ～く',
    'さぁ～んじゅうし～ち',
    'さぁ～んじゅうは～ち',
    'さぁ～んじゅうきゅ～',
    '40',
    '41',
    'よぉ～んじゅうにぃ～',
    'よぉ～んじゅうさぁ～ん',
    '44',
    'よぉ～んじゅうごぉ～',
    '46',
    '47',
    'よぉ～んじゅうは～ち',
    '49',
    '50',
    'ごぉ～じゅうい～ち',
    '52',
    'ごぉ～じゅうさぁ～ん',
    'ごぉ～じゅうしぃ～',
    '55',
    '56',
    'ごぉ～じゅうしちぃ～',
    '58',
    '59',
    'ろ～くじゅう',
  ];
  // １秒ごとに更新
  useEffect(() => {
    const nowTime = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(nowTime);
  }, [date]);
  // 0で埋めて2桁にそろえる
  const twoDigit = (num: number): string => {
    let ret: string;
    num < 10 ? (ret = '0' + num) : (ret = num.toString());
    return ret;
  };

  return (
    <div className="App">
      <p>誰かさんのネタみたいな時計</p>
      <p>
        {strTime[h]}時{strTime[m]}分{strTime[s]}秒
      </p>
      <p>
        普通の時刻{twoDigit(h)}:{twoDigit(m)}:{twoDigit(s)}
      </p>
    </div>
  );
}
export default App;
