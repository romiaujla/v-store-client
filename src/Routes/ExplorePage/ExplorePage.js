import React, { Component } from 'react';
import './ExplorePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faHamburger, faGlassWhiskey, faTshirt, faRibbon, faBookOpen, faBath, faAnchor, faMusic } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './ExplorePage.css'
import Card from '../../Components/Card/Card';
import ShopListContext from '../../Contexts/ShopListContext';
import ShopService from '../../Service/ShopService';
import { arrayIsEmpty } from '../../HelperFunctions/HelperFunctions';

class ExplorePage extends Component {

  static contextType = ShopListContext;

  state= {
    term: ''
  }
  componentDidMount = () => {
    // get all the shops and set to context
    ShopService.getShops()
      .then((shops) => {
        this.context.setShops(shops);
      })
      .catch(err => {
        this.context.setError(err)
      })

  }

  // handleShopCardClick = (shopId) => {
  //   this.props.history.push(`/shop/${shopId}`);
  // }

  getShopsForCategory = (serviceType) => {
    ShopService.getShopsForCategory(serviceType)
      .then(this.context.setShops)
      .catch(this.context.error)
  }

  search = (term) => {
    // console.log(term)
    ShopService.getShopsForSearchBox(term)
      .then(this.context.setShops)
      .catch(this.context.error)
  }

  renderShopCards = (shops) => {
    return shops.map(shop => {
      return (
        <Card
          key={shop.id}
          shopId={shop.id}
          shop_name={shop.shop_name}
          description={shop.description}
          image_url={shop.image_url}
          service_type={shop.service_type}
        />
      )

    })
  }

  render() {

    const { shops } = this.context
    return (

      <div className='Explore_Page'>

        <section className='landing'>
          <div className='dark-overlay'>
            <div className='landing-inner'>
              <h2>Find your favorite pop-up shop</h2>
              <div className='search-bar'>
              <form  onSubmit={(e) => {
                  e.preventDefault()
                  this.search(this.state.term)}}>
                <input type="text" 
                onChange={(e) => this.setState({term: e.target.value})}
                className='search-box' 
                placeholder='Try "Toy Barn"' />
                <button className="btn search-btn" type="submit" >
                  Search
                </button>
                </form>
              </div>

            </div>
          </div>
        </section>
        <section className='nav-categories'>
          <h1>Explore the marketplace</h1>
          {/* refactor this list with array */}
          <ul className='categories'>
            <li onClick={() => this.getShopsForCategory('food and drinks')}>
              <div className='icons'>
                <FontAwesomeIcon icon={faGlassWhiskey} size='lg' />
                <FontAwesomeIcon icon={faHamburger} size='lg' />
              </div>
              <p> Food & Drink</p>
            </li>
            <li onClick={() => this.getShopsForCategory('body healing')}>
              <div className='icons'>
                <FontAwesomeIcon icon={faLeaf} size='lg' />
              </div>
              <p>Body Healing</p>
            </li>
            <li onClick={() => this.getShopsForCategory('toys and leisure')}>
              <div className='icons'>
                <FontAwesomeIcon icon={faMusic} size='lg' />
              </div>
              <p> Toys & Leisure</p>
            </li>
            <li onClick={() => this.getShopsForCategory('bath and body')}>
              <div className='icons'>
                <FontAwesomeIcon icon={faBath} size='lg' />
              </div>
              <p>Bath & Body</p>
            </li>
            <li onClick={() => this.getShopsForCategory('clothing and accessories')}>
              <div className='icons'>
                <FontAwesomeIcon icon={faTshirt} size='lg' />
              </div>
              <p>Clothing & Accessories</p>
            </li>
            <li onClick={() => this.getShopsForCategory('home and party decor')}>
              <div className='icons'>
                <FontAwesomeIcon icon={faRibbon} size='lg' />
              </div>
              <p>Home & Party Decor</p>
            </li>
            <li onClick={() => this.getShopsForCategory('educational')}>
              <div className='icons'>
                <FontAwesomeIcon icon={faBookOpen} size='lg' />
              </div>
              <p>Education</p>
            </li>
            <li onClick={() => this.getShopsForCategory('others')}>
              <div className='icons'>
                <FontAwesomeIcon icon={faAnchor} size='lg' />
              </div>
              <p>Others</p>
            </li>
          </ul>
        </section>
        <section className='cards-container'>
          <h1>Featured Popups</h1>
          <div className="cards">
            {
              arrayIsEmpty(shops)
                ?
                <div className='LoadingScreen'></div>
                :
                this.renderShopCards(shops)
            }
          </div>
        </section>

      </div>
    );
  }
}

export default ExplorePage;
