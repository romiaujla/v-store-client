import React, { Component } from 'react';
import './ExplorePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faLeaf, faHamburger, faGlassWhiskey, faTshirt, faRibbon, faBookOpen, faBath, faAnchor, faMusic, faImages } from '@fortawesome/free-solid-svg-icons'
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


                            {/* <select className='categories'>
                                <option className='icons' value='food_drink'>

                                    Food & Drink
                                </option>
                                <option className='icons' value='food_drink'>

                                    Body Healing
                                </option>
                                <option className='icons' value='food_drink'>

                                    Entertainment
                                </option>
                                <option className='icons' value='food_drink'>

                                    Bath & Body
                                </option>
                                <option className='icons' value='food_drink'>

                                    Clothing & Accessories
                                </option>
                                <option className='icons' value='food_drink'>

                                    Home & Party Decor
                                </option>
                                <option className='icons' value='food_drink'>

                                    Education
                                </option>
                            </select> */}


                        </div>
                    </div>
                </section>
                <section className='nav-categories'>
                    <h1>Explore the marketplace</h1>
                    <ul className='categories'>
                        <li>
                            <Link>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faGlassWhiskey} size='lg' />
                                    <FontAwesomeIcon icon={faHamburger} size='lg' />
                                </div>
                                <p> Food & Drink</p>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faLeaf} size='lg' />
                                </div>
                                <p>Body Healing</p>
                            </Link>

                        </li>

                        <li>
                            <Link>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faMusic} size='lg' />
                                </div>
                                <p> Entertainment</p>
                            </Link>

                        </li>
                        <li>
                            <Link>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faBath} size='lg' />
                                </div>
                                <p>Bath & Body</p>
                            </Link>

                        </li>
                        <li>
                            <Link>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faTshirt} size='lg' />
                                </div>
                                <p>Clothing & Accessories</p>
                            </Link>

                        </li>
                        <li>
                            <Link>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faRibbon} size='lg' />
                                </div>
                                <p>Home & Party Decor</p>
                            </Link>

                        </li>
                        <li>
                            <Link>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faBookOpen} size='lg' />
                                </div>
                                <p>Education</p>
                            </Link>

                        </li>
                        <li>
                            <Link>
                                <div className='icons'>
                                    <FontAwesomeIcon icon={faAnchor} size='lg' />
                                </div>
                                <p>Others</p>
                            </Link>

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