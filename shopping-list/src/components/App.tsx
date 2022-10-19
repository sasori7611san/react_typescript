// useRefを利用できるようにする
import { MutableRefObject, RefObject, useRef } from 'react';
// useTodo()カスタムフックをimport
import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { TodoTitle } from './TodoTitle';
import { todo } from '../types/todo';

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
    // addTodoListItem(inputEl.current.value);
    // inputEl.current.value = '';
    if (inputEl.current !== undefined) {
      addTodoListItem(inputEl.current.value);
    }
    // inputEl.current.value = '';
    inputEl.current.value = '';
  };

  // console.logでコンソールに取得したTODOリストの情報を表示してみる
  console.log('TODOリスト:', todoList);

  // filter()を利用して「TODOの状態が未完了」の要素を持つ新しい配列を作成
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  // filter()を利用して「TODOの状態が完了」の要素を持つ新しい配列を作成
  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  return (
    <>
      {/* h1見出しタグをTodoTitleコンポーネントに */}
      {/* 見出しに表示させたいテキストをtitleに代入してコンポーネントへpropsで渡す */}
      <TodoTitle title="TODO進捗管理" as="h1" />
      {/* TODO追加フォームTodoAddコンポーネントを作成 */}
      {/* useTodo()カスタムフックで作成したhandleAddTodoListItem関数を子コンポーネントへpropsで渡す */}
      {/* useTodo()カスタムフックで作成したinputEl関数を子コンポーネントへpropsで渡す */}
      {/* 「+ TODOを追加」ボタンをクリックでhandleAddTodoListItem関数を実行 */}
      <TodoAdd
        buttonText="+ TODOを追加"
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
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="未完了TODOリスト"
        as="h2"
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
      <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        title="完了TODOリスト"
        as="h2"
      />
    </>
  );
}

export default App;
