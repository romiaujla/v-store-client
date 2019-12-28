import React, { Component } from 'react';
import LoggedContext from './LoggedContext';
import ShopContext from './ShopContext';

export default CombinedContext = React.createContext();

const LoggedShopContext = props => {
    return (
        <LoggedContext.Consumer>
            {
                context1 => {
                    return (
                        <ShopContext.Consumer>
                            {
                                context2 => {
                                    return (
                                        <CombinedContext.Provider value={{context1, context2}}>
                                            {props.children}
                                        </CombinedContext.Provider>
                                    )
                                }
                            }
                        </ShopContext.Consumer>
                    )
                }
            }
        </LoggedContext.Consumer>
    )
}