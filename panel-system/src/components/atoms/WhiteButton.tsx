import { FC, memo } from 'react';
import { COLORS } from '../../modules/enums';
import { BaseButton } from './BaseButton';

type Props = {
  // choiceColor: (num: number) => void;
  onClick: () => void;
};

export const WhiteButton: FC<Props> = memo((props) => {
  // export const WhiteButton: FC = memo(() => {
  // const whiteSet = () => {
  //   props.choiceColor(COLORS.WHITE);
  // };
  return (
    <div>
      <BaseButton strColor={'white'} onClick={props.onClick} />
      {/* <BaseButton strColor={'white'} /> */}
    </div>
  );
});
