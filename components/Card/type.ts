
export interface IComponentItemProps {
  text: string; // 组件区中组件的名称
  name: string; // 组件区中组件的的key
  icon: string; // 组件区中组件的icon地址
  config: {
    label: string; // 配置区中title名称
    type: string; // 配置区组件类型
    format: string;
    value?: string;
    config?: {
      // 默认配置项
      icon: string;
      name?: string;
      style?: React.CSSProperties;
      tooltip: string;
    };
    configOptions?: {
      // 配置区中组件配置列表
      icon: string;
      name?: string;
      style?: React.CSSProperties;
      tooltip: string;
    }[];
  }[];
}

export interface CardProps {
  item: IComponentItemProps;
  index: number;
  cards: [] | IComponentItemProps[];
  setCards: React.Dispatch<React.SetStateAction<[] | IComponentItemProps[]>>;
  IDkey: string;
  compActiveIndex?: number | null;
  setCompActiveIndex?: (compActiveIndex: number) => void;
}

export interface DragItem {
  originalIndex: number;
  comp: IComponentItemProps;
}