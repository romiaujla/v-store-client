import React, { Component } from 'react';
import './ExplorePage.css'
import Cards from '../../Components/Cards/Cards';

class ExplorePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleShopCardClick = (shopId) => {
    this.props.history.push(`/shop/${shopId}`);
  }
 
  render() {
    return (
      <div>
      <Cards handleShopCardClick={(shopId) => {this.handleShopCardClick(shopId)}}/>
      </div>
    );
  }
}

export default ExplorePage;
