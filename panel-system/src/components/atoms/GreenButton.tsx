import { FC, memo } from 'react';
import { BaseButton } from './BaseButton';

type Props = {
  choiceColor: (num: number) => void;
};

export const GreenButton: FC<Props> = memo((props) => {
  const greenSet = () => {
    props.choiceColor(3);
  };
  return (
    <div>
      <BaseButton strColor={'green'} onClick={() => greenSet} />
    </div>
  );
});
