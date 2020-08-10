import React from 'react'

// Styles
import 'assets/styles/reset.css'
import GlobalStyles from 'assets/styles/globalStyles'

// Components
import SEO from 'components/seo/'

const Layout = ({ children }) => (
  <main>
    <SEO />
    <GlobalStyles />
    {children}
  </main>
)

export default Layout
