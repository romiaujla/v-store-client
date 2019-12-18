import React, { Component } from 'react';
import './Cards.css';

export default class Cards extends Component {
  static defaultProps = {
    shop_id: 1,
    shop_name: 'Flip Flop USA',
    service_type: 'Clothing and accessories',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img_url: 'flipflops.jpeg'
  };

  handleShopCardClick = () => {
    this.props.handleShopCardClick(this.props.shop_id);
  };

  render() {
    return (
      <div className='card-container'>
        <img src={require(`../../images/store-images/${this.props.img_url}`)} />
        <div className='card-text'>
          <span className='store-type'>{this.props.service_type}</span>
          <h2>{this.props.shop_name}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}