import React, { Component } from 'react';
import './Landing.css';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <section className='landing'>
          <div className='dark-overlay'>
            <div className='landing-inner'>
              <h1 className='x-large'>Shopzilla</h1>
              <p className='lead'>You have a product? We'll help you grow your brand and your business</p>
              <div className='buttons'>
                <a href='register.html' className='btn btn-primary'>
                  Sign Up
                </a>
                <a href='login.html' className='btn btn-light'>
                  Login
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
