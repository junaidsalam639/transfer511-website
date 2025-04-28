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
                  <h3 className="sec-title__title bw-split-in-left">
                    Warum Sie Transfer511 wählen sollten
                  </h3>
                </div>
                <ul
                  className="our-company__list list-unstyled wow fadeInUp"
                >
                  <li>
                    <span>
                      <i className="icon-check1" />
                    </span>{" "}
                    Verlässlichkeit, die Sie spüren: Wir sind immer pünktlich, damit Sie stressfrei reisen können.
                  </li>
                  <li>
                    <span>
                      <i className="icon-check1" />
                    </span>{" "}
                    Komfort, der überzeugt: Unsere modernen Fahrzeuge bieten Ihnen den höchsten Komfort.
                  </li>
                  <li>
                    <span>
                      <i className="icon-check1" />
                    </span>{" "}
                    Klarheit und Transparenz: Keine Überraschungen bei den Preisen – wir bieten Ihnen faire, feste Preise.
                  </li>
                  <li>
                    <span>
                      <i className="icon-check1" />
                    </span>{" "}
                    Immer für Sie da: Ob früh am Morgen oder spät in der Nacht – wir fahren, wann Sie es brauchen.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our-company__thumb">
                <div
                  className="our-company__thumb__item wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="100ms"
                >
                  <img src="/assets/new-images/choose/choose-one.avif" alt="image" />
                  <span className="our-company__thumb__item__box" />
                </div>
                <div
                  className="our-company__thumb__item wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="100ms"
                >
                  <span className="our-company__thumb__item__box" />
                  <img src="/assets/new-images/choose/choose-two.avif" alt="image" />
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
