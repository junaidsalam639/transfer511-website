import React from 'react'

const HomeAboutSection = () => {
    return (
        <>
            <section className="about-two md:py-20" id="about">
                <div className="container">
                    <div className="row gutter-y-30 justify-center items-center">
                        <div className="col-lg-6">
                            <div
                                className="about-two__thumb wow fadeInLeft"
                                data-wow-duration="1500ms"
                                data-wow-delay="100ms"
                            >
                                <div className="about-two__thumb__item">
                                    <img
                                        src="/assets/new-images/about/about-two.webp"
                                        alt="about images"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-two__content">
                                <h3 className="text-2xl font-bold mb-4">
                                    Ihre Vorteile bei uns
                                </h3>
                                <div className="about-two__feature">
                                    <div className='flex'>
                                        <div className="about-two__feature__icon me-4">
                                            <i className="icon-helmet" />
                                        </div>
                                        <div className="about-two__feature__content">
                                            <h5 className="about-two__feature__title">
                                                Kartenakzeptanz
                                            </h5>
                                            <p className="about-two__feature__text">
                                                Wir akzeptieren alle gängigen Zahlungsmethoden ohne zusätzliche Gebühren.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex my-2"
                                    >
                                        <div className="about-two__feature__icon me-4">
                                            <i className="icon-motorcycle" />
                                        </div>
                                        <div className="about-two__feature__content">
                                            <h5 className="about-two__feature__title">
                                                Kostenlose Wartezeit
                                            </h5>
                                            <p className="about-two__feature__text">
                                                Wir versichern Ihnen eine kostenlose Wartezeit von 60 Minuten an allen Flughäfen. Alle anderen Standorte beinhalten eine Wartezeit von 15 Minuten
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex my-2"
                                    >
                                        <div className="about-two__feature__icon me-4">
                                            <i className="icon-helmet" />
                                        </div>
                                        <div className="about-two__feature__content">
                                            <h5 className="about-two__feature__title">
                                            Festpreis-Garantie
                                            </h5>
                                            <p className="about-two__feature__text">
                                                Starten Sie entspannt – mit transparenten Festpreisen, ohne versteckte Kosten und Bestpreisgarantie
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex my-2"
                                    >
                                        <div className="about-two__feature__icon me-4">
                                            <i className="icon-motorcycle" />
                                        </div>
                                        <div className="about-two__feature__content">
                                            <h5 className="about-two__feature__title">
                                                Kostenfreie Stornierung
                                            </h5>
                                            <p className="about-two__feature__text">
                                                Planänderung? Kein Problem! Bei Transfer511 stornieren Sie kostenfrei – ganz ohne Buchungs- oder Kreditkartengebühren, wenn Sie uns mindestens 4 Stunden vor der Fahrt informieren.
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
