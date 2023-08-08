import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import * as style from "./Layout.module.css"
import "../../style/global.css" 

function Layout({ children}) {
  return (
    <div className={style.layout}>
        <Navbar/>
        <div className={style.content}>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout