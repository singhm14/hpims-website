import React from 'react'

// Styles
import 'assets/styles/reset.css'
import GlobalStyles from 'assets/styles/globalStyles'

const Layout = ({ children }) => (
  <main>
    <GlobalStyles />
    {children}
  </main>
)

export default Layout
