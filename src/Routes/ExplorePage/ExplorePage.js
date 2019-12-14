import React, { Component } from 'react';
import './ExplorePage.css'
import Cards from '../../Components/Cards/Cards';

class ExplorePage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
      <Cards />
      </div>
    );
  }
}

export default ExplorePage;
