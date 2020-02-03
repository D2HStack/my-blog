import React from "react";

// import css
import "../assets/css/style.css";

const Item = props => {
  const heading = props.content.heading;
  const title = props.content.title;
  const img = props.content.img;
  const description = props.content.description;

  return (
    <div className="item">
      <div className="item-heading">{heading}</div>
      <div className="item-title">{title}</div>
      <img className="item-img" alt={title} src={img}></img>
      <div className="item-description">{description}</div>
    </div>
  );
};

export default Item;
