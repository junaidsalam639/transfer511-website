import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import DistanceCalculator from '../DistanceCalculator';
import { useNavigate } from 'react-router';
import DatePicker from "react-datepicker";
import { TimePicker } from 'rsuite';
import "react-datepicker/dist/react-datepicker.css";
import 'rsuite/dist/rsuite.min.css';

function TimePickerExample({ placeholder }) {
    return (
        <div className="banner-form__control" style={{ overflow: 'visible' }}>
            <TimePicker format="HH:mm" placeholder={placeholder} />
        </div>
    );
}



const slides = [
    {
        bg: '/assets/new-images/banner/banner-one.jpg',
        subTitle: 'Einsteigen – Ankommen – Stressfrei reisen',
        title: 'Ihr zuverlässiger Flughafentransfer in Frankfurt – pünktlich, komfortabel und sicher.',
        text: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga...`
    },
    {
        bg: '/assets/new-images/banner/banner-two.jpg',
        subTitle: 'Einsteigen – Ankommen – Stressfrei reisen',
        title: 'Ihr zuverlässiger Flughafentransfer in Frankfurt – pünktlich, komfortabel und sicher.',
        text: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga...`
    },
    {
        bg: '/assets/new-images/banner/banner-three.jpeg',
        subTitle: 'Einsteigen – Ankommen – Stressfrei reisen',
        title: 'Ihr zuverlässiger Flughafentransfer in Frankfurt – pünktlich, komfortabel und sicher.',
        text: `Aqestic optio amet a ququam saepe aliquid voluate dicta fuga...`
    }
];

export const GOOGLE_MAPS_API_KEY = 'AIzaSyDXJS_VZMhnp0szh92aZGg8RHszz6RMQN8';

const HomeHeroSection = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [activeTab, setActiveTab] = useState('einfachefahrt');
    const [returnDate, setReturnDate] = useState(new Date());
    const distanceRef = useRef();
    const navigate = useNavigate();

    const handleSearchClick = () => {
        if (distanceRef.current) {
            distanceRef.current.triggerSearch();
        }
    };

    const handleTripSearch = (tripDetails) => {
        console.log("Trip Details:", tripDetails);
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
                        <div className="item relative h-screen flex flex-col pt-20">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.bg})` }} />
                            <div className="container space-y-4 mx-auto">
                                <div className="relative z-50 flex flex-col justify-center items-center space-y-4">
                                    <h5 className="main-slider-two__sub-title">{slide.subTitle}</h5>
                                    <h2 className="main-slider-two__title">{slide.title}</h2>
                                    <a href="tel:+49 1765 7844670">
                                        <button className="rentol-btn" type="submit">
                                            +49 1765 7844670
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-black/50 z-0"></div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className='absolute md:bottom-40 bottom-20 w-full md:px-20'>
                    <div
                        style={{
                            padding: '20px',
                            backgroundColor: 'rgba(255, 255, 255, .7)',
                            zIndex: 20
                        }}
                        className="relative z-10 rounded-2xl"
                    >
                        <div className="flex gap-4 mb-4">
                            <button
                                className={`px-4 py-3 rounded-lg font-semibold ${activeTab === 'einfachefahrt' ? 'bg-[#E66431] text-white' : 'bg-gray-300 text-black'}`}
                                onClick={() => setActiveTab('einfachefahrt')}
                            >
                                Einfache Fahrt
                            </button>
                            <button
                                className={`px-4 py-3 rounded-lg font-semibold ${activeTab === 'rueckfahrt' ? 'bg-[#E66431] text-white' : 'bg-gray-300 text-black'}`}
                                onClick={() => setActiveTab('rueckfahrt')}
                            >
                                Hin & Rückfahrt
                            </button>
                        </div>

                        <h2 className="text-2xl text-black font-bold">Berechnen Sie jetzt Ihren Preis!</h2>
                        <h2 className="text-2xl text-black font-bold mb-4">Unverbindlich abfragen – ohne versteckte Kosten.</h2>

                        <form className="banner-form__wrapper" onSubmit={(e) => e.preventDefault()}>
                            <div className="banner-form">
                                <div className="flex gap-2">
                                    <DistanceCalculator
                                        ref={distanceRef}
                                        GOOGLE_MAPS_API_KEY={GOOGLE_MAPS_API_KEY}
                                        onSearch={handleTripSearch}
                                    />
                                </div>

                                <div className="flex gap-2 mt-2">
                                    <div className="w-full">
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            placeholderText="Startdatum wählen"
                                            className='py-3 px-2 w-full rounded-lg'
                                        />
                                    </div>
                                    <div className="banner-form__control w-full">
                                        <TimePickerExample placeholder="Abholzeit / Ankunftszeit" />
                                    </div>
                                    {activeTab === 'rueckfahrt' && (
                                        <>
                                            <div className="w-full">
                                                <DatePicker
                                                    selected={returnDate}
                                                    onChange={(date) => setReturnDate(date)}
                                                    placeholderText="Rückreisedatum wählen"
                                                    className='py-3 px-2 w-full rounded-lg'
                                                />
                                            </div>
                                            <div className="banner-form__control w-full">
                                                <TimePickerExample placeholder="Planmässige Ankunft" />
                                            </div>
                                        </>
                                    )}
                                    <div className="banner-form__control banner-form__button w-full">
                                        <button className="rentol-btn w-full" type="button" onClick={handleSearchClick}>
                                            Search <span className="icon-motorbike" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Swiper>
        </section >
    );
};

export default HomeHeroSection;
