import { FC, useMemo } from "react";
import { useRef } from "react";
import styles from "./index.module.less";
import type { IComponentItemProps } from './type'


// 渲染标题文本
const renderTitleText = (item: IComponentItemProps, cards: any[]) => {
  const titleTextStyle = useMemo(() => {
    let result: Record<string, React.CSSProperties> = {};
    if (item.name === "titleText") {
      item?.config.forEach((_item: any) => {
        if (_item.config) {
          result[_item.format] = _item.config.style;
        }
      });
    }

    return result;
  }, [item, cards]);
  return <div className={styles["title-text-container"]}>
    {item?.config.map((item2, index2) => {
      return (
        <div
          key={`titleText-${index2}`}
          className={styles["title-text-item"]}
          style={titleTextStyle["position"]}
        >
          {item2.type === "input" && (
            <span
              className={styles["title-text"]}
              style={titleTextStyle["title-size"]}
            >
              {item2.value}
            </span>
          )}
          {item2.type === "textarea" && (
            <span
              className={styles["content-text"]}
              style={titleTextStyle["content-size"]}
            >
              {item2.value}
            </span>
          )}
        </div>
      );
    })}
  </div>;
}

// 渲染ShopInfo
const renderShopInfo = (item: IComponentItemProps, cards: any[])  =>{
  const shopInfoStyle = item.config.filter(
    (_item: { type: string; }) => _item.type === "legend-style-shop"
  )[0]?.config?.name;
  const shopInfoBackground = item.config.filter(
    (_item: { type: string; }) => _item.type === "image"
  )[0]?.value;
  const shopName = item.config.filter((_item: { format: string; }) => _item.format === "shopName")[0]
    ?.value;
  const shopInfo = item.config.filter((_item: { format: string; }) => _item.format === "shopInfo")[0]
    ?.value;

  return <div className={styles[shopInfoStyle || '']}>
    <div
      className={styles["shopInfo-image"]}
      style={{
        background: `url(${shopInfoBackground}) no-repeat center center`,
      }}
    >
      <div className={styles["image-mask"]} />
    </div>
    <div className={styles["shopInfo-text-container"]}>
      <img src="https://img.yzcdn.cn/upload_files/2021/01/11/FuS7UjK06564M1CD8817mQPtu81Q.png" />
      <div className={styles["shopInfo-text"]}>
        <div>{shopName}</div>
        <div>{shopInfo}</div>
      </div>
    </div>
  </div>;
}

// 渲染集合, 在这里注册
const cardMap:Record<string, any> = {
  'titleText': renderTitleText,
  'shopInfo': renderShopInfo,
}

export const renderCard = (item: IComponentItemProps, cards: any[]) => {
  const renderLogic = cardMap[item.name]
  return renderLogic(item, cards)
}