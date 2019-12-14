import React, { Component } from 'react';

class ShopPage extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            shop: {
                shop_name: 'Flip Flop USA',
                service_type: 'clothing and accessories',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                start_date: '2019-12-14',
                end_date: '2019-12-31',
                opening_time: '10:00:00',
                closing_time: '22:00:00',
                products: [
                    {
                        item: 'Red Flip Flops',
                        price: 10.00,
                        description: 'Red colored comfortable beach wear flip flops',
                    },
                    {
                        item: 'Black Leather Sandalls',
                        price: 25.00,
                        description: 'Black colored home wear flip flops',
                    }
                ],
            }
        }
    }

    render() { 
        return (
            <section className='ShopPage'>
                Shop Page
            </section>
        );
    }
}
 
export default ShopPage;