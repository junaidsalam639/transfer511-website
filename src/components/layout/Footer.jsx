import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <>
            <footer className="main-footer main-footer--two">
                <div
                    className="main-footer__bg"
                    style={{ backgroundImage: "url(/assets/images/shapes/footer-bg.png)" }}
                />
                <div className="main-footer__middle">
                    <div className="container">
                        <div className="main-footer__middle__inner">
                            <div className="row">
                                <div
                                    className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    data-wow-delay="00ms"
                                >
                                    <div className="footer-widget footer-widget--about">
                                        <div className="footer-widget__logo logo-retina">
                                            <Link to="/">
                                                <img
                                                    src="/assets/images/logo-4-light.png"
                                                    width={140}
                                                    height={50}
                                                    alt="Rentol logo"
                                                />
                                            </Link>
                                        </div>
                                        <p className="footer-widget__about-text">
                                            There are two main types: solar photovoltaic (PV) systems
                                            for electricity generation and
                                        </p>
                                        <div className="footer-widget__social">
                                            <Link to="https://facebook.com/">
                                                <i className="fab fa-facebook-f" aria-hidden="true" />
                                                <span className="sr-only">Facebook</span>
                                            </Link>
                                            <Link to="https://twitter.com/">
                                                <i className="fab fa-twitter" aria-hidden="true" />
                                                <span className="sr-only">Twitter</span>
                                            </Link>
                                            <Link to="https://instagram.com/">
                                                <i className="fab fa-instagram" aria-hidden="true" />
                                                <span className="sr-only">Instagram</span>
                                            </Link>
                                            <Link to="https://www.youtube.com/">
                                                <i className="fab fa-youtube" aria-hidden="true" />
                                                <span className="sr-only">Youtube</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    data-wow-delay="200ms"
                                >
                                    <div className="footer-widget footer-widget--links">
                                        <h2 className="footer-widget__title">Discover</h2>
                                        <ul className="list-unstyled footer-widget__links">
                                            <li>
                                                <Link to="/">Rental Tips</Link>
                                            </li>
                                            <li>
                                                <Link to="/">News &amp; Updates</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Low-Cost Rent</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Scooter Adventures</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Insurance Cases</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    data-wow-delay="400ms"
                                >
                                    <div className="footer-widget footer-widget--post">
                                        <h2 className="footer-widget__title">Customer Info</h2>
                                        <ul className="list-unstyled footer-widget__links">
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/about">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/vehicle">Vehicles</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="col-md-6 col-lg-5 col-xl-3 wow fadeInUp">
                                    <div className="footer-widget footer-widget--contact">
                                        <h2 className="footer-widget__title">Contact Us</h2>
                                        <ul className="list-unstyled footer-widget__contact">
                                            <li>
                                                <i className="icon-email-1" />
                                                <a href="mailto:info@transfer511.com">info@transfer511.com</a>
                                            </li>
                                            <li>
                                                <i className="icon-telephone" />
                                                <a href="tel:+49 1765 7844670">+49 1765 7844670</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-footer__bottom">
                    <div className="container">
                        <div className="main-footer__bottom__inner">
                            <p className="main-footer__copyright">
                                {" "}
                                © Copyright <span className="dynamic-year" /> Company.com{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
