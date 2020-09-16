import React from 'react'

// Styles
import 'assets/styles/reset.css'
import GlobalStyles from 'assets/styles/globalStyles'

// Components
import SEO from 'components/seo/'
import Menu from 'components/menu/'
import Footer from 'components/footer/'

const Layout = ({ children }) => (
  <main className="color--black">
    <SEO />
    <GlobalStyles />
    <Menu />
    {children}
    <Footer />
  </main>
)

export default Layout
