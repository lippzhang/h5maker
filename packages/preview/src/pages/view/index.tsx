import React, { useEffect, useState } from "react";
import "./index.css";
import { PreviewCard, PreviewHeader, PreviewFooter } from "@kxz/components";
import { IComponentItemProps } from "@kxz/components/Card/type";

const View = () => {
  const [cards, setCards] = useState<[] | IComponentItemProps[]>([]);

  //监听父页面 传过来的postmessage
  useEffect(() => {
    window.addEventListener("message", (e) => {
      if (e.origin === "http://localhost:3000") {
        const { cards } = e.data;
        cards && setCards(cards);
      }
    });
  }, []);
  console.log('previec cards =>', cards)

  return (
    <div className="view">
      <div className="content">
        <PreviewHeader />
        <div className="main">
          {cards.map((card, index) => (
            <PreviewCard
              key={`card-${index}`}
              IDkey={`card-${index}`}
              item={card}
              index={index}
              cards={cards}
              setCards={setCards}
            />
          ))}
        </div>
        <PreviewFooter />
      </div>
    </div>
  );
};

export default View;
