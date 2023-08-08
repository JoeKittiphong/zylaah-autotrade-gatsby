import React from 'react'
import * as style from "./Share.module.css"

import {
    FacebookIcon, FacebookShareButton,
    LineIcon, LineShareButton
} from "react-share"

function Share({url}) {
  return (
    <div className={style.share}>
        <FacebookShareButton className={style.icon} url={url}>
            <FacebookIcon  className={style.icon} size={20}></FacebookIcon>
        </FacebookShareButton>
        <LineShareButton className={style.icon} url={url}>
            <LineIcon  className={style.icon} size={20}></LineIcon>
        </LineShareButton>
    </div>
  )
}

export default Share