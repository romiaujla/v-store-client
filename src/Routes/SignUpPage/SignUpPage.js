import React, { Component } from 'react';
import SignUpForm from '../../Components/SignupForm/SignupForm';
import Backdrop from '../../Components/Backdrop/Backdrop';

class SignUpPage extends Component {
    
    render() { 
        return (
            <div className='SignUpPage'>
                <Backdrop>
                    <SignUpForm />
                </Backdrop>
            </div>
        );
    }
}
 
export default SignUpPage;