import { useState, useEffect } from 'react';
// 一意なidを生成するulidをimport
import { ulid } from 'ulid';
// src/apis/todos.ts内で宣言してexportしておいた関数を
// importすることによりuseTodo.ts内で利用できるようにする
// getAllTodosData、addTodoData、deleteTodoData、updateTodoDataを
// todoDataオブジェクトとしてまとめてimport
import * as todoData from '../apis/todos';
import { todo } from '../types/todo';

// useTodo()カスタムフックを外部ファイルで利用できるようにする為exportしておく
export const useTodo = () => {
  // todoListは現在のTODOの状態
  // setTodoListは現在のtodoListの状態を更新するための関数
  // todoListの初期値に空の配列をセット
  // const [todoList, setTodoList] = useState([]);
  const [todoList, setTodoList] = useState<todo[]>([]);

  useEffect(() => {
    // useEffect()を利用することによりコンポーネントのマウント後
    // またはアンマウント後に処理を実行する
    // モックサーバーからTODOデータを取得するgetAllTodosData()を実行
    todoData.getAllTodosData().then((todo) => {
      // モックサーバーからTODOデータを取得後、取得したTODOデータを反転
      // させておくことで、TODOを追加した順に上から表示させることができる
      // Array.reverse()と、スプレッド構文[ES2015]をくみあわせて
      // 並び替えを行うことで、もとの配列要素の並び順に影響することなく
      // 新しい配列を作成できる
      // todoListの状態(state)を更新
      setTodoList([...todo].reverse());
    });
  }, []);

  // todoListItemのdone(完了/未完了)の真偽値を反転させて
  // 更新するtoggleTodoListItemStatus関数を宣言
  const toggleTodoListItemStatus = (id: string, done: boolean) => {
    // find()は配列から条件に合う値を見つけて、最初にtrueになった
    // 要素の値を返し、要素を見つけた時点で処理を停止する
    // done(完了/未完了)の状態を反転させたいtodoListItemのidを見つけ、
    // 条件に一致するtodoItemを返す
    const todoItem = todoList.find((item) => item.id === id);
    if (todoItem !== undefined) {
      // 現在のtodoListの中から、条件に一致した要素であるtodoItemの
      // done(完了/未完了)を反転させる
      const newTodoItem = { ...todoItem, done: !done };

      // updateTodoData()を利用して指定されたidのTODOを更新したら、
      // 続いてtodoListの状態も更新する
      todoData.updateTodoData(parseInt(id), newTodoItem).then((updatedTodo) => {
        const newTodoList = todoList.map((item) =>
          // idが異なる場合、todoListから取り出したitemをそのまま返し、
          // 同じ場合はdone(完了/未完了)の状態を反転させたupdatedtodoを
          // 返して新しい配列newTodoListを作成
          item.id !== updatedTodo.id ? item : updatedTodo
        );

        // todoListの現在の状態(state)をnewTodoListの内容に更新
        setTodoList(newTodoList);
      });
    }
  };

  // 新規TODOを追加するaddTodoListItem関数を宣言
  const addTodoListItem = (todoContent: string) => {
    const newTodoItem = {
      // contentは追加するTODOの内容
      content: todoContent,

      // idにulidで生成された一意な値をセット
      id: ulid(),

      // 追加されたTODOはデフォルトで未完了状態にセット
      done: false,
    };

    // addTodoData()をりようしてTODOを更新したら、
    // 続いてtodoListの状態も更新
    // addTodoData()は新規TODOを追加する関数
    return todoData.addTodoData(newTodoItem).then((addTodo) => {
      // todoListの状態(state)をnewTodoItemが追加された状態に更新
      setTodoList([addTodo, ...todoList]);
    });
  };
  // TODOを削除するdeleteTodoListItem関数を宣言
  const deleteTodoListItem = (id: string) => {
    // todoDataを更新したらtodoListの状態も更新
    // deleteTodoData()を利用して指定されたidのTODOを削除したら、
    // 続いてtodoListの状態も更新する
    // deleteTodoData()は一致したidのTODOを削除する関数
    todoData.deleteTodoData(id).then((deleteListItemId) => {
      const newTodoList = todoList.filter(
        // 削除したTODOとidが一致しないTODOをフィルタリングして
        // 新しい配列を返す
        // idが一致したTODOは除外される
        (item) => item.id !== deleteListItemId
      );
      // todoListの状態(state)を更新
      // todoListの状態(state)を指定されたidのTODOが削除された状態に更新
      setTodoList(newTodoList);
    });
  };
  // 作成した関数を返す
  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };
};
