import React from "react";
import "./cardList.styles.css";
import { Card } from "../card/card.component";
export const CardList = (props) => {
  const { monsters } = props;
  return (
    <div className="cardList">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
