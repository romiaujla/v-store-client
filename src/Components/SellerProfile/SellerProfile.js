import React, { Component } from 'react';
import SellerForm from '../SellerForm/SellerForm';
import ShopContext from '../../Contexts/ShopContext';
import ShopService from '../../Service/ShopService';
import moment from 'moment';
import './SellerProfile.css';

//Loggedin seller can see and edit their profile here

class SellerProfile extends Component {
    static contextType = ShopContext;
    state = {
        editIndex: -1,
        isDialogShowing: false
    }

    componentDidMount() {
        // get a single shop and set to context
        const { shopId } = this.props.match.params
        ShopService.getShop(shopId)
            .then((shop) => {
                this.context.setShop(shop);
            })
            .catch(err => {
                console.log(err)
            })
    }

    toggleDialog = () => {
        this.setState({
            isDialogShowing: !this.state.isDialogShowing
        })
    }

    handleAddImage = () => {

    }
    render() {
        const { shop } = this.context
        return (
            <div className='seller-profile'>
                <section className='side-profile'>
                    <div className="shop-img">
                        <img src={`${shop.image_url}`} /> <button className="btn btn-light">Add new image</button>
                    </div>
                    <div className="seller-info">
                        <section className='readOnly-info'>
                            <h4>Shop Name: </h4><span>{shop.shop_name}</span>
                            <h4>Service Type: </h4>
                            <span>{shop.service_type}</span>
                            <h4>Shop description: </h4>
                            <span>{shop.description}</span>
                            <h4>Location: </h4><span>{shop.address}</span>
                            <h4>Start Date: </h4>
                            <span>{moment(shop.start_date).format('MMMM Do, YYYY')}</span>
                            <h4>End Date: </h4><span>{moment(shop.end_date).format('MMMM Do, YYYY')}</span>
                            <h4>Opening Time: </h4><span>{shop.opening_time}</span>
                            <h4>Closing Time: </h4><span>{shop.closing_time}</span>
                        </section>

                        <section className='sellerForm'>
                            {/* <button onClick={this.toggleDialog} className="btn btn-light">Edit Your Shop</button> */}
                            <SellerForm
                                isDialogShowing={this.state.isDialogShowing}
                                handleCloseDialog={this.toggleDialog}
                            />
                        </section>

                    </div>

                </section>
                <section className='items'>
                    Shop items here...
                </section>

            </div>
        )
    }
}

export default SellerProfile