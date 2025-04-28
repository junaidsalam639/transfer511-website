import FaqSection from "../components/FaqSection"
import HomeAboutSection from "../components/home/HomeAboutSection"
import HomeCompanySection from "../components/home/HomeCompanySection"
import HomeFeatureSection from "../components/home/HomeFeatureSection"
import HomeFleetSection from "../components/home/HomeFleetSection"
import HomeHeroSection from "../components/home/HomeHeroSection"
import HomeIncludedSection from "../components/home/HomeIncludedSection"
import HomeRentingFleatSection from "../components/home/HomeRentingFleatSection"
import HomeRentSection from "../components/home/HomeRentSection"
import HomeTestimonialSection from "../components/home/HomeTestimonialSection"
import Layout from "../components/layout/Layout"


function HomePage() {

    return (
        <>
            {/* <div className="preloader">
                <div
                    className="preloader__image"
                    style={{ backgroundImage: "url(/assets/images/loader.png)" }}
                />
            </div> */}
            <div className="page-wrapper">
                <Layout>
                    <HomeHeroSection />
                    <HomeAboutSection />
                    <HomeRentSection />
                    <HomeRentingFleatSection />
                    <HomeCompanySection />
                    {/* <HomeFeatureSection /> */}
                    <HomeIncludedSection />
                    <HomeFleetSection />
                    <div className="py-20">
                        <FaqSection />
                    </div>
                    <HomeTestimonialSection />
                </Layout>
            </div>
        </>
    )
}

export default HomePage


