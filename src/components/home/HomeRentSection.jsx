import React from 'react'

const HomeRentSection = () => {
  return (
    <>
      <section className="rent-two">
        <div
          className="rent-two__bg"
          style={{ backgroundImage: "url(/assets/images/shapes/maps.png)" }}
        />
        <div className="rent-two__funfact">
          <div className="container">
            <div
              className="rent-two__funfact__inner wow fadeInUp animated"
            >
              <div
                className="rent-two__funfact__bg"
                style={{
                  backgroundImage: "url(/assets/new-images/banner/banner-one.jpg)",
                  backgroundPosition: 'center'
                }}
              />
              <div className="rent-two__funfact__item">
                <div className="rent-two__funfact__icon">
                  <i className="icon-motorcycle" />
                </div>
                <div className="rent-two__funfact__content count-box counted">
                  <h3 className="rent-two__funfact__title">
                    <span className="count-text" data-stop={3870} data-speed={1500}>
                      3870
                    </span>
                    <span />
                  </h3>
                  <p className="rent-two__funfact__text">Scooters &amp; Cars</p>
                </div>
              </div>
              <div className="rent-two__funfact__item">
                <div className="rent-two__funfact__icon">
                  <i className="icon-booking-1" />
                </div>
                <div className="rent-two__funfact__content count-box counted">
                  <h3 className="rent-two__funfact__title">
                    <span className="count-text" data-stop={69} data-speed={1500}>
                      69
                    </span>
                    <span>K</span>
                  </h3>
                  <p className="rent-two__funfact__text">Bookings Served</p>
                </div>
              </div>
              <div className="rent-two__funfact__item">
                <div className="rent-two__funfact__icon">
                  <i className="icon-emotions" />
                </div>
                <div className="rent-two__funfact__content count-box counted">
                  <h3 className="rent-two__funfact__title">
                    <span className="count-text" data-stop="5.9" data-speed={1500}>
                      5.9
                    </span>
                    <span>M</span>
                  </h3>
                  <p className="rent-two__funfact__text">Happy Customers</p>
                </div>
              </div>
              <div className="rent-two__funfact__item">
                <div className="rent-two__funfact__icon">
                  <i className="icon-touch" />
                </div>
                <div className="rent-two__funfact__content count-box counted">
                  <h3 className="rent-two__funfact__title">
                    <span className="count-text" data-stop="2.5" data-speed={1500}>
                      2.5
                    </span>
                    <span>M</span>
                  </h3>
                  <p className="rent-two__funfact__text">Scooters &amp; Cars</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="how-to-rent section-space">
          <div className="container">
            <div className="sec-title sec-title--five text-center">
              <h6 className="sec-title__tagline bw-split-in-right">
                HOW TO RENt
              </h6>
              <h3 className="sec-title__title bw-split-in-left">
                Make 3 Simple Steps to <br /> Rent a Car!
              </h3>
            </div>
            <div className="row gutter-y-30">
              <div className="col-lg-4 col-md-6">
                <div
                  className="how-to-rent__item wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="100ms"
                >
                  <div className="how-to-rent__item__inner">
                    <div className="how-to-rent__item__icon">
                      <i className="icon-motorcycle" />
                    </div>
                    <div className="how-to-rent__item__content">
                      <h5 className="how-to-rent__item__title">
                        Choose A Ride
                      </h5>
                      <p className="how-to-rent__item__text">
                        Select the one you want to rent using the catalogue.
                      </p>
                    </div>
                  </div>
                  <span className="how-to-rent__item__number" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="how-to-rent__item wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="300ms"
                >
                  <div className="how-to-rent__item__inner">
                    <div className="how-to-rent__item__icon">
                      <i className="icon-booking" />
                    </div>
                    <div className="how-to-rent__item__content">
                      <h5 className="how-to-rent__item__title">Make A Booking</h5>
                      <p className="how-to-rent__item__text">
                        Select the one you want to rent using the catalogue.
                      </p>
                    </div>
                  </div>
                  <span className="how-to-rent__item__number" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="how-to-rent__item wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="500ms"
                >
                  <div className="how-to-rent__item__inner">
                    <div className="how-to-rent__item__icon">
                      <i className="icon-like" />
                    </div>
                    <div className="how-to-rent__item__content">
                      <h5 className="how-to-rent__item__title">
                        Enjoy Your Ride
                      </h5>
                      <p className="how-to-rent__item__text">
                        Select the one you want to rent using the catalogue.
                      </p>
                    </div>
                  </div>
                  <span className="how-to-rent__item__number" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeRentSection
