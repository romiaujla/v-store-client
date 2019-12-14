import React, { Component } from 'react';
import './SignupForm.css';
import Backdrop from '../Backdrop/Backdrop';

export default class Signup extends Component {
  
  render() {
    return (
      <form>
          <fieldset>
            <legend>
              <h3>Register</h3>
            </legend>
            <div className="flex">
              <label htmlFor="username">
                <span className="input-title">* Username:</span>
                <input type="text" id="username" name="username" required />
              </label>
              <label htmlFor="password">
                <span className="input-title">* Password:</span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                />
              </label>
              <label htmlFor="password">
                <span className="input-title">* Select Account Type</span>
                <select className='select-css'>
                  <option value='-1'>Select One Type</option>
                  <option value='1'>Seller</option>
                  <option value='2'>Buyer</option>
                </select>
              </label>
              <button className="btn btn-light" type="submit">
                Register
              </button>
            </div>
          </fieldset>
        </form>
    );
  }

}
