import { FC, memo } from 'react';
import styled from 'styled-components';
type Props = {
  strColor: string;
  onClick: () => void;
};
export const BaseButton: FC<Props> = memo((props) => {
  // // 集計を受け取る（デフォルトは全部0とする）
  // const panelTotal = inject(totalKey, reactive<Total>({
  //   redSheet: 0,
  //   greenSheet: 0,
  //   whiteSheet: 0,
  //   blueSheet: 0
  // }))
  // 集計表示用変数（文字列:黄色を非表示にするため）
  // const sheetTotal = ref<string>('')
  // watchEffect(() => {
  //   switch (color.value) {
  //     case 'red':
  //       sheetTotal.value = panelTotal.redSheet.toString()
  //       break
  //     case 'green':
  //       sheetTotal.value = panelTotal.greenSheet.toString()
  //       break
  //     case 'white':
  //       sheetTotal.value = panelTotal.whiteSheet.toString()
  //       break
  //     case 'blue':
  //       sheetTotal.value = panelTotal.blueSheet.toString()
  //       break
  //     default:
  //       break
  //   }
  // })
  switch (props.strColor) {
    case 'red':
      // return <BaseRed />;
      return <BaseRed onClick={props.onClick} />;
    case 'green':
      // return <BaseGreen />;
      return <BaseGreen onClick={props.onClick} />;
    case 'white':
      // return <BaseWhite />;
      return <BaseWhite onClick={props.onClick} />;
    case 'blue':
      // return <BaseBlue />;
      return <BaseBlue onClick={props.onClick} />;
    case 'yellow':
      // return <BaseYellow />;
      return <BaseYellow onClick={props.onClick} />;
    default:
      // return <BaseGray />;
      return <BaseGray onClick={props.onClick} />;
  }
});
const BaseRed = styled.button`
  margin: 5px;
  width: 50px;
  height: 50px;
  background: red;
`;
const BaseGreen = styled.button`
  margin: 5px;
  width: 50px;
  height: 50px;
  background: green;
`;
const BaseWhite = styled.button`
  margin: 5px;
  width: 50px;
  height: 50px;
  background: white;
`;
const BaseBlue = styled.button`
  margin: 5px;
  width: 50px;
  height: 50px;
  background: blue;
`;
const BaseYellow = styled.button`
  margin: 5px;
  width: 50px;
  height: 50px;
  background: yellow;
`;
const BaseGray = styled.button`
  margin: 5px;
  width: 50px;
  height: 50px;
  background: gray;
`;
