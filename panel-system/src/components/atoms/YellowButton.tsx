import { FC, memo } from 'react';
import { COLORS } from '../../modules/enums';
import { BaseButton } from './BaseButton';

type Props = {
  // choiceColor: (num: number) => void;
  onClick: () => void;
};
export const YellowButton: FC<Props> = memo((props) => {
  // export const YellowButton: FC = memo(() => {
  // const yellowSet = () => {
  //   props.choiceColor(COLORS.YELLOW);
  // };
  return (
    <div>
      <BaseButton strColor={'yellow'} onClick={props.onClick} />
      {/* <BaseButton strColor={'yellow'} /> */}
    </div>
  );
});
