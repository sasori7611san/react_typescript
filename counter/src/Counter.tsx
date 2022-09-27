import { FC } from 'react';

type Props = {
  count: any;
  countUp: () => void;
  countDown: () => void;
  countReset: () => void;
  display: any;
};
export const Counter: FC<Props> = (props): any => {
  const { count, countUp, countDown, countReset, display } = props;

  return (
    <>
      <p>
        カウント：{display}({count})
      </p>
      <br />
      <button onClick={countUp}>1増やす</button>
      <button onClick={countDown}>1減らす</button>
      <button onClick={countReset}>0に戻る</button>
    </>
  );
};
