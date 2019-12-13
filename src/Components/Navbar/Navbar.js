import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-dark'>
      <img src={require("../../images/logo-black.png")} alt="Shopping Cart" className="nav-logo"></img>
        <h1>
          <Link to='/'>
            <span className='hero-nav-text'></span> Shopzilla
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/explore'>Explore</Link>
          </li>
          <li>
            <Link to='/signup'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
