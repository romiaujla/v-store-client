import React, { Component } from 'react';
import './SignupForm.css';
import AuthApiService from '../../Service/AuthService';

export default class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      user_type: -1,
      error: true,
      usernameLengthError: true,
      passwordLengthError: true,
    }
  }

  handleRegisteration = (e) => {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
      password: e.target.password.value,
      user_type: e.target.user_type.value,
    }
    
    if(user.user_type === 'shop'){
      this.renderAddShopForm(user);
    }else{
      this.renderAddBuyerForm(user);
    }
  }

  renderAddShopForm = (userCredentials) => {
    console.log(`Add shop`, userCredentials);
  }

  renderAddBuyerForm = (userCredentials) => {
    console.log(`Add Buyer`, userCredentials);
  }

  handleUserNameChange = (username) => {
    this.setState({
      username,
    })
  }

  handlePasswordChange = (password) => {
    this.setState({
      password,
    })
  }

  handleUserTypeChange = (user_type) => {
    this.setState({
      user_type,
    })
  }
  
  render() {

    const {error} = this.state;
    const redColor = {
      color: 'red',
    }
    const greenColor = {
      color: 'green',
    }


    return (
      <form className='SignUpForm' onSubmit={(e) => {this.handleRegisteration(e)}}>
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
                  onChange = {(e) => {this.handleUserNameChange(e.target.value)}}
                />
                <span className='error' style={redColor}>Username cannot be empty</span>
                <span className='error' style={greenColor}>Username must be 6 to 72 characters long</span>
              </label>
              <label htmlFor="password">
                <span className="input-title">* Password:</span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={this.state.password}
                  onChange = {(e) => {this.handlePasswordChange(e.target.value)}}
                />
                {
                  error.password &&
                    <span className='error'>{error.passwordError}</span>
                }
              </label>
              <label htmlFor="user_type">
                <span className="input-title">* Select Account Type</span>
                <select 
                  className='select-css'
                  name='user_type'
                  id='user_type'
                  defaultValue={this.state.user_type}
                  onChange={(e) => {this.handleUserTypeChange(e.target.value)}}
                >
                  <option value='-1'>Select One Type</option>
                  <option value='shop'>Seller</option>
                  <option value='buyer'>Buyer</option>
                </select>
                {
                  error.user_type &&
                    <span className='error'>{error.user_typeError}</span>
                }
              </label>
              <button 
                className="btn btn-light" 
                type="submit"
                disabled={this.state.disableButton}
              >
                Register
              </button>
            </div>
          </fieldset>
        </form>
    );
  }

}
