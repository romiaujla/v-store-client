import React, { Component } from 'react';
import './ShopPage.css';
import ShopContext from '../../Contexts/ShopContext';
import ShopService from '../../Service/ShopService';
import moment from 'moment';
import SellerForm from '../../Components/SellerForm/SellerForm';

//Shop Page route is when the buyer/customer clicks to visit the shop to see shop info and the products it offer

export default class ShopPage extends Component {
  static contextType = ShopContext;

  constructor(props) {
    super(props);
    this.state = {
      rprops: {},
      shop: props.shop || {},
      products: [],
      editingMode: false,
      showEditButton: false,
    };
  }

  renderInitialPageState = () => {
    // get a single shop and set to context
    const { id } = this.props.rprops.match.params;

    ShopService.getShopProducts(id)
      .then((products) => {
        this.setState({
          products,
        })
        console.log(products);
        console.log(id);
      })
      .catch(err => {
        console.log(err);
    });

    if(this.context.loggedInUser.id === this.props.rprops.match.params.id){
      this.setState({
        showEditButton: true
      })
    } 
  }

  componentDidMount = () => {
    this.renderInitialPageState();
  };

  handleCloseEditForm = () => {
    this.setState({
      editingMode: false
    })
  }

  handleEditShop = (shop) => {
    this.setState({
      shop: {
        ...this.state.shop,
        ...shop,
      }
    })

    // change data in the database
    ShopService.updateShop(shop, this.props.rprops.match.params.id)
      .then(res => res)
      .catch(err => {console.log(err)});
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
        {this.state.editingMode ? (
          <SellerForm 
            shop={shop} 
            closeEditForm={()=>{this.handleCloseEditForm()}}
            editShop={(shop) => {this.handleEditShop(shop)}}
          />
        ) : (
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
              <span className='not-bold'>
                {' '}
                {moment(shop.start_date).format('MM/DD/YYYY')}{' '}
              </span>
              to{' '}
              <span className='not-bold'>
                {moment(shop.end_date).format('MM/DD/YYYY')}
              </span>
            </h4>
          </div>
        )}
        {
          (this.state.showEditButton && !this.state.editingMode) && (
          <div>  
              <button
                className='btn btn-primary'
                type='button'
                onClick={() => {
                  this.setState({
                    editingMode: !this.state.editingMode
                  });
                }}
              >
                Edit
              </button>
          </div>
        )}
      </section>
    );
  }

  renderProducts(products) {
    return products.map(product => {
      return (
        <article key={product.id}>
          <img
            src={require(`../../../public/images/products/${product.image_url}`)}
            alt='product'
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

  renderProductsIfFound = products => {
    if (!products.length) {
      return (
        <div className='no-item'>
          <h1 className='no-item-header'>
            No products at the moment,
            <br />
            please come back later!
          </h1>
        </div>
      );
    }

    return (
      <>
        <h2>Our Items</h2>
        <div className='container'>
          <main className='grid'>{this.renderProducts(products)}</main>
        </div>
      </>
    );
  };

  render() {
    const {products =[] } = this.state;
    const {shop = {}} = this.props;
    return (
      <div className='seller-page'>
        {this.renderShopInfo(shop)}
        <section className='items'>
          {!products ? (
            <div className='LoadingScreen'>Loading Products</div>
          ) : (
            this.renderProductsIfFound(products)
          )}
        </section>
      </div>
    );
  }
}
