import { FC, memo } from 'react';
import styled from 'styled-components';
import { Panel } from '../../modules/types';
import { BasePanel } from '../atoms/BasePanel';

type Props = {
  action: (num: number) => void;
  panelColor: Panel[][];
};

export const PanelScreen: FC<Props> = memo((props) => {
  const { panelColor, action } = props;
  // 各パネルの処理
  const action1 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(1);
    // }
    action(1);
  };
  const action2 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(2);
    // }
    action(2);
  };
  const action3 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(3);
    // }
    action(3);
  };
  const action4 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(4);
    // }
    action(4);
  };
  const action5 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(5);
    // }
    action(5);
  };
  const action6 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(6);
    // }
    action(6);
  };
  const action7 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(7);
    // }
    action(7);
  };
  const action8 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(8);
    // }
    action(8);
  };
  const action9 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(9);
    // }
    action(9);
  };
  const action10 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(10);
    // }
    action(10);
  };
  const action11 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(11);
    // }
    action(11);
  };
  const action12 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(12);
    // }
    action(12);
  };
  const action13 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(13);
    // }
    action(13);
  };
  const action14 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(14);
    // }
    action(14);
  };
  const action15 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(15);
    // }
    action(15);
  };
  const action16 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(16);
    // }
    action(16);
  };
  const action17 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(17);
    // }
    action(17);
  };
  const action18 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(18);
    // }
    action(18);
  };
  const action19 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(19);
    // }
    action(19);
  };
  const action20 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(20);
    // }
    action(20);
  };
  const action21 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(21);
    // }
    action(21);
  };
  const action22 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(22);
    // }
    action(22);
  };
  const action23 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(23);
    // }
    action(23);
  };
  const action24 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(24);
    // }
    action(24);
  };
  const action25 = (): void => {
    // if (props.action !== undefined) {
    //   props.action(25);
    // }
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
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={2}
          action={() => {
            action2();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={3}
          action={() => {
            action3();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={4}
          action={() => {
            action4();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={5}
          action={() => {
            action5();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={6}
          action={() => {
            action6();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={7}
          action={() => {
            action7();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={8}
          action={() => {
            action8();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={9}
          action={() => {
            action9();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={10}
          action={() => {
            action10();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={11}
          action={() => {
            action11();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={12}
          action={() => {
            action12();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={13}
          action={() => {
            action13();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={14}
          action={() => {
            action14();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={15}
          action={() => {
            action15();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={16}
          action={() => {
            action16();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={17}
          action={() => {
            action17();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={18}
          action={() => {
            action18();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={19}
          action={() => {
            action19();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={20}
          action={() => {
            action20();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={21}
          action={() => {
            action21();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={22}
          action={() => {
            action22();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={23}
          action={() => {
            action23();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={24}
          action={() => {
            action24();
          }}
          panelColor={panelColor}
        />
        <BasePanel
          panelNum={25}
          action={() => {
            action25();
          }}
          panelColor={panelColor}
        />
      </Panels>
    </div>
  );
});

const Panels = styled.div`
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  gap: 0px;
  justify-content: center;
  // background-color: gray;
`;
