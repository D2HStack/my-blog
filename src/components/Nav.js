import React from "react";

// import css
import "../assets/css/style.css";

// import components
import Link from "./Link";

const Nav = props => {
  return (
    <div className="nav-header">
      <div className="link-left">
        <Link></Link>
        <Link></Link>
        <Link></Link>
      </div>
      <Link></Link>
    </div>
  );
};

export default Nav;
