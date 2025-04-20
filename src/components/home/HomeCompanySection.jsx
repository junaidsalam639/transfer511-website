import React from 'react'

const HomeCompanySection = () => {
  return (
    <>
        <section className="our-company section-space">
            <div
              className="our-company__bg rentol-jarallax"
              data-jarallax=""
              data-speed="0.30"
              style={{
                backgroundImage: "url(/assets/images/backgrounds/our-company-bg.jpg)"
              }}
            />
            <div className="container">
              <div className="row align-items-center gutter-y-40">
                <div className="col-lg-6">
                  <div className="our-company__content">
                    <div className="sec-title sec-title--five text-start">
                      <h6 className="sec-title__tagline bw-split-in-right">
                        OUR COMPANY
                      </h6>
                      <h3 className="sec-title__title bw-split-in-left">
                        Why Choose Us
                      </h3>
                    </div>
                    <p
                      className="our-company__text wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="200ms"
                    >
                      Sed ut perspiciatis unde omnis iste natus error voluptatem
                      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis et quasi architecto beatae
                      vitae dicta
                    </p>
                    <ul
                      className="our-company__list list-unstyled wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="200ms"
                    >
                      <li>
                        <span>
                          <i className="icon-check1" />
                        </span>{" "}
                        Easy Booking Process
                      </li>
                      <li>
                        <span>
                          <i className="icon-check1" />
                        </span>{" "}
                        Certified Expert Mechanics
                      </li>
                      <li>
                        <span>
                          <i className="icon-check1" />
                        </span>{" "}
                        Best Prices in Town
                      </li>
                    </ul>
                    <div
                      className="our-company__man wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="100ms"
                    >
                      <div className="our-company__man__image">
                        <img
                          src="/assets/images/resources/company-1-1.png"
                          alt="image"
                        />
                        <img
                          src="/assets/images/resources/company-1-2.png"
                          alt="image"
                        />
                        <img
                          src="/assets/images/resources/company-1-3.png"
                          alt="image"
                        />
                        <img
                          src="/assets/images/resources/company-1-4.png"
                          alt="image"
                        />
                      </div>
                      <span>1.5k Happy Clients</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="our-company__thumb">
                    <div
                      className="our-company__thumb__item wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="100ms"
                    >
                      <img src="/assets/images/about/company-1-1.jpg" alt="image" />
                      <span className="our-company__thumb__item__box" />
                    </div>
                    <div
                      className="our-company__thumb__item wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="100ms"
                    >
                      <span className="our-company__thumb__item__box" />
                      <img src="/assets/images/about/company-1-2.jpg" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default HomeCompanySection
