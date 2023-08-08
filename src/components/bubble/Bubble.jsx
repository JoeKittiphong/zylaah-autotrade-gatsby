import React, { useState } from 'react'
import * as style from "./Bubble.module.css"

import Share from './Share'
import Follow from './Follow'
import Caffe from './Caffe'

function Bubble({pageURL}) {
    const [show1, setShow1] = useState(style.hide)
    const [show2, setShow2] = useState(style.hide)
    const [show3, setShow3] = useState(style.hide)

    const toggle = (status, set) => {
        status == style.show ? set(style.hide) : set(style.show)
    }

    const btnStyle = `${style.button}`
    return (
        <div className={style.bubble}>
            <div>
                <button className={btnStyle}
                    onClick={() => {
                        toggle(show1, setShow1)
                    }}>
                    แชร์
                </button>
                <div className={show1}>
                    <Share url={pageURL}></Share>
                </div>
            </div>
            <div>
                <button className={btnStyle}
                    onClick={() => {
                        toggle(show2, setShow2)
                    }}>
                    ติดตาม
                </button>
                <div className={show2}>
                    <Follow></Follow>
                </div>
            </div>
            <div>
                <button className={btnStyle}
                    onClick={() => {
                        toggle(show3, setShow3)
                    }}>
                    ค่ากาแฟ
                </button>
                <div className={show3}>
                    <Caffe></Caffe>
                </div>
            </div>
        </div>
    )
}

export default Bubble