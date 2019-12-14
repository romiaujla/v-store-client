import React, { Component } from 'react';
import './Cards.css';

export default class Cards extends Component {
  render() {
    return (
      <div className='card-body'>
        <div className='card'>
          <div className='card-image'></div>
          <div className='card-text'>
            <span className='date'>Open Since 2019</span>
            <h2>Flip Flops USA</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    );
  }
}
