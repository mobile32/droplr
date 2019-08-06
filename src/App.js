import React from "react";
import "./stylesheets/application.sass";
import logo from "./images/logo.png";

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
        <div className="subscribe__animation-container">
          <div className="subscribe__animation">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-right"
              className="subscribe__icon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
            >
              <path
                fill="currentColor"
                d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
              />
            </svg>
          </div>
        </div>
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
              <label className="subscribe__email-label" htmlFor="email">
                Email address
              </label>
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
