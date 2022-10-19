import { FC, LegacyRef } from 'react';

type Props = {
  buttonText: string;
  inputEl: LegacyRef<HTMLTextAreaElement>;
  handleAddTodoListItem: () => void;
};

export const TodoAdd: FC<Props> = (props) => {
  const { buttonText, inputEl, handleAddTodoListItem } = props;
  return (
    <>
      {/* useRef()で作成したrefオブジェクトであるinputElをref属性に指定してDOMを参照する */}
      <textarea ref={inputEl} />
      {/* 入力フォームにテキストを入力し、「+ TODOを追加」ボタンをクリックで新規TODOを追加 */}
      <button onClick={handleAddTodoListItem}>{buttonText}</button>
    </>
  );
};
