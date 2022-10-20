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
      <Textarea
        placeholder={placeholder}
        bgColor="white"
        mt="8"
        borderColor="gray.400"
        ref={inputEl}
      />
      {/* 入力フォームにテキストを入力し、「+ 買うものを追加」ボタンをクリックで新たに買うものを追加 */}
      {/* Buttonの色はcolorSchemeで設定できる */}
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
