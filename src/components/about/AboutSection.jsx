import React from 'react'
import { Link } from 'react-router'

const AboutSection = () => {
    return (
        <>
            <div className="page-header-one">
                <div
                    className="page-header-one__bg"
                    style={{
                        backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.jpg)"
                    }}
                />
            </div>
            <section className="about-one section-space">
                <div className="container">
                    <div className="row gutter-y-40">
                        <div className="col-lg-6">
                            <div className="about-one__left">
                                <div className="sec-title sec-title--two text-start">
                                    <h6 className="sec-title__tagline bw-split-in-right">about us</h6>
                                    <h3 className="sec-title__title bw-split-in-left">
                                        Get to Know About rentol
                                    </h3>
                                </div>
                                <p className="about-one__text">
                                    Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor
                                    saerror sed earum a magni soluta quam minus dolor dolor sed earum
                                    a magni soluta autem dolor error error sit quam minus sint rem
                                </p>
                                <div className="about-one__thumb">
                                    <img src="/assets/images/about/about-1-1.jpg" alt="about image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-one__right">
                                <div className="about-one__thumb">
                                    <img src="/assets/images/about/about-1-2.jpg" alt="about image" />
                                    <div className="about-one__thumb__content">
                                        <h4 className="about-one__thumb__content__title">
                                            <span>10+ Years</span>EXPERIENCE
                                        </h4>
                                        <div className="about-one__thumb__content__item-video">
                                            <a
                                                className="video-popup"
                                                href="https://www.youtube.com/watch?v=0MuL8fd3pb8"
                                            >
                                                <i className="fas fa-play" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <p className="about-one__text">
                                    Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor
                                    saerror sed earum a magni soluta quam minus dolor dolor sed earum
                                    a magni soluta autem dolor error error sit quam minus sint rem
                                </p>
                                <Link to="/contact" className="about-one__btn">
                                    <span>contact us</span>
                                    <span>
                                        <i className="icon-up-right-arrow" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="funfact-one section-space">
                <div
                    className="funfact-one__bg"
                    style={{
                        backgroundImage: "url(/assets/images/backgrounds/funfact-bg-1-1.jpg)"
                    }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <div className="funfact-one__item count-box">
                                <div
                                    className="funfact-one__item__bg"
                                    style={{
                                        backgroundImage:
                                            "url(/assets/images/resources/funfact-bg-1-1.jpg)"
                                    }}
                                />
                                <h3 className="funfact-one__funfact__count">
                                    <span className="count-text" data-stop={1200} data-speed={1500} />
                                </h3>
                                <p className="funfact-one__funfact__text">Vehicle Fleet</p>
                                <div className="funfact-one__border__group">
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <div className="funfact-one__item count-box">
                                <div
                                    className="funfact-one__item__bg"
                                    style={{
                                        backgroundImage:
                                            "url(/assets/images/resources/funfact-bg-1-2.jpg)"
                                    }}
                                />
                                <h3 className="funfact-one__funfact__count">
                                    <span className="count-text" data-stop={5} data-speed={1500} />
                                    <span>M+</span>
                                </h3>
                                <p className="funfact-one__funfact__text">Kilometer of Drive</p>
                                <div className="funfact-one__border__group">
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <div className="funfact-one__item count-box">
                                <div
                                    className="funfact-one__item__bg"
                                    style={{
                                        backgroundImage:
                                            "url(/assets/images/resources/funfact-bg-1-3.jpg)"
                                    }}
                                />
                                {/* /.funfact-one__item__bg */}
                                <h3 className="funfact-one__funfact__count">
                                    <span className="count-text" data-stop={50} data-speed={1500} />
                                    <span>K+</span>
                                </h3>
                                {/* /.funfact-one__funfact__count */}
                                <p className="funfact-one__funfact__text">Pickup &amp; Drop</p>
                                {/* /.funfact-one__funfact__text */}
                                <div className="funfact-one__border__group">
                                    <span />
                                    <span />
                                </div>
                                {/* /.funfact-one__border__group */}
                            </div>
                            {/* /.funfact-one__item */}
                        </div>
                        {/* /.col-xl-3 col-lg-4 */}
                        <div className="col-xl-3 col-lg-4">
                            <div className="funfact-one__item count-box">
                                <div
                                    className="funfact-one__item__bg"
                                    style={{
                                        backgroundImage:
                                            "url(/assets/images/resources/funfact-bg-1-4.jpg)"
                                    }}
                                />
                                {/* /.funfact-one__item__bg */}
                                <h3 className="funfact-one__funfact__count">
                                    <span className="count-text" data-stop={20} data-speed={1500} />
                                    <span>K+</span>
                                </h3>
                                {/* /.funfact-one__funfact__count */}
                                <p className="funfact-one__funfact__text">Booking Reserved</p>
                                {/* /.funfact-one__funfact__text */}
                                <div className="funfact-one__border__group">
                                    <span />
                                    <span />
                                </div>
                                {/* /.funfact-one__border__group */}
                            </div>
                            {/* /.funfact-one__item */}
                        </div>
                        {/* /.col-xl-3 col-lg-4 */}
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </section>
            <section className="driver-one section-space">
                <div className="container">
                    <div className="sec-title sec-title--two text-center">
                        <h6 className="sec-title__tagline bw-split-in-right">
                            premium drivers
                        </h6>
                        {/* /.sec-title__tagline */}
                        <h3 className="sec-title__title bw-split-in-left">
                            Our Professional <br /> Chauffeurs
                        </h3>
                        {/* /.sec-title__title */}
                    </div>
                    {/* /.sec-title */}
                    <div className="tabs-box-two">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="tab-box-buttons-two">
                                    <ul className="tab-buttons-two driver-one__list list-unstyled">
                                        <li
                                            data-tab="#driverOne"
                                            className="tab-btn-two active-btn-two"
                                        >
                                            <div className="driver-one__item">
                                                <div className="driver-one__item__content">
                                                    <span className="driver-one__item__subtitle">
                                                        sr. driver
                                                    </span>
                                                    <h5 className="driver-one__item__title">
                                                        Francisco A. Riley
                                                    </h5>
                                                </div>
                                                {/* /.driver-one__item__content */}
                                                <div className="driver-one__item__social">
                                                    <a href="https://facebook.com/">
                                                        <i className="fab fa-facebook-f" aria-hidden="true" />
                                                        <span className="sr-only">Facebook</span>
                                                    </a>
                                                    <a href="https://twitter.com/">
                                                        <i className="fab fa-twitter" aria-hidden="true" />
                                                        <span className="sr-only">Twitter</span>
                                                    </a>
                                                    <a href="https://instagram.com/">
                                                        <i className="fab fa-instagram" aria-hidden="true" />
                                                        <span className="sr-only">Instagram</span>
                                                    </a>
                                                    <a href="https://www.youtube.com/">
                                                        <i className="fab fa-youtube" aria-hidden="true" />
                                                        <span className="sr-only">Youtube</span>
                                                    </a>
                                                </div>
                                                {/* /.driver-one__item__social */}
                                            </div>
                                            {/* /.driver-one__item */}
                                        </li>
                                        <li data-tab="#driverTwo" className="tab-btn-two">
                                            <div className="driver-one__item">
                                                <div className="driver-one__item__content">
                                                    <span className="driver-one__item__subtitle">
                                                        premium driver
                                                    </span>
                                                    <h5 className="driver-one__item__title">
                                                        Mariano S. Slater
                                                    </h5>
                                                </div>
                                                {/* /.driver-one__item__content */}
                                                <div className="driver-one__item__social">
                                                    <a href="https://facebook.com/">
                                                        <i className="fab fa-facebook-f" aria-hidden="true" />
                                                        <span className="sr-only">Facebook</span>
                                                    </a>
                                                    <a href="https://twitter.com/">
                                                        <i className="fab fa-twitter" aria-hidden="true" />
                                                        <span className="sr-only">Twitter</span>
                                                    </a>
                                                    <a href="https://instagram.com/">
                                                        <i className="fab fa-instagram" aria-hidden="true" />
                                                        <span className="sr-only">Instagram</span>
                                                    </a>
                                                    <a href="https://www.youtube.com/">
                                                        <i className="fab fa-youtube" aria-hidden="true" />
                                                        <span className="sr-only">Youtube</span>
                                                    </a>
                                                </div>
                                                {/* /.driver-one__item__social */}
                                            </div>
                                            {/* /.driver-one__item */}
                                        </li>
                                        <li data-tab="#driverThree" className="tab-btn-two">
                                            <div className="driver-one__item">
                                                <div className="driver-one__item__content">
                                                    <span className="driver-one__item__subtitle">
                                                        sr. driver
                                                    </span>
                                                    <h5 className="driver-one__item__title">
                                                        Laurie V. Cairns
                                                    </h5>
                                                </div>
                                                {/* /.driver-one__item__content */}
                                                <div className="driver-one__item__social">
                                                    <a href="https://facebook.com/">
                                                        <i className="fab fa-facebook-f" aria-hidden="true" />
                                                        <span className="sr-only">Facebook</span>
                                                    </a>
                                                    <a href="https://twitter.com/">
                                                        <i className="fab fa-twitter" aria-hidden="true" />
                                                        <span className="sr-only">Twitter</span>
                                                    </a>
                                                    <a href="https://instagram.com/">
                                                        <i className="fab fa-instagram" aria-hidden="true" />
                                                        <span className="sr-only">Instagram</span>
                                                    </a>
                                                    <a href="https://www.youtube.com/">
                                                        <i className="fab fa-youtube" aria-hidden="true" />
                                                        <span className="sr-only">Youtube</span>
                                                    </a>
                                                </div>
                                                {/* /.driver-one__item__social */}
                                            </div>
                                            {/* /.driver-one__item */}
                                        </li>
                                        <li data-tab="#driverFour" className="tab-btn-two">
                                            <div className="driver-one__item">
                                                <div className="driver-one__item__content">
                                                    <span className="driver-one__item__subtitle">
                                                        jr. driver
                                                    </span>
                                                    <h5 className="driver-one__item__title">
                                                        Clara P. Martinez
                                                    </h5>
                                                </div>
                                                {/* /.driver-one__item__content */}
                                                <div className="driver-one__item__social">
                                                    <a href="https://facebook.com/">
                                                        <i className="fab fa-facebook-f" aria-hidden="true" />
                                                        <span className="sr-only">Facebook</span>
                                                    </a>
                                                    <a href="https://twitter.com/">
                                                        <i className="fab fa-twitter" aria-hidden="true" />
                                                        <span className="sr-only">Twitter</span>
                                                    </a>
                                                    <a href="https://instagram.com/">
                                                        <i className="fab fa-instagram" aria-hidden="true" />
                                                        <span className="sr-only">Instagram</span>
                                                    </a>
                                                    <a href="https://www.youtube.com/">
                                                        <i className="fab fa-youtube" aria-hidden="true" />
                                                        <span className="sr-only">Youtube</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="tabs-content-two">
                                    <div
                                        className="driver-one__thumb tab-two active-tab-two"
                                        id="driverOne"
                                    >
                                        <img src="/assets/images/team/team-2-1.jpg" alt="image" />
                                    </div>
                                    <div className="driver-one__thumb tab-two" id="driverTwo">
                                        <img src="/assets/images/team/team-2-2.jpg" alt="image" />
                                    </div>
                                    <div className="driver-one__thumb tab-two" id="driverThree">
                                        <img src="/assets/images/team/team-2-3.jpg" alt="image" />
                                    </div>
                                    <div className="driver-one__thumb tab-two" id="driverFour">
                                        <img src="/assets/images/team/team-2-4.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection
