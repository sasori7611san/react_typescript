import { FC, memo } from 'react';
import { BaseButton } from './BaseButton';

type Props = {
  choiceColor: (num: number) => void;
};
export const RedButton: FC<Props> = memo((props) => {
  const redSet = () => {
    props.choiceColor(2);
  };
  return (
    <div>
      <BaseButton strColor={'red'} onClick={() => redSet} />
    </div>
  );
});
