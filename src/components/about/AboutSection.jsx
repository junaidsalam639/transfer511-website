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
                        <div className="about-one__left">
                            <div className="sec-title sec-title--two text-start">
                                <h6 className="sec-title__tagline bw-split-in-right">Über uns</h6>
                                <h3 className="sec-title__title bw-split-in-left">
                                    Lernen Sie Transfer511 kennen
                                </h3>
                            </div>
                            <p className="about-one__text">
                                Willkommen bei <strong>Transfer511</strong> – Ihrem erfahrenen und familiengeführten Flughafentransfer in Frankfurt. Seit über 10 Jahren bringen wir unsere Fahrgäste sicher, pünktlich und komfortabel ans Ziel – ob zum Flughafen oder zurück.
                            </p>
                            <p className="about-one__text">
                                Als Familienbetrieb legen wir größten Wert auf <strong>Vertrauen, Freundlichkeit und höchste Servicequalität</strong>. Wir führen alle Aufträge persönlich aus – ganz ohne Drittanbieter oder Vermittler. So wissen Sie immer genau, mit wem Sie fahren.
                            </p>
                            <p className="about-one__text">
                                Unsere Fahrer sind <strong>bestens geschult, mehrsprachig</strong> und kennen sich in der Region hervorragend aus – für eine entspannte und reibungslose Fahrt.
                            </p>
                            <ul className="about-one__text">
                                <li>✔ Über 10 Jahre Erfahrung im Flughafentransfer</li>
                                <li>✔ Fester Preis – keine versteckten Kosten</li>
                                <li>✔ Kindersitze auf Wunsch</li>
                                <li>✔ 24/7 erreichbar – auch an Sonn- und Feiertagen</li>
                                <li>✔ Keine Vermittlung – 100% eigene Durchführung</li>
                                <li>✔ Persönlicher, familiengeführter Service</li>
                            </ul>
                            <p className="about-one__text">
                                Ihre Zufriedenheit ist unser Antrieb – <strong>damit Ihre Reise schon bei der Abholung entspannt beginnt.</strong>
                            </p>
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
                                    <span className="count-text" data-stop={5} data-speed={1500} />
                                    <span>110</span>
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
                                    <span>50M+</span>
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
                                <h3 className="funfact-one__funfact__count">
                                    <span className="count-text" data-stop={50} data-speed={1500} />
                                    <span>60K+</span>
                                </h3>
                                <p className="funfact-one__funfact__text">Pickup &amp; Drop</p>
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
                                            "url(/assets/images/resources/funfact-bg-1-4.jpg)"
                                    }}
                                />
                                <h3 className="funfact-one__funfact__count">
                                    <span className="count-text" data-stop={20} data-speed={1500} />
                                    <span>100K+</span>
                                </h3>
                                <p className="funfact-one__funfact__text">Booking Reserved</p>
                                <div className="funfact-one__border__group">
                                    <span />
                                    <span />
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
