import React, { Component } from 'react';
import './ExplorePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faLeaf, faHamburger, faGlassWhiskey, faTshirt, faRibbon, faBookOpen, faBath, faAnchor, faMusic } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

class ExplorePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='Explore_Page'>

                <section className='landing'>
                    <div className='dark-overlay'>
                        <div className='landing-inner'>
                            <img src={require("../../images/logo-white.png")} alt="Shopping Cart" className="hero-logo"></img>
                            <h1 className='x-large-land'>Shop<mark className="hero-mark">zilla</mark></h1>
                            <p className='lead'>Find your favorite pop-up shop</p>
                            <input type="text" className='search-box' placeholder='Try "Soft-served ice cream"' />

                            <button className="btn search-btn" type="submit">
                                Search
                            </button>
                        </div>
                    </div>
                </section>
                <section >
                    <h1 className='large-land'>Explore the marketplace</h1>
                    <ul className='categories'>
                        <li>
                            <div className='icons'>
                                <FontAwesomeIcon icon={faGlassWhiskey} size='lg' />
                                <FontAwesomeIcon icon={faHamburger} size='lg' />
                            </div>
                            <p> Food & Drink</p>
                        </li>
                        <li>
                            <div className='icons'>
                                <FontAwesomeIcon icon={faLeaf} size='lg' />
                            </div>
                            <p>Body Healing</p>
                        </li>
                        <li>
                            <div className='icons'>
                                <FontAwesomeIcon icon={faAnchor} size='lg' />
                            </div>
                            <p>Tattoo & Piercing</p>
                        </li>
                        <li>
                            <div className='icons'>
                                <FontAwesomeIcon icon={faMusic} size='lg' />
                            </div>
                            <p>Toys and Entertainment</p>
                        </li>
                        <li>
                            <div className='icons'>
                                <FontAwesomeIcon icon={faBath} size='lg' />
                            </div>
                            <p>Bath & Body</p>
                        </li>
                        <li>
                            <div className='icons'>
                                <FontAwesomeIcon icon={faTshirt} size='lg' />
                            </div>
                            <p>Clothing & Accessories</p>
                        </li>
                        <li>
                            <div className='icons'>
                                <FontAwesomeIcon icon={faRibbon} size='lg' />
                            </div>
                            <p>Home & Party Decor</p>
                        </li>
                        <li>
                            <div className='icons'>
                                <FontAwesomeIcon icon={faBookOpen} size='lg' />
                            </div>
                        <p>Education</p>
                        </li>
                    </ul>

                </section>
                <section className='featured-stores'>
                    <h1>Featured popups</h1>
                    <div class="grid">
                        <div class="cell">
                            <img src="http://placehold.it/800x800" class="responsive-image" />
                        </div>
                        <div class="cell">
                            <img src="http://placehold.it/800x800" class="responsive-image" />
                        </div>
                        <div class="cell">
                            <img src="http://placehold.it/800x800" class="responsive-image" />
                        </div>
                        <div class="cell">
                            <img src="http://placehold.it/800x800" class="responsive-image" />
                        </div>
                        <div class="cell">
                            <img src="http://placehold.it/800x800" class="responsive-image" />
                        </div>
                        <div class="cell">
                            <img src="http://placehold.it/800x800" class="responsive-image" />
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default ExplorePage;