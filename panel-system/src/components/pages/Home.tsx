import { createContext, FC, memo, useContext, useState } from 'react';
import { choiceColorSet } from '../../modules/choiceColorSet';
import { COLORS } from '../../modules/enums';
import {
  downPanelChenge,
  leftDownPanelChenge,
  leftPanelChenge,
  leftUpPanelChenge,
  panelChangeExec,
  rightDownPanelChenge,
  rightPanelChenge,
  rightUpPanelChenge,
  upPanelChenge,
} from '../../modules/panelChangeExec';
import { panelCheck } from '../../modules/panelCheck';
import {
  downSandCheck,
  leftDownSandCheck,
  leftSandCheck,
  leftUpSandCheck,
  rightDownSandCheck,
  rightSandCheck,
  rightUpSandCheck,
  upSandCheck,
} from '../../modules/sandCheck';
import { ColorType, PanelChange, Total } from '../../modules/types';
import { PanelContext } from '../../provider/PanelProvider';
import { ChoiceColor } from '../organisms/ChoiceColor';
import { MessagePlace } from '../organisms/MessagePlace';
import { PanelScreen } from '../organisms/PanelScreen';

// 使用色番号
let colorNum = 0;
// パネル集計用変数
let panelTotal: Total = {
  redSheet: 0,
  greenSheet: 0,
  whiteSheet: 0,
  blueSheet: 0,
};
// パネル集計用変数
let colorType: ColorType = {
  colorNum: 0,
  colorStr: '灰',
};

// context宣言
export const SheetsContext = createContext({} as Total);

export const Home: FC = memo(() => {
  // panel使用
  let panel = useContext(PanelContext);
  // パネル格納
  let panelresult: PanelChange = {
    panel: panel,
    total: panelTotal,
  };
  // 使用メッセージ
  const [strColor, setStrColor] = useState<string>('');
  const [message, setMessage] = useState<string>(
    '必ず入力する色を選んでから番号を押してください'
  );
  const [panelNo, setPanelNo] = useState<string>('');

  // 色の選択・表示用変数へ代入（num:色番号）
  const choiceColor = (num: number): void => {
    // 色の選択を反映
    colorType = choiceColorSet(num);
    colorNum = colorType.colorNum;
    setStrColor(colorType.colorStr);
    // 取れるパネルを確認
    setPanelNo(panelCheck(panel, colorNum));
  };
  // パネル取得（num:パネル番号）
  const action = (num: number): void => {
    // console.log(`colorNum:${colorNum}`);
    // 縦要素番号
    let verNo = 0;
    // 横要素番号
    let sideNo = 0;
    // パネル取得ロジック
    if (num <= 25 && num > 0) {
      // 取得配列要素取得
      Math.floor(num / 5) < 5 && num % 5 !== 0
        ? (verNo = Math.floor(num / 5) + 1)
        : (verNo = Math.floor(num / 5));
      num % 5 === 0 ? (sideNo = 5) : (sideNo = num % 5);
      if (panel[verNo][sideNo].check) {
        // パネルに色を設定し、次取れる箇所や枚数を集計
        panelresult = panelChangeExec(
          colorNum,
          verNo,
          sideNo,
          panel,
          panelTotal
        );
        panel = panelresult.panel;
        panelTotal = panelresult.total;
        setPanelNo(panelCheck(panel, colorNum));
        // 挟まったパネルの色を変える
        // 起点の色
        const currentColorNo = panel[verNo][sideNo].colorNo;
        // パネル変わるフラグ
        let panelChange = false;
        // 色判定（0:灰色、1:黄色は除外）
        if (currentColorNo >= COLORS.RED) {
          // パネル変化に要する秒数（ミリ秒単位）
          const time = 800;
          // 挟まる枚数
          let sheet = 0;
          // パネル更新（各方向で確認）
          // 1.変わるパネルがあるか判定し、あるならpanelChangeをtrueにする
          // 2.panelChangeがtrueならパネル更新する
          // 上方向確認
          panelChange = upSandCheck(
            panel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            sheet = upPanelChenge(
              currentColorNo,
              verNo,
              sideNo,
              panel,
              panelTotal,
              sheet
            );
            panelChange = false;
          }
          // 下方向確認
          panelChange = downSandCheck(
            panel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            sheet = downPanelChenge(
              currentColorNo,
              verNo,
              sideNo,
              panel,
              panelTotal,
              sheet
            );
            panelChange = false;
          }
          // 左方向確認
          panelChange = leftSandCheck(
            panel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            sheet = leftPanelChenge(
              currentColorNo,
              verNo,
              sideNo,
              panel,
              panelTotal,
              sheet
            );
            panelChange = false;
          }
          // 右方向確認
          panelChange = rightSandCheck(
            panel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            sheet = rightPanelChenge(
              currentColorNo,
              verNo,
              sideNo,
              panel,
              panelTotal,
              sheet
            );
            panelChange = false;
          }
          // 左斜め上方向確認
          panelChange = leftUpSandCheck(
            panel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            sheet = leftUpPanelChenge(
              currentColorNo,
              verNo,
              sideNo,
              panel,
              panelTotal,
              sheet
            );
            panelChange = false;
          }
          // 左斜め下方向確認
          panelChange = leftDownSandCheck(
            panel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            sheet = leftDownPanelChenge(
              currentColorNo,
              verNo,
              sideNo,
              panel,
              panelTotal,
              sheet
            );
            panelChange = false;
          }
          // 右斜め上方向確認
          panelChange = rightUpSandCheck(
            panel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            sheet = rightUpPanelChenge(
              currentColorNo,
              verNo,
              sideNo,
              panel,
              panelTotal,
              sheet
            );
            panelChange = false;
          }
          // 右斜め下方向確認
          panelChange = rightDownSandCheck(
            panel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            sheet = rightDownPanelChenge(
              currentColorNo,
              verNo,
              sideNo,
              panel,
              panelTotal,
              sheet
            );
            panelChange = false;
          }
          // 取れるパネルを再チェック
          window.setTimeout(panelCheck, time * sheet, panel, colorNum);
        }
        // パネル状況変わるたびに取れるパネルをチェック
        // watch(panelTotal, () => {
        //   panelNo = panelCheck(panel, colorNum)
        // })
        setMessage('');
      } else {
        // メッセージ出力（入れないことを表示）
        setMessage('今は取れません');
      }
      // console.log(
      //   `${panel[1][1].colorNo}${panel[1][2].colorNo}${panel[1][3].colorNo}${panel[1][4].colorNo}${panel[1][5].colorNo}`
      // );
      // console.log(
      //   `${panel[2][1].colorNo}${panel[2][2].colorNo}${panel[2][3].colorNo}${panel[2][4].colorNo}${panel[2][5].colorNo}`
      // );
      // console.log(
      //   `${panel[3][1].colorNo}${panel[3][2].colorNo}${panel[3][3].colorNo}${panel[3][4].colorNo}${panel[3][5].colorNo}`
      // );
      // console.log(
      //   `${panel[4][1].colorNo}${panel[4][2].colorNo}${panel[4][3].colorNo}${panel[4][4].colorNo}${panel[4][5].colorNo}`
      // );
      // console.log(
      //   `${panel[5][1].colorNo}${panel[5][2].colorNo}${panel[5][3].colorNo}${panel[5][4].colorNo}${panel[5][5].colorNo}`
      // );
    }
  };

  return (
    <div>
      <PanelScreen action={(num: number) => action(num)} />
      <MessagePlace strColor={strColor} message={message} panelNo={panelNo} />
      <SheetsContext.Provider value={panelTotal}>
        <ChoiceColor choiceColor={(num: number) => choiceColor(num)} />
      </SheetsContext.Provider>
    </div>
  );
});
