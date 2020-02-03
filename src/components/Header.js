import React from "react";

// import css
import "../assets/css/style.css";

// import components
import Title from "./Title";
import Baseline from "./Baseline";
import Nav from "./Nav";

const Header = props => {
  return (
    <>
      <div className="header">
        <Title>My Blog</Title>
        <Baseline>An awesome baseline</Baseline>
        <Nav></Nav>
      </div>
    </>
  );
};

export default Header;
