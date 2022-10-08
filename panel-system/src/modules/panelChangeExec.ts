import { colorSet } from './colorSet'
import { COLORS } from './enums'
import { panelAggregation } from './panelAggregation'
import { Panel, Total } from './types'

// for文用変数
let i = 0
let j = 0
// パネル変化に要する秒数（ミリ秒単位）
const time = 800
// パネル変化枚数
let sheets = 0

// パネル更新
// 時間差をつけて更新させるためパネル変化数を引数から取得し、各方向で対象となるパネルに対して更新処理を行う
// パネル更新（上方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const upPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total, sheet: number): number => {
  sheets = sheet
  for (i = v - 1; i >= 0; i--) {
    if (pan[i][s].colorNo !== col && pan[i][s].colorNo > COLORS.YELLOW) {
      panelChangeTime(col, i, s, pan, total)
    } else {
      break
    }
  }
  return sheets
}
// パネル更新（下方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const downPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total, sheet: number): number => {
  sheets = sheet
  for (i = v + 1; i <= 6; i++) {
    if (pan[i][s].colorNo !== col && pan[i][s].colorNo > COLORS.YELLOW) {
      panelChangeTime(col, i, s, pan, total)
    } else {
      break
    }
  }
  return sheets
}
// パネル更新（左方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const leftPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total, sheet: number): number => {
  sheets = sheet
  for (i = s - 1; i >= 0; i--) {
    if (pan[v][i].colorNo !== col && pan[v][i].colorNo > COLORS.YELLOW) {
      panelChangeTime(col, v, i, pan, total)
    } else {
      break
    }
  }
  return sheets
}
// パネル更新（右方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const rightPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total, sheet: number): number => {
  sheets = sheet
  for (i = s + 1; i <= 6; i++) {
    if (pan[v][i].colorNo !== col && pan[v][i].colorNo > COLORS.YELLOW) {
      panelChangeTime(col, v, i, pan, total)
    } else {
      break
    }
  }
  return sheets
}
// パネル更新（左斜め上方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const leftUpPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total, sheet: number): number => {
  sheets = sheet
  for (i = v - 1, j = s - 1; i >= 0 || j >= 0; i--, j--) {
    if (pan[i][j].colorNo !== col && pan[i][j].colorNo > COLORS.YELLOW) {
      panelChangeTime(col, i, j, pan, total)
    } else {
      break
    }
  }
  return sheets
}
// パネル更新（左斜め下方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const leftDownPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total, sheet: number): number => {
  sheets = sheet
  for (i = v + 1, j = s - 1; i <= 6 || j >= 0; i++, j--) {
    if (pan[i][j].colorNo !== col && pan[i][j].colorNo > COLORS.YELLOW) {
      panelChangeTime(col, i, j, pan, total)
    } else {
      break
    }
  }
  return sheets
}
// パネル更新（右斜め上方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const rightUpPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total, sheet: number): number => {
  sheets = sheet
  for (i = v - 1, j = s + 1; i >= 0 || j <= 6; i--, j++) {
    if (pan[i][j].colorNo !== col && pan[i][j].colorNo > COLORS.YELLOW) {
      panelChangeTime(col, i, j, pan, total)
    } else {
      break
    }
  }
  return sheets
}
// パネル更新（右斜め下方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const rightDownPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total, sheet: number): number => {
  sheets = sheet
  for (i = v + 1, j = s + 1; i <= 6 || j <= 6; i++, j++) {
    if (pan[i][j].colorNo !== col && pan[i][j].colorNo > COLORS.YELLOW) {
      panelChangeTime(col, i, j, pan, total)
    } else {
      break
    }
  }
  return sheets
}
// パネル変更動作（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計）
export const panelChangeExec = (col: number, v: number, s: number, pan: Panel[][], total: Total): void => {
  colorSet(col, v, s, pan)
  panelAggregation(pan, total)
}
// 時間差でパネル動作。パネル枚数を加算し時間差が発生させる（col:対象色番号,v:縦番号,s:横番号,pan:パネルtotal:パネル集計）
const panelChangeTime = (col: number, v: number, s: number, pan: Panel[][], total: Total): void => {
  // 枚数を追加
  sheets++
  window.setTimeout(panelChangeExec, time * sheets, col, v, s, pan, total)
}
