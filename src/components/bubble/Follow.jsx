import React from 'react'
import {Link} from "gatsby"
import * as style from "./Follow.module.css"

import facebook from "../image/share/Facebook.png"
import youtube from "../image/share/YouTube.png"
import line from "../image/share/line.png"
import discord from "../image/share/discord.png"

function Follow() {
  return (
    <div className={style.follow}>
        <Link className={style.link} to='https://web.facebook.com/zylaah.fx/'>
            <img className={style.image} src={facebook} alt="facebook" />
        </Link>
        <Link className={style.link} to='https://youtube.com/@Zylaah-Autotrade'>
            <img className={style.image} src={youtube} alt="youtube" />
        </Link>
        <Link className={style.link} to='https://discord.gg/HENmvjkqKM'>
            <img className={style.image} src={line} alt="line" />
        </Link>
        <Link className={style.link} to='https://line.me/R/ti/g/V6kIephmqy'>
            <img className={style.image} src={discord} alt="discord" />
        </Link>
    </div>
  )
}

export default Follow

