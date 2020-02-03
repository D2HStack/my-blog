import React from "react";

// import css
import "../assets/css/style.css";

// import components
import Item from "./Item";

// import content
import leopard from "../assets/content/leopard";
import bee from "../assets/content/bee";

const MainContent = props => {
  return (
    <div className="main-content">
      <Item content={leopard}></Item>
      <Item content={bee}></Item>
    </div>
  );
};

export default MainContent;
