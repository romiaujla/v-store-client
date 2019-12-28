import React, { Component } from 'react';
import './ShopPage.css'
import ShopContext from '../../Contexts/ShopContext'
import ShopService from '../../Service/ShopService'
import moment from 'moment'
import { arrayIsEmpty } from '../../HelperFunctions/HelperFunctions';
import SellerForm from '../../Components/SellerForm/SellerForm'


//Shop Page route is when the buyer/customer clicks to visit the shop to see shop info and the products it offer

export default class ShopPage extends Component {
    static contextType = ShopContext;

    state = {
        currentIndex: -1,
        isDialogShowing: false,
        serviceType: '',
        curShopName: '',
        curDesc: '',
        currAddress: '',
        curStartDate: Date(),
        curEndDate: Date(),
        curStartTime: '',
        curEndTime: ''
    }

    toggleDialog = (index, isOpen) => { //when index exists, the form is in edit mode. Otherwise it is in Add mode
        const indexExist = index > -1;
        this.setState({
            isDialogShowing: isOpen,
            currentIndex: index,
            serviceType: indexExist ? this.context.shop.service_type : '',
            curShopName: indexExist ? this.context.shop.shop_name : '', //if Edit, populate with the shop name, if Add, leave blank
            curDesc: indexExist ? this.context.shop.description : '',
            currAddress: indexExist ? this.context.shop.address : '',
            curStartDate: indexExist ? moment(this.context.shop.start_date).format('MMMM Do, YYYY') : Date(),
            curEndDate: indexExist ? moment(this.context.shop.end_date).format('MMMM Do, YYYY') : Date(),
            curStartTime: indexExist ? this.context.shop.opening_time : '',
            curEndTime: indexExist ? this.context.shop.closing_time : '',
        });
    }

    handleCloseDialog = () => {
        this.setState({ isDialogShowing: false })
    }
    // toggleDialog = () => {
    //     this.setState({
    //         isDialogShowing: !this.state.isDialogShowing
    //     })
    // }

    componentDidMount() {
        // get a single shop and set to context
        const { id } = this.props.match.params
        ShopService.getShop(id)
            .then((shop) => {
                this.context.setShop(shop);
            })
            .catch(err => {
                console.log(err)
            })
        ShopService.getShopProducts(id)
            .then(
                this.context.setShopProducts
            )
            .catch(err => {
                console.log(err)
            })
    }

    renderShopInfo(shop) {
        return (
            <section className='side-profile'>
                <div className='shop-img'>
                    {shop.image_url && (
                        <img
                            src={require(`../../../public/images/store-images/${shop.image_url}`)}
                            alt='shop'
                        />
                    )}
                </div>
                <div className='shop-info'>
                    <h1>{shop.name}</h1>
                    <h4 className='description'>{shop.description}</h4>
                    <h4>Come visit us at :</h4>
                    <span>{shop.address}</span>
                    <h4>Opening at: </h4>
                    <span>{shop.opening_time}</span>
                    <h4>Closing at: </h4>
                    <span>{shop.closing_time}</span>
                    <h4>
                        From {moment(shop.start_date).format('MMMM Do, YYYY')} to{' '}
                        {moment(shop.end_date).format('MMMM Do, YYYY')}
                    </h4>
                </div>
            </section>
        );
    }

    renderShopInfo(shop) {
        return (
            <section className='side-profile'>
                <div className="shop-img">
                    <img src={`./images/${shop.image_url}`} alt='shop' />
                </div>
                <div className="shop-info">
                    <h1>{shop.name}</h1>
                    <h4>{shop.description}</h4>
                    <h4>Come visit us at :</h4>
                    <span>{shop.address}</span>
                    <h4>Opening at: </h4>
                    <span>{shop.opening_time}</span>
                    <h4>Closing at: </h4>
                    <span>{shop.closing_time}</span>
                    <h4>From {moment(shop.start_date).format('MMMM Do, YYYY')} to {moment(shop.end_date).format('MMMM Do, YYYY')}</h4>
                </div>
                <button onClick={() => { this.toggleDialog(1, true) }} className="btn btn-light">Edit Your Shop</button>
                <section className='sellerForm'>
                    <SellerForm
                        isDialogShowing={this.state.isDialogShowing}
                        handleCloseDialog={this.handleCloseDialog}
                        currentIndex={this.state.currentIndex}
                        serviceType={this.state.serviceType}
                        curShopName={this.state.curShopName}
                        curDesc={this.state.curDesc}
                        currAddress={this.state.currAddress}
                        curStartDate={this.state.curStartDate}
                        curEndDate={this.state.curEndDate}
                        curStartTime={this.state.curStartTime}
                        curEndTime={this.state.curEndTime}

                    />
                </section>
            </section>
        )
    }

    renderProducts(products) {
        return (
            products.map((product) => {
                return (
                    <article key={product.id}>
                        <img src={`product.image_url`} />
                        <div class="text">
                            <h3>{product.item}</h3>
                            <p>{product.description}</p>
                            <p>Price: $ {product.price}</p>
                            <a className='btn btn-primary btn-block'>Add to cart</a>
                        </div>

                    </article>
                )
            })
        )
    }

    render() {
        const { shop, shopProducts } = this.context
        return (

            <div className='seller-page'>
                {this.renderShopInfo(shop)}

                <section className='items'>
                    <h2>Our Items</h2>
                    <div class="container">
                        <main class="grid">
                            {
                                !(shopProducts)
                                    ?
                                    <div className='LoadingScreen'>Loading</div>
                                    :
                                    this.renderProducts(shopProducts)
                            }
                        </main>

                    </div>
                </section>

                <div class='container'>
                    <main class='grid'>
                        {!shopProducts ? (
                            <div className='LoadingScreen'>Loading</div>
                        ) : (
                                this.renderProducts(shopProducts)
                            )}
                    </main>
                </div>
            </div>

        );
    }
}
