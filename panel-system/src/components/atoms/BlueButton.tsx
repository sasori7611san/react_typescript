import { FC, memo } from 'react';
import { BaseButton } from './BaseButton';

type Props = {
  choiceColor: (num: number) => void;
};

export const BlueButton: FC<Props> = memo((props) => {
  const blueSet = () => {
    props.choiceColor(5);
  };
  return (
    <div>
      <BaseButton strColor={'blue'} onClick={() => blueSet} />
    </div>
  );
});
