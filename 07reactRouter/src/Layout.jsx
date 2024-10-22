import React from 'react'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom' // Outlet will provide an option for nesting for this LAYOUT component
// Nesting components can be seen main.jsx via the usage of 'createRoutesFromElements'.
function Layout() {
  return (
    //Header and footer will remain static
    <>
      <Header />   
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
