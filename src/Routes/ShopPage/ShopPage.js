import React, { Component } from 'react';
import './ShopPage.css'
import Card from '../../Components/Card/Card'

export default class ShopPage extends Component{
    render(){
        return(
            <div className='seller-page'>
                <section className='side-profile'>
                   <Card shop-name="Flip-Flop USA"/>
                    <p>Location: New York, NY</p>
                    <div>Status: Active</div>
                    <div>Open from 8am to 8pm</div>
                </section>
                <section className='items'>
                <button>Add new item</button>
                <h2>Available items</h2>

                  
                    
                </section>
            </div>
        )
    }
}