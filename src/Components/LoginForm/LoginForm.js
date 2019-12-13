import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  
            username: '',
            password: '',
            error: '',
        }
    }

    render() { 
        return ( 
            <form className='LoginForm'>
                <fieldset>
                    <legend>
                        Login
                    </legend>
                    <section className='form-input-fields'>
                        <label htmlFor='username'>
                            <span>* Username</span>
                            <input 
                                className='form-input-text' 
                                type='text'
                                id='username'
                                name='username'
                                value={this.state.username}
                                onChange={(e) => {this.setState({username: e.target.value})}}
                            />
                        </label>
                        <label htmlFor='password'>
                            <span>* Password</span>
                            <input 
                                className='form-input-text' 
                                type='password'
                                id='password'
                                name='password'
                                value={this.state.password}
                                onChange={(e) => {this.setState({password: e.target.value})}}
                            />
                        </label>
                    </section>
                </fieldset>
            </form>
        );
    }
}
 
export default LoginForm;