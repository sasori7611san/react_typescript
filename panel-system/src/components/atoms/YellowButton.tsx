import { FC, memo } from 'react';
import { BaseButton } from './BaseButton';

type Props = {
  choiceColor: (num: number) => void;
};
export const YellowButton: FC<Props> = memo((props) => {
  const yellowSet = () => {
    props.choiceColor(1);
  };
  return (
    <div>
      <BaseButton strColor={'yellow'} onClick={() => yellowSet} />
    </div>
  );
});
