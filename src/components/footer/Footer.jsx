import React from 'react'
import {Link} from "gatsby"
import * as style from "./Footer.module.css"

import facbook from "../image/facebook.png"
import youtube from "../image/YouTube.png"
import line from "../image/line.png"
import discord from "../image/Discord.png"
import website from "../image/website.png"

function Footer() {
    const year = new Date()
  return (
    <div className={style.footer}>
        <div className={style.social}>
            <Link className={style.link} to='https://web.facebook.com/zylaah.fx/'>
                <img className={style.image} src={facbook} alt="facebook" />
            </Link>
            <Link className={style.link} to='https://www.youtube.com/@Zylaah-Autotrade'>
                <img className={style.image} src={youtube} alt="youtube" />
            </Link>
            <Link className={style.link} to='https://line.me/R/ti/g/V6kIephmqy'>
                <img className={style.image} src={line} alt="line" />
            </Link>
            <Link className={style.link} to='https://discord.gg/HENmvjkqKM'>
                <img className={style.image} src={discord} alt="discord" />
            </Link>
            <Link className={style.link} to='/'>
                <img className={style.image} src={website} alt="website" />
            </Link>
        </div>
        <div className={style.zylaah}>ZYLAAH AUTOTRADE &copy; {year.getFullYear()}</div>
        <div className={style.zylaah}>Powered by <Link to='https://www.gatsbyjs.com/'>Gatsby</Link> </div>

    </div>
  )
}

export default Footer