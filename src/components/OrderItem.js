import React from "react";
import "../style/CardItem.css";
function CardItem({ imgSrc, name, price }) {
  return (
    <div className="card-item-wrapper">
      <img className="cardimage" src={imgSrc} alt={name} />
      <p className="pcard">{name}</p>
      <span className="spancard">{price}</span>
    </div>
  );
}

export default CardItem;
