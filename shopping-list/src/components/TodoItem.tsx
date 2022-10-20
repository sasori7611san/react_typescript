import { FC } from 'react';
import { todo } from '../types/todo';
import { ListItem, Text, Flex, Button, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

type Props = {
  todo: todo;
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
};

export const TodoItem: FC<Props> = (props) => {
  const { todo, toggleTodoListItemStatus, deleteTodoListItem } = props;
  // 買うもの状態(完了/未完了)を反転させるtoggleTodoListItemStatus関数を実行させる
  // 実行させるhandleToggleTodoListItemStatus関数を宣言
  const handleToggleTodoListItemStatus = () =>
    toggleTodoListItemStatus(todo.id, todo.done);
  // TODOを削除するdeleteTodoListItem関数を実行させる
  // handleDeleteTodoListItem関数を宣言
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);
  const label = todo.done ? '買うものリストへ' : '購入済みリストへ';
  const setColorScheme = todo.done ? 'pink' : 'blue';

  return (
    // ListItemコンポーネントは、liタグで利用できるスタイルを利用できる
    <ListItem
      borderWidth="1px"
      p="4"
      mt="4"
      bg="white"
      borderRadius="md"
      backgroundColor="gray.300"
    >
      {/* 買うもの内容 */}
      {/* Chakra UIのTextコンポーネントはデフォルトでは<p>タグを出力する */}
      <Text mb="6">{todo.content}</Text>
      {/* Chakra UIのFlexでflaxレイアウト */}
      <Flex align="center" justify="flex-end">
        {/* ボタンクリックで handleToggleTodoListItemStatus関数を実行*/}
        {/* ボタンクリックで買うもの状態(完了/未完了)が反転 */}
        {/* Buttonの色はcolorSchemeで設定できる */}
        {/* 完了ならpink未完了ならblue */}
        <Button
          colorScheme={setColorScheme}
          variant="outline"
          size="sm"
          onClick={handleToggleTodoListItemStatus}
        >
          {label}
        </Button>
        {/* ボタンクリックで handleDeleteTodoListItem関数を実行*/}
        {/* ボタンクリックで買うもの状態(完了/未完了)が反転 */}
        {/* Chakra iconのDeleteIcon */}
        <IconButton
          icon={<DeleteIcon />}
          variant="unstyled"
          aria-label="delete"
          onClick={handleDeleteTodoListItem}
        />
      </Flex>
    </ListItem>
  );
};
