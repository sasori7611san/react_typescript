import { FC } from 'react';
import './App.css';

type Props = {
  count: any;
  countUp: () => void;
  countDown: () => void;
  countReset: () => void;
  display: any;
  countUp10: () => void;
  countDown10: () => void;
  countUp100: () => void;
  countDown100: () => void;
  countUp1000: () => void;
  countDown1000: () => void;
};
export const Counter: FC<Props> = (props): any => {
  const {
    count,
    countUp,
    countDown,
    countReset,
    display,
    countUp10,
    countDown10,
    countUp100,
    countDown100,
    countUp1000,
    countDown1000,
  } = props;

  return (
    <>
      <p>
        カウント：{display}({count})
      </p>
      <br />
      <button onClick={countUp}>+1</button>
      <button onClick={countDown}>-1</button>
      <br />
      <button onClick={countUp10}>+10</button>
      <button onClick={countDown10}>-10</button>
      <br />
      <button onClick={countUp100}>+100</button>
      <button onClick={countDown100}>-100</button>
      <br />
      <button onClick={countUp1000}>+1000</button>
      <button onClick={countDown1000}>-1000</button>
      <br />
      <button onClick={countReset}>Reset</button>
    </>
  );
};
