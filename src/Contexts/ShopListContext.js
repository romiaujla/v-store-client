import React, { Component } from 'react';

const ShopListContext = React.createContext({
    shops: [],
    error: null,
    setShops: () => {},
    getShops: () => {},
    getShopById: () => {},
    getShopsByCategory: () => {},
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

    getShopById = (id) => {
        return this.state.shops.filter(shop => shop.id === parseInt(id, 10));
    }

    setShopById = (shop, id) => {
        // change the shop with the provided id
    }

    getShops = () => {
        return this.state.shops;
    }

    getShopsByCategory = (service_type) => {
        return this.state.shops.filter(shop => shop.service_type === service_type);
    } 

    render() { 

        const obj = {
            shops: this.state.shops,
            error: this.state.error,
            setShops: this.setShops,
            getShops: this.getShops,
            getShopById: this.getShopById,
            getShopsByCategory: this.getShopsByCategory,
        }

        return (
            <ShopListContext.Provider value={obj}>
                {this.props.children}
            </ShopListContext.Provider>
        );
    }
}
