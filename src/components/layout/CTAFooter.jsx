import React from 'react'
import { Link } from 'react-router'

const CTAFooter = () => {
    return (
        <>
            <section className="cta-footer-two">
                <div className="container">
                    <div className="cta-footer-two__inner">
                        <div
                            className="cta-footer-two__bg"
                            style={{
                                backgroundImage: "url(/assets/new-images/car.avif)"
                            }}
                        />
                        <div className="cta-footer-two__content">
                            <h3 className="cta-footer-two__title">
                                Are you looking for an affordable Bikes and Scooters rental
                                Service?
                            </h3>
                        </div>
                        <div className="cta-footer-two__btn">
                            <Link to="/contact" className="cta-footer-two__btn__link">
                                <span>contact us</span>
                                <span>
                                    <i className="icon-up-right-arrow" />
                                </span>
                            </Link>
                        </div>
                        <div className="cta-footer-two__element">
                            <img src="/assets/new-images/car.avif" alt="image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTAFooter
