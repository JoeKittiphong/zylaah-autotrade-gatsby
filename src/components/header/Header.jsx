import React from 'react'
import icon from "../image/zylaah autotrade.png"

function Header({ title, tag }) {
  return (
    <>
      <meta charSet='utf-8' />
      <title> Zylaah Autotrade | {title}</title>
      <link
        rel="icon"
        sizes='48x48'
        href={icon}
      />
      <meta
        name='description'
        content={tag}
      />
    </>
  )
}

export default Header