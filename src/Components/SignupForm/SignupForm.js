import React, { Component } from 'react';
import './SignupForm.css';
// import AuthApiService from '../../Service/AuthService';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faCheck} from '@fortawesome/free-solid-svg-icons'
import RegistrationService from '../../Service/RegistrationService';

export default class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      user_type: -1,
      error: true,
      usernameErrorTags: {
        length: true,
        alreadyExists: true,
      }
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

  handleUserNameChange = (username) => {
    
    // username.trim() - So the user is not able to add 
    // spaces to the begining and the end of the username
    this.setState({
      username: username.trim(),
    })

    // check the length of the username
    if(username.length >= 6 && username.length <=72){
      this.setState({
        usernameErrorTags: {
          ...this.state.usernameErrorTags,
          hasValue: false,
          length: false
        }
      })

      RegistrationService.checkUserExistance(username)
        .then((user) => {
          if(user && user.length){
            this.setState({
              usernameErrorTags: {
                ...this.state.usernameErrorTags,
                alreadyExists: true,
              }
            })
          } else {
            this.setState({
              usernameErrorTags: {
                ...this.state.usernameErrorTags,
                alreadyExists: false,
              }
            })
          }
        })

    }else{
      this.setState({
        usernameErrorTags: {
          ...this.state.usernameErrorTags,
          length: true
        }
      })
    }
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

  renderErrorTag = (error, tag) => {
    const redColor = {
      color: 'red',
      fontSize: '0.8em',
    }
    const greenColor = {
      color: 'green',
      fontSize: '0.8em',
    }

    return error 
      ?(
        <span className='errorTag' style={redColor}>
          <FontAwesomeIcon icon={faTimes} /> {tag}
        </span>
      )
      :(
        <span className='errorTag' style={greenColor}>
          <FontAwesomeIcon icon={faCheck} /> {tag}
        </span>
      )

  }
  
  render() {

    const {usernameErrorTags} = this.state;

    return (

      <form className='SignUpForm' onSubmit={(e) => {this.handleRegisteration(e)}}>
          <fieldset>
            <legend>Register</legend>
            <div className='flex'>
              <label htmlFor='username'>
                <span className='label-tag'>*Username</span>
                <input
                  type='text'
                  name='username'
                  id='username'
                  value={this.state.username}
                  onChange={(e) => {this.handleUserNameChange(e.target.value)}}
                />
                {this.renderErrorTag(usernameErrorTags.length, 'Username must be between 6 and 72 characters in length')}
                {this.renderErrorTag(usernameErrorTags.alreadyExists, 'Username already taken')}
              </label>
            </div>
          </fieldset>
      </form>
    );
  }

}
