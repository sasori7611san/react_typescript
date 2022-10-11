// 待ち時間を0.1秒単位で設定する（wait:待ち時間,callback:コールバック関数）
export const sleep = (wait: number, callback: () => void): void => {
  let waitCount = wait * 10
  let spanedSec = 0;
  console.log(waitCount)
  // 待機処理
  const waitFunc = () => {
      spanedSec++;
      console.log(spanedSec)
      // 時間になったらコールバック関数実行
      if (spanedSec >= waitCount) {
          if (callback) callback();
          return;
      }
      clearTimeout(id);
      id = setTimeout(waitFunc, 100);
  };
  let id = setTimeout(waitFunc, 100);
}
