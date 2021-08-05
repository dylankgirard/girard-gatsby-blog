import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
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
            fields {
              slug
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
            <Link to={`/blog/${blog.node.fields.slug}`}>
              <h2>{blog.node.frontmatter.title}</h2>

              <p>{blog.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
