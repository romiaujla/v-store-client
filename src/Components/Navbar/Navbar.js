import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-dark'>
        <h1>
          <Link to='/'>
            <i className='fas fa-code'></i> Shopzilla
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/explore'>Explore</Link>
          </li>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
