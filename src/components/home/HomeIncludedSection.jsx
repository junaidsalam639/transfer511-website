import React from 'react'

const HomeIncludedSection = () => {
  return (
    <>
       <section className="we-included section-space">
            <div
              className="we-included__bg rentol-jarallax"
              data-jarallax=""
              data-speed="0.30"
              style={{
                backgroundImage: "url(/assets/images/backgrounds/we-included-1-1.jpg)"
              }}
            />
            <div className="container">
              <div className="sec-title sec-title--five text-center">
                <h6 className="sec-title__tagline bw-split-in-right">we included</h6>
                <h3 className="sec-title__title bw-split-in-left">
                  Our Rental Bike Includes
                </h3>
              </div>
              <div className="we-included__list">
                <div
                  className="we-included__list__item  wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="100ms"
                >
                  <div className="we-included__list__icon">
                    <i className="icon-helmet" />
                  </div>
                  <h5 className="we-included__list__text">Helmets</h5>
                </div>
                <div
                  className="we-included__list__item  wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="200ms"
                >
                  <div className="we-included__list__icon">
                    <i className="icon-headset" />
                  </div>
                  <h5 className="we-included__list__text">Assistance</h5>
                </div>
                <div
                  className="we-included__list__item  wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="300ms"
                >
                  <div className="we-included__list__icon">
                    <i className="icon-insurance" />
                  </div>
                  <h5 className="we-included__list__text">Insurance</h5>
                </div>
                <div
                  className="we-included__list__item  wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="400ms"
                >
                  <div className="we-included__list__icon">
                    <i className="icon-paper" />
                  </div>
                  <h5 className="we-included__list__text">Cancellation</h5>
                </div>
                <div
                  className="we-included__list__item  wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="500ms"
                >
                  <div className="we-included__list__icon">
                    <i className="icon-discount" />
                  </div>
                  <h5 className="we-included__list__text">Discounts</h5>
                </div>
                <div
                  className="we-included__list__item  wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="600ms"
                >
                  <div className="we-included__list__icon">
                    <i className="icon-distance" />
                  </div>
                  <h5 className="we-included__list__text">Full Routes</h5>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default HomeIncludedSection
