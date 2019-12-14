import React, { Component } from "react";
import "./Landing.css";
import Backdrop from "../Backdrop/Backdrop";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Backdrop>
          <img
            src={require("../../images/logo-white.png")}
            alt="Shopping Cart"
            className="hero-logo"
          ></img>
          <h1 className="x-large-land">
            Shop<mark className="hero-mark">zilla</mark>
          </h1>
          <p className="lead">
            You have a product? We'll help you grow your brand and your business
          </p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">
              Sign Up
            </a>
            <a href="login.html" className="btn btn-light">
              Login
            </a>
          </div>
        </Backdrop>
      </div>
    );
  }
}
