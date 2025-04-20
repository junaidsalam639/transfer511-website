import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
    {
        name: "Anthony B. Castillo",
        designation: "Managing Director",
        image: "/assets/images/resources/testi-3-1.jpg",
        rating: 5,
        text:
            "ienet internet Company also impressed us with their transparency regarding costs. The initial quote was accurate, and they were upfront about any changes or additional expenses that"
    },
    {
        name: "Anthony B. Castillo",
        designation: "Managing Director",
        image: "/assets/images/resources/testi-3-1.jpg",
        rating: 5,
        text:
            "ienet internet Company also impressed us with their transparency regarding costs. The initial quote was accurate, and they were upfront about any changes or additional expenses that"
    },
    {
        name: "Anthony B. Castillo",
        designation: "Managing Director",
        image: "/assets/images/resources/testi-3-1.jpg",
        rating: 5,
        text:
            "ienet internet Company also impressed us with their transparency regarding costs. The initial quote was accurate, and they were upfront about any changes or additional expenses that"
    },
];

const HomeTestimonialSection = () => {
    return (
        <section className="testimonials-four section-space md:py-20">
            <div
                className="testimonials-four__bg"
                style={{
                    backgroundImage: "url(/assets/images/shapes/testimonials-bg-3-1.png)",
                }}
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="testimonials-four__content">
                            <div className="sec-title sec-title--five text-start">
                                <h6 className="sec-title__tagline bw-split-in-right">
                                    our testimonials
                                </h6>
                                <h3 className="sec-title__title bw-split-in-left">
                                    What Peoples Say About Rentol
                                </h3>
                            </div>
                            <p className="testimonials-four__text">
                                Donec pretium ornare neque, ac luctus orci ultrices at. Sed
                                blandit eleifend mi, a consectetur tortor varius in.
                            </p>
                            <div className="testimonials-four__bottom">
                                <div className="testimonials-four__custome-dots" />
                            </div>
                        </div>
                    </div>
                    <div className="testimonials-four__inner col-lg-6 col-md-12">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 4000 }}
                            loop={true}
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="testimonials-four__item">
                                        <div className="testimonials-four__item__content">
                                            <div className="rentol-ratings">
                                                {[...Array(item.rating)].map((_, i) => (
                                                    <span key={i} className="rentol-ratings__icon">
                                                        <i className="icon-star" />
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="testimonials-four__item__text">{item.text}</p>
                                        </div>
                                        <div className="testimonials-four__item__bottom">
                                            <div className="testimonials-four__item__man">
                                                <div className="testimonials-four__item__image">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                                <div className="testimonials-four__item__man__content">
                                                    <h5 className="testimonials-four__item__author-name">
                                                        {item.name}
                                                    </h5>
                                                    <span className="testimonials-four__item__author-deg">
                                                        {item.designation}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HomeTestimonialSection;
