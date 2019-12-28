import React, { Component } from 'react';
import './ShopPage.css';
import ShopContext from '../../Contexts/ShopContext';
import ShopService from '../../Service/ShopService';
import moment from 'moment';

//Shop Page route is when the buyer/customer clicks to visit the shop to see shop info and the products it offer

export default class ShopPage extends Component {
  static contextType = ShopContext;

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

  renderProducts(products) {
    return products.map(product => {
      return (
        <article key={product.id}>
          <img
            src={require(`../../../public/images/products/${product.image_url}`)}
          />
          <div class='text'>
            <h3>{product.item}</h3>
            <p>Description: {product.description}</p>
            <p>Price: $ {product.price}</p>
            {/* <a className='btn btn-primary btn-block'>Add to cart</a> */}
          </div>
        </article>
      );
    });
  }

  render() {
    const { shop, shopProducts } = this.context;
    return (
      <div className='seller-page'>
        {this.renderShopInfo(shop)}

        <section className='items'>
          <h2>Our Items</h2>
          {/* <nav class='product-filter'>
            <div class='sort'>
              <div class='collection-sort'>
                <label>Filter by:</label>
                <select>
                  <option value='/'>All Items</option>
                </select>
              </div>
              <div class='collection-sort'>
                <label>Sort by:</label>
                <select>
                  <option value='/'>Featured</option>
                </select>
              </div>
            </div>
          </nav> */}

          <div class='container'>
            <main class='grid'>
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
