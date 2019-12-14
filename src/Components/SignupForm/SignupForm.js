import React, { Component } from 'react';
import './SignupForm.css';
import Backdrop from '../Backdrop/Backdrop';

export default class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      error: {
        username: false,
        password: false,
        usernameError: 'Invalid Username',
        passwordError: 'Invalid Password',
      },
    }
  }
  
  render() {

    const {error} = this.state;

    return (
      <form>
          <fieldset>
            <legend>
              <h3>Register</h3>
            </legend>
            <div className="flex">
              <label htmlFor="username">
                <span className="input-title">* Username:</span>
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  required 
                  value={this.state.username}
                  onChange = {(e) => {this.setState({username : e.target.value})}}
                />
                {
                  error.username && 
                    <span className='error'>{error.usernameError}</span>
                }
              </label>
              <label htmlFor="password">
                <span className="input-title">* Password:</span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={this.state.password}
                  onChange = {(e) => {this.setState({password : e.target.value})}}
                />
                {
                  error.password &&
                    <span className='error'>{error.passwordError}</span>
                }
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
