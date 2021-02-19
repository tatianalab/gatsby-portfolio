import React, {useState} from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import {GlobalStyle} from './styles/GlobalStyles'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}



  return (
    <>
    <GlobalStyle/>
      <Header toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
        <main>{children}</main>
      <Footer />
    </>
  )
}


export default Layout
