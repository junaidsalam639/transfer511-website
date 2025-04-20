import React from 'react'

const HomeAboutSection = () => {
    return (
        <>
            <section className="about-two md:py-20" id="about">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-6">
                            <div
                                className="about-two__thumb wow fadeInLeft"
                                data-wow-duration="1500ms"
                                data-wow-delay="100ms"
                            >
                                <div className="about-two__thumb__item">
                                    <img
                                        src="/assets/images/about/about-2-1.jpg"
                                        alt="about images"
                                    />
                                </div>
                                <div className="about-two__thumb__item-two">
                                    <img
                                        src="/assets/images/about/about-2-3.jpg"
                                        alt="about images"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-two__content">
                                <div className="sec-title sec-title--five text-start">
                                    <h6 className="sec-title__tagline bw-split-in-right">
                                        PICK &amp; TRAVEL
                                    </h6>
                                    <h3 className="sec-title__title bw-split-in-left">
                                        Want To Rent A Scooter?
                                    </h3>
                                </div>
                                <div className="about-two__feature">
                                    <div
                                        className="about-two__feature__item wow fadeInUp"
                                        data-wow-duration="1500ms"
                                        data-wow-delay="200ms"
                                    >
                                        <div className="about-two__feature__icon">
                                            <i className="icon-helmet" />
                                        </div>
                                        <div className="about-two__feature__content">
                                            <h5 className="about-two__feature__title">
                                                Easy Booking Process
                                            </h5>
                                            <p className="about-two__feature__text">
                                                We have optimized the booking process so that our clients
                                                can experience the easiest and the safest service!
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="about-two__feature__item wow fadeInUp"
                                        data-wow-duration="1500ms"
                                        data-wow-delay="200ms"
                                    >
                                        <div className="about-two__feature__icon">
                                            <i className="icon-motorcycle" />
                                        </div>
                                        <div className="about-two__feature__content">
                                            <h5 className="about-two__feature__title">
                                                Convenient Pick-Up &amp; Return Process
                                            </h5>
                                            <p className="about-two__feature__text">
                                                We have optimized the booking process so that our clients
                                                can experience the easiest and the safest service!
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="about-two__feature__item wow fadeInUp"
                                        data-wow-duration="1500ms"
                                        data-wow-delay="200ms"
                                    >
                                        <div className="about-two__feature__icon">
                                            <i className="icon-helmet" />
                                        </div>
                                        <div className="about-two__feature__content">
                                            <h5 className="about-two__feature__title">
                                                Easy Booking Process
                                            </h5>
                                            <p className="about-two__feature__text">
                                                We have optimized the booking process so that our clients
                                                can experience the easiest and the safest service!
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="about-two__feature__item wow fadeInUp"
                                        data-wow-duration="1500ms"
                                        data-wow-delay="200ms"
                                    >
                                        <div className="about-two__feature__icon">
                                            <i className="icon-motorcycle" />
                                        </div>
                                        <div className="about-two__feature__content">
                                            <h5 className="about-two__feature__title">
                                                Convenient Pick-Up &amp; Return Process
                                            </h5>
                                            <p className="about-two__feature__text">
                                                We have optimized the booking process so that our clients
                                                can experience the easiest and the safest service!
                                            </p>
                                        </div>
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

export default HomeAboutSection
