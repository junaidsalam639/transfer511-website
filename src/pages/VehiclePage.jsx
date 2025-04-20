import React from 'react'
import VehicleSection from '../components/vehicle/VehicleSection'
import Layout from '../components/layout/Layout'
import FaqSection from '../components/FaqSection'

const VehiclePage = () => {
    return (
        <>
            <Layout>
                <VehicleSection />
                <div className='pb-20'>
                    <FaqSection />
                </div>
            </Layout>
        </>
    )
}

export default VehiclePage
