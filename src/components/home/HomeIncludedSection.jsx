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
            backgroundImage: "url(/assets/new-images/banner/banner-three.jpeg)"
          }}
        />
        <div className="container">
          <div className="sec-title sec-title--five text-center">
            <h3 className="sec-title__title bw-split-in-left">
              Unsere Dienste beinhalten
            </h3>
          </div>
          <div className="we-included__list">
            <div
              className="we-included__list__item  wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="we-included__list__icon">
                <i className="icon-headset" />
              </div>
              <h5 className="we-included__list__text">24/7 Kundensupport</h5>
            </div>
            <div
              className="we-included__list__item  wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="we-included__list__icon">
                <i className="icon-insurance" />
              </div>
              <h5 className="we-included__list__text">Keine verstecke Kosten</h5>
            </div>
            <div
              className="we-included__list__item  wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div className="we-included__list__icon">
                <i className="icon-paper" />
              </div>
              <h5 className="we-included__list__text">Kostenfreie Stornierung</h5>
            </div>
            <div
              className="we-included__list__item  wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="500ms"
            >
              <div className="we-included__list__icon">
                <i className="icon-discount" />
              </div>
              <h5 className="we-included__list__text">10% Rabatt auf die nächste Reise</h5>
            </div>
            <div
              className="we-included__list__item  wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="we-included__list__icon">
                <i className="icon-distance" />
              </div>
              <h5 className="we-included__list__text">Schnellste Route versichert</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeIncludedSection
