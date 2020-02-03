import React from "react";

// import css
import "../assets/css/style.css";

// import components
import MainContent from "./MainContent";
import SideContent from "./SideContent";

const Content = props => {
  return (
    <div className="container-content">
      <MainContent></MainContent>
      <SideContent></SideContent>
    </div>
  );
};

export default Content;
