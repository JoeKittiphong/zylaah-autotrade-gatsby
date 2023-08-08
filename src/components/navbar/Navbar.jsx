import React from 'react'
import { Link } from "gatsby"
import * as style from "./Navbar.module.css"

import logo from "../image/zylaah autotrade.png"

function Navbar() {
    let navStyle = `${style.navbar}`
    const linkStyle = `${style.link} ${style.button} ${style.center}`
    const logoStyle = `${style.logo} ${style.center}`

    return (
        <div className={navStyle}>
            <Link to='/' className={logoStyle}>
                <img className={style.image} src={logo} alt="zylaah autotrade" />
            </Link>

            <div className={style.navigate}>
                <Link className={linkStyle}
                    to='/'>
                    หน้าแรก
                </Link>
                <Link className={linkStyle}
                    to='/blog'>
                    บทความ
                </Link>
                <Link className={linkStyle}
                    to='/download'>
                    ดาวน์โหลด EA
                </Link>
                <Link className={linkStyle}
                    to='/about'>
                    เกี่ยวกับเรา
                </Link>
            </div>
        </div>
    )
}

export default Navbar