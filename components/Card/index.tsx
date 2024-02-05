import type { Identifier, XYCoord } from "dnd-core";
import { FC, useMemo } from "react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import update from "immutability-helper";
import classnames from "classnames";
import styles from "./index.module.less";
import type { IComponentItemProps, CardProps, DragItem } from './type'
import { renderCard } from './renderEngine'

export const Card: FC<CardProps> = ({
  setCompActiveIndex,
  item,
  IDkey,
  cards,
  index,
  setCards,
  compActiveIndex,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "comp",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      console.log("cards", cards);

      if (!ref.current) {
        return;
      }
      const dragIndex = item.originalIndex;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      if (item.originalIndex !== -1) {
        setCards((prevCards: IComponentItemProps[]) =>
          update(prevCards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, prevCards[dragIndex] as IComponentItemProps],
            ],
          })
        );
      } else {
        console.log("item.comp", item.comp);
        setCards((prevCards: IComponentItemProps[]) =>
          update(prevCards, {
            $splice: [[hoverIndex, 0, item.comp]],
          })
        );
      }
      item.originalIndex = hoverIndex;
      setCompActiveIndex && setCompActiveIndex(hoverIndex);
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "comp",
    item: () => {
      return { comp: item, originalIndex: index };
    },
    isDragging: (monitor) => {
      return `card-${monitor.getItem().originalIndex}` === IDkey;
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{
        opacity,
        border: "1px solid #blue",
      }}
      className={classnames(styles["card-container"], {
        [styles["active"]]: compActiveIndex === index,
      })}
      data-handler-id={handlerId}
      onClick={() => {
        setCompActiveIndex && setCompActiveIndex(index);
      }}
    >
      {renderCard(item, cards)}
    </div>
  );
};


