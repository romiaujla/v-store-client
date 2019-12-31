import React, { Component } from 'react';
import Backdrop from '../../Components/Backdrop/Backdrop';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';

class SignUpPage extends Component {

    handleRegistration = () => {
        this.props.history.push('/explore');
    }
    
    render() { 
        return (
            <div className='SignUpPage'>
                <Backdrop>
                    <SignUpForm 
                        onRegistrationSuccess={() => {this.handleRegistration()}}
                    />
                </Backdrop>
            </div>
        );
    }
}
 
export default SignUpPage;