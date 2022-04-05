import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product'
type HomeProps = {
    products: ProductType[]
}

const Home = (props: HomeProps) => {
    return (
        <>
            <section className="section" id="products">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>Men's Latest</h2>
                                <span>Details to details is what makes Hexashop different from the other themes.</span>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="container">
                    <div className="row">
                        {props.products?.map((product) => {
                            return <>
                                <div className="col-lg-4">
                                    <div className="item">
                                        <div className="thumb">
                                            <div className="hover-content">

                                                <ul>
                                                    <li>
                                                        <a href="single-product.html">
                                                            <Link to={`/detail/${product.id}/products`}><i className="fa fa-eye"></i></Link>
                                                        </a>
                                                    </li>
                                                    <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                    <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>

                                            <img src="src/assets/images/kid-01.jpg" alt="" />
                                        </div>
                                        <div className="down-content">
                                            <h4>{product.name}</h4>

                                            <span>{product.price}</span>
                                            <span>
                                            </span>
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })}
                        <div className="col-lg-12">
                            <div className="pagination">
                                <ul>
                                    <li>
                                        <a href="#">1</a>
                                    </li>
                                    <li className="active">
                                        <a href="#">2</a>
                                    </li>
                                    <li>
                                        <a href="#">3</a>
                                    </li>
                                    <li>
                                        <a href="#">4</a>
                                    </li>
                                    <li>
                                        <a href="#">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="explore">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-content">
                                <h2>Explore Our Products</h2>
                                <span>You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or
                                    edit this layout. You can convert this template as any kind of ecommerce CMS theme as you
                                    wish.</span>
                                <div className="quote">
                                    <i className="fa fa-quote-left"></i>
                                    <p>You are not allowed to redistribute this template ZIP file on any other website.</p>
                                </div>
                                <p>There are 5 pages included in this HexaShop Template and we are providing it to you for
                                    absolutely free of charge at our TemplateMo website. There are web development costs for us.
                                </p>
                                <p>If this template is beneficial for your website or business, please kindly <a rel="nofollow"
                                    href="https://paypal.me/templatemo" target="_blank">support us</a> a little via PayPal.
                                    Please also tell your friends about our great website. Thank you.</p>
                                <div className="main-border-button">
                                    <a href="products.html">Discover More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-content">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="leather">
                                            <h4>Leather Bags</h4>
                                            <span>Latest Collection</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="first-image">
                                            <img src="src/assets/images/explore-image-01.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="second-image">
                                            <img src="src/assets/images/explore-image-02.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="types">
                                            <h4>Different Types</h4>
                                            <span>Over 304 Products</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="social">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Social Media</h2>
                                <span>Details to details is what makes Hexashop different from the other themes.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row images">
                        <div className="col-2">
                            <div className="thumb">
                                <div className="icon">
                                    <a href="http://instagram.com">
                                        <h6>Fashion</h6>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src="src/assets/images/instagram-01.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="thumb">
                                <div className="icon">
                                    <a href="http://instagram.com">
                                        <h6>New</h6>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src="src/assets/images/instagram-02.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="thumb">
                                <div className="icon">
                                    <a href="http://instagram.com">
                                        <h6>Brand</h6>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src="src/assets/images/instagram-03.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="thumb">
                                <div className="icon">
                                    <a href="http://instagram.com">
                                        <h6>Makeup</h6>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src="src/assets/images/instagram-04.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="thumb">
                                <div className="icon">
                                    <a href="http://instagram.com">
                                        <h6>Leather</h6>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src="src/assets/images/instagram-05.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="thumb">
                                <div className="icon">
                                    <a href="http://instagram.com">
                                        <h6>Bag</h6>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </div>
                                <img src="src/assets/images/instagram-06.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-heading">
                                <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                                <span>Details to details is what makes Hexashop different from the other themes.</span>
                            </div>
                            <form id="subscribe" action="" method="get">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <fieldset>
                                            <input name="name" type="text" id="name" placeholder="Your Name" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-5">
                                        <fieldset>
                                            <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*"
                                                placeholder="Your Email Address" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-2">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="main-dark-button"><i
                                                className="fa fa-paper-plane"></i></button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-6">
                                    <ul>
                                        <li>Store Location:<br /><span>Sunny Isles Beach, FL 33160, United States</span></li>
                                        <li>Phone:<br /><span>010-020-0340</span></li>
                                        <li>Office Location:<br /><span>North Miami Beach</span></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li>Work Hours:<br /><span>07:30 AM - 9:30 PM Daily</span></li>
                                        <li>Email:<br /><span>info@company.com</span></li>
                                        <li>Social Media:<br /><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a
                                            href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home