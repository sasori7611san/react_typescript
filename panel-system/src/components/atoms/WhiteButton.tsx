import { FC, memo } from 'react';
import { BaseButton } from './BaseButton';

type Props = {
  choiceColor: (num: number) => void;
};

export const WhiteButton: FC<Props> = memo((props) => {
  const whiteSet = () => {
    props.choiceColor(4);
  };
  return (
    <div>
      <BaseButton strColor={'white'} onClick={() => whiteSet} />
    </div>
  );
});
