import React from 'react'
import AboutSection from '../components/about/AboutSection'
import Layout from '../components/layout/Layout'
import FaqSection from '../components/FaqSection'

const AboutPage = () => {
    return (
        <>
            <Layout>
                <AboutSection />
                <div className='py-20'>
                    <FaqSection />
                </div>
            </Layout>
        </>
    )
}

export default AboutPage
