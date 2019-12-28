import React, { Component } from 'react';

const ShopListContext = React.createContext({
    shops: [],
    error: null,
    setShops: () => {},
})

export default ShopListContext;

export class ShopListProvider extends Component {
    
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
    setError = (error) =>{
        this.setState({
            error,
        })
    }
    clearError = () =>{
        this.setState({error: null})
    }

    render() { 

        const obj = {
            shops: this.state.shops,
            error: this.state.error,
            setShops: this.setShops,
        }

        return (
            <ShopListContext.Provider value={obj}>
                {this.props.children}
            </ShopListContext.Provider>
        );
    }
}
