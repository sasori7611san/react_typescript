import { useRef } from 'react';
import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { TodoTitle } from './TodoTitle';
import { Container } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function App() {
  // useTodo()カスタムフックで作成したtodoList, addTodoListItem, toggleTodoListItemStatus, deleteTodoListItemを利用する
  // todoListは現在のTODOの状態、addTodoListItemは新たに買うものを追加する関数、 toggleTodoListItemStatusはdone(完了/未完了)を反転させて更新する関数, deleteTodoListItemはTODOを削除する関数
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
  } = useTodo();

  // useRefでrefオブジェクトを作成(TODO入力フォームで利用)
  const inputEl = useRef<HTMLTextAreaElement>(null);

  // TODO入力フォームで入力された文字列を新しいTODOに登録するための
  // handleAddTodoListItem関数を宣言
  const handleAddTodoListItem = () => {
    // 何も入力されていない場合にクリックしても何も返さない
    if (inputEl.current === null) return;

    // テキストエリアに入力されたテキストを新たに買うものとして追加
    // 追加したら、テキストエリアをからの文字列にする
    // 新たに買うものを追加するaddTodoListItem関数を
    // 「+買うものを追加」ボタンをクリックで実行
    if (inputEl.current !== undefined) {
      addTodoListItem(inputEl.current.value);
    }
    inputEl.current.value = '';
  };

  // filter()を利用して「TODOの状態が未完了」の要素を持つ新しい配列を作成
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  // filter()を利用して「TODOの状態が完了」の要素を持つ新しい配列を作成
  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    // Containerコンポーネントはデフォルトでdivタグとして書き出される
    // centerContentでcenter寄せのレイアウトになる
    <Container centerContent p={{ base: '4', md: '6' }} maxWidth="3xl">
      {/* h1見出しタグをTodoTitleコンポーネントに */}
      {/* 見出しに表示させたいテキストをtitleに代入してコンポーネントへpropsで渡す */}
      <TodoTitle
        title="買い物リスト"
        as="h1"
        fontSize={{ base: '2xl', md: '3xl' }}
        mt="8"
      />
      {/* TODO追加フォームTodoAddコンポーネントを作成 */}
      {/* useTodo()カスタムフックで作成したhandleAddTodoListItem関数を子コンポーネントへpropsで渡す */}
      {/* useTodo()カスタムフックで作成したinputEl関数を子コンポーネントへpropsで渡す */}
      {/* 「+ 買うものを追加」ボタンをクリックでhandleAddTodoListItem関数を実行 */}
      {/* ボタン左側に表示させたいiconをpropsで子コンポーネントへ渡す */}
      <TodoAdd
        placeholder="ADD TODO"
        leftIcon={<AddIcon />}
        buttonText="買うものを追加"
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem}
      />
      {/* TodoListコンポーネント */}
      {/* 買うものリストinCompletedListをtodoListに代入して子コンポーネントへpropsで渡す */}
      {/* useTodo()カスタムフックで作成したtoggleTodoListItemStatus関数を子コンポーネントへpropsで渡す */}
      {/* toggleTodoListItemStatus関数はtodoListItemのdone(完了/未完了)を反転させて更新する */}
      {/* useTodo()カスタムフックで作成したdeleteTodoListItem関数を子コンポーネントへpropsで渡す */}
      {/* deleteTodoListItem関数は各買うものに設置した「削除」ボタンをクリックしたときに実行して買うものを削除する */}
      {/* h2見出しタグをTodoTitleコンポーネントに */}
      {/* 見出しに表示させたいテキストをtitleに代入して子コンポーネントへpropsで渡す */}
      {/* h2をasに代入してコンポーネントへpropsで渡す */}
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="買うものリスト"
        as="h2"
        fontSize={{ base: 'xl', md: '2xl' }}
      />
      {/* TodoListコンポーネント */}
      {/* 購入済みリストinCompletedListをtodoListに代入して子コンポーネントへpropsで渡す */}
      {/* 以下上記と同文 */}
      <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="購入済みリスト"
        as="h2"
        fontSize={{ base: 'xl', md: '2xl' }}
      />
    </Container>
  );
}

export default App;
