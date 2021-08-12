import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Img from "gatsby-image"

import { Link, graphql } from "gatsby"

const AboutPage = props => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>

      <h2>I grew up in Oregon, and I also play the trumpet.</h2>
      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      <br/>
      <p>
        Need to contact me? Go <Link to="/contact">here!</Link>
      </p>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    imageOne: file(
      relativePath: {
        eq: "Sunrise-landscape-Mountain-meadow-flower-red-sky-Sparks-Lake-Deschutes-National-Forest-Oregon-USА-1920x1080.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
