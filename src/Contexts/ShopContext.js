import React, { Component } from 'react';

//this context is to provide the information of a single shop

const ShopContext = React.createContext({
    shop: {},
    error: null,
    setShop: () => {},
    setError: () => {},
    clearError: () => {},
    
})

export default ShopContext;

export class ShopProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shop: {},
            error: null,
        }
    }

    // set the shop in the state
    setShop = (shop) => {
        this.setState({
            shop
        })
    }

    clearError = () =>{
        this.setState({error: null})
    }


    render() { 

        const value = {
            shop: this.state.shop,
            error: this.state.error,
            setShop: this.setShop,
            setError: this.setError,
            clearError: this.clearError
        }

        return (
            <ShopContext.Provider value={value}>
                {this.props.children}
            </ShopContext.Provider>
        );
    }
}
