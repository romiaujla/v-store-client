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
      <div className="ExplorePage">
      <div className="flex">
      <Cards shop_name="Flip Flops USA" handleShopCardClick={(shopId) => {this.handleShopCardClick(shopId)}}/>
      <Cards shop_name="Shopmart heaven" handleShopCardClick={(shopId) => {this.handleShopCardClick(shopId)}}/>
      <Cards shop_name="cool store" handleShopCardClick={(shopId) => {this.handleShopCardClick(shopId)}}/>
      <Cards shop_name="cool store" handleShopCardClick={(shopId) => {this.handleShopCardClick(shopId)}}/>
      <Cards shop_name="cool store" handleShopCardClick={(shopId) => {this.handleShopCardClick(shopId)}}/>
      <Cards shop_name="cool store" handleShopCardClick={(shopId) => {this.handleShopCardClick(shopId)}}/>
      <Cards shop_name="cool store" handleShopCardClick={(shopId) => {this.handleShopCardClick(shopId)}}/>
      <Cards shop_name="cool store" handleShopCardClick={(shopId) => {this.handleShopCardClick(shopId)}}/>
      <Cards shop_name="cool store" handleShopCardClick={(shopId) => {this.handleShopCardClick(shopId)}}/>
      <Cards shop_name="cool store" handleShopCardClick={(shopId) => {this.handleShopCardClick(shopId)}}/>
      <div className="empty-div"></div>
      <div className="empty-div"></div>
      </div>
      </div>
    );
  }
}

export default ExplorePage;
