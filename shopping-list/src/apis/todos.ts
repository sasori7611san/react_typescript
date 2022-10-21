// 作成したモックサーバーとの通信にaxiosを利用する
import axios from "axios";

import { todo } from "../types/todo"

// ローカルに準備したモックサーバーのURL
const todoDataUrl = 'http://localhost:3100/todos';

// axios.get()でGETリクエストを送信
// サーバー上のすべてのTODO(todos)を取得するgetAllTodosData関数を宣言
// 他ファイルでgetAllTodosData()を利用できるようにする為
// exportしておく
export const getAllTodosData = async () => {
  // 戻される値はすべてresponseに保存される
  const response = await axios.get(todoDataUrl);
  // 通信後、response.dataでレスポンスデータを返す
  return response.data;
};

// axios.post()で新たに買うものを追加する
// 買うものを追加するaddTodoData関数を宣言
// 他ファイルでaddTodoData()を利用できるようにする為exportしておく
export const addTodoData = async (todo: todo) => {
  // 第2引数に、送信したいデータを指定してPOST送信
  // サーバーに転送することで新規のデータを追加
  const response = await axios.post(todoDataUrl, todo);

  // 通信後、response.dataでレスポンスデータを返す
  return response.data;
};

// axios.delete()で一致したidの買うものを削除する
// 買うものを削除するdeleteTodoData関数を宣言
// 他ファイルでdeleteTodoData()を利用できるようにする為exportしておく
export const deleteTodoData = async (id: string) => {
  await axios.delete(`${todoDataUrl}/${id}`);

  // 通信後、削除した買うもののidを返す
  return id;
};

// axios.put()で一致したidのリストを更新する
// リストを更新するupdateTodoData関数を宣言
// 他ファイルでupdateTodoData()を利用できるようにする為exportしておく
export const updateTodoData = async (id: string, todo: todo) => {
  // 第2引数に、更新したいデータを渡す
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);

  // 通信後、response.dataでレスポンスデータを返す
  return response.data;
};

