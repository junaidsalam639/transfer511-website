import React from 'react'

const VehicleSection = () => {
    return (
        <>
            <>
                <>
                    <div className="page-header-one">
                        <div
                            className="page-header-one__bg"
                            style={{
                                backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-7.jpg)"
                            }}
                        />
                    </div>
                    {/* /.page-header-one */}
                </>

                <section className="fleet-one section-space">
                    <div className="container">
                        <div className="fleet-one__top">
                            <div className="sec-title text-center">
                                <h6 className="sec-title__tagline bw-split-in-right">our fleet</h6>
                                {/* /.sec-title__tagline */}
                                <h3 className="sec-title__title bw-split-in-left">FLEET STANDARD</h3>
                                {/* /.sec-title__title */}
                            </div>
                            {/* /.sec-title */}
                            <ul className="tabs-box__buttons post-filter list-unstyled">
                                <li className="active" data-filter=".filter-item">
                                    {" "}
                                    <span className="rentol-icon icon-car" />
                                    ALL
                                </li>
                                {/* /.tab-btn */}
                                <li data-filter=".sed">
                                    {" "}
                                    <span className="rentol-icon icon-car" />
                                    SEDAN
                                </li>
                                {/* /.tab-btn */}
                                <li data-filter=".svu">
                                    {" "}
                                    <span className="rentol-icon icon-car" />
                                    SUV
                                </li>
                                {/* /.tab-btn */}
                                <li data-filter=".sport">
                                    {" "}
                                    <span className="rentol-icon icon-car" />
                                    SPORT
                                </li>
                                {/* /.tab-btn */}
                                <li data-filter=".car">
                                    {" "}
                                    <span className="rentol-icon icon-car" />
                                    CAR&nbsp;LUXE
                                </li>
                                {/* /.tab-btn */}
                                <li data-filter=".tamp">
                                    {" "}
                                    <span className="rentol-icon icon-car" />
                                    SUPERCAR
                                </li>
                                {/* /.tab-btn */}
                                <li data-filter=".lamp">
                                    {" "}
                                    <span className="rentol-icon icon-car" />
                                    LIMUSINE
                                </li>
                                {/* /.tab-btn */}
                            </ul>
                            {/* /.tabs-box__buttons */}
                        </div>
                        {/* /.fleet-one__top */}
                        <div className="row filter-layout gutter-y-30">
                            <div className="col-lg-4 col-md-6 col-sm-12 sed sport lamp filter-item">
                                <div
                                    className="fleet-card-one wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    data-wow-delay="200ms"
                                >
                                    <div className="fleet-card-one__image">
                                        <img
                                            src="/assets/images/fleet/fleet-1-1.jpg"
                                            alt="rentol images"
                                        />
                                    </div>
                                    {/* /.fleet-card-one__image */}
                                    <div className="fleet-card-one__content">
                                        <div className="rentol-ratings">
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                        </div>
                                        {/* /.product-ratings */}
                                        <h4 className="fleet-card-one__title">
                                            <a href="#">Hyundai Sonata</a>
                                        </h4>
                                        {/* /.fleet-card-one__title */}
                                        <p className="fleet-card-one__text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing Aqestic
                                            recusandae lantium optio amet a quisquam saepe
                                        </p>
                                        {/* /.fleet-card-one__text */}
                                        <div className="fleet-card-one__bottom">
                                            <div className="fleet-card-one__price">
                                                $129 <span>/day</span>
                                            </div>
                                            {/* /.fleet-card-one__price */}
                                            <a href="#" className="fleet-card-one__link rentol-btn">
                                                <i className="icon-up-right-arrow" />
                                            </a>
                                        </div>
                                        {/* /.fleet-card-one__bottom */}
                                    </div>
                                    {/* /.fleet-card-one__content */}
                                </div>
                                {/* /.fleet-card-one */}
                            </div>
                            {/* /.col-lg-4 col-md-6 col-sm-12 */}
                            <div className="col-lg-4 col-md-6 col-sm-12 svu car lamp filter-item">
                                <div
                                    className="fleet-card-one wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    data-wow-delay="400ms"
                                >
                                    <div className="fleet-card-one__image">
                                        <img
                                            src="/assets/images/fleet/fleet-1-2.jpg"
                                            alt="rentol images"
                                        />
                                    </div>
                                    {/* /.fleet-card-one__image */}
                                    <div className="fleet-card-one__content">
                                        <div className="rentol-ratings">
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                        </div>
                                        {/* /.product-ratings */}
                                        <h4 className="fleet-card-one__title">
                                            <a href="#">ROLLS-ROYCE CULLINAN</a>
                                        </h4>
                                        {/* /.fleet-card-one__title */}
                                        <p className="fleet-card-one__text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing Aqestic
                                            recusandae lantium optio amet a quisquam saepe
                                        </p>
                                        {/* /.fleet-card-one__text */}
                                        <div className="fleet-card-one__bottom">
                                            <div className="fleet-card-one__price">
                                                $109 <span>/day</span>
                                            </div>
                                            {/* /.fleet-card-one__price */}
                                            <a href="#" className="fleet-card-one__link rentol-btn">
                                                <i className="icon-up-right-arrow" />
                                            </a>
                                        </div>
                                        {/* /.fleet-card-one__bottom */}
                                    </div>
                                    {/* /.fleet-card-one__content */}
                                </div>
                                {/* /.fleet-card-one */}
                            </div>
                            {/* /.col-lg-4 col-md-6 col-sm-12 */}
                            <div className="col-lg-4 col-md-6 col-sm-12 sed tamp filter-item">
                                <div
                                    className="fleet-card-one wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    data-wow-delay="600ms"
                                >
                                    <div className="fleet-card-one__image">
                                        <img
                                            src="/assets/images/fleet/fleet-1-3.jpg"
                                            alt="rentol images"
                                        />
                                    </div>
                                    {/* /.fleet-card-one__image */}
                                    <div className="fleet-card-one__content">
                                        <div className="rentol-ratings">
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                        </div>
                                        {/* /.product-ratings */}
                                        <h4 className="fleet-card-one__title">
                                            <a href="#">porche luxury car</a>
                                        </h4>
                                        {/* /.fleet-card-one__title */}
                                        <p className="fleet-card-one__text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing Aqestic
                                            recusandae lantium optio amet a quisquam saepe
                                        </p>
                                        {/* /.fleet-card-one__text */}
                                        <div className="fleet-card-one__bottom">
                                            <div className="fleet-card-one__price">
                                                $119 <span>/day</span>
                                            </div>
                                            {/* /.fleet-card-one__price */}
                                            <a href="#" className="fleet-card-one__link rentol-btn">
                                                <i className="icon-up-right-arrow" />
                                            </a>
                                        </div>
                                        {/* /.fleet-card-one__bottom */}
                                    </div>
                                    {/* /.fleet-card-one__content */}
                                </div>
                                {/* /.fleet-card-one */}
                            </div>
                            {/* /.col-lg-4 col-md-6 col-sm-12 */}
                            <div className="col-lg-4 col-md-6 col-sm-12 svu sport tamp filter-item">
                                <div
                                    className="fleet-card-one wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    data-wow-delay="200ms"
                                >
                                    <div className="fleet-card-one__image">
                                        <img
                                            src="/assets/images/fleet/fleet-1-4.jpg"
                                            alt="rentol images"
                                        />
                                    </div>
                                    {/* /.fleet-card-one__image */}
                                    <div className="fleet-card-one__content">
                                        <div className="rentol-ratings">
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                        </div>
                                        {/* /.product-ratings */}
                                        <h4 className="fleet-card-one__title">
                                            <a href="#">Hyundai Sonata</a>
                                        </h4>
                                        {/* /.fleet-card-one__title */}
                                        <p className="fleet-card-one__text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing Aqestic
                                            recusandae lantium optio amet a quisquam saepe
                                        </p>
                                        {/* /.fleet-card-one__text */}
                                        <div className="fleet-card-one__bottom">
                                            <div className="fleet-card-one__price">
                                                $129 <span>/day</span>
                                            </div>
                                            {/* /.fleet-card-one__price */}
                                            <a href="#" className="fleet-card-one__link rentol-btn">
                                                <i className="icon-up-right-arrow" />
                                            </a>
                                        </div>
                                        {/* /.fleet-card-one__bottom */}
                                    </div>
                                    {/* /.fleet-card-one__content */}
                                </div>
                                {/* /.fleet-card-one */}
                            </div>
                            {/* /.col-lg-4 col-md-6 col-sm-12 */}
                            <div className="col-lg-4 col-md-6 col-sm-12 sed car lamp filter-item">
                                <div
                                    className="fleet-card-one wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    data-wow-delay="400ms"
                                >
                                    <div className="fleet-card-one__image">
                                        <img
                                            src="/assets/images/fleet/fleet-1-5.jpg"
                                            alt="rentol images"
                                        />
                                    </div>
                                    {/* /.fleet-card-one__image */}
                                    <div className="fleet-card-one__content">
                                        <div className="rentol-ratings">
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                        </div>
                                        {/* /.product-ratings */}
                                        <h4 className="fleet-card-one__title">
                                            <a href="#">land rover</a>
                                        </h4>
                                        {/* /.fleet-card-one__title */}
                                        <p className="fleet-card-one__text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing Aqestic
                                            recusandae lantium optio amet a quisquam saepe
                                        </p>
                                        {/* /.fleet-card-one__text */}
                                        <div className="fleet-card-one__bottom">
                                            <div className="fleet-card-one__price">
                                                $129 <span>/day</span>
                                            </div>
                                            {/* /.fleet-card-one__price */}
                                            <a href="#" className="fleet-card-one__link rentol-btn">
                                                <i className="icon-up-right-arrow" />
                                            </a>
                                        </div>
                                        {/* /.fleet-card-one__bottom */}
                                    </div>
                                    {/* /.fleet-card-one__content */}
                                </div>
                                {/* /.fleet-card-one */}
                            </div>
                            {/* /.col-lg-4 col-md-6 col-sm-12 */}
                            <div className="col-lg-4 col-md-6 col-sm-12 sed svu lamp filter-item">
                                <div
                                    className="fleet-card-one wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    data-wow-delay="600ms"
                                >
                                    <div className="fleet-card-one__image">
                                        <img
                                            src="/assets/images/fleet/fleet-1-6.jpg"
                                            alt="rentol images"
                                        />
                                    </div>
                                    {/* /.fleet-card-one__image */}
                                    <div className="fleet-card-one__content">
                                        <div className="rentol-ratings">
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                            <span className="rentol-ratings__icon">
                                                {" "}
                                                <i className="icon-star" />{" "}
                                            </span>
                                            {/* /.rentol-ratings__icon */}
                                        </div>
                                        {/* /.product-ratings */}
                                        <h4 className="fleet-card-one__title">
                                            <a href="#">Mercedes-Benz</a>
                                        </h4>
                                        {/* /.fleet-card-one__title */}
                                        <p className="fleet-card-one__text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing Aqestic
                                            recusandae lantium optio amet a quisquam saepe
                                        </p>
                                        {/* /.fleet-card-one__text */}
                                        <div className="fleet-card-one__bottom">
                                            <div className="fleet-card-one__price">
                                                $150 <span>/day</span>
                                            </div>
                                            {/* /.fleet-card-one__price */}
                                            <a href="#" className="fleet-card-one__link rentol-btn">
                                                <i className="icon-up-right-arrow" />
                                            </a>
                                        </div>
                                        {/* /.fleet-card-one__bottom */}
                                    </div>
                                    {/* /.fleet-card-one__content */}
                                </div>
                                {/* /.fleet-card-one */}
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </>
    )
}

export default VehicleSection
