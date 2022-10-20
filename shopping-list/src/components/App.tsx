import { useRef } from 'react';
import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { TodoTitle } from './TodoTitle';
import { Container } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function App() {
  // useTodo()カスタムフックで作成したtodoList, addTodoListItem, toggleTodoListItemStatus, deleteTodoListItemを利用する
  // todoListは現在のTODOの状態、addTodoListItemは新規TODOを追加する関数、 toggleTodoListItemStatusはdone(完了/未完了)を反転させて更新する関数, deleteTodoListItemはTODOを削除する関数
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
  } = useTodo();

  // useRefでrefオブジェクトを作成(TODO入力フォームで利用)
  // const inputEl = useRef(null);
  // const inputEl = useRef<string | null>(null);
  const inputEl = useRef<HTMLTextAreaElement>(null);

  // TODO入力フォームで入力された文字列を新しいTODOに登録するための
  // handleAddTodoListItem関数を宣言
  const handleAddTodoListItem = () => {
    // 何も入力されていない場合にクリックしても何も返さない
    // if (inputEl.current.value === '') return;
    if (inputEl.current === null) return;

    // テキストエリアに入力されたテキストを新規TODOとして追加
    // 追加したら、テキストエリアをからの文字列にする
    // 新規TODOを追加するaddTodoListItem関数を
    // 「+ TODOを追加」ボタンをクリックで実行
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
    // モバイル表示でpaddingは4 = 1rem =16px;
    // 最初のbreakpoint "md": = "48em" (=768px)を境界として
    // PC表示でpaddingは6 = 1.5rem = 24px;
    // max-widthは3xl = 48rem = 768px
    <Container centerContent p={{ base: '4', md: '6' }} maxWidth="3xl">
      {/* h1見出しタグをTodoTitleコンポーネントに */}
      {/* 見出しに表示させたいテキストをtitleに代入してコンポーネントへpropsで渡す */}
      {/* モバイル表示でfont-sizeは2xl = 1.5rem =24px、最初のBreakpoint "md": = "48em" (=768px)を境界として */}
      {/* PC表示でfont-sizeは3xl = 1.875rem = 30px */}
      <TodoTitle
        title="買い物リスト"
        as="h1"
        fontSize={{ base: '2xl', md: '3xl' }}
        mt="8"
      />
      {/* TODO追加フォームTodoAddコンポーネントを作成 */}
      {/* useTodo()カスタムフックで作成したhandleAddTodoListItem関数を子コンポーネントへpropsで渡す */}
      {/* useTodo()カスタムフックで作成したinputEl関数を子コンポーネントへpropsで渡す */}
      {/* 「+ TODOを追加」ボタンをクリックでhandleAddTodoListItem関数を実行 */}
      {/* ボタン左側に表示させたいiconをpropsで子コンポーネントへ渡す */}
      <TodoAdd
        placeholder="ADD TODO"
        leftIcon={<AddIcon />}
        buttonText="買うものを追加"
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem}
      />
      {/* <TodoTitle title="未完了TODOリスト" as="h2" /> */}
      {/* TodoListコンポーネント */}
      {/* 未完了TODOリストinCompletedListをtodoListに代入して子コンポーネントへpropsで渡す */}
      {/* useTodo()カスタムフックで作成したtoggleTodoListItemStatus関数を子コンポーネントへpropsで渡す */}
      {/* toggleTodoListItemStatus関数はtodoListItemのdone(完了/未完了)を反転させて更新する */}
      {/* useTodo()カスタムフックで作成したdeleteTodoListItem関数を子コンポーネントへpropsで渡す */}
      {/* deleteTodoListItem関数は各TODOに設置した「削除」ぼたんをクリックしたときに実行してTODOを削除する */}
      {/* h2見出しタグをTodoTitleコンポーネントに */}
      {/* 見出しに表示させたいテキストをtitleに代入して子コンポーネントへpropsで渡す */}
      {/* h2をasに代入してコンポーネントへpropsで渡す */}
      {/* モバイル表示でfont-sizeはxl = 1.25rem =20px、最初のBreakpoint "md": = "48em" (=768px)を境界として */}
      {/* PC表示でfont-sizeは2xl = 1.5rem = 24px fontsizeをTodoTitleコンポーネントに渡している */}
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="買うものリスト"
        as="h2"
        fontSize={{ base: 'xl', md: '2xl' }}
      />
      {/* <TodoTitle title="完了TODOリスト" as="h2" /> */}
      {/* TodoListコンポーネント */}
      {/* 完了TODOリストinCompletedListをtodoListに代入して子コンポーネントへpropsで渡す */}
      {/* useTodo()カスタムフックで作成したtoggleTodoListItemStatus関数を子コンポーネントへpropsで渡す */}
      {/* toggleTodoListItemStatus関数はtodoListItemのdone(完了/未完了)を反転させて更新する */}
      {/* useTodo()カスタムフックで作成したdeleteTodoListItem関数を子コンポーネントへpropsで渡す */}
      {/* deleteTodoListItem関数は各TODOに設置した「削除」ぼたんをクリックしたときに実行してTODOを削除する */}
      {/* h2見出しタグをTodoTitleコンポーネントに */}
      {/* 見出しに表示させたいテキストをtitleに代入して子コンポーネントへpropsで渡す */}
      {/* h2をasに代入してコンポーネントへpropsで渡す */}
      {/* モバイル表示でfont-sizeはxl = 1.25rem =20px、最初のBreakpoint "md": = "48em" (=768px)を境界として */}
      {/* PC表示でfont-sizeは2xl = 1.5rem = 24px fontsizeをTodoTitleコンポーネントに渡している */}
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
