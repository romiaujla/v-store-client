import React, { Component } from 'react';
import './ShopPage.css'
// import Card from '../../Components/Card/Card'

export default class ShopPage extends Component {
    render() {
        return (
            <div className='seller-page'>
                <section className='side-profile'>
                    {/* <Card shop-name="Flip-Flop USA"/> */}
                    <div className="shop-img">
                        <img src="https://source.unsplash.com/FzvCBuDhDDE" alt='shop'/>
                    </div>
                    <div className="shop-info">
                        <h1>TeeShirt</h1>
                        <h4>Lorem Ipsum Description</h4>
                        <p>Come visit us at 32 Kent Street, New York, NY</p>
                        <div>Status: Active</div>
                        <div>Open from 8am to 8pm</div>
                    </div>

                </section>
                <section className='items'>
                    <h2>We offer new tee-shirts on SALE</h2>
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
                                <img src="https://vangogh.teespring.com/v3/image/EzMTyEjKh-lwGS0DEHSCd31VwRE/480/560.jpg" alt="tshirt" />
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
