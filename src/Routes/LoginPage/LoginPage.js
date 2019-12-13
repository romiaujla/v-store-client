import React, { Component } from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='LoginPage'>
                <LoginForm />
            </div>
        );
    }
}
 
export default LoginPage;