
import { FC } from "react";
import { useRef } from "react";
import classnames from "classnames";
import type { CardProps } from './type'
import { renderCard } from './renderEngine'
import styles from "./index.module.less";

export const PreviewCard: FC<CardProps> = ({
  item,
  IDkey,
  cards,
  index,
  setCards,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={classnames("card3-container")}>
      {renderCard(item, cards)}
    </div>
  );
};


