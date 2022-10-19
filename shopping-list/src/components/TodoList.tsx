import { FC } from 'react';
import { todo } from '../types/todo';
import { TodoTitle } from './TodoTitle';
import { TodoItem } from './TodoItem';
import { As, List } from '@chakra-ui/react';
import { fontSizeType } from '../types/fontSizeType';

type Props = {
  todoList: todo[];
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
  title: string;
  as: As<any> | undefined;
  fontSize: fontSizeType;
};

export const TodoList: FC<Props> = (props) => {
  const {
    todoList,
    toggleTodoListItemStatus,
    deleteTodoListItem,
    title,
    as,
    fontSize,
  } = props;
  return (
    <>
      {/* todoListの配列の中身がからの場合は、見出しとTODOリストの両方を表示させない */}
      {TodoTitle.length !== 0 && (
        <>
          {/* mtはmargin-topのStyle Props ショートハンド */}
          {/* margin-topは12 = 3rem = 48px */}
          <TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
          {/* Listコンポーネントは、ListItemを表示するために使用される */}
          {/* Listコンポーネントは、デフォルトでは<ul>タグを出力する */}
          {/* wはwidthのStyle Propsショートハンド */}
          {/* widthはfull = 100% */}
          <List w="full">
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
          </List>
        </>
      )}
    </>
  );
};
