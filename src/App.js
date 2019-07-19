import React from "react";
import "./stylesheets/application.sass";

function App() {
  return (
    <div className="app">
      <div className="nav">
        <div className="nav__logo">Logo</div>
        <ul className="nav__links">
          <li className="nav__link">
            <a href="#features">Features</a>
          </li>
          <li className="nav__link">
            <a href="#apps">Apps</a>
          </li>
          <li className="nav__link">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="nav__link">
            <a href="#knowledge-base">Knowledge base</a>
          </li>
          <li className="nav__link">
            <a href="#business">Business</a>
          </li>
        </ul>
        <div className="nav__buttons">
          <div className="nav__button -secondary">Log in</div>
          <div className="nav__button -primary">Sign up</div>
        </div>
      </div>
      <div className="content" />
    </div>
  );
}

export default App;
