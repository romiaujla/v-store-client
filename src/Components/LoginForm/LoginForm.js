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
                    <section className='landing'>
                        <div className='dark-overlay'>
                            <div className='landing-inner'>
                                <legend>
                                    <h3>LOGIN</h3>
                                </legend>
                                
                            </div>
                        </div>
                    </section>
                </fieldset>
            </form>
        );
    }
}
 
export default LoginForm;