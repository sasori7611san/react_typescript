import { FC } from 'react';
import { todo } from '../types/todo';

type Props = {
  todo: todo;
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
};

export const TodoItem: FC<Props> = (props) => {
  const { todo, toggleTodoListItemStatus, deleteTodoListItem } = props;
  // TODOの状態(完了/未完了)を反転させるtoggleTodoListItemStatus関数を実行させる
  // 実行させるhandleToggleTodoListItemStatus関数を宣言
  const handleToggleTodoListItemStatus = () =>
    toggleTodoListItemStatus(todo.id, todo.done);
  // TODOを削除するdeleteTodoListItem関数を実行させる
  // handleDeleteTodoListItem関数を宣言
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  return (
    <li>
      {/* TODOの内容 */}
      {todo.content}
      {/* ボタンクリックで handleToggleTodoListItemStatus関数を実行*/}
      {/* ボタンクリックでTODOの状態(完了/未完了)が反転 */}
      <button onClick={handleToggleTodoListItemStatus}>
        {todo.done ? '未完了リストへ' : '完了リストへ'}
      </button>
      {/* ボタンクリックで handleDeleteTodoListItem関数を実行*/}
      {/* ボタンクリックでTODOの状態(完了/未完了)が反転 */}
      <button onClick={handleDeleteTodoListItem}>削除</button>
    </li>
  );
};
