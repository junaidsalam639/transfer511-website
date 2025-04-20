import React from 'react'

const HomeFeatureSection = () => {
  return (
    <>
        <section className="feature-bike-one section-space">
            <div className="container">
              <div className="sec-title sec-title--five text-center">
                <h6 className="sec-title__tagline bw-split-in-right">
                  featurd rental bike
                </h6>
                <h3 className="sec-title__title bw-split-in-left">
                  Featured Electric bike
                </h3>
              </div>
              <div className="row align-items-center gutter-y-40">
                <div className="col-lg-3">
                  <div className="feature-bike-one__list">
                    <div
                      className="feature-bike-one__item wow fadeInLeft"
                      data-wow-duration="1500ms"
                      data-wow-delay="300ms"
                    >
                      <span className="feature-bike-one__item__number" />
                      <h4 className="feature-bike-one__item__title">
                        Bike Delivery and Pickup
                      </h4>
                      <p className="feature-bike-one__item__text">
                        We have optimized the booking process so that our clients
                      </p>
                    </div>
                    <div
                      className="feature-bike-one__item wow fadeInLeft"
                      data-wow-duration="1500ms"
                      data-wow-delay="300ms"
                    >
                      <span className="feature-bike-one__item__number" />
                      <h4 className="feature-bike-one__item__title">
                        Safety Equipment
                      </h4>
                      <p className="feature-bike-one__item__text">
                        We have optimized the booking process so that our clients
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-bike-one__thumb">
                    <img src="/assets/images/about/bike-2-1.png" alt="bike image" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="feature-bike-one__list">
                    <div
                      className="feature-bike-one__item wow fadeInLeft"
                      data-wow-duration="1500ms"
                      data-wow-delay="300ms"
                    >
                      <span className="feature-bike-one__item__number" />
                      <h4 className="feature-bike-one__item__title">
                        Flexible Rental Packages
                      </h4>
                      <p className="feature-bike-one__item__text">
                        We have optimized the booking process so that our clients
                      </p>
                    </div>
                    <div
                      className="feature-bike-one__item wow fadeInLeft"
                      data-wow-duration="1500ms"
                      data-wow-delay="300ms"
                    >
                      <span className="feature-bike-one__item__number" />
                      <h4 className="feature-bike-one__item__title">GPS Tracking</h4>
                      <p className="feature-bike-one__item__text">
                        We have optimized the booking process so that our clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-bike-one__element">
              <img src="/assets/images/shapes/bike-2-3.png" alt="" />
            </div>
            <div className="feature-bike-one__element-one">
              <img src="/assets/images/shapes/bike-2-2.png" alt="" />
            </div>
          </section>
    </>
  )
}

export default HomeFeatureSection
