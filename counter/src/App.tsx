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
    'し～ち',
    'は～ち',
    'きゅ～',
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
    'は～ち',
    'きゅ～',
    '',
  ];
  // ツッコミのテンプレート
  const tsukkomi: string[] = [
    'もうええわ！',
    'はよ止めや！',
    '一生分アホになったわ！',
    'いつまでやらすねん！',
    '4000以上もさすな！',
  ];
  // 文字列に出力する判定
  const judge = (num: number): string => {
    // 計算用
    let calc = Math.abs(num);
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
    // マイナスフラグ
    let minus: boolean = false;
    if (num < 0) {
      minus = true;
    }
    // 4000超えたらツッコミ入れる
    if (num > 4000 || num < -4000) {
      words.push(tsukkomi[Math.floor(Math.random() * tsukkomi.length)]);
    } else {
      // 3の倍数は文字出力
      if (num !== 0 && num % 3 === 0) {
        // マイナス時は'まいなす'を追加
        minus && words.push('まいなす');
        if (thousand !== 0) {
          addWords(words, idiotWordOver, thousand, 'せん');
        }
        if (hundred !== 0) {
          addWords(words, idiotWordOver, hundred, 'ひゃく');
        }
        if (ten !== 0) {
          addWords(words, idiotWordOver, ten, 'じゅう');
        }
        if (one !== 0) {
          words.push(idiotWord[one]);
        }
        // 3のつく数字（千の位）
      } else if (thousand === 3) {
        // マイナス時は'まいなす'を追加
        minus && words.push('まいなす');
        addWords(words, idiotWordOver, thousand, 'せん');
        if (hundred !== 0) {
          addWords(words, idiotWordOver, hundred, 'ひゃく');
        }
        if (ten !== 0) {
          addWords(words, idiotWordOver, ten, 'じゅう');
        }
        if (one !== 0) {
          words.push(idiotWord[one]);
        }
        // 3のつく数字（百の位）
      } else if (hundred === 3) {
        // マイナス時は'まいなす'を追加
        minus && words.push('まいなす');
        if (thousand !== 0) {
          addWords(words, idiotWordOver, thousand, 'せん');
        }
        addWords(words, idiotWordOver, hundred, 'ひゃく');
        if (ten !== 0) {
          addWords(words, idiotWordOver, ten, 'じゅう');
        }
        if (one !== 0) {
          words.push(idiotWord[one]);
        }
        // 3のつく数字（十の位）
      } else if (ten === 3) {
        // マイナス時は'まいなす'を追加
        minus && words.push('まいなす');
        if (thousand !== 0) {
          addWords(words, idiotWordOver, thousand, 'せん');
        }
        if (hundred !== 0) {
          addWords(words, idiotWordOver, hundred, 'ひゃく');
        }
        addWords(words, idiotWordOver, ten, 'じゅう');
        if (one !== 0) {
          words.push(idiotWord[one]);
        }
        // 3のつく数字（一の位）
      } else if (one === 3) {
        // マイナス時は'まいなす'を追加
        minus && words.push('まいなす');
        if (thousand !== 0) {
          addWords(words, idiotWordOver, thousand, 'せん');
        }
        if (hundred !== 0) {
          addWords(words, idiotWordOver, hundred, 'ひゃく');
        }
        if (ten !== 0) {
          addWords(words, idiotWordOver, ten, 'じゅう');
        }
        words.push(idiotWord[one]);
      } else {
        // それ以外は数値を文字列化して代入
        words.push(num.toString());
      }
    }
    // 単語になるように出力して戻す
    return words.join('');
  };

  // 言葉の追加
  const addWords = (
    word: string[],
    baseWord: string[],
    value: number,
    addWord: string
  ) => {
    word.push(baseWord[value]);
    word.push(addWord);
  };

  // カウントアップ
  const countUp = (): void => {
    setCount(count + 1);
    setDisplay((display = judge(count + 1)));
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

  // テスト用
  // 10カウントアップ
  const countUp10 = (): void => {
    setCount(count + 10);
    setDisplay((display = judge(count + 10)));
  };
  // 100カウントダウン
  const countDown10 = (): void => {
    setCount(count - 10);
    setDisplay((display = judge(count - 10)));
  };
  // 100カウントアップ
  const countUp100 = (): void => {
    setCount(count + 100);
    setDisplay((display = judge(count + 100)));
  };
  // 100カウントダウン
  const countDown100 = (): void => {
    setCount(count - 100);
    setDisplay((display = judge(count - 100)));
  };
  // 1000カウントアップ
  const countUp1000 = (): void => {
    setCount(count + 1000);
    setDisplay((display = judge(count + 1000)));
  };
  // 1000カウントダウン
  const countDown1000 = (): void => {
    setCount(count - 1000);
    setDisplay((display = judge(count - 1000)));
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
        countUp10={countUp10}
        countDown10={countDown10}
        countUp100={countUp100}
        countDown100={countDown100}
        countUp1000={countUp1000}
        countDown1000={countDown1000}
      />
    </div>
  );
}

export default App;
