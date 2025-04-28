import React from 'react'
import { Link } from 'react-router'

const HomeFleetSection = () => {
  return (
    <>
      <section
        className="fleet-cta fleet-cta--two fleet-cta--three wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="300ms"
      >
        <div className="container">
          <div className="fleet-cta__inner">
            <div className="fleet-cta__inner__item">
              <div className="sec-title">
                <h6 className="sec-title__tagline bw-split-in-right">
                  24/7 Verfügbar
                </h6>
                <h3 className="sec-title__title bw-split-in-left">
                  Rufen sie uns jetzt an
                </h3>
              </div>
            </div>
            <div className="fleet-cta__inner__item fleet-cta__inner__item--two">
              <div className="fleet-cta__inner__item__call">
                <a href="tel:+49 1765 7844670" className="fleet-cta__call">
                  <div className="fleet-cta__call__icon">
                    <i className="icon-telephone" />
                    <i className="ripple" />
                  </div>
                  <div className="fleet-cta__call__content">
                    <span className="fleet-cta__call__text">call</span>
                    <h6 className="fleet-cta__call__number">+49 1765 7844670</h6>
                  </div>
                </a>
                <div
                  className="fleet-cta__inner__bg"
                  style={{
                    backgroundImage:
                      "url(/assets/images/shapes/background-cta.png)"
                  }}
                />
              </div>
            </div>
            <div className="fleet-cta__inner__item">
              <a href="#" className="fleet-cta__inner__btn">
                <span>Jetzt Anrufen</span>
                <span>
                  <i className="icon-up-right-arrow" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeFleetSection
