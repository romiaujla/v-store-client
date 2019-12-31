import React, { Component } from 'react';
import Backdrop from '../../Components/Backdrop/Backdrop';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import AuthService from '../../Service/AuthService';
import TokenService from '../../Service/TokenService';
import LoggedContext from '../../Contexts/LoggedContext';

class SignUpPage extends Component {

    static contextType = LoggedContext;

    handleRegistration = async (username, password) => {
        console.log(username, password);
        await AuthService.postLogin({
            username,
            password,
          }).then(res => {
              console.log(res.userType, res.userTypeId);
              TokenService.saveAuthToken(res.authToken);
              this.context.setUserType(res.userType, res.userTypeId);
          }).catch((err) => {
            console.log(err);
          });
        this.props.history.push('/explore');
    }
    
    render() { 
        return (
            <div className='SignUpPage'>
                <Backdrop>
                    <SignUpForm 
                        onRegistrationSuccess={(user, pass) => {this.handleRegistration(user, pass)}}
                    />
                </Backdrop>
            </div>
        );
    }
}
 
export default SignUpPage;