import React, { Component } from "react";
import "./Card.css";

export default class Cards extends Component {
  
  static defaultProps = {
    shop_id: 1,
    shop_name: "Flip Flop USA",
    service_type: "Clothing and accessories",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  };

  handleShopCardClick = () => {
    this.props.handleShopCardClick(this.props.shop_id);
  }

  render() {
    return (
      <div className="card-body" onClick={() => {this.handleShopCardClick()}}>
        <div className="card">
          <div className="card-image"></div>
          <div className="card-text">
            <span className="date">{this.props.service_type}</span>
            <h2>{this.props.shop_name}</h2>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
