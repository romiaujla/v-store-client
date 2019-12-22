import React, { Component } from 'react';
import './ShopPage.css'
import ShopContext from '../../Contexts/ShopContext'
import ShopService from '../../Service/ShopService'
import moment from 'moment'

//Shop Page route is when the buyer/customer clicks to visit the shop
export default class ShopPage extends Component {
    static contextType = ShopContext;
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
    }

    render() {
        const { shop } = this.context
        
        return (
            <div className='seller-page'>
                <section className='side-profile'>
                    <div className="shop-img">
                        <img src={`${shop.image_url}`} alt='shop'/>
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

                </section>
                <section className='items'>
                    <h2>Our Items</h2>
                    <nav class="product-filter">
                        <div class="sort">
                            <div class="collection-sort">
                                <label>Filter by:</label>
                                <select>
                                    <option value="/">All Items</option>
                                </select>
                            </div>
                            <div class="collection-sort">
                                <label>Sort by:</label>
                                <select>
                                    <option value="/">Featured</option>
                                </select>
                            </div>
                        </div>
                    </nav>
                    <div class="container">
                        <main class="grid">
                            <article>
                                <img src="https://vangogh.teespring.com/v3/image/-OpCH5guL7iRy6xu4D7E7xWz9K8/480/560.jpg" alt="tshirt" />
                                <div class="text">
                                    <h3>Police Unit K-9</h3>
                                    <p>by <a href="https://teespring.com/stores/dog-lover-graphic-design">Dog Lover Graphic Design</a></p>
                                    <p>Price: $9.99</p>
                                    <p>Material: 4.3 oz., 13 colors are 100% combed ringspun cotton. Machine Wash Cold, Tumble Dry Low. Sizing offered: XS - 3XL</p>
                                    <a href="https://teespring.com/fr/police-unit-k-9?cid=2759&page=1&pid=46&tsmac=store&tsmic=dog-lover-graphic-design"
                                        class="btn btn-primary btn-block">Add to cart</a>
                                </div>
                            </article>
                            <article> 
                                <img src="https://vangogh.teespring.com/v3/image/EzMTyEjKh-lwGS0DEHSCd31VwRE/480/560.jpg" alt="tshirt photo" />
                                <div class="text">
                                    <h3>If you call one dog</h3>
                                    <p>by <a href="https://teespring.com/stores/dog-lover-graphic-design">Dog Lover Graphic Design</a></p>
                                    <p>Price: $9.99</p>
                                    <p>Material: 4.3 oz., 9 colors are 100% combed ringspun cotton. Machine Wash Cold, Tumble Dry Low. Sizing offered: XS - 3XL</p>
                                    <a href="https://teespring.com/fr/new-if-you-call-one-dog-you-in?cid=2753&page=1&pid=46&sid=front&tsmac=store&tsmic=dog-lover-graphic-design"
                                        class="btn btn-primary btn-block">Add to cart</a>
                                </div>
                            </article>
                            <article>
                                <img src="https://vangogh.teespring.com/v3/image/bK43tppPNyqAOvmwmpzkMQxbvCo/480/560.jpg" alt="tshirt" />
                                <div class="text">
                                    <h3>Husky</h3>
                                    <p>by <a href="https://teespring.com/stores/dog-lover-graphic-design">Dog Lover Graphic Design</a></p>
                                    <p>Price: $9.99</p>
                                    <p>Material: 4.3 oz., 19 colors are 100% combed ringspun cotton. Machine Wash Cold, Tumble Dry Low. Sizing offered: XS - 3XL</p>
                                    <a href="https://teespring.com/fr/husky-2945?cid=2752&page=1&pid=46&tsmac=store&tsmic=dog-lover-graphic-design"
                                        class="btn btn-primary btn-block">Add to cart</a>
                                </div>
                            </article>
                            <article>
                                <img src="https://vangogh.teespring.com/v3/image/8KXofRZsEIbiARS5hTN7XbGl-0Y/480/560.jpg" alt="tshirt" />
                                <div class="text">
                                    <h3>Life is too short</h3>
                                    <p>by <a href="https://teespring.com/stores/dog-lover-graphic-design">Dog Lover Graphic Design</a></p>
                                    <p>Price: $9.99</p>
                                    <p>Material: 4.3 oz., 12 colors are 100% combed ringspun cotton. Machine Wash Cold, Tumble Dry Low. Sizing offered: XS - 3XL</p>
                                    <a href="https://teespring.com/fr/new-life-is-too-short-to-just?cid=2739&page=1&pid=46&tsmac=store&tsmic=dog-lover-graphic-design"
                                        class="btn btn-primary btn-block">Add to cart</a>
                                </div>
                            </article>
                            <article>
                                <img src="https://vangogh.teespring.com/v3/image/j7DemEbwCEV6GAmDyjZUhvqmC6s/480/560.jpg" alt="tshirt" />
                                <div class="text">
                                    <h3>Beware of dog</h3>
                                    <p>by <a href="https://teespring.com/stores/dog-lover-graphic-design">Dog Lover Graphic Design</a></p>
                                    <p>Price: $9.99</p>
                                    <p>Material: 4.3 oz., 20 colors are 100% combed ringspun cotton. Machine Wash Cold, Tumble Dry Low. Sizing offered: XS - 3XL</p>
                                    <a href="https://teespring.com/fr/beware-of-dog-4503?cid=2756&page=1&pid=46&sid=front&tsmac=store&tsmic=dog-lover-graphic-design"
                                        class="btn btn-primary btn-block">Add to cart</a>
                                </div>
                            </article>
                            <article>
                                <img src="https://vangogh.teespring.com/v3/image/913eK8V6wtGK4SkxJSTJDin2yCI/480/560.jpg" alt="tshirt" />
                                <div class="text">
                                    <h3>Did Someone Say Walk ?</h3>
                                    <p>by <a href="https://teespring.com/stores/dog-lover-graphic-design">Dog Lover Graphic Design</a></p>
                                    <p>Price: $9.99</p>
                                    <p>Material: 4.3 oz., 8 colors are 100% combed ringspun cotton. Machine Wash Cold, Tumble Dry Low. Sizing offered: XS - 3XL</p>
                                    <a href="https://teespring.com/fr/new-did-someone-say-walk?cid=2753&page=1&pid=46&sid=front&tsmac=store&tsmic=dog-lover-graphic-design"
                                        class="btn btn-primary btn-block">Add to cart</a>
                                </div>
                            </article>
                            <article>
                                <img src="https://vangogh.teespring.com/v3/image/JacE4rqPe8_g1OHuhxkse4oHCSk/480/560.jpg" alt="tshirt" />
                                <div class="text">
                                    <h3>The world is my canvas</h3>
                                    <p>by <a href="https://teespring.com/stores/dog-lover-graphic-design">Dog Lover Graphic Design</a></p>
                                    <p>Price: $9.99</p>
                                    <p>Material: 4.3 oz., 12 colors are 100% combed ringspun cotton. Machine Wash Cold, Tumble Dry Low. Sizing offered: XS - 3XL</p>
                                    <a href="https://teespring.com/fr/the-world-is-my-canvas-2019?cid=2744&page=1&pid=46&tsmac=store&tsmic=dog-lover-graphic-design"
                                        class="btn btn-primary btn-block">Add to cart</a>
                                </div>
                            </article>
                            <article>
                                <img src="https://vangogh.teespring.com/v3/image/NyIVcQ8H1ZddoIJ4GaRpkbXEF_0/480/560.jpg" alt="tshirt" />
                                <div class="text">
                                    <h3>I Love My Dog</h3>
                                    <p>by <a href="https://teespring.com/stores/dog-lover-graphic-design">Dog Lover Graphic Design</a></p>
                                    <p>Price: $9.99</p>
                                    <p>Material: 4.3 oz., 13 colors are 100% combed ringspun cotton. Machine Wash Cold, Tumble Dry Low. Sizing offered: XS - 3XL</p>
                                    <a href="https://teespring.com/fr/i-love-my-dog-7671?cid=2739&page=1&pid=46&sid=front&tsmac=store&tsmic=dog-lover-graphic-design"
                                        class="btn btn-primary btn-block">Add to cart</a>
                                </div>
                            </article>

                        </main>

                    </div>
                    {/* pagination needs to be dynamic */}
                    <div class="pagination">
                        {/* <a href="#">&laquo;</a>
                        <a href="#">1</a>
                        <a href="#" class="active">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">&raquo;</a> */}
                    </div>
                </section>
            </div>
        )
    }
}
