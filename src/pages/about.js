import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
// import Img from "gatsby-image"

import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>Hi, I'm Dylan - a software developer from Los Angeles.</p>
      <p>
        I was raised in Bend, Oregon, and spent most of my life training, performing, and teaching as a
        classical trumpet player. I've played music all over the world, and
        it's always been a very important part of my life.
      </p>
      <p>
        I love creating beautifully crafted web applications that make the user
        feel at ease. I also have a strong interest in QA and the testing
        process.
      </p>
      <p>
        Need to reach me? Visit the <Link to="/contact" className="about-link">Contact</Link> page!
      </p>
    </Layout>
  )
}

export default AboutPage
