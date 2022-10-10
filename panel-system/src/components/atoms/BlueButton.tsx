import { FC, memo } from 'react';
import { COLORS } from '../../modules/enums';
import { BaseButton } from './BaseButton';

type Props = {
  // choiceColor: (num: number) => void;
  onClick: () => void;
};

export const BlueButton: FC<Props> = memo((props) => {
  // export const BlueButton: FC = memo(() => {
  // const blueSet = () => {
  //   props.choiceColor(COLORS.BLUE);
  // };
  return (
    <div>
      <BaseButton strColor={'blue'} onClick={props.onClick} />
      {/* <BaseButton strColor={'blue'} /> */}
    </div>
  );
});
