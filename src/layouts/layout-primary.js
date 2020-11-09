import React, { useEffect } from 'react'

// Libraries
import AOS from 'aos'

// Styles
import 'assets/styles/reset.css'
import GlobalStyles from 'assets/styles/globalStyles'
import 'aos/dist/aos.css'
import 'assets/styles/animations.css'

// Components
import SEO from 'components/seo/'
import Menu from 'components/menu/'
import Footer from 'components/footer/'

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    })
  })
  
  return (
    <main className="color--black" data-aos="fade">
      <SEO lang="en" />
      <GlobalStyles />
      <Menu />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
