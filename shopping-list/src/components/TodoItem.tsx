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
  // TODOの状態(完了/未完了)を反転させるtoggleTodoListItemStatus関数を実行させる
  // 実行させるhandleToggleTodoListItemStatus関数を宣言
  const handleToggleTodoListItemStatus = () =>
    toggleTodoListItemStatus(todo.id, todo.done);
  // TODOを削除するdeleteTodoListItem関数を実行させる
  // handleDeleteTodoListItem関数を宣言
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);
  const label = todo.done ? '未完了リストへ' : '完了リストへ';
  const setColorScheme = todo.done ? 'pink' : 'blue';

  return (
    // ListItemコンポーネントは、liタグで利用できるスタイルを利用できる
    // paddingは4 = 1rem = 16px
    // margin-topは4 = 1rem = 16px
    // background: white
    // border-radiusはmd = 0.375rem = 6px
    // background-colorはデフォルトテーマのcolorで、gray.300
    <ListItem
      borderWidth="1px"
      p="4"
      mt="4"
      bg="white"
      borderRadius="md"
      backgroundColor="gray.300"
    >
      {/* TODOの内容 */}
      {/* Chakra UIのTextコンポーネントはデフォルトでは<p>タグを出力する */}
      {/* margin-bottomは6 = 1.5rem = 24px */}
      <Text mb="6">{todo.content}</Text>
      {/* Chakra UIのFlexでflaxレイアウト */}
      <Flex align="center" justify="flex-end">
        {/* ボタンクリックで handleToggleTodoListItemStatus関数を実行*/}
        {/* ボタンクリックでTODOの状態(完了/未完了)が反転 */}
        {/* Buttonの色はcolorSchemeで設定できる */}
        {/* 完了ならpink未完了ならblue */}
        {/* variant(ボタンのスタイル)には"link","outline","solid","ghost","unstyled"がある */}
        {/* デフォルトは"solid" */}
        {/* Buttonのsizeには、"xs","sm","md","lg"がある */}
        <Button
          colorScheme={setColorScheme}
          variant="outline"
          size="sm"
          onClick={handleToggleTodoListItemStatus}
        >
          {label}
        </Button>
        {/* ボタンクリックで handleDeleteTodoListItem関数を実行*/}
        {/* ボタンクリックでTODOの状態(完了/未完了)が反転 */}
        {/* Chakra iconのDeleteIcon */}
        {/* variant(ボタンのスタイル)には"link","outline","solid","ghost","unstyled"がある */}
        <IconButton
          icon={<DeleteIcon />}
          variant="unstyled"
          aria-label="delete"
          onClick={handleDeleteTodoListItem}
        >
          削除
        </IconButton>
      </Flex>
    </ListItem>
  );
};
