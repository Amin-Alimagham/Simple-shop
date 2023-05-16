import React from "react";
import "../style/CardItem.css";
function CardItem({ imgSrc, name, price }) {
  return (
    <div className="card-item-wrapper">
      <img src={imgSrc} alt="image" />
      <p>{name}</p>
      <span className="carditemspan">{price}</span>
    </div>
  );
}

export default CardItem;
