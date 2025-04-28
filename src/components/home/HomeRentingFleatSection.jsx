import { Backpack, User } from 'lucide-react';
import React from 'react';

const fleetData = [
  {
    image: "/assets/new-images/card/card-one.jpeg",
    price: "$25",
    title: "LIMOUSINE",
    person: 4,
    bag: 3,
    text: "standard motor Cars",
    link: "/",
  },
  {
    image: "/assets/new-images/card/card-two.webp",
    price: "$25",
    title: "KOMBI",
    person: 4,
    bag: 4,
    text: "F4, Brutale",
    link: "/",
  },
  {
    image: "/assets/new-images/card/card-three.jpeg",
    price: "$25",
    title: "7-SITZER",
    person: 6,
    bag: 5,
    text: "standard motor Cars",
    link: "/",
  },
  {
    image: "/assets/new-images/card/card-four.jpeg",
    price: "$25",
    title: "9-SITZER",
    person: 8,
    bag: 7,
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
            <h3 className="sec-title__title bw-split-in-left">
              Unsere Flotte
            </h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="renting-fleet__inner">
          <div className="renting-fleet__carousel rentol-owl__carousel rentol-owl__carousel--with-shadow rentol-owl__carousel--filter owl-carousel owl-theme grid md:grid-cols-4 gap-5">
            {fleetData.map((item, index) => (
              <div className="renting-fleet__item item" key={index}>
                <div className="renting-fleet__item__image overflow-hidden w-full">
                  <img src={item.image} alt={item.title} className='h-48 w-full' />
                </div>
                <div className='text-start space-y-2'>
                  <h4 className="ps-4 text-xl font-bold">
                    <a href={item.link}>{item.title}</a>
                  </h4>
                  <div>
                    <span className="ps-4">{item.text}</span>
                  </div>
                  <div className='ps-4 flex items-center gap-2'>
                    <div className='flex items-center'>
                      <User size={20} className='me-2' /> <p className='font-bold text-black'>{item?.person}</p>
                    </div>
                    <div className='flex items-center'>
                      <Backpack size={20} className='me-2' /> <p className='font-bold text-black'>{item?.bag}</p>
                    </div>
                  </div>
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
