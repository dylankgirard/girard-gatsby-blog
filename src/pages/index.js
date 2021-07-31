import React from 'react'
import Layout from "../components/layout"

import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      
      <h1>Hi There,</h1>
      <h2>I'm Dylan, a boss from LA!</h2>
      <p>Need a developer? <Link to="/contact">Contact Me.</Link></p>
      <p>Learn more <Link to="/about">about</Link> me.</p>
      <p>Check out my <Link to="/blog">blog.</Link></p>
     
    </Layout>
  )
}

export default IndexPage;