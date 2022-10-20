import { FC, LegacyRef } from 'react';
import { Textarea, Button } from '@chakra-ui/react';

type Props = {
  placeholder: string;
  leftIcon: JSX.Element;
  buttonText: string;
  inputEl: LegacyRef<HTMLTextAreaElement>;
  handleAddTodoListItem: () => void;
};

export const TodoAdd: FC<Props> = (props) => {
  const { placeholder, leftIcon, buttonText, inputEl, handleAddTodoListItem } =
    props;
  return (
    <>
      {/* useRef()で作成したrefオブジェクトであるinputElをref属性に指定してDOMを参照する */}
      {/* bgColorはbackground-colorのStyle Propsショートハンド */}
      {/* mtはmargin-topのStyle Propsショートハンド。margin-topは8 = 2rem =32px */}
      {/* borderColorはborder-colorのStyle Props */}
      <Textarea
        placeholder={placeholder}
        bgColor="white"
        mt="8"
        borderColor="gray.400"
        ref={inputEl}
      />
      {/* 入力フォームにテキストを入力し、「+ TODOを追加」ボタンをクリックで新規TODOを追加 */}
      {/* Buttonの色はcolorSchemeで設定できる */}
      {/* mtはmargin-topのStyle Propsショートハンド。margin-topは8 = 2rem =32px */}
      <Button
        onClick={handleAddTodoListItem}
        colorScheme="blue"
        leftIcon={leftIcon}
        mt="8"
      >
        {buttonText}
      </Button>
    </>
  );
};
