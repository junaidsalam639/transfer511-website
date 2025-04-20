import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
    {
        bg: '/assets/images/backgrounds/slider-2-1.jpg',
        subTitle: 'Largest Fleet of Vehicles, Trusted by millions',
        title: 'self ride bike rentals',
        text: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga
    dolor saerror sed earum a magni soluta quam minus dolor dolor
    sed earum a magni soluta autem dolor error error sit quam
    minus sint rem`
    },
    {
        bg: '/assets/images/backgrounds/slider-2-2.jpg',
        subTitle: 'Largest Fleet of Vehicles, Trusted by millions',
        title: 'self ride bike rentals',
        text: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga
    dolor saerror sed earum a magni soluta quam minus dolor dolor
    sed earum a magni soluta autem dolor error error sit quam
    minus sint rem`
    },
    {
        bg: '/assets/images/backgrounds/slider-2-3.jpg',
        subTitle: 'Largest Fleet of Vehicles, Trusted by millions',
        title: 'self ride bike rentals',
        text: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga
    dolor saerror sed earum a magni soluta quam minus dolor dolor
    sed earum a magni soluta autem dolor error error sit quam
    minus sint rem`
    }
];

const HomeHeroSection = () => {
    return (
        <section className="main-slider-two relative">
            <Swiper
                loop={true}
                autoplay={{ delay: 7000 }}
                effect="fade"
                speed={1000}
                modules={[Autoplay, EffectFade]}
                className="main-slider-two__carousel"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="item relative h-screen flex flex-col justify-center">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.bg})` }}
                            />
                            <div className="container space-y-4">
                                <div className="relative z-50 flex flex-col justify-center items-center
                                space-y-4">
                                    <h5 className="main-slider-two__sub-title">
                                        Largest Fleet of Vehicles, Trusted by millions
                                    </h5>
                                    <h2 className="main-slider-two__title">self ride bike rentals</h2>
                                    <p className="main-slider-two__text">
                                        Aqestic optio amet a ququam saepe aliquid voluate dicta fuga dolor
                                        saerror sed earum a magni soluta quam minus dolor dolor sed earum a
                                        magni soluta autem dolor error error sit quam minus sint rem
                                    </p>
                                    <button className="rentol-btn" type="submit">
                                        +92 29238 423 42
                                    </button>
                                </div>
                                <div className="bg-[url('/assets/images/shapes/banner-shape.png')] bg-cover relative z-10 md:p-6 p-2">
                                    <form className="banner-form__wrapper" action="#">
                                        <div className="banner-form grid md:grid-cols-3 grid-cols-2 gap-4">
                                            <div className="banner-form__control">
                                                <input
                                                    className="rentol-datepicker"
                                                    id="date_one"
                                                    type="text"
                                                    name="date"
                                                    placeholder="Start"
                                                />
                                            </div>
                                            <div className="banner-form__control">
                                                <input
                                                    className="rentol-datepicker"
                                                    id="date_one"
                                                    type="text"
                                                    name="date"
                                                    placeholder="Goal"
                                                />
                                            </div>
                                            <div className="banner-form__control">
                                                <input
                                                    className="rentol-datepicker"
                                                    id="date_one"
                                                    type="text"
                                                    name="date"
                                                    placeholder="Pick up Date"
                                                />
                                            </div>
                                            <div className="banner-form__control">
                                                <input
                                                    className="rentol-timepicker"
                                                    id="time"
                                                    type="text"
                                                    name="date"
                                                    placeholder="time"
                                                />
                                            </div>
                                            <div className="banner-form__control">
                                                <input
                                                    className="rentol-timepicker"
                                                    id="time"
                                                    type="text"
                                                    name="date"
                                                    placeholder="AnyWay"
                                                />
                                            </div>
                                            <div className="banner-form__control banner-form__button">
                                                <button className="rentol-btn" type="submit">
                                                    Search Bike <span className="icon-motorbike" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-black/50 z-0"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HomeHeroSection;
