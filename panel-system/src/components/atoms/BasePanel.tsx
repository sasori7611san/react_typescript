import { FC, memo, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../modules/enums';
import { Panel } from '../../modules/types';

type Props = {
  panelNum: number;
  action: () => void;
  panelColor: Panel[][];
};
// css用文字列
let bgColor = 'gray';

export const BasePanel: FC<Props> = memo((props) => {
  const { panelNum, action, panelColor } = props;
  // 縦要素番号
  let verNum = 0;
  // 横要素番号
  let sideNum = 0;
  // 取得配列要素取得
  Math.floor(panelNum / 5) < 5 && panelNum % 5 !== 0
    ? (verNum = Math.floor(panelNum / 5) + 1)
    : (verNum = Math.floor(panelNum / 5));
  panelNum % 5 === 0 ? (sideNum = 5) : (sideNum = panelNum % 5);

  // switch (panelColor[verNum][sideNum].colorNo) {
  //   case COLORS.YELLOW:
  //     bgColor = 'yellow';
  //     break;
  //   case COLORS.RED:
  //     bgColor = 'red';
  //     break;
  //   case COLORS.GREEN:
  //     bgColor = 'green';
  //     break;
  //   case COLORS.WHITE:
  //     bgColor = 'white';
  //     break;
  //   case COLORS.BLUE:
  //     bgColor = 'blue';
  //     break;
  //   default:
  //     bgColor = 'gray';
  //     break;
  // }
  switch (panelColor[verNum][sideNum].colorNo) {
    case COLORS.YELLOW:
      return (
        <YellowPanels
          onClick={() => {
            action();
          }}
        >
          {panelNum}
        </YellowPanels>
      );
    case COLORS.RED:
      return (
        <RedPanels
          onClick={() => {
            action();
          }}
        >
          {panelNum}
        </RedPanels>
      );
    case COLORS.GREEN:
      return (
        <GreenPanels
          onClick={() => {
            action();
          }}
        >
          {panelNum}
        </GreenPanels>
      );
    case COLORS.WHITE:
      return (
        <WhitePanels
          onClick={() => {
            action();
          }}
        >
          {panelNum}
        </WhitePanels>
      );
    case COLORS.BLUE:
      return (
        <BluePanels
          onClick={() => {
            action();
          }}
        >
          {panelNum}
        </BluePanels>
      );
    default:
      return (
        <Panels
          onClick={() => {
            action();
          }}
        >
          {panelNum}
        </Panels>
      );
  }
  // return (
  // <>
  //   <div>
  //     <Button
  //       onClick={() => {
  //         action();
  //       }}
  //     >
  //       {panelNum}
  //     </Button>
  //   </div>
  // </>
  // <Panels
  //   onClick={() => {
  //     action();
  //   }}
  // >
  //   {panelNum}
  // </Panels>
  // );
});

const Panels = styled.button`
  width: 60px;
  height: 60px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  background-color: gray;
  // background-color: ${bgColor};
`;
const YellowPanels = styled.button`
  width: 60px;
  height: 60px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  background-color: Yellow;
`;
const RedPanels = styled.button`
  width: 60px;
  height: 60px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  background-color: red;
`;
const GreenPanels = styled.button`
  width: 60px;
  height: 60px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  background-color: green;
`;
const WhitePanels = styled.button`
  width: 60px;
  height: 60px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  background-color: white;
`;
const BluePanels = styled.button`
  width: 60px;
  height: 60px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  background-color: blue;
`;
