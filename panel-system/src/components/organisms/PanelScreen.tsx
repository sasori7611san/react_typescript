import { FC, memo } from 'react';
import styled from 'styled-components';
import { BasePanel } from '../atoms/BasePanel';

type Props = {
  action: (num: number) => void;
};

export const PanelScreen: FC<Props> = memo((props) => {
  const { action } = props;
  // 各パネルの処理
  const action1 = (): void => {
    action(1);
  };
  const action2 = (): void => {
    action(2);
  };
  const action3 = (): void => {
    action(3);
  };
  const action4 = (): void => {
    action(4);
  };
  const action5 = (): void => {
    action(5);
  };
  const action6 = (): void => {
    action(6);
  };
  const action7 = (): void => {
    action(7);
  };
  const action8 = (): void => {
    action(8);
  };
  const action9 = (): void => {
    action(9);
  };
  const action10 = (): void => {
    action(10);
  };
  const action11 = (): void => {
    action(11);
  };
  const action12 = (): void => {
    action(12);
  };
  const action13 = (): void => {
    action(13);
  };
  const action14 = (): void => {
    action(14);
  };
  const action15 = (): void => {
    action(15);
  };
  const action16 = (): void => {
    action(16);
  };
  const action17 = (): void => {
    action(17);
  };
  const action18 = (): void => {
    action(18);
  };
  const action19 = (): void => {
    action(19);
  };
  const action20 = (): void => {
    action(20);
  };
  const action21 = (): void => {
    action(21);
  };
  const action22 = (): void => {
    action(22);
  };
  const action23 = (): void => {
    action(23);
  };
  const action24 = (): void => {
    action(24);
  };
  const action25 = (): void => {
    action(25);
  };
  return (
    <div>
      <p>I have seen it...</p>
      <Panels>
        <BasePanel
          panelNum={1}
          action={() => {
            action1();
          }}
        />
        <BasePanel
          panelNum={2}
          action={() => {
            action2();
          }}
        />
        <BasePanel
          panelNum={3}
          action={() => {
            action3();
          }}
        />
        <BasePanel
          panelNum={4}
          action={() => {
            action4();
          }}
        />
        <BasePanel
          panelNum={5}
          action={() => {
            action5();
          }}
        />
        <BasePanel
          panelNum={6}
          action={() => {
            action6();
          }}
        />
        <BasePanel
          panelNum={7}
          action={() => {
            action7();
          }}
        />
        <BasePanel
          panelNum={8}
          action={() => {
            action8();
          }}
        />
        <BasePanel
          panelNum={9}
          action={() => {
            action9();
          }}
        />
        <BasePanel
          panelNum={10}
          action={() => {
            action10();
          }}
        />
        <BasePanel
          panelNum={11}
          action={() => {
            action11();
          }}
        />
        <BasePanel
          panelNum={12}
          action={() => {
            action12();
          }}
        />
        <BasePanel
          panelNum={13}
          action={() => {
            action13();
          }}
        />
        <BasePanel
          panelNum={14}
          action={() => {
            action14();
          }}
        />
        <BasePanel
          panelNum={15}
          action={() => {
            action15();
          }}
        />
        <BasePanel
          panelNum={16}
          action={() => {
            action16();
          }}
        />
        <BasePanel
          panelNum={17}
          action={() => {
            action17();
          }}
        />
        <BasePanel
          panelNum={18}
          action={() => {
            action18();
          }}
        />
        <BasePanel
          panelNum={19}
          action={() => {
            action19();
          }}
        />
        <BasePanel
          panelNum={20}
          action={() => {
            action20();
          }}
        />
        <BasePanel
          panelNum={21}
          action={() => {
            action21();
          }}
        />
        <BasePanel
          panelNum={22}
          action={() => {
            action22();
          }}
        />
        <BasePanel
          panelNum={23}
          action={() => {
            action23();
          }}
        />
        <BasePanel
          panelNum={24}
          action={() => {
            action24();
          }}
        />
        <BasePanel
          panelNum={25}
          action={() => {
            action25();
          }}
        />
      </Panels>
    </div>
  );
});

const Panels = styled.div`
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  // grid-template-columns: 160px 160px 160px 160px 160px;
  gap: 0px;
  justify-content: center;
  // background-color: gray;
`;
