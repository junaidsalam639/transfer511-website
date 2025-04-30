import React from 'react'
import Layout from '../components/layout/Layout'
import FaqSection from '../components/FaqSection'
import HomeRentingFleatSection from '../components/home/HomeRentingFleatSection'

const VehiclePage = () => {
    return (
        <>
            <Layout>
                <div className="page-header-one">
                    <div
                        className="page-header-one__bg"
                        style={{
                            backgroundImage: "url(/assets/images/backgrounds/page-header-bg-1-7.jpg)"
                        }}
                    />
                </div>
                <HomeRentingFleatSection />
                <div className='pb-20'>
                    <FaqSection />
                </div>
            </Layout>
        </>
    )
}

export default VehiclePage
