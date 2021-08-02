import React from 'react'
import Layout from "../components/layout"


import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout>
      
      <h1>Hi There,</h1>
      <h2>I'm Dylan, a software developer from LA!</h2>
      <p>Need a developer? <Link to="/contact">Contact Me.</Link></p>
      
     
    </Layout>
  )
}

export default IndexPage;