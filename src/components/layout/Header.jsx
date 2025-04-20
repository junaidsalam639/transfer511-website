import React, { useState } from 'react'
import { Link } from 'react-router'

const Header = () => {
    const [tootleBtn, setToogleBtn] = useState(false)

    return (
        <>
            <header className="main-header main-header--two sticky-header sticky-header--normal">
                <div className="container-fluid">
                    <div className="main-header__inner-two">
                        <div className="main-header__logo logo-retina">
                            <Link to="/">
                                <img
                                    src="/assets/images/logo-4-dark.png"
                                    alt="Rentol HTML"
                                    width={196}
                                    height={70}
                                />{" "}
                            </Link>
                        </div>
                        <div className="main-header__middle">
                            <div className="main-header__bottom">
                                <nav className="main-header__nav main-menu">
                                    <ul className="main-menu__list">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About us</Link>
                                        </li>
                                        <li>
                                            <Link to="/vehicle">Vehicles</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact us</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="main-header__right">
                                    <div className="main-header__right__info">
                                        <Link
                                            to="#"
                                            className="search-toggler main-header__right__info__item"
                                        >
                                            <i className="icon-search" aria-hidden="true" />
                                        </Link>
                                        <Link
                                            to="/"
                                            className="main-header__right__info__item"
                                        >
                                            <i className="icon-cart" aria-hidden="true" />
                                        </Link>
                                    </div>
                                    <Link
                                        to="tel:+88-0123-654-99"
                                        className="main-header__right__call"
                                    >
                                        <div className="main-header__right__icon">
                                            <i className="icon-telephone" />
                                        </div>
                                        <div className="main-header__right__content">
                                            <span className="main-header__right__text">
                                                call for rent
                                            </span>
                                            <h6 className="main-header__right__number">
                                                +88 0123 654 99
                                            </h6>
                                        </div>
                                    </Link>
                                </div>
                                <div
                                    onClick={() => setToogleBtn(!tootleBtn)}
                                    className="mobile-nav__btn mobile-nav__toggler">
                                    <span />
                                    <span />
                                    <span />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`mobile-nav__wrapper ${tootleBtn && 'expanded'}`}>
                <div className="mobile-nav__overlay mobile-nav__toggler" />
                <div className="mobile-nav__content">
                    <span onClick={() => setToogleBtn(!tootleBtn)} className="mobile-nav__close mobile-nav__toggler">
                        <i className="fa fa-times" />
                    </span>
                    <div className="logo-box">
                        <Link to="/" aria-label="logo image">
                            <img
                                src="/assets/images/logo-light.png"
                                width={169}
                                alt="Rentol HTML"
                            />
                        </Link>
                    </div>
                    <div className="mobile-nav__container">
                        <ul className="main-menu__list">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About us</Link>
                            </li>
                            <li>
                                <Link to="/vehicle">Vehicles</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="mobile-nav__container" />
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope" />
                            <Link to="mailto:needhelp@rentol.com">needhelp@rentol.com</Link>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt" />
                            <Link to="tel:666-888-0000">666 888 0000</Link>
                        </li>
                    </ul>
                    <div className="mobile-nav__social">
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
            <div id="scroll-top" className="scroll-top">
                <span id="scroll-top-value" className="scroll-top-value" />
            </div>

        </>
    )
}

export default Header
