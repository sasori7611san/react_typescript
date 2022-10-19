import { FC, memo } from 'react';
import { As, Heading } from '@chakra-ui/react';
import { fontSizeType } from '../types/fontSizeType';

type Props = {
  title: string;
  as: As<any> | undefined;
  fontSize: fontSizeType;
  mt: string;
};

export const TodoTitle: FC<Props> = memo((props) => {
  const { title, as, fontSize, mt } = props;
  // // asがh1ならばタイトルはh1タグ
  // if (as === 'h1') return <h1>{title}</h1>;
  // // asがh2ならばタイトルはh2タグ
  // if (as === 'h2') return <h2>{title}</h2>;
  // Headingコンポーネントでは、すべてのStyle Propsを利用できる
  // Headingコンポーネントは、デフォルトでは<h2>タグを出力する
  // wはwidthのStyle Propsショートハンド
  return (
    <Heading mt={mt} as={as} fontSize={fontSize} w="full">
      {title}
    </Heading>
  );
});
