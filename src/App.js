import React from "react";
import "./stylesheets/application.sass";
import logo from "./images/logo.png";
import woman from "./images/businesswoman-portrait-black-top-grey-background.jpg";
import { Play, LeftQoute, RightQuote, Amazon, Menu } from "./images/Icons";

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
        <a className="nav__menu" href="#menu">
          <Menu className="nav__menu-icon" />
        </a>
      </div>
      <div className="subscribe">
        <div className="subscribe__animation-container">
          <div className="subscribe__animation">
            <Play className="subscribe__icon" />
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
      <div className="testimonials">
        <h2 className="testimonials__header -space">
          Find out what others make of us:
        </h2>
        <div className="testimonials__slider">
          <div className="testimonials__arrow">{"<"}</div>
          <div className="testimonials__left-panel">
            <div className="testimonials__quotation">
              <LeftQoute className="testimonials__left-quote" />
              <h4 className="testimonials__header">
                Great for sharing screenshots!
              </h4>
              <p>
                Dropl is the simplest, most reliable, universal way to share a
                file with anyone anywhere, I cant't imagine a quicker way to
                exchange a screenshot than dropl.
              </p>
              <div>
                <b>Des Traynor</b>
              </div>
              <div className="testimonials__role">Co-founder @Intercom</div>
              <RightQuote className="testimonials__right-quote" />
            </div>
            <div className="testimonials__buttons">
              <div className="testimonials__button -active" />
              <div className="testimonials__button" />
              <div className="testimonials__button" />
            </div>
          </div>
          <img className="testimonials__portrait" src={woman} alt="woman" />
          <div className="testimonials__arrow">{">"}</div>
        </div>
        <h3 className="testimonials__header -space">
          Smart companies use smart tools
        </h3>
        <div className="testimonials__companies">
          <Amazon className="testimonials__company" />
          <Amazon className="testimonials__company" />
          <Amazon className="testimonials__company" />
          <Amazon className="testimonials__company" />
          <Amazon className="testimonials__company" />
          <Amazon className="testimonials__company" />
          <Amazon className="testimonials__company" />
        </div>
      </div>
    </div>
  );
}

export default App;
