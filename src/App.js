import React from "react";
import "./stylesheets/application.sass";
import logo from "./images/logo.png";
import play from "./images/play.svg"

function App() {
  return (
    <div className="app">
      <div className="nav">
        <img alt="dropl" className="nav__logo" src={logo} />
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
          <button className="nav__button -secondary">Log in</button>
          <button className="nav__button -primary">Sign up</button>
        </div>
      </div>
      <div className="subscribe">
        <img className="subscribe__animation" alt="loading" src={play} />
        <div className="subscribe__start">
          <h2 className="subscribe__header">
            Communicate.
            <br /> Collaborate. Complete.
          </h2>
          <p>
            The remote collaboration tool to help you communicate effectively &
            work productively.
          </p>
          <div className="subscribe__field">
            <b>
              <label className="subscribe__email-label" htmlFor="email">Email address</label>
            </b>
            <input className="subscribe__email-input" id="email" type="text" />
          </div>
          <div className="subscribe__links">
            <div>
              <div>
                Try Dropl <b className="subscribe__pro">PRO Free for 30 days</b>
              </div>
              <div>
                No credit card needed.{" "}
                <a className="subscribe__privacy-policy" href="#privacy-policy">
                  Privacy policy
                </a>
              </div>
            </div>
            <button className="subscribe__get-started">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
