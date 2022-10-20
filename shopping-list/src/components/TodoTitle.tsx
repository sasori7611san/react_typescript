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
  // Headingコンポーネントでは、すべてのStyle Propsを利用できる
  // Headingコンポーネントは、デフォルトでは<h2>タグを出力する
  return (
    <Heading mt={mt} as={as} fontSize={fontSize} w="full">
      {title}
    </Heading>
  );
});
