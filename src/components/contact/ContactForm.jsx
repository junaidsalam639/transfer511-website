import React from 'react'

const ContactForm = () => {
    return (
        <>
            <>
                <div className="page-header-one">
                    <div
                        className="page-header-one__bg"
                        style={{
                            backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-1.jpg)"
                        }}
                    />
                </div>
                {/* /.page-header-one */}
                <section className="contact-one section-space">
                    <div className="container">
                        <div className="row gutter-y-30">
                            <div className="col-xl-4 col-lg-6">
                                <div className="contact-one__list">
                                    <div
                                        className="contact-one__item wow fadeInLeft"
                                        data-wow-duration="1500ms"
                                    >
                                        <div className="contact-one__item__icon">
                                            <i className="icon-pin" />
                                        </div>
                                        <div className="contact-one__item__content">
                                            <h5 className="contact-one__item__title">Mailing Address</h5>
                                            <p className="contact-one__item__text">
                                                901 N Pitt Str., Suite 170 Alexandria, USA
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="contact-one__item wow fadeInLeft"
                                        data-wow-duration="1700ms"
                                    >
                                        <div className="contact-one__item__icon">
                                            <i className="icon-telephone" />
                                        </div>
                                        <div className="contact-one__item__content">
                                            <h5 className="contact-one__item__title">Quick Contact</h5>
                                            <a
                                                href="tel:+49 1765 7844670"
                                                className="contact-one__item__call"
                                            >
                                                +49 1765 7844670
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="contact-one__item wow fadeInLeft"
                                        data-wow-duration="1900ms"
                                    >
                                        <div className="contact-one__item__icon">
                                            <i className="icon-email-1" />
                                        </div>
                                        <div className="contact-one__item__content">
                                            <h5 className="contact-one__item__title">support email</h5>
                                            <a
                                                href="mailto:info@transfer511.com"
                                                className="contact-one__item__call"
                                            >
                                                info@transfer511.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="contact-one__inner">
                                    <div
                                        className="contact-one__bg"
                                        style={{
                                            backgroundImage:
                                                "url(/assets/images/shapes/contact-shape-1-1.png)"
                                        }}
                                    />
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="contact-one__form__thumb real-image">
                                                <img
                                                    src="/assets/images/resources/contact-1-1.jpg"
                                                    alt="rentol image"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <form
                                                className="contact-one__form contact-form-validated form-one wow fadeInUp"
                                                data-wow-duration="1500ms"
                                                action="https://bracketweb.com/rentolhtml/inc/sendemail.php"
                                            >
                                                <div className="form-one__group">
                                                    <div className="form-one__control form-one__control--full">
                                                        <input type="text" name="name" placeholder="name" />
                                                    </div>
                                                    <div className="form-one__control form-one__control--full">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder="Email address"
                                                        />
                                                    </div>
                                                    <div className="form-one__control form-one__control--full">
                                                        <input
                                                            type="text"
                                                            name="subject"
                                                            placeholder="select subject"
                                                        />
                                                    </div>
                                                    <div className="form-one__control form-one__control--full">
                                                        <textarea
                                                            name="message"
                                                            placeholder="Write  a message"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <div className="form-one__control form-one__control--full">
                                                        <button
                                                            type="submit"
                                                            className="rentol-btn rentol-btn--submite"
                                                        >
                                                            get in touch <i className="icon-right-arrow" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </>
    )
}

export default ContactForm
