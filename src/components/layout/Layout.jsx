import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CTAFooter from './CTAFooter'
import RightFloatingIcons from '../RightFloatingIcons'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <CTAFooter />
            <Footer />
            <RightFloatingIcons />
        </>
    )
}

export default Layout
