import { FC, memo } from 'react';

type Props = {
  title: string;
  as: string;
};

export const TodoTitle: FC<Props> = memo((props) => {
  const { title, as } = props;
  // asがh1ならばタイトルはh1タグ
  if (as === 'h1') return <h1>{title}</h1>;
  // asがh2ならばタイトルはh1タグ
  if (as === 'h2') return <h2>{title}</h2>;
  // どちらでもなければpタグ
  return <p>{title}</p>;
});
