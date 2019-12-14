import React, { Component } from "react";
import "./Cards.css";

export default class Cards extends Component {
  
  static defaultProps = {
    shop_name: "Flip Flop USA",
    service_type: "clothing and accessories",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  };

  render() {
    return (
      <div className="card-body">
        <div className="card">
          <div className="card-image"></div>
          <div className="card-text">
            <span className="date">{this.props.shop_name}</span>
            <h2>{this.props.service_type}</h2>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
