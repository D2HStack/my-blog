import React from "react";

// import css
import "./assets/css/style.css";

// import components
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container-inside">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
