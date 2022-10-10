import { FC, memo } from 'react';
import { COLORS } from '../../modules/enums';
import { BaseButton } from './BaseButton';

type Props = {
  // choiceColor: (num: number) => void;
  onClick: () => void;
};
export const GreenButton: FC<Props> = memo((props) => {
  // export const GreenButton: FC = memo(() => {
  // const greenSet = () => {
  //   props.choiceColor(COLORS.GREEN);
  // };
  return (
    <div>
      <BaseButton strColor={'green'} onClick={props.onClick} />
      {/* <BaseButton strColor={'green'} /> */}
    </div>
  );
});
