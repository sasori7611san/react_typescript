import React, { useState } from 'react';
import './App.css';

import { Counter } from './Counter';

function App() {
  // useStateの設定
  const [count, setCount] = useState(0);
  let [display, setDisplay] = useState('');
  // ひらがなのテンプレート
  const idiotWord: string[] = [
    '',
    'い～ち',
    'に～',
    'さぁ～ん',
    'しぃ～',
    'ごぉ～',
    'ろぉ～く',
    'し～ちぃ',
    'は～ちぃ',
    'きゅ～ぅ',
    '',
  ];
  // ひらがなのテンプレート（10の位以上）
  const idiotWordOver: string[] = [
    '',
    '',
    'に～',
    'さぁ～ん',
    'よぉ～ん',
    'ごぉ～',
    'ろぉ～く',
    'なな',
    'は～ちぃ',
    'きゅ～ぅ',
    '',
  ];
  // 文字列に出力する判定
  const judge = (num: number): string => {
    // 計算用
    let calc = num;
    // 数の計算(千)
    let thousand: number = Math.floor(calc / 1000);
    calc -= thousand * 1000;
    // 数の計算(百)
    let hundred: number = Math.floor(calc / 100);
    calc -= hundred * 100;
    // 数の計算(十)
    let ten: number = Math.floor(calc / 10);
    calc -= ten * 10;
    // 数の計算(一)
    let one: number = calc;
    // 文字入力変数
    let words: string[] = [];
    // 3の倍数は文字出力
    if (num !== 0 && num % 3 === 0) {
      if (thousand !== 0) {
        words.push(idiotWordOver[thousand]);
        words.push('せん');
      }
      if (hundred !== 0) {
        words.push(idiotWordOver[hundred]);
        words.push('ひゃく');
      }
      if (ten !== 0) {
        words.push(idiotWordOver[ten]);
        words.push('じゅう');
      }
      if (one !== 0) {
        words.push(idiotWord[one]);
      }
      // 3のつく数字（千の位）
    } else if (thousand === 3) {
      words.push(idiotWordOver[thousand]);
      words.push('せん');
      if (hundred !== 0) {
        words.push(idiotWordOver[hundred]);
        words.push('ひゃく');
      }
      if (ten !== 0) {
        words.push(idiotWordOver[ten]);
        words.push('じゅう');
      }
      if (one !== 0) {
        words.push(idiotWord[one]);
      }
      // 3のつく数字（百の位）
    } else if (hundred === 3) {
      if (thousand !== 0) {
        words.push(idiotWordOver[thousand]);
        words.push('せん');
      }
      words.push(idiotWordOver[hundred]);
      words.push('ひゃく');
      if (ten !== 0) {
        words.push(idiotWordOver[ten]);
        words.push('じゅう');
      }
      if (one !== 0) {
        words.push(idiotWord[one]);
      }
      // 3のつく数字（十の位）
    } else if (ten === 3) {
      if (thousand !== 0) {
        words.push(idiotWordOver[thousand]);
        words.push('せん');
      }
      if (hundred !== 0) {
        words.push(idiotWordOver[hundred]);
        words.push('ひゃく');
      }
      words.push(idiotWordOver[ten]);
      words.push('じゅう');
      if (one !== 0) {
        words.push(idiotWord[one]);
      }
      // 3のつく数字（一の位）
    } else if (one === 3) {
      if (thousand !== 0) {
        words.push(idiotWordOver[thousand]);
        words.push('せん');
      }
      if (hundred !== 0) {
        words.push(idiotWordOver[hundred]);
        words.push('ひゃく');
      }
      if (ten !== 0) {
        words.push(idiotWordOver[ten]);
        words.push('じゅう');
      }
      words.push(idiotWord[one]);
    } else {
      // それ以外は数値を文字列化して代入
      words.push(num.toString());
    }
    // 単語になるように出力して戻す
    return words.join('');
  };

  // カウントアップ
  const countUp = (): void => {
    setCount(count + 1);
    setDisplay((display = judge(count + 1)));
    console.log(display);
  };
  // カウントダウン
  const countDown = (): void => {
    setCount(count - 1);
    setDisplay((display = judge(count - 1)));
  };
  // カウントリセット
  const countReset = (): void => {
    setCount(0);
    setDisplay((display = judge(0)));
  };

  return (
    <div className="App">
      <p>
        <b>誰かさんのネタみたいなカウンター</b>
      </p>
      <Counter
        count={count}
        countUp={countUp}
        countDown={countDown}
        countReset={countReset}
        display={display}
      />
    </div>
  );
}

export default App;
