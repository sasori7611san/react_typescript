import { COLORS } from './enums'
import { Panel } from './types'
import { getStrNo } from './getStrNo'
import { createRef, useRef } from 'react'

// パネル色の設定（col:色番号,v:縦番号,s:横番号,panel:使用パネル）
// export const colorSet = (col: number, v: number, s: number, panel: Panel[][]): void => {
export const colorSet = (col: number, v: number, s: number, panel: Panel[][]): Panel[][] => {
  // // idを文字列に変換
  // const strId = getStrNo(v, s)
  // // パネルに色を反映
  // const elem = document.getElementById(strId)
  // if (elem !== null) {
  //   console.log('colorSetの確認')
  //   switch (col) {
  //     case 1:
  //       panel[v][s].colorNo = COLORS.YELLOW
  //       elem.style.backgroundColor = 'yellow'
  //       break
  //     case 2:
  //       panel[v][s].colorNo = COLORS.RED
  //       elem.style.backgroundColor = 'red'
  //       break
  //     case 3:
  //       panel[v][s].colorNo = COLORS.GREEN
  //       elem.style.backgroundColor = 'green'
  //       break
  //     case 4:
  //       panel[v][s].colorNo = COLORS.WHITE
  //       elem.style.backgroundColor = 'white'
  //       break
  //     case 5:
  //       panel[v][s].colorNo = COLORS.BLUE
  //       elem.style.backgroundColor = 'blue'
  //       break
  //     default:
  //       panel[v][s].colorNo = COLORS.GRAY
  //       elem.style.backgroundColor = 'gray'
  //       break
  //   }
  // }
  // パネルに色を反映
  console.log('colorSetの確認')
  switch (col) {
    case 1:
      panel[v][s].colorNo = COLORS.YELLOW
      break
    case 2:
      panel[v][s].colorNo = COLORS.RED
      break
    case 3:
      panel[v][s].colorNo = COLORS.GREEN
      break
    case 4:
      panel[v][s].colorNo = COLORS.WHITE
      break
    case 5:
      panel[v][s].colorNo = COLORS.BLUE
      break
    default:
      panel[v][s].colorNo = COLORS.GRAY
      break
  }
  return panel
}
