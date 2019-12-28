import React, { Component } from 'react';
import './ShopPage.css';
import ShopContext from '../../Contexts/ShopContext';
import ShopService from '../../Service/ShopService';
import moment from 'moment';
import SellerForm from '../../Components/SellerForm/SellerForm';

//Shop Page route is when the buyer/customer clicks to visit the shop to see shop info and the products it offer

export default class ShopPage extends Component {
  
  static contextType = ShopContext;

  constructor(props){
    super(props);
    this.state = {
      editingMode: false
    }
  }

  componentDidMount() {
    // get a single shop and set to context
    const { id } = this.props.match.params;
    ShopService.getShop(id)
      .then(shop => {
        this.context.setShop(shop);
      })
      .catch(err => {
        console.log(err);
      });
    ShopService.getShopProducts(id)
      .then(this.context.setShopProducts)
      .catch(err => {
        console.log(err);
      });
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
          <h1 className='shop-name'>{shop.shop_name}</h1>
          <h4 className='description'>{shop.description}</h4>
          <div className='shop-info'>
            <h4>Come visit us at :</h4>
            <span>{shop.address}</span>
          </div>
          <div className='shop-info'>
            <h4>Opening at: </h4>
            <span>{shop.opening_time}</span>
          </div>
          <div className='shop-info'>
            <h4>Closing at: </h4>
            <span>{shop.closing_time}</span>
          </div>
          <h4>
            From 
            <span className='not-bold'> {moment(shop.start_date).format('MM/DD/YYYY')} </span> 
            to {' '}
            <span className='not-bold'>{moment(shop.end_date).format('MM/DD/YYYY')}</span>
          </h4>
        </div>
        <div>
          {
            this.state.editingMode
            ?
            <>
            <button
              className='btn btn-primary'
              type='button'
              onClick={
                () => {
                  this.setState({
                    editingMode: !this.state.editingMode
                  })
                }
              }
            >
              Save
            </button>
            <button
              className='btn btn-primary'
              type='button'
              onClick={
                () => {
                  this.setState({
                    editingMode: !this.state.editingMode
                  })
                }
              }
            >
              Cancel
            </button>
            </>
            :
            <button
              className='btn btn-primary'
              type='button'
              onClick={
                () => {
                  this.setState({
                    editingMode: !this.state.editingMode
                  })
                }
              }
            >
              Edit
            </button>
          }
        </div>
      </section>
    );
  }

  renderProducts(products) {
    return products.map(product => {
      return (
        <article key={product.id}>
          <img
            src={require(`../../../public/images/products/${product.image_url}`)}
          />
          <div className='text'>
            <h3>{product.item}</h3>
            <p>Description: {product.description}</p>
            <p>Price: $ {product.price}</p>
          </div>
        </article>
      );
    });
  }

  render() {
    const { shop, shopProducts } = this.context;
    return (
      <div className='seller-page'>
        {
          this.state.editingMode
          ?
          <SellerForm/>
          :
          this.renderShopInfo(shop)
        }
        <section className='items'>
          <h2>Our Items</h2>
          <div className='container'>
            <main className='grid'>
              {!shopProducts ? (
                <div className='LoadingScreen'>Loading</div>
              ) : (
                this.renderProducts(shopProducts)
              )}
            </main>
          </div>
        </section>
      </div>
    );
  }
}
