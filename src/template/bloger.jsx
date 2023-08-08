import React from 'react'
import { graphql } from "gatsby"
import * as style from "./bloger.module.css"
import Bubble from '../components/bubble/Bubble'

function bloger({ data }) {
    const { html, frontmatter } = data.markdownRemark
    return (

        <div className={style.blog}>
            <Bubble pageURL={`https://www.zylaah-autotrade.com${frontmatter.path}`} ></Bubble>
            <div className={style.title}>
                <h1>
                    {frontmatter.head}
                </h1>
                <div className={style.writen}>
                    <p>ผู้เขียน : {frontmatter.writer}</p>
                    <p>{frontmatter.date}</p>
                </div>
            </div>
            <div className="content">
                <div dangerouslySetInnerHTML={{ __html: html }}></div>

            </div>
            <div className={style.tag}>
                Tag : {frontmatter.tag}
            </div>
        </div>
    )
}

export default bloger

export const query = graphql`
    query($id : String) {
        markdownRemark(id : {eq : $id}) {
            html
            frontmatter {
                head
                title
                cover
                writer
                date
                tag
                path
            }
        }
    }
`