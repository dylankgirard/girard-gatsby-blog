import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const BlogPage = () => {
  const blogData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  const blogArr = blogData.allMarkdownRemark.edges
  
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {blogArr.map((blog, i) => (
          <li key={i}>
            <h2>{blog.node.frontmatter.title}</h2>
            <p>{blog.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
