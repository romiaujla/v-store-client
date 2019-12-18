import React, { Component } from 'react';
import './SellerPage.css'
import Card from '../../Components/Card/Card'

export default class SellerPage extends Component{
    render(){
        return(
            <div className='seller-page'>
                <section className='side-profile'>
                <span>Edit Profile</span>
                    <img src="https://source.unsplash.com/H2N9K9y9e3E" alt='profile img' height='300' width='100'/>
                    <h1>Flip Flop USA</h1>
                    <h3>Short Description...</h3>
                    <p>Location: New York, NY</p>
                    <div>Status: Active</div>
                    <div>Open from 8am to 8pm</div>
                </section>
                <section className='items'>
                <button>Add new item</button>
                <h2>Available items</h2>

                   <div className='item'>
                       <Card/>
                       <span><button>Edit Item</button></span>
                       <span><button>Delete Item</button></span>
                   </div>
                   <div className='item'>
                       <Card/>
                       <span><button>Edit Item</button></span>
                   </div>
                   <div className='item'>
                       <Card/>
                       <span><button>Edit Item</button></span>
                   </div>
                    
                </section>
            </div>
        )
    }
}