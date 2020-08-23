import React from 'react'

// Styles
import 'assets/styles/reset.css'
import GlobalStyles from 'assets/styles/globalStyles'

// Components
import SEO from 'components/seo/'
import Footer from 'components/footer/'

const Layout = ({ children }) => (
  <main>
    <SEO />
    <GlobalStyles />
    {children}
    <Footer />
  </main>
)

export default Layout
