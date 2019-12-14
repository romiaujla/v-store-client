import React, { Component } from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import Backdrop from '../../Components/Backdrop/Backdrop';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='LoginPage'>
                <Backdrop>
                <LoginForm />
                </Backdrop>
            </div>
        );
    }
}
 
export default LoginPage;