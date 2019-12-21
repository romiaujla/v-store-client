import React, { Component } from 'react';
import './ExplorePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faHamburger, faGlassWhiskey, faTshirt, faRibbon, faBookOpen, faBath, faAnchor, faMusic } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './ExplorePage.css'
import Card from '../../Components/Card/Card';
import ShopsContext from '../../Contexts/ShopContext';
import { arrayIsEmpty } from '../../HelperFunctions/HelperFunctions';

class ExplorePage extends Component {

  static contextType = ShopsContext;

  handleShopCardClick = (shopId) => {
    this.props.history.push(`/shop/${shopId}`);
  }

  renderShopCards = (shops) => {
    return shops.map(shop => {
      
      return (
        <Card 
          key={shop.id}
          shop_name={shop.shop_name}
          description={shop.description}
          image_url={shop.image_url}
          service_type={shop.service_type}
        />
      )
      
    })
  }

  render() {

    const {shops} = this.context

    return (

      <div className='Explore_Page'>

        <section className='landing'>
          <div className='dark-overlay'>
            <div className='landing-inner'>
              <h2>Find your favorite pop-up shop</h2>
              <div className='search-bar'>
                <input type="text" className='search-box' placeholder='Try "henna tatoo"' />
                <button className="btn search-btn" type="submit">
                  Search
                </button>
              </div>

            </div>
          </div>
        </section>
        <section className='nav-categories'>
          <h1>Explore the marketplace</h1>
          <ul className='categories'>
            <li>
              <Link to='/shop/type/food-and-drinks'>
                <div className='icons'>
                  <FontAwesomeIcon icon={faGlassWhiskey} size='lg' />
                  <FontAwesomeIcon icon={faHamburger} size='lg' />
                </div>
                <p> Food & Drink</p>
              </Link>
            </li>
            <li>
              <Link to='/shop/type/body-healing'>
                <div className='icons'>
                  <FontAwesomeIcon icon={faLeaf} size='lg' />
                </div>
                <p>Body Healing</p>
              </Link>

            </li>

            <li>
              <Link to='/shop/type/toys-and-liesure'>
                <div className='icons'>
                  <FontAwesomeIcon icon={faMusic} size='lg' />
                </div>
                <p> Toys & Leisure</p>
              </Link>

            </li>
            <li>
              <Link to='/shop/type/bath-and-body'>
                <div className='icons'>
                  <FontAwesomeIcon icon={faBath} size='lg' />
                </div>
                <p>Bath & Body</p>
              </Link>

            </li>
            <li>
              <Link to='/shop/type/clothing-and-accessories'>
                <div className='icons'>
                  <FontAwesomeIcon icon={faTshirt} size='lg' />
                </div>
                <p>Clothing & Accessories</p>
              </Link>

            </li>
            <li>
              <Link to='/shop/type/home-and-party-decor'>
                <div className='icons'>
                  <FontAwesomeIcon icon={faRibbon} size='lg' />
                </div>
                <p>Home & Party Decor</p>
              </Link>

            </li>
            <li>
              <Link to='/shop/type/education'>
                <div className='icons'>
                  <FontAwesomeIcon icon={faBookOpen} size='lg' />
                </div>
                <p>Education</p>
              </Link>

            </li>
            <li>
              <Link to='/shop/type/others'>
                <div className='icons'>
                  <FontAwesomeIcon icon={faAnchor} size='lg' />
                </div>
                <p>Others</p>
              </Link>
            </li>
          </ul>
        </section>
        <section className='cards-container'>
          <h1>Featured Popups</h1>
          <div className="cards">
            {
              arrayIsEmpty(shops) 
              ?
                <div className='LoadingScreen'>Loading</div>
              :
                this.renderShopCards(shops)
            }
            
            <Card handleShopCardClick={(shopId) => { this.handleShopCardClick(shopId) }}
              shop_name="FLip Flop" />
            <Card handleShopCardClick={(shopId) => { this.handleShopCardClick(shopId) }}
              shop_name="Shopmart heaven" />
            <Card handleShopCardClick={(shopId) => { this.handleShopCardClick(shopId) }}
              shop_name="La La Land" />
            <Card handleShopCardClick={(shopId) => { this.handleShopCardClick(shopId) }}
              shop_name="Walmart" />
          </div>
        </section>

      </div>
    );
  }
}

export default ExplorePage;
