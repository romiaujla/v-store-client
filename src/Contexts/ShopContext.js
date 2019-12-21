import React, { Component } from 'react';
import ShopService from '../Service/ShopService';

const ShopsContext = React.createContext({
    shops: [],
    error: null,
    setShops: () => {},
})

export default ShopsContext;

export class ShopsProvider extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            shops: [],
            error: null,
        }
    }

    // set the shops in the state
    setShops = (shops) => {
        this.setState({
            shops,
        })
    }


    render() { 

        const obj = {
            shops: this.state.shops,
            error: this.state.error,
            setShops: this.setShops,
        }

        return (
            <ShopsContext.Provider value={obj}>
                {this.props.children}
            </ShopsContext.Provider>
        );
    }
}
