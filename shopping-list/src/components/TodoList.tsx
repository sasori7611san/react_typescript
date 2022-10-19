import { TodoTitle } from './TodoTitle';
import { TodoItem } from './TodoItem';
import { FC } from 'react';
import { todo } from '../types/todo';

type Props = {
  todoList: todo[];
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
  title: string;
  as: string;
};

export const TodoList: FC<Props> = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  title,
  as,
}) => {
  return (
    <>
      {/* todoListの配列の中身がからの場合は、見出しとTODOリストの両方を表示させない */}
      {TodoTitle.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} />
          <ul>
            {/* map()を利用してtodoListの要素を1つひとつ取り出す */}
            {todoList.map((todo) => (
              // TodoItemに一意なIDを key属性の値として付与
              // todoListから取り出したtodoを子コンポーネントへpropsで渡す
              <TodoItem
                todo={todo}
                key={todo.id}
                toggleTodoListItemStatus={toggleTodoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};
