import React, { Component } from 'react';
import './SignUpForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import RegistrationService from '../../Service/RegistrationService';
import AddShopProfileFields from '../AddShopProfileFields/AddShopProfileFields';

export default class SignUpForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  // hey there adding a comment to check renaming of the file

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rePassword: '',
      user_type: -1,
      error: true,
      isEnabled: true,
      usernameErrorTags: {
        length: true,
        alreadyExists: true
      },
      passwordErrorTag: {
        length: true
      },
      rePasswordErrorTag: {
        match: true
      },
      userTypeErrorTag: {
        noSelection: true
      },
      nameErrorTag: {
        length: true
      }
    };
  }

  handleRegisteration = e => {
    e.preventDefault();
    let user = {
      username: e.target.username.value,
      password: e.target.password.value,
      user_type: e.target.user_type.value
    };

    if (user.user_type === 'shop') {
    } else {
      user = {
        ...user,
        name: e.target.name.value,
      }
      this.addBuyer(user);
    }
  };

  addBuyer = credentials => {
    return RegistrationService.registerBuyer(credentials)
      .then(registeredUser => {
        console.log(credentials.username, credentials.password);
        this.props.onRegistrationSuccess(credentials.username, credentials.password);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleUserNameChange = username => {
    // username.trim() - So the user is not able to add
    // spaces to the begining and the end of the username
    this.setState({
      username: username.trim()
    });

    // check the length of the username
    if (username.length >= 6 && username.length <= 72) {
      this.setState({
        usernameErrorTags: {
          ...this.state.usernameErrorTags,
          length: false
        }
      });

      RegistrationService.checkUserExistance(username).then(user => {
        if (user && user.length) {
          this.setState({
            usernameErrorTags: {
              ...this.state.usernameErrorTags,
              alreadyExists: true
            }
          });
        } else {
          this.setState({
            usernameErrorTags: {
              ...this.state.usernameErrorTags,
              alreadyExists: false
            }
          });
        }
      });
    } else {
      this.setState({
        usernameErrorTags: {
          ...this.state.usernameErrorTags,
          length: true,
          alreadyExists: true
        }
      });
    }

    this.buttonStateChange();
  };

  handlePasswordChange = password => {
    this.setState({
      password
    });

    if (password.length >= 6 && password.length <= 72) {
      this.setState({
        passwordErrorTag: {
          ...this.state.passwordErrorTag,
          length: false
        }
      });
    } else {
      this.setState({
        passwordErrorTag: {
          ...this.state.passwordErrorTag,
          length: true
        }
      });
    }

    this.buttonStateChange();
  };

  handleUserTypeChange = user_type => {
    this.setState({
      user_type
    });

    if (user_type === -1) {
      this.setState({
        userTypeErrorTag: {
          ...this.state.userTypeErrorTag,
          noSelection: true
        }
      });
    } else {
      this.setState({
        userTypeErrorTag: {
          ...this.state.userTypeErrorTag,
          noSelection: false
        }
      });
    }
    this.buttonStateChange();
  };

  handleReEnteringPasswordChange = rePassword => {
    this.setState({
      rePassword
    });

    if (rePassword === this.state.password) {
      this.setState({
        rePasswordErrorTag: {
          ...this.state.rePasswordErrorTag,
          match: false
        }
      });
    } else {
      this.setState({
        rePasswordErrorTag: {
          ...this.state.rePasswordErrorTag,
          match: true
        }
      });
    }
    this.buttonStateChange();
  };

  handeNameChange = name => {
    this.setState({
      name
    });

    if (name.trim().length > 0) {
      this.setState({
        nameErrorTag: {
          ...this.state.nameErrorTag,
          length: false
        }
      });
    } else {
      this.setState({
        nameErrorTag: {
          ...this.state.nameErrorTag,
          length: true
        }
      });
    }
    this.buttonStateChange();
  };

  renderErrorTag = (error, tag) => {
    const redColor = {
      color: 'red',
      fontSize: '0.8em'
    };
    const greenColor = {
      color: 'green',
      fontSize: '0.8em'
    };

    return error ? (
      <span className='errorTag' style={redColor}>
        <FontAwesomeIcon icon={faTimes} /> {tag}
      </span>
    ) : (
      <span className='errorTag' style={greenColor}>
        <FontAwesomeIcon icon={faCheck} /> {tag}
      </span>
    );
  };

  buttonStateChange = () => {
    const {
      usernameErrorTags,
      passwordErrorTag,
      rePasswordErrorTag,
      userTypeErrorTag,
      nameErrorTag
    } = this.state;

    let errors = [
      usernameErrorTags.length,
      usernameErrorTags.alreadyExists,
      passwordErrorTag.length,
      rePasswordErrorTag.match,
      userTypeErrorTag.noSelection
    ];

    if (this.state.user_type === 'buyer') {
      errors = [...errors, nameErrorTag.length];
    }

    if (errors.includes(true)) {
      this.setState({
        isEnabled: false
      });
    } else {
      this.setState({
        isEnabled: true
      });
    }
  };

  render() {
    const {
      usernameErrorTags,
      passwordErrorTag,
      rePasswordErrorTag,
      userTypeErrorTag,
      nameErrorTag
    } = this.state;

    return (
      <form
        className='SignUpForm'
        onSubmit={e => {
          this.handleRegisteration(e);
        }}
      >
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
                onChange={e => {
                  this.handleUserNameChange(e.target.value);
                }}
              />
              {this.renderErrorTag(
                usernameErrorTags.length,
                'Username must be between 6 and 72 characters in length'
              )}
              {this.renderErrorTag(
                usernameErrorTags.alreadyExists,
                'Username already taken'
              )}
            </label>
            <label htmlFor='password'>
              <span className='label-tag'>*Password</span>
              <input
                type='password'
                name='password'
                id='password'
                value={this.state.password}
                onChange={e => {
                  this.handlePasswordChange(e.target.value);
                }}
              />
              {this.renderErrorTag(
                passwordErrorTag.length,
                'Password must be between 6 and 72 character in length'
              )}
            </label>
            <label htmlFor='rePassword'>
              <span className='label-tag'>*Re-enter Password</span>
              <input
                type='password'
                name='rePassword'
                id='rePassword'
                value={this.state.rePassword}
                onChange={e => {
                  this.handleReEnteringPasswordChange(e.target.value);
                }}
              />
              {this.renderErrorTag(
                rePasswordErrorTag.match,
                'Passwords do not match'
              )}
            </label>
            <label htmlFor='user_type'>
              <span className='label-tag'>*Account Type</span>
              <select
                name='user_type'
                className='select-css'
                id='user_type'
                value={this.state.user_type}
                onChange={e => {
                  this.handleUserTypeChange(e.target.value);
                }}
              >
                <option value='-1'>Select an account type</option>
                <option value='shop'>Seller</option>
                <option value='buyer'>Buyer</option>
              </select>
              {this.renderErrorTag(
                userTypeErrorTag.noSelection,
                'Select one account type to continue'
              )}
            </label>
            {this.state.user_type === 'shop' && <AddShopProfileFields />}
            {this.state.user_type === 'buyer' && (
              <>
                <label htmlFor='name'>
                  <span className='label-tag'>Name</span>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    defaultValue={this.state.name}
                    onChange={e => {
                      this.handeNameChange(e.target.value);
                    }}
                  />
                  {this.renderErrorTag(nameErrorTag.length, 'Name is required')}
                </label>
                <button
                  type='submit'
                  className='btn primary-btn'
                  disabled={!this.state.isEnabled}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </fieldset>
      </form>
    );
  }
}
