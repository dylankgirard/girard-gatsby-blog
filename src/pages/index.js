import React from "react"
import PageTransition from "gatsby-plugin-page-transitions"
import Layout from "../components/layout"
import Head from "../components/head"
import santaMonicaVid from "../assets/motionplaces0035c065q001-480.mp4"

const IndexPage = () => {
  return (
    <PageTransition>
      <Layout>
        <Head title="Home" />
        <video className="landing-vid" autoPlay muted loop id="santamonica">
          <source src={santaMonicaVid} type="video/mp4" />
        </video>
        {/* <h1>Hi There,</h1>
      <h2>I'm Dylan, a software developer from LA!</h2>
      <Img fluid={props.data.imageOne.childImageSharp.fluid} /> */}
      </Layout>
    </PageTransition>
  )
}

export default IndexPage

// export const query = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "WallpaperDog-975523.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
