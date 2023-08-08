import React from 'react'
import * as style from "./Caffee.module.css"

import paycoffe from "../image/coffee.jpg"

function Caffe() {
  return (
        <div className={style.coffe}>
            <img className={style.qr} src={paycoffe} alt="coffee"/>
        </div>
  )
}

export default Caffe