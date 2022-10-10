import { FC, memo } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../modules/enums';
import { BlueButton } from '../atoms/BlueButton';
import { GreenButton } from '../atoms/GreenButton';
import { RedButton } from '../atoms/RedButton';
import { WhiteButton } from '../atoms/WhiteButton';
import { YellowButton } from '../atoms/YellowButton';

type Props = {
  choiceColor: (num: number) => void;
};

export const ChoiceColor: FC<Props> = memo((props) => {
  // 各色の処理
  const redSet = (): void => {
    props.choiceColor(COLORS.RED);
  };
  const greenSet = (): void => {
    props.choiceColor(COLORS.GREEN);
  };
  const whiteSet = (): void => {
    props.choiceColor(COLORS.WHITE);
  };
  const blueSet = (): void => {
    props.choiceColor(COLORS.BLUE);
  };
  const yellowSet = (): void => {
    props.choiceColor(COLORS.YELLOW);
  };
  return (
    <>
      <div>
        <Play>
          {/* <RedButton choiceColor={props.choiceColor} />
          <GreenButton choiceColor={props.choiceColor} />
          <WhiteButton choiceColor={props.choiceColor} />
          <BlueButton choiceColor={props.choiceColor} /> */}
          <RedButton onClick={redSet} />
          <GreenButton onClick={greenSet} />
          <WhiteButton onClick={whiteSet} />
          <BlueButton onClick={blueSet} />
        </Play>
        <Play>
          {/* <YellowButton choiceColor={props.choiceColor}></YellowButton> */}
          <YellowButton onClick={yellowSet}></YellowButton>
        </Play>
        <p>更新で最初からに戻ります。</p>
      </div>
    </>
  );
});

const Play = styled.div`
  /* 横に並べ、中央揃えにする */
  display: flex;
  justify-content: center;
`;
