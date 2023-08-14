import React from 'react'
import { graphql, Link } from "gatsby"
import * as style from "./blog.module.css"
import Header from '../components/header/Header'

function blog({ data: { allMarkdownRemark } }) {
    return (
        <div className={style.blogmain}>
            <Header title={"บทความ"} ></Header>
            {allMarkdownRemark.nodes.map(({ id, frontmatter }) => {
                return (
                    <Link className={style.link} to={frontmatter.path} key={id}>
                        <div className={style.blog}>
                            <div className={style.cover}>
                                <img className={style.image} src={frontmatter.cover} />
                            </div>
                            <div className={style.content}>
                                <h1 >{frontmatter.head}</h1>
                                <p >{frontmatter.title}</p>
                                {/* <Link className={style.btn} to={frontmatter.path}>อ่านต่อ ...</Link> */}
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default blog
export const query = graphql`
    query {
        allMarkdownRemark {
            nodes {
                id
                frontmatter {
                    head
                    title
                    path
                    cover
                    writer
                    date
                    tag
                }
            }
        }
    }
`