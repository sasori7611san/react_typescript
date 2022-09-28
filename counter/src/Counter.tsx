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
  return (
    <>
      <p>
        カウント：{props.display}({props.count})
      </p>
      <br />
      <button onClick={props.countUp}>+1</button>
      <button onClick={props.countDown}>-1</button>
      <br />
      <button onClick={props.countUp10}>+10</button>
      <button onClick={props.countDown10}>-10</button>
      <br />
      <button onClick={props.countUp100}>+100</button>
      <button onClick={props.countDown100}>-100</button>
      <br />
      <button onClick={props.countUp1000}>+1000</button>
      <button onClick={props.countDown1000}>-1000</button>
      <br />
      <button onClick={props.countReset}>Reset</button>
    </>
  );
};
