import { FC, memo } from 'react';
import { COLORS } from '../../modules/enums';
import { BaseButton } from './BaseButton';

type Props = {
  // choiceColor: (num: number) => void;
  onClick: () => void;
};
export const RedButton: FC<Props> = memo((props) => {
  // export const RedButton: FC = memo(() => {
  // const redSet = () => {
  //   props.choiceColor(COLORS.RED);
  // };
  return (
    <div>
      <BaseButton strColor={'red'} onClick={props.onClick} />
      {/* <BaseButton strColor={'red'} /> */}
    </div>
  );
});
