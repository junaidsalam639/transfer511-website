import React from 'react';

const fleetData = [
  {
    image: "/assets/images/resources/bike-1-1.png",
    price: "$25",
    title: "Suzuki - GSX",
    text: "standard motor bike",
    link: "/",
  },
  {
    image: "/assets/images/resources/bike-1-3.png",
    price: "$25",
    title: "MV Agusta",
    text: "F4, Brutale",
    link: "/",
  },
  {
    image: "/assets/images/resources/bike-1-1.png",
    price: "$25",
    title: "Suzuki - GSX",
    text: "standard motor bike",
    link: "/",
  },
  {
    image: "/assets/images/resources/bike-1-3.png",
    price: "$25",
    title: "MV Agusta",
    text: "F4, Brutale",
    link: "/",
  },
];

const HomeRentingFleatSection = () => {
  return (
    <section className="renting-fleet section-space">
      <div className="container">
        <div className="renting-fleet__top">
          <div className="sec-title sec-title--five text-center">
            <h6 className="sec-title__tagline bw-split-in-right">
              available scooters &amp; Bikes
            </h6>
            <h3 className="sec-title__title bw-split-in-left">
              Our Renting Fleet
            </h3>
          </div>
          <ul className="list-unstyled renting-fleet__filter-list owl-filter-bar">
            <li className="item active" data-owl-filter="*">moto</li>
            <li className="item" data-owl-filter="india">Bicycles</li>
            <li className="item" data-owl-filter="maldives">Electro</li>
          </ul>
          <div className="renting-fleet__custome-dots" />
        </div>
      </div>
      <div className="container-fluid">
        <div className="renting-fleet__inner">
          <div className="renting-fleet__carousel rentol-owl__carousel rentol-owl__carousel--with-shadow rentol-owl__carousel--filter owl-carousel owl-theme grid md:grid-cols-4 gap-5">
            {fleetData.map((item, index) => (
              <div className="renting-fleet__item item" key={index}>
                <div className="renting-fleet__item__image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="renting-fleet__item__content">
                  <div className="renting-fleet__item__price">
                    {item.price} <span>/Day</span>
                  </div>
                  <div className="rentol-ratings">
                    {[...Array(5)].map((_, i) => (
                      <span className="rentol-ratings__icon" key={i}>
                        <i className="icon-star" />
                      </span>
                    ))}
                  </div>
                  <h4 className="renting-fleet__item__title">
                    <a href={item.link}>{item.title}</a>
                  </h4>
                  <span className="renting-fleet__item__text">{item.text}</span>
                  <a href={item.link} className="renting-fleet__item__btn rentol-btn">
                    book now <i className="fas fa-plus" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRentingFleatSection;
