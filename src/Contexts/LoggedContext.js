import React from 'react';

const LoggedContext = React.createContext({
    userType: '',
    setUserType: () => {},
})

export default LoggedContext;

export class LoggedProvider extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            userType: ''
        }
    }

    setUserType = (userType) => {
        this.setState({
            userType
        })
    }

    render(){

        const val = {
            userType: this.state.userType,
            setUserType: this.setUserType,
        }

        return (
            <LoggedContext.Provider value={val}>
                {this.props.children}
            </LoggedContext.Provider>
        );
    }
}