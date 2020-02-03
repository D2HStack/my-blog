import React from "react";

// import css
import "../assets/css/style.css";

// import component
import Item from "./Item";

// import content
import content from "../assets/content/about-me";

const SideContent = props => {
  return (
    <div className="side-content">
      <Item content={content}></Item>
    </div>
  );
};

export default SideContent;
