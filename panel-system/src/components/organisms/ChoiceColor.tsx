import { FC, memo } from 'react';
import styled from 'styled-components';
import { BlueButton } from '../atoms/BlueButton';
import { GreenButton } from '../atoms/GreenButton';
import { RedButton } from '../atoms/RedButton';
import { WhiteButton } from '../atoms/WhiteButton';
import { YellowButton } from '../atoms/YellowButton';

type Props = {
  choiceColor: (num: number) => void;
};

export const ChoiceColor: FC<Props> = memo((props) => {
  return (
    <>
      <div>
        <Play>
          <RedButton choiceColor={props.choiceColor} />
          <GreenButton choiceColor={props.choiceColor} />
          <WhiteButton choiceColor={props.choiceColor} />
          <BlueButton choiceColor={props.choiceColor} />
        </Play>
        <Play>
          <YellowButton choiceColor={props.choiceColor}></YellowButton>
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
