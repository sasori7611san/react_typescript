import { FC, memo } from 'react';
import styled from 'styled-components';

type Props = {
  panelNum: number;
  action: () => void;
};

export const BasePanel: FC<Props> = memo((props) => {
  const { panelNum, action } = props;
  return (
    <>
      <div>
        <Button
          onClick={() => {
            action();
          }}
        >
          {panelNum}
        </Button>
      </div>
    </>
  );
});

const Button = styled.button`
  width: 60px;
  height: 60px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  background-color: gray;
`;
