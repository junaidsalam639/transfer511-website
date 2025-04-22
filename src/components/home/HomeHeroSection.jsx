import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import DistanceCalculator from '../DistanceCalculator';
import { useNavigate } from 'react-router';

const slides = [
    {
        bg: '/assets/new-images/banner/banner-one.jpg',
        subTitle: 'Largest Fleet of Vehicles, Trusted by millions',
        title: 'self ride Car rentals',
        text: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga
    dolor saerror sed earum a magni soluta quam minus dolor dolor
    sed earum a magni soluta autem dolor error error sit quam
    minus sint rem`
    },
    {
        bg: '/assets/new-images/banner/banner-two.jpg',
        subTitle: 'Largest Fleet of Vehicles, Trusted by millions',
        title: 'self ride Car rentals',
        text: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga
    dolor saerror sed earum a magni soluta quam minus dolor dolor
    sed earum a magni soluta autem dolor error error sit quam
    minus sint rem`
    },
    {
        bg: '/assets/new-images/banner/banner-three.jpeg',
        subTitle: 'Largest Fleet of Vehicles, Trusted by millions',
        title: 'self ride Car rentals',
        text: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga
    dolor saerror sed earum a magni soluta quam minus dolor dolor
    sed earum a magni soluta autem dolor error error sit quam
    minus sint rem`
    }
];

export const GOOGLE_MAPS_API_KEY = 'AIzaSyDXJS_VZMhnp0szh92aZGg8RHszz6RMQN8';


const HomeHeroSection = () => {
    const navigate = useNavigate();

    const handleSearchTrip = (tripDetails) => {
        console.log("🚗 Trip Search Result:", tripDetails);
        navigate('/trip-details', { state: tripDetails });
    };

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
                        <div className="item relative h-screen flex flex-col md:pt-20 py-32">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.bg})` }} />
                            <div className="container space-y-4 mx-auto">
                                <div className="relative z-50 flex flex-col justify-center items-center space-y-4">
                                    <h5 className="main-slider-two__sub-title">{slide.subTitle}</h5>
                                    <h2 className="main-slider-two__title">{slide.title}</h2>
                                    <p className="main-slider-two__text">{slide.text}</p>
                                    <button className="rentol-btn" type="submit">
                                        +92 29238 423 42
                                    </button>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-black/50 z-0"></div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className='absolute bottom-12 w-full md:px-20'>
                    <div className="bg-[url('/assets/new-images/banner-shape.png')] bg-cover relative z-10 md:p-6 p-2">
                        <form className="banner-form__wrapper" onSubmit={(e) => e.preventDefault()}>
                            <div className="banner-form grid md:grid-cols-3 grid-cols-2 gap-4">
                                <DistanceCalculator
                                    GOOGLE_MAPS_API_KEY={GOOGLE_MAPS_API_KEY}
                                    onSearch={handleSearchTrip}
                                />
                                <div className="banner-form__control">
                                    <input className="rentol-datepicker" type="text" placeholder="Pick up Date" />
                                </div>
                                <div className="banner-form__control">
                                    <input className="rentol-timepicker" type="text" placeholder="Time" />
                                </div>
                                <div className="banner-form__control">
                                    <input className="rentol-timepicker" type="text" placeholder="AnyWay" />
                                </div>
                                <div className="banner-form__control banner-form__button">
                                    <button className="rentol-btn" type="button"
                                        onClick={() => document?.querySelector(".banner-form__button .rentol-btn")?.click()}>
                                        Search <span className="icon-motorbike" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Swiper>
        </section>
    );
};


export default HomeHeroSection;
