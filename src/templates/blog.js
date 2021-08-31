import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Head from "../components/head"

import Layout from "../components/layout"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

const Blog = (props) => {
  
  const imgSrc = props.data.contentfulBlogPost.body.references[0].fixed.src

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target
        const url = imgSrc
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        JSON.parse(props.data.contentfulBlogPost.body.raw),
        options
      )}
    </Layout>
  )
}

export default Blog
